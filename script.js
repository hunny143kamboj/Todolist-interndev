const inputBOX=document.getElementById("input-box");
const listContainer=document.getElementById("listcontainer");

function addTask(){
    if(inputBOX.value ===''){
        alert("you must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML= inputBOX.value;
         listContainer.appendChild(li);
         let span = document.createElement("span");
         span.innerHtml="\u00d7";
         li.appendChild(span);
    }
    inputBOX.value="";
}