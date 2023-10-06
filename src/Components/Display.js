import React, { useEffect } from "react";
import { useContext } from "react";
import { FillInfoContext } from "./Context";
export default function Display(){
    const {state}=useContext(FillInfoContext);
    useEffect(()=>{
        if(!state.files) return ;

        let tmp=[];
        for(let i=0;i<state.files.length;i++){
            tmp.push(URL.createObjectURL(state.files[i]));
        }
        const objectUrls=tmp;
        state.preview=objectUrls;

        for(let i=0;i<objectUrls.length;i++){
            return()=>{
                URL.revokeObjectURL(objectUrls[i]);
            };
        }
    },[state.files])
    
    return(
        <div>
<input type="file" onChange={(e)=>{
            if(e.target.files && e.target.files.length>0){
                state.files=e.target.files
            }
        }}></input>
        {state.preview && state.preview.map((pic)=><img src={pic} />)}
        </div>
        
        
    )
}