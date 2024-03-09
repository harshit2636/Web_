let main=document.querySelector(".main")
let cursor=document.querySelector("#cursor")

main.addEventListener("mousemove",function(clint){      //dets or clint same
// console.log(clint.x,clint.y)
cursor.style.left=clint.x+"px"
cursor.style.top=clint.y+"px"
})