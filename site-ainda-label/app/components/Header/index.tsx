import React from 'react'
import Image from 'next/image'
import ArrowDownIcon from "../../../public/ep_arrow-down.svg" 

const Header = () => {
  return (
    <div className='flex justify-between pt-4'>
        <div className='ml-14 text-2xl'>
            AINDA LABEL  
        </div>
        <div className='mr-14'>
            <nav className='flex flex-row gap-12'>
                <div>
                    HOME
                </div>
                <div>
                    ARTISTAS
                </div>
                <div>
                    AGENDA/EVENTOS
                </div>
                <div>
                    CONTATO
                </div>
                <div>
                    OUVIR
                    <div>
                        <Image
                            priority
                            src={ArrowDownIcon}
                            alt="ouvir"
                        />
                    </div>
                </div>
            </nav> 
        </div>
    </div>
  )
}

export default Header