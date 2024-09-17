# Chapter 1: JavaScript Fundamentals

This Chapter covers essential JavaScript concepts with a focus on variable declarations, datatypes, memory management, and more.

## Topics Covered

### 🔑 Let, Const, Var: Understanding Variable Declarations in JavaScript
- `let`: Block-scoped, can be updated but not redeclared.
- `const`: Block-scoped, cannot be updated or redeclared.
- `var`: Function-scoped, can be updated and redeclared (less recommended in modern JS).

### 🧩 Datatypes & ECMA Standards
- JavaScript supports various datatypes: `String`, `Number`, `Boolean`, `Object`, `Null`, `Undefined`, and `Symbol`.
- ECMAScript standards evolve continuously, improving the language’s features.

### 🔄 Type Conversion Confusion: JavaScript's Automatic Type Conversion (Coercion)
- JavaScript sometimes converts data types automatically, which can lead to unexpected results.
- Example: `'5' + 3` becomes `'53'` (string concatenation) while `'5' - 3` results in `2` (numeric operation).

### 🔢 String to Number Conversion
- `parseInt()`, `parseFloat()`, and `Number()` are common methods for converting strings to numbers.
- Example: `Number('42')` converts the string `'42'` to the number `42`.

### ⚖️ Comparison of Datatypes
- `==` vs `===`: `==` allows type coercion, while `===` checks for both value and type equality.
- Example: `5 == '5'` is `true`, but `5 === '5'` is `false`.

### 📚 Datatypes Summary
- **Primitive Datatypes**: `String`, `Number`, `Boolean`, `Null`, `Undefined`, `Symbol`, `BigInt`.
- **Non-Primitive Datatypes**: `Object`, `Array`, `Function`.

### 🧠 Stack and Heap Memory
- **Stack**: Memory used for static data such as primitive values.
- **Heap**: Memory used for dynamic data like objects.
- JavaScript uses the garbage collector to manage memory in the heap.
