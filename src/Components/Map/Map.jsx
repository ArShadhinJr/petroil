import map from '../../assets/Maps.jpg'; 

const Map = () => {
  return (
    <div>
          <div>
              <img src={map} className='w-full min-w-fit' />
          </div>
          <div className="bg-primary py-[46px]">
              <div className='max-w-container mx-auto flex'>
                  <div className="w-4/5">
                        <h3 className='text-white text-4xl font-bold'>Want to join as member branch in your area?</h3>
                  </div>
                  <div className="w-1/5 flex justify-end">
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