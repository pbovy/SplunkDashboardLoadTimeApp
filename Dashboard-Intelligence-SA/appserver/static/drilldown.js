// Components to require
 var components = [
     "splunkjs/ready!",
     "splunkjs/mvc/simplexml/ready!",
     "jquery"
 ];
 
 // Require the components
 require(components, function(
     mvc,
     ignored,
     $
 ) {
 
     $('#something').click(function() {
       window.open(
                   'dashboard_loadtimes',
                   '_blank' // <- This is what makes it open in a new window.
                 );
     });
 });
