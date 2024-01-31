import './menuBanner.css'
const MenuBanner = () => {
    
    return (
        <div >
              <div className="hero  bg-fixed h-[600px]" style={{backgroundImage: 'url(https://i.ibb.co/fGzhY2f/banner3.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content  text-white bg-[#05050551]  w-[800px] h-[270px] rounded-lg  text-center  ">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold font-[Cinzel] ">OUR MENU</h1>
      <p className="mb-5 font-[Cinzel] ">Would you like to try a dish?</p>
  
    </div>
  </div>
</div>
<br />
<br />

        </div>
    );
};

export default MenuBanner;