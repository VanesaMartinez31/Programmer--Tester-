import { Schema, model } from "mongoose";

const EsquemaProveedor = new Schema({
    name:{      
    type:String
    },
lastName:{
    type:String
    },
producto:{
    type: String
    }  
})

export const modeloProveedor = new model("Tabla Proveedor", EsquemaProveedor)