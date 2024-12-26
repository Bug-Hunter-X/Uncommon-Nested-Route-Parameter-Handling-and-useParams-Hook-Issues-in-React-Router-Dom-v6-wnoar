# Uncommon Nested Route Parameter Handling and useParams Hook Issues in React Router Dom v6

This repository demonstrates a common yet subtle bug in React Router Dom v6 related to parameter passing in nested routes and the use of the `useParams` hook.  The bug showcases scenarios where nested routes fail to correctly inherit parameters from parent routes, leading to unexpected behavior and potentially missing data.

The solution provided addresses this by clearly outlining the correct way to access and utilize route parameters in nested route structures, avoiding common pitfalls of parameter inheritance and incorrect hook usage.

## Bug Description

When working with nested routes and parameters in React Router Dom v6, you might encounter issues where the parameter values are not passed down correctly.  A less obvious issue involves the misuse of the `useParams` hook, which can also lead to incorrect or missing parameter data.

## Solution

The solution involves using the `useParams` hook correctly within each component and understanding that nested routes do not automatically inherit parent route parameters. The provided code utilizes the `useLocation` and `useParams` hooks effectively to resolve these issues and ensures that parameters are correctly accessed and passed down the component tree.