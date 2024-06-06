const loguear = async()=>{
    
    const user = document.getElementById("user").value;
    const pass = document.getElementById("password").value;
    const url = document.getElementById("url").value;

    sessionStorage.setItem("urlBuho", url);
    const urlBuho = sessionStorage.getItem("urlBuho") + "/api/login";
    
    const options = {
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            usuario : user,
            clave : pass
        })
    }
    await fetch(urlBuho, options)
    .then(res=>res.json())
    .then(data=>{
        if (data.error == true){
            alertify.error("Clave errada");
        }else{
            sessionStorage.setItem("token", data.body.token);
            console.log(data);
        }
    })
    .catch(err=>{
        console.log("Tenemos un problema", err);
    })
}