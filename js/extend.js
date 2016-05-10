/* working Example */

window.onload = function() 
{
	var s = document.createElement('script');
	s.src = chrome.extension.getURL('js/script.js');
	s.onload = function() { this.parentNode.removeChild(this); };
	(document.head || document.documentElement).appendChild(s);
	
	var s = document.createElement('script');
	s.src = chrome.extension.getURL('js/templates.js');
	s.onload = function() { this.parentNode.removeChild(this); };
	(document.head || document.documentElement).appendChild(s);
	
	var s = document.createElement('script');
	s.src = chrome.extension.getURL('vendor/mustache.min.js');
	s.onload = function() { this.parentNode.removeChild(this); };
	(document.head || document.documentElement).appendChild(s);
 };