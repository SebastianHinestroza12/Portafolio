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
