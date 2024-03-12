// this is dummy work process based on callbacks of js.

function fetchCustom (url, cb){
  console.log("started downloading data from", url);
  setTimeout(function process() {
    console.log("download complete")
    let response = "Dummy Data";
    cb(response);
  },3000)
}

function writeFile (data, cb){
  console.log("started writting data", data);
  setTimeout(function process() {
    console.log("writting completed");
    let data = "output.txt";
    cb(data);
  },2000)
}

function uploadFile (fileName, newUrl, cb) {
  console.log("upload started on url ", newUrl);
  setTimeout(function fn() {
    console.log(`file ${fileName} uploaded on url ${newUrl}`);
    let response = "SUCCESS"
    cb(response);
    
  },5000)
}

// below thing is called as callback hell
fetchCustom("www.google.com", function fn(response){
  console.log("downloaded response is", response);
  writeFile(response, function fn(fileResponse) {
    console.log("writting completed on ", fileResponse);
    uploadFile (fileResponse, "www.brave.com", function upload(uploadResponse) {
      console.log("successfully upload message", uploadResponse);
    })
  })
})
