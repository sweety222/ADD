
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.innerHTML === "PRICE:80") {
        x.innerHTML = "PRICE:81";
    } else {
        x.innerHTML = "PRICE:80";
    }
}