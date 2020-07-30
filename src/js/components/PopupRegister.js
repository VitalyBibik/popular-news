import { Popup }  from "./Popup";

class PopupRegister extends Popup {
  constructor (containerPopup, mainApi, openSuccessForm) {
    super(containerPopup)
    this.mainApi = mainApi;
    this.openSuccessForm = openSuccessForm;
  }

  register = (event) => {
    event.preventDefault();
    const button = event.currentTarget;
    const form = this.containerPopup.querySelector('#signUp');
    const email = this.containerPopup.querySelector('#email');
    const password = this.containerPopup.querySelector('#password');
    const userName = this.containerPopup.querySelector('#userName');

    this.removeEnabled(button, email, password, userName);

    this.mainApi.signUp(email.value, password.value, userName.value).then((data) => {
      this.removeDisable(button, email, password, userName);
      if (data !== undefined) {
        form.reset();
        this.removePopup();
        this.openSuccessForm();
      }
    }).catch((e) => {
      this.removeDisable(button, email, password, userName);
      this.containerPopup.querySelector('.error-message_type_server').textContent = e.message;
    })
  }
  removeDisable = (button, email, password, userName) => {
    button.removeAttribute('disabled');
    email.removeAttribute('disabled');
    password.removeAttribute('disabled');
    userName.removeAttribute('disabled');
  }
  removeEnabled = (button, email, password, userName) => {
    button.setAttribute('disabled',true);
    email.setAttribute('disabled',true);
    password.setAttribute('disabled',true);
    userName.setAttribute('disabled',true);
  }


}
export { PopupRegister };
