"use strict";

/*
  ── Exercise 2 — Mini checkout ───────────────────────────────────────────────
  Model a simple shopping cart calculation using the right keyword for each variable.

  Rules:
  - `itemName`, `unitPrice`, `discountPercent` never change → use const
  - `quantity` starts at 2 but gets updated before checkout → use let
  - `applyDiscount` must throw a RangeError for any discount outside 0–100

  Bonus: What happens if you call applyDiscount with -5 or 150? Test it.
*/

const itemName = "Notebook";
const unitPrice = 120;
let quantity = 2;
const discountPercent = 10;

function applyDiscount(amount, percent) {
  // Guard clause: reject nonsensical discount values before any calculation
  if (percent < 0 || percent > 100) {
    throw new RangeError(`Discount must be between 0 and 100. Received: ${percent}`);
  }
  return amount * (1 - percent / 100);
}

quantity += 1; // customer added one more item to the cart

const subtotal = unitPrice * quantity;           // 120 × 3 = 360
const total = applyDiscount(subtotal, discountPercent); // 360 × 0.90 = 324

console.log({ itemName, quantity, subtotal, total });

/*
  Reflection questions (think through before reading the answers):

  1. Which variables MUST be `const`, and why?
     → `itemName`, `unitPrice`, `discountPercent` — their values never change.
        Using `const` makes that intention explicit and prevents accidental reassignment.

  2. Would `const quantity = 2` allow `quantity += 1`?
     → No. `+= 1` is reassignment, and `const` forbids that. Use `let`.

  3. Where could a block-scoped `let` inside `applyDiscount` improve readability?
     → e.g. `let discountedAmount = amount * (1 - percent / 100); return discountedAmount;`
        Naming the intermediate result makes the logic easier to follow.
*/
