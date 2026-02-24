
### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:-
getElementById: select only a unique id form HTML Element.
getElementsByClassName: Let's get multiple HTMLCollection elements with classname.
querySelector: The querySelector can be used to capture the 1st element of a CSS Selector.
querySelectorAll: querySelectorAll allows you to capture multiple elements of a CSS selector at once.

### 2. How do you create and insert a new element into the DOM?
Answer:-  To create a new element in the DOM, you need to use {document.createElement();}. New elements can be inserted using append/appendChild.

### 3. What is Event Bubbling? And how does it work?
Answer:- Event Bubbling means that events can be passed from the lower element to the upper parent.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Answer:-  Handling events of a child element by using an event listener on the parent element is called Event Delegation.
✔ Takes up less memory.
✔ It work Dynamic
✔ Cleaner code
✔ Performance better 

for this reason it is use full

### 5. What is the difference between preventDefault() and stopPropagation() methods?
Answer:-
stopPropagation() Stops passing the event to the parent.
preventDefault() Disables default browser behavior
