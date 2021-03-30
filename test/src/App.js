
import './App.css';
import React, {useState} from 'react'
import {Filter} from './components/Filter'
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
      <Filter data={FilterData} changeFilterId = {changeFilterId} />
      <Students data={data} FilterId={FilterId}/>
    </div>
  );
}

export default App;
