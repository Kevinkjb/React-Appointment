import {BiCalendarCheck, BiCalendar} from 'react-icons/bi'
import {useState} from 'react'


function AddAppointment({onSendAppointment, lastId}){
  const clearData = {
    ownerName: "",
    petName: "",
    aptDate: "",
    aptTime: "",
    aptNotes: ""
  }
  const [formData, setFormData] = useState(clearData)
  const [appointForm, setAppointmentForm] = useState(false)
  function formDataPublish(){
    const appointmentInfo = {
      id: lastId + 1,
      ownerName: formData.ownerName,
      petName: formData.petName,
      aptDate: formData.aptDate,
      aptTime: formData.aptTime,
      aptNotes: formData.aptNotes
    }
    onSendAppointment(appointmentInfo)
    setFormData(clearData)
  }
  return(
    <div className='text-center' >
        <div className='mt-4 flex justify-center'>
          <div className='inline-block text-4xl align-text-top text-red-800'>
            <BiCalendar />
          </div>
          <h1 className='inline-block text-3xl align-text-top font-thin pl-1'>Your Appointments</h1>
        </div>
        <div className='mt-5'>
          <button 
            className={`text-white bg-cyan-700 py-3 px-2 w-5/12 text-left rounded-t-md
            ${appointForm ? 'rounded-t-md' : 'rounded-md'}`}
            onClick={()=>{setAppointmentForm(!appointForm)}}
          >
          <div className='flex '>
            <BiCalendarCheck className='flex my-auto mx-2'/>
            Add Appointment
          </div>
          </button>
          {appointForm && <div className='w-5/12 border-2 p-5 mx-auto rounded-b-md' >
            
            <div className='grid grid-cols-3 py-3 px-2 mt-5 mx-auto'>
              <div className='px-3 text-left'>
                <label className='text-gray-600 font-semibold text-sm'>Owner Name</label>
              </div>
              <div >
                <input 
                onChange={(e)=> {setFormData({...formData, ownerName: e.target.value})}} 
                value={formData.ownerName}
                type='text' 
                className='border-2 border-gray-400 rounded-sm w-80 px-2 py-1 text-gray-500 font-medium text-sm outline-none'/>
              </div>
            </div>
            <div className='grid grid-cols-3 py-3 px-2 mx-auto'>
              <div className='px-3 text-left'>
                <label className='text-gray-600 font-semibold text-sm'>Pet Name</label>
              </div>
              <div>
                <input 
                onChange={(e)=> {setFormData({...formData, petName: e.target.value})}}
                value={formData.petName} 
                type='text' 
                className='border-2 border-gray-400 rounded-sm w-80 px-2 py-1 text-gray-500 font-medium text-sm outline-none'/>
              </div>
            </div>
            <div className='grid grid-cols-3 py-3 px-2 mx-auto'>
              <div className='px-3 text-left'>
                <label className='text-gray-600 font-semibold text-sm'>Apt Date</label>
              </div>
              <div>
                <input 
                  onChange={(e)=> {setFormData({...formData, aptDate: e.target.value})}} 
                  value={formData.aptDate}
                  type='date' className='border-2 border-gray-400 rounded-sm w-80 px-2 py-1 text-gray-500 font-medium text-sm outline-none'/>
              </div>
            </div>
            <div className='grid grid-cols-3 py-3 px-2 mx-auto'>
              <div className='px-3 text-left'>
                <label className='text-gray-600 font-semibold text-sm'>Apt Time</label>
              </div>
              <div>
                <input 
                  onChange={(e)=> {setFormData({...formData, aptTime: e.target.value})}}
                  value={formData.aptTime}
                  type='time' 
                  className='border-2 border-gray-400 rounded-sm w-80 px-2 py-1 text-gray-500 font-medium text-sm outline-none'
                />
              </div>
            </div>
            <div className='grid grid-cols-3 py-3 px-2 mx-auto'>
              <div className='px-3 text-left'>
                <label className='text-gray-600 font-semibold text-sm'>Appointment Note</label>
              </div>
              <div>
                <textarea onChange={(e)=> {setFormData({...formData, aptNotes: e.target.value})}} className='border-2 border-gray-400 rounded-sm w-80 px-2 py-1 text-gray-500 font-medium text-sm outline-none'
                  value={formData.aptNotes}
                ></textarea>
              </div>
            </div>
            <div className='flex justify-end mt-4 mr-6'>
              <button 
                onClick={formDataPublish}
                type='submit' 
                className='border-2 border-blue-500 bg-blue-500 hover:bg-white hover:border-2 hover:border-blue-400 hover:text-blue-500 text-white h-9 w-24 rounded-md text-sm font-semibold ease-in-out duration-300'>Submit
              </button>
            </div>
          </div>}
        
        </div>

    </div>
  )
}

export default AddAppointment