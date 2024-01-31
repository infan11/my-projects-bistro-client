import { useEffect, useState } from "react";

const UseMenu = () => {
    const [menu , setMenu] = useState([]);
    const [loading ,setLading ] = useState(true)
    useEffect(() => {
        fetch("/menu.json")
        .then(res => res.json())
        .then(data =>{ 
            setMenu(data)
            setLading(false)
        })
    }, [])
    return  [menu , loading] ;
};

export default UseMenu;