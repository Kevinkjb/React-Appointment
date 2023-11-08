import {useState, useEffect, useCallback} from 'react'
import Search from './components/Search'
import AddAppointment from "./components/AddAppointment"
import AppointmentInfo from './components/AppointmentInfo'
import './index.css'
function App(){
  const [appointmentList, setAppointmentList] = useState([])
  const fetchData = useCallback(()=>{
    fetch('./data.json')
    .then(res => res.json())
    .then(data =>{setAppointmentList(data)})
  }, [])
  useEffect(()=>{
    fetchData()
  }, [fetchData])

  return(
    <>
      <AddAppointment/>
      <Search/>
      <ul className="divide-y divide-gray-400">
        {appointmentList.map(appointment => (
          <AppointmentInfo 
            key={appointment.id}
            appointment={appointment}
            onDeleteAppointment={
              appointmentId =>
              setAppointmentList(appointmentList.filter(appointment =>
              appointment.id !== appointmentId
              ))
            }
          />

        ))}
      </ul>
    </>
  )
}

export default App