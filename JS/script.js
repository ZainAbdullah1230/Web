var istatus = document.querySelector("h5")
var btn = document.querySelector("#add")
var check = 0
var con = document.querySelector("#square")
var like = document.querySelector("i")
var heart = document.querySelector(".ri-heart-fill")
var crsr = document.querySelector("#cursor")
var body = document.querySelector("body")

body.addEventListener("mousemove" , function(dets){
        crsr.style.left = dets.x+"px"
        crsr.style.top = dets.y+"px"
})








con.addEventListener("dblclick" , function(){
    like.style.transform = "scale(1)"
    heart.style.color = "red"
    setTimeout(function(){
        like.style.transform = "scale(0)";
    },1500)
})

 btn.addEventListener("click", function(){
    if(check == 0){
    confirm("Added To Freinds")
    istatus.innerHTML = "Friends"
    istatus.style.color = "yellowgreen"
    btn.innerHTML = "Remove Friend"


    check = 1
    }else{
        confirm("Removed From Friend")
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        btn.innerHTML = "Add Friend"

        check = 0
    }
}) 






































// ol
// =========================================
// =========================================
// =======================================
// ==========================================
// =====================================
// =========================================
