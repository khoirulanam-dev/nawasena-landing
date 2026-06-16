export function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function calculateReadingTimeMinutes(value = "") {
  const words = value.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function parseArticleContent(value = "") {
  return value
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      if (block.startsWith("### ")) return { type: "subheading", text: block.replace(/^###\s+/, "").trim() };
      if (block.startsWith("## ")) return { type: "heading", text: block.replace(/^##\s+/, "").trim() };
      if (block.split("\n").every((line) => line.trim().startsWith("- "))) {
        return { type: "list", items: block.split("\n").map((line) => line.replace(/^-\s+/, "").trim()).filter(Boolean) };
      }
      if (block.split("\n").every((line) => /^\d+\.\s+/.test(line.trim()))) {
        return { type: "ordered-list", items: block.split("\n").map((line) => line.replace(/^\d+\.\s+/, "").trim()).filter(Boolean) };
      }
      if (block.startsWith("> ")) return { type: "callout", text: block.replace(/^>\s+/, "").trim() };
      return block;
    });
}

export function stringifyArticleContent(content = []) {
  return content
    .map((block) => {
      if (typeof block === "string") return block;
      if (block.type === "heading") return `## ${block.text}`;
      if (block.type === "subheading") return `### ${block.text}`;
      if (block.type === "list") return block.items.map((item) => `- ${item}`).join("\n");
      if (block.type === "ordered-list") return block.items.map((item, index) => `${index + 1}. ${item}`).join("\n");
      if (block.type === "callout") return `> ${block.text}`;
      return block.text || "";
    })
    .filter(Boolean)
    .join("\n\n");
}
