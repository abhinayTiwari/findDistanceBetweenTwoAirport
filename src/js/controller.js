(function(model){
    window.app = window.app ||  {};
    app.controller = function(model){
      var airportsData = model.getAllAirportsData();
      return {
        getAllAirportsData: function(){
            return airportsData;
        }
      //   },
      //   autoComplete: function(textEntered, airportData){
      //       var possibleAirports = [];
			// textEntered= textEntered.toLowerCase();
			// var searchstring, airport;
			// for(var i=0; i<airportsData.length; i++ ){
			// 	airport = airportsData[i];
			//    searchstring = airport.search;
			//    if(searchstring.indexOf(textEntered) > -1){
			// 	   possibleAirports.push({'name': airport.name,'code': airport.code});
			//    }
			// }
      //
      //     return  possibleAirports;
      //   }

      }
    }
}())
