
//? MULTIIDIOMA ESPAÑOL, INGLES

const flagsElement = document.getElementById('flags');

const textsToChange = document.querySelectorAll('[data-section]')


const changeLanguage = async (language) => {
  const response = await fetch(`./language/${language}.json`);
  const text = await response.json();
  // console.log(text);

  for (const textToChange of textsToChange) {
    // console.log(textToChange);
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;

    // console.log(section, value);
    textToChange.innerHTML = text[section][value];
  }

}

flagsElement.addEventListener('click', (e) => {
  changeLanguage(e.target.parentElement.dataset.language);
});



//! DARKMODE

const bdark = document.getElementById('bdark');
const body = document.querySelector('body');
const load = () => {
  const darkMode = localStorage.getItem('darkmode');

  if (!darkMode) {
    store('false');
  }
  else if (darkMode == 'true') {
    body.classList.add('darkmode');
  }
}

const store = (value) => {
  localStorage.setItem('darkmode', value);
}

load();

bdark.addEventListener('click', (e) => {
  body.classList.toggle('darkmode')
  store(body.classList.contains('darkmode'));
});



// SCROLLREVEAL

ScrollReveal().reveal('.info-content ', { duration: 3000, distance: '180px', origin: 'left' });

// ScrollReveal().reveal('.about-info ', { duration: 3000, distance: '180px', origin: 'left' });

// ScrollReveal().reveal('.cen ', { duration: 3000, distance: '180px', origin: 'left', scale: 0.85 });

// ScrollReveal().reveal('.container-skill ', { duration: 3000, distance: '400px', origin: 'left', scale: 0.85 });

// ScrollReveal().reveal('.project ', { duration: 3000, distance: '400px', origin: 'left', scale: 0.85 });

// ScrollReveal().reveal('.contact-section', { duration: 3000, distance: '400px', origin: 'left', scale: 0.85 });



// RESPONSIVE

let menu = document.getElementById('menu');
let menuOpen = document.getElementById('open-menu');
let menuClose = document.getElementById('close-menu');


const toggle = () => {
  menu.classList.toggle('show-menu');
  if (menu.classList.contains('show-menu')) {
    menuOpen.style.display = 'none';
    menuClose.style.display = 'block';
  } else {
    menuOpen.style.display = 'block';
    menuClose.style.display = 'none';

  }
}

menuOpen.addEventListener('click', toggle);
menuClose.addEventListener('click', toggle);

