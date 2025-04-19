import ProgressBar from "./progressbar"
import removeStudy from "./studies"
export default function SubCard(){
    return(

        <div className="border rounded-md p-1 w-full mb-4 animtate-bounce">
            <div className="flex justify-between items-center text-lg h-20">
            <div className="font-mono text-2xl px-5">Sub-Subject</div>
            <button className="rounded-md border bg-neutral-950 hover:bg-neutral-900  font-mono px-5 py-3 -mb-12 me-3">Start Review</button>
            
        </div>
        <div className="flex -mt-4 mb-5 ml-5">
        <ProgressBar progress={60}/>
        <button onClick={() => removeStudy()} className="bg-gray-900 hover:bg-sky-700 rounded-lg px-6 py-2 me-4 ml-4"> REMOVE</button>
        </div>
        
        </div>
    )
        
        
    
}