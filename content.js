console.log("Chrome extension gogogo");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
	console.log(message);
	if (message.txt === "on") {
		let paragraphs = document.getElementsByTagName('p');
		let lists = document.getElementsByTagName('li');
		let links = document.getElementsByTagName('a');
		let h1s = document.getElementsByTagName('h1');
		let h2s = document.getElementsByTagName('h2');
		let h3s = document.getElementsByTagName('h3');
		let h4s = document.getElementsByTagName('h4');

		for (elt of paragraphs) {
			elt.style['font-size'] = '28px';
			elt.style['line-height'] = '1.6';
			elt.style['letter-spacing'] = '0.2px';
		}
		for (elt of lists) {
			elt.style['font-size'] = '27px';
			elt.style['line-height'] = '1.4';
		}
		for (elt of links) {
			elt.style['font-size'] = '27px';
			elt.style['line-height'] = '1.4';
			elt.style['font-weight'] = '600';
			elt.style['color'] = '#1c63b2';
		}
		for (elt of h1s) {
			elt.style['font-size'] = '36px';
			elt.style['line-height'] = '1.4';
			elt.style['font-weight'] = '600';
			elt.style['font-family'] = 'sans-serif';
			elt.style['letter-spacing'] = '0.3px';
			elt.style['text-transform'] = 'uppercase';
		}
		for (elt of h2s) {
			elt.style['font-size'] = '35px';
			elt.style['line-height'] = '1.4';
			elt.style['font-weight'] = '600';
			elt.style['font-family'] = 'sans-serif';
			elt.style['letter-spacing'] = '0.3px';
			elt.style['text-transform'] = 'uppercase';
		}
		for (elt of h3s) {
			elt.style['font-size'] = '35px';
			elt.style['line-height'] = '1.4';
			elt.style['font-weight'] = '600';
			elt.style['font-family'] = 'sans-serif';
			elt.style['letter-spacing'] = '0.3px';
			elt.style['text-transform'] = 'uppercase';
			elt.style['color'] = 'gray';
		}
		for (elt of h4s) {
			elt.style['font-size'] = '32px';
			elt.style['line-height'] = '1.4';
			elt.style['font-weight'] = '600';
			elt.style['font-family'] = 'sans-serif';
			elt.style['letter-spacing'] = '0.3px';
			elt.style['text-transform'] = 'uppercase';
			elt.style['color'] = 'gray';
		}
	}
}