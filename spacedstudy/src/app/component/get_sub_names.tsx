"use client"

import { SubTopicReq, Subtopic } from "../../../lib/GetSubTopicName";
import { useEffect, useState } from "react";
import Card from "./card";
import SubCard from "./subcard";





export default function SubTopicNames(props:{parentId:number}) {
    const [subtopics, setSubtopics] = useState<Subtopic[]>([]); 

    useEffect(() => {
        async function fetchSubtopics() {
            const result = await SubTopicReq(props.parentId); // or any ParentId
            if(result) setSubtopics(result);
        }
        fetchSubtopics();
    }, []);

    return (
        <div>
            
            {subtopics.map((sub) => (
                <SubCard key={sub.id} name={sub.title} />
                
            ))}
        </div>
    );
}
