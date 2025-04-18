"use client";
import ArrowIcon from "./uparrow";
import { useState } from "react";

export default function Card(props:{id:number}){
    const [open, setOpen] = useState(false);
    return (
        <div className="border rounded-md p-4 w-full mb-4">
          
          <div>


          <div className="flex justify-between items-center text-lg h-20">
            <div className="font-mono text-2xl px-5">Chemistry</div>
            <button onClick={() => setOpen(!open)} className="flex bg:hover-sky-500">
            <ArrowIcon direction={open ? 'up' : 'down'} className="w-6 h-6 text-white cursor-pointer hover:opacity-80 transition"    />

              
            </button>
          </div>
      
          
          {open && (
            <div className="mt-4 text-gray-700 text-sm">
              It’s a technique for improving memory by reviewing content at increasing intervals.
            </div>
          )}
          </div>
      
        </div>
      );
    }