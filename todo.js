let inputs = document.getElementById("inp");
let text = document.querySelector(".text");
let addBTN = document.querySelector(".addBtn");

addBTN.addEventListener("click", (e) =>{
    if(inputs.value === ""){
        alert("Please Enter Task")
        return;
    }


    let newEle = document.createElement("ul");
    newEle.innerHTML = `${inputs.value} <i class="ri-delete-bin-4-fill"></i>` ;
    text.appendChild(newEle);
    inputs.value="";
    newEle.querySelector("i").addEventListener("click", remove);
    function remove(){
        newEle.remove()
    }
})

