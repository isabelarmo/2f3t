mensagem = (msg) => alert(msg);
soma = (a,b) => a+b;
sub = (a,b) => a-b;
mult= (a,b) => a*b;
div = (a,b) => a/b;
raiz= x => Math.sqrt(x);
let a = "0";
let b = "0";
let c = "0";
let sa = "+";
let sb = "+";
let sc = "+";
let valor="";
let temPonto=false;
let desligada=true;

function porcentagem(){
    if(executa=="mult"){
        b=valor;
        escrever_display(div(mult(a,b),100));
        b="";
        valor="";
    }
}

function raiz_quadrada(){
    escrever_display(raiz(valor));
    valor="";

}
function onoff(){
    if(desligada){
        escrever_display("");
         desligada=false;
         zerar(); 
    }else{
        zerar();
        escrever_display("");
        desligada=true;
    }
}

function zerar(){
    if(desligada) return;
    a="";
    b="";
    valor="";
    temPonto="";
    escrever_display(0);
}
function escrever_display(num){
    document.getElementById("resultado").value=num;
}

function digitando(tecla){
    if(desligada) return;
    if(tecla=="."){
    if(!temPonto){
        temPonto = true;
        valor+= tecla;
        escrever_display(valor);  
    }
    return;
    }
    valor+=tecla;
    escrever_display(valor);
}
let executa = "";
function operacao(op){
    executa=op;
    a=valor;
    valor="";
    temPonto=false;
}
function calcula(){
    if(desligada) return;
    if (executa != ""){
    b=valor;
    if (executa == "mult") escrever_display(mult(a,b));
    if (executa == "div") escrever_display(div(a,b));
    if (executa == "sub") escrever_display(sub(a,b));
    if (executa == "soma") escrever_display(soma(Number(a),Number(b)));
    a="";
    b="";
    valor ="";
    temPonto=false;

  

    }

}
const calcula_eq2g = ()=>{
    if(a == "" || a == 0 || a == "0")return;
    //delta = b*b - 4.a.c
    a=Number(a);
    b=Number(b);
    c=Number(c);
    if(sa != "+") a = -a;
    if(sb != "+") b = -b;
    if(sc != "+") c = -c;
    let delta=(b * b) - (4*a*c);
    document.getElementById("delta").innerHTML = "Delta = " + delta;
    if(delta < 0){
    document.getElementById("raiz").innerHTML = "Não Possui raiz real";
    }
    if(delta == 0){
        let x = -b/(2*a);
        document.getElementById("raiz").innerHTML = "X1 = X2 = " + x;
    }
    if(delta > 0){
        let x1 = (-b + Math.sqrt(delta))/(2*a);
        let x2 = (-b - Math.sqrt(delta))/(2*a);
        document.getElementById("raiz").innerHTML = "X1 = " + x1 + "e X2 = " + x2;
    }
}
const set_sinal_a = () =>{
    sa = document.getElementById("a"). value;
    calcula_eq2g();
}
const set_sinal_b = () =>{
    sb = document.getElementById("b"). value;
    calcula_eq2g();
}
const set_sinal_c = () =>{
    sc = document.getElementById("c"). value;
    calcula_eq2g();
}
const set_valor_a = () =>{
    a = document.getElementById("valor_a"). value;
    calcula_eq2g();
}
const set_valor_b = () =>{
    a = document.getElementById("valor_b"). value;
    calcula_eq2g();
}
const set_valor_c = () =>{
    a = document.getElementById("valor_c"). value;
    calcula_eq2g();
}