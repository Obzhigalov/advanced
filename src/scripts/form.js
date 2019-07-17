import { runInThisContext } from "vm";

class Validate {
    constructor() {
      this.form = 'j-form';
      this.name = 'j-name';
      this.email = 'j-email';
      this.text = 'j-text';
      this.btn = 'j-submit-btn';
      this.label = 'j-label';
      this.errorBlock = 'j-error';

      this.errorClass = 'has-error';

      this.emptyErrorMessage = 'Поле не может быть пустым';
      this.incorrectEmailErrorMessage = 'Некорректный e-mail адрес'

      this.isFieldCorrect = {
        name: false,
        email: false,
        text: false
      };
    }

    init() {
      this._initElements();
      this._bindEvents();
    }

    _initElements() {
      this.$form = document.querySelector(`.${this.form}`);
      this.$btn = this.$form.querySelector(`.${this.btn}`);
      this.$name = this.$form.querySelector(`.${this.name}`);
      this.$inputName = this.$name.querySelector('input');
      this.$email = this.$form.querySelector(`.${this.email}`);
      this.$inputEmail = this.$email.querySelector('input');
      this.$textarea = this.$form.querySelector(`.${this.text}`);
      this.$inputTextarea = this.$textarea.querySelector('textarea');
    }

    _bindEvents() {
      this.$btn.addEventListener('click', (event) => {
        event.preventDefault();

        const isFormFullFilled = this.checkForm();
        const name = this.$inputName.value;
        const email = this.$inputEmail.value;
        const text = this.$inputTextarea.value;

        let formData = new FormData();

        formData.append('name', name);
        formData.append('to', email);
        formData.append('text', text);
        if(isFormFullFilled) {
          fetch(`https://webdev-api.loftschool.com/sendmail`, {
            method: 'POST',
            body: formData
          }).then((response) => {
            return response.json();
          }).then((info) => {
            return info.message;
          }).then((message) => {
            this.showModal(message);
            this.clearForm();
            this.$form.reset();
          }).catch(() => {
            this.showModal('Что-то пошло не так...');
          })
      }
      });

      this.$inputName.addEventListener('change', (event) => {
        this.inputChangeHandler(event, 'name');
      });
      

      this.$inputEmail.addEventListener('change', (event) => {
        const isValidEmail = event.target.checkValidity();
        const emailStr = '^[-._a-zA-Za-яA-я0-9]{2,}@(?:[a-zA-Za-яА-Я0-9][-a-z-A-Z-a-я-А-Я0-9]+\\.)+[a-za-я]{2,6}$';
        const regEmail = new RegExp(emailStr, 'u');

        if(isValidEmail && regEmail.test(this.$inputEmail.value)) {
          this.inputChangeHandler(event, 'email');
        } else if(isValidEmail === false || regEmail.test(this.$inputEmail.value) === false) {
          this.showErrorMessage(event.target, this.incorrectEmailErrorMessage)
        }
      });
      

      this.$inputTextarea.addEventListener('change', (event) => {
        this.inputChangeHandler(event, 'text');
      });

    }

    inputChangeHandler(event, inputName) {
      if (event.target.value.length) {
        this.isFieldCorrect[inputName] = true;
        this.removeErrorMessage(event.target)
      } else {
        this.isFieldCorrect[inputName] = false;
        this.showErrorMessage(event.target, this.emptyErrorMessage)
      }
    }

    checkForm() {
      let result = true;

      if(!this.isFieldCorrect.name) {
        this.showErrorMessage(this.$inputName, this.emptyErrorMessage);
      }

      if(!this.$inputEmail.value.length) {
        this.showErrorMessage(this.$inputEmail, this.emptyErrorMessage);
      }

      if(!this.isFieldCorrect.text) {
        this.showErrorMessage(this.$inputTextarea, this.emptyErrorMessage);
      }

      for(const field in this.isFieldCorrect) {
        if({}.hasOwnProperty.call(this.isFieldCorrect, field) && this.isFieldCorrect[field] === false) {
          result = false;
          break;
        }
      }
      return result;
    }

    showErrorMessage(element, message) {
      const findParentBlock = element.closest(`.${this.label}`);
      const findErrorBlock = findParentBlock.querySelector(`.${this.errorBlock}`)

      findErrorBlock.innerText = '';
      findErrorBlock.classList.add(this.errorClass);
      findErrorBlock.innerText = message;
    }

    removeErrorMessage(element) {
      const findError = element.closest(`.${this.label}`).querySelector(`.${this.errorBlock}`);

      findError.classList.remove(this.errorClass);
    }

    showModal(message) {
      const body = document.querySelector('body');
      const popup = document.querySelector('.popup');

      popup.classList.add('popup--active');
      body.classList.add('body--modal');
      let popupContent = popup.querySelector('.popup__content');
      popupContent.innerText = message;

      const closePopupBtn = popup.querySelector('.popup__close');

      closePopupBtn.addEventListener('click', () => {
        popup.classList.remove('popup--active');
        body.classList.remove('body--modal');
      })
    }
    
    clearForm() {
      this.$inputName.value = '';
      this.$inputEmail.value = '';
      this.$inputTextarea.value = '';
    }
}

export default Validate;