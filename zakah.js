let a1=document.getElementById('a1');
let a2=document.getElementById('a2');

a1.onkeyup=function(){
    a2.value=a1.value * 0.025;
}