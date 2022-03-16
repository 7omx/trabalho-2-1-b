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
