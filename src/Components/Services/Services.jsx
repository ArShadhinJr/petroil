


const Services = () => {
  // Array of services with headings and images
  const services = [
    {
      heading: 'Modern natural oil and gas refineries.'
    },
    {
      heading: 'Supply of national industries.'
    },
    {
      heading: 'National fuel distribution and supply.'
    },
  ];

  return (
    // Grid layout with 2 columns
    <div className="md:grid  grid-cols-2">
      {/* Left column */}
      <div className="flex justify-end">
        <div className="pt-[120px] pe-[149px]">
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
          key={index}
          className={`bg-[url('./assets/service/service${index+1}.jpg')] bg-no-repeat bg-cover bg-center relative py-[140px] px-[116px] after:contents-[''] after:w-full after:h-full after:top-0 after:left-0 after:bg-[#000] after:bg-opacity-50 after:absolute z-10 after:z-[-1]`}
        >
          <div className="max-w-container mx-auto ">
            <h1 className="text-white font-bold mb-[19px] max-w-[691px] text-4xl leading-normal">
              {service.heading}
              
            </h1>
            <button className="bg-primary border-2 border-[transparent] text-white px-[40px] py-[13px] font-semibold hover:bg-white hover:text-primary hover:border-primary hover:border-2 transition duration-500">
              LEARN MORE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services