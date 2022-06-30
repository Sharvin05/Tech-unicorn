import phone from './Phone.svg'
import truckDelivery from './truckDelivery.svg'
import heart from './Heart.svg'
import notificationBell from './notificationBell.svg'
import profileIcon from './profileIcon.svg'
import shoppingCart from './shoppingCart.svg'

function Header() {
    return (
        <div>
            <div className="navBar">
                <div className='dealerz' >Dealerz.</div>
                <a href='#'><div ><img className="phone" src={phone} alt="" /></div>
                    <div className="callCenter">Call Center</div></a>
            </div>
            <div>
                <a href='#'><div className='truckDelivery'><img src={truckDelivery} alt="" /></div>
                    <div className='shippingreturn'>Shipping & Returns</div></a>
            </div>
            <div className='categories'>
                <a href='#' className='shop'>Shop</a>
                <a href='#' className='promo'>promo</a>
                <a href='#' className='about'>About</a>
                <a href='#' className='blog'>Blog</a>
            </div>
            <div>
                <form class="form-floating searchbar">
                <input type="search" className="form-control " placeholder="Search what you need..." aria-label="Search" />
                    <label for="floatingInputInvalid">Search what you need...</label>
                </form>
            </div>
            <div className='menu'>
                <a href='#'><img src={heart} className="heart" alt="" /></a>
                <a href='#'><img src={shoppingCart} className="shoppingCart" alt="" /></a>
                <a href='#'><img src={profileIcon} className="profileIcon" alt="" /></a>
                <a href='#'><img src={notificationBell} className="notificationBell" alt="" /></a>

            </div>
        </div>
    )
}
export default Header;




