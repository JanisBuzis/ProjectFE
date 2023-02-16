import './Footer.css'
import inst_icon from './inst_icon.svg'
import whatsapp_icon from './whatsapp_icon.svg'
function Footer () {
    return (
        <div className='footer'>
            <div className='footer_wrapper'>
                <div className='footer_left'>
                <h5>Contacts</h5>
                <p>+49 152 645 671 45</p>
                <div className='icons_bottom'>
                    <div className='inst'>
                        <img src={inst_icon}/> 
                        <p>Instagram</p>
                    </div>
                    <div className='whats'>
                        <img src={whatsapp_icon}/>
                        <p>Whats App</p>
                    </div>
                </div>
            </div>
            <div className='footer_right'>
                <h6>Adress</h6>
                <p className='adress'>Flat 48, Anson House, <br/> Shandy St, London E1 4SS</p>
                <p className='hours'>Opening hours</p>
                <p className='time'>Day and night</p>
            </div>
        </div>
        <div>
            <p className='footer_p'>2023 © Janis Buzis</p>
        </div>
    </div>

    )
}


export default Footer