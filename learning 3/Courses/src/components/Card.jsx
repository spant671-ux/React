import { useState } from "react"
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import { toast } from "react-toastify"

const Card = ({ course }) => {
  const [liked, setLiked] = useState(false)

  const handleLike = () => {
    setLiked(!liked)
    if (!liked) {
      toast.success("Liked Successfully")
    } else {
      toast.warning("Like Removed")
    }
  }

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 relative">
      <div className="relative">
        <img
          src={course.image.url}
          alt={course.image.alt}
          className="w-full h-50 object-cover"
        />
        <div className="absolute top-3 right-3">
          <button
            onClick={handleLike}
            className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:scale-110 transition-transform duration-200 cursor-pointer shadow-md"
          >
            {liked ? (
              <FcLike fontSize="1.5rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.5rem" />
            )}
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-tight mb-2">
          {course.title}
        </p>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {course.description.length > 100
            ? course.description.substring(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  )
}

export default Card