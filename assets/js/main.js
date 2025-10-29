// Tech Point FZE - Main JavaScript File

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===========================
    // NAVIGATION
    // ===========================
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            const icon = this.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });
        
        // Close mobile menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
    
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle smooth scroll for section links (not just #)
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const navbarHeight = document.getElementById('navbar').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow when scrolled
        if (currentScroll > 50) {
            navbar.classList.add('shadow-lg');
        } else {
            navbar.classList.remove('shadow-lg');
        }
        
        lastScroll = currentScroll;
    });
    
    // ===========================
    // PRODUCT FILTERING
    // ===========================
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const brand = this.getAttribute('data-brand');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            productCards.forEach(card => {
                if (brand === 'all' || card.getAttribute('data-brand') === brand) {
                    card.style.display = 'block';
                    // Add fade-in animation
                    card.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // ===========================
    // SHOW MORE PRODUCTS
    // ===========================
    
    const showMoreBtn = document.getElementById('show-more-btn');
    const moreProducts = document.querySelectorAll('.more-products');
    let showingMore = false;
    
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function() {
            showingMore = !showingMore;
            
            moreProducts.forEach(product => {
                if (showingMore) {
                    product.classList.remove('hidden');
                    product.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    product.classList.add('hidden');
                }
            });
            
            // Update button text and icon
            if (showingMore) {
                this.innerHTML = '<i class="fas fa-chevron-up mr-2"></i>Show Less Products';
            } else {
                this.innerHTML = '<i class="fas fa-chevron-down mr-2"></i>Show More Products';
            }
            
            // Scroll to products section if hiding
            if (!showingMore) {
                const productsSection = document.getElementById('products');
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = productsSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // ===========================
    // INQUIRY MODAL
    // ===========================
    
    const inquireButtons = document.querySelectorAll('.inquire-btn');
    const inquiryModal = document.getElementById('inquiry-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const modalProductName = document.getElementById('modal-product-name');
    const modalProductInput = document.getElementById('modal-product');
    
    // Open modal when clicking "Inquire Now" button
    inquireButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-product');
            modalProductName.textContent = productName;
            modalProductInput.value = productName;
            inquiryModal.classList.remove('hidden');
            inquiryModal.classList.add('flex');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });
    
    // Close modal
    function closeModal() {
        inquiryModal.classList.add('hidden');
        inquiryModal.classList.remove('flex');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }
    
    // Close modal when clicking outside
    inquiryModal.addEventListener('click', function(e) {
        if (e.target === inquiryModal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !inquiryModal.classList.contains('hidden')) {
            closeModal();
        }
    });
    
    // ===========================
    // FORM VALIDATION
    // ===========================
    
    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    
    if (contactForm) {
        emailInput.addEventListener('blur', function() {
            if (this.value && !validateEmail(this.value)) {
                emailError.classList.remove('hidden');
                this.classList.add('border-red-500');
            } else {
                emailError.classList.add('hidden');
                this.classList.remove('border-red-500');
            }
        });
        
        contactForm.addEventListener('submit', function(e) {
            // Validate email
            if (!validateEmail(emailInput.value)) {
                e.preventDefault();
                emailError.classList.remove('hidden');
                emailInput.classList.add('border-red-500');
                emailInput.focus();
                return false;
            }
            
            // Show success toast
            showSuccessToast();
        });
    }
    
    // Modal Form Validation
    const modalForm = document.getElementById('modal-form');
    const modalEmailInput = document.getElementById('modal-email');
    
    if (modalForm) {
        modalForm.addEventListener('submit', function(e) {
            // Validate email
            if (!validateEmail(modalEmailInput.value)) {
                e.preventDefault();
                alert('Please enter a valid email address.');
                modalEmailInput.focus();
                return false;
            }
            
            // Close modal and show success toast
            closeModal();
            showSuccessToast();
        });
    }
    
    // ===========================
    // SUCCESS TOAST
    // ===========================
    
    function showSuccessToast() {
        const toast = document.getElementById('success-toast');
        
        if (toast) {
            toast.classList.remove('hidden');
            toast.style.animation = 'slideInRight 0.5s ease-in-out';
            
            // Hide after 5 seconds
            setTimeout(function() {
                toast.style.animation = 'slideOutRight 0.5s ease-in-out';
                setTimeout(function() {
                    toast.classList.add('hidden');
                }, 500);
            }, 5000);
        }
    }
    
    // ===========================
    // PARALLAX EFFECT ON HERO
    // ===========================
    
    const heroBg = document.querySelector('.hero-bg');
    
    window.addEventListener('scroll', function() {
        if (heroBg && window.pageYOffset < window.innerHeight) {
            const scrolled = window.pageYOffset;
            heroBg.style.transform = 'translateY(' + (scrolled * 0.5) + 'px)';
        }
    });
    
    // ===========================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ===========================
    
    // Observe elements for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for animations
    const animatedSections = document.querySelectorAll('section');
    animatedSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
    
    // ===========================
    // ACTIVE NAV LINK HIGHLIGHT
    // ===========================
    
    // Highlight active section in navigation
    const sections = document.querySelectorAll('section[id]');
    const navLinksList = document.querySelectorAll('.nav-link');
    
    function highlightActiveNav() {
        const scrollPosition = window.pageYOffset + navbar.offsetHeight + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinksList.forEach(link => {
                    link.classList.remove('text-gray-600', 'font-bold');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('text-gray-600', 'font-bold');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveNav);
    
    // ===========================
    // LAZY LOADING ENHANCEMENT
    // ===========================
    
    // Add loading placeholder for images
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease-in-out';
    });
    
    // ===========================
    // PREVENT FORM RESUBMISSION
    // ===========================
    
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }
    
});

// ===========================
// UTILITY FUNCTIONS
// ===========================

// Debounce function for performance optimization
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

// ===========================
// CONSOLE WELCOME MESSAGE
// ===========================

console.log('%c🚀 Tech Point FZE', 'color: #4B5563; font-size: 24px; font-weight: bold;');
console.log('%cYour Trusted Wholesale Partner for Premium Mobile Phones', 'color: #15803D; font-size: 14px;');
console.log('%cWebsite: https://techpointfze.com', 'color: #6B7280; font-size: 12px;');
console.log('%cEmail: info@techpointfze.com', 'color: #6B7280; font-size: 12px;');
