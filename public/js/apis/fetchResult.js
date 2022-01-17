import axios from "axios";
import renderHeader from "../searchView";

export default async function fetchResult(data) {
  console.log(data);
  const res = await axios.get(`/api/v1/${data.event}`);
  renderHeader(res.data.data[0]);
}
