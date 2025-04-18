import Navbar from "../component/navbar";
import FlashCard from "../component/flashcard";

export default function review(){
    return(
        <div className="min-h-screen px-30">
            <Navbar/>
        <hr className="border-t border-gray-300 my-4 -mx-20" />
        <FlashCard/>
        </div>
        
    )
    

}