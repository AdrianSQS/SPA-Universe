import {Router} from "./router.js"

const router = new Router()
router.add('/home', "/pages/home.html")
router.add("/o-universo", "/pages/o-universo.html")
router.add("/exploracao", "/pages/exploracao.html")


router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

// Get the container element
var btnContainer = document.getElementById("myUL");

// Get all buttons with class="btn" inside the container
var links = btnContainer.getElementsByClassName("link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}