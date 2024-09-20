
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import DashBoard from './Pages/DashBoard'
import Projects from './Pages/Projects'
import PageNotFound from './Pages/PageNotFound'

function App() {


  return (
    <>

    <Header/>

    <Routes>

    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Auth/>} />
    <Route path='/register' element={<Auth register={true}/>} />
    <Route path='/dashboard' element={<DashBoard/>} />
    <Route path='/projects' element={<Projects/>} />
    <Route path='*' element={<PageNotFound/>} />




    </Routes>


    <Footer/>
 
    </>
  )
}

export default App
