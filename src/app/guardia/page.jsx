"use client";
import { useState } from "react";
import Image from "next/image";
import "./style.css";

export default function Page() {
  const [studentInfo, setStudentInfo] = useState({
    student: null,
    error: null,
  });
  const [studentId, setStudentId] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/alumno/${studentId}`
      );
      if (!response.ok) {
        throw new Error("No se pudo encontrar al estudiante");
      }
      const data = await response.json();
      setStudentInfo({ student: data, error: null });
    } catch (error) {
      setStudentInfo({
        student: null,
        error: error.message || "Error al buscar al estudiante",
      });
    }
  };
  return (
    <div className="container">
      <label>ID del alumno:</label>
      <input
        className="w-52 border-s bg-gray-500"
        type="number"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      {studentInfo.error && <p>{studentInfo.error}</p>}
      {studentInfo.student && (
        <div className="card">
          <div className="profileimage">
            <Image
              className="pfp"
              src={studentInfo.student.imageUrl}
              alt=""
              height={300}
              width={300}
            />
          </div>
          <div className="Name">
            <p>{studentInfo.student.name}</p>
          </div>
          <div className="infobar">
            <b>No.Control: </b> <span>{studentInfo.student.id}</span>
          </div>
        </div>
      )}
    </div>
  );
}
