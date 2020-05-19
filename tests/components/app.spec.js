// import React from "react";
// import { expect } from 'chai';
// import { shallow } from "./enzyme";

// import App from "../../client/App";

// describe("App component", () => {
//   it("renders without crashing", () => {
//     const wrapper = shallow(<App />);

//     // Expect the wrapper object to be defined
//     expect(wrapper.exists()).toBe(true);
//   });
// });

import React from "react";
import { expect } from "chai";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import App from "../../client/App";

describe("React components", () => {
  describe("App", () => {
    // Before every `it` spec, we instantiate a new `App` react component.
    // `Article` comes from the client/components/Article.js file.
    // This component will receive some data in its `fullArticle` prop.
    // We store this component in a testable wrapper, `appWrapper`.

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
