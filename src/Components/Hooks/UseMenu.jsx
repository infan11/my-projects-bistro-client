import { useEffect, useState } from "react";

const UseMenu = () => {
   
    const [menu , setMenu] = useState([]);
    const [loading , setLading] = useState(true);
    useEffect( () =>  {
        fetch("https://bistro-boss-server-projects-md6q0p4g6-infan11s-projects.vercel.app/menu")
        .then(res => res.json())
        .then(data => {
            setMenu(data);
            setLading(false);
        })
    },[])
    return [menu , loading]
};

export default UseMenu;