let div = document.getElementById('bg');
div.style.backgroundColor = "black";
div.style.color = "white";
function setUp() {
    if (div.style.backgroundColor === "black") {
        div.style.backgroundColor = "white";
        div.style.color = "black";
    } else {
        div.style.backgroundColor = "black";
        div.style.color = "white";
    }
}
