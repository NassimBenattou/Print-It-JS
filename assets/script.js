const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

window.onload = function (){

	var i = 0;

	var arrowRight = document.getElementsByClassName('arrow_right')[i];

	var arrowLeft = document.getElementsByClassName('arrow_left')[i];

	document.getElementsByClassName('dot')[0].classList.add('dot_selected');
	
	arrowRight.onclick = function(){

		if(i <= 2){
			
			var currentDot = document.getElementsByClassName('dot')[i];
			var nextSibling = currentDot.nextElementSibling;
			
			i++;
			
			currentDot.classList.remove('dot_selected');
			nextSibling.classList.add('dot_selected');

			document.getElementsByClassName("banner-img")[0].src = "./assets/images/slideshow/"+slides[i].image;

			document.getElementsByTagName("p")[0].innerHTML = slides[i].tagLine;
		}
		else{
			
			i = 0;

			document.getElementsByClassName("banner-img")[0].src = "./assets/images/slideshow/"+slides[i].image;
			document.getElementsByTagName("p")[0].innerHTML = slides[i].tagLine;
			document.getElementsByClassName('dot')[3].classList.remove('dot_selected');
			document.getElementsByClassName('dot')[0].classList.add('dot_selected');
		}
	}
	
	arrowLeft.onclick = function(){

		if(i <= 3 && i >= 1){
			
			var currentDot = document.getElementsByClassName('dot')[i];
			var previousSibling = currentDot.previousElementSibling;
			
			i--;

			currentDot.classList.remove('dot_selected');
			previousSibling.classList.add('dot_selected');

			document.getElementsByClassName("banner-img")[0].src = "./assets/images/slideshow/"+slides[i].image;
			document.getElementsByTagName("p")[0].innerHTML = slides[i].tagLine;
		}
		else{
			
			i = 3;

			document.getElementsByClassName("banner-img")[0].src = "./assets/images/slideshow/"+slides[i].image;
			document.getElementsByTagName("p")[0].innerHTML = slides[i].tagLine;
			document.getElementsByClassName('dot')[0].classList.remove('dot_selected');
			document.getElementsByClassName('dot')[3].classList.add('dot_selected');
		}
	}
}
