const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Navigation bar 
const navItems = Object.values(siteContent.nav)
console.log(navItems)
const navLinks = document.querySelectorAll('a');
navLinks.forEach((item, index) => item.innerText = navItems[index])

// Change color to green
navLinks.forEach((item) => item.style.color = 'green')

// appendChild() and prepend()
const nav = document.querySelector('nav');

const navOne = document.createElement('a');
navOne.textContent = "New Item 1";
nav.appendChild(navOne);

const navTwo = document.createElement('a');
navTwo.textContent = "New Item 2";
nav.prepend(navTwo);

const navImg = document.querySelector('nav');
navImg.src = siteContent.nav["img-src"];

// Adding CTA content
const text = document.querySelector('h1');
text.innerText = siteContent.cta.h1;

const getStarted = document.querySelector('button');
getStarted.innerText = siteContent.cta.button;

const ctaImg = document.querySelector('.cta img');
ctaImg.src = siteContent.cta["img-src"];

// Adding main content
const featuresH4 = document.querySelectorAll('.main-content h4');
featuresH4[0].innerText = siteContent["main-content"]["features-h4"];
featuresH4[1].innerText = siteContent["main-content"]["about-h4"];
featuresH4[2].innerText = siteContent["main-content"]["services-h4"];
featuresH4[3].innerText = siteContent["main-content"]["product-h4"];
featuresH4[4].innerText = siteContent["main-content"]["vision-h4"];

const mainContent = document.querySelectorAll('.main-content p');
mainContent[0].innerText = siteContent["main-content"]["features-content"];
mainContent[1].innerText = siteContent["main-content"]["about-content"];
mainContent[2].innerText = siteContent["main-content"]["services-content"];
mainContent[3].innerText = siteContent["main-content"]["product-content"];
mainContent[4].innerText = siteContent["main-content"]["vision-content"];

const mainContentImg = document.querySelector('.main-content img');
mainContentImg.src = siteContent["main-content"]["middle-img-src"];

// Adding contact content
const contactH4 = document.querySelector('.contact h4');
contactH4.innerText = siteContent.contact["contact-h4"];

const contactValues = Object.values(siteContent.contact);
const mainContact = document.querySelectorAll('.contact p');
mainContact.forEach((item, index) => item.innerText = contactValues[index + 1]);

// Adding footer content
