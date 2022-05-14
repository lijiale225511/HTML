
function myFunction1(){
    document.getElementById("a").style.display="block"
    document.getElementById("b").style.display="block"
    document.getElementById("c").style.display="block"
    document.getElementById("d").style.display="block"
}
function myFunction2(){
    document.getElementById("a").style.display="block"
    document.getElementById("b").style.display="none"
    document.getElementById("c").style.display="none"
    document.getElementById("d").style.display="none"
}
function myFunction3(){
    document.getElementById("a").style.display="none"
    document.getElementById("b").style.display="block"
    document.getElementById("c").style.display="none"
    document.getElementById("d").style.display="none"
}
function myFunction4(){
    document.getElementById("a").style.display="none"
    document.getElementById("b").style.display="none"
    document.getElementById("c").style.display="block"
    document.getElementById("d").style.display="none"
}
function myFunction5(){
    document.getElementById("a").style.display="none"
    document.getElementById("b").style.display="none"
    document.getElementById("c").style.display="none"
    document.getElementById("d").style.display="block"
}
function judge(){
    let x = document.getElementById('dem').value;
    if(x == null|| x==''){
        alert('请输入书名');
        return false;
    }
}
function Del1(){
    document.getElementById("del1").innerHTML='';
}
function Del2(){
    document.getElementById("del2").innerHTML='';
}

function Del3(){
    document.getElementById("del3").innerHTML='';
}

function Del4(){
    document.getElementById("del4").innerHTML='';
}

function Del5(){
    document.getElementById("del5").innerHTML='';
}

function Del6(){
    document.getElementById("del6").innerHTML='';
}

function Del7(){
    document.getElementById("del7").innerHTML='';
}

function Del8(){
    document.getElementById("del8").innerHTML='';
}
function dd(){
    let a= document.getElementById("res").value;
    if(a == null||a =='')
    {
        alert("请输入正确的身份证号");
        return false;
    }
    let b = a.substring(6,10);
    let c = a.substring(10,12);
    let d = a.substring(12,14);
    let e = a.substring(16,17);
    let sex;
    if (e %2 == 1){
        sex = '男'
    }
    else {
        sex = '女'
    }
    document.getElementById("res1").innerHTML='生日: '+b+'-'+c+'-'+d+' &nbsp 性别: '+sex;
}





