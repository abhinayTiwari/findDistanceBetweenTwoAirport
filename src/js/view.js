(function(){
    var app = window.app || {};
    // app.model = app.model || {};
    var controller = app.controller || {};
    app.view = function(controller){
         var   $form, $inputAreaForStartingAirport,  $inputAreaForEndingAirport;
         var   $lat1, $lat2, $lng1, $lng2, $calculatedDistanceBtn;
         return {
           controller: controller,
            init: function(){
                    $form = document.getElementById("user-input-area"),
                    $inputAreaForStartingAirport = $form.querySelector("#starting-airport"),
                    $inputAreaForEndingAirport = $form.querySelector("#ending-airport");
                    $calculatedDistanceBtn = $form.querySelector(".calculateDistance");
            },

            addEvents: function(){
                  var lookup = function(){
                      var enteredText = this.value.toLowerCase();
                      var getAllList = document.querySelectorAll(".airport"),searchstring ;
                      for(var i=0; i<getAllList.length; i++ ){
                        searchstring = getAllList[i].getAttribute('data-search');
                			   if(searchstring.indexOf(enteredText) > -1){
                              getAllList[i].style.display = "block";
                			   }else{
                           getAllList[i].style.display = "none";
                         }
                			}
                  }

                  function calculateDistance(){
                        var lat1 = $form.querySelector("#starting-lat").value,
                        lat2 =   $form.querySelector("#ending-lat").value,
                        lon1 =   $form.querySelector("#starting-lng").value,
                        lon2 =   $form.querySelector("#ending-lng").value,
                        startAirport = $form.querySelector("#starting-airport").value,
                        endAirport = $form.querySelector("#ending-airport").value,
                        $error = document.getElementById('error');
                      //  debugger;
                        if(!lat1 || !lat2 || !lon1 || !lon2 || !startAirport || !endAirport){
                              $error.style.visibility = "visible";
                            document.getElementsByClassName('distance-number')[0].innerHTML = 0.00;
                            return;
                        }
                        $error.style.visibility = "hidden";
                        var R = 6371e3, phi1 = lat1* Math.PI / 180, phi2 = lat2* Math.PI / 180, deltaPhi = (lat2-lat1)* Math.PI / 180, deltaLambda = (lon2-lon1)* Math.PI / 180;
                        var a = Math.sin(deltaPhi/2) * Math.sin(deltaPhi/2) + Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda/2) * Math.sin(deltaLambda/2);
                        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                        var d = (R * c)/1000; //in km
                        console.clear();
                        console.log("In KM :" + d);
                        console.log("In Miles :" + d * 0.62);
                        console.log("In Nautical Miles :" + d * 0.54);
                        d = d * 0.54;
                        document.getElementsByClassName('distance-number')[0].innerHTML = d .toFixed(2);
                  }

                  function onFocusofInput(){
                     window.currentInputField = this.id;
                     var $dataContainer = document.getElementsByClassName("data-container")[0];
                     $dataContainer.setAttribute("focus",this.id );
                     $dataContainer.querySelector("#all-airports").style.display = "block";
                     //setPosition
                     var offesetBuffer = 10;
                     $dataContainer.style.top = (this.offsetTop + this.offsetHeight - offesetBuffer) + "px";
                     $dataContainer.style.left =  this.offsetLeft + "px";
                  }

                  function hideDropDown(e){
                     if(e.target.className !== "airport"  && e.target.id.indexOf("airport")  == -1  )
                       document.getElementById("all-airports").style.display = "none";
                  }

                  $inputAreaForStartingAirport.onkeyup = lookup;
                  $inputAreaForStartingAirport.onfocus =onFocusofInput;
                  $inputAreaForEndingAirport.onkeyup = lookup;
                  $inputAreaForEndingAirport.onfocus =onFocusofInput;
                  $calculatedDistanceBtn.onclick =calculateDistance;
                  document.onclick = hideDropDown;

            },
            renderAirportList: function(){
                 var allAirportData = this.controller.getAllAirportsData();
                 var parent = document.getElementById("all-airports");
                 var list, airport;
                 for(var i=0; i< allAirportData.length; i++){
                   airport = allAirportData[i];
                   list = document.createElement( 'li' );
                   list.className= "airport";
                   list.setAttribute("data-search", airport.search);
                    list.setAttribute("data-lat", airport.lat);
                    list.setAttribute("data-lng", airport.lng);
                   list.innerHTML = airport.code +"-" + airport.name;
                   list.onclick = function(e){
                     if (e.target == e.currentTarget) {
                       var curFocusInput = window.currentInputField.split("-")[0];
                       var input = document.getElementById(curFocusInput+"-airport");
                       input.value = this.innerHTML;
                       document.getElementById(curFocusInput+"-lat").value = this.getAttribute("data-lat");
                       document.getElementById(curFocusInput+"-lng").value = this.getAttribute("data-lng");
                     }
                     this.parentElement.style.display = "none";
                    // e.stopPropagation();
                   };
                   parent.insertBefore(list, parent.firstChild);
                 }
            },
         }
    }
}())
