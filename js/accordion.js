const topics = document.querySelectorAll(".topic");

topics.forEach(function (topic) {
	topic.addEventListener("click", function (event) {
		//console.log(event.target); //смотрим на каком элементе произошел клик

		if (event.target.closest(".topic__btn")) {
			

			const isOpened = topic.classList.toggle("topic--open"); // toggle - по 1 клику добавляет класс, по 2 клику убирает (как выключатель)
			// console.log("isOpened", isOpened);
            const content = topic.querySelector(".topic__content");
			const img = topic.querySelector(".topic__icon");
			if (isOpened) {
				img.src = "./img/icons/btn-minus.svg";
                content.style.maxHeight = content.scrollHeight + "px";
			} else {
				img.src = "./img/icons/btn-plus.svg";
                content.style.maxHeight = "0px";
			}
		} 
	});
});
