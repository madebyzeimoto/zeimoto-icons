// ==========================================================
// Tests :: Panel Icons
// ==========================================================
//
// Exercises public JavaScript behavior without a live project.
//
// ==========================================================

import { test } from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import vm from "node:vm"

test("required icons register usable SVG fragments", () => {
  let registration
  vm.runInNewContext(readFileSync(new URL("../index.js", import.meta.url), "utf8"), {
    panel: { plugin: (name, config) => { registration = { name, config } } },
  })
  assert.equal(registration.name, "zeimoto/icons")
  for (const name of ["main", "visibility", "identity", "manifest", "entries", "socials", "media", "faqs"]) {
    assert.match(registration.config.icons[name], /<path[^>]+d="[^"]+"/)
    assert.doesNotMatch(registration.config.icons[name], /<script|onload=/i)
  }
})
