$(window).on("load", function () {
  $(".loader-wrapper").fadeOut(1200);
});

var title = $(".title");

for (var i = 0; i < title.length; i++) {
  title[i].addEventListener("click", toggleClasses);
}
function toggleClasses() {
  var tabColor= $( this ).css( "background-color" );
  allTabsToHide = $(".tab");
  for (var i = 0; i < allTabsToHide.length; i++) {
    allTabsToHide[i].classList.remove("d-block");
    allTabsToHide[i].classList.add("d-none");
  }
  var tabToShow = event.target.innerText.toLowerCase();
  var newTab = document.getElementById(tabToShow);
  var leftBar = $(".left-bar").css( "border-left-color",tabColor );
  newTab.classList.add("d-block");
  showTab = event.target.id;
}
