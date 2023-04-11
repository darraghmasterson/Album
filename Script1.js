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
                    var allResults = []; // Array to store all results

                    var xhr = new XMLHttpRequest();

                    // Function to make API request
                    function makeRequest() {
                    xhr.open("GET", url + `?offset=${offset}&limit=${limit}`);
                    xhr.setRequestHeader("Authorization", `Bearer ${access_token}`);
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            var json = JSON.parse(xhr.responseText);
                            console.log(json);

                            // Concatenate results to the allResults array
                            allResults = allResults.concat(json.items);

                            // Check if there are more results
                            if (json.next) {
                            // If there are more results, update the offset and make another request
                            offset += limit;
                            makeRequest();
                            } else {
                            console.log(allResults); // All results stored in one array
                            }
                        } else {
                            console.error("Failed to fetch data from Spotify API: ", xhr.status);
                        }
                        }
                    };
                    xhr.send();
                    }

                    // Start the initial API request
                    makeRequest();

                    

                };

                
                xhr.send();
                



                    
                       
                        
                        
                        

                        
                    
                    

                    
                      
