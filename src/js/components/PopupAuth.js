import { Popup }  from "./Popup";

 class PopupAuth extends Popup {
  constructor (containerPopup, myApi, header) {
    super(containerPopup)
    this.myApy = myApi;
    this.header = header;
  }

  login = (event) => {
    event.preventDefault();
    const button = event.currentTarget;
    const form = this.containerPopup.querySelector('#signIn');
    const email = this.containerPopup.querySelector('#emailLogin');
    const password = this.containerPopup.querySelector('#passwordLogin');

    this.removeEnabled(button, email, password);

    this.myApy.signIn(email.value, password.value).then((data) => {
      this.removeDisable(button, email, password);
      if (data === undefined) {
        return;
      }
      form.reset();
      this.removePopup();
      this.header.render();
    }).catch((e) => {
      this.removeDisable(button, email, password);
      this.containerPopup.querySelector('.error-message_type_server').textContent = e.message;
    })
  }
   removeDisable = (button, email, password) => {
     button.removeAttribute('disabled');
     email.removeAttribute('disabled');
     password.removeAttribute('disabled');
   }
   removeEnabled = (button, email, password) => {
     button.setAttribute('disabled',true);
     email.setAttribute('disabled',true);
     password.setAttribute('disabled',true);
   }



}
export { PopupAuth };
