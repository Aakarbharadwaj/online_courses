import { useState, useEffect } from 'react'

import './App.css'
import Nav from './components/Nav'
import Card from './components/Card';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { apiUrl, filterData } from './data';
import { toast } from 'react-toastify';
import Spinner from './components/Spinner';
function App() {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const list = await fetch(apiUrl);
        const listData = await list.json();
        console.log(listData.data);
        setCourses(listData.data);
      }
      catch (error) {
        toast.error("somthing went wrong.")
      }

      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>

      <Nav />

      <Filter data={filterData} />

      <div>
        {
          loading ? (<Spinner />) : (<Cards courses={courses} />)
        }
      </div>
    </div>
  )
}

export default App
