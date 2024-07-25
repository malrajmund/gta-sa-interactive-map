import './styles/App.scss'
import MapBox from './components/MapBox/MapBox';
import SideBar from './components/SideBar/SideBar';

const App = () => {
  return (
    <div className="App">
      <SideBar />
      <MapBox />
    </div>

  )
}

export default App
