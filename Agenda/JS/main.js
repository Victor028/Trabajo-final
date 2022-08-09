function login(){
    let user, pass;
    user = document.getElementById("email").value;
    pass = document.getElementById("password").value;

    if (user == "admin@agenda.com" && pass == "admin"){
        window.location= "index.html";
    }
    else {
        document.getElementById("s").innerHTML = "incorrect password or email.";
    }
}


const ShowData=() => {

    let arr = JSON.parse(localStorage.getItem("name"));
    if (arr!=null){
        let html = "";
        for (const k in arr) {
           html= html+`
           
                        <tr>
                            <td>${k}</td>
                            <td>${arr[k][0]}</td>
                            <td>${arr[k][1]}</td>
                            <td>${arr[k][2]}</td>
                            <td>${arr[k][3]}</td>
                            <td><a href="javascript:void(0)" onclick= "UpdateData(${k})">Editar</a>&nbsp;
                            <a href="javascript:void(0)" onclick= "DeleteData(${k})">Eliminar</a>&nbsp; <a href="javascript:void(0)" onclick= "SendMessage(${k})">Enviar Mensaje</a></td>
                        </tr>
           
           `;
        }
        document.getElementById("here").innerHTML = html;
    }
  

}

ShowData();

function DeleteData(rid){
    let arr = getCrudData();
    arr.splice(rid,1);
    item(arr);
    ShowData();
}

const UpdateData = (rid) => {
    let arr = getCrudData();
    let update = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>Agenda</title>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
            <link rel="stylesheet" href="CSS/agregar.css">
        </head>
        <body>
            <div class="login">
                <form>
                    <h1 class="text">Agregar</h1>
                    <div class="form-group">
                        <label class="form-label" for="name">Nombre</label>
                        <input class="form-control" type="text" name="name" id="name" value="${arr[rid][0]}">
                    </div>
                    <div class="form-group ">
                        <label for="lastname" class="form-label">Apellido</label>
                        <input type="text" class="form-control" name="lastname" id="lastname" value="${arr[rid][1]}">
                    </div>
                    <div class="form-group ">
                        <label for="tel" class="form-label">Telefono</label>
                        <input type="tel" class="form-control" name="tel" id="tel" value="${arr[rid][2]}">
                    </div>
                    <div class="form-group ">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" name="email" id="email" value="${arr[rid][3]}">
                    </div>
    
                    <div class="btn-group" role="group" id="elements">
                        <input type="button" class="btn btn-primary" value="Volver atras" onclick="GoBack()" id="back">
                        <input type="button" class="btn btn-primary" value="Editar" onclick="Update(${rid})" id="submit">
                      </div>
                </form>
            </div>
            <script src="JS/main.js"></script>
            <script src="JS/agregar.js"></script>
        </body>
    </html>
    
    
    `
    document.write(update);
   

}

const getCrudData = () =>{
    let arr = JSON.parse(localStorage.getItem('name'));
    return arr;
}



const Update = (rid) => {
    let arr = getCrudData();
    arr[rid][0] = document.getElementById("name").value;
    arr[rid][1] = document.getElementById("lastname").value;
    arr[rid][2] = document.getElementById("tel").value;
    arr[rid][3] = document.getElementById("email").value;
    item(arr);
    window.location = "index.html";
    
}

const item = (arr) =>{
    localStorage.setItem('name',JSON.stringify(arr));
}

const SendMessage = (rip) => {
    let arr = getCrudData();
    let textbox = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>Agenda</title>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
            <link rel="stylesheet" href="CSS/agregar.css">
        </head>
        <body>
            <div class="login">
                <form class="needs-validation" action="mailto:${arr[rip][3]}" method="post" enctype="text/plain">
                    <h1 class="text">Mensajeria</h1>
                    <div class="form-group">
                        <label class="form-label" for="mail">Para</label>
                        <input class="form-control" type="email"  value="${arr[rip][3]}">
                    </div>
                    <div class="form-group green-border-focus">
                        <label for="message">Mensaje</label>
                        <textarea class="form-control" id="message" name="." rows="3"></textarea>
                      </div>
                    <div class="btn-group" role="group" id="elements">
                        <input type="button" class="btn btn-primary" value="Volver atras" onclick="GoBack()" id="back">
                        <input type="submit" class="btn btn-primary" value="Guardar">
                      </div>
                </form>
            </div>
            <script src="JS/agregar.js"></script>
            <script src="JS/main.js"></script>
        </body>
    </html>
    
    `
    document.write(textbox);
}


