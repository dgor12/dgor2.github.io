let searchFa = document.querySelector(".serach-fa")
let cartFa = document.querySelector(".cart-fa");
let searchMenu = document.querySelector(".search-menu");
let closeFa = document.querySelector(".close-fa");
let input = document.querySelector(".input");
let body = document.querySelector(".body");

searchFa.onclick=()=>{
	searchMenu.style.width = "1583px";
	searchMenu.style.height = "300px"
	searchMenu.style.display = "block"
	searchMenu.style.transition = "3s"
}



closeFa.onclick=()=>{
	searchMenu.style.width = "0px"
	searchMenu.style.height = "0px"
	searchMenu.style.display = "none"
}
