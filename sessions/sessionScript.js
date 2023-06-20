

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

function dropListHigh() {
	var mydiv = document.getElementById("dropList");
	var aTag = document.createElement('a');
	aTag.setAttribute('href',"lyleLoot.html");
	aTag.innerText = "Loot";
	mydiv.append(aTag);
	var aTag1 = document.createElement('a');
	aTag1.setAttribute('href', "lyleNPCs.html");
	aTag1.innerText = "NPCs";
	mydiv.append(aTag1);
	var aTag2 = document.createElement('a');
	aTag2.setAttribute('href', "lyleQuests.html");
	aTag2.innerText = "Quests";
	mydiv.append(aTag2);
	var aTag3 = document.createElement('a');
	aTag3.setAttribute('href', "lyleLocations.html");
	aTag3.innerText = "Locations";
	mydiv.append(aTag3);
	var aTag4 = document.createElement('a');
	aTag4.setAttribute('href', "sessions/session1.html");
	aTag4.innerText = "Session 1 (14 January 2023)";
	mydiv.append(aTag4);
	var aTag5 = document.createElement('a');
	aTag5.setAttribute('href', "sessions/session2.html");
	aTag5.innerText = "Session 2 (21 January 2023)";
	mydiv.append(aTag5);
	var aTag6 = document.createElement('a');
	aTag6.setAttribute('href', "sessions/session3.html");
	aTag6.innerText = "Session 3 (28 January 2023)";
	mydiv.append(aTag6);
	var aTag7 = document.createElement('a');
	aTag7.setAttribute('href', "sessions/session4.html");
	aTag7.innerText = "Session 4 (04 February 2023)";
	mydiv.append(aTag7);
	var aTag8 = document.createElement('a');
	aTag8.setAttribute('href', "sessions/session5.html");
	aTag8.innerText = "Session 5 (18 February 2023)";
	mydiv.append(aTag8);
	var aTag9 = document.createElement('a');
	aTag9.setAttribute('href', "sessions/session6.html");
	aTag9.innerText = "Session 6 (25 February 2023)";
	mydiv.append(aTag9);
	var aTag10 = document.createElement('a');
	aTag10.setAttribute('href', "sessions/session7.html");
	aTag10.innerText = "Session 7 (04 March 2023)";
	mydiv.append(aTag10);
	var aTag11 = document.createElement('a');
	aTag11.setAttribute('href', "sessions/session8.html");
	aTag11.innerText = "Session 8 (11 March 2023)";
	mydiv.append(aTag11);
	var aTag12 = document.createElement('a');
	aTag12.setAttribute('href', "sessions/session9.html");
	aTag12.innerText = "Session 9 (18 March 2023)";
	mydiv.append(aTag12);
	var aTag13 = document.createElement('a');
	aTag13.setAttribute('href', "sessions/session10.html");
	aTag13.innerText = "Session 10 (1 April 2023)";
	mydiv.append(aTag13);
	var aTag14 = document.createElement('a');
	aTag14.setAttribute('href', "sessions/session11.html");
	aTag14.innerText = "Session 11 (22 April 2023)";
	mydiv.append(aTag14);
	var aTag15 = document.createElement('a');
	aTag15.setAttribute('href', "sessions/session12.html");
	aTag15.innerText = "Session 12 (29 April 2023)";
	mydiv.append(aTag15);
	var aTag16 = document.createElement('a');
	aTag16.setAttribute('href', "sessions/session13.html");
	aTag16.innerText = "Session 13 (06 May 2023)";
	mydiv.append(aTag16);
	var aTag17 = document.createElement('a');
	aTag17.setAttribute('href', "sessions/session14.html");
	aTag17.innerText = "Session 14 (20 May 2023)";
	mydiv.append(aTag17);
	var aTag18 = document.createElement('a');
	aTag18.setAttribute('href', "sessions/session15.html");
	aTag18.innerText = "Session 15 (27 May 2023)";
	mydiv.append(aTag18);
	var aTag19 = document.createElement('a');
	aTag19.setAttribute('href', "sessions/session16.html");
	aTag19.innerText = "Session 16 (03 June 2023)";
	mydiv.append(aTag19);
	var aTag20 = document.createElement('a');
	aTag20.setAttribute('href', "sessions/session17.html");
	aTag20.innerText = "Session 17 (17 June 2023)";
	mydiv.append(aTag20);
}

