// JavaScript source code

 var request = new XMLHttpRequest();
        var json;
        var url = window.location.href;
        var access_token = url.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
        console.log(access_token);
        


         request.open("GET", "https://api.spotify.com/v1/me/playlists?limit=50&offset=0", true);
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
                        

					}
                                        

                    var url = "https://api.spotify.com/v1/playlists/3AGMOTjNxCTqFOE48JDZUz/tracks";
                    var offset = 0;
                    var limit = 50;
                    
                    var xhr = new XMLHttpRequest();
                    
                    // Function to make API request
                    function makeRequest() {
                      xhr.open("GET", url + `?offset=${offset}&limit=${limit}`);
                      xhr.setRequestHeader("Authorization", `Bearer ${access_token}`);
                      xhr.onreadystatechange = function () {
                        if (xhr.readyState === 4) {
                          console.log(xhr.status);
                          var json = JSON.parse(xhr.responseText);
                          console.log(json);
                    
                          // Check if there are more results
                          if (json.next) {
                            // If there are more results, update the offset and make another request
                            offset += limit;
                            makeRequest();
                          }
                        }
                      };
                      xhr.send();
                    }
                    
                    makeRequest();
                    

                };

                
                xhr.send();
                



                    
                       
                        
                        
                        

                        
                    
                    

                    
                      
