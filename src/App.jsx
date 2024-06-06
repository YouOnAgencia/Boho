

import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Sobre from './components/Sobre.jsx'
import Servicos from './components/Servicos.jsx'
import Profissionais from './components/Profissionais.jsx'
import Assine from './components/Assine.jsx'
import Depoimentos from './components/Depoimentos.jsx'
import Form from './components/Form.jsx'
import Footer from './components/Footer.jsx'
import SocialHeader from './components/SocialHeader.jsx'
import Whatsapp from './components/Whatsapp.jsx'
import LineProdutos from './components/LineProdutos.jsx'

function App() {
  return (
    <>
      <SocialHeader />
      <Header />
      <Main />
      <Sobre />
      <Servicos />
      <LineProdutos />
      <Assine />
      <Profissionais />
      <Depoimentos />
      <Form />
      <Footer />
      <Whatsapp />
    </>
  )
}

export default App
