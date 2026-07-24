# Arrays — revision notes

## Arrays are objects

An array is a special kind of object with integer keys (indices) and a `.length` property. Because arrays are objects, they are held by **reference** — assigning an array to a new variable gives you a second label pointing to the same array, not a copy.

```js
const a = [1, 2, 3];
const b = a;
b.push(4);
console.log(a); // [1, 2, 3, 4] — same array!
```

Use `Array.isArray(value)` to check for arrays — `typeof []` returns `"object"`, which is not useful for this purpose.

---

## Copy strategies

| Strategy             | Depth   | Handles functions? | Handles Date/Map/Set? | When to use                  |
|----------------------|---------|--------------------|----------------------|-------------------------------|
| Spread `[...arr]`    | Shallow | n/a (not deep)     | n/a (not deep)       | Most daily use                |
| `JSON.parse(stringify)` | Deep for JSON-safe data | ✗ object properties dropped; array slots become `null` | ✗ Date→string | Simple data with no special types |
| `structuredClone()`  | Deep    | ✗ throws           | ✓                    | Complex data, modern runtimes |

**Shallow copy** means nested objects/arrays are still shared. **Deep copy** means everything is independent.

```js
const nested = [[1, 2], [3, 4]];
const shallow = [...nested];
shallow[0].push(99); // nested[0] is also affected!

const deep = structuredClone(nested);
deep[0].push(99);    // nested[0] is NOT affected ✓
```

---

## Non-mutating methods — master these deeply

These methods return a new array (or a single value) and do not change the original array themselves. A callback can still mutate an object that it receives, so keep callbacks pure when you want an immutable pipeline.

### map(callback)
Transform every element. Returns a new array of the **same length**.
```js
[1, 2, 3].map(n => n * 2) // [2, 4, 6]
```

### filter(callback)
Keep only elements that pass the test. Returns a new array that is **≤ original length**.
```js
[1, 2, 3, 4].filter(n => n % 2 === 0) // [2, 4]
```

### reduce(callback, initialValue)
Accumulate all elements into a single value. Always provide an `initialValue`.
```js
[1, 2, 3, 4].reduce((acc, n) => acc + n, 0) // 10
```
Common uses: sum, group by property, build a lookup map, count occurrences.

### slice(start, end)
Extract a sub-array. `end` is exclusive. Negative indices work from the end.
```js
[10, 20, 30, 40].slice(1, 3) // [20, 30]
[10, 20, 30, 40].slice(-2)   // [30, 40]
```

### concat(...arrays)
Merge arrays. Spread `[...a, ...b]` is the modern equivalent.

### includes(value)
`true`/`false` existence check. It uses SameValueZero equality: this behaves like strict equality for most values, but `NaN` is considered equal to `NaN`. It still won't find objects by content—only the same object reference.

### find(callback) / findIndex(callback)
- `find` → returns the **first matching element** (or `undefined`)
- `findIndex` → returns the **index** of the first match (or `-1`)

### some(callback) / every(callback)
- `some` → `true` if **at least one** element passes (short-circuits on first match)
- `every` → `true` if **all** elements pass (short-circuits on first failure)

### flat(depth) / flatMap(callback)
- `flat(1)` → flatten one level of nesting
- `flatMap` → `map` then `flat(1)` in a single pass
- Returning `[]` from a `flatMap` callback **filters** the element out

---

## Mutating methods — use deliberately ⚠️

These change the original array in place. Avoid in React state; use non-mutating alternatives.

| Method           | What it does                                  | Non-mutating alternative   |
|------------------|-----------------------------------------------|----------------------------|
| `push(...items)` | Add to end                                    | `[...arr, item]`           |
| `pop()`          | Remove from end                               | `arr.slice(0, -1)`         |
| `unshift()`      | Add to start                                  | `[item, ...arr]`           |
| `shift()`        | Remove from start                             | `arr.slice(1)`             |
| `splice(i, n)`   | Remove/insert/replace at any position         | `slice` + spread           |
| `sort(fn)`       | Sort in place (returns same array)            | `[...arr].sort(fn)` or `toSorted()` (ES2023) |
| `fill(val)`      | Fill all or part with a value                 | `Array.from({ length: n }, () => val)`; use `() => ({})` for distinct objects |
| `reverse()`      | Reverse in place                              | `[...arr].reverse()` or `toReversed()` (ES2023) |

**sort() trap:** default sort converts elements to strings. Always provide a comparator for numbers:
```js
[10, 1, 21].sort()            // [1, 10, 21] ← WRONG (string order)
[10, 1, 21].sort((a, b) => a - b) // [1, 10, 21] ← correct
```

---

## Array destructuring

Unpack values from an array into named variables:
```js
const [first, , third] = ["a", "b", "c"]; // skip with comma
const [x, y, z = 10] = [1, 2];            // default if position is absent
const [head, ...tail] = [1, 2, 3, 4];     // rest pattern
```

Swap without a temp variable:
```js
[a, b] = [b, a];
```

---

## Useful creation patterns

```js
// Fixed-length array filled with a value
new Array(5).fill(0)           // [0, 0, 0, 0, 0]

// Skeleton loaders (each must be a unique object)
new Array(5).fill(null).map(() => ({ loading: true }))

// From an iterable or array-like
Array.from("hello")            // ["h", "e", "l", "l", "o"]
Array.from({ length: 3 }, (_, i) => i ** 2) // [0, 1, 4]

// Deduplicate using Set
[...new Set([1, 2, 2, 3, 3])] // [1, 2, 3]
```

---

## Debugging checklist

- Are you mutating when you meant to copy? → Use spread or `structuredClone`.
- Are you using `sort()` without a comparator on numbers? → Numbers will sort as strings.
- Did you omit `initialValue` from `reduce()`? → Can cause TypeError on empty arrays.
- Are you using `||` to initialise accumulator keys? → `acc[key] = acc[key] || 0` is correct.
- Did `filter()` return an empty array when you expected elements? → Check truthiness of your predicate.
- Are you returning a value from every branch in your `reduce` callback?
