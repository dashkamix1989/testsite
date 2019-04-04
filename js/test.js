let form = document.querySelector("form");
let ans= document.querySelector(".answer");
form.addEventListener("submit", function(e){
  e.preventDefault();
  let counter=0;
if(test.q1[1].checked) {counter++;}
  else{document.getElementById("q1").style.background="red";}

if(test.q2[2].checked) {counter++;}
  else{document.getElementById("q2").style.background="red";}

if(test.q3[3].checked) {counter++;}
  else{document.getElementById("q3").style.background="red";}
   ans.innerHTML=`Вы набрали ${counter}баллов`;
});






