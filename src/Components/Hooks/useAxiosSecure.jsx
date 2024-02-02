import axios from "axios";

 const axiosSecure = axios.create({
    baseURL: "https://bistro-boss-server-projects-md6q0p4g6-infan11s-projects.vercel.app"
})
const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;