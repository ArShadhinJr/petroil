import logo1 from '../../assets/brand/Logo1.png'
import logo2 from '../../assets/brand/Logo2.png'
import logo3 from '../../assets/brand/Logo3.png'
import logo4 from '../../assets/brand/Logo4.png'


const Brand = () => {
  return (
      <section id="brand">
          <div className="max-w-container xl:mx-auto md:mx-12 mx-5 md:justify-around md:grid xl:grid-cols-4 md:grid-cols-2 xl:py-[117px] md:py-[70px]">
              <div className='grid place-content-center'>
                  <img src={logo1} alt="" />
              </div>
              <div className='grid place-content-center'>
                  <img src={logo2} alt="" />
              </div>
              <div className='grid place-content-center'>
                  <img src={logo3} alt="" />
              </div>
              <div className='grid place-content-center'>
                  <img src={logo4} alt="" />
              </div>
          </div>
    </section>
  )
}

export default Brand