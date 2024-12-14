import Page from "./page.js";

class Homepage {
  get ListPoin() {
    return $("id:com.eraspace.app.home:id/layerPoint");
  }

  get listMenu() {
    return $(
      'xpath:(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.eraspace.app:id/rvIconsLabelMenu"])[1]'
    );
  }

  get btnNavigateToLogin() {
    return $("id:com.eraspace.app.home:id/btnLogin");
  }
}

export default new Homepage();
