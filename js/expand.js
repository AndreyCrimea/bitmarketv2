class ExpandJS {
  constructor(main_class_name, click_class_name, expand_class_name) {
    this.mainClassName = main_class_name;
    this.expandClickClassName = click_class_name;
    this.expandClassName = expand_class_name;

    this.mainNodes = document.querySelectorAll(this.mainClassName);

    this.init_expand_element(this.mainNodes);
  }

  init_expand_element = (main_list) => {
    main_list.forEach((item) => {
      var label = item.querySelector(this.expandClickClassName);
      var text = item.querySelector(this.expandClassName);
      text.setAttribute("data-collapsed", "true");
      item.setAttribute("data-collapsed", "true");
      text.style.height = 0 + "px";

      label.addEventListener("click", function (e) {
        var isCollapsed = item.getAttribute("data-collapsed") === "true";

        if (isCollapsed) {
          var sectionHeight = text.scrollHeight;
          text.style.height = sectionHeight + "px";
          text.addEventListener(
            "transitionend",
            function (e) {
              text.style.height = null;
            },
            { once: true }
          );

          item.setAttribute("data-collapsed", "false");
        } else {
          var sectionHeight = text.scrollHeight;
          var elementTransition = text.style.transition;
          text.style.transition = "";
          requestAnimationFrame(function () {
            text.style.height = sectionHeight + "px";
            text.style.transition = elementTransition;
            requestAnimationFrame(function () {
              text.style.height = 0 + "px";
            });
          });
          item.setAttribute("data-collapsed", "true");
        }
      });
    });
  };
}
