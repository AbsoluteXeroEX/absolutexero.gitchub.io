var modals = document.querySelectorAll('.modal');
var a = document.querySelectorAll("figcaption.modalBtn");
var b = document.querySelectorAll("a.modalBtn");
var spans = document.getElementsByClassName("close");

for (var i = 0; i < a.length; i++) {
  a[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
  }
}

for (var i = 0; i < b.length; i++) {
  b[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
  }
}

for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
  for (var index in modals) {
   if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
  }
 }
}

window.onclick = function(event) {
 if (event.target.classList.contains('modal')) {
  for (var index in modals) {
   if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
  }
 }
}
