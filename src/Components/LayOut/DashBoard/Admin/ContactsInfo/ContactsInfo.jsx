import { useEffect, useState } from "react";
import UseAuth from "../../../../Hooks/UseAuth";


const ContactsInfo = () => {
    const [info , setInfo] = useState([]);
    const { user } = UseAuth()
   useEffect(() =>{
    fetch("http://localhost:5000/contacts")
    .then(res => res.json())
    .then(data => setInfo(data));
   }, [])

    return (
        <div>
          
          <div className="grid md:grid-cols-2 gap-6 ">
                {
                    info.map((item ,index) => <div key={item._id} className=" flex    shadow-xl">
                    {/* <figure><img src={user?.photoURL} alt="Unavilable " className="w-52 min-h-full rounded-xl"/></figure> */}

                    <div className="card-body">
                    <p>Feedback:{index + 1}</p>
                     
                      <h2 className="card-title ">{item.name} </h2>
                      <h2 className="card-title ">{item.message} </h2>
                      <p>Mobile: {item.phone}</p>
                     
                    </div>
                  </div>)
                }
            
             </div>
        </div>
    );
};

export default ContactsInfo;