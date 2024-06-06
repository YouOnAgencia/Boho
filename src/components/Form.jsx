import { useForm } from "react-hook-form"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import { Slide, toast } from "react-toastify";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import LOGO from '../img/logo-boho.png'
import { Link } from "react-scroll";


function Form() {

    const { register, setValue, getValues, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {

        await axios.post('https://formspree.io/f/mayrevop', data)
            .then(() => {
                toast.success('Mensagem enviada com sucesso!', {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Slide,
                });
            })
    }

    function formatarTelefone() {
        setValue('telefone', getValues('telefone').replace(/\D/g, "").substring(0, 11))

        if (getValues('telefone').length >= 11) {
            setValue('telefone', getValues('telefone').replace(/^(\d{2})(\d)(\d{4})(\d{4})$/, "($1) $2 $3-$4"));
        } else if (getValues('telefone').length >= 7) {
            setValue('telefone', getValues('telefone').replace(/^(\d{2})(\d)(\d{4})/, "($1) $2 $3-"));
        } else if (getValues('telefone').length >= 3) {
            setValue('telefone', getValues('telefone').replace(/^(\d{2})(\d)/, "($1) $2 "));
        }
    }

    return (
        <>
            <section className="formulario" id="LinkForm">
                <div className="maxWidth">
                    <div className="wrapper-form">
                        <div className="contato-add">
                            <p className="duvida-p">Ficou com alguma dúvida?</p>
                            <h1>Fale Conosco</h1>
                            <p className="second-p">Não perca mais tempo e entre em contato com nossa equipe de especialistas. Teremos o mais prazer em ajudar você.</p>
                            <div className="end-form">
                            <Link to='LinkMain' smooth={true} spy={true} offset={-60} duration={500}><img className='logo-bohoForm' src={LOGO} alt="" /></Link>

                                <FontAwesomeIcon icon={faLocationDot} />
                                <p>Av Mário Pinotte 1120. Centro, Brotas-SP</p>
                            </div>

                        </div>
                        <form action="#" method="post" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                            <h1>Formulário de contato</h1>

                            <input className="w100" type="text" placeholder="Digite seu primeiro nome*" {...register("nome", { required: "Por favor, preencha seu nome!" })} />

                            <input type="email" className="w100 email" placeholder="Digite um e-mail válido*" {...register("email", { required: "Por favor, preencha seu email!" })} />

                            <input type="tel" className="w100" placeholder="Ex: (11) 9 0123-4567*" {...register("telefone", { required: "Por favor, preencha seu telefone!", onChange: (e) => { formatarTelefone(e.target.value) } })} />

                            <textarea className="message" rows="7" maxLength="1000" minLength="20" placeholder="Conte-nos tudo*" {...register("mensagem", { required: "Por favor, preencha sua mensagem!" })}></textarea>
                            <button type="submit" className="btn-form">Enviar</button>
                            <div id="mensagemErro" style={{ color: 'red' }}> {errors.nome?.message || errors.email?.message || errors.telefone?.message || errors.mensagem?.message}</div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Form