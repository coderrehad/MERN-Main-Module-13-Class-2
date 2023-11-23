import axios from "axios";

const URL = "https://crud.teamrabbil.com/api";


export async function CreateProduct(JSONBody) {
    let result = await axios.post(URL + "/v1/CreateProduct", JSONBody);
    return result.data['status'];
}