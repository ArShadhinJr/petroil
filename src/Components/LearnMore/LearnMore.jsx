
const LearnMore = () => {
    return (
        <>
            <section id="learn-more " className="bg-[#F0F0F0] xl:py-[136px] md:py-[90px] ">
                <div className="max-w-container xl:mx-auto md:mx-12 mx-5 flex">
                    <div className="w-2/5 bg-primary">
                        <h3 className="text-4xl text-white font-bold leading-normal max-w-[217px] py-[100px] ps-[74px]">Learn more about our company</h3>
                    </div>
                    <div className="w-3/5 bg-[url('./assets/learnMore.jpg')] bg-cover bg-no-repeat grid place-content-center">
                        <button className="text-primary bg-white px-[40px] py-[13px] font-semibold ">LEARN MORE</button>
                    </div>
                </div>
            </section>
        </>
  )
}

export default LearnMore