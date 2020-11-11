var now = new Date();

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var time = document.getElementById("time");
if (now.getDay!=5 && now.getHours()<17 && now.getHours()>=9){
    time.innerHTML = `We are open! ${days[now.getDay()]} ${now.getHours()}:${now.getMinutes()} Palestine time`;
    time.style.color = ('green');
}
else{
    time.innerHTML = 'Closed now';
    time.style.color = ('red');
}