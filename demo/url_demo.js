const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//serialized url
console.log(myUrl.href);
//same as above
//console.log(myUrl.toString());

//Host (root domain)
console.log(myUrl.host);

//hostname (does not include ports if those exist in url)
console.log(myUrl.hostname);

//Pathname
console.log(myUrl.pathname);

//Serialized query 
console.log(myUrl.search);

//params object
console.log(myUrl.searchParams);

//add params
myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);

//loop through params
myUrl.searchParams.forEach((value,name) => console.log(`${name} : ${value}`));