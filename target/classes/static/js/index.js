
var stompClient = null;
let globalx = null;
let globaly = null;
let globalz = null;
let setColor = async () =>{
    let getColor = await fetch("/tbInteractivo/getInfo",{
        method:'GET'
    }).then(JSON => JSON.json());

    arrayColores = getColor.colorsInUse;
    let flag = true;
    while (flag) {
        let x = generarNumero();
        let y = generarNumero();
        let z = generarNumero();
        let color ="("+x+","+y+","+z+")"
        console.log(color in arrayColores)
        if(! (color in arrayColores)){
            globalx = x;
            globaly = y;
            globalz = z;
            flag = false;
            let urlPeticion = "/tbInteractivo/setInfo?color="+ color;
            let letColor = await fetch(urlPeticion, {
                method: 'PUT'
            })
        }
    }
}
let generarNumero = function(){
    return(Math.random()*255).toFixed(0);
}
setColor();

//Este código asume que las librerías de P5.js ya están cargadas.
//Esta función se ejecuta una sola vez al inicio del script.
function setup() {
    createCanvas(640, 480);
  }
  // Esta función se ejecuta repetidas veces indefinidamente.
  function draw() {
    if (mouseIsPressed === true) {
      //fill(globalx,globaly,globalz);
      let x = mouseX;
      let y = mouseY;
      //ellipse(x, y, 20, 20);
      let dot =[x,y,globalx,globaly,globalz]
      console.log(dot)
      stompClient.send('/events/ti', {},dot);
    }
    if (mouseIsPressed === false) {
      //fill(255,255,255);
    }
    
  }

  var clienteWeb = async()=>{
    var socket = await new SockJS('/tbInteractivo');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (){
        stompClient.subscribe('/events/ti',function(arreglo){
            let info = arreglo.body.split(',').map(function(item) {
                return parseInt(item, 10);
            });
            console.log(info)
            fill(info[2],info[3],info[4]);
            ellipse(info[0], info[1], 20, 20);
            //ellipse(100+(i*10),100+(i*20),20);
            //ellipse(info[0]+0.00000,info[1]+0.00000,20);
            //console.log(arreglo.body);
        });
    });

}
clienteWeb();

