var id = "";

const GoBack = () =>{
    window.location= "index.html";
}

const Data = () => {

    let nam,lastnam, tel, email;
    nam = document.getElementById("name").value;
    lastnam = document.getElementById("lastname").value;
    tel = document.getElementById("tel").value;
    email = document.getElementById("email").value;
    let goback = false;

    if (id == "") {
        let arr = JSON.parse(localStorage.getItem("name"));
        
        if (arr == null) {
            let data = [""];
            localStorage.setItem("name",JSON.stringify(data));
        }
        else {
            arr.push([nam,lastnam,tel,email]);
            localStorage.setItem("name",JSON.stringify(arr));
        }
    }

    window.location= "index.html";
    
}



