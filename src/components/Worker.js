import { useContext } from "react"
import {context} from '../App'
export default function Worker(props){
    const [,,searched,setSearched] = useContext(context)
    function click(e){
    if(searched.indexOf(e) == -1){
        setSearched([...searched,...[e]])
    }  
    }
    return(
        <div key={props.key} data-class="worker" className=" w-full my-2  ">
            <div className=" container w-4/5 shadow-lg p-2 bg-white h-24 mx-auto rounded-lg flex justify-between text-xs">
            <div className=" flex w-1/3">
                <img src={props.logo} className=" p-2 m-2 self-center" />
                <div className=" grid grid-cols-3 grid-rows-3">
                        <p className=" text-center">{props.com}</p>
                        <p className=" text-center">{props.new&& `New`}</p>
                        <p className=" text-center">{props.featured&& `Featured`}</p>
                     <div className=" col-span-3 row-start-2 row-end-3 text-lg text-center">{props.position}</div>
                    {props.down.map((e,index)=>{
                        return <p className=" text-center col-span-1" key={index}>{e}</p>
                    })}
                </div>
            </div>
            
                <ul className=" flex w-2/5 justify-between self-center ">
                   {props.skills.map((e,index)=>{
                    return <li onClick={()=>{click(e)}} className=" li p-2 rounded-md " key={index}>{e}</li>
                   })}
                </ul>
           
            </div>
        </div>
    )
}