import {useState, useEffect, useCallback} from 'react'
import Search from './components/Search'
import AddAppointment from "./components/AddAppointment"
import AppointmentInfo from './components/AppointmentInfo'
import './index.css'
function App(){
  const [appointmentList, setAppointmentList] = useState([])
  const [query, setQuery] = useState("")
  const [sortBy, setSortBy] = useState("petName")
  const [orderBy, setOrderBy] = useState("asc")
  const filteredData = appointmentList.filter(
    item =>{
      return(
        item.petName.toLowerCase().includes(query.toLocaleLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLocaleLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLocaleLowerCase())
      )
    }
  ).sort((a, b)=>{
    let order = (orderBy === 'asc') ? 1 : -1
    return(
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase() 
      ? -1 * order : 1 * order
    )
  })

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
      <AddAppointment
        onSendAppointment={myAppointment => setAppointmentList([...appointmentList, myAppointment])}
        lastId={appointmentList.reduce((max, item) => Number(item.id) > max ? Number(item.id) : max, 0 )}
      />
      <Search
        query={query}
        onQueryChange={myQuery => setQuery(myQuery)}
        orderBy={orderBy}
        onOrderByChange={mySort => setOrderBy(mySort)}
        sortBy={sortBy}
        onSortByChange={mySort => setSortBy(mySort)}
      />
      <ul className="divide-y divide-gray-400">
        {filteredData.map(appointment => (
          <AppointmentInfo 
            key={appointment.id}
            appointment={appointment}
            onDeleteAppointment={
              id =>
              setAppointmentList(appointmentList.filter(appointment =>
              appointment.id !== id
              ))
            }
          />

        ))}
      </ul>
    </>
  )
}

export default App