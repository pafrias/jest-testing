Important steps

- install the packages ->

```
npm i -d jest @babel/core @babel/preset-env
```

This is to transpile ES6 syntax to code readable by Jest. Jest requires no instructions to use babel; it will automatically do so if it finds a babel.config.js file (also, maybe babel.rc, need to check).

Main test function ->
```
test('I am a test description', () => {
  expect(expression).toBe(result);
});

test('Object values to equal, but not to be the same', () => {
  expect([1,2,3]).not.toBe([1,2,3]); //
  expect([1,2,3]).toEqual([1,2,3]);
});

describe('many tests, probably related', () => {
  test('test number 1', () => {
    expect({a: 1, b: 2, c: 3}).toMatchObject({a: 1});
  })
  test('test number 2', () => {
    expect({a: 1}).not.toMatchObject({{a: 1, b: 2, c: 3}});
  })
})
```

There are also several test functions that match value types, mathematical operators, and RegEx.

- *toBeNull()*
- *toBeDefined()*
- *toBeUndefined()*
- *toBeTruthy()*
- *toBeFalsy()*
- *toBeGreaterThan()*
- *toBeLessThan()*
- *toBeGreaterThanOrEqual()*
- *toBeLessThanOrEqual()*
- *toBeCloseto()*
- *toMatch()*
- *toMatchObject()*
- *toBeInstanceOf()*
- [etc, etc](https://jestjs.io/docs/en/expect#tomatchobjectobject)

testing async

The testing function
```

```