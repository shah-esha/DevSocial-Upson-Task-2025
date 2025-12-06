export function greetUser(name) {
  if (!name || typeof name !== "string") {
    return "Hello, mystery guest!";
  }
  const trimmed = name.trim();
  if (!trimmed) {
    return "Hello, mystery guest!";
  }
  if (trimmed.toLowerCase() === "admin") {
    return "Welcome back, admin.";
  }
  return `Hello, ${trimmed}!`;
}

export function classifyScore(score) {
  if (Number.isNaN(score)) {
    throw new Error("Score must be a number");
  }
  if (score < 0 || score > 100) {
    throw new Error("Score must be between 0 and 100");
  }
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}
