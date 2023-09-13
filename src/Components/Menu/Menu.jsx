import { useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import { RxCross2 } from 'react-icons/rx'
import logo from '../../assets/Logo.png'


const Menu = () => {
    const [toggle, setToggle] = useState(false)


  return (
      <>
          <div className="menu bg-primary ">
          <div className="max-w-container mx-auto cross  ">
              
          </div>
          <div className={`max-w-container xl:mx-auto md:mx-12 mx-5 ${!toggle ? "flex" : "flex-block"} justify-between items-center py-[27px]`}>
              <div className="md:w-1/5">
                 <img src={logo} className={`max-w-[192px] ${!toggle ? "block" : "hidden"}`}/>
            </div>
                  <div className={`md:w-4/5 ${!toggle ? "block" : "flex justify-between"}`} >
                      
                  <p className={`font-bold text-4xl md:hidden block text-white ${!toggle ? "order-1": "order-2"}`} onClick={() => setToggle( !toggle )}>{!toggle ? <FaBars /> : <RxCross2 />}</p>
                      <div className={`${!toggle ? "hidden" : "block "} md:block min-w-[140px]`}>
                          <img src={logo} className={`max-w-[192px] ${!toggle ? "hidden" : "block"}`}/>
                  <ul className= {`text-[#fff] py-2 font-semibold md:flex gap-x-[47px] items-center justify-end `} >
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