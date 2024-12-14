import Page from "./page.js";

class Navbar {
  get NavbarHome() {
    return $("id:com.eraspace.app.home:id/navigationHome");
  }

  get NavbarProfile() {
    return $("id:com.eraspace.app.home:id/navigationProfile");
  }
}

export default new Navbar();
