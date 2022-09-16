const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const cpf = document.getElementById("cpf");
const idade = document.getElementById("idade");
const telefone = document.getElementById("telefone");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const cpfValue = cpf.value;
  const idadeValue = idade.value;
  const telefoneValue = telefone.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (cpf === "") {
    setErrorFor(cpf, "O cpf é obrigatória.");
  } else if (cpfValue.length < 11) {
    setErrorFor(cpf, "o cpf precisa ter no mínimo 11 caracteres.");
  } else {
    setSuccessFor(cpf);
  }

  if (idade === "") {
    setErrorFor(idade, "A idade é obrigatória.");
  } else if (idadeValue.length < 2) {
    setErrorFor(idade, "A idade precisa ter no mínimo 2 caracteres.");
  } else {
    setSuccessFor(idade);
  }

  if (telefone === "") {
    setErrorFor(telefone, "o Telefone é obrigatório.");
  } else if (telefoneValue.length < 11) {
    setErrorFor(telefone, "o Telefone precisa ter no mínimo 11 caracteres.");
  } else {
    setSuccessFor(telefone);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(password);
  }

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem.");
  } else {
    setSuccessFor(passwordConfirmation);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido! \n", 
    "usuario :" ,usernameValue ,"\n",
    "email :" ,emailValue ,"\n",
    "CPF :" ,cpfValue ,"\n",
    "idade :" ,idadeValue ,"\n",
    "telefone :" ,telefoneValue ,"\n");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}