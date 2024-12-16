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
		// setting the localsotorage to remember de them when page reloading
		if (localStorage.getItem("theme") == "light") {
			localStorage.setItem("theme", "dark");
		} else {
			localStorage.setItem("theme", "light");
		}
	};
	if (localStorage.getItem("theme") == "light") {
		darkBtn.classList.remove("dark-btn-on");
		document.body.classList.remove("dark-theme");
	} else if (localStorage.getItem("theme") == "dark") {
		darkBtn.classList.add("dark-btn-on");
		document.body.classList.add("dark-theme");
	} else {
		localStorage.setItem("theme", "light");
	}
});
