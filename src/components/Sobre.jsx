import BGSOBRE from '../img/sobre-img.png'
import HAIR from '../img/hair.png'
import SHAMPOO from '../img/shampoo.png'
import TOILETRIES from '../img/toiletries.png'

function Sobre() {
    return (
        <>
            <section className="sobre" id='LinkSobre'>
                <div className='maxWidth'>
                    <div className='sobreContainer'>
                        <div className="wrapper-sobre-content">
                            <div className='sobreText'>
                                <h4>Sobre a</h4>
                                <h1>Boho ateliê</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rerum inventore accusamus officia facere ipsa blanditiis sit sed! Ab, nam!</p>
                            </div>
                            <div className='wrapper-sobre-mini'>
                                <div className='sobre-mini-single'>
                                    <img src={HAIR} alt="" />
                                    <h5>Manicure</h5>
                                    <p>Oferecemos serviços de manicure que transformam suas unhas em verdadeiras obras de arte. De cuidados clássicos a designs modernos, garantimos unhas impecáveis e saudáveis.</p>
                                </div>
                                <div className='sobre-mini-single'>
                                    <img src={HAIR} alt="" />
                                    <h5>Cabelo</h5>
                                    <p>Nossos serviços de cabelo são projetados para realçar sua beleza natural. Desde cortes modernos e colorações vibrantes até tratamentos que fortalecem e revitalizam, cuidamos dos seus cabelos com a atenção e a expertise que eles merecem</p>
                                </div>
                                <div className='sobre-mini-single'>
                                    <img src={SHAMPOO} alt="" />
                                    <h5>Maquiagem</h5>
                                    <p>Transforme seu visual com nossas maquiagens profissionais. Seja para um evento especial ou para o dia a dia, nossos maquiadores criam looks deslumbrantes que destacam sua beleza única.</p>
                                </div>
                                <div className='sobre-mini-single'>
                                    <img src={TOILETRIES} alt="" />
                                    <h5>Noivas</h5>
                                    <p>Como especialistas em noivas, oferecemos serviços completos para o grande dia. De penteados elegantes a maquiagens impecáveis, cuidamos de cada detalhe para que você se sinta deslumbrante e confiante no seu momento especial.</p>
                                </div>
                            </div>
                        </div>
                        <div className='sobre-img'>
                            <img src={BGSOBRE} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sobre