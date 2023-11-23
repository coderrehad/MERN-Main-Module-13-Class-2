import axios from "axios";

const URL = "https://crud.teamrabbil.com/api";

export async function ReadRequest() {
    let result = await axios.get(URL + "/v1/ReadProduct");
    return result.data['data'];
}