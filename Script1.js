// JavaScript source code

 var request = new XMLHttpRequest();

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
                                        




                    
                       
                        
                        
                        

                        
                    
                    

                    
                      

            /*    function getTop()
                {

                    console.log(artists);
                    var mf = 1; //default maximum frequency
                    var m = 0;  //counter
                    var item;  //to store item with maximum frequency
                    
                    for (var i=0; i<1000; i++)    //select element (current element)
                    {
                     
                            for (var j=i; j<1000; j++)   //loop through next elements in array to compare calculate frequency of current element
                            {
                           
                                    if (artists[i] == artists[j])    //see if element occurs again in the array
                                     m++;   //increment counter if it does
                                    if (mf<m)   //compare current items frequency with maximum frequency
                                    {
                                      mf=m;      //if m>mf store m in mf for upcoming elements
                                      item = artists[i];   // store the current element.
                                      
                                    }
                            }
                            m=0;   // make counter 0 for next element.
                    }
                    console.log(item + " + " + mf );
                }
                */
        }

        let p = new Promise((resolve, reject, albums) =>
                        {
                        
						
                        for (i=0; i<50; i++)
                        {
                        
                        

                        
                        var artist = albums.items[i].album.artists[0].id;
                        
                        

                        var request1 = new XMLHttpRequest();
                    
                         request1.open("GET", "https://api.spotify.com/v1/artists/" + artist + "/related-artists", true);
                         request1.setRequestHeader("Authorization", "Bearer "+ access_token);
                         request1.send();

                        request1.onload = function()
                        {
                         var data1 = this.response;
                         var artist = JSON.parse(data1);
                         

                         for(j=0; j<20; j++){
                         
						     var contains = artists.indexOf(artist.artists[j].name);

                             artists.push(artist.artists[j].id);
                             


                             
                             
                             }
                             if(i==50)resolve(artists);
                        }

                       
                       
                       }
                       
                       
                       })

                        p().then(artists)
                       {
                            console.log(artists[0]);
					   }
