let frd=document.querySelector("h5");

let addfrd=document.querySelector("#add");
let remove=document.querySelector("#remove")
let check=0

addfrd.addEventListener("click",function(){
    if(check==0){
    frd.innerHTML="Friends"
    frd.style.color="green"
    addfrd.innerHTML="Remove Friend"
    add.style.backgroundColor="black"
    check=1
    }
    else{
        frd.innerHTML="remove friend"
        addfrd.innerHTML="Add Friend"
        frd.style.color="blue"
        addfrd.style.backgroundColor='blue'
        check=0
    }
})
// remove.addEventListener("click",function(){
//     frd.innerHTML="remove friend"
//    frd.style.color="blue"
// })