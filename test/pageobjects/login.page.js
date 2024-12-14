import Page from "./page.js";

class LoginPage {
  // get navigateToLogin() {
  //   return $("id:com.eraspace.app.home:id/btnLogin");
  // }

  get inputUsername() {
    return $("id:com.eraspace.app.membership:id/edtPhoneOrEmail");
  }

  get inputPassword() {
    return $("id:com.eraspace.app.membership:id/edtPassword");
  }

  get btnSubmit() {
    return $("id:com.eraspace.app.membership:id/btnLogin");
  }

  get errorElement() {
    return $("id:com.eraspace.app.membership:id/tvError");
  }

  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  // open () {
  //     return super.open('login');
  // }
}

export default new LoginPage();
