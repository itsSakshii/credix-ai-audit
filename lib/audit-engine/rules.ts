export const rules = [
  {
    tool: "chatgpt",
    currentPlan: "team",

    check: (seats: number) => seats <= 2,

    recommendation: "Switch to ChatGPT Plus",

    reason:
      "Small teams are more cost-effective on Plus plans.",

    calculateSavings: (seats: number) => seats * 10,
  },
];