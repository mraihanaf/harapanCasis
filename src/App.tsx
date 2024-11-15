import './App.css'
import Ig from './components/ig'
import { Memories } from './components/memories';
import { OsisResponseCardComponent } from './components/osis-response-card'
import { Button } from './components/ui/button'
import wishData from "./data"
import memories1 from "./memories/memories1.jpg"
import memories2 from "./memories/memories2.jpg"
import memories3 from "./memories/memories3.jpg"
import memories4 from "./memories/memories4.jpg"

function App() {
    const scrollToWish = () => {
      const wishSection = document.getElementById('wish');
      if (wishSection) {
        wishSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6 text-primary">
        Harapan Casis 2025/2026
      </h1>
      <Ig></Ig>
      <div className="flex justify-center mb-8">
        <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg" onClick={scrollToWish}>
          Lihat Harapan
        </Button>
      </div>
      
      <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
        Our Memories
      </h2>
      
      {/* Some images here*/}
      <Memories imgSrc={memories1}/>
      <Memories imgSrc={memories2}/>
      <Memories imgSrc={memories3}/>
      <Memories imgSrc={memories4}/>
      

      <section id='wish'>
        {wishData.map(data => <OsisResponseCardComponent name={data.nama} kelas={data.kelas} timestamp={data.timestamp} acceptedMessage={data.masuk} notAcceptedMessage={data.keluar}        
        />)}
      </section>
      
    </div>
  )
}

export default App