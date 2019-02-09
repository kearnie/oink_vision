console.log("Chrome extension gogogo");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
	console.log(message);
	if (message.txt === "on") {
		let paragraphs = document.getElementsByTagName('p');
		for (elt of paragraphs) {
			elt.style['font-size'] = '30px';
			elt.style['line-height'] = '1.5';
		}
	}
}