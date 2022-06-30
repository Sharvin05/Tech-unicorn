import hero from './Hero.svg'
function Hero(){
    return(
        <div>
            <img src={hero} className="hero" alt=""/>
            <p className='heroHead'>Home Shopping, Your Choice!</p>
            <p className='heroDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
    )
}
export default Hero;