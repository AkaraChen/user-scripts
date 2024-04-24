// ==UserScript==
// @name        Keyboard shortcut for open search tab in telegram
// @namespace   Violentmonkey Scripts
// @match       https://web.telegram.org/k/*
// @grant       none
// @version     1.0
// @author      AkaraChen
// @description 2024/4/24 11:33:31
// ==/UserScript==

// add search shortcut
document.addEventListener('keydown', function(event) {
  if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
    var sidebarInput = document.querySelector('#column-left > div > div > div.sidebar-header.can-have-forum > div.input-search > input');
    console.log(sidebarInput)
    if (sidebarInput) {
      sidebarInput.focus();
    }
  }
});
