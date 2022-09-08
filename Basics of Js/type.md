# Basic of Javascript
## Type Conversions

"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)

    1.The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and then we have "1" + 0, the same rule is applied.
    2.The subtraction - (like most math operations) only works with numbers, it converts an empty string "" to 0.
    3.The addition with a string appends the number 5 to the string.
    4.The subtraction always converts to numbers, so it makes " -9 " a number -9 (ignoring spaces around it).
    5.null becomes 0 after the numeric conversion.
    6.undefined becomes NaN after the numeric conversion.
    7.Space characters, are trimmed off string start and end when a string is converted to a number. Here the whole string consists of space characters, such as \t, \n and a “regular” space between them. So, similarly to an empty string, it becomes 0.

Comparisons
Strange result: null vs 0

    Let’s compare null with a zero:

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

    Mathematically, that’s strange. The last result states that "null is greater than or equal to zero", so in one of the comparisons above it must be true, but they are both false.

    The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

    On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.

Conditional branching: if, '?'

    Sometimes, we need to perform different actions based on different conditions.

    To do that, we can use the if statement and the conditional operator ?, that’s also called a “question mark” operator.

Multiple '?'

A sequence of question mark operators ? can return a value that depends on more than one condition.

For instance:

let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );

It may be difficult at first to grasp what's going on. But after a closer look, we can see that it's just an ordinary sequence of tests:

    The first question mark checks whether age < 3.
    If true -- it returns 'Hi, baby!'. Otherwise, it continues to the expression after the colon '":"', checking age < 18.
    If that's true -- it returns 'Hello!'. Otherwise, it continues to the expression after the next colon '":"', checking age < 100.
    If that's true -- it returns 'Greetings!'. Otherwise, it continues to the expression after the last colon '":"', returning 'What an unusual age!'.

Here's how this looks using if..else:

if (age < 3) {
  message = 'Hi, baby!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}

Logical Operators
OR "||" finds the first truthy value [#or-finds-the-first-truthy-value]

The logic described above is somewhat classical. Now, let's bring in the "extra" features of JavaScript.

The extended algorithm works as follows.

Given multiple OR'ed values:

result = value1 || value2 || value3;

The OR || operator does the following:

    Evaluates operands from left to right.
    For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
    If all operands have been evaluated (i.e. all were false), returns the last operand.

A value is returned in its original form, without the conversion.

In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.

For instance:

alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

This leads to some interesting usage compared to a "pure, classical, boolean-only OR".

    Getting the first truthy value from a list of variables or expressions.

    For instance, we have firstName, lastName and nickName variables, all optional (i.e. can be undefined or have falsy values).

    Let's use OR || to choose the one that has the data and show it (or "Anonymous" if nothing set):

    let firstName = "";
    let lastName = "";
    let nickName = "SuperCoder";

    *!*
    alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder
    */!*

    If all variables were falsy, "Anonymous" would show up.

    Short-circuit evaluation.

    Another feature of OR || operator is the so-called "short-circuit" evaluation.

    It means that || processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument.

    The importance of this feature becomes obvious if an operand isn't just a value, but an expression with a side effect, such as a variable assignment or a function call.

    In the example below, only the second message is printed:

    *!*true*/!* || alert("not printed");
    *!*false*/!* || alert("printed");

    In the first line, the OR || operator stops the evaluation immediately upon seeing true, so the alert isn't run.

    Sometimes, people use this feature to execute commands only if the condition on the left part is falsy.

AND "&&" finds the first falsy value

Given multiple AND'ed values:

result = value1 && value2 && value3;

The AND && operator does the following:

    Evaluates operands from left to right.
    For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
    If all operands have been evaluated (i.e. all were truthy), returns the last operand.

In other words, AND returns the first falsy value or the last value if none were found.

The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one.

Examples:

// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

We can also pass several values in a row. See how the first falsy one is returned:

alert( 1 && 2 && null && 3 ); // null

When all values are truthy, the last value is returned:

alert( 1 && 2 && 3 ); // 3, the last one

Precedence of AND && is higher than OR || The precedence of AND && operator is higher than OR ||.

So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).

    Don't replace if with || or &&" Sometimes, people use the AND && operator as a "shorter way to write if".

For instance:

let x = 1;

(x > 0) && alert( 'Greater than zero!' );

    The action in the right part of && would execute only if the evaluation reaches it. That is, only if (x > 0) is true.

So we basically have an analogue for:

let x = 1;

if (x > 0) alert( 'Greater than zero!' );

    Although, the variant with && appears shorter, if is more obvious and tends to be a little bit more readable. So we recommend using every construct for its purpose: use if if we want if and use && if we want AND.
