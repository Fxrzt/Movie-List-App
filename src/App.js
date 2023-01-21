import './App.css';
import Header from './components/Header Component/Header';
import {useEffect,useState} from 'react'
import Carditem from './components/Card Component/Carditem'

function App() {

  const apiKey = "3327bca99c15905a6ae9fcb7db92b822"
  const apiSearch = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&search`
  const apiImage = "https://image.tmdb.org/t/p/w500/"

  const [movie, setMovie] = useState([])
  const [cart, setCart] = useState([])

  useEffect(()=>{
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setMovie(data.results)
      console.log(data)
    })
  },[])



  return (
    <div>
      <Header/>
      <div className='head-topic'>
        <h1>Movie List</h1>
      </div>
      
      <div className="App">
        <div className='container'>
          {movie.map((data)=>{
            return <Carditem key={data.id} {...data} />
          })}
        </div>
          
      </div>
    </div>
    
  );
}

export default App;
