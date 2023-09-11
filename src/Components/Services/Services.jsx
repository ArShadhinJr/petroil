

const Services = () => {
  const ser = [
    {
      heading: 'Modern natural oil and gas refineries.', 
      img: './assets/service/service1.jpg',
    }, 
    {
      heading: 'Supply of national industries.', 
      img: './assets/service/service2.jpg',
    }, 
    {
      heading: 'National fuel distribution and supply.', 
      img: './assets/service/service3.jpg',
    }
  ]

  return (
      <div className="md:grid grid-cols-2">
        <div className="flex  justify-end">
          <div className='pt-[120px] pe-[149px]'>
            <h3 className='text-[64px] leading-normal font-bold max-w-[421px]'>Our Services</h3>
            <p className='max-w-[405px] text-secondary '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
      </div>
      
      {
        ser.map((item , index) => {
          return (
                <div key={index} className= {`bg-[url('${item.img}')] bg-no-repeat bg-cover bg-center relative py-[140px] px-[116px] after:contents-[''] after:w-full after:h-full after:top-0 after:left-0 after:bg-[#000] after:bg-opacity-50 after:absolute z-10 after:z-[-1]`}>
                    <div className="max-w-container mx-auto  "> 
                        <h1 className="text-white font-bold mb-[19px] max-w-[691px] text-4xl leading-normal" >{item.heading}</h1>
                        <button className="bg-primary border-2 border-[transparent] text-white px-[40px] py-[13px] font-semibold hover:bg-white hover:text-primary hover:border-primary hover:border-2 transition duration-500">LEARN MORE</button>
        </div>
        </div>
          )

        })
        }

        
      </div>
  )
}

export default Services