select_object = null;
mobile_menu_object = null;

open_close_object = null;

window.onload = () => {
  // HEADER initialize START -----------------
  select_object = new Select_Class(".select");
  select_object.init_default_selct_value(".select_language", "#ru");
  select_object.set_event_on_select_option(".select_language", (elem) => {
    // console.log(elem.querySelector(".select__radio").id);
    var header__menus = elem.closest(".header__menu-wrapper");
    header__menus.removeAttribute("open");
    header__menus.removeAttribute("active");
  });

  open_close_object = new Open_Close();

  //   mobile_menu_object = new Mobile_Menu();
  //   window.onresize = mobile_menu_object.myhide_menus_on_resize;

  open_close_object.init_open_close_element(
    ".header__links-mobile",
    ".header__links",
    true
  );

  open_close_object.init_open_close_element(
    ".header__links-mobile",
    ".header__links-mobile",
    false
  );

  open_close_object.init_open_close_element(
    ".header__menu-mobile",
    ".header__menus",
    true
  );

  open_close_object.init_open_close_element(
    ".header__menu-mobile",
    ".header__menu-mobile",
    false
  );

  open_close_object.init_open_close_element(
    ".select__placeholder",
    ".header__menu-wrapper",
    false
  );
  // HEADER initialize END -----------------

  // FAQ initialize start ---------------
  var expandjs = null;
  if (typeof ExpandJS === "function") {
    expandjs = new ExpandJS(
      ".question__item",
      ".question__label",
      ".question__text"
    );
    console.log("expandJS inited...");
  } else {
    console.log("expandJS NOT inited...");
  }
  // FAQ initialize end ---------------
};
