import Card from "./card"


export default function YourStudies(){
    return(
        <div className="flex flex-col w-full mt-20">
             <div className="flex">
            <h1 className="text-3xl font-mono">Your Studies</h1>
            <button className="bg-gray-900 hover:bg-sky-700 rounded-lg px-6 py-2 me-4"> ADD</button>
        </div>
        <div className="grid grid-cols-2 gap-x-5 mt-5 px-10 items-start">
           <Card id={1}/>
           <Card id={2}/>
           <Card id={3}/>
           <Card id={5}/>
            
        </div>

        </div>
       
    );

};