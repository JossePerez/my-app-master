import Image from "next/image";

import React from "react";

export default function Home() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Nuevo Horario</h1>
      <form className="max-w-md">
        <div className="mb-4">
          <label htmlFor="day" className="block text-sm font-medium text-white">
            Día:
          </label>
          <input
            type="text"
            id="day"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="startTime"
            className="block text-sm font-medium text-white"
          >
            Hora de inicio:
          </label>
          <input
            type="text"
            id="startTime"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="endTime"
            className="block text-sm font-medium text-white"
          >
            Hora de fin:
          </label>
          <input
            type="text"
            id="endTime"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-white"
          >
            Materia:
          </label>
          <select id="subject" className="mt-1 p-2 w-full border rounded-md">
            <option value="" disabled>
              Seleccione una materia
            </option>

            <option>hola</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
        >
          Agregar Horario
        </button>
      </form>
    </div>
  );
}
