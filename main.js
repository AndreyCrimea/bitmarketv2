const select_main = document.querySelector(".select");
const select_placeholder = document.querySelector(".select__placeholder");
const select_options = document.querySelector(".select__options");
const select_placeholder_text = document.querySelector(
  ".select__placeholder-text"
);

const option_list_radio = document.querySelectorAll("select__radio");

select_placeholder.addEventListener("click", () => {
  if (select_main.hasAttribute("open")) {
    close_select();
  } else {
    select_main.setAttribute("open", "");
    select_main.setAttribute("active", "");
  }
});

function close_select() {
  select_main.setAttribute("closing", "");
  select_main.removeAttribute("active");
  select_main.addEventListener(
    "animationend",
    () => {
      select_main.removeAttribute("closing");
      select_main.removeAttribute("open");
    },
    { once: true }
  );
}

function select_language(element) {
  select_placeholder_text.innerHTML = element.innerHTML;
  close_select();
}

function on_load_language(lang_text, lang_id) {
  document.querySelector("#" + lang_id).setAttribute("checked", "");
  select_placeholder_text.innerHTML = lang_text;
}

window.onload = () => {
  on_load_language("Русский", "ru");
};
