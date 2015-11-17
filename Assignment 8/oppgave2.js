var fylker = ["Finnmark", "Troms", "Nordland", "Nord-Trøndelag", "Sør-Trøndelag", "Møre og Romsdal",
				"Sogn og Fjorande", "Hordaland", "Rogaland", "Vest-Agder", "Øst-Agder", "Telemark",
				"Vestfold", "Buskerud", "Oppdal", "Hedmark", "Oslo", "Akershus", "Østfold"]



var randomfylke = fylker[Math.floor(Math.random()*fylker.length)]


window.addEventListener("load", function load(event){
    window.removeEventListener("load", load, false); //remove listener, no longer needed
	document.getElementById("fylke").innerHTML = randomfylke;
},false);
