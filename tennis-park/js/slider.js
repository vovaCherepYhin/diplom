document.addEventListener("DOMContentLoaded", () => {
	// находим компонент с классом slider
	const slider = document.querySelector(".slider");
// находим все картинки
	const images = document.querySelectorAll(".slider .slider-line img");
// находим первый элемент у которого класс slider-line
	const sliderLine = document.querySelector(".slider .slider-line");
// находим кнопки prevButton и nextButton
	const prevButton = document.querySelector(".slider-prev");
	const nextButton = document.querySelector(".slider-next");

	let count = 0;
	let width = 0;

	const rollSlider = () => {
		sliderLine.style.transform = `translate(-${count * width}px)`;
	}

	const init = () => {
		console.log("resize");

		width = slider.offsetWidth;
		sliderLine.style.width = width * images.length + "px";

		images.forEach(image => {
			image.style.width = width + "px";
			image.style.height = "auto";
		});

		rollSlider();
	}

	nextButton.addEventListener("click",  () => {
		count++;

		if (count >= images.length) {
			count = 0;
		}

		rollSlider();
	});

	prevButton.addEventListener('click',  () => {
		count--;

		if (count < 0) {
			count = images.length - 1;
		}

		rollSlider();
	});

	window.addEventListener('resize', init);

	init();
});
