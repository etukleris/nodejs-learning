const fs = require('fs');
const path = require('path');




//folder creation; added a check if folder exists
/*
fs.stat(path.join(__dirname, '/test'), function(err) {
    if (!err) {
        console.log('file or directory exists');
    }
    else if (err.code === 'ENOENT') {
        fs.mkdir(path.join(__dirname, '/test'),{}, function(err){
          if (err) throw err;
          console.log('Folder created');
        
        });
    }
});
*/


//create and write to file; added a check if file exists, then append to it

function writeToFile(filePath,data){
  
  fs.stat(filePath, function(err) {
    if (!err) {
        fs.appendFile(filePath,data, function(err){
          if (err) throw err;
          //console.log('File existed and was appended to');
  
        });
    }
    else if (err.code === 'ENOENT') {
        fs.writeFile(filePath, data, function(err){
          if (err) throw err;
          //console.log('File created and written to');
  
        });
    }
  });
};


//writeToFile(path.join(__dirname, '/test', 'hello.txt' ),"James Cameron the greatest pioneer~~~");



//read file
function readFromFile(filePath, encoding){
  fs.readFile(filePath, encoding, function(err, data){
  if (err) throw err;
  console.log(data);

  });
};
//readFromFile(path.join(__dirname, '/test', 'hello.txt'),'utf8');

//rename file

function renameFile(filePathFrom, filePathTo){
  fs.rename(filePathFrom, filePathTo, function(err){
    if (err) throw err;
    console.log('file renamed');

    });

};
  
//renameFile(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'bye.txt'));

module.exports.writeToFile = writeToFile;