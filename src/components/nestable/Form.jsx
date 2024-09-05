import React from "react";
import { storyblokEditable } from "@storyblok/react";

export default function Form({ blok }) {
  return (
    <div className="max-w-3xl w-full mx-auto my-20">
      {/* Titel ovanför formuläret */}
      <h2 className="text-3xl font-bold text-center mb-8">
        Kontakta oss nedan
      </h2>

      {/* Formulär */}
      <form
        {...storyblokEditable(blok)}
        className="p-8 bg-white rounded-lg shadow-md"
      >
        {/* Namn-fält */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Namn
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ditt namn"
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Email-fält */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Din email"
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Meddelande-fält */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 font-bold mb-2"
          >
            Meddelande
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Skriv ditt meddelande här..."
            className="w-full p-3 border border-gray-300 rounded"
            rows="4"
            required
          />
        </div>

        {/* Enkel knapp för att skicka */}
        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-3 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Skicka
          </button>
        </div>
      </form>
    </div>
  );
}
