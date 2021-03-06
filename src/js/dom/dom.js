
export const rootCard = document.querySelector('.result__card'); // Область карточек
export const rootResult = document.querySelector('.result') // Секция карточек
export const headerLogo = document.querySelector('.header__logo'); // Лого Хэдер

/* Popup Auth */
export const buttonAuth = document.querySelector('#button-auth'); // Кнопка авторизации на главной странице
export const popupAuthUser = document.querySelector('#popup-auth'); // Кнопка авторизации на главной странице
export const popupAuthButton = document.querySelector('#submitSignIn'); // Кнопка Авторизации в форме входа

export const popupAuthButtonRegister = document.querySelector('#moveToRegister'); // Кнопка Перехода на регистрацию в форме входа
export const popupSignUpButtonLogin = document.querySelector('#moveToLogin'); // Кнопка Перехода на регистрацию в форме входа
export const cleanPopupAuth = document.querySelector('#signIn');

/* Popup Success */
export const popupSuccessSignUp = document.querySelector('.popup__success');
export const popupSuccessButton = document.querySelector('#successGoToLogin');



/* Mobile */
export const mobileButton = document.querySelector('.header__button'); // Кнопка Входа в моб меню
/* Мобильное меню классы + в конце класс для запрета прокрутки */
export const nav = document.querySelector('.nav');
export const navSection = document.querySelector('.nav__section');
export const navigation = document.querySelector('.navigation');
export const arrayNavigationLi = document.querySelectorAll('.navigation__li');
export const overFlow = document.querySelector('.overflow');
export const bodyOvHide = document.querySelector('.body-style');

/* Popup Register */
export const popupSignUp = document.querySelector('.popup__register');
export const buttonSignUp = document.querySelector('#submitSignUp');
export const cleanPopupSignUp = document.querySelector('#signUp')

/* Header */
export const arrayNavigationsHeaderHide = document.querySelectorAll('.navigation__li_status_unlogin') // Навигация хэдер cкрытая
export const navigationHeaderAuth = document.querySelector('.navigation__li_status_needAuth') // Навигация хэдер кнопка
export const headerStyle = document.querySelector('.header'); // Хэдер весь вместе с модификатором темы NOT USED

/* Header form */
export const elHeaderForm = document.querySelector('.header__search');
export const elHeaderButton = document.querySelector('.search__button');

/* Block good Find */
export const goodFindNews = document.querySelector('.find ');
/* Block bad Find */
export const badFindNews = document.querySelector('.empty');

/* Button More */
export const buttonShowMore = document.querySelector('#showMore');

/* Analytics */
export const articleTitle = document.querySelector('.articles__title');
export const articleKeyWordsArray = document.querySelectorAll('.articles__main-word');
