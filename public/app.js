function submitForm() {
  let form = document.getElementById("form__submit");
  form.submit();
}
("use strict");
fetch("./data_class.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {});
