import { modeloProveedor } from "../Modelo/proveedor_modelo.js"

modeloProveedor.create({
    name:"Vanesa",
    lastName:"Martinez",
    producto:"Leche" 
})

export const test = ()=>{
    console.log("Se está mandando a llamar correctamente el controlador")
}
