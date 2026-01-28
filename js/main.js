// ========================================
// CONSCIOUS NURTURING - MAIN JAVASCRIPT
// Mental Health & Life Skills Education
// ========================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // MOBILE NAVIGATION TOGGLE
    // ========================================
    
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            this.classList.toggle('active');
        });
        
        // Close menu when clicking on a nav link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }
    
    // ========================================
    // SMOOTH SCROLLING FOR ANCHOR LINKS
    // ========================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // ========================================
    // CONTACT FORM VALIDATION
    // ========================================
    
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous error messages
            clearErrors();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validation flags
            let isValid = true;
            
            // Validate name
            if (name === '') {
                showError('nameError', 'Please enter your full name');
                isValid = false;
            } else if (name.length < 2) {
                showError('nameError', 'Name must be at least 2 characters long');
                isValid = false;
            } else if (!/^[a-zA-Z\s]+$/.test(name)) {
                showError('nameError', 'Name should contain only letters and spaces');
                isValid = false;
            }
            
            // Validate email
            if (email === '') {
                showError('emailError', 'Please enter your email address');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('emailError', 'Please enter a valid email address');
                isValid = false;
            }
            
            // Validate phone
            if (phone === '') {
                showError('phoneError', 'Please enter your phone number');
                isValid = false;
            } else if (!isValidPhone(phone)) {
                showError('phoneError', 'Please enter a valid phone number (10 digits)');
                isValid = false;
            }
            
            // Validate message
            if (message === '') {
                showError('messageError', 'Please enter your message');
                isValid = false;
            } else if (message.length < 10) {
                showError('messageError', 'Message must be at least 10 characters long');
                isValid = false;
            }
            
            // If form is valid, show success message
            if (isValid) {
                // In a real application, you would send the form data to a server here
                // For now, we'll just show a success message
                
                // Reset form
                contactForm.reset();
                
                // Show success message
                const successMessage = document.getElementById('formSuccess');
                if (successMessage) {
                    successMessage.style.display = 'block';
                    
                    // Scroll to success message
                    successMessage.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                    
                    // Hide success message after 10 seconds
                    setTimeout(function() {
                        successMessage.style.display = 'none';
                    }, 10000);
                }
            } else {
                // Scroll to first error
                const firstError = document.querySelector('.error-message:not(:empty)');
                if (firstError) {
                    firstError.parentElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }
            }
        });
        
        // Real-time validation on blur
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const messageInput = document.getElementById('message');
        
        if (nameInput) {
            nameInput.addEventListener('blur', function() {
                const value = this.value.trim();
                if (value && value.length < 2) {
                    showError('nameError', 'Name must be at least 2 characters long');
                } else if (value && !/^[a-zA-Z\s]+$/.test(value)) {
                    showError('nameError', 'Name should contain only letters and spaces');
                } else {
                    clearError('nameError');
                }
            });
        }
        
        if (emailInput) {
            emailInput.addEventListener('blur', function() {
                const value = this.value.trim();
                if (value && !isValidEmail(value)) {
                    showError('emailError', 'Please enter a valid email address');
                } else {
                    clearError('emailError');
                }
            });
        }
        
        if (phoneInput) {
            phoneInput.addEventListener('blur', function() {
                const value = this.value.trim();
                if (value && !isValidPhone(value)) {
                    showError('phoneError', 'Please enter a valid phone number (10 digits)');
                } else {
                    clearError('phoneError');
                }
            });
        }
        
        if (messageInput) {
            messageInput.addEventListener('blur', function() {
                const value = this.value.trim();
                if (value && value.length < 10) {
                    showError('messageError', 'Message must be at least 10 characters long');
                } else {
                    clearError('messageError');
                }
            });
        }
    }
    
    // ========================================
    // HELPER FUNCTIONS
    // ========================================
    
    /**
     * Show error message for a specific field
     */
    function showError(errorId, message) {
        const errorElement = document.getElementById(errorId);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
            
            // Add error styling to input
            const input = errorElement.previousElementSibling;
            if (input && input.tagName !== 'LABEL') {
                input.style.borderColor = '#E57373';
            }
        }
    }
    
    /**
     * Clear specific error message
     */
    function clearError(errorId) {
        const errorElement = document.getElementById(errorId);
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
            
            // Remove error styling from input
            const input = errorElement.previousElementSibling;
            if (input && input.tagName !== 'LABEL') {
                input.style.borderColor = '#E1E8ED';
            }
        }
    }
    
    /**
     * Clear all error messages
     */
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => {
            error.textContent = '';
            error.style.display = 'none';
        });
        
        // Reset input border colors
        const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');
        inputs.forEach(input => {
            input.style.borderColor = '#E1E8ED';
        });
    }
    
    /**
     * Validate email format
     */
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    /**
     * Validate phone number (Indian format)
     */
    function isValidPhone(phone) {
        // Remove all non-digit characters
        const cleanPhone = phone.replace(/\D/g, '');
        
        // Check if it's 10 digits (with or without country code)
        // Accepts: 1234567890, +911234567890, 911234567890
        return /^(\+?91)?[6-9]\d{9}$/.test(cleanPhone);
    }
    
    // ========================================
    // SCROLL TO TOP BUTTON (Optional Enhancement)
    // ========================================
    
    // Create scroll to top button dynamically
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-to-top';
    scrollButton.setAttribute('aria-label', 'Scroll to top');
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #4A90E2;
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        display: none;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(scrollButton);
    
    // Show/hide scroll button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });
    
    // Scroll to top when button is clicked
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect for scroll button
    scrollButton.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#7CB342';
        this.style.transform = 'translateY(-3px)';
    });
    
    scrollButton.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#4A90E2';
        this.style.transform = 'translateY(0)';
    });
    
    // ========================================
    // ACCESSIBILITY ENHANCEMENTS
    // ========================================
    
    // Add keyboard navigation for hamburger menu
    if (hamburger) {
        hamburger.setAttribute('role', 'button');
        hamburger.setAttribute('aria-label', 'Toggle navigation menu');
        hamburger.setAttribute('aria-expanded', 'false');
        
        hamburger.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
        });
        
        // Allow Enter/Space to toggle menu
        hamburger.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }
    
    // ========================================
    // FORM INPUT ENHANCEMENTS
    // ========================================
    
    // Auto-format phone number input
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            // Remove all non-digit characters
            let value = e.target.value.replace(/\D/g, '');
            
            // Limit to 10 digits
            if (value.length > 10) {
                value = value.slice(0, 10);
            }
            
            // Format as XXX-XXX-XXXX
            if (value.length > 6) {
                value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6);
            } else if (value.length > 3) {
                value = value.slice(0, 3) + '-' + value.slice(3);
            }
            
            e.target.value = value;
        });
    }
    
    // Character counter for message textarea
    const messageTextarea = document.getElementById('message');
    if (messageTextarea) {
        const charCounter = document.createElement('div');
        charCounter.style.cssText = 'text-align: right; font-size: 0.85rem; color: #5A6C7D; margin-top: 5px;';
        messageTextarea.parentElement.appendChild(charCounter);
        
        function updateCharCounter() {
            const length = messageTextarea.value.length;
            const minLength = 10;
            const remaining = Math.max(0, minLength - length);
            
            if (length < minLength) {
                charCounter.textContent = `${remaining} more character${remaining !== 1 ? 's' : ''} required (minimum ${minLength})`;
                charCounter.style.color = '#E57373';
            } else {
                charCounter.textContent = `${length} characters`;
                charCounter.style.color = '#66BB6A';
            }
        }
        
        messageTextarea.addEventListener('input', updateCharCounter);
        updateCharCounter();
    }
    
    // ========================================
    // CONSOLE MESSAGE
    // ========================================
    
    console.log('%cConscious Nurturing', 'color: #4A90E2; font-size: 24px; font-weight: bold;');
    console.log('%cMental Health & Life Skills Education for School Students', 'color: #7CB342; font-size: 14px;');
    console.log('%cWebsite by Conscious Nurturing Team', 'color: #5A6C7D; font-size: 12px;');
    
});

// ========================================
// ADDITIONAL UTILITY FUNCTIONS
// ========================================

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Debounce function for performance optimization
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
