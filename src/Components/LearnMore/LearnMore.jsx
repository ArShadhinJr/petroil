
const LearnMore = () => {
    return (
        <>
            <section id="learn-more " className="bg-[#F0F0F0] xl:py-[136px] md:py-[90px] sm:py-[70px] py-[50px]">
                <div className="max-w-container xl:mx-auto md:mx-12 mx-5 flex">
                    <div className="w-2/5 bg-primary">
                        <h3 className="xl:text-4xl md:text-3xl sm:text-2xl text-xl text-white font-bold leading-normal max-w-[217px] xl:py-[100px] md:py-[50px] sm:py-[35px] py-[25px] xl:ps-[74px] md:ps-[40px] sm:ps-[30px] ps-[20px]">Learn more about our company</h3>
                    </div>
                    <div className="w-3/5 bg-[url('./assets/learnMore.jpg')] bg-cover bg-no-repeat grid place-content-center">
                        <button className="text-primary bg-white xl:px-[40px] md:px-[35px] px-[28px] xl:py-[13px] md:py-[12px] py-[10px] md:text-base sm:text-sm text-xs font-semibold ">LEARN MORE</button>
                    </div>
                </div>
            </section>
        </>
  )
}

export default LearnMore