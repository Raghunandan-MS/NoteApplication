var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request , response)
{

	if(request.url === "/")
	{
		fs.readFile('C:/Users/rsuresh/Desktop/CodeSamples/Note_Application/HTML/index.html' , function(err , pageResponse){

			if(err)
			{
				console.log("Error!!\n");
			}
			else
			{
				response.writeHead('200' , {'Content-type' : 'text/html'});
				response.write(pageResponse);
			}

			response.end();

		});
	}
	else if(request.url === "/create")
	{
		fs.readFile('C:/Users/rsuresh/Desktop/CodeSamples/Note_Application/HTML/createNote.html' , function(err , pageResponse){

			if(err)
			{
				console.log("Error while Creating NotePad!!\n");
			}
			else
			{
				response.writeHead('200' , {'Content-type' : 'text/html'});
				response.write(pageResponse);
			}

			response.end();

		});
	}

	else if(request.url === "/read")
	{
		fs.readFile('C:/Users/rsuresh/Desktop/CodeSamples/Note_Application/HTML/readNote.html' , function(err , pageResponse){

			if(err)
			{
				console.log("Error while Reading NotePad!!\n");
			}
			else
			{
				response.writeHead('200' , {'Content-type' : 'text/html'});
				response.write(pageResponse);
			}

			response.end();

		});
	}

	else if(request.url === "/update")
	{
		fs.readFile('C:/Users/rsuresh/Desktop/CodeSamples/Note_Application/HTML/updateNote.html' , function(err , pageResponse){

			if(err)
			{
				console.log("Error while Updating NotePad!!\n");
			}
			else
			{
				response.writeHead('200' , {'Content-type' : 'text/html'});
				response.write(pageResponse);
			}

			response.end();

		});
	}

	else if(request.url === "/delete")
	{
		fs.readFile('C:/Users/rsuresh/Desktop/CodeSamples/Note_Application/HTML/deleteNote.html' , function(err , pageResponse){

			if(err)
			{
				console.log("Error while Deleting NotePad!!\n");
			}
			else
			{
				response.writeHead('200' , {'Content-type' : 'text/html'});
				response.write(pageResponse);
			}

			response.end();

		});
	}

	else if(request.url == "/test")
	{
		fs.readFile('C:/Users/rsuresh/Desktop/CodeSamples/Note_Application/HTML/test.html' , function(err , pageResponse){

			if(err)
			{
				console.log("Error while Deleting NotePad!!\n");
			}
			else
			{
				response.writeHead('200' , {'Content-type' : 'text/html'});
				response.write(pageResponse);
			}

			response.end();

		});
	}

});

server.listen(8080);
console.log("Server running on Port 8080!!\n");