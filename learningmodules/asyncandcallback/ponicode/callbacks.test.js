const rewire = require("rewire");
const callbacks = rewire("../callbacks");
const getPosts = callbacks.__get__("getPosts");
// @ponicode
describe("getPosts", () => {
  test("0", () => {
    let result = getPosts();
    expect(result).toMatchSnapshot();
  });
});
