import test from "node:test";
import assert from "node:assert";
import { formatDate } from "./formatDate.ts";

test("formatDate formats a standard date string correctly", () => {
  const result = formatDate("2026-01-28");
  assert.strictEqual(result, "jan 28, 2026");
});

test("formatDate handles single digit days", () => {
  const result = formatDate("2026-01-05");
  assert.strictEqual(result, "jan 5, 2026");
});

test("formatDate handles different years", () => {
  const result = formatDate("2023-12-25");
  assert.strictEqual(result, "dec 25, 2023");
});

test("formatDate handles leap years correctly (Feb 29)", () => {
  const result = formatDate("2024-02-29");
  assert.strictEqual(result, "feb 29, 2024");
});

test("formatDate returns 'invalid date' for invalid date strings", () => {
  const result = formatDate("not-a-date");
  assert.strictEqual(result, "invalid date");
});

test("formatDate handles empty string by returning 'invalid date'", () => {
  const result = formatDate("");
  assert.strictEqual(result, "invalid date");
});

test("formatDate output is always lowercase", () => {
  const result = formatDate("2026-05-20");
  assert.strictEqual(result, result.toLowerCase());
  // Double check it contains a month which would be capitalized by toLocaleDateString
  assert.ok(result.includes("may"));
});
