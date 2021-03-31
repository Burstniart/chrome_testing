chrome.browserAction.onClicked.addListener(function(tab) {
    console.log('Turning ' + tab.url + ' green!');
    chrome.scripting.executeScript({
        code: document.body.style.backgroundColor="green"
    });
});