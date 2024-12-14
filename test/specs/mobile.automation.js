import loginPage from "../pageobjects/login.page";
import HomePage from "../pageobjects/Home.page";
import ProfilePage from "../pageobjects/Profile.page";
import Navbar from "../pageobjects/Navbar.page";
import dotenv from "dotenv";

dotenv.config();

describe("Login Test", () => {
  afterEach(async () => {
    await browser.reloadSession();
  });
  it("Login with valid credentials", async () => {
    try {
      await HomePage.btnNavigateToLogin.click();
    } catch (error) {
      console.error("btnNavigateToLogin not found, logging out.");
      await ProfilePage.logout();
      await HomePage.btnNavigateToLogin.click();
    }

    await loginPage.login(process.env.EMAIL, process.env.PASSWORD);

    await expect(HomePage.ListPoin).toBeExisting();
    await expect(HomePage.listMenu).toBeExisting();
    await Navbar.NavbarProfile.click();
    await expect(ProfilePage.ProfileName).toBeExisting();
  });

  it("Login with invalid credentials", async () => {
    try {
      await HomePage.btnNavigateToLogin.click();
    } catch (error) {
      console.error("btnNavigateToLogin not found, logging out.");
      await ProfilePage.logout();
      await HomePage.btnNavigateToLogin.click();
    }

    await loginPage.login("test@test.com", "test");

    const errorElement = await driver.$(
      "id:com.eraspace.app.membership:id/tvError"
    );
    await expect(errorElement).toBeExisting();
  });
});
