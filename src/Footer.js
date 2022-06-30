
import SM from './socialMedia.svg'


function Footer(){
    return(
        <div className="footer">
            <div className='rectangle' style={{"padding-top":"58px"}}>

            </div>
            <div className='social'>
                <img src={SM} alt="" className="yt" />
                
            </div>
            <div className='bottomHeading'>
                Dealerz.
            </div>
            <div className='policy'>
            Privacy Policy
            </div>
            <div className='terms'>
            Terms and Condition
            </div>
            <div className='rights text-muted'>
            @2020 TanahAir Studio. All rights reserved.
            </div>
            

        </div>
    )
}
export default Footer;
