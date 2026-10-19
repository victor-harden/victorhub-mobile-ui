import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(fileURLToPath(import.meta.url));
const tokens = readFileSync(join(root, "..", "tokens.css"), "utf8");
const components = readFileSync(join(root, "..", "components.css"), "utf8");

test("defines core tokens", () => {
  for (const token of ["--vh-bg", "--vh-surface", "--vh-text", "--vh-accent", "--vh-radius"]) {
    assert.match(tokens, new RegExp(token + ":"));
  }
});

test("defines a touch target token of at least 44px", () => {
  const match = tokens.match(/--vh-touch:\s*(\d+)px/);
  assert.ok(match, "touch token present");
  assert.ok(Number(match[1]) >= 44);
});

test("light theme overrides background", () => {
  assert.match(tokens, /\[data-theme="light"\]/);
});

test("buttons honour the touch token", () => {
  assert.match(components, /min-height:\s*var\(--vh-touch\)/);
});

test("mobile breakpoint exists", () => {
  assert.match(components, /@media \(min-width: 768px\)/);
});
