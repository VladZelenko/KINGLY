//mobile menu
function openNav(){
	document.getElementById('nav').style.width = "100%";
	document.getElementById('open-btn-nav').style.opacity = "0";
}
function closeNav(){
	document.getElementById('nav').style.width = "0%";
	document.getElementById('open-btn-nav').style.opacity = "1";
}
//випадашка по вертикалі, працює при закоменченому по горизонталі
// function openNav(){
// 	document.getElementById('nav').style.height = "100%";
//	document.getElementById('open-btn-nav').style.opacity = "0";
// }
// function closeNav(){
// 	document.getElementById('nav').style.height = "0%";
//	document.getElementById('open-btn-nav').style.opacity = "1";
// }

$('.header-slider').slick({
	infinite: true,
	speed: 1000,
	autoplay: true,
	autoplaySpeed: 3000,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
	{
		breakpoint: 1024,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: true
		}
	},
	{
		breakpoint: 600,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	},
	{
		breakpoint: 480,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}
	]
});