
    import Navbar from "../component/navbar"
    import DailyReview from "../component/review"
    import Greet from "../component/greeting"
    import YourStudies from "../component/studies"
    export default function Home(){
        return(
        <div className="min-h-screen px-30">
        <Navbar name="elijah"/>
        <hr className="border-t border-gray-300 my-4 -mx-20" />
        <div className="flex flex-col  p-4 rounded-md">
        <Greet name="elijah" />
        
        <DailyReview/>

        <YourStudies/>
        
        
        </div>

        

    

        </div>


        )
        

    }
