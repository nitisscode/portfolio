
//import {}

var typed= new Typed(".auto_input",{
    strings:["Algorithm Developer","Python antusiast"],
    typespeed: 30,
    backspeed:30,
    loop:true,
})



document.getElementById("menu_image").onclick=()=>{
    //display_menu()
    document.getElementById("menu").style.display="grid"
    document.getElementById("menu_div").style.marginRight="40px"
    //document.getElementById("menu_div").style.marginLeft="-42px"
    //document.getElementById("menu").style.display="grid"
}


document.getElementById("close").onclick=()=>{
    closemenu()
    
}
document.getElementsByClassName("menu_sec").onclick=()=>{
    document.getElementById("menu").style.display="none"
    closemenu()
}

function closemenu(){
    event.preventDefault()
    document.getElementById("menu").style.display="none"
    document.getElementById("menu_div").style.marginLeft="-45px"

}

function Display(){
    res="./images/nitish resume2.pdf"
    
    window.open(res)
}

function LinkedIn(){
    res="https://www.linkedin.com/in/nitish-kumar-97b33a288"
    window.open(res)
}

function Github(){
    res="https://github.com/nitisscode"
    window.open(res)
}

function ShowMaze(){
    res="https://github.com/nitisscode/MazeSolver/blob/main/maze.py"
    window.open(res)

}

function ShowTyping(){
    link="https://github.com/nitisscode/TypingTest/blob/main/typing.py"
    window.open(link)

    
}

function Showyoutube(){
    link="https://github.com/nitisscode/first_project/blob/main/youtube.py"
    window.open(link)
    
}

function ShowInsta(){
    link="https://github.com/nitisscode/first_project/blob/main/insta.py"
    window.open(link)
}

function ShowCalendar(){
    link="https://github.com/nitisscode/project2/blob/main/cal.py"
    window.open(link)
    
}
// function showresume(){
//     var resume="./images/Nitish Kumar resume.pdf"
//     window.open(resume)
// }