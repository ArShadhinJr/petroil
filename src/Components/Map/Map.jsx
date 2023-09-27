

const Map = () => {
  return (
    <div>
      <div className="mapouter">
        <div className="gmap_canvas">
        
        <iframe className="gmap_iframe w-full h-[400px]"  src="https://maps.google.com/maps?width=1200&amp;height=400&amp;hl=en&amp;q=Chittagong University of Engineering and Technology (CUET)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      
        </div>
      </div>
          <div className="bg-primary py-[46px]">
              <div className='max-w-container xl:mx-auto md:mx-12 mx-5 md:flex items-center text-center'>
                  <div className="md:w-4/5">
                        <h3 className='text-white xl:text-4xl md:text-3xl sm:text-2xl text-xl font-bold md:mb-0 mb-8'>Want to join as member branch in your area?</h3>
                  </div>
                  <div className="md:w-1/5 md:flex justify-end ">
                      <button className='border px-[31px] py-[14px] bg-primary font-bold text-white hover:bg-[#fff] hover:text-primary'>
                          CONTACT
                      </button>
                  </div>
              </div>
          </div>
          
            <div className="w-auto h-[5px] bg-[#FFB800]"></div>
    </div>
      
  )
}

export default Map