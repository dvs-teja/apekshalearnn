function sentmail(){
    var params ={
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        message : document.getElementById('message').value,
    }
}
const serviceid="service_n750j2b";
const templeteid="template_rnpenbc";

emailjs.send(serviceid,templeteid,params)
.then(
    res =>  {
        document.getElementById('name').value="";
        document.getElementById('email').value="";
        document.getElementById('message').value="";
        console.log(res);
        alert("sent");
    }
)
.catch(err=>console.log(err));