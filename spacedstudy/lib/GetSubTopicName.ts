
"use client";

import { useEffect, useState } from "react";
import { supabase } from "./supabase"; 
import Card from "../src/app/component/card";


export type Subtopic = { id:number; title:string }

export async function SubTopicReq(ParentId:number): Promise<Subtopic[] | null>{
 
    const { data, error } = await supabase
        .from("subcards")
        .select("id, title")
        .eq("parent_id", ParentId)
    return error ? null : data;
}




