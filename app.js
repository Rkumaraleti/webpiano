let arr = ["z", "x", "c", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "v", "b", "n", "m", ",", ".", "s", "d", "2", "3", "4", "6", "7", "9", "0", "-", "f", "g", "j", "k", "l"];


let num = document.querySelectorAll(".key").length;

// Preloading the audio
for (let i = 0; i < num; i++){
    let sound = "sounds/" + document.querySelectorAll(".key")[i].getAttribute("data-note") + ".mp3";
    new Audio(sound).load();
}

// Adding Click Event for each key elem:
for (let i = 0; i < num; i++){
    document.querySelectorAll(".key")[i].addEventListener("click", function(){
        let sound = "sounds/" + this.getAttribute("data-note") + ".mp3";
        new Audio(sound).play();
    })   
}

// Adding KeyPress Event for each key elem:
document.addEventListener("keypress", function(e){
    let x = e.key.toLowerCase();
    if(arr.indexOf(x >= 0)) {
        let k = arr.indexOf(x);
        
        let data = document.querySelectorAll(".key")[k];
        data.classList.add("click-in");

        setTimeout(() => {
             data.classList.remove("click-in");
        }, 150);

        new Audio(("sounds/" + data.getAttribute("data-note") + ".mp3")).play();
    }
});
