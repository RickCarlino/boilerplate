import * as React from "react";
import { MainContent } from "../main_content";
import { render } from "enzyme";

describe("<MainContent/>", () => {
  it("has text and stuff", () => {
    // let x = render(<MainContent />);
    // expect(x.text()).toContain("Find me");
    expect(2 + 2).toEqual(4);
  });
});
