
export default function Greet( props: {name:string}){
    return(
        <div className="flex justify-center p-5">
            <div className="flex font-mono text-4xl gap-4"> <p>{"Hi "}</p> { props.name} 👋</div>
        </div>
    )
}