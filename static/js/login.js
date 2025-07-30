const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  const translations = {
    "Français": {
      sign1:[
        "Sign Up"
      ],
      sign2:[
        "SIGN UP"
      ],
      or2:[
        "Or Sign up with social platforms"
      ],
      one_of:[
        "One of us ?"
      ],
      go:[
        "Go to your a count"
      ],
      sign_in_btn:[
        "Log in"
      ],
      username_signup:[
        "Votre nom"
      ],
      email:[
        "email"
      ],
      password1:[
        "Mot de pass"
      ],
      password2:[
        "Confirm mot de pass "
      ],
    },
    "العربية": {
      sign1:[
        "انشاء حساب"
      ],
      sign2:[
        "تسجيل"
      ],
      or2:[
        "أو قم بتسجيل الدخول عبر"
      ],
      one_of:[
        "واحد منا"
      ],
      go:[
        "اذهب الى حسابك"
      ],
      sign_in_btn:[
        "تسجيل  الدخول"
      ],
      username_signup:[
        "اسمك"
      ],
      email:[
        "البريد الإلكتروني"
      ],
      password1:[
        "كلمة المرور"
      ],
      password2:[
        "تأكيد كلمة المرور"
      ],
    }
  };

  function applyLanguage(lang) {
    //   variable for elements page Login.html
    const sign2 = document.querySelectorAll('[id^="signup"]');
    const or2 = document.getElementById("or2");
    const one_of = document.getElementById('one_of');
    const go = document.getElementById('go');
    const username_signup = document.getElementById('username_signup');
    const email = document.getElementById('email');
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');


    if(username_signup ){username_signup.placeholder=translations[lang].username_signup[0];}
    if(email ){email.placeholder=translations[lang].email[0];}
    if(password1 ){password1.placeholder=translations[lang].password1[0];}
    if(password2 ){password2.placeholder=translations[lang].password2[0];}

    if (one_of) {
      one_of.textContent = translations[lang].one_of[0];
    }
    if (go) {
      go.textContent = translations[lang].go[0];
    }
    if (sign_in_btn) {
      sign_in_btn.textContent = translations[lang].sign_in_btn[0];
    }

    if (sign2) {
      sign2.forEach(element => element.textContent = translations[lang].sign1[0]);
      sign2.forEach(element => element.value = translations[lang].sign2[0]);
    }
    if (or2) {
      or2.textContent = translations[lang].or2[0];
    }





  

    // Set direction
    // document.documentElement.setAttribute("dir", lang === "العربية" ? "rtl" : "ltr");

    // Store selection
    localStorage.setItem("selectedLanguage", lang);

    // Hide dropdown
    const langMenu = document.getElementById("langMenu");
    if (langMenu) langMenu.classList.add("hidden");
  }

  window.changeLanguage = applyLanguage;
  window.toggleLangMenu = function () {
    const menu = document.getElementById("langMenu");
    if (menu) menu.classList.toggle("hidden");
  };

  const savedLang = localStorage.getItem("selectedLanguage") || "Français";
  applyLanguage(savedLang);
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

document.querySelector(".sign-in-form").addEventListener("submit", function (e) {
    // Empêche l'envoi du formulaire pour vérifier d'abord
  let isValid = true;
  const usernameField = document.getElementById('divusername')
  const username = document.getElementById("username");
  const passwordField = document.getElementById('divpassword')
  const password = document.getElementById("password");

  let m = document.querySelector("#message");
  let message =''

  if (username.value.trim() === "") {
    usernameField.style.border = "1px solid red";
    message = "Entrez nom ou email";
    isValid = false;
  }

  if (password.value.trim() === "") {
    passwordField.style.border = "1px solid red";
    message = "Entrez motdepasse";
    isValid = false;
  }
  if(username.value.trim() === "" && password.value.trim() === ""){
    message = "Entrez votre nom et motdepasse"
  }
  if (!isValid) { 
    e.preventDefault(); 
    m.textContent=message;
    // m.style.color = "blue"; 
  }
});



