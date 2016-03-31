angular.module('pennscraper', [])
    .controller('pennscraperController', function ($scope) {
        'use strict';
        $scope.adLoader = function () {

            var i = 3890693;

            while (i.length < 1) {
  //  console.log(i);
                var query = {
                    url: 'http://classifieds.rennug.com/classifieds/viewad.cgi?adindex=' + i,
                    type: 'html',
                    selector: 'tr',
                    extract: ['text', 'href']
                },
    
                    uriQuery = encodeURIComponent(JSON.stringify(query)),
                    request  = 'http://127.0.0.1:8888//?q=' +
             uriQuery + '&callback=?';
    
console.log(uriQuery);
    
    jQuery.getJSON(request, function (data) {
    var datastring = data[0].results;
    var datasplit = datastring.toString().split('Sign');
    var datasplit2 = datasplit.toString().split('(adsbygoogle');
    var title = datasplit.toString().split('Asking');
    $scope.titleOne = title[0];
    $scope.titleTwo = title[1];
    // $('#inner-content').append("<span>" + title[0] + "</span>" + "<p>" + title[1] + "</p>");
    }); 
    
i++;

            }
    }
});