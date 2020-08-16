import {nullResult} from "../constants/constants";

class SearchForm {
   constructor(elHeaderForm, goodFindNews, badFindNews, newsApi, cardList, rootResult, buttonShowMore) {
     this.elHeaderForm = elHeaderForm;
     this.goodFindNews = goodFindNews;
     this.badFindNews = badFindNews;
     this.newsApi = newsApi;
     this.cardList = cardList;
     this.rootResult = rootResult;
     this.buttonShowMore = buttonShowMore;
   }

   _findNews = (event) => {
     event.preventDefault();
     const formInput = this.elHeaderForm.querySelector('.search__input');
     if (formInput.value === '') {
       alert('Поиское поле пустое!')
       return;
     }
     const button = event.currentTarget;
     this._removeEnabled(button,formInput);
     this._renderLoading(false);
     this.badFindNews.classList.add('root__empty_status_disabled');
     this.rootResult.classList.add('root__result_status_disabled');

     this.newsApi.getNews(formInput.value).then((data) => {
       this._removeDisable(formInput, button);

       if (( data === undefined || data.totalResults === nullResult))  {
         this.badFindNews.classList.remove('root__empty_status_disabled');
         this.rootResult.classList.remove('root__result_status_disabled');
         this.buttonShowMore.classList.add('search__button_status_disabled');
         this.cardList.initCardListKeyWord(formInput.value);
         this.cardList.initCardList(data.articles);
       } else {
         this.rootResult.classList.remove('root__result_status_disabled');
         this.cardList.initCardListKeyWord(formInput.value);
         this.cardList.initCardList(data.articles);

       }

     }).catch((e) => {
       this.badFindNews.classList.remove('root__empty_status_disabled');
       this.rootResult.classList.remove('root__result_status_disabled');
       this.buttonShowMore.classList.add('search__button_status_disabled');
       this._removeDisable(formInput, button);
       console.log(e);
     }).finally(() => {
      this._renderLoading(true);
     })
   }
   _removeDisable = (button, formInput) => {
     button.removeAttribute('disabled');
     formInput.removeAttribute('disabled');
   }
   _removeEnabled = (button, formInput) => {
     button.setAttribute('disabled',true);
     formInput.setAttribute('disabled',true);
   }

   _renderLoading = (isLoading) => {
     if (!isLoading){
       this.goodFindNews.classList.remove('root__find_status_disabled');
     } else {
       this.goodFindNews.classList.add('root__find_status_disabled');
     }
   }
 }
export { SearchForm }
