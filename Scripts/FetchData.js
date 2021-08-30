//FETCH
function parse(Y){
return fetch("../Databases/"+Y+".json").then(function (response) {
      return response.json();
    }).then(function (data) {
      appendData(data);
    }).catch(function (err) {
      console.log('error: ' + err);
    });
}
//Loading the objects
    function appendData(data) {
      for (var i = 1; i < data.length; i++) {
        var list = document.createElement("li");
        list.innerHTML ='<a href=\"https://youtu.be/'+data[i].URL+'\">'+data[i].Name +'</a>';
        document.querySelector('.uk-list').appendChild(list);
    }}