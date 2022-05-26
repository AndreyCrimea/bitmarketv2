select_object = null;
mobile_menu_object = null;

open_close_object = null;

window.onload = () => {
  select_object = new Select_Class(".select");
  select_object.init_default_selct_value(".select_language", "#ru");
  // select_object.set_event_on_select_option(".select_language", (elem) => {
  //   // console.log(elem.querySelector(".select__radio").id);
  // });

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
    ".select__placeholder",
    ".header__menu-wrapper",
    false
  );
};
