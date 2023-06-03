var datos,comentarios;
function leerdatos(){
	 fetch('../datos.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        datos= data.productos;
        comentarios= data.comentarios;
        let productos="<tr></tr>";
        let i=1;
                datos.forEach(dato =>{
            /*productos+=`    <tr>
                              <td>${dato.Nombre}</td>
                         	  <td>${dato.Precio}</td>
                              <td><img src="../${dato.imgsrc}"></td>
                         	  <td>${dato.DesL}</td>
                         	  <td>${dato.DesS}</td> 
                         	  <td>${dato.Cat}</td> 
                         	  <td>${dato.SubCat}</td>
                         	  <td><button onclick="elimiarrow(${i})">x</button>
                            </tr>`;
            i++;*/
    let table = document.getElementById('tabla'); 
	let row= table.insertRow();
	row.classList.add("align-middle");
	let cellNombre= row.insertCell();
	let cellPrecio= row.insertCell();
	let cellImagen= row.insertCell();
	let cellDesL= row.insertCell();
	let cellDesS= row.insertCell(); 
	let cellCat= row.insertCell(); 
	let cellSubCat= row.insertCell(); 
	let nodeNombre= document.createTextNode(`${dato.Nombre}`); 
	let nodePrecio= document.createTextNode(`${dato.Precio}`);
	let nodeImagen= document.createElement("img",);
	nodeImagen.src="../"+dato.imgsrc;
	nodeImagen.style.maxWidth="100%"; 
	let nodeDesL= document.createTextNode(`${dato.DesL}`);
	let nodeDesC= document.createTextNode(`${dato.DesS}`); 
	let nodeCat= document.createTextNode(`${dato.Cat}`);
	let nodeSubCat= document.createTextNode(`${dato.SubCat}`); 
	cellNombre.appendChild(nodeNombre); 
	cellPrecio.appendChild(nodePrecio);
	cellImagen.appendChild(nodeImagen); 
	cellDesL.appendChild(nodeDesL); 
	cellDesS.appendChild(nodeDesC); 
	cellCat.appendChild(nodeCat);
	cellSubCat.appendChild(nodeSubCat);
	let cell3= row.insertCell(); 
	let btnEliminar = document.createElement("button");
	btnEliminar.classList.add("btn");
	btnEliminar.classList.add("btn-danger");
	btnEliminar.innerHTML = 'x'; 
	btnEliminar.onclick = function () {
		row.remove();	
		}
	cell3.appendChild(btnEliminar);
	let cell4= row.insertCell();
	let btnEditar= document.createElement("button");
	btnEditar.classList.add("btn");
	btnEditar.classList.add("btn-warning");
	btnEditar.innerHTML='🖌'; 
	btnEditar.onclick = function(){
		let formDiv= document.getElementById('Form');
		let btnGuardar=document.getElementById('btnGuardar');
		btnGuardar.onclick = function(){
			let nNombre= document.getElementById("nNombre").value;
			let nPrecio = document.getElementById("nPrecio").value;
			nodeImagen.src = window.URL.createObjectURL(document.getElementById("nImagen").files[0]);
			let nDesL = document.getElementById("nDesL").value;
			let nDesS = document.getElementById("nDesS").value;
			let nCat = document.getElementById("nCat").value;
			let nSubCat = document.getElementById("nSubCat").value;
			cellNombre.innerHTML=nNombre;
			cellPrecio.innerHTML=nPrecio;
			cellDesL.innerHTML=nDesL;
			cellDesS.innerHTML=nDesS;
			cellCat.innerHTML=nCat;
			cellSubCat.innerHTML=nSubCat;
			formDiv.style.display="none";
		}
		formDiv.style.display="block";
	}
	cell4.appendChild(btnEditar); 
	//nombre.value=''; 
	//descripcion.value='';  

        } );
        //console.log(productos);
        //document.getElementById("tabla").innerHTML+=productos;

    })
}
let formAgregar= ()=>{
	let formDiv= document.getElementById('Form');
	let btnGuardar=document.getElementById('btnGuardar');
	btnGuardar.onclick=agregar;
	formDiv.style.display="block";
}

