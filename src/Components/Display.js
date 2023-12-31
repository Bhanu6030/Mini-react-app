
import { useEffect, useState } from "react";
import {storage} from '../firebase';
import {ref,uploadBytes,listAll,getDownloadURL} from 'firebase/storage';
import {v4} from 'uuid';
export default function Display(){
const [imageUpload,setImageUpload]=useState(null);
const [imageList,setImageList]=useState([]);
const imageListRef=ref(storage,"images/")

const uploadImage=()=>{
if(imageUpload==null) return 
const imageRef=ref(storage, `images/${imageUpload.name+v4()}`);
uploadBytes(imageRef, imageUpload).then((snapshot) => {
    getDownloadURL(snapshot.ref).then((url) => {
      setImageList((prev) => [...prev, url]);
    });
  });

}
useEffect(()=>{
listAll(imageListRef).then((response)=>{
response.items.forEach((item)=>{
    getDownloadURL(item).then((url)=>{
        setImageList((prev)=>[...prev,url])
    })
})
})
},[])
    return (
        
        <div className="imageUpload">
            <input type="file" onChange={(event)=>setImageUpload(event.target.files[0])}/>
            <button className="search-button" onClick={uploadImage}>Upload</button><br></br>
            {imageList.map((url)=>{
                return <img src={url} />
            })}
        </div>
    )
}