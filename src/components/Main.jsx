import { Link } from 'react-scroll'
import BGMAIN from '../img/main-img.png'

function Main() {
    return (
        <>
            <section className="main" id='LinkMain'>
                <div className='maxWidth'>
                    <div className='mainContainer'>
                        <div className='main-img'>
                            <img src={BGMAIN} alt="" />
                        </div>
                        <div className='main-content'>
                            <h1>Seus cabelos precisam dos cuidados certos.</h1>
                            <p>Realce sua beleza natural com cuidados personalizados que seus cabelos merecem.</p>
                            <Link to='LinkForm' className='main-saiba' >Saiba mais</Link> 
                        </div>
                    </div>
                </div>
            </section>
            <div className='lines'>
                <div className='line1'></div>
                <div className='line2'></div>
            </div>
        </>
    )
}

export default Main