const btnEnter = document.querySelector('.btn-enter');
const inputEmail = document.querySelector('.input-email');
const inputPassword = document.querySelector('.input-password');

function loginValid() {
  if (
    inputEmail.value === 'tryber@teste.com'
    && inputPassword.value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
btnEnter.addEventListener('click', loginValid);

/* Validacao do botao para o requisito 18, refencia : https://www.w3schools.com/howto/howto_js_display_checkbox_text.asp */

const checkboxOk = document.getElementById('agreement');
const ifChecked = document.getElementById('submit-btn');

function formChecked() {
  if (checkboxOk.checked === true) {
    ifChecked.disabled = false;
  } else {
    ifChecked.disabled = true;
  }
}
formChecked();

// Referencia requisito 20 https://stackoverflow.com/questions/14086398/count-textarea-characters //

function textSize() {
  const textArea = document.querySelector('#textarea');
  const counter = document.querySelector('#counter');
  const numberChar = parseInt(counter.innerText, 10);
  textArea.addEventListener('input', () => {
    counter.innerText = numberChar - textArea.value.length;
  });
}
textSize();
