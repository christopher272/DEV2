import React from 'react';
import BountyList from './BountyList';
import BountyForm from './BountyForm';

function App() {
  return (
    <div>
      <h1>Bounty Hunter Dashboard</h1>
      <BountyForm />
      <BountyList />
    </div>
  );
}

export default App;