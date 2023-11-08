import {BiSolidTrash} from 'react-icons/bi'


function AppointmentInfo({appointment, onDeleteAppointment}){

  return(
    <>
      <div className='flex justify-center w-7/12 mx-auto mt-5 mb-5'>
        <div className='flex mr-auto p-3'>
          <button className='flex ' onClick={()=> onDeleteAppointment(appointment.id)} type='button'>
            <BiSolidTrash className='text-white bg-red-500 h-5 w-5 mt-2 mr-2 rounded-sm'/>
          </button>
          <div className=''>
            <h2 className='text-2xl text-blue-500 font-semibold'>{appointment.petName}</h2>
            <p className='text-md text-gray-600'><strong className='text-blue-500'>Owner:</strong> {appointment.ownerName}</p>
            <p className='text-sm text-gray-600'>{appointment.aptNotes}</p>
          </div>
          
        </div>
        <div className='p-3 '>
          <p className='text-sm'>{appointment.aptDate}</p>
        </div>
      </div>
    </>
  )
}
export default AppointmentInfo