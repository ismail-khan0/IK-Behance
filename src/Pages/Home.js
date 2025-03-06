import React from 'react'
import Fibo_Studio from '../Components/Fibo_Studio'
import Sidebar from '../Components/Sidbar'
import Footer from '../Components/Footer'

export default function Home() {
  return (
   <div className='mt-14'>
<Fibo_Studio/>
 <Sidebar/> 
 <Footer/>
 </div>
  )
}
