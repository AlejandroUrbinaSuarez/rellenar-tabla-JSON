function fillTable(data){
    var table = document.querySelector("table");

    for (let json in data){
        
   

   let object = data[json];
   let ciudad_municipio_nom = object.ciudad_municipio_nom;
   let edad = object.edad;
   
    
    let row = table.insertRow();

        let cell_index = row.insertCell();
        cell_index.innerHTML = json;

   var cell_cm = row.insertCell();
   cell_cm.innerHTML =  object.ciudad_municipio_nom;

   var cell_edad = row.insertCell();
   cell_edad.innerHTML =  object.edad;

        
}
}


function getData(){
fetch('https://www.datos.gov.co/resource/gt2j-8ykr.json')
.then(response => response.json())
.then(data => fillTable(data));
}

var boton = document.querySelector("a")
boton.onclick= function(){
    getData();  
}
//getData();