function dropListSession() {
	var mydiv = document.getElementById("dropList");
	var aTag = document.createElement('a');
	aTag.setAttribute('href',"../lyleLoot.html");
	aTag.innerText = "Loot";
	mydiv.append(aTag);
	var aTag1 = document.createElement('a');
	aTag1.setAttribute('href', "../lyleNPCs.html");
	aTag1.innerText = "NPCs";
	mydiv.append(aTag1);
	var aTag2 = document.createElement('a');
	aTag2.setAttribute('href', "../lyleQuests.html");
	aTag2.innerText = "Quests";
	mydiv.append(aTag2);
	var aTag3 = document.createElement('a');
	aTag3.setAttribute('href', "../lyleLocations.html");
	aTag3.innerText = "Locations";
	mydiv.append(aTag3);
	var aTag4 = document.createElement('a');
	aTag4.setAttribute('href', "session1.html");
	aTag4.innerText = "Session 1 (14 January 2023)";
	mydiv.append(aTag4);
	var aTag5 = document.createElement('a');
	aTag5.setAttribute('href', "session2.html");
	aTag5.innerText = "Session 2 (21 January 2023)";
	mydiv.append(aTag5);
	var aTag6 = document.createElement('a');
	aTag6.setAttribute('href', "session3.html");
	aTag6.innerText = "Session 3 (28 January 2023)";
	mydiv.append(aTag6);
	var aTag7 = document.createElement('a');
	aTag7.setAttribute('href', "session4.html");
	aTag7.innerText = "Session 4 (04 February 2023)";
	mydiv.append(aTag7);
	var aTag8 = document.createElement('a');
	aTag8.setAttribute('href', "session5.html");
	aTag8.innerText = "Session 5 (18 February 2023)";
	mydiv.append(aTag8);
	var aTag9 = document.createElement('a');
	aTag9.setAttribute('href', "session6.html");
	aTag9.innerText = "Session 6 (25 February 2023)";
	mydiv.append(aTag9);
	var aTag10 = document.createElement('a');
	aTag10.setAttribute('href', "session7.html");
	aTag10.innerText = "Session 7 (04 March 2023)";
	mydiv.append(aTag10);
	var aTag11 = document.createElement('a');
	aTag11.setAttribute('href', "session8.html");
	aTag11.innerText = "Session 8 (11 March 2023)";
	mydiv.append(aTag11);
	var aTag12 = document.createElement('a');
	aTag12.setAttribute('href', "session9.html");
	aTag12.innerText = "Session 9 (18 March 2023)";
	mydiv.append(aTag12);
	var aTag13 = document.createElement('a');
	aTag13.setAttribute('href', "session10.html");
	aTag13.innerText = "Session 10 (1 April 2023)";
	mydiv.append(aTag13);
	var aTag14 = document.createElement('a');
	aTag14.setAttribute('href', "session11.html");
	aTag14.innerText = "Session 11 (22 April 2023)";
	mydiv.append(aTag14);
	var aTag15 = document.createElement('a');
	aTag15.setAttribute('href', "session12.html");
	aTag15.innerText = "Session 12 (29 April 2023)";
	mydiv.append(aTag15);
	var aTag16 = document.createElement('a');
	aTag16.setAttribute('href', "session13.html");
	aTag16.innerText = "Session 13 (06 May 2023)";
	mydiv.append(aTag16);
	var aTag17 = document.createElement('a');
	aTag17.setAttribute('href', "session14.html");
	aTag17.innerText = "Session 14 (20 May 2023)";
	mydiv.append(aTag17);
	var aTag18 = document.createElement('a');
	aTag18.setAttribute('href', "session15.html");
	aTag18.innerText = "Session 15 (27 May 2023)";
	mydiv.append(aTag18);
	var aTag19 = document.createElement('a');
	aTag19.setAttribute('href', "session16.html");
	aTag19.innerText = "Session 16 (03 June 2023)";
	mydiv.append(aTag19);
	var aTag20 = document.createElement('a');
	aTag20.setAttribute('href', "session17.html");
	aTag20.innerText = "Session 17 (17 June 2023)";
	mydiv.append(aTag20);
}