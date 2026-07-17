import { useDispatch, useSelector } from "react-redux";
import{fetchdata} from "./slicer";
import { useEffect } from "react";

import Coincard from "./coincard";
export default function Coincreate(){
    const dispatch = useDispatch();
    const {data,loading,error}= useSelector((state)=>state.slicer);
    useEffect(()=>{
        dispatch(fetchdata(20));
    },[])

    if(loading){
        return <h1>Data is Loading</h1>

    }
    if (error){
        return <h1>Error Has Occured</h1>
    }
    return (
        <div className="cards">
            {
              data.map((value)=><Coincard key={value.id} coin={value}></Coincard>)  
            }
            
        </div>
      
    )

}
