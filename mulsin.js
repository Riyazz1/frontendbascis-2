
var user1;
var user2;
window.addEventListener("keydown",checkKeyPress,false);
function checkKeyPress(key){
    if(key.keyCode=="65"){

        user1="rock";
    }
    if(key.keyCode=="83"){

        user1="paper"
    }
    if(key.keyCode=="68"){

        user1="siccsors"
    }
    if(key.keyCode=="74"){

        user2="rock"
    }
    if(key.keyCode=="75"){
        user2="paper"
    }
    if(key.keyCode=="76"){
        user2="siccsors"
    }
    if(user1=="paper" && user2=="rock" ){
        win1="the winner is user1";
        Swal.fire("the winner is user1");
        window.setTimeout(function(){location.reload()},1500)
            
    }
    else if(user1=="rock" && user2=="siccsors" ){
        Swal.fire("the winner is user1");
        window.setTimeout(function(){location.reload()},1500)
            
    }
    else if(user1=="siccsors" && user2=="paper"){
        Swal.fire("the winner is user 1");
        window.setTimeout(function(){location.reload()},1500)
    }
    else if(user1=="siccsors" && user2=="rock" ){
        Swal.fire("the winner is user2");
        window.setTimeout(function(){location.reload()},1500)
    }
    else if(user1=="paper" && user2=="siccsors" ){
        Swal.fire("the winner is user2");
        window.setTimeout(function(){location.reload()},1500)
            
    }
    else if(user1=="rock" && user2=="paper" ){
        Swal.fire("the winner is user2");
        window.setTimeout(function(){location.reload()},1500)
            
    }
    else if(user1=="siccsors" && user2=="siccsors" ){
        Swal.fire("It's a draw");
        window.setTimeout(function(){location.reload()},1500)
    }
    else if(user1=="paper" && user2=="paper" ){
        Swal.fire("It's a draw");
        window.setTimeout(function(){location.reload()},1500)
            
    }
    else if(user1=="rock" && user2=="rock" ){
        Swal.fire("It's a draw");
        window.setTimeout(function(){location.reload()},1500);
    }       

   

}