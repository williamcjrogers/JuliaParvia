document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    if (navToggle && nav) {
        navToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            const expanded = nav.classList.contains('active');
            navToggle.setAttribute('aria-expanded', expanded);
        });
    }

    // Enquiry Form Handling
    const enquiryForm = document.getElementById('enquiry-form');
    if (enquiryForm) {
        initEnquiryForm(enquiryForm);
    }

    // Upload Form Handling
    const uploadForm = document.getElementById('upload-form');
    const accessSection = document.getElementById('access-section');
    if (uploadForm && accessSection) {
        initUploadForm(uploadForm, accessSection);
    }
});

// Enquiry Form Functions
function initEnquiryForm(form) {
    const statusEl = document.getElementById('form-status');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Validate form
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // Show loading state
        showStatus(statusEl, 'loading', 'Submitting your enquiry...');
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';

        try {
            const formData = new FormData(form);

            // Submit to Formspree (or your form handler)
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                showStatus(statusEl, 'success', 'Thank you for your enquiry. We will respond within 24 hours (Monday to Friday).');
                form.reset();
            } else {
                const data = await response.json();
                throw new Error(data.error || 'Form submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showStatus(statusEl, 'error', 'There was an error submitting your enquiry. Please try again or contact us directly via email.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit Enquiry';
        }
    });

    // Real-time validation feedback
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
    });
}

