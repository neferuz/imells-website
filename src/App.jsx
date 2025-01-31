import './App.css'
import Navbar from './components/navbar/navbar'
import Header from './components/header/header'
import Main from './components/main/main'
import Footer from './components/footer/footer'

function App() {

  return (
    <>
      <div className='app'>
        <Navbar/>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </>
  )
}

export default App
