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

