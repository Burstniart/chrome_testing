

chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { urlContains: 'g'},
                    })
                ],
                actions: [ new chrome.declarativeContent.ShowPageAction() ]
            },
        ]);
    });
});

function greennenPage() {
    document.body.style.backgroundColor = "green";
}



chrome.action.onClicked.addListener((tab) => {
    console.log('Turning ' + tab.url + ' green!');
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: greennenPage,
    });
  });