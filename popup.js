// let userinput = document.getElementById('#userinput');
// userinput.input(changeText);

// function changeText() {
// 	let params = {
// 		active: true,
// 		currentWindow: true
// 	};

// 	chrome.tabs.query(params, gotTabs);
// 	function gotTabs(tab) {
// 		let message = userinput.value();
// 		console.log(message);
// 		let msg = {
// 			txt: "hello"
// 		};
// 		chrome.tabs.sendMessage(tab[0].id, msg);
// 	}
// }

// let zoom = document.getElementById('zoomText');

// zoom.onclick = zoomThatText;

// function zoomThatText() {
// 	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
// 		let paragraphs = document.getElementsByTagName('p');
// 		for (elt of paragraphs) {
// 			elt.style['font-size'] = '30px';
// 			elt.style['line-height'] = '1.5';
// 		}
// 	});
// }

//chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
	console.log(message);
	if (message.txt === "on") {
		let paragraphs = document.getElementsByTagName('p');
		let links = document.getElementsByTagName('a');
		for (elt of paragraphs) {
			elt.style['font-size'] = '30px';
			elt.style['line-height'] = '1.5';
		}
		for (elt of links) {
			elt.style['font-weight'] = 'bold';
		}
	}
}