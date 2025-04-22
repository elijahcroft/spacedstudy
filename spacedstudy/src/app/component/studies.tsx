"use client"


import Card from "./card"
import { useState, useEffect} from "react"
import { supabase } from "../../../lib/supabase";

type Study = {
    id: number
    name: string
}


export default function YourStudies(){
    const[studies, setStudies] = useState<Study[]>([]);
    useEffect(() =>{
        async function loadStudies(){
            const { data, error } = await supabase.from("studies").select()
            if(error){
                console.error(error)
            }else{
                setStudies(data)
            }
        }
        loadStudies();
    }, []);
    async function addStudy(name: string){
        const {data, error} = await supabase.from("studies").insert([{name}]).select();
        if (error) {
            console.error("Error adding study:", error.message);
        }
        else{
            setStudies((prev) => [...prev, {id: data[0].id, name}])
        }
        console.log("added study")
        
    }
    async function removeStudy(id:number){
        await supabase.from("studies").delete().eq("id",id);
        setStudies((prev) =>prev.filter((s) => s.id !==id))
    }
    

    return(
        <div className="flex flex-col w-full mt-20  mh-20 ">
            <div className="h-full max-h-80">

            
             <div className="flex justify-start ">
            <h1 className="text-3xl font-mono">Your Studies</h1>
            
            <button onClick={() => addStudy("test")} className="bg-gray-900 hover:bg-sky-700 rounded-lg px-6 py-2 me-4 ml-4"> ADD</button>
           
        </div>
        
        

        <div className="grid grid-cols-2 gap-x-5 mt-8 px-10 items-start overflow-auto ">
            {studies.map((study) => (
                <Card key={study.id} id={study.id}name={study.name}/>
            ))}
           
            
        </div>
        </div>
        
        </div>
        
       
    );

};