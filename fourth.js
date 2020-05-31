var http = require('http');
var url = require('url');

var taskitems = [
    {
        id : 1,
        Title : 'Task 1',
        Deadline : 'Today'
    },
    {
        id : 2,
        Title : 'Task 2',
        Deadline : 'Tomorrow'
    },
    {
        id : 3,
        Title : 'Task 3',
        Deadline : 'yesterday'
    }
];

var server = http.createServer(function handle(req,res){

   var querystr = url.parse(req.url, true).query;
   var dd = querystr.dd;

   var response = [];


   for (var i=0;i<taskitems.length; i++)
   {
       var currtask = taskitems[i];
       if(currtask.Deadline === dd){
       response.push(currtask);

       }
   }

   var strArr = JSON.stringify(response);
   res.write(strArr);
   res.end();

});

server.listen(8080);
