$(document).ready(function () {
  $("#change_address_btn").on("click", function () {
    showAddressFields();
  });

  $("#use_old_address_btn").on("click", function () {
    showOldAddress();
  });
});

function showAddressFields() {
  $(".address-fields").removeClass("d-none");
  $(".has-address").addClass("d-none");
}

function showOldAddress() {
  $(".address-fields").addClass("d-none");
  $(".has-address").removeClass("d-none");
}
