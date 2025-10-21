// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        
        // Update active link
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
    
    // Update header on scroll
    const header = document.querySelector('.header');
    if (window.pageYOffset > 100) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Legal Documents Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const docCards = document.querySelectorAll('.doc-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        docCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.5s ease';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Search Functionality
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        alert('Vui lòng nhập từ khóa tìm kiếm!');
        return;
    }
    
    let found = false;
    
    docCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const number = card.querySelector('.doc-number').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || number.includes(searchTerm)) {
            card.style.display = 'block';
            card.style.backgroundColor = '#fef3c7';
            found = true;
            
            // Scroll to legal docs section
            document.getElementById('legal-docs').scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Reset filter
            filterBtns.forEach(b => b.classList.remove('active'));
            filterBtns[0].classList.add('active');
            
            // Reset highlight after 3 seconds
            setTimeout(() => {
                card.style.backgroundColor = '';
            }, 3000);
        } else {
            card.style.display = 'none';
        }
    });
    
    if (!found) {
        alert('Không tìm thấy kết quả phù hợp với từ khóa: ' + searchTerm);
        // Show all documents
        docCards.forEach(card => {
            card.style.display = 'block';
        });
    }
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    
    // Validate form
    if (!name || !email || !phone || !service || !message) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Email không hợp lệ!');
        return;
    }
    
    // Validate phone
    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
        alert('Số điện thoại không hợp lệ!');
        return;
    }
    
    // Simulate form submission
    alert('Cảm ơn bạn đã liên hệ!\n\nThông tin của bạn:\n' +
          'Họ tên: ' + name + '\n' +
          'Email: ' + email + '\n' +
          'Số điện thoại: ' + phone + '\n' +
          'Dịch vụ: ' + service + '\n\n' +
          'Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất!');
    
    // Reset form
    contactForm.reset();
    
    // In a real application, you would send this data to a server
    // Example using fetch API:
    /*
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            service: service,
            message: message
        })
    })
    .then(response => response.json())
    .then(data => {
        alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.');
        contactForm.reset();
    })
    .catch(error => {
        alert('Có lỗi xảy ra. Vui lòng thử lại sau!');
    });
    */
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
});

// Observe doc cards
document.querySelectorAll('.doc-card').forEach(card => {
    observer.observe(card);
});

// Observe stat cards
document.querySelectorAll('.stat-card').forEach(card => {
    observer.observe(card);
});

// Add counter animation for stats
const statNumbers = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const finalValue = target.textContent;
            const isPercentage = finalValue.includes('%');
            const numericValue = parseInt(finalValue.replace(/\D/g, ''));
            
            let currentValue = 0;
            const increment = numericValue / 50;
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numericValue) {
                    target.textContent = finalValue;
                    clearInterval(timer);
                } else {
                    target.textContent = Math.floor(currentValue) + (isPercentage ? '%' : '+');
                }
            }, 30);
            
            statsObserver.unobserve(target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Add hover effect to service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Prevent default link behavior for doc links (since they're demo links)
document.querySelectorAll('.doc-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Tính năng xem chi tiết văn bản đang được phát triển.\n\nTrong phiên bản thực tế, link này sẽ dẫn đến trang chi tiết văn bản pháp luật.');
    });
});

console.log('Website Tư Vấn Luật Doanh Nghiệp đã sẵn sàng! ⚖️');

