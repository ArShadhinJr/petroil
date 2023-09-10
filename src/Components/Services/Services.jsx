

const Services = () => {
  return (
      <div className="md:grid grid-cols-2">
      <div className="flex  justify-end">
        <div className='pt-[120px] pe-[149px]'>
          <h3 className='text-[64px] leading-normal font-bold max-w-[421px]'>Our Services</h3>
        <p className='max-w-[405px] text-secondary'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
          </div>
          <div className=" bg-[url('service1.jpg')] relative py-[256px] after:contents-[''] after:w-full after:h-full after:top-0 after:left-0 after:bg-[#000] after:bg-opacity-50 after:absolute z-10 after:z-[-1]">
              
          <div className="max-w-container mx-auto  "> 
          <h1 className="text-white text-4xl font-bold mb-[31px] max-w-[842px] text-[64px] leading-normal" >We exist since 1975 on the oil and gas industry.</h1>
          <button className="bg-primary border-2 border-[transparent] text-white px-[40px] py-[13px] font-semibold hover:bg-white hover:text-primary hover:border-primary hover:border-2 transition duration-500">LEARN MORE</button>
        </div>
    </div>
          <div className="  relative ps-[116px] pt-[147px] pb-[139px] bg-[#000] bg-opacity-70 z-0">
          <img src="../../public/service2.jpg" className="  absolute top-0 left-0 w-full h-full z-0 mix-blend-overlay object-cover"/>
              
          <div className="max-w-container mx-auto z-20 "> 
          <h1 className="text-white text-4xl font-bold mb-[31px] max-w-[842px] text-[64px] leading-normal	z-20" >Supply of national industries.</h1>
          <button className="bg-primary text-white px-[40px] py-[13px] font-semibold ">LEARN MORE</button>
        </div>
    </div>
          <div className="  relative ps-[116px] pt-[147px] pb-[139px] bg-[#000] bg-opacity-70 z-0">
          <img src="../../public/service3.jpg" className="  absolute top-0 left-0 w-full h-full z-0 mix-blend-overlay object-cover"/>
              
          <div className="max-w-container mx-auto z-20 "> 
          <h1 className="text-white text-4xl font-bold mb-[31px] max-w-[842px] text-[64px] leading-normal	z-20" >Supply of national industries.</h1>
          <button className="bg-primary text-white px-[40px] py-[13px] font-semibold ">LEARN MORE</button>
        </div>
    </div>
    </div>
  )
}

export default Services