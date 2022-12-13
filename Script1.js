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
                                        

                var url = "https://api.spotify.com/v1/playlists/3AGMOTjNxCTqFOE48JDZUz/tracks?offset=0&limit=50";

                var xhr = new XMLHttpRequest();
                xhr.open("GET", url);

                xhr.setRequestHeader("Authorization", `Bearer ${access_token}`);

                xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                console.log(xhr.status);
                json = JSON.parse(xhr.response);
                console.log(json);

                /*var arr = [];
                for(let i = 0; i < json.tracks.items.length; i++)
                {
                arr.push(json.tracks.items[i].track.artists[0].name);
                }
                console.log(arr);
                                */
                }};

                
                xhr.send();
                



                    
                       
                        
                        
                        

                        
                    
                    

                    
                      

        }