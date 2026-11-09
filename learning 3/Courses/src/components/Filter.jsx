
const Filter = ({ filterData, category, setCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8 px-4">
      {filterData.map((data) => (
        <button
          key={data.id}
          onClick={() => setCategory(data.title)}
          className={`px-4 py-1.5 rounded-sm text-sm font-medium border-2 transition-all duration-200 cursor-pointer
            ${
              category === data.title
                ? "bg-white text-gray-900 border-white"
                : "bg-transparent text-white border-white/50 hover:bg-white/10 hover:border-white"
            }`}
        >
          {data.title}
        </button>
      ))}
    </div>
  )
}

export default Filter