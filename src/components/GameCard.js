const GameCard = ({ title, image }) => {
    return (
      <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
        <img src={image} alt={title} className="w-full h-40 object-cover rounded" />
        <h3 className="text-lg mt-2">{title}</h3>
      </div>
    )
  }
  
  export default GameCard
  