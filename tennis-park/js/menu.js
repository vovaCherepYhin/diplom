document.addEventListener("DOMContentLoaded", () => {
	// находим кнопка меню и само меню с логотипом
	const menuBtn = document.querySelector(".menu-btn");
	const menu = document.querySelector(".logo-with-navigation");

	// навешиваем событие клик на кнопку
	menuBtn.addEventListener("click", () => {
		// когда кликаем на кнопку то у нас добавляется либо убирается класс active
		menu.classList.toggle("active");
		menuBtn.classList.toggle("active");
	});
});

