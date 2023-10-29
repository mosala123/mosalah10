//  lets 
let input =document.getElementById("input");
let create =document.getElementById("create");
 let h2=document.getElementById("h2")
// ceater
create.onclick=function(){
if(input.value !=""){
h2.style.display="block"
}
clearData()
}
 
// clear input 
function clearData(){
input.value=""

}
