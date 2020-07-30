
class MobileMenu {

  constructor(mobileButton, nav, navSection, navigation, arrayNavigationLi, overFlow, bodyOvHide, headerLogo) {
    this.mobileButton = mobileButton;
    this.nav = nav;
    this.navSection = navSection;
    this.navigation = navigation;
    this.arrayNavigationLi = arrayNavigationLi;
    this.overFlow = overFlow;
    this.bodyOvHide = bodyOvHide;
    this.headerLogo = headerLogo;
  }

  addListenersMobileMenu = () => {
    this.mobileButton.addEventListener('click', this.mobileMenuOpen);
  }

  mobileMenuOpen = (event) => {
    event.preventDefault();
    this._changeHeader(); // Меняем стили
  }

  _changeHeader = () => {
    this.mobileButton.classList.toggle('header__button_status_exit');
    this.nav.classList.toggle('nav_mobile');
    this.navSection.classList.toggle('nav__section_mobile');
    this.navigation.classList.toggle('navigation_mobile');
    this.overFlow.classList.toggle('overflow_mobile');
    this.bodyOvHide.classList.toggle('body-style_status_OvHidden');
    this.arrayNavigationLi.forEach((element) => {
      element.classList.toggle('navigation__li_mobile');
    })
    this.headerLogo.classList.toggle('header__logo_mobile');
  }


}
export { MobileMenu }
