import throttle from "lodash.throttle";

const refs = {
  form: document.querySelector(".feedback-form"),
  textarea: document.querySelector(".feedback-form textarea"),
  input: document.querySelector(".feedback-form input"),
};

refs.form.addEventListener("submit", onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

const FORM_KEY = "feedback-form-state";

const info = {};

savedInputs();

refs.form.addEventListener("input", throttle(onAllInputs, 500));

function onAllInputs(e) {
  info[e.target.name] = e.target.value;
  localStorage.setItem(FORM_KEY, JSON.stringify(info));

  // console.log(info);
}

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log(localStorage.getItem(FORM_KEY));
  evt.target.reset();
  localStorage.removeItem(FORM_KEY);
}

// function onTextareaInput(evt){
//     const messege = evt.target.value;
//     localStorage.setItem(FORM_KEY, messege);

// }

function savedInputs(evt) {
  const savedMessage = JSON.parse(localStorage.getItem(FORM_KEY));

  if (savedMessage) {
    refs.textarea.value = savedMessage.message || "";
    refs.input.value = savedMessage.email || "";
  }

  //    const savedMessage = JSON.parse(localStorage.getItem(FORM_KEY))["message"];
  //    const savedEmail = JSON.parse(localStorage.getItem(FORM_KEY))["email"];
  //    if (savedMessage, savedEmail) {
  //     refs.textarea.value = savedMessage;
  //     refs.input.value = savedEmail;
  //    }
}
