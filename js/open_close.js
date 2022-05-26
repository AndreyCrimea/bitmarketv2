class Open_Close {
  constructor() {
    var abc = null;
  }

  init_open_close_element = (
    classname_clickItem = ".open-close-button",
    classname_openItem = ".open-close-item",
    with_anim = false
  ) => {
    var open_close_clickItem = document.querySelector(classname_clickItem);
    var open_close_openItem = document.querySelector(classname_openItem);

    open_close_clickItem.addEventListener("click", () => {
      if (open_close_openItem.hasAttribute("open")) {
        this.close_select(open_close_openItem, with_anim);
      } else {
        open_close_openItem.setAttribute("open", "");
        open_close_openItem.setAttribute("active", "");
      }
    });
  };

  close_select = (element, anim_bool) => {
    if (anim_bool === true) {
      element.setAttribute("closing", "");
      element.removeAttribute("active");
      element.addEventListener(
        "animationend",
        () => {
          element.removeAttribute("closing");
          element.removeAttribute("open");
        },
        { once: true }
      );
    } else {
      element.removeAttribute("active");
      element.removeAttribute("open");
    }
  };
}
