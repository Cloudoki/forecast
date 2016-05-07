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
 
 //setTimeout(function(win){console.log("Hi.", typeof define, win.ForecastENV)}, 8000, window);

/*chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // If the request asks for the DOM content...
    
    if (request.method && (request.method === "getDOM")) {
        // ...send back the content of the <html> element
        // (Note: You can't send back the current '#document',
        //  because it is recognised as a circular object and
        //  cannot be converted to a JSON string.)
       // var html = document.all[0];
        
        console.log(window.localStorage.getItem ('access_token'))

        //sendResponse({ "htmlContent": html.innerHTML });
    }
});*/

