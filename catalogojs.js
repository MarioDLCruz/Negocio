var datos,comentarios,filtro="0",busqueda="";
function LeerDatos() {
    fetch('datos.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let html= '';
        datos= data.productos;
        comentarios= data.comentarios;
        let indx=window.location.href.search("=");
        //alert(indx);
        let nombreprod= window.location.href.slice(indx+1);
        //alert(nombreprod)
        if(indx===-1){
        let productos=   `<div class="row">`;
        let nov=   `<div class="row">`;
        for (var i =0;i<10;i++) {
            productos+=`     <div class="col">
                            <div class="card">
                                <img src="${data.productos[i].imgsrc}" class="card-img-top" alt="${data.productos[i].Nombre}" title="${data.productos[i].Nombre}">
                                    <div class="card-body">
                                        <h5 class="card-title">${data.productos[i].Nombre}</h5>
                                        <p class="card-text">${data.productos[i].Precio}</p>
                                        <button class="btn btn-primary" title="${data.productos[i].Nombre}"onclick="prod(${i})">Ver detalles</button>
                                    </div>
                            </div>
                        </div>`;
        }
        productos+=`</div>`;
        document.getElementById('prod_des').innerHTML=productos;
    }else{
        //alert(nombreprod);
        prod(parseInt(nombreprod));
    }
    })
    
}
function orderby() {
    let op= document.getElementById("orden");
    switch(op.value){
    case "0":
        az();
        break;
    case "1":
        za();
        break;
    case "2":
        menormayor();
        break;
    case "3":
        mayormenor();
        break;

    }
}
function az() {
    let html= '';
    let visible=true;
        let productos=   `<div class="row">`;
            for(var i=0;i<10;i++){
        for(var j=0;j<10;j++){
            let numero1=datos[i].Nombre;
            let numero2=datos[j].Nombre;
           if(numero1>=numero2){
              //  console.log(numero1+" es mayor que "+numero2);
                let temp=datos[j];
                datos[j]=datos[i];
                datos[i]=temp;
            }//else {//console.log(numero1+" es menor que "+numero2);}
        }
    }

        for (var i =9;i>=0;i--) {
            if(filtro!=datos[i].Cat){
                visible=false;
            }else{visible=true;}
            if(filtro==="0"){visible=true; console.log("Visible")}
                        if(busqueda!=""){
            if(datos[i].Nombre.includes(busqueda)){visible=true;}else{visible=false;}}
            if(visible){
            productos+=`     <div class="col" style="max-width: 20%;">
                            <div class="card">
                                <img src="${datos[i].imgsrc}" class="card-img-top" alt="${datos[i].Nombre}" title="${datos[i].Nombre}">
                                    <div class="card-body">
                                        <h5 class="card-title">${datos[i].Nombre}</h5>
                                        <p class="card-text">${datos[i].Precio}</p>
                                        <button class="btn btn-primary" title="${datos[i].Nombre}"onclick="prod(${i})">Ver detalles</button>
                                    </div>
                            </div>
                        </div>`;
        }}
        productos+=`</div>`;
        document.getElementById('prod_des').innerHTML=productos;
}
function za() {
    let html= '';
    let visible= true;
        let productos=   `<div class="row">`;
                    for(var i=0;i<10;i++){
        for(var j=0;j<10;j++){
            let numero1=datos[i].Nombre;
            let numero2=datos[j].Nombre;
           if(numero1>=numero2){
              //  console.log(numero1+" es mayor que "+numero2);
                let temp=datos[j];
                datos[j]=datos[i];
                datos[i]=temp;
            }//else {//console.log(numero1+" es menor que "+numero2);}
        }
    }
        for (var i =0;i<10;i++) {
            if(filtro!=datos[i].Cat){
                visible=false;
            }else{visible=true;}
            if(filtro==="0"){visible=true; console.log("Visible")}
                        if(busqueda!=""){
            if(datos[i].Nombre.includes(busqueda)){visible=true;}else{visible=false;}}
            if(visible){
            productos+=`    <div class="col" style="max-width: 20%;">
                            <div class="card">
                                <img src="${datos[i].imgsrc}" class="card-img-top" alt="${datos[i].Nombre}" title="${datos[i].Nombre}">
                                    <div class="card-body">
                                        <h5 class="card-title">${datos[i].Nombre}</h5>
                                        <p class="card-text">${datos[i].Precio}</p>
                                        <button class="btn btn-primary" title="${datos[i].Nombre}"onclick="prod(${i})">Ver detalles</button>
                                    </div>
                            </div>
                        </div>`;
        }}
        productos+=`</div>`;
        document.getElementById('prod_des').innerHTML=productos;
}

