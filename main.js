window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

var input = document.getElementById("myInput");
var placeholders = ["Baju Lebaran","Baju Pria", "Baju Wanita", "Sepatu"];

var index = 0;

function changePlaceholder(placeholder) {
    input.placeholder = placeholders[index];
    index = (index + 1) % placeholders.length;
}

setInterval(changePlaceholder, 3000);

// var link = document.getElementById("myLink");

// link.addEventListener("mouseover", function(event) {
//     event.preventDefault();

//     this.classList.toggle("header ul li a")

//     this.style.textDecoration = "underline";
// });

// link.addEventListener("mouseout", function() {
//     this.style.textDecoration = "none";
// });

