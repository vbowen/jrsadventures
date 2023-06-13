

function scrollFunction() {
let mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function nextPage() {
	let currentSession = document.getElementById("sessionID").innerHTML.slice(8);
	currentSession++;
	document.getElementById("nextLink").href = "session"+currentSession+".html";
}

function previousPage() {
	let currentSession = document.getElementById("sessionID").innerHTML.slice(8);
	currentSession--;
	document.getElementById("previousLink").href = "session"+currentSession+".html";
}