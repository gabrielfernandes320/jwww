import { IItem } from "../../interfaces/items/item";
import Request from "./request";

export default class ItemHttpService {
  private static uri = "items";

  public static index(params: {}) {
    return Request.get(this.uri, params);
  }

  public static show(id: string) {
    return Request.get(`${this.uri}/${id}`);
  }

  public static update(data: IItem) {
    return Request.patch(this.uri, data);
  }

  public static insert(data: IItem) {
    return Request.post(this.uri, data);
  }

  public static async destroy(id: number) {
    return await Request.del(`${this.uri}/${id}`);
  }
}
