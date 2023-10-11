/*============Scroll sections for active link===========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*============Scroll sections for active link===========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');  
            });
        };
    });
    /*============Sticky Navbar===========*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*============Remove toggle icon and navbar when clicking the navbar link (scroll)===========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*============Scroll Reveal===========*/
ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*============ Typed JS ===========*/
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Software QA Tester'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*============ About Tab links ===========*/
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Handle submit buttom for contact forms

const scriptURL = 'https://script.google.com/macros/s/AKfycbzY7bvIAljq5rVkTl6VRTWXiMRKFnGk9NXdI96zo6Qw9-h-nE8TcVGRXTHdb2U8o3kDKQ/exec'
const form = document.forms['submit-to-google-sheet']
    form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    msg.innerHTML = "Message sent successfully!"
                    setTimeout(function(){
                        msg.innerHTML = ""
                    }, 3000)
                    form.reset()
                })
                .catch(error => console.error('Error!', error.message))
            })    
            
