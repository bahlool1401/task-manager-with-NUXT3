import { Schema, model, Document } from "mongoose";

export interface UserDocument extends Document{
    name:string,
    email:string,
    password:string,
    stripeCustomerId?:string 
    (/*it can be also undefined*/)
}


const userSchema = new Schema(
    {
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    stripeCustomerId:{
        type:String,
        default:null
    }
},
{
    timestamps:true
}
);



export const User = model<UserDocument>('User' ,userSchema )