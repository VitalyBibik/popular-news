import { imageUrl, objCardStatus } from "../constants/constants";
import { setNormalData } from "../utils/setNormalData";

class NewsCard{
  constructor(mainApi) {
    this.mainApi = mainApi;
    this.searchKeyword = '';
  }
  getTemplate(cardObj, statusLogin, keyword) {
    this.searchKeyword = '';
    this.searchKeyword = keyword;
    const image = cardObj.urlToImage === null ? imageUrl : cardObj.urlToImage;
    if (statusLogin === objCardStatus.statusCardUnLogin){
      return `<div class="card">
                      <div class="card__photo">
                          <img src="${this._sanitizeHTMLUpdate(image)}" alt="${(this._sanitizeHTMLUpdate(cardObj.title))}" class="card__icon">
                          <div class="card__button-block">
                              <button class="button card__button-login card__button_status_disabled">Войдите, чтобы сохранять статьи</button>
                              <button class="button card__button" disabled></button>
                          </div>
                      </div>
                      <a href="${this._sanitizeHTMLUpdate(cardObj.url)}" target="_blank" class="card__link">
                        <span class="card__data">${this._sanitizeHTMLUpdate(setNormalData(cardObj.publishedAt))}</span>
                        <h3 class="card__title">${this._sanitizeHTMLUpdate(cardObj.title)}</h3>
                        <p class="card__text">${this._sanitizeHTMLUpdate(cardObj.description)}</p>
                        <span class="card__copyright">${this._sanitizeHTMLUpdate(cardObj.source.name)}</span>
                      </a>
           </div>`;
    }
    if (statusLogin === objCardStatus.statusCardLogin) {
      return `<div class="card">
                      <div class="card__photo">
                          <img src="${this._sanitizeHTMLUpdate(image)}" alt="${this._sanitizeHTMLUpdate(cardObj.title)}" class="card__icon">
                          <div class="card__button-block">
                              <button class="button card__button"></button>
                          </div>
                      </div>
                      <a href="${this._sanitizeHTMLUpdate(cardObj.url)}" target="_blank" class="card__link">
                        <span class="card__data">${this._sanitizeHTMLUpdate(setNormalData(cardObj.publishedAt))}</span>
                        <h3 class="card__title">${this._sanitizeHTMLUpdate(cardObj.title)}</h3>
                        <p class="card__text">${this._sanitizeHTMLUpdate(cardObj.description)}</p>
                        <span class="card__copyright">${this._sanitizeHTMLUpdate(cardObj.source.name)}</span>
                      </a>
           </div>`
    }
    if (statusLogin === objCardStatus.statusCardSave) {
      return `<div class="card"  id="${cardObj._id}">
          <div class="card__photo">
            <img src="${this._sanitizeHTMLUpdate(cardObj.image)}" alt="${(this._sanitizeHTMLUpdate(cardObj.title))}" class="card__icon">
              <div class="card__button-block">
                <button class="button card__button-login card__button_status_disabled card__button-login_fontSize_medium card__button-login_border_small card__button-login_size_small">Убрать из сохранённых</button>
                <button class="button card__button-del"></button>
              </div>
              <div class="card__button-blockWord">
                <button class="button card__button-word">${this._sanitizeHTMLUpdate(cardObj.keyword)}</button>
              </div>
          </div>
          <a href="${this._sanitizeHTMLUpdate(cardObj.link)}" target="_blank" class="card__link">
            <span class="card__data">${this._sanitizeHTMLUpdate(cardObj.date)}</span>
            <h3 class="card__title">${this._sanitizeHTMLUpdate(cardObj.title)}</h3>
            <p class="card__text">${this._sanitizeHTMLUpdate(cardObj.text)}</p>
            <span class="card__copyright">${this._sanitizeHTMLUpdate(cardObj.source)}</span>
          </a>
        </div>`
    }
  }
  _sanitizeHTMLUpdate(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
  }
  saveHandler = (event) => {
    if (event.target.classList.contains('card__button')) {
      const button = event.target.closest('.card__button');
      const card = event.target.closest('.card');
      const cardObj = {
        keyword: this.searchKeyword,
        title: card.querySelector('.card__title').textContent,
        text: card.querySelector('.card__text').textContent,
        date: card.querySelector('.card__data').textContent,
        source: card.querySelector('.card__copyright').textContent,
        link: card.querySelector('.card__link').getAttribute('href'),
        image: card.querySelector('.card__icon').getAttribute('src')
      }
      this.mainApi.createArticle(cardObj).then((data) =>{
        if (data !== undefined) {
          button.classList.add('card__button_status_marked');
        }
      }).catch((e) => {
        console.log(e);
      })
    }
  }
  // Удаление карты
  removeCard = (event) => {
    if (event.target.classList.contains('card__button-del')) {
      if (confirm("Вы уверены, что хотите удалить cтатью?")) {
        const card = event.target.closest('.card');
        this.mainApi.removeArticle(card.id).then((data) => {
          if (data !== undefined) {
            card.remove();
          }
        })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }
}
export { NewsCard }
