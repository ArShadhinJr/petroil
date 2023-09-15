import sup1 from '../../assets/supply/supply1.jpg'
import sup2 from '../../assets/supply/supply2.jpg'
import sup3 from '../../assets/supply/supply3.jpg'
import sup4 from '../../assets/supply/supply4.jpg'


const Supply = () => {
  return (
    <div className="w-full">
          <div className="max-w-container xl:mx-auto md:mx-12 mx-5 xl:pt-[78px] md:pt-[60px] sm:pt-[50px] pt-[30px] xl:pb-[100px] md:pb-[80px] sm:pb-[60px] pb-[40px] md:flex md:items-center md:flex-row flex-col md:text-start text-center">
            <h3 className='xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold md:max-w-[289px] leading-normal xl:me-[178px] md:me-[50px] md:mb-0 mb-3'>The biggest supplier on the country</h3>
              <p className='max-w-[651px] text-secondary md:text-base sm:text-sm text-xs'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
          </div>
          <div className="w-full xl:flex grid grid-cols-2 xl:gap-x-9 gap-5 xl:mb-[28px] mb-[20px]">
              <div className='xl:w-1/4 '>
                  <img src={sup1} className='w-full' />
              </div>
              <div className='xl:w-1/4 '>
                  <img src={sup2} className='w-full' />
              </div>
              <div className='xl:w-1/4 '>
                  <img src={sup3} className='w-full' />
              </div>
              <div className='xl:w-1/4 '>
                  <img src={sup4} className='w-full' />
              </div>

          </div>
    </div>
  )
}

export default Supply