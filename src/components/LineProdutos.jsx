import Redken from '../img/Redken.png'
import Loreal from '../img/Loreal.png'
import Wella from '../img/Wella.png'
import Kerastase from '../img/Kerastase.png'
import Olorchee from '../img/Olorchee.png'

function LineProdutos() {

    return (
        <>
            <section className="LineProdutos">
                <div className="wrapperProdutos">
                    <img className='line-logo' src={Redken} alt="" />
                    <img className='line-logo' src={Loreal} alt="" />
                    <img className='line-logo' src={Wella} alt="" />
                    <img className='line-logo' src={Kerastase} alt="" />
                    <img className='line-logo' src={Olorchee} alt="" />
                </div>
            </section>
        </>
    )
}

export default LineProdutos