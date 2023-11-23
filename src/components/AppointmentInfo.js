import {BiSolidTrash} from 'react-icons/bi'


function AppointmentInfo({appointment, onDeleteAppointment}){

  return(
    <>
      <div className='flex justify-center w-150 sm:flex-col-reverse sm:w-96 mx-auto mt-5 mb-5'>
        <div className='flex py-3 w-120 sm:w-96 xs:w-80 xs:px-3'>
          <button className='flex ' onClick={()=> onDeleteAppointment(appointment.id)} type='button'>
            <BiSolidTrash className='text-white bg-red-500 h-5 w-5 mt-2 mr-2 rounded-sm sm:h-4 sm:w-4'/>
          </button>
          <div className=''>
            <h2 className='text-2xl text-blue-500 font-semibold sm:text-xl'>{appointment.petName}</h2>
            <p className='text-sm text-gray-600 '><strong className='text-blue-500'>Owner:</strong> {appointment.ownerName}</p>
            <p className='text-sm text-gray-600 sm:text-xs pt-2'>{appointment.aptNotes}</p>
          </div>
          
        </div>
        <div className='py-3 flex sm:flex sm:justify-end sm:px-1 xs:px-3'>
          <p className='text-xs'> {appointment.aptDate}</p>
          <p className='text-xs ml-1'> {appointment.aptTime}</p>
        </div>
      </div>
    </>
  )
}
export default AppointmentInfo