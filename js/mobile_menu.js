class Mobile_Menu {
  constructor() {
    this.linksMenuShow = false;
    this.loginMenuShow = false;
    this.linksMenuNode = null;
    this.loginMenuNode = null;

    this.minWidthDesktop = 950;
    this.menuLinksIcoClassName = ".header__links-mobile";
    this.menuLoginLangIcoClassName = ".header__menu-mobile";
    this.menuLinksClassName = ".header__links";
    this.menuLoginLangClassName = ".header__menus";
    // this.hideClassName = "mobile--hide";
    this.bodyClassName = ".body";

    this.scrollLockClassName = "scroll_lock";
    this.openAttrClassName = "ui_open";

    this.linksMenuIcon = document.querySelector(this.menuLinksIcoClassName);
    this.loginMenuIcon = document.querySelector(this.menuLoginLangIcoClassName);

    this.linksMenuNode = document.querySelector(this.menuLinksClassName);
    this.loginMenuNode = document.querySelector(this.menuLoginLangClassName);

    this.bodyNode = document.querySelector(this.bodyClassName);

    this.linksMenuIcon.addEventListener("click", this.myswitch_links);
    this.loginMenuIcon.addEventListener("click", this.myswitch_menu);
  }

  myshow_links = () => {
    this.linksMenuShow = true;
    alert("links show");
    // this.linksMenuNode.classList.remove(this.hideClassName);
    this.linksMenuIcon.setAttribute("open", "true");
    this.bodyNode.classList.add(this.scrollLockClassName);
  };

  myhide_links = () => {
    this.linksMenuShow = false;
    alert("links hide");
    // this.linksMenuNode.classList.add(this.hideClassName);
    this.linksMenuIcon.setAttribute("open", "false");
    this.bodyNode.classList.remove(this.scrollLockClassName);
  };

  myswitch_links = () => {
    if (this.linksMenuShow === false) {
      this.myshow_links();
    } else {
      this.myhide_links();
    }
  };

  myshow_menu = () => {
    this.loginMenuShow = true;
    alert("menu show");
    // this.loginMenuNode.classList.remove(this.hideClassName);
  };

  myhide_menu = () => {
    this.loginMenuShow = false;
    alert("menu hide");
    // this.loginMenuNode.classList.add(this.hideClassName);
  };

  myswitch_menu = () => {
    if (this.loginMenuShow === false) {
      this.myshow_menu();
    } else {
      this.myhide_menu();
    }
  };

  myhide_menus_on_resize = () => {
    if (this.linksMenuShow !== false) {
      if (window.innerWidth >= this.minWidthDesktop) {
        this.myhide_links();
      }
    }

    if (this.loginMenuShow !== false) {
      if (window.innerWidth >= this.minWidthDesktop) {
        this.myhide_menu();
      }
    }
  };
}
