import axios from "axios";
import renderColumn from "../searchView";

export default async function fetchResult(data) {
  let url = "http://localhost:3000/api/v1/";

  const { isDescriptionRequired, fromDate, toDate, event } = data;

  if (event === "all") {
    url += "all";
  }

  url += `${event}?isDescriptionRequired=${isDescriptionRequired}&fromDate=${fromDate}&toDate=${toDate}`;

  const res = await axios.get(url);

  let column = Object.keys(res.data.data[0]);

  renderColumn(column);
}
