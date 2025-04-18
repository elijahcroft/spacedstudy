
import Card from "./card";
export default function DailyReview(){
    return(

        <div className="flex flex-col">
        <div className="flex font-mono text-3xl mb-2">

            <p> Today's review</p>
            
            
        </div>
        <div className="flex w-full px-10 mt-2" >
        <Card id={1}/>    
        </div>
        
        
        
        
        
        
        </div>
    );
};