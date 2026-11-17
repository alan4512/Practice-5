const button = document.getElementById("runButton");

button.addEventListener("click", async () => {
  const module = await import("./heavyModule.js");
  module.runHeavyTask();
});
