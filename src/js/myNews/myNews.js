// import
import '../constants/constants'
import '../../pages/myNews.css'
import { options } from "../constants/constants";
import {
  arrayNavigationsHeaderHide,
  badFindNews,
  buttonShowMore,
  goodFindNews,
  navigationHeaderAuth,
  rootCard,
  articleTitle,
  articleKeyWordsArray,
  mobileButton,
  nav,
  navSection,
  navigation,
  arrayNavigationLi,
  overFlow,
  bodyOvHide,
  headerLogo
} from "../dom/dom";
import { Header } from "../components/Header";
import { MainApi } from "../api/MainApi";
import { NewsCard } from "../components/NewsCard";
import { NewsCardList } from "../components/NewsCardList";
import { AnalyticsMyNews } from "../components/AnalyticsMyNews";
import { MobileMenu } from "../components/MobileMenu";

const mainApi = new MainApi(options);

const header = new Header(arrayNavigationsHeaderHide, navigationHeaderAuth, mainApi, goodFindNews, badFindNews);
const newsCard = new NewsCard(mainApi);
const newsCardList = new NewsCardList(newsCard, rootCard, buttonShowMore, mainApi);
const analyticsMyNews = new AnalyticsMyNews(mainApi, articleTitle, articleKeyWordsArray);
const mobileMenu = new MobileMenu(mobileButton, nav, navSection, navigation, arrayNavigationLi, overFlow, bodyOvHide, headerLogo);


header.renderSecondPage();
newsCardList.getAllArticle();
newsCardList.addListeners();
analyticsMyNews.getSaveKeyword();
mobileMenu.addListenersMobileMenu();
