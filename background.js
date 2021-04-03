function greennenPage() {
    document.body.style.backgroundColor = "green";
}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: greennenPage
    })
})

chrome.runtime.onInstalled.addListener(function() {
    //Replace all rules...
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        //With a new rule...
        chrome.declarativeContent.onPageChanged.addRules([
            {
                // That fires when a page's URL contains 'github'...
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { urlContains: 'g'},
                    })
                ],
                // And shows the extension's page action
                actions: [ new crome.declarativeContent.ShowPageAction()]
            }
        ]);
    });
});
