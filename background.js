var address = /^0x[a-fA-F0-9]{40}$/;
var txnhash = /^0x[a-fA-F0-9]{64}$/;
var block = /^\d+$/;

chrome.contextMenus.create({
    id: 'create-menu',
    title: 'Search Etherscan for "%s"',
    contexts: ['selection']
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    var text = info.selectionText;
    if (info.menuItemId == 'create-menu') {
        if (address.test(text)) {
            chrome.tabs.create({ url: 'https://etherscan.io/address/' + text });
        }
        else if (txnhash.test(text)) {
            chrome.tabs.create({ url: 'https://etherscan.io/tx/' + text });
        }
        else if (block.test(text)) {
            chrome.tabs.create({ url: 'https://etherscan.io/block/' + text });
        }
        else {
            chrome.tabs.create({ url: 'https://etherscan.io/enslookup-search?search=' + text });
        }
    }
});
