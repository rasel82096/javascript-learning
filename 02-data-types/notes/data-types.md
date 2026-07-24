# Data types — revision notes

## The two categories

JavaScript values are either **primitives** or **objects**.

| Category  | Types                                                              | Key property                             |
|-----------|--------------------------------------------------------------------|------------------------------------------|
| Primitive | `undefined`, `null`, `boolean`, `number`, `string`, `symbol`, `bigint` | Immutable; compared by **value**    |
| Object    | Everything else: `{}`, `[]`, functions, `Date`, `Map`, `Set`…     | Mutable; compared by **reference**       |

Two separately created objects with identical contents are **not** equal (`===`), because `===` asks "are these the same object in memory?", not "do they look the same?".

---

## Number

`number` represents integers and floating-point values using IEEE 754 double-precision. It also holds three special values: `NaN`, `Infinity`, and `-Infinity`.

**Floating-point precision:** `0.1 + 0.2 !== 0.3`. This is not a JavaScript bug — it affects every IEEE 754 language. For money, store amounts in the smallest currency unit (e.g. cents) as integers, or use a decimal library.

**Safe integers:** `Number.MAX_SAFE_INTEGER` is `9,007,199,254,740,991`. Beyond this, integer arithmetic silently loses precision. Use `BigInt` for larger values.

**NaN gotchas:**
- `NaN` is the only value not equal to itself: `NaN === NaN` is `false`.
- Use `Number.isNaN(value)` — not global `isNaN()`, which coerces its argument first.
- `typeof NaN` returns `"number"` — confusing, but true.

---

## String

Strings are immutable Unicode sequences. Methods return new strings; the original is never changed.

- Three literal forms: single quotes, double quotes, template literals (backticks).
- Template literals support `${ }` interpolation and multi-line text.
- `.length` counts **UTF-16 code units**, not visible characters. Emoji often use 2 units.
- Use `Array.from(str).length` when you need the user-perceived character count.

---

## Boolean and truthiness

Only eight values are **falsy**: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.

Everything else is **truthy** — including `[]`, `{}`, and the string `"false"`.

When checking for a value's existence, beware that `0` and `""` are falsy but may be valid data. Use explicit checks (`!== undefined`) instead of truthy/falsy when those values matter.

---

## `undefined` vs `null`

| Value       | Meaning                                  | Set by       |
|-------------|------------------------------------------|--------------|
| `undefined` | Not yet assigned; absent property/return | JavaScript   |
| `null`      | Intentionally no value / cleared         | The programmer |

- `typeof null` returns `"object"` — this is a **historical bug**. Always test null with `=== null`.
- Default parameters activate for `undefined` but NOT for `null`.
- `value == null` is the one accepted use of loose equality: it catches both `null` and `undefined`.

---

## Symbol

Every `Symbol()` call returns a **unique** primitive, regardless of its description label. Useful for:
- **Collision-free object keys** — symbol keys are hidden from `Object.keys()`, `for...in`, and `JSON.stringify`.
- **Language protocols** — well-known symbols like `Symbol.iterator` customise built-in behaviours.

`Symbol.for(key)` retrieves a shared symbol from a global registry, enabling cross-module sharing.

Symbols cannot be implicitly converted to strings. Use `String(sym)` or `sym.description`.

---

## BigInt

`BigInt` stores arbitrarily large integers. Write literals with an `n` suffix (`1n`, `9007199254740993n`).

- Cannot be mixed with regular `number` in arithmetic — convert explicitly.
- Has no fractional part (division truncates toward zero).
- `JSON.stringify` throws by default for BigInt values — add a custom `replacer` if needed.
- `Math` methods do not accept BigInt.

---

## Objects and references

All non-primitive values are held by **reference**. Assigning an object to a new variable gives both variables the same object — not a copy.

- **Shallow copy:** `{ ...obj }` or `[...arr]` — copies one level deep; nested objects remain shared.
- **Deep copy:** `structuredClone(obj)` — copies all levels, but cannot handle functions, Symbols, or `undefined` values in properties.

Use `===` to test whether two references point to the **same object** in memory.

---

## typeof quick reference

| Value            | typeof result | Notes                         |
|------------------|---------------|-------------------------------|
| `42`             | `"number"`    |                               |
| `"text"`         | `"string"`    |                               |
| `true`           | `"boolean"`   |                               |
| `undefined`      | `"undefined"` |                               |
| `null`           | `"object"`    | ⚠️ Historical bug             |
| `Symbol()`       | `"symbol"`    |                               |
| `1n`             | `"bigint"`    |                               |
| `{}`             | `"object"`    |                               |
| `[]`             | `"object"`    | Use `Array.isArray()` instead |
| `function() {}`  | `"function"`  |                               |

`typeof undeclaredName` is uniquely safe — it returns `"undefined"` instead of throwing.

---

## Type conversion quick reference

| From      | To Number    | To String      | To Boolean  |
|-----------|--------------|----------------|-------------|
| `"42"`    | `42`         | —              | `true`      |
| `""`      | `0`          | —              | `false`     |
| `null`    | `0`          | `"null"`       | `false`     |
| `undefined` | `NaN`      | `"undefined"`  | `false`     |
| `true`    | `1`          | `"true"`       | —           |
| `false`   | `0`          | `"false"`      | —           |

Always convert explicitly with `Number()`, `String()`, or `Boolean()`. Implicit coercion — especially `+` with mixed types — is a common source of bugs.
