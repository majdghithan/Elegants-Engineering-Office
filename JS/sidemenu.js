document.getElementById("menu").style.width = "0";

var social = document.getElementById('social');
social.style.visibility = 'hidden';
function openNav(){
    document.getElementById("menu").style.width = "50%";
    document.getElementById("menu").style.display ="block";
    // document.getElementById("menu").style.transition ="0.4s";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
    social.style.visibility = 'initial';
    // document.getElementById("opacity").style.opacity = "30%";

}

function closeNav(){
    social.style.visibility = 'hidden';
    document.getElementById("menu").style.width = "0";
    document.getElementById("opacity").style.opacity = "100%";
    // document.body.style.backgroundColor = "white";
    
    
}

