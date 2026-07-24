# Operators — revision notes

## What is an operator?

An operator takes one, two, or three operands and produces a value. `a + b`, `!ready`, and `condition ? yes : no` are all expressions — they evaluate to a value. Understanding **precedence** (which operators bind tighter) and **short-circuiting** (which sides get skipped) prevents most operator-related bugs.

When in doubt, use parentheses. They make grouping unambiguous and communicate intent clearly.

---

## Arithmetic and assignment

| Operator | Name        | Notes                                              |
|----------|-------------|----------------------------------------------------|
| `+`      | Add         | Also concatenates if either operand is a string    |
| `-`      | Subtract    | Coerces operands to numbers                        |
| `*`      | Multiply    |                                                    |
| `/`      | Divide      | Division by zero → `Infinity` (not an error)       |
| `%`      | Remainder   | Sign follows the LEFT operand, not mathematical modulo |
| `**`     | Exponent    | Right-associative: `2 ** 3 ** 2` = `2 ** 9`       |

**Compound assignment** (`+=`, `-=`, `*=`, `/=`, `%=`, `**=`) updates a binding. `??=` assigns only when the binding is `null` or `undefined`.

**Increment/Decrement:**
- **Prefix** `++x`: changes THEN returns the new value.
- **Postfix** `x++`: returns the current value THEN changes.
- Keep them on their own line — embedding in larger expressions is confusing.

---

## Equality and ordering

**Always use strict equality (`===`, `!==`)** — they compare value AND type with no coercion.

Loose equality (`==`) converts types using complex rules. The one accepted exception:
```js
value == null // true for both null AND undefined — a known shorthand
```

**NaN special rules:**
- `NaN !== NaN` — NaN is the only value not equal to itself.
- Use `Number.isNaN(value)` to test for NaN.
- `Object.is(NaN, NaN)` is `true` (unlike `===`).
- `Object.is(0, -0)` is `false` (unlike `===`).

Ordering operators (`<`, `>`, `<=`, `>=`) work on numbers and strings (strings use Unicode order).

---

## Logical operators and short-circuiting

`&&` and `||` return one of their **operands** — not necessarily `true` or `false`.

| Operator | Returns                                         | Short-circuits when |
|----------|-------------------------------------------------|---------------------|
| `&&`     | First falsy operand, or the last operand        | Left is falsy       |
| `\|\|`   | First truthy operand, or the last operand       | Left is truthy      |
| `!`      | Boolean negation of the operand's truthiness    | Always evaluates    |

`!!value` converts any value to boolean; `Boolean(value)` is often more readable.

---

## Ternary, nullish coalescing, and optional chaining

**Ternary:** `condition ? valueIfTrue : valueIfFalse`
- Best for choosing between two VALUES inline.
- Prefer `if/else` for side effects, multiple statements, or more than two branches.

**Nullish coalescing (`??`):**
- `left ?? fallback` — uses `fallback` only when `left` is `null` or `undefined`.
- Unlike `||`, it preserves valid falsy values: `0`, `""`, `false`.
- `??=` assigns a default only to a nullish binding.
- Must parenthesise when mixing with `&&` or `||`.

| Want the fallback for…         | Use  |
|-------------------------------|------|
| null and undefined only        | `??` |
| null, undefined, 0, "", false  | `\|\|`|

**Optional chaining (`?.`):**
- `obj?.prop`, `obj?.[key]`, `method?.()` — safely return `undefined` if the left side is nullish.
- Combine with `??` for a clean access + fallback pattern: `obj?.deep?.value ?? "default"`.
- Do NOT use `?.` to silence errors on values that *must* exist — absent required values should throw.

---

## Unary operators

| Operator | Effect                                                          |
|----------|-----------------------------------------------------------------|
| `typeof` | Returns a string naming the type (see data-types notes)        |
| `!`      | Boolean negation                                                |
| `+`      | Converts operand to a number                                    |
| `-`      | Converts operand to a number then negates                       |
| `delete` | Removes a property from an object (use sparingly — can de-optimise V8) |
| `void`   | Evaluates an expression and returns `undefined`                 |
| `++`/`--`| Increment / decrement (prefix vs postfix affects return value)  |

---

## Bitwise operators

Operate on 32-bit signed integer representations of Number values.

| Operator | Name              | Common use                        |
|----------|-------------------|-----------------------------------|
| `&`      | AND               | Test / clear a flag               |
| `\|`     | OR                | Set a flag                        |
| `^`      | XOR               | Toggle a flag                     |
| `~`      | NOT               | Bitwise complement; `~n = -(n+1)` |
| `<<`     | Left shift        | Multiply by power of 2            |
| `>>`     | Signed right shift| Divide by power of 2 (keeps sign) |
| `>>>`    | Unsigned right shift| Always fills with 0s on the left|

Values are **truncated to 32 bits** before the operation. Avoid using bitwise tricks for ordinary arithmetic — they are limited to 32 bits and obscure intent.

BigInt supports most bitwise operators without 32-bit truncation, but cannot be mixed with regular Number.

---

## Debugging checklist

- Is `+` concatenating a string when you expected numeric addition?
- Should a missing-value default preserve `0` or `false`? → Use `??`, not `||`.
- Is a loose `==` comparison hiding a type problem? → Switch to `===`.
- Does `?.` chain really allow absence here, or is absence actually a bug?
- Would parentheses or a named intermediate variable make this condition clearer?
- Is `++`/`--` buried in a larger expression causing confusion?
