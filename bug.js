In React Router Dom v6, a common issue arises when using nested routes with parameters.  For example, consider this setup:

```javascript
<Routes>
  <Route path="/users/:userId" element={<User />} >
    <Route path="profile" element={<UserProfile />} />
  </Route>
</Routes>
```

If you navigate to `/users/123/profile`, everything works fine. However, navigating directly to `/users/123` might cause problems. The `User` component will render, but `userId` will not be correctly passed. The nested `Route` in `UserProfile` only matches if `/users/:userId/profile` is used.

The problem stems from the fact that the parent route's parameter is not automatically passed down to nested routes.  The nested route `/profile` doesn't inherently know about `:userId`.

Another less obvious issue happens with the use of `useParams` hook.  Incorrect usage can lead to unexpected behavior, especially within nested routes.