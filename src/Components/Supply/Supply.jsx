import sup1 from '../../assets/supply/supply1.jpg'
import sup2 from '../../assets/supply/supply2.jpg'
import sup3 from '../../assets/supply/supply3.jpg'
import sup4 from '../../assets/supply/supply4.jpg'


const Supply = () => {
  return (
    <div className="w-full">
          <div className="max-w-container mx-auto pb-[100px] pt-[78px] md:flex  items-center">
            <h3 className='text-5xl font-bold max-w-[289px] leading-normal	me-[178px]'>The biggest
supplier on
                  the country</h3>
              <p className='max-w-[651px] text-secondary'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
          </div>
          <div className="images w-full md:flex md:gap-x-9 mb-[28px]">
              <div className='md:w-1/4 '>
                  <img src={sup1} className='w-full' />
              </div>
              <div className='md:w-1/4 '>
                  <img src={sup2} className='w-full' />
              </div>
              <div className='md:w-1/4 '>
                  <img src={sup3} className='w-full' />
              </div>
              <div className='md:w-1/4 '>
                  <img src={sup4} className='w-full' />
              </div>

          </div>
    </div>
  )
}

export default Supply