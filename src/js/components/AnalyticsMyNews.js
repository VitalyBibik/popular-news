import {saveArticleWord} from "../constants/constants";

class AnalyticsMyNews {
  constructor (mainApi, articleTitle, articleKeyWordsArray) {
    this.mainApi = mainApi;
    this.articleTitle = articleTitle;
    this.articleKeyWordsArray = articleKeyWordsArray;
    this.countArticle = 0;
    this.keywordsArray = [];
  }
  getUserInfo = () => {
    this.mainApi.getUserData().then((data) => {
      this.articleTitle.textContent = `${data.name}, у вас ${this.countArticle} сохранённых статей`;
    })
  }

  getSaveKeyword = () => {
    this.mainApi.getArticles().then((data) => {
      this.getUserInfo();
      if (data !== undefined) {
      this.countArticle = data.length;
      data.forEach((element) => {
       this.keywordsArray.push(element.keyword)
      })
      this.getUserInfo();
      this._getPopularKeyword();
      }
    })
  }
  _getPopularKeyword = () => {
    const result = {};
    this.keywordsArray.forEach(function (a) {
      if (result[a] !== undefined)
        ++result[a];
      else
        result[a] = 1;
    });
    const sortable = [];
    for (let popularKeyword in result) {
      sortable.push([popularKeyword, result[popularKeyword]]);
    }
    sortable.sort((a, b) =>{
      return b[1] - a[1];
    })
    this._setPopularWord(sortable);

}
  _setPopularWord(sortObj) {
    const arrayKeyWordsWithCount = sortObj.flat(Infinity);
    const wordArray = arrayKeyWordsWithCount.filter(e => typeof e === 'string');

    if (this.articleKeyWordsArray[saveArticleWord.secondWord].textContent !== '') {
      this.articleKeyWordsArray[saveArticleWord.firstWord].textContent = `${wordArray[saveArticleWord.firstWord]},`;
      this.articleKeyWordsArray[saveArticleWord.secondWord].textContent = `${wordArray[saveArticleWord.secondWord]}`;
      this.articleKeyWordsArray[saveArticleWord.thirdWord].textContent = ` и ${wordArray.length - saveArticleWord.thirdWord} другим`;
    }
    else {
      this.articleKeyWordsArray[saveArticleWord.firstWord].textContent = `${wordArray[saveArticleWord.firstWord]}`
      this.articleKeyWordsArray[saveArticleWord.secondWord].textContent = ``;
      this.articleKeyWordsArray[saveArticleWord.thirdWord].textContent = ` и ${wordArray.length - saveArticleWord.secondWord} другим`;
    }
  }


}
export { AnalyticsMyNews };
