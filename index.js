/*buttons.forEach(button => {button.addEventListener("click", function () {  // Selecting all buttons with lambda
    alert("I got clicked")
})
})
*/
const buttons = document.querySelectorAll(".drum")
for ( var i = 0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", function () {  // Selecting all buttons with a for loop
        var drumInnerHtml = this.innerHTML;
        buttonClicked(drumInnerHtml)
        makeAnimation(drumInnerHtml)

    });
}

document.addEventListener("keydown", function(event) {
    buttonClicked(event.key)
    makeAnimation(event.key)

})




function buttonClicked (char) {
        switch (char) {
            case "w":
                var audio = new Audio("sounds/crash.mp3")
                audio.play() 
                break
            case "a":
                var audio1 = new Audio("sounds/kick-bass.mp3")
                audio1.play()
                break
            case "s":
                var audio2 = new Audio("sounds/snare.mp3")
                audio2.play()
                break
            case "d":
                var audio3 = new Audio("sounds/tom-1.mp3")
                audio3.play()
                break
            case "j":
                var audio4 = new Audio("sounds/tom-2.mp3")
                audio4.play()
                break
            case "k":
                var audio5 = new Audio("sounds/tom-3.mp3")
                audio5.play()
                break
            case "l":
                var audio6 = new Audio("sounds/tom-4.mp3")
                audio6.play()
                break
            
            default:
                console.log(drumInnerHtml)

        }
    }

function makeAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    if(activeButton){
        activeButton.classList.add("pressed")
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100); // Adjust the delay time (in milliseconds) as needed
    }
}
