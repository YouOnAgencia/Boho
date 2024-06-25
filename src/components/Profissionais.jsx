import PERFIL1 from '../img/perfil01.png'
import PERFIL2 from '../img/perfil02.png'
import PERFIL3 from '../img/perfil03.png'
import PERFIL4 from '../img/perfil04.png'


function Profissionais() {
    return (
        <>
            <section className="profissionais" id='LinkProf'>
                <div className="bg-left">
                    <div className='bg-left-text'>
                        <h4>Nossos</h4>
                        <h1>Profissionais</h1>
                        <p>Conheça todos nossos experts que estão a sua disposição para cuidar do seu cabelo.</p>
                    </div>
                </div>
                <div className='wrapper-profissionais'>
                    <div className='profissionais-single'>
                        <img src={PERFIL1} alt="" />
                        <h1>Ana Chelly</h1>
                        <p>Hairstylist</p>
                    </div>
                    <div className='profissionais-single'>
                        <img src={PERFIL2} alt="" />
                        <h1>Ana Paula</h1>
                        <p>Hairstylist</p>
                    </div>
                    <div className='profissionais-single'>
                        <img src={PERFIL3} alt="" />
                        <h1>Claudia Ribeiro</h1>
                        <p>Manicure | Pedicure | Depilação</p>
                        <p>Design de sobrancelha</p>
                    </div>
                    <div className='profissionais-single'>
                        <img src={PERFIL4} alt="" />
                        <h1>Tetê Ferrari</h1>
                        <p>Manicure | Pedicure | Sobrancelha</p>
                        <p>Especialista em noivas</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profissionais