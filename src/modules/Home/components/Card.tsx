import React from 'react'
import HouseImage from "./../../../assets/charming-yellow-house-with-wooden-windows-green-grassy-garden 1.png"
import DollarCoin from "./../../../assets/SamasCasa/Dollar Coin.png"
import Tipology from "./../../../assets/SamasCasa/Expand.png"
import Local from "./../../../assets/SamasCasa/Map Pin.png"
import Type from "./../../../assets/SamasCasa/Sell.png"
export default function Card() {
    return (
        <div className=''>
            <div className='bg-white p-6 mt-4 ml-4 rounded-lg cursor-pointer'>
                <img src={HouseImage} 
                 className='w-[250px]'
                />
                <div className='flex flex-col justify-start'>
                    <div className='flex '>
                        <img src={Local}
                            className='-ml-3 w-12'

                        />
                        <p className='text-lg'>Cazenga, Luanda, Angola</p>
                    </div>
                    <div className='flex'>
                        <img src={Tipology} alt="" />
                        <p className='text-lg'>T3</p>
                    </div>
                    <div className='flex'>
                        <img src={Type} alt="" />
                        <p className='text-lg'>Venda</p>
                    </div>
                    <div className='flex'>
                        <img src={DollarCoin} alt=""
                            className='-ml-2 w-9'
                        />
                        <p className='text-lg'>100.00000 AO</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
