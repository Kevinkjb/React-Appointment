import {BiCaretDown, BiCheck } from 'react-icons/bi'
import {useState} from 'react'

function Search(){
  const [toggle, setToggle] = useState(false)
  return(
    <>
      <div className="mx-auto w-5/12 my-24 flex">
        <input className='border-2 border-gray-400 rounded-sm w-full px-2 py-1  text-gray-500 font-medium text-sm outline-none' placeholder="Search"/>
        <div onClick={()=>{setToggle(!toggle)}} className=' bg-blue-500 flex justify-center w-24 h-8'>
          <button className="text-xs text-white  bg-transparent">Sort by</button>
          <BiCaretDown className='my-auto text-white ml-2 cursor-pointer'/>
        </div>
      </div>
      {toggle && <div className='w-56 absolute right-96 top-64  shadow-black border-2 bg-white rounded-md text-gray-500 text-sm'>
        <div >
          <div className='flex justify-between my-2 px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer'>
            Pet Name <BiCheck className='my-auto'/>
          </div>
          <div className='flex justify-between my-2 px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer'>
            Owner Name <BiCheck className='my-auto'/>
          </div>
          <div className='flex justify-between my-2 px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer'>
            Date <BiCheck className='my-auto'/>
          </div>
        </div>

        <div className='border-t-2'>
          <div className='flex justify-between my-2 px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer'>
            Asc <BiCheck className='my-auto'/>
          </div>
          <div className='flex justify-between my-2 px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer'>
            Desc <BiCheck className='my-auto'/>
          </div>
        </div>
      </div>}
      
      
    </>
  )
}
export default Search