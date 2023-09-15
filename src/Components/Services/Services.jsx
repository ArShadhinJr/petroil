

const Services = () => {
  // Array of services with headings and images
  const services = [
    {
      heading: 'Modern natural oil and gas refineries.', 
      img: 'https://i.ibb.co/L58kVTL/service1.jpg'
    },
    {
      heading: 'Supply of national industries.',
      img: 'https://i.ibb.co/fvsz6fV/service2.jpg'
    },
    {
      heading: 'National fuel distribution and supply.', 
      img: 'https://i.ibb.co/z4yHh0v/service3.jpg'
    },
  ];

  return (
    // Grid layout with 2 columns
    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-2 md:mb-0 mb-3">
      {/* Left column */}
      <div className="md:flex justify-end md:items-center md:ms-12 md:me-0 mx-12">
        <div className=" xl:pe-[149px] md:pe-[80px] md:text-start text-center">
          <h3 className="xl:text-6xl md:text-4xl sm:text-3xl text-2xl leading-normal font-bold md:max-w-[421px] mb-4 ">
            Our Services
          </h3>
          <p className="md:max-w-[405px] md:text-base sm:text-sm text-xs text-secondary md:mb-0 mb-8">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        
      </div>

      {/* Right column */}
      {services.map((service, index) => (
        <div
          style={{ backgroundImage: `url(${service.img})` }}
          key={index}
          className={ ` bg-no-repeat bg-cover bg-center relative xl:py-[140px] md:py-[60px] sm:py-[50px] py-[40px] xl:px-[116px] md:px-[50px] sm:px-[40px] px-[30px] after:contents-[''] after:w-full after:h-full after:top-0 after:left-0 after:bg-[#000] after:bg-opacity-50 after:absolute z-10 after:z-[-1]`}
        >
          <div>
            <h1 className="text-white font-bold mb-[19px] max-w-[691px] xl:text-4xl md:text-3xl sm:text-2xl text-xl leading-normal">
              {service.heading}
              
            </h1>
            <button className="bg-primary border-2 border-[transparent] text-white xl:px-[40px] md:px-[35px] px-[28px] xl:py-[13px] md:py-[12px] py-[10px] md:text-base sm:text-sm text-xs font-semibold hover:bg-white hover:text-primary hover:border-primary hover:border-2 transition duration-500">LEARN MORE</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services