"use client";
import ArrowIcon from "./uparrow";
import { useState } from "react";
import SubCard from "./subcard";

export default function Card(props:{name:string}){
    const [open, setOpen] = useState(false);
    return (
        <div className="border rounded-md p-4 w-full mb-4">
          
          <div>


          <div className="flex justify-between items-center text-lg h-20">
            <div className="font-mono text-2xl px-5">{props.name}</div>
            <button onClick={() => setOpen(!open)} className="flex bg:hover-sky-500">
            <ArrowIcon direction={open ? 'up' : 'down'} className="w-12 h-12 text-white cursor-pointer hover:opacity-80 transition"/>

              
            </button>
          </div>
      
          
          {open && (
            <div className="mt-4 text-sm">

              <SubCard/>
            </div>
          )}
          </div>
      
        </div>
      );
    }