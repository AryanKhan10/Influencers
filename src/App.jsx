import { SlArrowLeft, SlArrowRight} from "react-icons/sl";
import { useState } from "react";
import './App.css'
import {data} from '../data'
import Card from './components/Card'

function App() {
// console.log(data)
const [index,setIndex] = useState(0)
const sliderLeftHandler=()=>{

  if(index>0){
    setIndex(index-1)
  }
  else{
    setIndex(data.length-1)
  }
  

}
const sliderRightHandler=()=>{
  if(index+1<data.length){
    setIndex(index+1)
  }
  else{
    setIndex(0)
  }
}

const testHandler = ()=>{
  const index =Math.floor(Math.random()*data.length)
  setIndex(index);
}
  return (
    <>
      <div className='text-center mt-12'>
        <h1 className='text-3xl font-bold'>Influencers</h1>
        <div className='w-1/12 h-1 bg-black mx-auto'></div>
      </div> 
      <div className="bg-white w-10/12 lg:w-3/6 md:w-5/6 my-10 flex flex-col justify-center items-center mx-auto rounded-lg shadow-sm hover:shadow-xl">
      <Card data={data[index]}/>

      <div className="mx-auto flex space-x-5 my-4">
                <div onClick={sliderLeftHandler} className=" cursor-pointer">
                <SlArrowLeft/>
                </div>
                <div onClick={sliderRightHandler} className=" cursor-pointer">
                <SlArrowRight/>
                </div>
            </div>
            <div className="mx-auto my-6">
                <button onClick={testHandler}
                 className="px-7 py-2 rounded-lg text-white bg-black">Test</button>
            </div>
      </div>     
    </>
  )
}

export default App
