import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import Spinner from './components/Spinner'
import { apiUrl, filterData } from './data'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function App() {
  const [courses, setCourses] = useState(null)
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState(filterData[0].title)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const result = await fetch(apiUrl)
        const output = await result.json()
        //save data into a variable
        setCourses(output.data)
      } catch (error) {
        toast.error("Something went wrong!")
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center">
      <Navbar />
      <Filter
        filterData={filterData}
        category={category}
        setCategory={setCategory}
      />
      <div className="w-full max-w-300 px-4">
        {loading ? (
          <Spinner />
        ) : (
          <Cards courses={courses} category={category} />
        )}
      </div>
    </div>
  )
}

export default App
