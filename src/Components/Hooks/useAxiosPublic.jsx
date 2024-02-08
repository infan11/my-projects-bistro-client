import axios from "axios";


const axiosPublic = axios.create({
    baseURL :"https://bistro-boss-server-projects-aroi6m9ee-infan11s-projects.vercel.app"
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;