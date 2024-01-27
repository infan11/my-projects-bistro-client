
import './kitchenDesserts.css'
const KitchenDesset = () => {
    return (
        <div>
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className=' text-center '>
            <button  className='p-3 btn font-[Inter] bg-transparent border-b-4 rounded-xl border-[white] w-80 '>ORDER YOUR FAVOURITE FOOD</button>

            </div>
             <div data-aos="zoom-in"  className="bistroMenu  bg-fixed mb-10 mt-10 ">
    <div className=" text-white bg-[#060606a3] rounded-lg p-24 text-center max-w-screen-md mx-auto ">
        <h2 className="font-bold font-[Cinzel] text-5xl ">DESSERTS</h2>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
    </div>
</div>
        </div>
    );
};

export default KitchenDesset;