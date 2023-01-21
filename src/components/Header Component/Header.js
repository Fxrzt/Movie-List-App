import './Header.css'

const Header = () => {
    return(
        <nav className='nav-header'>
            <div className='nav-brand'>
                <h1>Movie TMDB</h1>
            </div>
        
            <div className='nav-item'>
                <input type='text' placeholder='Search Here'></input>
                <div className='badge'>
                    <div className='cart'>ตะกร้าสินค้า</div>
                    <div className='amount-cart'>10</div>
                </div>
            </div>
            
        </nav>
    )
}
export default Header