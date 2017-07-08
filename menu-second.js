var OpenButton = document.getElementById("menu-button"),
  CloseButton = document.getElementById("close-button"),
  CloseZone = document.getElementById("zone-close");

OpenButton.addEventListener("click", function(){
    $("#menu-block").addClass("menu-active"),
    $("#menu-button").addClass("menu-icon-hide"),
    $("#close-button").addClass("close-icon-visible");
});
CloseButton.addEventListener("click", function(){
    $("#menu-block").removeClass("menu-active"),
    $("#menu-button").removeClass("menu-icon-hide"),
    $("#close-button").removeClass("close-icon-visible");
});
jQuery(function($){
  $(CloseZone).mouseup(function (e){
    var div = $("#menu-content");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
    $("#menu-block").removeClass("menu-active"),
    $("#menu-button").removeClass("menu-icon-hide"),
    $("#close-button").removeClass("close-icon-visible");
    }
  });
});
