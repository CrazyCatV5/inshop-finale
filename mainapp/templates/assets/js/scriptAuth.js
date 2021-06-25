document.getElementById("auto").click();
function change(evt, formName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("main__auth__container");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("ar");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(formName).style.display = "block";
	evt.currentTarget.className += " active";
}