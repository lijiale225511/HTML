class Data{
    constructor(a,b,c) {
        this.a=a;
        this.b=b;
        this.c=c;
    }
    getAnswer1(){
        if((this.b*this.b-4*this.a*this.c)<0)
        return "虚根";
        return (-this.b+Math.sqrt(this.b*this.b-4*this.a*this.c))/(2*this.a);

    }
    getAnswer2(){
        if((this.b*this.b-4*this.a*this.c)<0)
        return "虚根";
        return (-this.b-Math.sqrt(this.b*this.b-4*this.a*this.c))/(2*this.a);

    }
}


function myFunction()
{
    let a=document.getElementById("1").value;
    let b=document.getElementById("2").value;
    let c=document.getElementById("3").value;
    let answer = new Data(a,b,c);
    document.getElementById("demo").innerHTML="值: x1:"+answer.getAnswer1()+"x2:"+answer.getAnswer2();
}
