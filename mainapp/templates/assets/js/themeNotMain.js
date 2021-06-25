function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}
var theme = getCookie("theme");
var btn = document.getElementById("theme-button");
var btn_mobile = document.getElementById("theme-button-mobile");
var link = document.getElementById("theme-link");

if (theme == "dark") {
	link.setAttribute("href", "../assets/css/darkTheme.css");
} else if (theme == "light") {
	link.setAttribute("href", "../assets/css/lightTheme.css");
}

btn.addEventListener("click", function () { ChangeTheme(); });
btn_mobile.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
	let lightTheme = "../assets/css/lightTheme.css";
	let darkTheme = "../assets/css/darkTheme.css";
	
	var currTheme = link.getAttribute("href");
	var theme = "";
	
	if(currTheme == lightTheme)
	{
		currTheme = darkTheme;
		document.cookie = "theme=dark; path=/";
	}
	else
	{
		currTheme = lightTheme;
		document.cookie = "theme=light; path=/";
	}
	
	link.setAttribute("href", currTheme);
}