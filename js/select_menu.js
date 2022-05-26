class Select_Class {
  constructor(select_classname) {
    this.select_options_class_name = ".select__options";
    this.select_option_class_name = ".select__option";
    this.select_placeholder_class_name = ".select__placeholder";
    this.select_placeholder_text_class_name = ".select__placeholder-text";
    this.select_option_radio_class_name = ".select__radio";
    this.select_main_list = document.querySelectorAll(select_classname);

    this.select_main_list.forEach((select_main_item) => {
      this.init_placeholders(select_main_item);

      this.init_select_options(
        select_main_item.querySelectorAll(this.select_option_class_name),
        select_main_item
      );
    });
  }

  init_placeholders(parent) {
    var cur_placeholder = parent.querySelector(
      this.select_placeholder_class_name
    );

    cur_placeholder.addEventListener("click", () => {
      if (parent.hasAttribute("open")) {
        this.close_select(parent);
      } else {
        parent.setAttribute("open", "");
        parent.setAttribute("active", "");
      }
    });
  }

  init_select_options(items, parent) {
    var second_class = parent.getAttribute("class").split(" ")[1] + "_radio";
    items.forEach((select_option) => {
      var select_label = select_option.previousElementSibling;
      select_label.setAttribute("name", second_class);
      select_option.addEventListener("click", () => {
        this.select_laguage_by_parent(select_label, parent);
      });
    });
  }

  select_laguage_by_parent(select_elem, parent) {
    select_elem.setAttribute("checked", "");
    var cur_select_placeholder_text = parent.querySelector(
      this.select_placeholder_text_class_name
    );
    cur_select_placeholder_text.innerHTML =
      select_elem.nextElementSibling.innerHTML;
    this.close_select(parent);
  }

  close_select(parent) {
    parent.setAttribute("closing", "");
    parent.removeAttribute("active");
    parent.addEventListener(
      "animationend",
      () => {
        parent.removeAttribute("closing");
        parent.removeAttribute("open");
      },
      { once: true }
    );
  }

  init_default_selct_value(select_unique_class_name_or_id, option_id) {
    var select = document.querySelector(select_unique_class_name_or_id);
    var select_elem = select.querySelector(option_id);
    select_elem.setAttribute("checked", "");
    var cur_select_placeholder_text = select.querySelector(
      this.select_placeholder_text_class_name
    );
    cur_select_placeholder_text.innerHTML =
      select_elem.nextElementSibling.innerHTML;
  }

  set_event_on_select_option(select_class, action) {
    var select = document.querySelector(select_class);
    var radio_list = select.querySelectorAll(
      this.select_option_radio_class_name
    );
    radio_list.forEach((elem) => {
      var action_wrapper = () => {
        action(elem.parentElement);
      };
      elem.addEventListener("click", action_wrapper);
    });
  }
}
