import React from 'react'
import {Routes, Route, Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
      <div className="bg-[#FEF5F9] text-[#562B33] h-24 flex items-center justify-between px-12 ">
      <div className="text-2xl font-regular">Barcode-Decoder</div>
      <div className="flex gap-4 items-center pr-28">
        <Link to="/">
        <button  className="hover:bg-[#ED4987] hover:text-[#FCDFE9] px-3 py-1 rounded-[10px] transition cursor-pointer">
          Home
        </button></Link>
        <Link to="/working">
        <button  className="hover:bg-[#ED4987] hover:text-[#FCDFE9] px-3 py-1 rounded-[10px] transition cursor-pointer">
          How it Works?
        </button></Link>
        <a href='' className="hover:bg-[#ED4987] hover:text-[#FCDFE9] px-3 py-1 rounded-[10px] transition cursor-pointer">
          Github
        </a>
      </div>
    </div>
    </>
  )
}

export default Navbar
