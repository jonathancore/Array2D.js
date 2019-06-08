let Array2D = require("./../Array2D");
let assert = require("assert");

describe("#find", function() {
  it("can return coordinates for matching cells", function() {
    const result = Array2D.find(
      [
        [1, 0, 1, 1, 0],
        [0, 0, 0, 0, 1],
        [0, 0, 1, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 1, 1, 1, 1]
      ],
      function(cell) {
        return cell === 1;
      }
    );

    const expected = [
      [0, 0],
      [0, 2],
      [0, 3],
      [1, 4],
      [2, 2],
      [3, 1],
      [4, 1],
      [4, 2],
      [4, 3],
      [4, 4]
    ];

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });
});

describe("#contiguous", function() {
  it("can return coordinates of contiguous cell groups", function() {
    const result = Array2D.contiguous(
      [
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1],
        [1, 1, 0, 0, 1]
      ],
      function(cell) {
        return cell === 1;
      }
    );

    const expected = [
      [[0, 1]],
      [[1, 2], [2, 2], [2, 3]],
      [[3, 4], [4, 4]],
      [[4, 0], [4, 1]]
    ];

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });
});

describe("#touching", function() {
  it("can return coordinates for touching cell groups", function() {
    const result = Array2D.touching(
      [
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1],
        [1, 1, 0, 0, 1]
      ],
      function(cell) {
        return cell === 1;
      }
    );

    const expected = [
      [[0, 1], [1, 2], [2, 2], [2, 3], [3, 4], [4, 4]],
      [[4, 0], [4, 1]]
    ];

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });
});

describe("#surrounds", function() {
  it("can return coordinates of surrounding cells I", function() {
    const result = Array2D.surrounds(
      [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 0],
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 0],
        [1, 2, 3, 4, 5]
      ],
      2,
      0
    );

    const expected = [[1, 0], [1, 1], [2, 1], [3, 0], [3, 1]];

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });

  it("can return coordinates of surrounding cells II", function() {
    const result = Array2D.surrounds(
      [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 0],
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 0],
        [1, 2, 3, 4, 5]
      ],
      4,
      4
    );

    const expected = [[3, 3], [3, 4], [4, 3]];

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });

  it("can return coordinates of surrounding cells, including out-of-bounds", function() {
    const result = Array2D.surrounds(
      [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 0],
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 0],
        [1, 2, 3, 4, 5]
      ],
      2,
      0,
      true
    );

    const expected = [
      [1, -1],
      [1, 0],
      [1, 1],
      [2, -1],
      [2, 1],
      [3, -1],
      [3, 0],
      [3, 1]
    ];

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });
});
