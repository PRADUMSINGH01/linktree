"use server"


import {firestore} from './firebase'





export  async function AddData(name,email,password){

    if(!password){
        return {success:false  , msg:"No data submitted. Please try again... "}
    }

    try {
        
        let  res = await firestore.collection("Users").add({
            name:name,
            email:email,
            password:password
        })
        if(res.id){
            return {success:true , msg:"Data Added successfully "}
        }else{
            return {success:false , msg:"Data Not Added. Please try again "}
        }

    } catch (error) {
        return  {success:false ,msg:"some Internal  issue"};
    }



    

}