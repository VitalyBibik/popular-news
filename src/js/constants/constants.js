import { config } from "../config/config";

export const msOnDay = 86400000;
export const pageSize = 100;
export const newsLang = 'ru';

export const options = JSON.parse( config ); // Настройка API

// Validator
export const errorMsg = {
  valueMissing: "Это обязательное поле",
  tooShort: "Должен быть от 8 символов",
  typeMismatch: "Неверный формат Email"
};
export const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
