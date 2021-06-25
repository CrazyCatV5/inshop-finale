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
	link.setAttribute("href", "http://127.0.0.1:8000/static/css/darkTheme.css");
} else if (theme == "light") {
	link.setAttribute("href", "http://127.0.0.1:8000/static/css/lightTheme.css");
}

btn.addEventListener("click", function () { ChangeTheme(); });
btn_mobile.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
	let lightTheme = "http://127.0.0.1:8000/static/css/lightTheme.css";
	let darkTheme = "http://127.0.0.1:8000/static/css/darkTheme.css";
	
	var currTheme = link.getAttribute("href");
	var theme = "";
	
	if(currTheme == lightTheme)
	{
		currTheme = darkTheme;
		document.cookie = "theme=dark; path=http://127.0.0.1:8000/static/css/darkTheme.css";
	}
	else
	{
		currTheme = lightTheme;
		document.cookie = "theme=light; path=http://127.0.0.1:8000/static/css/lightTheme.css";
	}
	
	link.setAttribute("href", currTheme);
}