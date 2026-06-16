import test from "node:test";
import assert from "node:assert/strict";
import { calculateReadingTimeMinutes, parseArticleContent, slugify, stringifyArticleContent } from "../src/lib/article-utils.js";

function articlePath(slug) {
  return `/news/${slug}`;
}

test("slugify normalizes article titles", () => {
  assert.equal(slugify("Java Ijen Coffee: Origin, Altitude, and Profile"), "java-ijen-coffee-origin-altitude-and-profile");
  assert.equal(slugify("  Green   Coffee --- Buyer Guide  "), "green-coffee-buyer-guide");
});

test("reading time rounds upward with a one minute minimum", () => {
  assert.equal(calculateReadingTimeMinutes(""), 1);
  assert.equal(calculateReadingTimeMinutes(Array.from({ length: 201 }, () => "coffee").join(" ")), 2);
});

test("article content parser supports headings, lists, ordered lists, and callouts", () => {
  const parsed = parseArticleContent("## Heading\n\n- One\n- Two\n\n1. First\n2. Second\n\n> Note");
  assert.equal(parsed[0].type, "heading");
  assert.equal(parsed[1].type, "list");
  assert.equal(parsed[2].type, "ordered-list");
  assert.equal(parsed[3].type, "callout");
});

test("stringifyArticleContent preserves editor syntax", () => {
  assert.equal(
    stringifyArticleContent([{ type: "heading", text: "Heading" }, { type: "ordered-list", items: ["First", "Second"] }]),
    "## Heading\n\n1. First\n2. Second",
  );
});

test("articlePath returns canonical news path", () => {
  assert.equal(articlePath("sample-article"), "/news/sample-article");
});
