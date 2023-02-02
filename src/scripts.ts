import * as $ from 'jquery';


function validateFirstName(name: string) {
  const validator = /^[A-Za-z]{2,}$/;
  const input = $(".first").val();

  if(input == "") {
    $("#firstName").after('<span class="input__error"> Please enter your first name </span>');
  } 
  else if(!validator.test(name)) {
    $("#firstName").after('<span class="input__error"> Letters only please </span>');
  }
  return validator.test(name);
}


function validateLastName(lastName: string) {
  const validator = /^[A-Za-z]{2,}$/;
  const input = $(".last").val();

  if(input == "") {
    $("#lastName").after('<span class="input__error"> Please enter your last name </span>');
  } 
  else if(!validator.test(lastName)) {
    $("#lasttName").after('<span class="input__error"> Letters only please </span>');
  }
  return validator.test(lastName);
}


function validateEmail(email: string) {
  const validator = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  const input = $(".email").val();

  if(input == "") {
    $("#email").after('<span class="input__error"> Please enter your email </span>');
  } 
  else if(!validator.test(email)) {
    $("#email").after('<span class="input__error"> Please enter valid email </span>');
  }
  return validator.test(email);
}


function validatePassword(password: string) {
    const validator = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const input = $(".password").val();

    if(input == "") {
      $("#password").after('<span class="input__error"> Please enter your password </span>');
    } 
    else if(!validator.test(password)) {
      $("#password").after('<span class="input__error"> Please enter valid password </span>');
    }
    return validator.test(password);
}






$(".submit").click(function(event) {
  event.preventDefault();

  $('.input__error').hide();

  validateFirstName($(".first").val());
  validateLastName($(".last").val());
  validateEmail($(".email").val());
  validatePassword($(".password").val())

});


export { validateFirstName };
export { validateLastName };
export { validateEmail };
export { validatePassword };
