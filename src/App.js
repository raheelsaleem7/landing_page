import './App.css';
import Chart from './Components/Charts/Chart';
import Footer from './Components/Footer/Footer';
import HeroPage from './Components/Heropage/HeroPage';
import Navbar from './Components/Navbar/Navbar';
import VideoSection from './Components/VideoSection/VideoSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroPage />
      <Chart />
      <VideoSection />
      <Footer />
    </div>
  );
}

export default App;
