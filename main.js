// hide and shoe the list 
let spann=document.getElementById("span");
let navv=document.querySelector("nav");
let closee=document.querySelector(".close");
spann.onclick=function(){
    navv.classList.add("show");
};
closee.onclick=function(){
this.parentElement.classList.remove ("show");
};
// count 1
let count1 =document.getElementById("count1");
let result=0;
function increasing(){
    result +=1;
    count1.innerHTML=  result;
};
// count 2
let count2 =document.getElementById("count2");
let result2=0;
function increasing2(){
    result2 +=1;
    count2.innerHTML=  result2;
};
// count 3
let count3 =document.getElementById("count3");
let result3=0;
function increasing3(){
    result3 +=1;
    count3.innerHTML=  result3;
};
// count 4
let count4 =document.getElementById("count4");
let result4=0;
function increasing4(){
    result4 +=1;
    count4.innerHTML=  result4;
};
// count 5
let count5 =document.getElementById("count5");
let result5=0;
function increasing5(){
    result5 +=1;
    count5.innerHTML=  result5;
};
// count 6
let count6 =document.getElementById("count6");
let result6=0;
function increasing6(){
    result6 +=1;
    count6.innerHTML=  result6;
};
// count 7
let count7 =document.getElementById("count7");
let result7=0;
function increasing7(){
    result7 +=1;
    count7.innerHTML=  result7;
};
// count 8
let count8 =document.getElementById("count8");
let result8=0;
function increasing8(){
    result8 +=1;
    count8.innerHTML=  result8;
};
// count 9
let count9 =document.getElementById("count9");
let result9=0;
function increasing9(){
    result9 +=1;
    count9.innerHTML=  result9;
};
// zero all counter
let zeroAll=document.getElementById("zeroAll");
let newCount=document.querySelectorAll(".count");
console.log(newCount);
zeroAll.onclick=function(){
for(let i=0; i<newCount.length; i++){
newCount[i].innerHTML =0;
result=0;
result2=0;
result3=0;
result4=0;
result5=0;
result6=0;
result7=0;
result8=0;
result9=0;
};
  };
// zero this count
// reaload 1
let Reaload1 =document.getElementById("reaload1");
function reaload1(){
    count1.innerHTML="0";
    result=0;
};
// reaload 2
let Reaload2 =document.getElementById("reaload2");
function reaload2(){
    count2.innerHTML="0";
    result2=0;
};
//  reaload 3
 let Reaload3 =document.getElementById("reaload3");
 function reaload3(){
    count3.innerHTML="0";
    result3=0;
 };
// reaload 4
let Reaload4 =document.getElementById("reaload4");
function reaload4(){
    count4.innerHTML="0";
    result4=0;
};
// // reaload 5
let Reaload5 =document.getElementById("reaload5");
function reaload5(){
    count5.innerHTML="0";
    result5=0;
};
// // reaload 6
let Reaload6 =document.getElementById("reaload6");
function reaload6(){
    count6.innerHTML="0";
    result6=0;
};
// // reaload 7 
let Reload7=document.getElementById("reaload7");
function reaload7(){
    count7.innerHTML=0 ;
    result7=0;
};
// // reaload 8
let Reaload8 =document.getElementById("reaload8");
function reaload8(){
    count8.innerHTML="0";
    result8=0;
};
// // reaload 9
let Reaload9 =document.getElementById("reaload9");
function reaload9(){
    count9.innerHTML="0";
    result9=0;
};
// counter-incrase 
let counterIncrase=document.getElementById("counter-incrase");
let count ;
if(localStorage.counter !=null){
    count= JSON.parse(localStorage.counter);
}else{
};
 counterIncrase.onclick=function(){
   counterIncrase.innerHTML=` الان عدد المسبحين: ${count}`; 
   localStorage.setItem("counter", JSON.stringify(count));
   count +=1;

 }
// up and down
let upDown=document.getElementById("updown");
window.onscroll=function(){
    if(window.scrollY> 1300){
        upDown.classList.add("right");
    }else{
        upDown.classList.remove("right");

    }
}
upDown.onclick=function(){
    
  window.scrollTo({
    top:0,
    behavior:"smooth",
});
};























