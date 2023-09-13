import {IoIosArrowForward} from 'react-icons/io'

const Blog = () => {
    
    const blogs = [
        {
            heading: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.', 
            img: 'https://i.ibb.co/DLqBQFW/blog1.jpg'
        }, 
        {
            heading: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, repudiandae!', 
            img: 'https://i.ibb.co/PwGMDhV/blog2.jpg'
        }, 
        {
            heading: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quae!', 
            img: 'https://i.ibb.co/ZzcBcbZ/blog3.jpg'
        }
    ]

  return (
      
      <div className="bg-[#F0F0F0] xl:pt-[110px] md:pt-[70px] xl:pb-[165px] md:pb-[90px]">
              <div className="max-w-container xl:mx-auto md:mx-12 mx-5 md:grid md:grid-cols-3 sm:grid-cols-2 gap-x-[62px] ">
          {
          blogs.map((blog, index) => {
              return (
                  <div
                      style={{ backgroundImage: `url(${blog.img})` }}
                      key={index}
                      className={` bg-no-repeat bg-cover bg-center relative px-[45px] pt-[75px] pb-[55px] after:contents-[''] after:w-full after:h-full after:top-0 after:left-0 after:bg-[#000] after:bg-opacity-50 after:absolute z-10 after:z-[-1]`}>
                      <h3 className="text-white font-bold text-2xl pb-[52px]">{blog.heading}</h3>
                      <button className="bg-white bg-opacity-50 border-2 border-[transparent] text-white px-[40px] py-[13px] font-semibold hover:bg-primary hover:text-white hover:border-white hover:border-2 transition duration-500">Read More</button>
                  </div>
              )
                })
              }
        
          </div>
          <div className="max-w-container xl:mx-auto md:mx-12 mx-5 flex justify-end">
            <p className="mt-[30px] font-bold text-base">MORE FROM THE BLLOG <IoIosArrowForward className='font-bold text-2xl inline-block'/></p>
              
          </div>
      </div>
  )
}

export default Blog