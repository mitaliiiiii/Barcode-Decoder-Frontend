import React, { useState } from 'react'
import Input from '../assets/input.png'
import axios  from 'axios';


function Mainbody() {
  const [outputtext, setoutputtext] = useState('');
  const [inputhead , setinputhead] = useState('');
  const [selectedfile, setselectedfile] = useState(null);
  const hanfleFileChange=(e)=>{
  const file = e.target.files[0];
  if(file){
    setselectedfile(file);
    setinputhead("image is uploaded")
    
  }
  }
  const handleDecode = async() => {
    if(!selectedfile){
      setinputhead("please upload file first");
      return;
    }
  
  const formData = new FormData();
  formData.append('image',selectedfile);
  try{
    const res = await axios.post('http://localhost:8080/decode' , formData);
    setoutputtext(res.data);
  }catch(err){
    console.error(err);
    setoutputtext('Failed to decode image');
  }}
  return (
    <>
    <div className='bg-[#FCDFE9] h-screen flex flex-col justify-center gap-20 items-center'>
    <div className='text-[#562B33] text-[50px] font-semibold'>BARCODE ? LET ME DECODE IT!!</div>
    <div className='flex justify-center items-center gap-10'>
      <div className='  w-[340px] h-[150px] bg-[#FEF5F9] flex flex-col justify-center items-center text-center px-4 py-2 cursor-pointer'>
        <div className='border-2 border-dashed border-gray-400 rounded-[10px] w-[320px] h-[140px] bg-[#FEF5F9] flex flex-col justify-center items-center gap-4 text-center px-4 py-2 cursor-pointer'>
          <div className='text-[#562B33] text-xs '>{inputhead || "Drop the Barcode , Get the Text!"}</div>
          <label htmlFor="file-upload" className="cursor-pointer">
          <img src={Input} alt="" className='h-12 w-12 object-contain' /></label>
        </div>
        <input id='file-upload' type="file" accept='image/*' className='hidden' onChange={hanfleFileChange} />
      </div>
      
      <button className='px-6 py-2 bg-[#ED4987] text-[#FCDFE9] rounded-[10px] font-extralight' onClick={handleDecode}> DECODE</button>
    </div>
    <div className="w-96 h-10 border border-[#562B33] border-[2px] bg-[#FAFFFE] rounded-[10px] flex items-center justify-center text-[#562B33] font-medium text-sm">
  {outputtext || 'OUTPUT'}
</div>


    </div>
      
    </>
  )
}

export default Mainbody