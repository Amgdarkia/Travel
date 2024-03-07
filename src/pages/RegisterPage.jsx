import React, { useState } from 'react';
import RegisterTourist from '../Component/RegisterTourist ';
import RegisterGuide from '../Component/RegisterGuide';

export default function RegisterPage() {
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <div>
      <h2>Please select your role</h2>
      <div className="role-selection">
        <div 
          className={`role-option ${selectedRole === 'tourist' ? 'selected' : ''}`} 
          onClick={() => setSelectedRole('tourist')}
        >
          Tourist
        </div>
        <div 
          className={`role-option ${selectedRole === 'guide' ? 'selected' : ''}`} 
          onClick={() => setSelectedRole('guide')}
        >
          Guide
        </div>
        {/* Add more role options if needed */}
      </div>

      {/* Conditional rendering of components based on selected role */}
      {selectedRole === 'tourist' && <RegisterTourist />}
      {selectedRole === 'guide' && <RegisterGuide />}
    </div>
  );
}
