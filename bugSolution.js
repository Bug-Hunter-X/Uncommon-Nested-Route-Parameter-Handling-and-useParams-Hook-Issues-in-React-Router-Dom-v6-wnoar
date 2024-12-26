The solution involves using the `useParams` hook correctly within each component and understanding how to access parameters from parent routes. We'll avoid directly relying on implicit parameter inheritance.

```javascript
// bugSolution.js
import { Routes, Route, useParams, useLocation } from 'react-router-dom';

function User() {
  const { userId } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const additionalParam = queryParams.get('additionalParam'); //Example of accessing query parameters

  return (
    <div>
      <h1>User {userId}</h1>
      {additionalParam && <p>Additional Param: {additionalParam}</p>}
      <Routes>
        <Route path="profile" element={<UserProfile userId={userId} />} />
      </Routes>
    </div>
  );
}

function UserProfile({ userId }) {
  return (
    <div>
      <h1>User Profile {userId}</h1>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/users/:userId" element={<User />} />
    </Routes>
  );
}

export default App;
```

This revised code explicitly passes the `userId` prop to `UserProfile`, ensuring data is correctly inherited.  Using `useLocation` enables access to query parameters.
Now, both direct navigation to `/users/123` and `/users/123/profile` will work correctly.