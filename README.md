# ng2-hack-nite feedback

## Overall

Overall, ng2 looks interesting.
It's hard from a quick hack to figure out strengths and weaknesses, but the learning curve at the moment is very high, especially compared with angular 1, even for people who know TypeScript and/or ES6.

## Inadequate Starter

The 5-minute starter is inadequate.
It gives a taste, but the next steps are really hard.

## Properties

Figuring out how to add simple properties is difficult but manageable.
You have to remember to add the `properties` property to the `@Component`, and the directives to the `directives` property of the `@View` and then you can use it.
None of that is obvious.

## Events

Figuring out how to create and propagate custom events was pretty difficult.
In a simple case of two sibling components hosted in one parent, propagating a change between the two components takes a lot of steps.
There are also no good examples for custom event propagation anywhere.

Figuring out where to put the `$event` was tricky.
One idea that might help is to support function name syntax for handlers.
For example:

```
<input (input)="inputChanged" />
```

If the value of the `(input)` is not a function, evaluate it the same way you do today.
If it is a function, assume it's a method and call it, passing the `$event` as the first argument.

## Getting Stuck Often

Along the way, I got stuck on a lot of little issues, including:

* custom events have to be lowercase
* it's really easy to forget to add the directive to the `directives` property
* figuring out where the (event) syntax should actually be used is confusing - on the host? on the element in the child component? everywhere?
* better docs are needed for the $event object - it took a lot of trial and error to figure out how to extract the value for the input element (without model).

## Refactoring and Modularity

These difficulties make it really hard to refactor a big component into smaller components and really voids the advantage of modularity.
Modularity is only really useful if you can restructure them easily, which is not the case at the moment.
