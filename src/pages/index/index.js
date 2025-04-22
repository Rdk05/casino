import CardSlider from "@/components/CardSlider"
import FeatureBar from "@/components/FeatureBar"
// import Footer from "@/components/Footer"
// import GameCard from "@/components/GameCard"
import HomePage from "@/components/HomePage"
// import Navbar from "@/components/Navbar"
import PokarSkills from "@/components/PokerSkills"


export default function App() {
  const games = [
    { title: 'Space Racer', image: '/game-images/space-racer.jpg' },
    { title: 'Zombie Survival', image: '/game-images/zombie.jpg' },
    { title: 'Alien Invasion', image: '/game-images/alien.jpg' },
  ]

  return (
    <>
      <HomePage/>
      <CardSlider/>
      <PokarSkills/>
      <FeatureBar/>
      {/* <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {games.map((game, i) => (
          <GameCard key={i} title={game.title} image={game.image} />
        ))}
      </div> */}
    </>
  )
}
