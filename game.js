var canvas = document.getElementById("scenario");
lienzo = canvas.getContext("2d");

var img = document.getElementById("tobot");
var img2 = document.getElementById("tobot2");
/*lienzo.drawImage(imagen, 0, 0, 100, 100);
lienzo.drawImage(imagen2, 0, 0, 100, 100);
*/
//shake();


//canvas.addEventListener("click", );

canvas.addEventListener("click", borrar);

// Funciona!
function draw()
{
    lienzo.beginPath();
    lienzo.strokeStyle = "#AAAFF";
    lienzo.moveTo(0,0);
    lienzo.lineTo(200,200);
    lienzo.stroke();
    lienzo.closePath();
}
function borrar()
{
    var I, J;

    for(I = 0;I < 4; I++)
    {
        var I, J;
        lienzo.clearRect(0 ,0 , 200 , 200);
        if(I % 2)
        {
            lienzo.drawImage(img2, 0 , 0, 100, 100);
            console.log("1");
        }
       else
        {
            lienzo.drawImage(img, 10, 10, 100, 100);
            console.log("2");
        }
        canvas.addEventListener(onload, alert());
    }
}


/*
var J;
    lienzo.drawImage(img2, 10 ,10 ,100, 100);
    console.log("1");
    for(J = 0; J < 999999999; J++){}
    console.log("2");
    lienzo.clearRect(0, 0, 100, 100);
    for(J = 0; J < 999999999; J++){}
    console.log("3");
    lienzo.drawImage(img, 0 ,0 ,100, 100);
    */