console.log("Chrome extension gogogo");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
	console.log(message.txt);
	if (message.txt === "on") {
		let paragraphs = document.getElementsByTagName('p');
		for (elt of paragraphs) {
			elt.style['font-size'] = '30px';
		}
	}
}