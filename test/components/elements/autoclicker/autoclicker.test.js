import { html, fixture, expect } from "@open-wc/testing";
import { AutoClicker } from "../../../../src/components/elements/autoclicker/autoclicker";
import { AUTOCLICKER } from "../../../../src/components/constants/autoclicker";

describe("AutoClicker component", () => {
  it("initializes with default properties", async () => {
    const component = await fixture(
      html`<custom-autoclicker></custom-autoclicker>`
    );
    expect(component.autoClickerCost).to.equal(50);
    expect(component.autoMergeLevel).to.equal(1);
    expect(component.currentPoints).to.equal(0);
  });

  it("button should be disabled if currentPoints are less than autoClickerCost", async () => {
    const component = await fixture(
      html`<custom-autoclicker .currentPoints=${0}></custom-autoclicker>`
    );
    const button = component.shadowRoot.querySelector("button");
    expect(button.disabled).to.be.true;
  });
});
