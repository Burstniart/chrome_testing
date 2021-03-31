# chrome_testing
# pushing 1
# switched to manifest v3 because of error in background.js wich didn't recognized chrome.scripting.executeScript
# omited console.log for i dont know how to call it so it returns the tab.url
# edit 31/03/2021
# checked commands from "api/examples/pin_tab"
# succesfully injected background.js for manifest v3
# succesfully added commands for shortcut function execution
# fixed misplaced console.log ( Error was looking at foreground log while looking for a console.log being executed in the background.js, resolved by opening the extension service worker aka "background.js" dev tools from the extensions panel)
# now i can see the url from the tab my extension is executed from by clicking it with chrome.action.onClicked.addListener

# experience problems for executing another command from a shortcut, further investigation is required