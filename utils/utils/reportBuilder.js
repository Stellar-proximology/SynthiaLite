function buildFieldReport(chart) {
  return {
    summary: `🌟 Cynthia's reading for ${chart.name}`,
    mind: `🧠 Mind Field: Gate ${chart.mind.gate} – Tone ${chart.mind.tone}`,
    heart: `💓 Heart Field: Gate ${chart.heart.gate} – Tone ${chart.heart.tone}`,
    body: `🪨 Body Field: Gate ${chart.body.gate} – Tone ${chart.body.tone}`
  };
}
