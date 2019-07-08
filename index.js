const http = require('http');
const path = require('path');
const fs = require('fs');


const server = http.createServer((req,res) => {
  
  /*if (req.url ==='/'){
    fs.readFile(path.join(__dirname,'/public','index.html'), 
      (err,content)=>{
      
        if(err) throw err; 
        res.writeHead(200,{'Content-type':'text/html'});
        res.end(content);
    
    
      });
    
  } else if (req.url ==='/about'){
    fs.readFile(path.join(__dirname,'/public','about.html'), 
      (err,content)=>{
      
        if(err) throw err; 
        res.writeHead(200,{'Content-type':'text/html'});
        res.end(content);
    
    
      });
      
    //hardcoded api exampe
  } else if (req.url ==='/api/users'){
    const users = [
      { name: 'Bob marley', age:42},
      { name: 'John Travolta', age:40} 
    ];
    res.writeHead(200,{'Content-type':'application/json'});
    res.end(JSON.stringify(users));
    
    
  }*/
  
  let filePath = path.join(__dirname, '/public', req.url ==='/' ? 'index.html' : req.url);
  
  console.log(filePath);
  //extension of the file 
  let extname = path.extname(filePath);
  
  //initial content type
  let contentType = 'text/html';
  
  //chec extension and switch content type
  switch (extname){
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
    
  }
  
  
  //read file
  fs.readFile(filePath, 
    (err,content)=>{
    
      if(err) {
        if(err.code = 'ENOENT'){
          //page not found
          fs.readFile(path.join(__dirname,'/public', '404.html'), 
            (error,content) =>{
              res.writeHead(200,{'Content-type':'text/html'});
              res.end(content,'utf8');
            })
        } else {
          //some other server error
          res.writeHead(200,{'Content-type':'text/html'});
          res.end(`Server error: ${err.code}`);
        }
      }else{
        //success
        res.writeHead(200,{'Content-type': contentType});
        res.end(content,'utf8');
      } 
    });
});

const PORT = process.env.PORT || 5555;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));