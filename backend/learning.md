response object(res)


///
/ 
welcome to server
/about
welcome to about use page
/employee
 id,name, role, salary


 /// Routing 
 Routing is the process of how the application responds the client request through a specific url or https method like /about , /services
 different route method 
 Get  read data
 post create data
 put update the entire data
 patch update the partial data
 delete  data delete


 different type os route 

/// assignment  
 // req(Request object)  
 it contained all the information send by the client
 req.body
 req.params route parameters
 req.query query parameters
 req.headers
 req.method
 req.url


// res(Response object)
it is used to send back data to the client
res.send()  send text or html
res.json() send Json
res.status() send http status code 
res.redirect() redirect or navigate to another pGE
res.download() download file

