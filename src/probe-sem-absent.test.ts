import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
test("probe-sem.ts is absent", () => { assert.equal(existsSync("src/probe-sem.ts"), false); });
