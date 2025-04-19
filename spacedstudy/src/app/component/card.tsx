"use client";
import ArrowIcon from "./uparrow";
import { useState } from "react";
import SubCard from "./subcard";
import ProgressBar from "./progressbar";
export default function Card(props:{name:string, id:string}){
    const [open, setOpen] = useState(false);
    return (
        <div className="border rounded-lg p-4 w-full mb-4 shadow-3xl">
          
          <div>


          <div className="flex justify-between items-center text-lg h-20">
            <div className="font-mono text-4xl px-5">{props.name}</div>
            <button onClick={() => setOpen(!open)} className="flex bg:hover-sky-500">
            <ArrowIcon direction={open ? 'up' : 'down'} className="w-12 h-12 text-white cursor-pointer hover:opacity-80 transition"/>

              
            </button>
            
          </div>
      
          
          {open && (
            <div className="mt-4 text-sm">

              <SubCard/>
              <SubCard/>
              <SubCard/>
              
            </div>
          )}
          </div>
      
        </div>
      );
    }