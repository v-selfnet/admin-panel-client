import axios from "axios";

const axioxBaseUrl = axios.create({
    baseURL: 'http://localhost:3000'
})

const useAxiosBaseUrl = () => {
    return [axioxBaseUrl]
};

export default useAxiosBaseUrl;