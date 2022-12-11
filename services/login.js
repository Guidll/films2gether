const $eyeBtn = document.querySelector('.tosee-password__btn-eye');
let $eyeHidden = true;

$eyeBtn.addEventListener("click", () => {

    const $to_see = document.querySelector('[svg-eye="see"]').style;
    const $to_hide = document.querySelector('[svg-eye="hide"]').style;
    const $input_password = document.querySelector('.container-form__password');

    if($eyeHidden)  {
        $to_see.display = "none";
        $to_hide.display = "block";
        $input_password.setAttribute("type", "text");
        $eyeHidden = false;
    } else {
        $to_hide.display = "none";
        $to_see.display = "block"
        $input_password.setAttribute("type", "password");
        $eyeHidden = true;
    }

})


const btnSubmit = document.querySelector(".container-form__btn-submit");

btnSubmit.addEventListener("click", (e) => {
    const $form = document.querySelector(".container-form");
    const $inputEmail = document.querySelector(".container-form__email");
    const $inputSenha = document.querySelector(".container-form__password");

})