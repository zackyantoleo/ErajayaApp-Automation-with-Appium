import HomePage from "./Home.page.js";
import Page from "./page.js";

class Profilepage {
  get ProfileName() {
    return $("id:com.eraspace.app:id/tvName");
  }

  get btnProfileSettings() {
    return $("id:com.eraspace.app:id/btnSettings");
  }

  get btnProfileLogout() {
    return $("id:com.eraspace.app.membership:id/btnLogout");
  }

  get btnConfirmLogout() {
    return $("id:com.eraspace.app:id/btnNegative");
  }

  get NavbarProfile() {
    return $("id:com.eraspace.app.home:id/navigationProfile");
  }

  async logout() {
    await this.NavbarProfile.click();
    await this.btnProfileSettings.click();
    await this.btnProfileLogout.click();
    await this.btnConfirmLogout.click();
  }
}

export default new Profilepage();
