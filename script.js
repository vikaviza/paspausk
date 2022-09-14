var button = document.querySelector("button")
var h1 = document.querySelector("h1")

button.addEventListener("click", function(){
    h1.innerText = "Sakiau nespausk"
    
    setTimeout(function(){
        h1.style.color = "crimson"
    }, 1000)

    setTimeout(function(){
        document.body.style.width = "100%"
    }, 2000)

    setTimeout(function(){
        document.body.style.marginTop = "300px"
    }, 3000)

    setTimeout(function(){
        document.body.innerHTML = 
        `
        <img src="https://media3.giphy.com/media/9umH7yTO8gLYY/giphy.gif?cid=ecf05e47c7g7gq8jys5ql61ipnuczq0cxdem8trq2bk93sje&rid=giphy.gif&ct=g">
        `
        document.querySelector("img").style.border = "3px solid crimson"
    }, 4000)
})