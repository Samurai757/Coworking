/* Модальные окна */

/* Находим элементы для модального окна */

// Все кнопки которые могут открывать модальные окна, по data атрибуту [data-action="modal"]
const openModalBtns = document.querySelectorAll('[data-action="modal"]');

const modal = document.querySelector(".modal"); // Модальное окно
const closeModalBtn = document.querySelector("#closeModal"); // Кнопка закрытия модального окна
const modalBody = document.querySelector(".modal__body"); // Блок с контентом модального окна

function openModal() {
	modal.classList.add("modal--open");
	document.body.classList.add("no-scroll");
}
function closeModal() {
	modal.classList.remove("modal--open");
	document.body.classList.remove("no-scroll");
}

// Перебираем все кнопки открытия модального окна
openModalBtns.forEach(function (item) {
	// Вешаем на них прослушку по клику
	item.addEventListener("click", function () {
		openModal();
	});
});

// Слушаем клик по кнопке закрытия модального окна
closeModalBtn.addEventListener("click", function () {
	closeModal();
});

/* Закрытие модалки при клике на оверлее */

// Слушаем клик по модальному окну
modal.addEventListener("click", function () {
	closeModal();
});

// Слушаем клик непосредственно внутри модального окна
modalBody.addEventListener("click", function (event) {
	// Запрещаем кликам из содержимого модального окна "всплывать наверх"
	// Чтобы они не доходили до элемента modal и не закрывали модальное окно
	event.stopPropagation();
});

// Закрываем модалку нажатием Escape
document.addEventListener("keydown", function (event) {
	if (event.key == 'Escape') {
		closeModal();
	}
});
