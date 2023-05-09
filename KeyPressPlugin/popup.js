window.addEventListener("load", function() {
	
	let debounce = false;
	
	let inputOrderSaveButton = document.querySelector("#inputOrderSaveButton");
	let inputOrderTextbox = document.querySelector("#inputOrderTextbox");
	
	function SaveInput() 
	{
		if (!debounce && inputOrderSaveButton && inputOrderTextbox && inputOrderTextbox.value != "") {
			debounce = true;
			keySequence = inputOrderTextbox.value;
			chrome.storage.local.set({"keyPluginStoredSequence" : keySequence}, function() {
				debounce = false;
			});
			
		}
	}
	
	if (inputOrderSaveButton) {
		inputOrderSaveButton.addEventListener("click", function() {
			SaveInput();
		});
	}
	if (inputOrderTextbox) {
		chrome.storage.local.get("keyPluginStoredSequence", function(data) {
			console.log(data);
			inputOrderTextbox.value = data["keyPluginStoredSequence"];
		});
		window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'a'}));
	}
	
	
});

// Reference for using postMessage found here:
// https://stackoverflow.com/questions/32508008/chrome-extension-chrome-tabs-sendmessage-is-sending-the-message-to-all-tabs-eve