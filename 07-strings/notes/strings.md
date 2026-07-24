# Strings — revision notes

## Strings are primitives (but special)

A string is one of JavaScript's seven primitive types. Primitives are immutable and compared by value. What makes strings "special" is that they have a rich set of methods — thanks to **auto-boxing**: when you call a method on a string primitive, JavaScript temporarily wraps it in a `String` object, runs the method, and discards the wrapper. You never need to create `new String(...)` manually.

```js
"hello".toUpperCase() // works on a primitive ✓
typeof "hello"        // "string"
typeof new String("hello") // "object" ← avoid this
```

---

## Immutability

Every string method returns a **new string** — the original is never changed. If you need to "modify" a string, you reassign the variable to the new result.

```js
let greeting = "hello";
greeting.toUpperCase();   // returns "HELLO", but `greeting` is still "hello"
greeting = greeting.toUpperCase(); // now `greeting` is "HELLO"
```

---

## UTF-16 and Unicode awareness

JavaScript strings are sequences of **UTF-16 code units**. Most characters are one unit; emoji and many non-Latin scripts use **two units** (a surrogate pair).

| Operation         | Result for `"hello"` | Result for `"😀"` |
|-------------------|----------------------|-------------------|
| `.length`         | 5                    | 2 ← not 1!        |
| `str[0]`          | "h"                  | broken surrogate   |
| `Array.from(str)` | 5 items              | 1 item ✓          |
| `for...of`        | 5 iterations         | 1 iteration ✓     |

**Key rule:** use `Array.from(str)` or `for...of` when you need to work with visible characters that might include emoji.

---

## Method quick reference

### Searching (non-mutating)

| Method | Returns | Notes |
|--------|---------|-------|
| `includes(str, pos?)` | `boolean` | Case-sensitive |
| `startsWith(str, pos?)` | `boolean` | Can start at a given position |
| `endsWith(str, len?)` | `boolean` | Can limit how many chars to check |
| `indexOf(str, pos?)` | index or `-1` | First occurrence |
| `lastIndexOf(str, pos?)` | index or `-1` | Last occurrence |
| `match(regex)` | array or `null` | With `/g` flag returns all matches |
| `matchAll(regex)` | iterator | Must use `/g`; includes capture groups |

### Extracting (non-mutating)

| Method | Notes |
|--------|-------|
| `slice(start, end?)` | **Recommended.** Accepts negatives. `end` is exclusive. |
| `substring(start, end?)` | No negatives; swaps args if start > end |
| `split(sep, limit?)` | Returns an array; spread `[...str]` for emoji-safe splitting |

**Recommendation:** prefer `slice` over `substring` — it behaves more consistently.

### Transforming (non-mutating — always returns new string)

| Method | Notes |
|--------|-------|
| `toUpperCase()` / `toLowerCase()` | Case conversion |
| `trim()` / `trimStart()` / `trimEnd()` | Remove whitespace |
| `replace(search, rep)` | Replaces **first** match only |
| `replaceAll(search, rep)` | Replaces **all** matches |
| `padStart(len, char?)` | Pad from the left to reach `len` |
| `padEnd(len, char?)` | Pad from the right to reach `len` |
| `repeat(n)` | Repeat the string `n` times |
| `concat(...strs)` | Merge strings (prefer template literals) |
| `at(index)` | Access by index; accepts negatives |

---

## Template literals

Backtick strings support embedded expressions, multi-line text, and tagged templates.

```js
const name = "Rasel";
const msg  = `Hello, ${name}! 2 + 3 = ${2 + 3}`;

const multiLine = `
  Line 1
  Line 2
`.trim();

// String.raw — ignore escape sequences (useful for file paths, regex)
console.log(String.raw`C:\Users\name`); // "C:\Users\name"
```

---

## Common patterns

| Task | Pattern |
|------|---------|
| Case-insensitive search | `str.toLowerCase().includes(term.toLowerCase())` |
| Trim + normalise input | `input.trim().toLowerCase()` |
| Reverse a string | `str.split("").reverse().join("")` |
| Extract domain from email | `email.split("@")[1]` |
| Pad number with zeros | `String(n).padStart(6, "0")` |
| Replace all occurrences | `str.replaceAll(old, new)` or `str.replace(/pat/g, new)` |
| Slugify a title | `title.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")` |
| Count occurrences | `(str.match(/pattern/g) ?? []).length` |
| Deduplicate & sort tags | `[...new Set(arr.flat())].sort()` |
| Format HH:MM:SS | `[h,m,s].map(n => String(n).padStart(2,"0")).join(":")` |

---

## replace() with a function callback

The second argument to `replace()` can be a function. It receives:
- `match` — the full matched string
- `...captureGroups` — any `()` groups in the regex
- `offset` — position in the string
- `fullString` — the original string

```js
// Template engine: replace {{key}} with data[key]
template.replace(/\{\{(\w+)\}\}/g, (_, key) => data[key] ?? "");
```

---

## Debugging checklist

- Did you expect a method to change the original string? → It never does; reassign or use the return value.
- Is `.length` giving an unexpected number? → Might contain emoji (2 code units each). Use `Array.from(str).length`.
- Is `replace()` only changing the first occurrence? → Use `replaceAll()` or add the `/g` flag to the regex.
- Is a comparison failing unexpectedly? → Both sides may have different cases — use `.toLowerCase()`.
- Is `split("")` splitting emoji? → Use `[...str]` or `Array.from(str)` instead.
- Did `match()` return `null` instead of an array? → The pattern didn't match; use `?.` or `?? []` to guard.
