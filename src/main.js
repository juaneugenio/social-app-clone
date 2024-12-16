/** @format */
document.addEventListener("DOMContentLoaded", function () {
	const settingsMenu = document.querySelector(".settings-menu");

	function settingsMenuToggle() {
		settingsMenu.classList.toggle("settings-menu-height");
	}

	const userIcon = document.querySelector(".nav-user-icon");
	userIcon.addEventListener("click", settingsMenuToggle);

	const darkBtn = document.querySelector("#dark-btn");
	darkBtn.onclick = function () {
		darkBtn.classList.toggle("dark-btn-on");
		document.body.classList.toggle("dark-theme");
	};
});
