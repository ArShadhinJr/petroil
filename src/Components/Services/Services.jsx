

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
    <div className="md:grid  grid-cols-2">
      {/* Left column */}
      <div className="flex justify-end md:items-center md:mx-12 mx-5">
        <div className=" xl:pe-[149px] md:pe-[80px]">
          <h3 className="text-[64px] leading-normal font-bold max-w-[421px]">
            Our Services
          </h3>
          <p className="max-w-[405px] text-secondary ">
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
          className={`bg-no-repeat bg-cover bg-center relative py-[140px] px-[116px] after:contents-[''] after:w-full after:h-full after:top-0 after:left-0 after:bg-[#000] after:bg-opacity-50 after:absolute z-10 after:z-[-1]`}
        >
          <div>
            <h1 className="text-white font-bold mb-[19px] max-w-[691px] text-4xl leading-normal">
              {service.heading}
              
            </h1>
            <button className="bg-primary border-2 border-[transparent] text-white xl:px-[40px] md:px-[35px] px-[28px] xl:py-[13px] md:py-[12px] py-[11px] md:text-base sm:text-sm text-xs font-semibold hover:bg-white hover:text-primary hover:border-primary hover:border-2 transition duration-500">LEARN MORE</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services