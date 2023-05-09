let shiftDown = false;
let keyMap = {
"0":48,"1":49,"2":50,"3":51,"4":52,"5":53,"6":54,"7":55,"8":56,"9":57,
"a":65,"b":66,"c":67,"d":68,"e":69,"f":70,"g":71,"h":72,"i":73,"j":74,"k":75,
"l":76,"m":77,"n":78,"o":79,"p":80,"q":81,"r":82,"s":83,"t":84,"u":85,"v":86,
"w":87,"x":88,"y":89,"z":90,
"ArrowRight":39,"ArrowLeft":37,"ArrowUp":38,"ArrowDown":40,
"PageDown":34,"Clear":12,"Home":36,"PageUp":33,"End":35,"Delete":46,"Insert":45,
"Control":17,"AltGraph":18,"Meta":92,"Alt":18,"Shift":16,"CapsLock":20,"Tab":9,
"Escape":27,
"F1":112,"F2":113,";":188,":":190,"_":189,"'":191,"*":187,
"Q":81,"W":87,"E":69,"R":82,"T":84,"Z":90,"S":83,"A":65,"D":68,"I":73,"U":85,
"O":79,"Y":89,"X":88,"C":67,"F":70,"V":86,"G":71,"B":66,"H":72,"N":78,"J":74,
"M":77,"K":75,"L":76,"P":80,
"Ö":192,"Ä":222,"Ü":186,"ß":219,"ü":186,"ö":192,"ä":222,
"#":191,"Dead":220,"+":187,",":188,".":190,"-":189,"!":49,"\"":50,"§":51,
"$":52,"%":53,"&":54,"/":55,"(":56,")":57,"=":48,"?":219,"°":220
};

document.addEventListener("keydown", function(event) {
	//console.log(event.keyCode);
	//console.log(event.key);
	if (event.code == "ShiftLeft") {
		shiftDown = true;
	}
	if (event.code == "KeyA" && shiftDown) {
		// console.log("press");
		chrome.storage.local.get("keyPluginStoredSequence", function(data) {
			console.log(data["keyPluginStoredSequence"]);
			let keySequence = data["keyPluginStoredSequence"];
			
			for (let key of keySequence) {
				// console.log(keyMap[key]);
				document.dispatchEvent(new KeyboardEvent("keydown", {"key": key, "keyCode": keyMap[key]}));
				
			}
		});
	}
});

document.addEventListener("keyup", function(event) {
	if (event.code == "ShiftLeft") {
		shiftDown = false;
	}
});