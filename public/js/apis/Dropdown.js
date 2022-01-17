import axios from "axios";

import { isInsertMode } from "../utils/Utils";

export const loadDropdown = async (tableName, dropdown) => {
  try {
    const resp = await axios.get(`/api/v1/${tableName}`);
    for (const fields of resp.data) {
      const id = Object.values(fields)[0];
      const name = Object.values(fields)[1];
      let option = document.createElement("option");
      option.value = id;
      option.text = name.charAt(0).toUpperCase() + name.slice(1);

      dropdown.appendChild(option);
    }
  } catch (err) {
    console.error(err);
  }
};
