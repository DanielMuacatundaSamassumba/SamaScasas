import React from 'react'
import Header from '../../../components/Header'
import Banner from '../components/Banner'
import FilterArea from '../components/FilterArea'
import Card from '../components/Card'
import { ChevronRight } from 'lucide-react'
import Footer from '../../../components/Footer'
export default function Home() {
  return (
    <div className='  bg-background min-h-svh '>
      <div className=''>
        <div className=''>
          <Header></Header>
        </div>
        <div className=' '>
          <Banner></Banner>
        </div>
      </div>
      <div className=' h-full xl:flex'>
        <FilterArea></FilterArea>
        <div className=' xl:w-10/12 xl:p-5'>
          <div className=' flex justify-center '>
            <h1 className='  w-8/12 font-bold  mt-6 text-2xl text-center md:ml-6 md:text-start xl:text-4xl xl:w-full'>Destaques</h1>
          </div>
          <div className='mt-10  w-full flex justify-center flex-wrap xl:w-full xl:flex xl:justify-around'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className=' flex justify-center '>
            <h1 className='  w-8/12 font-bold  mt-6 text-2xl text-center md:ml-6 md:text-start xl:text-4xl xl:w-full'>A Venda</h1>
          </div>
          <div>
            <div className='mt-10  w-full flex justify-center flex-wrap xl:w-full xl:flex xl:justify-around'>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />

            </div>
            <div>
            <button className='bg-black ml-6 mt-2 text-white p-2 w-1/6 flex justify-center rounded-sm'>
              Ver Mais Anuncios
              <ChevronRight></ChevronRight>
            </button>
          </div>
          </div>
          

        </div>
      </div>
      <Footer/>
    </div>
  )
}
