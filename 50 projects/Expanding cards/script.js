const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
  panel.addEventListener("click", function (e) {
    panel.classList.toggle("active");
    panels.forEach(panelToRemove => {
      if (panelToRemove !== panel) panelToRemove.classList.remove("active");
    });
  });
});
