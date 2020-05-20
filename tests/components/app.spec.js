import React from "react";
import { expect } from "chai";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import App from "../../client/App";

describe("React components", () => {
  describe("App", () => {

    let appWrapper;
    beforeEach("Create <App /> wrapper", () => {
      // creates the testable React component
      appWrapper = shallow(<App />);
    });

    it("includes the app's header as an h1", () => {
      expect(appWrapper.find("h1").text().trim()).to.be.equal(
        "Construction Materials Tracker"
      );
    });
  });
});
