import React from "react";
import "./student.css";
function Student({ data }) {
  return (
    <div className="Student">
      {data.length > 0 ? (
        data.map((student) => {
          return (
            <div
              key={student.id}
              className="card custom-card"
              style={{ width: "18rem", marginBottom: "20px" }}
            >
              <div className="card-body">
                <h5 className="card-title">{student.fullName}</h5>
                <p className="card-text">
                  <b>Email:</b>
                  {student.email} <br />
                  <b>Roll:</b>
                  {student.roll} <br />
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-center">Loading Data</p>
      )}
    </div>
  );
}

export default Student;
