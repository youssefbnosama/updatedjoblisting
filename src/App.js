import logo from './logo.svg';
import './App.css';
import data from './data.json'
import { createContext, useEffect, useState } from 'react';
import Worker from './components/Worker';
export const context = createContext()
function App() {
  const [value,setValue] = useState(data)
  const [searched,setSearched] = useState([])
  const [re,setRe] = useState(false)
 function del(e){
 setSearched((pre)=>{
    pre.splice(e,1)
    return pre
   })
   setRe(!re)
  }
  useEffect(()=>{
    if(searched.length>0){
      let arr = []
      data.forEach((e,index)=>{
        let skills = [...e.languages,...e.tools,e.level,e.role]
        let result = 0
        skills.forEach((x)=>{
          searched.forEach((search)=>{
            if(x == search){
              result += 1
            }
          })
        })
        if(searched.length == result){
          arr.push(data[index])
        }
      })
      setValue(arr)
    } else{
      setValue(data)
    }
  },[searched,re])

  return (
    <div className="App w-full min-h-screen ">
      <div className=' img w-full '></div>
      {searched.length > 0 && <div className=' bg-white rounded-lg h-14 w-4/5 absolute search shadow-lg flex justify-between'>
      <div className=' w-1/2 flex pl-3'>
        {searched.map((e,index)=>{
         return <p className=' rounded-md p pr-0 p-2 m-2'>{e} <span onClick={()=>{del(index)}} className=' span text-xl p-1 cursor-pointer'>X</span></p>
        })}
      </div>
        <p className=' p2 self-center w-1/12 underline cursor-pointer ' onClick={()=>{setSearched([])}}>Clear</p>
      </div>}
      
      <context.Provider value={[value,setValue,searched,setSearched]}>
        <div className='cont py-16'>
      {value.map((e,index)=>{
     return     <Worker com={e.company} new={e.new} featured={e.featured} down={[e.postedAt,e.location,e.contract ]} position={e.position} logo={e.logo} skills={[...e.languages,...e.tools,e.level,e.role]}  />
      })}
        </div>
      </context.Provider>
    </div>
  )
}

export default App;
