import BGSOBRE from '../img/sobre-img.png'
import HAIR from '../img/hair.png'
import NOIVA from '../img/noiva.png'
import TOILETRIES from '../img/toiletries.png'
import MANICURE from '../img/manicure.png'


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
                                <p>Boho Ateliê é um salão de beleza especializado em serviços de manicure, pedicure, maquiagem e cabelo. Além disso, oferece pacotes completos para o dia da noiva, garantindo um atendimento personalizado e de alta qualidade para tornar esse momento ainda mais especial. Com um ambiente acolhedor e profissionais qualificados, Boho Ateliê é a escolha perfeita para quem busca cuidado e beleza em um só lugar. </p>
                            </div>
                            <div className='wrapper-sobre-mini'>
                                <div className='sobre-mini-single'>
                                    <img src={MANICURE} alt="" />
                                    <h5>Manicure</h5>
                                    <p>Oferecemos serviços de manicure que transformam suas unhas em verdadeiras obras de arte. De cuidados clássicos a designs modernos, garantimos unhas impecáveis e saudáveis.</p>
                                </div>
                                <div className='sobre-mini-single'>
                                    <img src={HAIR} alt="" />
                                    <h5>Cabelo</h5>
                                    <p>Nossos serviços de cabelo são projetados para realçar sua beleza natural. Oferecemos cortes modernos, colorações vibrantes e tratamentos que fortalecem e revitalizam, cuidando dos seus cabelos com a atenção e a expertise que merecem.</p>
                                </div>
                                <div className='sobre-mini-single'>
                                    <img src={TOILETRIES} alt="" />
                                    <h5>Maquiagem</h5>
                                    <p>Transforme seu visual com nossas maquiagens profissionais. Seja para um evento especial ou para o dia a dia, nossos maquiadores criam looks deslumbrantes que destacam sua beleza única.</p>
                                </div>
                                <div className='sobre-mini-single'>
                                    <img src={NOIVA} alt="" />
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