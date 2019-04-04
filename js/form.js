let form = document.querySelector("form");
let login = document.querySelector("#login");
let age = document.querySelector("#age");
let email = document.querySelector("#email");
let pass = document.querySelector("#password");

form.addEventListener("submit", function(e){
	e.preventDefault();
    let reg = /^[a-z]{6,16}$/gi;
    if(!reg.test(login.value)){
      alert('Неправльный логин');
      login.style.backgroundColor="red";
      login.select();
      return false;

    }
     reg = /^\w+@\w+\.+[a-z]{2,16}$/gi;
	if(!reg.test(email.value)){
      alert('Неправльный email');
      email.style.backgroundColor="red";
      email.select();
      return false;
}
     reg = /^\d{2}$/g;

	if(!reg.test(age.value)){
      alert('Неправльный age');
      age.style.backgroundColor="red";
      age.select();
      return false;
}

     reg = /^\w{6,16}$/gi;

     if(!reg.test(pass.value)){
      alert('Неправльный password');
      pass.style.backgroundColor="red";
      pass.select();
      return false;
}

     let msg = `Вы ввели такие данные логин ${login.value}, пароль ${pass.value}, 
     возраст ${age.value}, email ${email.value}`;
     alert(msg);
     return true;

})