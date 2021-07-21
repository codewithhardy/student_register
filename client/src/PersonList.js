import React, { useState, useEffect } from "react";
// import axios from "axios";
import Student from "./Student";

function PersonList() {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    // Fetching data
    fetch("http://localhost:5000/app/signup")
      .then((res) => res.json())
      .then((json) => setStudent(json));
  }, []);

  console.log(student);

  return (
    <>
      <h1>Student List</h1>
      <div>
        <Student data={student} />
      </div>
    </>
  );
}

export default PersonList;
