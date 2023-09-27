import { useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import { RxCross2 } from 'react-icons/rx'
import logo from '../../assets/Logo.png'


const Menu = () => {
    const [toggle, setToggle] = useState(false)


  return (
      <>
          <div className="bg-primary ">
          <div className="h-px sm:hidden block bg-[#FFB800]"></div>
          <div className="max-w-container mx-auto cross  ">
              
          </div>
          <div className={`max-w-container xl:mx-auto md:mx-12 mx-5 ${!toggle ? "flex" : "flex-block"} justify-between items-center xl:py-[27px] md:py-[17px] py-[14px]`}>
              <div className="xl:w-1/5">
                 <img src={logo} className={`xl:max-w-[192px] md:max-w-[150px] max-w-[120px]  ${!toggle ? "block" : "hidden"}`}/>
            </div>
                <div className={`xl:w-4/5 ${!toggle ? "block" : "flex justify-between"}`} >
                      
                  <p className={`font-bold xl:text-4xl md:text-2xl text-xl xl:hidden block text-white ${!toggle ? "order-1": "order-2"}`} onClick={() => setToggle( !toggle )}>{!toggle ? <FaBars /> : <RxCross2 />}</p>
                      <div className={`${!toggle ? "hidden" : "block "} xl:block min-w-[140px]`}>
                        <img src={logo} className={`xl:max-w-[192px] md:max-w-[150px] max-w-[120px]   ${!toggle ? "hidden" : "block"}`}/>
                        <ul className= {`text-[#fff] py-2 font-semibold xl:flex  gap-x-[47px] items-center justify-end `} >
                            <li className='hover:text-[#f1c3c9] py-2 '>
                                Home
                            </li>
                            <li className='hover:text-[#f1c3c9] py-2'>
                                About
                            </li>
                            <li className='hover:text-[#f1c3c9] py-2'> 
                                Services
                            </li>
                            <li className='hover:text-[#f1c3c9] py-2'>
                                Gallery
                            </li>
                            <li className='hover:text-[#f1c3c9] py-2'>
                                Blog
                            </li>
                            <button className='border px-[31px] py-[14px] hover:bg-[#fff] hover:text-primary'>
                                CONTACT
                            </button>
                        </ul>
                </div>
            </div>
              
          </div>
          
          </div>
      </>
  )
}

export default Menu