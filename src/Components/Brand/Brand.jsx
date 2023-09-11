import logo1 from '../../assets/brand/Logo1.png'
import logo2 from '../../assets/brand/Logo2.png'
import logo3 from '../../assets/brand/Logo3.png'
import logo4 from '../../assets/brand/Logo4.png'


const Brand = () => {
  return (
      <section id="brand">
          <div className="max-w-container md:justify-around mx-auto md:flex py-[117px]">
              <div>
                  <img src={logo1} alt="" />
              </div>
              <div>
                  <img src={logo2} alt="" />
              </div>
              <div>
                  <img src={logo3} alt="" />
              </div>
              <div>
                  <img src={logo4} alt="" />
              </div>
          </div>
    </section>
  )
}

export default Brand