import {BiCaretDown, BiCheck } from 'react-icons/bi'
import {useState} from 'react'
const customStyle = "flex justify-between my-2 px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
const DropDown = ({toggle, sortBy, orderBy, onOrderByChange, onSortByChange})=>{
  if(!toggle){
    return null
  }
  return(
    <div className='w-56 absolute right-96 top-64  shadow-black border-2 bg-white rounded-md text-gray-500 text-sm'>
        <div >
          <div className={customStyle} onClick={()=>onSortByChange("petName")}>
            Pet Name {(sortBy === "petName") && <BiCheck className='my-auto'/>}
          </div>
          <div className={customStyle} onClick={()=>onSortByChange("ownerName")}>
            Owner Name {(sortBy === "ownerName") && <BiCheck className='my-auto'/>}
          </div>
          <div className={customStyle} onClick={()=>onSortByChange("aptDate")}>
            Date {(sortBy === "aptDate") && <BiCheck className='my-auto'/>}
          </div>
        </div>

        <div className='border-t-2'>
          <div className={customStyle} onClick={()=>onOrderByChange("asc")}>
            Asc {(orderBy === "asc") && <BiCheck className='my-auto'/>}
          </div>
          <div className={customStyle} onClick={()=>onOrderByChange("desc")}>
            Desc {(orderBy === "desc") && <BiCheck className='my-auto'/>}
          </div>
        </div>
      </div>
  )
}
function Search({query, onQueryChange, sortBy, onSortByChange, orderBy, onOrderByChange}){
  const [toggle, setToggle] = useState(false)
  return(
    <>
      <div className="mx-auto w-5/12 mt-24 flex">
        <input 
          className='border-2 border-gray-400 rounded-sm w-full px-2 py-1  text-gray-500 font-medium text-sm outline-none' 
          placeholder="Search"
          onChange={(e)=>{onQueryChange(e.target.value)}}
          value={query}
        />
        <div onClick={()=>{setToggle(!toggle)}} className=' bg-cyan-700 flex justify-center w-24 h-8 cursor-pointer relative -left-1'>
          <button className="text-xs text-white  bg-transparent">Sort by</button>
          <BiCaretDown className='my-auto text-white ml-2 '/>
        </div>
      </div>
      <DropDown toggle={toggle}
        orderBy={orderBy}
        sortBy={sortBy}
        onOrderByChange={myOrder => onOrderByChange(myOrder)}
        onSortByChange={mySort => onSortByChange(mySort)}
      />
      
      
    </>
  )
}
export default Search