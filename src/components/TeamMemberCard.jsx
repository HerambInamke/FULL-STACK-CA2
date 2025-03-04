import React from 'react';

function TeamMemberCard() {
  const teamMembers = [
    { name: 'John Doe', role: 'Software Engineer'},
    { name: 'Deepaskhi', role: 'Techinal Mentor' },
    { name: 'Manu', role: 'Campus Manager' },
  ];

  return (
    <div>
      {teamMembers.map((member, index) => (
        <div key={index} className="card">
          <h2>{member.name}</h2>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
}

export default TeamMemberCard;
