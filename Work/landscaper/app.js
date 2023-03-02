$(() => {
  const business = [
    { name: "uncle's teeth", dayRate: 1, cost: 0 },
    { name: "dull scissors", dayRate: 5, cost: 5 },
    { name: "push lawnmower", dayRate: 50, cost: 25 },
    { name: "battery powered lawnmower", dayRate: 100, cost: 250 },
    { name: "team of starving artists", dayRate: 250, cost: 500 },
  ];

  let currentToolIndex = 0;
  let currentTool = business[currentToolIndex].name;
  let toolPrice = business[currentToolIndex].cost;
  let toolRate = business[currentToolIndex].dayRate;
  let profit = 0;

  const cutGrass = () => {
    profit += toolRate;
    $("#value").text(profit);
    upgradeTool();
  };
  const winning = () => {
    if (profit >= 1000) {
      const popUp = $("#winPopUp");
      winPopUp.css("display", "block");
    }
  };

  const upgradeTool = () => {
    if (
      currentToolIndex < business.length &&
      profit >= business[currentToolIndex + 1].cost
    ) {
      const popUp = $("#popUp");
      popUp.css("display", "block");
    }
    $(".close").on("click", close);
    $(".buy").on("click", buyTool);
  };

  const close = () => {
    $("#popUp").css("display", "none");
  };
// for some reason, after reaching the price of the next tool it starts accumulating the new price but it's not displaying the new information for some reason!
  const buyTool = () => {
    if (currentToolIndex < business.length - 1 && profit <= business[currentToolIndex + 1].cost) {
        currentTool = business[currentToolIndex + 1].name;
        toolPrice = business[currentToolIndex + 1].cost;
        toolRate = business[currentToolIndex + 1].dayRate;
        return false;
        $("#popUp").css("display", "none");
    }
    
  };

  $("#currentTool").text(currentTool);
  $("#toolPrice").text(toolPrice);
  $("#toolRate").text(toolRate);
  $("#nextTool").text(business[currentToolIndex + 1].name);
  $("#cut").on("click", cutGrass);
  winning()
});
