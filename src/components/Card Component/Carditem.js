import './Carditem.css'
import {FaStar,FaMoneyBillAlt} from 'react-icons/fa'

const apiImage = "https://image.tmdb.org/t/p/w500/"

const Carditem = ({id,vote_count,poster_path,overview,vote_average,title}) => {

    return(
        <div className="card">
            
            <div className='card-image'>

                <img src={apiImage+poster_path}></img>
                
            </div>
            <div className='description'>
                <h1>{title}</h1>
                <p>{overview}</p>
            </div>
            <div className='card-rate'>
                <p><FaStar/> rate :  {vote_average}</p>
                <button>Add to Cart</button>
                <p className='card-price'><FaMoneyBillAlt/> price : {vote_count}</p>
            </div>
        </div>
    )
}

export default Carditem