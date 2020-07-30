import { config } from "../config/config";

export const msOnDay = 86400000;
export const pageSize = 100;
export const newsLang = 'ru';
export const imageUrl = 'https://via.placeholder.com/300';
export const options = JSON.parse( config ); // Настройка API
export const objCardStatus = {
  statusCardUnLogin:0,
  statusCardLogin:1,
  statusCardSave:2,
}
export const nullResult = 0;
export const firstIndexArray = 0;
export const saveArticleWord = {
  firstWord:0,
  secondWord:1,
  thirdWord:2
}

// Validator
export const errorMsg = {
  valueMissing: "Это обязательное поле",
  tooShort: "Должен быть от 8 символов",
  typeMismatch: "Неверный формат Email"
};
export const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
