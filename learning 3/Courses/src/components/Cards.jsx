import Card from './Card'

const Cards = ({ courses, category }) => {

  let allCourses = []

  //returns you a list of all courses received from the api response
  const getCourses = () => {
    if (category === "All") {
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course)
        })
      })
    } else {
      // filter by selected category
      allCourses = courses[category] || []
    }
    return allCourses
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
      {getCourses().map((course) => {
        return <Card key={course.id} course={course} />
      })}
    </div>
  )
}

export default Cards