function carrieCharacter() {
  let carrieTotal = carrie1 + carrie2;
  let carriePercentage = carrieTotal / 16 * 100;
  return carriePercentage;
}
function charlotteCharacter() {
  let charlotteTotal = charlotte1 + charlotte2;
  let charlottePercentage = charlotteTotal / 16 * 100;
  return charlottePercentage;
}
function samanthaCharacter() {
  let samanthaTotal = samantha1 + samantha2;
  let samanthaPercentage = samanthaTotal / 16 * 100;
  return samanthaPercentage;
}
function mirandaCharacter() {
  let mirandaTotal = miranda1 + miranda2;
  let mirandaPercentage = mirandaTotal / 16 * 100;
  return mirandaPercentage
}

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const carrie1 = parseInt($("input:radio[name=drinks]:checked").val());
    const carrie2 = parseInt($("input:radio[name=adventure]:checked").val());

    const charlotte1 = parseInt($("input:radio[name=]:checked").val());
    const charlotte2 = parseInt($("input:radio[name=]:checked").val());

    const samantha1 = parseInt($("input:radio[name=]:checked").val());
    const samantha2 = parseInt($("input:radio[name=]:checked").val());

    const miranda1 = parseInt($("input:radio[name=]:checked").val());
    const miranda2 = parseInt($("input:radio[name=]:checked").val());



    $("#character").show();
    $("#carrie").text("You are " + carrieCharacter().val() + "% like Carrie!")
    $("#charlotte").text("You are " + charlotteCharacter().val() + "% like Charlotte!")
    $("#samantha").text("You are " + samanthaCharacter().val() + "% like Samantha!")
    $("#miranda").text("You are " + mirandaCharacter().val() + "% like miranda!")
  });
});