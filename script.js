console.log("page loaded...");

function removeConnection(element){
    var x = document.get;
    var num = document.querySelectorAll(".badge");
    var a=element.parentElement.parentElement.parentElement;
    // console.log(element.classList);
    // console.log(num);
    if(element.classList[1]=="accept"){
        num[1].innerHTML=Number(num[1].innerHTML)+1;

        element.parentElement.remove();
         console.log(a); 
        var b=document.querySelectorAll(".card-list"); 
          b[1].appendChild(a);
         b[1].innerHTML=b[1].innerHTML+a.innerHTML;
        console.log(b[1].innerHTML);

    }

    num[0].innerHTML=Number(num[0].innerHTML)-1;
    a.remove();

}

function changeName(){
    var x = document.querySelector(".username");
    x.innerHTML="Saud Haz"

}