function menormayor() {
    //console.log(datos);
    let html= '';
    let visible= true;
    let precios;
    for(var i=0;i<10;i++){
        for(var j=0;j<10;j++){
            let numero1=formatprecio(datos[i].Precio);
            let numero2=formatprecio(datos[j].Precio);
           if(numero1>=numero2){
              //  console.log(numero1+" es mayor que "+numero2);
                let temp=datos[j];
                datos[j]=datos[i];
                datos[i]=temp;
            }//else {//console.log(numero1+" es menor que "+numero2);}
        }
    }
        //datos.forEach(dato => console.log(dato.));
        let productos=   `<div class="row">`;
        
        for (var i =9;i>=0;i--) {
            if(filtro!=datos[i].Cat){
                visible=false;
            }else{visible=true;}
            if(filtro==="0"){visible=true; console.log("Visible")}
                        if(busqueda!=""){
            if(datos[i].Nombre.includes(busqueda)){visible=true;}else{visible=false;}}
            if(visible){
            productos+=`    <div class="col" style="max-width: 20%;">
                            <div class="card">
                                <img src="${datos[i].imgsrc}" class="card-img-top" alt="${datos[i].Nombre}" title="${datos[i].Nombre}">
                                    <div class="card-body">
                                        <h5 class="card-title">${datos[i].Nombre}</h5>
                                        <p class="card-text">${datos[i].Precio}</p>
                                        <button class="btn btn-primary" title="${datos[i].Nombre}"onclick="prod(${i})">Ver detalles</button>
                                    </div>
                            </div>
                        </div>`;
        }}
        productos+=`</div>`;

        document.getElementById('prod_des').innerHTML=productos;
        //productos;
    
}
function mayormenor() {
    //console.log(datos);
    let html= '';
    let visible= true;
    let precios;
    for(var i=0;i<10;i++){
        for(var j=0;j<10;j++){
            let numero1=formatprecio(datos[i].Precio);
            let numero2=formatprecio(datos[j].Precio);
           if(numero1>=numero2){
              //  console.log(numero1+" es mayor que "+numero2);
                let temp=datos[j];
                datos[j]=datos[i];
                datos[i]=temp;
            }//else {//console.log(numero1+" es menor que "+numero2);}
        }
    }
        //datos.forEach(dato => console.log(dato.));
        let productos=   `<div class="row">`;
        
        for (var i =0;i<10;i++) {
            if(filtro!=datos[i].Cat){
                visible=false;
            }else{visible=true;}
            if(filtro==="0"){visible=true; }
            if(busqueda!=""){
            if(datos[i].Nombre.includes(busqueda)){visible=true;}else{visible=false;}}
            if(visible){
            productos+=`    <div class="col" style="max-width: 20%;">
                            <div class="card">
                                <img src="${datos[i].imgsrc}" class="card-img-top" alt="${datos[i].Nombre}" title="${datos[i].Nombre}">
                                    <div class="card-body">
                                        <h5 class="card-title">${datos[i].Nombre}</h5>
                                        <p class="card-text">${datos[i].Precio}</p>
                                        <button  class="btn btn-primary" title="${datos[i].Nombre}" onclick="prod(${i})">Ver detalles</a>
                                    </div>
                            </div>
                        </div>`;
        }}
        productos+=`</div>`;

        document.getElementById('prod_des').innerHTML=productos;
        //productos;
    
}
function filt(fil) {
    filtro=fil;
    orderby();
}
function bus(){
    busqueda=document.getElementById("busqueda").value;
    orderby();
}

function formatprecio(precio){
    numprecio= precio.replace(',','');
    numprecio= numprecio.replace('.','');
    numprecio= numprecio.replace('$','');
    numprecio= numprecio.slice(0,-2);;
    return parseInt(numprecio);
}
function prod(i) {
        let productos=   `<div class="row">`;
                    productos+=`        
                    <div class="col">
                        <div class="row justify-content-center">
                            <h1>${datos[i].Nombre}</h1><br>
                                <img src="${datos[i].imgsrc}" class="container-fluid" style="width: 50%;" alt="${datos[i].Nombre}" title="${datos[i].Nombre}">
                        </div>
                        </div>
                        <div class="col">
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <h2>${datos[i].Nombre}</h2>
                                        <h3 style="color: #2596be;">${datos[i].Precio}</h3>
                                        <p>Impuestos incluidos<br><br>
                                        ${datos[i].DesS}</p>
                                        <div class="row">
                                            <div class="dol">
                                                <label>Cantidad</label: >
                                                <input type="number" name="" min=1 value=1>
                                                <a href="avisoregistro.html" class="btn btn-info">Agregar al carrito</a>
                                            </div>    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">Caracteristicas del producto</th>
                              <th></th>
                              <th></th>
                              <th></th>

                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>${datos[i].DesL}</td>
                            </tr>
                          </tbody>
                        </table>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">Comentarios</th>
                              <th></th>
                              <th></th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                        `;

        comentarios.forEach(comentario =>{
            productos+=`    <tr>
                              <td><h4>${comentario.NombreUsuario}:</h4> <h5>${comentario.Comentario}</h5> </td>
                            </tr>`;
        } );
        productos+=`
                                </tbody>
                            </table>
                          </div>
                        </div>
                    </div>`;

        document.getElementById('prod_des').innerHTML=productos;

}

