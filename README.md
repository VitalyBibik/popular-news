
# News Explorer Frontend
В рамках курса "Веб-разработка" в Яндекс.Практикуме

#### Описание
Версия 1.0.0

Дипломный проект курса: двустраничный сайт, на котором можно искать новости из агрегатора NewsAPI и сохранять их в своем аккаунте.

#### Функционал проекта
На первой странице:
- регистрация, вход и выход пользователя;
- поиск новостей по ключевым словам;
- сохранение найденный статей в своем аккаунте;
- удаление ранее сохраненных статей.

На второй странице:
- выход пользователя;
- удаление ранее сохраненных статей.

#### Используемые технологии
- нативный JavaScript
- HTML
- CSS
- WebPack


# News Explorer Backend

#### Описание
- Дипломный проект курса: сайт для поиска и хранения новостных статей

- Компонент: бэкенд

- Версия: 0.0.1

#### Функционал проекта
Сервер обрабатывает запросы на создание пользователя (_POST /signup_) и вход в систему (_POST /signin_), с выдачей токена для быстрого входа), а также запросы с токеном к следующим страницам:
   - GET /users/me (возвращает информацию о пользователе),
   - GET /articles (возвращает все сохраненные пользователем статьи),
   - POST /articles (создаёт статью),
   - DELETE /articles/:articleId (удаляет статью, при условии что она принадлежит пользователю),
   
а также запросы по несуществующим адресам, отправляя в ответ JSON-объекты.

#### api.backend-mesto.xyz недоступно сейчас
#### www.api.backend-mesto.xyz недоступно сейчас
#### Используемые технологии
- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemon
- Eslint
- bcrypt
- JSON Web Token
- Сelebrate и Joi
- Winston
- Helmet

#### Как воспользоваться проектом
Обращаться к роутам проекта, указывая в теле запросов необходимые данные.
