const guardar = ()=>{
    if (validarCampos() != true) {
        alert("los campos son encesario para llenar");
        return;
    }
    const nombre = document.getElementById("nombre").value;
    const usuario = document.getElementById("usuario").value;
    const clave = document.getElementById("clave").value;

    const url = sessionStorage.getItem("urlBuho");
    const token = sessionStorage.getItem("token");
    const endpoint = "/api/user";
    const recurso = url + endpoint;

    console.log(recurso);
    console.log(token);

    const options = {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "x-access-token":token
        },
        body: JSON.stringify({
            nombre:nombre,
            usuario:usuario,
            clave:clave
        })
    }

    fetch(recurso, options)
    .then(res=>res.json())
    .then(data=>{
        if (data.error==false){
            Swal.fire(data.body);
        }
    })
}

const validarCampos = ()=>{
    /*validacion de campos */
    
    /*fin de validacion */
    return true;
}