function greennenPage() {
    document.body.style.backgroundColor = "green";
}
function alertMe() {
    alert("Activated a shortcut")
}

// without a popup clicking on the icon will autoatically execute
// the following code
chrome.action.onClicked.addListener((tab) => {
    console.log('Turning ' + tab.url + ' green!');
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: greennenPage,
    });
  });

  chrome.commands.onCommand.addListener(function(command) {
      if (command == "toggle-pin") {
          // Get the currently selected tab
          chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            // Toggle the pinned status
            var current = tabs[0]
            chrome.tabs.update(current.id, {'pinned': !current.pinned});
            console.log("Pinned current tab: " + current.url)
          });
      } 
  });


