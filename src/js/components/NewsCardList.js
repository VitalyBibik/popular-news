
class NewsCardList {
  constructor (newsCard, renderPosition, buttonMore, mainApi) {
    this.newsCard = newsCard;
    this.renderPosition = renderPosition;
    this.buttonMore = buttonMore;
    this.mainApi = mainApi;
    this.items = [];
    this.statusLogin = 0;
    this.keyword = '';
  }

  _addCard = (cardObj) => {
    return this.renderPosition.insertAdjacentHTML('beforeEnd', this.newsCard.getTemplate(cardObj, this.statusLogin, this.keyword) );
  }

  addListeners = () => {
    this.renderPosition.addEventListener('click', this.newsCard.saveHandler);
    this.renderPosition.addEventListener('click', this.newsCard.removeCard);
  }

    initCardList = (array) => {
    this._clearListCard();
    this.items = [];
    this.items.push(array);
    this._showMoreArticles();
    this.mainApi.getUserData().then((data) => {
      if (data !== undefined) {
        this.statusLogin = 1;
        this._showMoreArticles();
      } else {
        this.statusLogin = 0;
        this._showMoreArticles();
      }
    })
  }
  initCardListKeyWord = (word) => {
    this.keyword = '';
    this.keyword = word;
  }

    _showMoreArticles = () => {
    let currentIndex = 0;
    let currentLimit = 3;
    if ( this.items['0'].length !== 0) {
      this.buttonMore.classList.remove('search__button_status_disabled');
      currentLimit += currentIndex;
      for (currentIndex; currentIndex < currentLimit && currentIndex <  this.items[0].length; currentIndex++) {
        this._addCard(this.items[0][currentIndex]);
        this.items[0].shift();
      }
    } else {
      this.buttonMore.classList.add('search__button_status_disabled');
    }
  }

  buttonRender = (event) => {
    event.preventDefault();
    this._showMoreArticles();
  }
  _clearListCard = () => {
    while (this.renderPosition.firstChild) {
      this.renderPosition.removeChild(this.renderPosition.firstChild);
    }
  }
  getAllArticle = () => {
    this.mainApi.getArticles().then((data) => {
      this.statusLogin = 2;
      data.forEach((element) => {
        this._addCard(element);
      })
    }).catch((err) => {
      console.log(err);
    })
  }

}
export { NewsCardList };
