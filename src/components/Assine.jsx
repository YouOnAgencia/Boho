import { useState } from 'react';
import { Slide, toast } from "react-toastify";
import axios from 'axios';

export default function Assine() {
    const [email, setEmail] = useState('');
    const [message] = useState('');

    const handleChange = (event) => {
        setEmail(event.target.value);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.post('https://api.sheetmonkey.io/form/5pko96v5ZnWW4hCsB5M6jG', {
                email: email,

            });
            toast.success('Email cadastrado!', {
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
            setEmail('');
        } catch (error) {
            console.error("Erro ao enviar o email:", error);
            toast.error('Erro ao enviar o email.');
        }
    };

    return (
        <>
            <section className="assine">
                <div className='maxWidth'>
                    <div className='wrapper-assine'>
                        <h1>Assine Nossa</h1>
                        <h2>Boho ateliê</h2>
                        <p>Cadastre-se para receber gratuitamente nossas promoções diretamente em seu e-mail.</p>
                    </div>
                    <form className='formAssine' method='POST' onSubmit={handleSubmit}>
                        <div className='register-btn'>
                            <input className='inputAssine' placeholder='Informe seu e-mail' type="email" onChange={handleChange} required />
                            <button className='btnAssine' type='submit'>enviar</button>
                        </div>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            </section>
        </>
    )
}