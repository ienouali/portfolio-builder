import axios from "axios";

const URL = `http://localhost:8000/users`;

export async function getUsers() {
    try {
        const response = await axios.get(URL);
        const {data} =  response;
        return data;
    }
    catch (err) {
        return err;
    }
}
