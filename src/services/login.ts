import { ILogin } from "./../interfaces/auth/login";
import { signInRoutePath } from "../routes/config";
import LoginHttpService from "./http/login-http";
import history from "./history";
import { toast } from "react-toastify";

export default class LoginService {
  public static async login(login: ILogin) {
    const loginResponse = await LoginHttpService.login(
      login.email,
      login.password
    );
    const data = loginResponse.data;

    console.log(data);

    if (!data) {
      console.log("erro");
      toast.error("Ocorreu um problema ao fazer o login");
    }

    localStorage.setItem("token", data);
  }

  public static async logout() {
    await LoginHttpService.logout();

    history.push(signInRoutePath);
  }
}