document.querySelector(".sign-up-form").addEventListener("submit", function (e) {
  // Empêche l'envoi du formulaire pour vérifier d'abord
let isValid = true;
const usernameField = document.getElementById('divusename2')
const username = document.getElementById("username2");

const emailField = document.getElementById("divemail");
const email = document.getElementById("email");

const passwordField1 = document.getElementById('divpassword1')
const password1 = document.getElementById("password1");

const passwordField2 = document.getElementById('divpassword2')
const password2 = document.getElementById("password2");

let m2 = document.querySelector("#message2");
let message =''

if (username.value.trim() === "") {
  usernameField.style.border = "1px solid red";
  message = "Entrez votre nom";
  isValid = false;
}
  
if (email.value.trim() === "") {
    emailField.style.border = "1px solid red";
    message = "Entrez votre email";
    isValid = false;
}else{
    if (password1.value.trim() === "") {
      passwordField1.style.border = "1px solid red";
      message = "Entrez votre motdepasse";
      isValid = false;
    }else{
      if (password2.value.trim() === "") {
        passwordField2.style.border = "1px solid red";
        message = "Entrez le motdepasse encore";
        isValid = false;
      }
      
    }
}


if(username.value.trim() === "" && email.value.trim() === "" && password1.value.trim() === "" && password2.value.trim() === ""){
  message = "Les quatre chemps son obligatoire"
}else{
  if (password1.value.trim() !== password2.value.trim()) {
    passwordField2.style.border = "1px solid red";
    message = "Le mot de passe ne correspond pas";
    isValid = false;
  }
}
  

if (!isValid) { 
  e.preventDefault(); 
  m2.textContent=message;
}

});


window.onload = function () {
  const translations = {
    "Français": {
      login:[
        "Login"
      ],
      signup:[
        "SIGN UP"
      ],
      new_here:[
        "New here?"
      ],
      hello:[
        "Hello bro you're welcome"
      ],
      optionOr:[
        "Or Log in with social platforms"
      ],
      username_login:[
        "Votre nom"
      ],
      password_login:[
        "Votre mot de pass"
      ],
    },
    "العربية": {
      login:[
        "تسجيل الدخول"
      ],
      signup:[
        "انشاء حساب"
      ],
      new_here:[
        "جديد هنا"
      ],
      hello:[
        "مرحبابك معنا"
      ],
      optionOr:[
        "أو قم بتسجيل الدخول عبر"
      ],
      username_login:[
        "اسمك"
      ],
      password_login:[
        "كلمة المرور"
      ],
    }
  };

  function applyLanguage(lang) {
    //   variable for elements page Login.html
    const login = document.querySelectorAll('[id^="login"]');
    const signup = document.getElementById("sign-up-btn");
    const newhere = document.getElementById('newHere');
    const hello = document.getElementById('hello');
    const optionOr = document.getElementById('or');
    const username_login = document.getElementById('username');
    const password_login = document.getElementById('password');

    if(username_login ){username_login.placeholder=translations[lang].username_login[0];}
    if(password_login ){password_login.placeholder=translations[lang].password_login[0];}
    if (login) {
      login.forEach(element => element.textContent = translations[lang].login[0]);
      login.forEach(element => element.value = translations[lang].login[0]);
    }
    if (signup) {
      signup.textContent = translations[lang].signup[0];
      // signup.forEach(element => element.value = translations[lang].signup[0]);
    }
    if (newhere) {
      newhere.textContent = translations[lang].new_here[0];
    }
    if (hello) {
      hello.textContent = translations[lang].hello[0];
    }
    if (optionOr) {
      optionOr.textContent = translations[lang].optionOr[0];
    }




  

    // Set direction
    // document.documentElement.setAttribute("dir", lang === "العربية" ? "rtl" : "ltr");

    // Store selection
    localStorage.setItem("selectedLanguage", lang);

    // Hide dropdown
    const langMenu = document.getElementById("langMenu");
    if (langMenu) langMenu.classList.add("hidden");
  }

  window.changeLanguage = applyLanguage;
  window.toggleLangMenu = function () {
    const menu = document.getElementById("langMenu");
    if (menu) menu.classList.toggle("hidden");
  };

  const savedLang = localStorage.getItem("selectedLanguage") || "Français";
  applyLanguage(savedLang);
};