const fs = require ("fs")


// class Contenedor{
//     constructor(nombreArchivo){
//         this.nombreArchivo=nombreArchivo;
    
// }
// async save(objetoAGuardar){
// try {
//     const respuesta= await fs.promises.readFile("this.nombreArchivo", "utf8")
// if (respuesta= ""){
//     objetoAGuardar.id=1;
//     const arrObj=[objetoAGuardar];
//     await fs.promises.appendFile("this.nombreArchivo", JSON.stringify(arrObj, null, 2));
// return console.log(objetoAGuardar.id);
// } else{
//     const datosOjb=JSON.parse(respuesta);
//     objetoAGuardar.id=datosObj.length+1;

// }

// }
// }
// }
class divItems{
constructor(tittle, price, imgURL){
this.tittle=tittle,
this.price=0,
this.imgURL=imgURL

}
}

const item1 = new divItems("mouse", 4000, "https://cdn.shopify.com/s/files/1/0077/5513/7083/products/6036edb6-14be-4b74-a488-67b3219d2ef6_2048x.jpg?v=1625741960")
const item2 = new divItems("teclado", 5000, "https://www.edgans.cl/wp-content/uploads/2021/06/TECLADO-GAMER-MECANICO-PHILIPS-SPK8605.jpg")
const item3 = new divItems("monitor", 10000, "https://www.puntonet.net/34291-large_default/monitor-led-24-pulgadas-aoc-24b2xda-ips-hdmi-vga-dvi-75hz-4ms-altavoces-vesa-100x100.jpg")



 async function agregar(){
    
     try{
         await fs.promises.appendFile("productos.json", JSON.stringify([item1, item2, item3], 2, 2))
           
     console.log("guardado")
    
     }
    
     catch(error){
         console.log(error)
     }
    
     }
     agregar()