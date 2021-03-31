function greennenPage() {
    document.body.style.backgroundColor = "green";
}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: greennenPage,
    });
  });