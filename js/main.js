import { dataSender } from "./utils/dataSender";

const testNameField = (inputClass) => {
  $(inputClass).on("input", () => {
    const input = $(this);
    const isFilled = input.val();
    isFilled
      ? input.removeClass("invalid").addClass("valid")
      : input.removeClass("valid").addClass("invalid");
  });
};

const testRadioField = (inputName) => {
  const isValid = $(`input[name=${inputName}]`).is(":checked");
  $("#cakeErr")[0].style.display = isValid ? "none" : "block";
};

$(document).ready(() => {
  testRadioField("cakeRadios");
  testNameField("#userFirstName");
  testNameField("#userLastName");

  $("#dateForm").datepicker({ minDate: -0 });
  

  dataSender();
});