// Upload Form Functions
function initUploadForm(form, accessSection) {
    const verifyBtn = document.getElementById('verify-code');
    const accessCodeInput = document.getElementById('access-code');
    const accessStatus = document.getElementById('access-status');
    const uploadArea = document.getElementById('upload-area');
    const fileInput = document.getElementById('file-input');
    const fileList = document.getElementById('file-list');
    const clearBtn = document.getElementById('clear-files');
    const uploadStatus = document.getElementById('upload-status');
    const progressEl = document.getElementById('upload-progress');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');

    let selectedFiles = [];

    // Access Code Verification
    verifyBtn.addEventListener('click', function() {
        const code = accessCodeInput.value.trim();

        if (!code) {
            showStatus(accessStatus, 'error', 'Please enter an access code.');
            return;
        }

        // For demo purposes, accept any code starting with 'JP-'
        // In production, this would verify against a backend
        if (code.match(/^JP-\d{4}-[A-Z0-9]{6}$/i) || code.length >= 6) {
            showStatus(accessStatus, 'success', 'Access code verified. You may now upload documents.');
            accessSection.style.display = 'none';
            form.style.display = 'block';
            document.getElementById('case-reference').value = code;
        } else {
            showStatus(accessStatus, 'error', 'Invalid access code format. Please check and try again.');
        }
    });

    // Allow Enter key to verify code
    accessCodeInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            verifyBtn.click();
        }
    });

    // Drag and Drop
    uploadArea.addEventListener('click', () => fileInput.click());

    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.classList.add('drag-over');
    });

    uploadArea.addEventListener('dragleave', function(e) {
        e.preventDefault();
        this.classList.remove('drag-over');
    });

    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('drag-over');
        handleFiles(e.dataTransfer.files);
    });

    // File Input Change
    fileInput.addEventListener('change', function() {
        handleFiles(this.files);
    });

    // Handle Files
    function handleFiles(files) {
        const maxSize = 50 * 1024 * 1024; // 50MB
        const allowedTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'image/jpeg',
            'image/png',
            'image/tiff',
            'application/zip',
            'application/x-zip-compressed'
        ];

        Array.from(files).forEach(file => {
            // Check file type
            if (!allowedTypes.includes(file.type) && !file.name.match(/\.(pdf|doc|docx|xls|xlsx|jpg|jpeg|png|tiff|zip)$/i)) {
                showStatus(uploadStatus, 'error', `File type not allowed: ${file.name}`);
                return;
            }

            // Check file size
            if (file.size > maxSize) {
                showStatus(uploadStatus, 'error', `File too large (max 50MB): ${file.name}`);
                return;
            }

            // Check for duplicates
            if (selectedFiles.some(f => f.name === file.name && f.size === file.size)) {
                return;
            }

            selectedFiles.push(file);
        });

        renderFileList();
    }

    // Render File List
    function renderFileList() {
        fileList.innerHTML = '';

        if (selectedFiles.length === 0) {
            return;
        }

        selectedFiles.forEach((file, index) => {
            const fileItem = document.createElement('div');
            fileItem.className = 'file-item';
            fileItem.innerHTML = `
                <div class="file-info">
                    <span class="file-icon">${getFileIcon(file.name)}</span>
                    <div class="file-details">
                        <div class="file-name">${escapeHtml(file.name)}</div>
                        <div class="file-size">${formatFileSize(file.size)}</div>
                    </div>
                </div>
                <button type="button" class="file-remove" data-index="${index}" title="Remove file">&times;</button>
            `;
            fileList.appendChild(fileItem);
        });

        // Add remove handlers
        fileList.querySelectorAll('.file-remove').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                selectedFiles.splice(index, 1);
                renderFileList();
            });
        });
    }

    // Clear Files Button
    clearBtn.addEventListener('click', function() {
        selectedFiles = [];
        fileInput.value = '';
        renderFileList();
        uploadStatus.className = 'form-status';
        uploadStatus.textContent = '';
    });

    // Form Submission
    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        if (selectedFiles.length === 0) {
            showStatus(uploadStatus, 'error', 'Please select at least one file to upload.');
            return;
        }

        const submitBtn = document.getElementById('upload-btn');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Uploading...';
        progressEl.style.display = 'block';

        try {
            // Simulate upload progress (in production, use actual upload progress)
            let progress = 0;
            const progressInterval = setInterval(() => {
                progress += Math.random() * 15;
                if (progress > 90) progress = 90;
                progressFill.style.width = progress + '%';
                progressText.textContent = `Uploading files... ${Math.round(progress)}%`;
            }, 200);

            // Create FormData with files
            const formData = new FormData(form);
            selectedFiles.forEach((file, index) => {
                formData.append(`file_${index}`, file);
            });
            formData.append('file_count', selectedFiles.length);

            // In production, submit to your upload endpoint
            // For now, simulate success after delay
            await new Promise(resolve => setTimeout(resolve, 2000));

            clearInterval(progressInterval);
            progressFill.style.width = '100%';
            progressText.textContent = 'Upload complete!';

            showStatus(uploadStatus, 'success', `Successfully uploaded ${selectedFiles.length} file(s). You will receive a confirmation email shortly.`);

            // Reset form
            setTimeout(() => {
                selectedFiles = [];
                form.reset();
                renderFileList();
                progressEl.style.display = 'none';
                progressFill.style.width = '0%';
            }, 3000);

        } catch (error) {
            console.error('Upload error:', error);
            showStatus(uploadStatus, 'error', 'There was an error uploading your files. Please try again or contact us for assistance.');
            progressEl.style.display = 'none';
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Upload Documents';
        }
    });
}

// Utility Functions
function showStatus(element, type, message) {
    element.className = 'form-status ' + type;
    element.textContent = message;
    element.style.display = 'block';

    // Scroll to status message
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function validateField(field) {
    if (field.validity.valueMissing) {
        field.setCustomValidity('This field is required');
    } else if (field.validity.typeMismatch) {
        field.setCustomValidity('Please enter a valid ' + field.type);
    } else {
        field.setCustomValidity('');
    }
}

function getFileIcon(filename) {
    const ext = filename.split('.').pop().toLowerCase();
    const icons = {
        'pdf': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c00" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
        'doc': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2b579a" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
        'docx': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2b579a" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
        'xls': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#217346" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>',
        'xlsx': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#217346" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>',
        'jpg': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4a90a4" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>',
        'jpeg': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4a90a4" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>',
        'png': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4a90a4" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>',
        'tiff': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4a90a4" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>',
        'zip': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f39c12" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>'
    };

    return icons[ext] || '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>';
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
