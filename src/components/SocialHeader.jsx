import { faFacebook, faInstagramSquare} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SocialHeader() {
    return (
        <>
            <section className="header-social">
                <div className='maxWidth'>
                    <div className='wrapper_headerSocial'>
                        <div className="wrapper-social">
                            <div className='single-social'>
                                <FontAwesomeIcon icon={faEnvelope} size="base" />
                                <p>contato@gmail.com</p>
                            </div>
                            <div className='single-social'>
                                <FontAwesomeIcon icon={faPhone} size="base" />
                                <p>14 91005-7531</p>
                            </div>
                        </div>
                        <div className="social-redes">
                            <p>Siga-nos:</p>
                                <a href="https://www.instagram.com/atelie.boho/" target="_blank"><FontAwesomeIcon icon={faInstagramSquare} color='white' size="xl" /></a>
                                <a href="/" target="_blank"><FontAwesomeIcon icon={faFacebook} color='white' size="lg" /></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SocialHeader

