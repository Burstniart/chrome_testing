function clearBadge() {
    chrome.action.setBadgeText({text: 'OFF'});
    chrome.action.setBadgeBackgroundColor({color: 'red'});
    window.close;
}
function activateBadge() {
    chrome.action.setBadgeText({text: 'ON'});
    chrome.action.setBadgeBackgroundColor({color: '#00E404'});
    window.close;
}

document.getElementById('getGreen').addEventListener('click', activateBadge);
document.getElementById('notGreen').addEventListener('click',clearBadge);
