/* Working Examples */


window.onload = function() 
{
	console.log(window.localStorage.getItem ('access_token'))
	
	$.ajax({
		type: 'GET',
		url: 'https://api.forecastapp.com/projects',
		dataType: 'json',
		timeout: 300,
		headers: {
		
			'accept': 'application/json, text/javascript, */*; q=0.01',
			'accept-encoding': 'gzip, deflate, sdch',
			'accept-language': 'nl,en-US;q=0.8,en;q=0.6',
			'authorization':		'Bearer ' + window.localStorage.getItem ('access_token'),
			'forecast-account-id':	new Number(window.localStorage.getItem ('account_id'))
		},
		
		success: function(data){
		
			console.log(data)
		},
		error: function(xhr, type){ console.log("400"); }
	})
	
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