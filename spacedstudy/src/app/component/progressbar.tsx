

export default function ProgressBar(props:{ progress:number }) {

    return(

        <div className="w-80 bg-gray-900 rounded-full h-6  ">
  <div
    className="bg-blue-200 h-6 rounded-full"
    style={{ width: `${props.progress}%` }}
  />
</div>

    )

}