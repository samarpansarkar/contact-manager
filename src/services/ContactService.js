import axios from "axios";

export class ContactService {
  static SERVER_URL = `http://localhost:7000`;

  static async getAllContact() {
    const dataURL = `${this.SERVER_URL}/contacts`;
    try {
      const res = await axios.get(dataURL);
      return res.data;
    } catch (error) {
      console.error("Error fetching contacts:", error);
      throw error;
    }
  }
}
