const navSwitcher = document.querySelector('.nav__switcher--js')

navSwitcher.addEventListener('click', (e) =>{
  const navigationList = document.querySelector('.nav__text--js');
  navigationList.classList.toggle('nav__text--visible');
});
navSwitcher.addEventListener('click', (e) =>{
  const navigationList = document.querySelector('.marticle__header--js');
  navigationList.classList.toggle('marticle__header--padding');
  });