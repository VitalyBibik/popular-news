!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=10)}([function(t,e,n){"use strict";n.d(e,"e",(function(){return i})),n.d(e,"j",(function(){return a})),n.d(e,"f",(function(){return c})),n.d(e,"c",(function(){return s})),n.d(e,"i",(function(){return u})),n.d(e,"h",(function(){return d})),n.d(e,"g",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"k",(function(){return h})),n.d(e,"a",(function(){return _})),n.d(e,"d",(function(){return g}));var r={baseUrl:"".concat("https://nomoreparties.co/news/v2/everything?q="),headers:{authorizationNews:"994e1bb6bcfe481cb84ed7ee5767eb2e"},myURL:"".concat("https://api.backend-mesto.xyz")},o=JSON.stringify(r),i=864e5,a=100,c="ru",s="https://via.placeholder.com/300",u=JSON.parse(o),d={statusCardUnLogin:0,statusCardLogin:1,statusCardSave:2},l=0,f=0,h={firstWord:0,secondWord:1,thirdWord:2},_={valueMissing:"Это обязательное поле",tooShort:"Должен быть от 8 символов",typeMismatch:"Неверный формат Email"},g=["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"]},function(t,e,n){"use strict";n.d(e,"C",(function(){return r})),n.d(e,"D",(function(){return o})),n.d(e,"o",(function(){return i})),n.d(e,"g",(function(){return a})),n.d(e,"x",(function(){return c})),n.d(e,"v",(function(){return s})),n.d(e,"w",(function(){return u})),n.d(e,"z",(function(){return d})),n.d(e,"j",(function(){return l})),n.d(e,"B",(function(){return f})),n.d(e,"A",(function(){return h})),n.d(e,"p",(function(){return _})),n.d(e,"q",(function(){return g})),n.d(e,"r",(function(){return p})),n.d(e,"s",(function(){return b})),n.d(e,"a",(function(){return v})),n.d(e,"u",(function(){return y})),n.d(e,"f",(function(){return m})),n.d(e,"y",(function(){return L})),n.d(e,"i",(function(){return w})),n.d(e,"k",(function(){return S})),n.d(e,"b",(function(){return k})),n.d(e,"t",(function(){return A})),n.d(e,"m",(function(){return T})),n.d(e,"l",(function(){return C})),n.d(e,"n",(function(){return U})),n.d(e,"e",(function(){return M})),n.d(e,"h",(function(){return j})),n.d(e,"d",(function(){return P})),n.d(e,"c",(function(){return H}));var r=document.querySelector(".result__card"),o=document.querySelector(".result"),i=document.querySelector(".header__logo"),a=document.querySelector("#button-auth"),c=document.querySelector("#popup-auth"),s=document.querySelector("#submitSignIn"),u=document.querySelector("#moveToRegister"),d=document.querySelector("#moveToLogin"),l=document.querySelector("#signIn"),f=document.querySelector(".popup__success"),h=document.querySelector("#successGoToLogin"),_=document.querySelector(".header__button"),g=document.querySelector(".nav"),p=document.querySelector(".nav__section"),b=document.querySelector(".navigation"),v=document.querySelectorAll(".navigation__li"),y=document.querySelector(".overflow"),m=document.querySelector(".body-style"),L=document.querySelector(".popup__register"),w=document.querySelector("#submitSignUp"),S=document.querySelector("#signUp"),k=document.querySelectorAll(".navigation__li_status_unlogin"),A=document.querySelector(".navigation__li_status_needAuth"),T=(document.querySelector(".header"),document.querySelector(".header__search")),C=document.querySelector(".search__button"),U=document.querySelector(".find "),M=document.querySelector(".empty"),j=document.querySelector("#showMore"),P=document.querySelector(".articles__title"),H=document.querySelectorAll(".articles__main-word")},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return i}));var i=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o(this,"signUp",(function(t,e,r){return fetch("".concat(n.options.myURL,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:t,password:e,name:r})}).then((function(t){return t.ok?t.json():t.json().then(Promise.reject.bind(Promise))})).catch((function(t){throw t}))})),o(this,"signIn",(function(t,e){return fetch("".concat(n.options.myURL,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:t,password:e})}).then((function(t){return t.ok?t.json():t.json().then(Promise.reject.bind(Promise))})).catch((function(t){throw t}))})),o(this,"removeArticle",(function(t){return fetch("".concat(n.options.myURL,"/articles/").concat(t),{method:"DELETE",credentials:"include",headers:{"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():t.json().then(Promise.reject.bind(Promise))})).catch((function(t){throw t}))})),o(this,"logout",(function(){return fetch("".concat(n.options.myURL,"/logout"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(t){return t.ok?t.json():t.json().then(Promise.reject.bind(Promise))})).catch((function(t){throw t}))})),this.options=e}var e,n,i;return e=t,(n=[{key:"getUserData",value:function(){return fetch("".concat(this.options.myURL,"/users/me"),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject("Что то пошло не так ".concat(t.status))}))}},{key:"getArticles",value:function(){return fetch("".concat(this.options.myURL,"/articles"),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():t.json().then(Promise.reject.bind(Promise))})).catch((function(t){throw t}))}},{key:"createArticle",value:function(t){return fetch("".concat(this.options.myURL,"/articles"),{method:"POST",credentials:"include",body:JSON.stringify({keyword:t.keyword,title:t.title,text:t.text,date:t.date,source:t.source,link:t.link,image:t.image}),headers:{"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():t.json().then(Promise.reject.bind(Promise))})).catch((function(t){throw t}))}}])&&r(e.prototype,n),i&&r(e,i),t}()},function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return o}));var o=function t(e,n,o){var i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,"render",(function(){i.mainApi.getUserData().then((function(t){if(void 0!==t){var e=t.name;i.navigationHeaderAuth.classList.add("navigation__li_status_unlogin");var n=i.arrayNavigationsHeaderHide.length-1;i.arrayNavigationsHeaderHide.forEach((function(t,r){t.classList.remove("navigation__li_status_unlogin"),r===n&&(t.querySelector(".navigation__button").textContent=e,i._addListenerLogout(t))}))}})).catch((function(t){console.log(t)}))})),r(this,"renderSecondPage",(function(){i.mainApi.getUserData().then((function(t){if(void 0===t)return location="./";i._addListenerLogout(i.navigationHeaderAuth),i.navigationHeaderAuth.textContent=t.name})).catch((function(t){return console.log(t),location="./"}))})),r(this,"_addListenerLogout",(function(t){t.addEventListener("click",i._removeListenerLogout)})),r(this,"_removeListenerLogout",(function(t){if(t.target.classList.contains("navigation__button")){t.preventDefault();var e=t.currentTarget;i.mainApi.logout().then((function(){e.removeEventListener("click",i._addListenerLogout),location.reload()})).catch((function(t){console.log(t)}))}})),this.arrayNavigationsHeaderHide=e,this.navigationHeaderAuth=n,this.mainApi=o}},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(0);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i=function t(e,n,i,a){var c=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o(this,"_addCard",(function(t){return c.renderPosition.insertAdjacentHTML("beforeEnd",c.newsCard.getTemplate(t,c.statusLogin,c.keyword))})),o(this,"addListeners",(function(){c.renderPosition.addEventListener("click",c.newsCard.saveHandler),c.renderPosition.addEventListener("click",c.newsCard.removeCard)})),o(this,"initCardList",(function(t){c._clearListCard(),c.items=[],c.items.push(t),c.mainApi.getUserData().then((function(t){void 0!==t?(c.statusLogin=r.h.statusCardLogin,c._showMoreArticles()):(c.statusLogin=r.h.statusCardUnLogin,c._showMoreArticles())})).catch((function(t){console.log(t),c._showMoreArticles()}))})),o(this,"initCardListKeyWord",(function(t){c.keyword="",c.keyword=t})),o(this,"_showMoreArticles",(function(){var t=0,e=3;if(c.items[r.b].length!==r.g)for(c.buttonMore.classList.remove("search__button_status_disabled"),e+=t;t<e&&t<c.items[r.b].length;t++)c._addCard(c.items[r.b][t]),c.items[r.b].shift();else c.buttonMore.classList.add("search__button_status_disabled")})),o(this,"buttonRender",(function(t){t.preventDefault(),c._showMoreArticles()})),o(this,"_clearListCard",(function(){for(;c.renderPosition.firstChild;)c.renderPosition.removeChild(c.renderPosition.firstChild)})),o(this,"getAllArticle",(function(){c.mainApi.getArticles().then((function(t){c.statusLogin=r.h.statusCardSave,t.forEach((function(t){c._addCard(t)}))})).catch((function(t){console.log(t)}))})),this.newsCard=e,this.renderPosition=n,this.buttonMore=i,this.mainApi=a,this.items=[],this.statusLogin=r.h.statusCardUnLogin,this.keyword=""}},function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return o}));var o=function t(e,n,o,i,a,c,s,u){var d=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,"addListenersMobileMenu",(function(){d.mobileButton.addEventListener("click",d.mobileMenuOpen)})),r(this,"mobileMenuOpen",(function(t){t.preventDefault(),d._changeHeader()})),r(this,"_changeHeader",(function(){d.mobileButton.classList.toggle("header__button_status_exit"),d.nav.classList.toggle("nav_mobile"),d.navSection.classList.toggle("nav__section_mobile"),d.navigation.classList.toggle("navigation_mobile"),d.overFlow.classList.toggle("overflow_mobile"),d.bodyOvHide.classList.toggle("body-style_status_OvHidden"),d.arrayNavigationLi.forEach((function(t){t.classList.toggle("navigation__li_mobile")})),d.headerLogo.classList.toggle("header__logo_mobile")})),this.mobileButton=e,this.nav=n,this.navSection=o,this.navigation=i,this.arrayNavigationLi=a,this.overFlow=c,this.bodyOvHide=s,this.headerLogo=u}},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(0);function o(t){var e=new Date(t),n=e.getMonth();return"".concat(e.getDate()," ").concat(function(t,e){for(var n=0;n<=e;n++)if(n===e)return t[n]}(r.d,n),", ").concat(e.getFullYear())}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,"saveHandler",(function(t){if(t.target.classList.contains("card__button")){var e=t.target.closest(".card__button"),r=t.target.closest(".card"),o={keyword:n.searchKeyword,title:r.querySelector(".card__title").textContent,text:r.querySelector(".card__text").textContent,date:r.querySelector(".card__data").textContent,source:r.querySelector(".card__copyright").textContent,link:r.querySelector(".card__link").getAttribute("href"),image:r.querySelector(".card__icon").getAttribute("src")};n.mainApi.createArticle(o).then((function(t){void 0!==t&&e.classList.add("card__button_status_marked")})).catch((function(t){console.log(t)}))}})),a(this,"removeCard",(function(t){if(t.target.classList.contains("card__button-del")&&confirm("Вы уверены, что хотите удалить cтатью?")){var e=t.target.closest(".card");n.mainApi.removeArticle(e.id).then((function(t){void 0!==t&&e.remove()})).catch((function(t){console.log(t)}))}})),this.mainApi=e,this.searchKeyword=""}var e,n,c;return e=t,(n=[{key:"getTemplate",value:function(t,e,n){this.searchKeyword="",this.searchKeyword=n;var i=null===t.urlToImage?r.c:t.urlToImage;return e===r.h.statusCardUnLogin?'<div class="card">\n                      <div class="card__photo">\n                          <img src="'.concat(this._sanitizeHTMLUpdate(i),'" alt="').concat(this._sanitizeHTMLUpdate(t.title),'" class="card__icon">\n                          <div class="card__button-block">\n                              <button class="button card__button-login card__button_status_disabled">Войдите, чтобы сохранять статьи</button>\n                              <button class="button card__button" disabled></button>\n                          </div>\n                      </div>\n                      <a href="').concat(this._sanitizeHTMLUpdate(t.url),'" target="_blank" class="card__link">\n                        <span class="card__data">').concat(this._sanitizeHTMLUpdate(o(t.publishedAt)),'</span>\n                        <h3 class="card__title">').concat(this._sanitizeHTMLUpdate(t.title),'</h3>\n                        <p class="card__text">').concat(this._sanitizeHTMLUpdate(t.description),'</p>\n                        <span class="card__copyright">').concat(this._sanitizeHTMLUpdate(t.source.name),"</span>\n                      </a>\n           </div>"):e===r.h.statusCardLogin?'<div class="card">\n                      <div class="card__photo">\n                          <img src="'.concat(this._sanitizeHTMLUpdate(i),'" alt="').concat(this._sanitizeHTMLUpdate(t.title),'" class="card__icon">\n                          <div class="card__button-block">\n                              <button class="button card__button"></button>\n                          </div>\n                      </div>\n                      <a href="').concat(this._sanitizeHTMLUpdate(t.url),'" target="_blank" class="card__link">\n                        <span class="card__data">').concat(this._sanitizeHTMLUpdate(o(t.publishedAt)),'</span>\n                        <h3 class="card__title">').concat(this._sanitizeHTMLUpdate(t.title),'</h3>\n                        <p class="card__text">').concat(this._sanitizeHTMLUpdate(t.description),'</p>\n                        <span class="card__copyright">').concat(this._sanitizeHTMLUpdate(t.source.name),"</span>\n                      </a>\n           </div>"):e===r.h.statusCardSave?'<div class="card"  id="'.concat(t._id,'">\n          <div class="card__photo">\n            <img src="').concat(this._sanitizeHTMLUpdate(t.image),'" alt="').concat(this._sanitizeHTMLUpdate(t.title),'" class="card__icon">\n              <div class="card__button-block">\n                <button class="button card__button-login card__button_status_disabled card__button-login_fontSize_medium card__button-login_border_small card__button-login_size_small">Убрать из сохранённых</button>\n                <button class="button card__button-del"></button>\n              </div>\n              <div class="card__button-blockWord">\n                <button class="button card__button-word">').concat(this._sanitizeHTMLUpdate(t.keyword),'</button>\n              </div>\n          </div>\n          <a href="').concat(this._sanitizeHTMLUpdate(t.link),'" target="_blank" class="card__link">\n            <span class="card__data">').concat(this._sanitizeHTMLUpdate(t.date),'</span>\n            <h3 class="card__title">').concat(this._sanitizeHTMLUpdate(t.title),'</h3>\n            <p class="card__text">').concat(this._sanitizeHTMLUpdate(t.text),'</p>\n            <span class="card__copyright">').concat(this._sanitizeHTMLUpdate(t.source),"</span>\n          </a>\n        </div>"):void 0}},{key:"_sanitizeHTMLUpdate",value:function(t){var e=document.createElement("div");return e.textContent=t,e.innerHTML}}])&&i(e.prototype,n),c&&i(e,c),t}()},,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var r=n(0),o=(n(8),n(1)),i=n(3),a=n(2),c=n(6),s=n(4);function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(){function t(e,n,r){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,"getUserInfo",(function(){o.mainApi.getUserData().then((function(t){o.articleTitle.textContent="".concat(t.name,", у вас ").concat(o.countArticle," сохранённых статей")}))})),d(this,"getSaveKeyword",(function(){o.mainApi.getArticles().then((function(t){o.getUserInfo(),void 0!==t&&(o.countArticle=t.length,t.forEach((function(t){o.keywordsArray.push(t.keyword)})),o.getUserInfo(),o._getPopularKeyword())}))})),d(this,"_getPopularKeyword",(function(){var t={};o.keywordsArray.forEach((function(e){void 0!==t[e]?++t[e]:t[e]=1}));var e=[];for(var n in t)e.push([n,t[n]]);e.sort((function(t,e){return e[1]-t[1]})),o._setPopularWord(e)})),this.mainApi=e,this.articleTitle=n,this.articleKeyWordsArray=r,this.countArticle=0,this.keywordsArray=[]}var e,n,o;return e=t,(n=[{key:"_setPopularWord",value:function(t){var e=t.flat(1/0).filter((function(t){return"string"==typeof t}));""!==this.articleKeyWordsArray[r.k.secondWord].textContent?(this.articleKeyWordsArray[r.k.firstWord].textContent="".concat(e[r.k.firstWord],","),this.articleKeyWordsArray[r.k.secondWord].textContent="".concat(e[r.k.secondWord]),this.articleKeyWordsArray[r.k.thirdWord].textContent=" и ".concat(e.length-r.k.thirdWord," другим")):(this.articleKeyWordsArray[r.k.firstWord].textContent="".concat(e[r.k.firstWord]),this.articleKeyWordsArray[r.k.secondWord].textContent="",this.articleKeyWordsArray[r.k.thirdWord].textContent=" и ".concat(e.length-r.k.secondWord," другим"))}}])&&u(e.prototype,n),o&&u(e,o),t}(),f=n(5),h=new a.a(r.i),_=new i.a(o.b,o.t,h,o.n,o.e),g=new c.a(h),p=new s.a(g,o.C,o.h,h),b=new l(h,o.d,o.c),v=new f.a(o.p,o.q,o.r,o.s,o.a,o.u,o.f,o.o);_.renderSecondPage(),p.getAllArticle(),p.addListeners(),b.getSaveKeyword(),b.getUserInfo(),v.addListenersMobileMenu()}]);