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

# edit 01/04/2021
# succesfully added a console.log including current url for pinned tab, found out current variable is a tab value, in wich tab methods can be applied, such as .url
! STydu posponed due to a call from work, resume at user interface from devs exetension guide, goodspeed, Burstniart
!! resumed work inmediatly due to a false alarm, godspeed, Burstniart
# deactivated the colorBackground: 'green' function because adding a popup in action ( previouosly browser_action ) disables this event handler (onClick.addListener)
# learned about the migrations of browser action to acton in manifest v3
# added popup.html and popup.js as part of thee badge adition to handle events as button click from the pop up, which now turn on the badge's text and display 'ON' with green background and 'OFF' with red background
# added icons to the manifest.json