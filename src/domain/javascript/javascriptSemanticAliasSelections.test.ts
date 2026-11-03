import { expect, it } from "vitest";

import { SemanticAliasSelections } from "./javascriptSemanticAliasSelections.js";

it("orders alias alternatives by Unicode code point", () => {
  const selections = new SemanticAliasSelections(() => {});
  const path = selections.normalize({}, [
    { alternatives: ["\u{1F600}", "\u{FFFD}"] },
  ]);
  expect(path).toEqual([{ alternatives: ["\u{FFFD}", "\u{1F600}"] }]);
});
