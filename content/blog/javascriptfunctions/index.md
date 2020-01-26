---
title: 'javascript: functions'
date: '2020-01-13'
description: 'In this blog I will write about arrow and Functions in js.'
---

**Functions** in javascript are an important block of scope in the language. They are fundamental to create reausable code and declare private pieces of code. Javascript functions are also objects, they can be assigned properties and methods, and also if they become a property from an object the **this** becomes the context of the function.

There are two types of functions:

- Arrow or flat functions.
- functions declared with **Function** keyword.

## Properties both type of functions (arrow, function) share:

Important functions characteristics are **scope**, **hosting**, **this** etc.

**Scope**

An important point to note is that anything that it is declared inside functions becomes private within the function, so nothing can be accessed outside the function. This is useful because you know that declaring variables or any pieace of code belongs to the function only.

```js
function privateFunc() {
  var a = 'this is private'; // highlight-line

  // This is also private
  function inner() {} // highlight-line
}

console.log(a); // this will be undefined
console.log(inner()); // this will be undefined
```

Function declarations are small useful pieces of code. These are defined with the keyword **function**, name of function after it and parameters inside parenthesis, like below.

```javascript
function myFunction(params) {
  // code goes here
}
```

**Hoisting**

Hoisting is when function declarations with the function keyword are defined and run before the code where the functions exists runs.

For example this:

```js
foo();

function foo() {}
```

Is the same as:

```js
function foo() {}

foo();
```

However, function expressions are not hoisted,
this will cause an error:

```js
// undefined
foo(); // highlight-line
const foo = function() {};
```

**this keyword**

The this keyword in function is attached to the scope of the object it was declared.

```js
const myObj = {
  zips: ['1222', '0202'],
  Zips: function() {
    this.zips.forEach(function(zip) {
      console.log(`the zip is ${zip}`);
    });
  },
};

myObj.Zips();
// Will print
// the zip is 1222
// the zip is 0202
```

However, Someone would think that the this keyword bound to the function, however in some cases this is not true as sometimes **this** gets lets when declaring inside a function.

```js
const person = {
  name: 'john',
  Name: function() {
    return this.name; // highlight-line
  },
};

let name = person.Name;

console.log(name()); // undefined as this is not bind to the object
```

One way to fix this is to use the bind property from the function,
this way the function will use the **this** from the given object passed to bind.

```js
const person = {
  name: 'john',
  Name: function() {
    return this.name; // highlight-line
  },
};

let name = person.Name.bind(person); // highlight-line

console.log(name()); // undefined as this is not bind to the object
```

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.Name = this.Name.bind(this); // highlight-line
  }

  Name() {
    return this.name;
  }
}

const p = new Person('john', 32);

const name = p.Name;

console.log(name()); // undefined as this is not bind to the object
```

[Click for more information about bind function property](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)

**_When dealing with this and functions we should be aware._**

However, with the new type of functions named **arrow functions** the this keyword is bound to the global scope from where it is attached and it does not have this keyword by itself.

Let's check an example:

This will print the name result from the name property

```js
const worksobj = {
  name: 'frank',
  Name: function() {
    return this.name;
  },
};

let res = worksobj.Name();
console.log(res); // frank
```

But if we use **arrow** functions it will be undefined as arrow functions will grab this from global, which it is undefined.

```js
const worksobj = {
  name: 'frank',
  Name: () => {
    return this.name;
  },
};

let res = worksobj.Name();
console.log(res); // undefined
```

It is important to be aware that arrow functions does not have **this** bound like function keywords do.

**Closures**

Functions can be declared inside functions and they can have access to the variables outside of their scope where they were defined.

This is a closure:

```javascript
function closure() {
  let count = 0;
  // anonymous function
  return function() {
    count = count + 1; // highlight-line
    return count;
  };
}

let count = closure();
console.log(count()); // 1 <=
console.log(count()); // 2 <=
```

The above example shows the power of closures, as it has access to the scope from the outer function.

## Arrow functions

Something to note here is that **arrow functions were never meant to replace function declarations**, as arrow functions have different charactersitics compared to functions defined with **function** keyword.

Arrow functions are a short way to declare functions since the syntax is short, however they lack important properties that functions declarations have, for instance: **this** keyword and lexical scope. **Parameters** go inside the parenthesis separated by a comma.

Here is the syntax:

```javascript
const myFunction = (a, b) => '';
```

These are the same function:

```js
function Foo() {
  return '';
}
```

```js
const foo = () => '';
```

**Return** is implicit when declaring arrow functions, this means the return keyword should not be declared when writing functions like the above.

However, when arrow functions grow these could be declared as below:
brakets after the arrow and return keyword should be declared.

```js
const myFunction = () => {
  return '';
};
```
