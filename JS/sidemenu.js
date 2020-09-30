document.getElementById("menu").style.width = "0";

function openNav(){
    document.getElementById("menu").style.width = "50%";
    document.getElementById("menu").style.display ="block";
    // document.getElementById("menu").style.transition ="0.4s";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
}

function closeNav(){
    document.getElementById("menu").style.width = "0";
    document.getElementById("opacity").style.opacity = "100%";
    // document.body.style.backgroundColor = "white";
}

