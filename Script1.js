// JavaScript source code

 var request = new XMLHttpRequest();

        var url = window.location.href;
        var access_token = url.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
        console.log(access_token);
        


         request.open("GET", "https://api.spotify.com/v1/me/albums?limit=50", true);
         request.setRequestHeader("Authorization", "Bearer "+ access_token);
         request.send();

         request.onload = function ()
				{
					// Begin accessing JSON data here
					var data = this.response;
					
						
					if (request.status >= 200 && request.status < 400)
					{
						window.albums = JSON.parse(data);
                        console.log(albums)

                        var multiple =[];
                        var artists =[];
                        

					};





                    
                       
                        
                        
                        

                        
                    
                    

        