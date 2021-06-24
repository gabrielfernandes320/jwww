import { ICharacter } from "../../interfaces/characters/character";
import Request from "./request";

export default class CharacterHttpService {
  private static uri = "characters";

  public static index(params: {}) {
    return Request.get(this.uri, params);
  }

  public static show(id: string) {
    return Request.get(`${this.uri}/${id}`);
  }

  public static update(data: ICharacter) {
    return Request.patch(this.uri, data);
  }

  public static insert(data: ICharacter) {
    return Request.post(this.uri, data);
  }

  public static async destroy(id: number) {
    return await Request.del(`${this.uri}/${id}`);
  }
}
