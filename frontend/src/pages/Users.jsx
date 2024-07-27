import React from 'react';
import './Users.css'; // Import the CSS file

const users = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    contactNo: "123-456-7890",
    parentName: "Jane Doe",
    dob: "1990-01-01",
    location: ["New York", "USA"],
    schoolName: "Example School",
    mentor: "Mr. Smith",
    points: 100,
  },
  {
    name: "Alice Smith",
    email: "alice.smith@example.com",
    contactNo: "987-654-3210",
    parentName: "Bob Smith",
    dob: "1992-02-02",
    location: ["Los Angeles", "USA"],
    schoolName: "Another School",
    mentor: "Ms. Johnson",
    points: 150,
  },
  {
    name: "Michael Brown",
    email: "michael.brown@example.com",
    contactNo: "555-123-4567",
    parentName: "Sarah Brown",
    dob: "1985-05-10",
    location: ["Chicago", "USA"],
    schoolName: "High School A",
    mentor: "Dr. Miller",
    points: 200,
  },
  {
    name: "Emily Davis",
    email: "emily.davis@example.com",
    contactNo: "444-987-6543",
    parentName: "David Davis",
    dob: "1998-11-20",
    location: ["Houston", "USA"],
    schoolName: "High School B",
    mentor: "Mrs. White",
    points: 180,
  },
  {
    name: "William Johnson",
    email: "william.johnson@example.com",
    contactNo: "333-456-7890",
    parentName: "Karen Johnson",
    dob: "1995-07-30",
    location: ["Phoenix", "USA"],
    schoolName: "High School C",
    mentor: "Mr. Green",
    points: 220,
  },
  {
    name: "Sophia Martinez",
    email: "sophia.martinez@example.com",
    contactNo: "222-654-3210",
    parentName: "Carlos Martinez",
    dob: "2000-03-15",
    location: ["Philadelphia", "USA"],
    schoolName: "High School D",
    mentor: "Ms. Blue",
    points: 140,
  },
  {
    name: "James Lee",
    email: "james.lee@example.com",
    contactNo: "111-789-6543",
    parentName: "Linda Lee",
    dob: "1988-09-05",
    location: ["San Antonio", "USA"],
    schoolName: "High School E",
    mentor: "Dr. Black",
    points: 170,
  },
  {
    name: "Olivia Wilson",
    email: "olivia.wilson@example.com",
    contactNo: "666-123-9876",
    parentName: "Thomas Wilson",
    dob: "1993-12-25",
    location: ["San Diego", "USA"],
    schoolName: "High School F",
    mentor: "Mr. Yellow",
    points: 190,
  }
];

const User = () => {
  return (
    <div className="user-details">
      {users.map((user, index) => (
        <div className="user-card" key={index}>
          <h2>{user.name}</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Contact No:</strong> {user.contactNo}</p>
          <p><strong>Parent Name:</strong> {user.parentName}</p>
          <p><strong>Date of Birth:</strong> {user.dob}</p>
          <p><strong>Location:</strong> {user.location.join(', ')}</p>
          <p><strong>School Name:</strong> {user.schoolName}</p>
          <p><strong>Mentor:</strong> {user.mentor}</p>
          <div className="points">
            <span>{user.points}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default User;