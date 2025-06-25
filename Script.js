document.getElementById("birthForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const userInput = Object.fromEntries(formData.entries());

  const chart = await generateChart(userInput); // pulls in your logic
  const report = buildFieldReport(chart);       // translates it to fields

  displayFieldReport(report);                   // show in browser
});
