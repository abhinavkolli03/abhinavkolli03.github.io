import './styles/App.css';
import Title from './sections/Title'
import {BrowserRouter as Router} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'

function App() {
  useEffect(() => {
      AOS.init({
          duration:2000
      });
      AOS.refresh()
  }, []);

	return (
    <Router>
      <Title />
    </Router>
  )
}

export default App;