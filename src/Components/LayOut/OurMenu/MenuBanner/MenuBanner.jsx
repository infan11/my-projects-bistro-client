import './menuBanner.css'
const MenuBanner = () => {
    
    return (
      <div>
      <div className="hero bg-fixed h-[400px] lg:h-[600px] mb-10 p-8 lg:p-48" style={{backgroundImage: 'url(https://i.ibb.co/fGzhY2f/banner3.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-white bg-[#05050551] w-full lg:w-[800px] h-[200px] lg:h-[270px] rounded-lg text-center">
          <div className="max-w-md p-8 lg:p-20">
            <h1 className="mb-3 font-bold font-[Cinzel] text-2xl lg:text-5xl">OUR MENU</h1>
            <p className="mb-3 font-[Cinzel] text-base lg:text-xl">Would you like to try a dish?</p>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
    
    );
};

export default MenuBanner;