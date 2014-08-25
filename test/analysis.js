var Array2D = require('./../Array2D');
var assert = require('assert');

describe('#symmetrical', function() {
  it('can detect symmetry over the y-axis', function() {
    var result = Array2D.symmetrical([
      [1,2,3,3,2,1],
      [4,5,6,6,5,4],
      [9,9,1,1,9,9],
      [4,6,4,4,6,4],
      [5,5,5,5,5,5]
    ], Array2D.AXES.Y);

    var expected = true;

    assert.strictEqual(result, expected);
  });

  it('can detect symmetry over the x-axis', function() {
    var result = Array2D.symmetrical([
      [1,1,5,6,0,4],
      [1,2,0,7,0,3],
      [2,3,5,8,0,2],
      [2,3,5,8,0,2],
      [1,2,0,7,0,3],
      [1,1,5,6,0,4]
    ], Array2D.AXES.X);

    var expected = true;

    assert.strictEqual(result, expected);
  });
});

describe('#hsymmetrical', function() {
  it('can detect horizontal symmetry', function() {
    var result = Array2D.hsymmetrical([
      [1,2,3,3,2,1],
      [4,5,6,6,5,4],
      [9,9,1,1,9,9],
      [4,6,4,4,6,4],
      [5,5,5,5,5,5]
    ]);

    var expected = true;

    assert.strictEqual(result, expected);
  });

  it('can detect horizontal non-symmetry', function() {
    var result = Array2D.hsymmetrical([
      [1,2,3,3,2,1],
      [4,5,6,6,5,4],
      [9,9,1,1,9,9],
      [4,6,4,4,7,4],
      [5,5,5,5,5,5]
    ]);

    var expected = false;

    assert.strictEqual(result, expected);
  });
});

describe('#vsymmetrical', function() {
  it('can detect vertical symmetry', function() {
    var result = Array2D.vsymmetrical([
      [1,1,5,6,0,4],
      [1,2,0,7,0,3],
      [2,3,5,8,0,2],
      [2,3,5,8,0,2],
      [1,2,0,7,0,3],
      [1,1,5,6,0,4]
    ]);

    var expected = true;

    assert.strictEqual(result, expected);
  });

  it('can detect vertical non-symmetry', function() {
    var result = Array2D.vsymmetrical([
      [1,1,5,6,0,4],
      [1,2,0,7,0,3],
      [2,3,5,8,0,2],
      [2,3,5,8,0,2],
      [1,2,0,7,1,3],
      [1,1,5,6,0,4]
    ]);

    var expected = false;

    assert.strictEqual(result, expected);
  });
});

describe('#includes', function() {
  it('can detect if a grid includes another I', function() {
    var result = Array2D.includes([
      [1,2,3,4,5],
      [6,7,8,9,0],
      [1,2,3,4,5],
      [6,7,8,9,0],
      [1,2,3,4,5]
    ],[
      [7,8],
      [2,3]
    ]);

    var expected = true;

    assert.strictEqual(result, expected);
  });

  it('can detect if a grid includes another II (ragged)', function() {
    var result = Array2D.includes([
      [1,2,3,4,5],
      [6,7,8,9,0],
      [1,2,3,4,5],
      [6,7,8,9,0],
      [1,2,3,4,5]
    ],[
      [7,8,9,0],
      [2,3]
    ]);

    var expected = true;

    assert.strictEqual(result, expected);
  });

  it('can detect if a grid includes another III', function() {
    var result = Array2D.includes([
      [1,2,3,4,5],
      [6,7,8,9,0],
      [1,2,3,4,5],
      [6,7,8,9,0],
      [1,2,3,4,5]
    ],[
      [9,0],
      [4,5]
    ]);

    var expected = true;

    assert.strictEqual(result, expected);
  });

  it('can detect if a grid includes another IV', function() {
    var result = Array2D.includes([
      [1,2,3,4,5],
      [6,7,8,9,0],
      [1,2,3,4,5],
      [6,7,8,9,0],
      [1,2,3,4,5]
    ],[
      [7,8,9,0],
      [2,3,4,5],
      [7,8,9,0],
      [2,3,4,5]
    ]);

    var expected = true;

    assert.strictEqual(result, expected);
  });

  it('can detect if a grid includes another V (ragged)', function() {
    var result = Array2D.includes([
      [1,2,3,4,5],
      [6,7,8,9,0],
      [1,2,3,4,5],
      [6,7,8,9,0],
      [1,2,3,4,5]
    ],[
      [7,8,9,0],
      [2,3,4,5],
      [7,8,9,0],
      [2,3,4]
    ]);

    var expected = true;

    assert.strictEqual(result, expected);
  });

  it('can detect if a grid includes another VI (ragged)', function() {
    var result = Array2D.includes([
      [1,2,3,4,5],
      [6,7,8,9],
      [1,2,3],
      [6,7],
      [1]
    ],[
      [7,8,9],
      [2],
      [7]
    ]);

    var expected = true;

    assert.strictEqual(result, expected);
  });

  it('can detect if a grid does not include another I', function() {
    var result = Array2D.includes([
      [1,2,3,4,5],
      [6,7,8,9,0],
      [1,2,3,4,5],
      [6,7,8,9,0],
      [1,2,3,4,5]
    ],[
      [9,0,1],
      [4,5,1],
      [1,1,1],
    ]);

    var expected = false;

    assert.strictEqual(result, expected);
  });

  it('can detect if a grid does not include another II', function() {
    var result = Array2D.includes([
      [1,2,3,4,5],
      [6,7,8,9,0],
      [1,2,3,4,5],
      [6,7,8,9,0],
      [1,2,3,4,5]
    ],[
      [7,9],
      [2,3]
    ]);

    var expected = false;

    assert.strictEqual(result, expected);
  });
});
