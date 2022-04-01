// WORK 2°-1°B 
// QUESTION 01
// if=se, else if=senao se, else=senao
// &&=e
// document.write=escreva, +ln=(line break)

document.writeln("01:<br><br>")

let valor = 10      //valor 

if (valor == 10){
    //igual a 10           
    document.write("o valor é igual a 10!");
}else if (valor >= 10){
    //maior que 10
    document.write("o valor é maior que 10!");
}else if (valor <= 10 && valor >= 0){
    //menor que 10 
    document.write("o valor é menor que 10!");
}else {
    //valor inválido 
    document.write("valor inválido")
}

//QUESTION 02

document.writeln("<br><br>02:<br><br>")

let p = 6           //note 1
let s = 10          //note 2
let t = 6           //note 3
let q = 8           //note 4
let r = p+s+t+q     //summation
let m = r/4         //average

document.write(
    //cabeçalho 2° questão
    "primeira nota : "+p+
    "<br>segunda nota : "+s+
    "<br>terceira nota : "+t+
    "<br>quarta nota : "+q+
    "<br>somatoria : "+r+
    "<br>média : "+m+
    "<br><br>resultado : " );

if (m >= 9 && m <=10){        
    //média 9 a 10
    document.write(
        "A<br>"+
        "APROVADO PARABÉNS");
}else if (m >= 6 && m <= 9){  
    //média 6 a 9 
    document.write(
        "B<br>"+
        "APROVADO");
}else if (m >= 2 && m <= 6){  
    //média 2 a 6
    document.write(
        "C<br>"+
        "RECUPERAÇÃO");
}else if (m >= 0 && m <= 6){  
    //média 0 a 6  
    document.write(
        "D<br>"+
        "REPROVADO");
}else {
    //inválido
    document.write(
        "valor inválido");
}

//QUESTION 03

document.writeln("<br><br>03:<br><br>")

let dn = 1940       //data de nascimento 
let dt = 1970       //data que entrou no trabalho 
let mn = 2022 - dt  //mínimo

    //===IDADE===\\

if (dn >= 1902 && dn <= 1957){
    //idade (65-120)
    document.write("idade : ");
    document.write(2022 - dn);

    //===TEMPO===\\

if (dt >= 1918 && dt <= 1997){
    //tempo de trabalho (25-104)
    document.write("<br>tempo de trabalho : ");
    document.write(2022 - dt);
}

    //===TEMPO===\\

else if (mn >= 1 && mn <= 24){
    //tempo baixo(1-24)
    document.write("<br>AVISO : tempo mínimo de trabalho 25 ");
}else {
    //inválido
    document.write("<br>AVISO : valor inválido")
}

    //===IDADE===\\

}else if (dn >= 1957 && dn <=2005){    
    //idade baixa(1-16)
    document.write("idade : ");
    document.write(2022 - dn);
    document.write("<br>AVISO : mínimo 65 anos");
}else {
    //inválido
    document.write("AVISO : valor inválido")
}
    //===APOSENTADORIA===\\
if (dn >= 1902 && dn <= 1957 && dt >= 1918 && dt <= 1997){
    //se sim
    document.write("<br><br>REQUERER APOSENTADORIA");
}else {
    //se não
    document.write("<br>NÂO REQUERER")
}
//QUESTION 04

document.writeln("<br><br>04:<br><br>")


let no = "biscoito" //nome produto
let qt = 5          //quantidade
let pc = 2.50       //preço 
let tt = qt * pc    //quantidade x preço


if (qt > 0 && qt <=5){
    let ds = tt * 0.02  //desconto 2%
    let vt = tt - ds

    document.write(
        "Produto : "+no+
        "<br>Quantidade : "+qt+
        "<br>Valorunitario: "+pc+"<br>");
    document.write("valor total : "+vt)
}else if(qt > 5 && qt <= 10){
    let ds = tt * 0.03  //desconto 3%
    let vt = tt - ds    //

    document.write(
        "Produto : "+no+
        "<br>Quantidade : "+qt+
        "<br>Valorunitario: "+pc+"<br>");
    document.write("valor total : "+vt)
}else if(qt <= 10){
    let ds = tt * 0.05  //desconto 5%
    let vt = tt - ds    //

    document.write(
        "Produto : "+no+
        "<br>Quantidade : "+qt+
        "<br>Valorunitario: "+pc+"<br>");
    document.write("valor total : "+vt);
}else {
    //valor inválido
    document.write("valor inválido")

}

//QUESTION 05

document.writeln("<br><br>05:<br><br>")

let co = 6;     //código

document.write(
    "Valor do Produto : "+co+
    "<br>")
if (co == 1){
    //a.np
    document.write(
    "Alimento Não-perecível");
}else if( co >= 2 && co <=4){
    //a.p
    document.write(
    "Alimento Perecível"
    );
}else if( co >= 5 && co <=6){
    //v
    document.write(
    "Vestuário");
}else if( co > 6 && co <= 7){
    //h.p
    document.write(
    "Higiene Pessoal");
}else if( co >= 8 && co <= 15){
    //l.u.d
    document.write("Limpeza e Utensílios Domésticos");
}else{
    //código inválido
    document.write(
    "Código Inválido")
}
