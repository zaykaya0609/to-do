let date=new Date()
let dayWeek=["Monday","Tuesday","Wednsday","Thursday","Friday","Saturday","Sunday"]
let month=['January','February','March','April','May','June','July','August','September','October','November','December']
let currentDayMonth=date.getDate()
let currentDayWeek=dayWeek[date.getDay()-1]
let currentMonth=month[date.getMonth()-1]
let input=document.querySelector("input")
let ul=document.querySelector("ul")
let modal=document.querySelector(".modal_window")
let dark=document.querySelector(".dark")
let btn=document.querySelector("button")


let currentDate=`${currentDayWeek}, ${currentDayMonth} ${currentMonth}`
document.querySelector(".date").innerHTML=currentDate

function time(){
    let date=new Date()
    let currentTimeSecond=date.getSeconds()
    let currentTimeMinuts=date.getMinutes()
    let currentTimeHours=date.getHours()
    let currentTime=`${currentTimeHours}:${currentTimeMinuts}:${currentTimeSecond}`
    document.querySelector(".time").innerHTML=currentTime
    
}
setInterval(() => time(), 1000)

input.addEventListener("keypress",function(event){
    if (event.key=="Enter"){
        let userTask=document.querySelector("input").value
        if(userTask.length>2){
            let li=document.createElement("li")
            let div1=document.createElement("div")
            let div2=document.createElement("div")
            let h3=document.createElement("h3")
            let p=document.createElement("p")
            let img=document.createElement("img")
    
            div1.classList.add("to_do_text")
            div2.classList.add("to_do_remove")
            li.classList.add('animate__animated')
            li.classList.add('animate__fadeInLeft')
            li.classList.add('animate__delay-1')
    
            h3.innerText=userTask
            p.innerText="Tasks"
            div1.appendChild(h3)
            div1.appendChild(p)
    
            img.setAttribute("src","close.png")
            div2.appendChild(img)
    
            li.appendChild(div1)
            li.appendChild(div2)
    
            ul.appendChild(li)
    
            document.querySelector("input").value=""
    
        }
        else{
            dark.classList.add("activate")
            modal.classList.add("activate")
            modal.classList.add("animate__bounceIn")
            dark.classList.add("animate__fadeIn")    
        }
    }


})

ul.addEventListener("click",function(event){
    if (event.target.className=="to_do_remove"){
        event.target.parentElement.classList.remove("animate__fadeInLeft")
        event.target.parentElement.classList.add("animate__backOutRight")
        setTimeout(() => {
            event.target.parentElement.remove()
        },500
        )
    }
})

ul.addEventListener("click",function(event){
    if (event.target.className=="to_do_text"){
        event.target.parentElement.classList.add("check")
    }
})


document.body.addEventListener("keypress", function(event){
    if (event.key=="Enter"){
    }
})

btn.addEventListener("click",function(){
    modal.classList.remove('animate__bounceIn')
    modal.classList.add("animate__bounceOut")
    dark.classList.remove("animate__fadeIn")
    dark.classList.add("animate__fadeOut")
    setTimeout(()=>{
        dark.classList.remove("activate")
        modal.classList.remove("activate")    
    }, 600)
})



