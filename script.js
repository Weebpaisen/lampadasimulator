let lampada = document.getElementById("lampada");
let ligar = document.getElementById("ligar");
let desligar = document.getElementById("desligar");
let trocar = document.getElementById("trocar");
ligar.addEventListener ('click', ligarlampada);
desligar.addEventListener ('click', desligarlampada);
trocar.addEventListener ('click', trocarlampada);
lampada.addEventListener ('mouseover', ligarlampada);
lampada.addEventListener ('mouseout', desligarlampada);
lampada.addEventListener ('dblclick', quebrarlampada);

function Islampbroken() {
    return lampada.src.indexOf ( 'quebrada' ) > -1
}

function ligarlampada() {
    if (!Islampbroken()) {
        lampada.src ="./img/ligada.jpg";
    }}

function desligarlampada() {
    if (!Islampbroken()) {
        lampada.src = "./Img/desligada.jpg";
    }}

function trocarlampada() {
    lampada.src = "./img/desligada.jpg";
}
function quebrarlampada() {
    lampada.src = "./img/quebrada.jpg";
}        
