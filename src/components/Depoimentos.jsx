import DEPO1 from '../img/depo01.png'

function Depoimentos() {
    return (
        <>
            <section className="depoimentos">
                <div className='maxWidth'>
                    <h1>Depoimentos</h1>
                    <div className="wrapper-depoimentos">
                        <div className="depoimento-single">
                            <p className='depoimento-cliente'>Local agradável, profissionais ótimos, produtos de excelente qualidade! Super recomendo, salão maravilhoso.</p>
                            <div className='pessoal-depo'>
                                <img src={DEPO1} alt="" />
                                <div className='info'>
                                    <p className='depo-name'>Ana Laura</p>
                                    <p className='depo-trabalho'></p>
                                </div>
                            </div>
                        </div>
                        <div className="depoimento-single">
                            <p className='depoimento-cliente'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel corporis neque aspernatur voluptate pariatur dolor quo repudiandae et quas fugiat?</p>
                            <div className='pessoal-depo'>
                                <img src={DEPO1} alt="" />
                                <div className='info'>
                                    <p className='depo-name'>Sarah Nunes</p>
                                    <p className='depo-trabalho'>Advogada</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Depoimentos