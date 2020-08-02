// import
import '../../pages/index.css';
import { options, errorMsg } from "../constants/constants";
import {
  rootCard,
  buttonAuth,
  popupSuccessSignUp,
  popupAuthUser,
  popupAuthButton,
  popupAuthButtonRegister,
  arrayNavigationsHeaderHide,
  navigationHeaderAuth,
  elHeaderForm,
  elHeaderButton,
  goodFindNews,
  badFindNews,
  buttonShowMore,
  rootResult,
  nav,
  navSection,
  navigation,
  arrayNavigationLi,
  mobileButton,
  overFlow,
  bodyOvHide,
  popupSignUp,
  popupSignUpButtonLogin,
  buttonSignUp,
  popupSuccessButton,
  headerLogo,
  cleanPopupAuth,
  cleanPopupSignUp
} from "../dom/dom";

import { NewsApi } from "../api/NewsApi";
import { MainApi } from "../api/MainApi";
import { PopupAuth } from "../components/PopupAuth";
import { PopupRegister } from "../components/PopupRegister";
import { PopupSuccess } from "../components/PopupSuccess";
import { Header } from "../components/Header";
import { SearchForm } from "../components/SearchForm";
import { NewsCard } from "../components/NewsCard";
import { NewsCardList } from "../components/NewsCardList";
import { MobileMenu } from "../components/MobileMenu";
import { FormValidator } from "../components/FormValidator";

const newsApi = new NewsApi(options);
const mainApi = new MainApi(options);

const header = new Header(arrayNavigationsHeaderHide, navigationHeaderAuth, mainApi, goodFindNews, badFindNews);

const popupSuccess = new PopupSuccess(popupSuccessSignUp);
const popupReg = new PopupRegister(popupSignUp, mainApi, popupSuccess.open);
const popupAuth = new PopupAuth(popupAuthUser, mainApi, header, popupAuthButtonRegister, popupSignUp);

const newsCard = new NewsCard(mainApi);
const newsCardList = new NewsCardList(newsCard, rootCard, buttonShowMore, mainApi);

const searchForm = new SearchForm(elHeaderForm, goodFindNews, badFindNews, newsApi, newsCardList, rootResult, buttonShowMore);
const mobileMenu = new MobileMenu(mobileButton, nav, navSection, navigation, arrayNavigationLi, overFlow, bodyOvHide, headerLogo);

const authValidator = new FormValidator(cleanPopupAuth, popupAuthButton, errorMsg);
const registerValidator = new FormValidator(cleanPopupSignUp, buttonSignUp, errorMsg);


buttonAuth.addEventListener('click', popupAuth.open);
popupAuthButton.addEventListener('click', popupAuth._login);
elHeaderButton.addEventListener('click', searchForm._findNews);
buttonShowMore.addEventListener('click', newsCardList.buttonRender);
buttonSignUp.addEventListener('click', popupReg._register);

authValidator.setEventListeners();
registerValidator.setEventListeners();


window.addEventListener('keydown', function closeFormByKeydown(event) {
    if (event.keyCode === 27) {
      popupAuth.removePopup();
      popupReg.removePopup();
      popupSuccess.removePopup();
    }
})
popupAuthButtonRegister.addEventListener('click', (e) => {
  popupAuth.close(e);
  popupReg.open();
});
popupSignUpButtonLogin.addEventListener('click', (e) => {
  popupReg.close(e);
  popupAuth.open();
})
popupSuccessButton.addEventListener('click', (e) => {
  popupSuccess.close(e);
  popupAuth.open();
})



newsCardList.addListeners();
mobileMenu.addListenersMobileMenu();
header.render();
