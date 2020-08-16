// const newsApiKey = '994e1bb6bcfe481cb84ed7ee5767eb2e';
const serverUrl = NODE_ENV === 'development' ? 'https://newsapi.org/v2/everything?q=' : 'https://nomoreparties.co/news/v2/everything?q=';
const myServer = NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://api.backend-mesto.xyz';

const obj = {
    baseUrl: `${serverUrl}`,
    headers: {
        authorizationNews: '994e1bb6bcfe481cb84ed7ee5767eb2e'
    },
    myURL:`${myServer}`}
export const config = JSON.stringify(obj);




