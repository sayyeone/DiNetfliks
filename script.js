// Get elements
const loginBtn = document.getElementById('loginBtn');
const heroLoginBtn = document.getElementById('heroLoginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const loginForm = document.getElementById('loginForm');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');

// Open modal
function openModal() {
    loginModal.classList.remove('hidden');
    loginModal.classList.add('show');
}

// Close modal
function closeModalFunc() {
    loginModal.classList.add('hidden');
    loginModal.classList.remove('show');
    // Reset form
    loginForm.reset();
    nameError.classList.add('hidden');
    emailError.classList.add('hidden');
}

// Event listeners for opening modal
loginBtn.addEventListener('click', openModal);
heroLoginBtn.addEventListener('click', openModal);

// Event listener for closing modal
closeModal.addEventListener('click', closeModalFunc);

// Close modal when clicking outside
loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        closeModalFunc();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !loginModal.classList.contains('hidden')) {
        closeModalFunc();
    }
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Reset errors
    nameError.classList.add('hidden');
    emailError.classList.add('hidden');
    
    let isValid = true;
    
    // Validate name
    const name = nameInput.value.trim();
    if (name === '') {
        nameError.classList.remove('hidden');
        nameInput.classList.add('border-red-500');
        isValid = false;
    } else {
        nameInput.classList.remove('border-red-500');
    }
    
    // Validate email
    const email = emailInput.value.trim();
    if (email === '' || !isValidEmail(email)) {
        emailError.classList.remove('hidden');
        emailInput.classList.add('border-red-500');
        isValid = false;
    } else {
        emailInput.classList.remove('border-red-500');
    }
    
    // If valid, show success and close modal
    if (isValid) {
        alert(`Welcome, ${name}! You have successfully signed in with ${email}`);
        closeModalFunc();
    }
});

// Remove error on input
nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() !== '') {
        nameError.classList.add('hidden');
        nameInput.classList.remove('border-red-500');
    }
});

emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() !== '' && isValidEmail(emailInput.value.trim())) {
        emailError.classList.add('hidden');
        emailInput.classList.remove('border-red-500');
    }
});

// FAQ Accordion functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('svg');
        
        // Toggle current FAQ
        answer.classList.toggle('hidden');
        icon.classList.toggle('rotate-45');
        
        // Optional: Close other FAQs when opening one
        faqQuestions.forEach(otherQuestion => {
            if (otherQuestion !== question) {
                const otherAnswer = otherQuestion.nextElementSibling;
                const otherIcon = otherQuestion.querySelector('svg');
                otherAnswer.classList.add('hidden');
                otherIcon.classList.remove('rotate-45');
            }
        });
    });
});