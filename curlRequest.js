function sendCurlRequest(){
    var json_data = {
                "queryType": "groupBy",
                "dataSource": "twsample",
                "granularity": "none",
                "dimensions": ["created_at"],
                "aggregations": [
                    {"type": "count", "name": "tweetcount"}
                ],
              "intervals": ["2013-08-06T11:30:00.000Z/2020-08-07T11:40:00.000Z"]
            };
    $.ajax({
         cache : false,       
     type: 'POST',
     crossDomain:true,
     url: 'http://www.myserverIP:8080/druid/v2/',
     data:json_data,
     //dataType: "jsonp",
     contentType:"application/jsonp",
     success: function(data){
            alert(data);
        var pubResults = data;       
     },
     error: function(data){
       alert("ERROR RESPONSE FROM DRUID SERVER : "+JSON.stringify(data));
     },
     complete: function(data){
        console.log("call completed");
     }
   });
}