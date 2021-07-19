for(var count=0;count<document.querySelectorAll(".drum").length;count++){
document.querySelectorAll("button")[count].addEventListener("click",handleClick);

}

function handleClick(){
    var button=this.innerHTML;
    makesound(button);
    animatethis(button);
}

document.addEventListener("keydown",function(event) {
  makesound(event.key);
  animatethis(event.key);
    
    });

    function makesound(key){

        var button=this.innerHTML;
        switch(key){
        case"w": 
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        
        case"a": 
        var audio1=new Audio("sounds/tom-2.mp3");
        audio1.play();
        break;
            
    
        case"s": 
        var audio2=new Audio("sounds/tom-3.mp3");
        audio2.play();
        break;
                
    
        case"d": 
        var audio3=new Audio("sounds/tom-4.mp3");
        audio3.play();
        break;
    
        case"j": 
        var audio4=new Audio("sounds/snare.mp3");
        audio4.play();
        break;
    
        case"k": 
        var audio5=new Audio("sounds/crash.mp3");
        audio5.play();
        break;
    
            case"l": 
         var audio6=new Audio("sounds/kick-bass.mp3");
        audio6.play();
         break;
                                
       default:console.log();
                                
    
    }
    
    
     
    }
    
function animatethis(button){
    var thisbutton=document.querySelector("."+ button);
    thisbutton.classList.add("pressed");


setTimeout(function(){
    thisbutton.classList.remove("pressed");
},100);

}