let agregar = ()=>{
	let nNombre= document.getElementById("nNombre").value;
	let nPrecio = document.getElementById("nPrecio").value;
	let nImagen= window.URL.createObjectURL(document.getElementById("nImagen").files[0]);
	let nDesL = document.getElementById("nDesL").value;
	let nDesS = document.getElementById("nDesS").value;
	let nCat = document.getElementById("nCat").value;
	let nSubCat = document.getElementById("nSubCat").value;
	let table = document.getElementById('tabla'); 
	let nombre = document.getElementById('nombre');
	let descripcion = document.getElementById('des')
	
	let ntable = document.getElementById('tabla'); 
	let row= table.insertRow();
	row.classList.add("align-middle");
	let cellNombre= row.insertCell();
	let cellPrecio= row.insertCell();
	let cellImagen= row.insertCell();
	let cellDesL= row.insertCell();
	let cellDesS= row.insertCell(); 
	let cellCat= row.insertCell(); 
	let cellSubCat= row.insertCell(); 
	let nodeNombre= document.createTextNode(nNombre); 
	let nodePrecio= document.createTextNode(nPrecio);
	let nodeImagen= document.createElement("img");
	nodeImagen.src=nImagen;
	nodeImagen.style.maxWidth="100%"; 
	let nodeDesL= document.createTextNode(nDesL);
	let nodeDesS= document.createTextNode(nDesS); 
	let nodeCat= document.createTextNode(nCat);
	let nodeSubCat= document.createTextNode(nSubCat); 
	cellNombre.appendChild(nodeNombre); 
	cellPrecio.appendChild(nodePrecio);
	cellImagen.appendChild(nodeImagen); 
	cellDesL.appendChild(nodeDesL); 
	cellDesS.appendChild(nodeDesS); 
	cellCat.appendChild(nodeCat);
	cellSubCat.appendChild(nodeSubCat);
	let cell3= row.insertCell(); 
	let btnEliminar = document.createElement("button");
	btnEliminar.classList.add("btn");
	btnEliminar.classList.add("btn-danger");
	btnEliminar.innerHTML = 'x'; 
	btnEliminar.onclick = function () {
		row.remove();	
		}
	cell3.appendChild(btnEliminar);
	let cell4= row.insertCell();
	let btnEditar= document.createElement("button");
	btnEditar.classList.add("btn");
	btnEditar.classList.add("btn-warning");
	btnEditar.innerHTML='🖌'; 
	btnEditar.onclick = function(){
		let formDiv= document.getElementById('Form');
		let btnGuardar=document.getElementById('btnGuardar');
		btnGuardar.onclick = function(){
			let nNombre= document.getElementById("nNombre").value;
			let nPrecio = document.getElementById("nPrecio").value;
			nodeImagen.src = window.URL.createObjectURL(document.getElementById("nImagen").files[0]);
			let nDesL = document.getElementById("nDesL").value;
			let nDesS = document.getElementById("nDesS").value;
			let nCat = document.getElementById("nCat").value;
			let nSubCat = document.getElementById("nSubCat").value;
			cellNombre.innerHTML=nNombre;
			cellPrecio.innerHTML=nPrecio;
			cellDesL.innerHTML=nDesL;
			cellDesS.innerHTML=nDesS;
			cellCat.innerHTML=nCat;
			cellSubCat.innerHTML=nSubCat;
			formDiv.style.display="none";
		}
		formDiv.style.display="block";
	}
	cell4.appendChild(btnEditar);
	document.getElementById("Form").style.display="none"; 
}
function elimiarrow(id) {
	console.log("Eliminando "+id);
	tabla= document.getElementById("tabla");
	tabla.deleteRow(id);

}
function crudCat(argument) {
	let cats=[{"Id":"0","Nombre":"Rock"},{"Id":"1","Nombre":"Pop"},{"Id":"2","Nombre":"Hip-Hop"}];
	let subCats=[{"IdCat":"0","Id":"0","Nombre":"Alternativo"},{"IdCat":"0","Id":"1","Nombre":"Metal"},{"IdCat":"0","Id":"2","Nombre":"Indie"}];
	cats.forEach(cat => {
	let table = document.getElementById('tablaCat'); 
	let nombre = document.getElementById('nNombreCat');
	let descripcion = document.getElementById('nIdCat')
	let row= table.insertRow(); 
	let cell1= row.insertCell(); 
	let cell2= row.insertCell(); 
	let node1= document.createTextNode(`${cat.Id}`); 
	let node2= document.createTextNode(`${cat.Nombre}`);
	cell1.appendChild(node1); 
	cell2.appendChild(node2); 
	let cell3= row.insertCell(); 
	let btnEliminar = document.createElement("button"); 
	btnEliminar.innerHTML = 'x'; 
	btnEliminar.classList.add("btn");
	btnEliminar.classList.add("btn-danger");
	btnEliminar.onclick = function () { 
		row.remove();
		}
	cell3.appendChild(btnEliminar);
	let cell4= row.insertCell();
	let btnEditar= document.createElement("button");
	btnEditar.innerHTML='🖌'; 
	btnEditar.classList.add("btn");
	btnEditar.classList.add("btn-warning");
	btnEditar.onclick = function(){ 
		let nuevoNombre= prompt("Nuevo nombre",cell1.innerHTML); 
		let nuevosDes= prompt("Nueva descripcion",cell2.innerHTML); 
		cell1.innerHTML = nuevoNombre;
		cell2.innerHTML = nuevosDes;
	}
	cell4.appendChild(btnEditar); 
	});
	subCats.forEach(subCat => {
	let table = document.getElementById('tablaSubCat'); 
	let row= table.insertRow(); 
	let idCat= row.insertCell(); 
	let idSubCat= row.insertCell(); 
	let nombreSubCat= row.insertCell(); 
	let nodeIdCat= document.createTextNode(`${subCat.IdCat}`); 
	let nodeIdSubCat= document.createTextNode(`${subCat.Id}`);
	let nodeNombreSubCat= document.createTextNode(`${subCat.Nombre}`);
	idCat.appendChild(nodeIdCat); 
	idSubCat.appendChild(nodeIdSubCat);
	nombreSubCat.appendChild(nodeNombreSubCat);
	let cell3= row.insertCell(); 
	let btnEliminar = document.createElement("button"); 
	btnEliminar.innerHTML = 'x'; 
	btnEliminar.classList.add("btn");
	btnEliminar.classList.add("btn-danger");
	btnEliminar.onclick = function () { 
		row.remove();
		}
	cell3.appendChild(btnEliminar);
	let cell4= row.insertCell();
	let btnEditar= document.createElement("button");
	btnEditar.innerHTML='🖌'; 
	btnEditar.classList.add("btn");
	btnEditar.classList.add("btn-warning");
	btnEditar.onclick = function(){ 
		//let nuevoNombre= prompt("Nuevo nombre",cell1.innerHTML); 
		//let nuevosDes= prompt("Nueva descripcion",cell2.innerHTML); 
		//cell1.innerHTML = nuevoNombre;
		//cell2.innerHTML = nuevosDes;
		}
	cell4.appendChild(btnEditar);
	});
}
let  addCat=  ()=> {
	let table = document.getElementById('tablaCat'); 
	let Nombre = document.getElementById('nNombreCat').value;
	let Id = document.getElementById('nIdCat').value;
	let row= table.insertRow(); 
	let cell1= row.insertCell(); 
	let cell2= row.insertCell(); 
	let node1= document.createTextNode(`${Id}`); 
	let node2= document.createTextNode(`${Nombre}`);
	cell1.appendChild(node1); 
	cell2.appendChild(node2); 
	let cell3= row.insertCell(); 
	let btnEliminar = document.createElement("button"); 
	btnEliminar.innerHTML = 'x'; 
	btnEliminar.classList.add("btn");
	btnEliminar.classList.add("btn-danger");
	btnEliminar.onclick = function () { 
		row.remove();
		}
	cell3.appendChild(btnEliminar);
	let cell4= row.insertCell();
	let btnEditar= document.createElement("button");
	btnEditar.innerHTML='🖌'; 
	btnEditar.classList.add("btn");
	btnEditar.classList.add("btn-warning");
	btnEditar.onclick = function(){ 
		document.getElementById('nIdCat').value=cell1.innerHTML; 
		document.getElementById('nNombreCat').value=cell2.innerHTML; 

		document.getElementById('btnGuardarCat').onclick = function(){
				let Nombre = document.getElementById('nNombreCat').value;
				let Id = document.getElementById('nIdCat').value;
						cell1.innerHTML = Id;
						cell2.innerHTML = Nombre;
				document.getElementById('nNombreCat').value=''; 
				document.getElementById('nIdCat').value=''; 
				document.getElementById('btnGuardarCat').onclick=addCat;
		}
	}
	cell4.appendChild(btnEditar);
		document.getElementById('nNombreCat').value=''; 
		document.getElementById('nIdCat').value=''; 
}
let  addSubCat=  ()=> {
	let table = document.getElementById('tablaSubCat'); 
	let Nombre = document.getElementById('nNombreSubCat').value;
	let Id = document.getElementById('nIdSubCat').value;
	let idCat = document.getElementById('nIdCat2').value;
	let row= table.insertRow(); 
	let cellIdCat= row.insertCell(); 
	let cellIdSubCat= row.insertCell();
	let cellNombre= row.insertCell(); 
	let nodeIdCat= document.createTextNode(`${idCat}`); 
	let nodeIdSubCat= document.createTextNode(`${Id}`);
	let nodeNombre= document.createTextNode(`${Nombre}`);
	cellIdCat.appendChild(nodeIdCat); 
	cellIdSubCat.appendChild(nodeIdSubCat);
	cellNombre.appendChild(nodeNombre); 
	let cell3= row.insertCell(); 
	let btnEliminar = document.createElement("button"); 
	btnEliminar.innerHTML = 'x'; 
	btnEliminar.classList.add("btn");
	btnEliminar.classList.add("btn-danger");
	btnEliminar.onclick = function () { 
		row.remove();
		}
	cell3.appendChild(btnEliminar);
	let cell4= row.insertCell();
	let btnEditar= document.createElement("button");
	btnEditar.innerHTML='🖌'; 
	btnEditar.classList.add("btn");
	btnEditar.classList.add("btn-warning");
	btnEditar.onclick = function(){ 
		
		document.getElementById('nIdCat2').value=cellIdCat.innerHTML;
		document.getElementById('nIdSubCat').value=cellIdSubCat.innerHTML; 
		document.getElementById('nNombreSubCat').value=cellNombre.innerHTML; 
		
		document.getElementById('btnGuardarSubCat').onclick = function(){
				let idCat = document.getElementById('nIdCat2').value;
				let id = document.getElementById('nIdSubCat').value;
				let nombreSubCat = document.getElementById('nNombreSubCat').value;
						cellIdCat.innerHTML = idCat;
						cellIdSubCat.innerHTML = id;
						cellNombre.innerHTML = nombreSubCat;

				document.getElementById('nNombreSubCat').value=''; 
				document.getElementById('nIdSubCat').value=''; 
				document.getElementById('nIdCat2').value='';
				document.getElementById('btnGuardarCat').onclick=addCat;
		}
	}
	cell4.appendChild(btnEditar);
				document.getElementById('nNombreSubCat').value=''; 
				document.getElementById('nIdSubCat').value=''; 
				document.getElementById('nIdCat2').value='';

}