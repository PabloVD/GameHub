import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "ac4d728f38bd46a5bda2c239c8726470"
    }
})