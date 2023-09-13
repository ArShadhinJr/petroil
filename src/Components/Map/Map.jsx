import map from '../../assets/Maps.jpg'; 

const Map = () => {
  return (
    <div>
          <div>
              <img src={map} className='w-full ' />
          </div>
          <div className="bg-primary py-[46px]">
              <div className='max-w-container xl:mx-auto md:mx-12 mx-5 flex items-center'>
                  <div className="w-4/5">
                        <h3 className='text-white xl:text-4xl md:text-3xl text-2xl font-bold'>Want to join as member branch in your area?</h3>
                  </div>
                  <div className="w-1/5 flex justify-end ">
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