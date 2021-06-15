import { IWorld } from "../../interfaces/worlds/world";
import Request from "./request";

export default class WorldHttpService {
  private static uri = "worlds";

  public static index(params: {}) {
    return Request.get(this.uri, params);
  }

  public static update(data: IWorld) {
    return Request.patch(this.uri, data);
  }

  public static insert(data: IWorld) {
    return Request.post(this.uri, data);
  }
}
