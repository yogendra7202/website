var a = document.getElementById('signup');
var b = document.getElementById('login');
var c = document.getElementById('signupbtn');
var d = document.getElementById('loginbtn');

function signup(){
	a.style.top = "120px";
	b.style.opacity = "0";
	c.style.top = "15%";
	c.style.fontSize = "20px";
	c.style.cursor = "default";
	d.style.top = "3%";
	d.style.fontSize = "13px";
	d.style.cursor = "pointer";

	c.getElementsByTagName("span")[0].style.display = "none";
	d.getElementsByTagName("span")[0].style.display = "inline";
}

function login(){
	a.style.top = "100%";
	b.style.opacity = "1";
	c.style.top = "90%";
	c.style.fontSize = "13px";
	c.style.cursor = "pointer";
	d.style.top = "20%";
	d.style.fontSize = "24px";
	d.style.cursor = "default";

	c.getElementsByTagName("span")[0].style.display = "inline";
	d.getElementsByTagName("span")[0].style.display = "none";
}


var  validationField = document.getElementById('validation-txt');
var password = document.getElementById('pswd');
var eye = document.getElementById('eye');
var password1 = document.getElementById('pswd1');
var eye1 = document.getElementById('eye1');

function showhide()
{ 
  if (password.type == 'password'){
    password.type='text';
    eye.className='fa fa-eye';
  }
  else{
    password.type='password';
    eye.className='fa fa-eye-slash';
  }
}

function showhide1()
{ 
  if (password1.type == 'password'){
    password1.type='text';
    eye1.className='fa fa-eye';
  }
  else{
    password1.type='password';
    eye1.className='fa fa-eye-slash';
  }
}

function validate(){

  var content = password1.value;
  var  errors = [];
  console.log(content);
  if (content.length < 8) {
    errors.push("Password must have atleast 8 characters"); 
  }
  else if (content.search(/[A-Z]/i) < 0) {
    errors.push("Password must contain atleast one letter (a-z).");

  }
  else if (content.search(/[0-9]/i) < 0) {
    errors.push("Password must contain atleast one digit (0-9)."); 

  }
  else if (errors.length > 0) {
    validationField.innerHTML = errors.join('');
    return false;
  }
    validationField.innerHTML = errors.join('');
    return true;

}