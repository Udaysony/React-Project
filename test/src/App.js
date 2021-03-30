
import './App.css';
import React, {useState} from 'react'
import {Filters} from './components/Filters'
import {Students} from './components/Students'
import {mockStudentData, mockSearchData} from './mockData'

function App() {
  const [data, setData] = useState(mockStudentData)
  const [FilterData, setFilterData] = useState(mockSearchData)
  const [FilterId, setFilterId] = useState('')

  const changeFilterId = (id) => {
    setFilterId(id)
    console.log("Filter clicked ", id);
  }
  return (
    <div className="App">
      <Filters data={FilterData} changeFilterId = {changeFilterId} />
      <p>
      </p>
      <Students data={data} FilterId={FilterId}/>
    </div>
  );
}

export default App;
