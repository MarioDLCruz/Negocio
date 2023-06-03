function LeerDatos() {
    fetch('datos.json')
    .then(function(res){
        return res.json();

    })
    .then(function(data){
        let html= '';
        let destacados=   `<div class="row">`;
        let nov=   `<div class="row">`;
        for (var i =0;i<5;i++) {
            destacados+=`     <div class="col">
                            <div class="card">
                                <img src="${data.productos[i].imgsrc}" class="card-img-top" alt="${data.productos[i].Nombre}" title="${data.productos[i].Nombre}">
                                    <div class="card-body">
                                        <h5 class="card-title">${data.productos[i].Nombre}</h5>
                                        <p class="card-text">${data.productos[i].Precio}</p>
                                        <button  class="btn btn-primary" title="Metallica" onclick="irprod('${i}')">Ver detalles</button>
                                    </div>
                            </div>
                        </div>`;
        }
                for (var i =5;i<10;i++) {
            nov+=`     <div class="col">
                            <div class="card">
                                <img src="${data.productos[i].imgsrc}" class="card-img-top" alt="${data.productos[i].Nombre}" title="${data.productos[i].Nombre}">
                                    <div class="card-body">
                                        <h5 class="card-title">${data.productos[i].Nombre}</h5>
                                        <p class="card-text">${data.productos[i].Precio}</p>
                                        <button  class="btn btn-primary" title="Metallica"onclick="irprod('${i}')">Ver detalles</button>
                                    </div>
                            </div>
                        </div>`;
        }
        destacados+=`</div>`;
        nov+=`</div>`
        document.getElementById('prod_des').innerHTML=destacados;
        document.getElementById('nov_prod').innerHTML=nov;
        //data.productos.forEach(function(producto){
          //  console.log(producto.Nombre)

        //})
        //})
    })
    
}
