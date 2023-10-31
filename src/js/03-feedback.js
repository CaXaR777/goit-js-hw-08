import throttle from 'lodash.throttle';

// const refs = {
//   form: document.querySelector(".feedback-form"),
//   textarea: document.querySelector(".feedback-form textarea"),
//   input: document.querySelector(".feedback-form input"),
// };

// refs.form.addEventListener("submit", onFormSubmit);
// // refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

// const FORM_KEY = "feedback-form-state";

// const info = {};

// savedInputs();

// refs.form.addEventListener("input", throttle(onAllInputs, 500));

// function onAllInputs(e) {
//   info[e.target.name] = e.target.value;
//   localStorage.setItem(FORM_KEY, JSON.stringify(info));

//   // console.log(info);
// }

// function onFormSubmit(evt) {
//   evt.preventDefault();

//   console.log(localStorage.getItem(FORM_KEY));
//   evt.target.reset();
//   localStorage.removeItem(FORM_KEY);
// }

// function savedInputs(evt) {
//   const savedMessage = JSON.parse(localStorage.getItem(FORM_KEY));

//   if (savedMessage) {
//     refs.textarea.value = savedMessage.message || "";
//     refs.input.value = savedMessage.email || "";
//   }
// }

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea'),
  input: document.querySelector('input'),
};

const savedInputs = localStorage.getItem('feedback-form-state');
const parsInputs = JSON.parse(savedInputs);

if (parsInputs) {
  refs.input.value = parsInputs.email;
  refs.textarea.value = parsInputs.message;
}

refs.form.addEventListener('input', throttle(input, 500));
refs.form.addEventListener('submit', submit);

function input() {
  const inputFromForm = {
    email: refs.input.value,
    message: refs.textarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(inputFromForm));
  // console.log(inputFromForm);
}
function submit(event) {
  event.preventDefault();
  if (refs.input.value && refs.textarea.value) {
    const dataLog = {
      email: refs.input.value,
      message: refs.textarea.value,
    };
    console.log(dataLog);
    refs.form.reset();
    localStorage.removeItem('feedback-form-state');
  } else {
    alert('Увага! Всі поля форми мають бути заповнені!');
  }
}
//Пропонуємо зробити невелику технічну задачу:

//Задача: не змінюючи логіки, змінити структуру коду, щоби вона відповідала принципу DRY:
function stateChanger(operation, keys, key, i) {
  for (i = 0; i < keys.length; i++) {
    key = keys[i];
    switch (operation) {
      case 'Apply':
        this[key] = styleState[key];
        break;

      case 'Default':
        this[key] = STYLES[key].canvas;
        break;

      case 'Get':
        styleState[key] = this[key];
        break;

      default:
        console.log('failed');
    }
  }
}

ctx.prototype.__applyStyleState = function (styleState) {
  var keys = Object.keys(styleState),
    i,
    key;
  stateChanger('Apply', keys, key, i);
};
ctx.prototype.__setDefaultStyles = function () {
  var keys = Object.keys(STYLES),
    i,
    key; // keys of object - object selection
  stateChanger('Default', keys, key, i);
};
ctx.prototype.__getStyleState = function () {
  var i,
    styleState = {},
    keys = Object.keys(STYLES),
    key;
  stateChanger('Get', keys, key, i);
  return styleState;
};
