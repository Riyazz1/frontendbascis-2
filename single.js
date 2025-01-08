var user_pick=document.getElementsByClassName("btn");
var pick=["rock","paper","siccsors"];
let x=Math.floor((Math.random() * 3) );
var computer=pick[x]
const element = document.getElementById("p");


//var pu=document.getElementById("p").innerText="The computer chooses"
//console.log(pu);
element.remove();



function rock(){
    if(computer=="paper"){
        Swal.fire("the computer chooses " + computer + " you lost");
        //Swal.fire("you lost");
        //Swal.fire("you lost");
        
    }
    else if(computer=="siccsors"){

        Swal.fire("the computer chooses " + computer + " you won");
        //Swal.fire("you won");
            
    }
    else{

        Swal.fire("the computer chooses " + computer + " its a Draw");
        //Swal.fire("it's a draw");
    }
    element.remove();

    window.setTimeout(function(){location.reload()},1800)
    //location.reload();

}
 function paper(){
    if(computer=="siccsors"){
        Swal.fire("the computer chooses " + computer + " you lost");
        //alert("the computer chooses " + computer);
        //alert("you lost");
    }
    else if(computer=="rock"){
        Swal.fire("the computer chooses " + computer + " you won");

    }
    else{
        Swal.fire("the computer chooses " + computer + " its a Draw");
        
    }
    window.setTimeout(function(){location.reload()},1800)

}
function siccsors(){
    if(computer=="rock"){
        Swal.fire("the computer chooses " + computer + " you lost");

        //alert("the computer chooses " + computer);
        //alert("you lost");
    }
    else if(computer=="paper"){
        Swal.fire("the computer chooses " + computer + " you won");
        //alert("the computer chooses " + computer);
        //alert("you won");
    }
    else{
        Swal.fire("the computer chooses " + computer + " its a Draw");
        //alert("the computer chooses " + computer);
        //alert("it's a draw")
    }
    window.setTimeout(function(){location.reload()},1800)
    

}





