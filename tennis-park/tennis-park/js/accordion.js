document.addEventListener("DOMContentLoaded", () => {
	// находим все элементы с классом accordion
	const accordions = document.querySelectorAll(".accordion");

	accordions.forEach(accordion => {
		accordion.addEventListener("click", () => {
			// добавляем либо убираем класс active
			accordion.classList.toggle("active")

			// nextElementSibling - возвращает последующий элемент
			const panel = accordion.nextElementSibling;

			// проверяем не равно ли свойство max-height null у panel
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		});
	});
});
