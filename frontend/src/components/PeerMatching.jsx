import React, { useState } from 'react';

const PeerMatching = () => {
  // Initial students array with images, emails, and skills
  const initialStudents = [
    {
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      image: 'https://via.placeholder.com/150',
      skills: ['JavaScript', 'React', 'Node.js'],
    },
    {
      name: 'Jane Smith',
      email: 'janesmith@gmail.com',
      image: 'https://via.placeholder.com/150',
      skills: ['Python', 'Django', 'Data Science'],
    },
    {
      name: 'Robert Williams',
      email: 'robertw@gmail.com',
      image: 'https://via.placeholder.com/150',
      skills: ['Java', 'Spring Boot', 'Microservices'],
    },
    {
      name: 'Emily Johnson',
      email: 'emilyj@gmail.com',
      image: 'https://via.placeholder.com/150',
      skills: ['UI/UX Design', 'Figma', 'Sketch'],
    },
    {
      name: 'Michael Brown',
      email: 'michaelb@gmail.com',
      image: 'https://via.placeholder.com/150',
      skills: ['AWS', 'Docker', 'Kubernetes'],
    },
  ];

  // State to manage the students list, search term, and hover effect
  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState('');
  const [hoverIndex, setHoverIndex] = useState(null);

  // State for dynamic user addition
  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    skills: '',
    image: '',
  });

  // Filter students based on search term
  const filteredStudents = students.filter(student =>
    student.skills.some(skill =>
      skill.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Handle new student form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const skillsArray = newStudent.skills.split(',').map(skill => skill.trim()); // Convert skills string to array
    const newStudentData = {
      name: newStudent.name,
      email: newStudent.email,
      skills: skillsArray,
      image: newStudent.image || 'https://via.placeholder.com/150',
    };
    setStudents([...students, newStudentData]); // Add new student to the list
    setNewStudent({ name: '', email: '', skills: '', image: '' }); // Clear form fields
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    flexWrap: 'wrap',
    gap: '20px', // Allow more spacing between cards
  };

  const cardStyle = {
    backgroundColor: '#000', // Black card background
    color: '#fff',
    borderRadius: '10px',
    width: '250px', // Increased card size
    padding: '30px',
    margin: '10px',
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s', // Smooth transitions
    cursor: 'pointer',
    display: 'inline-block', // Inline block for horizontal flow
  };

  const hoverEffectStyle = {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transform: 'scale(1.05)', // Scale effect on hover
    border: '2px solid #f39c12', // Orange border on hover
  };

  const imageStyle = {
    width: '120px', // Increased image size
    height: '120px',
    borderRadius: '50%',
    marginBottom: '15px',
  };

  const nameStyle = {
    fontSize: '20px', // Increased font size
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const emailStyle = {
    fontSize: '16px',
    color: '#f39c12', // Orange email color
    marginBottom: '10px',
  };

  const skillsContainerStyle = {
    marginTop: '10px',
  };

  const skillStyle = {
    fontSize: '14px',
    color: '#fff',
    backgroundColor: '#f39c12',
    padding: '5px 10px',
    borderRadius: '5px',
    display: 'inline-block',
    margin: '5px',
  };

  const searchInputStyle = {
    width: '300px',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: '10px',
  };

  const formInputStyle = {
    width: '300px',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  const submitButtonStyle = {
    backgroundColor: '#f39c12',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <div>
      {/* Search Bar */}
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <input
          type="text"
          placeholder="Search by skill..."
          style={searchInputStyle}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Add New Student Form */}
      <div style={formStyle}>
        <h3>Add a New Student</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            style={formInputStyle}
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            style={formInputStyle}
            value={newStudent.email}
            onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Skills (comma-separated)"
            style={formInputStyle}
            value={newStudent.skills}
            onChange={(e) => setNewStudent({ ...newStudent, skills: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Image URL (optional)"
            style={formInputStyle}
            value={newStudent.image}
            onChange={(e) => setNewStudent({ ...newStudent, image: e.target.value })}
          />
          <button type="submit" style={submitButtonStyle}>Add Student</button>
        </form>
      </div>

      {/* Displaying Filtered Students */}
      <div style={containerStyle}>
        {filteredStudents.map((student, index) => (
          <div
            key={index}
            style={{
              ...cardStyle,
              ...(hoverIndex === index ? hoverEffectStyle : {}),
            }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <img src={student.image} alt={student.name} style={imageStyle} />
            <div style={nameStyle}>{student.name}</div>
            <div style={emailStyle}>{student.email}</div>
            <div style={skillsContainerStyle}>
              {student.skills.map((skill, skillIndex) => (
                <div key={skillIndex} style={skillStyle}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeerMatching;
