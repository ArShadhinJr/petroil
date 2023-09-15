
const Banner = () => {
  return (
      <div className=" bg-[url('./assets/bg.jpg')] bg-cover bg-no-repeat bg-center relative xl:py-[256px] md:py-[140px] sm:py-[100px] py-[50px] after:contents-[''] after:w-full after:h-full after:top-0 after:left-0 after:bg-[#000] after:bg-opacity-50 after:absolute z-10 after:z-[-1]">
              
          <div className="max-w-container xl:mx-auto md:mx-12 mx-5"> 
          <h1 className="text-white xl:text-6xl md:text-5xl text-2xl font-bold mb-[31px] max-w-[842px] leading-normal	" >We exist since 1975 on the oil and gas industry.</h1>
          <button className="bg-primary border-2 border-[transparent] text-white xl:px-[40px] md:px-[35px] px-[28px] xl:py-[13px] md:py-[12px] py-[11px] md:text-base sm:text-sm text-xs font-semibold hover:bg-white hover:text-primary hover:border-primary hover:border-2 transition duration-500">LEARN MORE</button>
        </div>
    </div>
  )
}

export default Banner