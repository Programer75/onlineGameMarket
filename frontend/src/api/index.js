import axios from "axios";

async function getData(){
    let result = await axios.get('http://localhost:3000/getPadawans')
    return result
}

export default getData