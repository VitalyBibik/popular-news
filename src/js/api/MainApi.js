
class MainApi {
  constructor (options) {
    this.options = options;
  }

  signUp = (userEmail, userPassword, userName) => {
    return fetch(`${this.options.myURL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
        name: userName
      }),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        const json = res.json();
        return json.then(Promise.reject.bind(Promise))
      })
      .catch((err) => {
        throw err;
      })
  }
   signIn = (userEmail, userPassword) => {
     return fetch(`${this.options.myURL}/signin`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       credentials: 'include',
       body: JSON.stringify({
         email: userEmail,
         password: userPassword
       }),

     })
       .then(res => {
         if (res.ok) {
           return res.json();
         }
         const json = res.json();
         return json.then(Promise.reject.bind(Promise))
       })
       .catch((err) => {
         throw err;
       })
   }

   getUserData () {
     return fetch(`${this.options.myURL}/users/me`, {
       method: 'GET',
       credentials: 'include',
       headers: {
         'Content-Type': 'application/json',
       },
     }).then(res => {
         if (res.ok) {
           return res.json()
         }
         return Promise.reject(`Что то пошло не так ${res.status}`)
       })
   }

   getArticles () {
     return fetch(`${this.options.myURL}/articles`, {
       method: 'GET',
       credentials: 'include',
       headers: {
         'Content-Type': 'application/json',
       },
     })
       .then(res => {
         if (res.ok) {
           return res.json();
         }
         const json = res.json();
         return json.then(Promise.reject.bind(Promise))
       })
       .catch((err) => {
         throw err;
       })
   }
  createArticle (cardObject) {
    return fetch(`${this.options.myURL}/articles`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        keyword: cardObject.keyword,
        title: cardObject.title,
        text: cardObject.text,
        date: cardObject.date,
        source: cardObject.source,
        link: cardObject.link,
        image: cardObject.image
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        const json = res.json();
        return json.then(Promise.reject.bind(Promise))
      })
      .catch((err) => {
        throw err;
      })
  }

  removeArticle = (id) => {
    console.log(id, 'send');
    return fetch(`${this.options.myURL}/articles/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        const json = res.json();
        return json.then(Promise.reject.bind(Promise))
      })
      .catch((err) => {
        throw err;
      })
  }


  logout = () => {
    return fetch(`${this.options.myURL}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        const json = res.json();
        return json.then(Promise.reject.bind(Promise))
      })
      .catch((err) => {
        throw err;
      })
  }

}
export { MainApi }
