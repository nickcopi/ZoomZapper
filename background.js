(function() {
	const joinPath = 'https://zoom.us/wc/join/';
	const isJoin = url=>url.includes('/j/');
	const callback = details => {
		if (isJoin(details.url)) {
			let ending = details.url.split('/');
			ending = ending[ending.length-1];
			return {
				redirectUrl: joinPath + ending
			};
		}
	};
	chrome.webRequest.onBeforeRequest.addListener(callback, {
		//urls: ['*://*.zoom.us/','*://zoom.us/']
		urls:['<all_urls>'], //this will only match urls whitelisted by the manifest (zoom format ones)
	}, ['blocking']);
})();
