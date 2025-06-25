function generateChart(data) {
  // TODO: Plug in FreeAstrologyAPI or HumanDesignCalc
  return {
    name: data.name,
    birthdate: data.birthdate,
    mind: { gate: "23.4", tone: 2, field: "Mind" },
    heart: { gate: "25.5", tone: 6, field: "Heart" },
    body: { gate: "46.2", tone: 4, field: "Body" }
  };
}
