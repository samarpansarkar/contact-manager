import axios from "axios";

export class AllContactFromJSONServer {
  static SERVER_URL = "https://jsonplaceholder.typicode.com/users";

  static async AllContact() {
    const res = await axios.get(this.SERVER_URL);
    return res.data;
  }
}

export class ContactService {
  static SERVER_URL = `http://localhost:7000`;

  static async getAllContact() {
    const dataURL = `${this.SERVER_URL}/contacts`;
    const res = await axios.get(dataURL);
    return res.data;
  }
}
