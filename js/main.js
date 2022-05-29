var mybutton = document.getElementById("top-btn");

window.onscroll = function(){
	topupbtn();
	navbar();
	slideshow();
};

function topupbtn(){
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
	document.body.scrollTop = 0; 
	document.documentElement.scrollTop = 0; 
}

function navbar(){
  if (document.body.scrollTop > 18 || document.documentElement.scrollTop > 18) {
    $("nav:first").addClass("menu");
  } else {
    $("nav:first").removeClass("menu");
  }
}

$(document).ready(function () {
  	$("ul li a").on("click",function(){
  		$("ul li a").removeClass("active");
  		$(this).addClass("active");
	});
});
