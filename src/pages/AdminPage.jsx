import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { db } from "../db/db";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const AdminPage = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Navbar />
      <div className="max-w-4xl mx-auto pt-24 px-4">
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] bg-clip-text text-transparent">
          Admin Dashboard - Add New Event
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-[#1e1e1e] p-6 rounded-lg shadow-xl border border-gray-800"
        >
          {error && (
            <div className="bg-red-900/50 border border-red-500 text-red-200 px-4 py-3 rounded">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-900/50 border border-green-500 text-green-200 px-4 py-3 rounded">
              {success}
            </div>
          )}

          {[
            { name: "title", label: "Event Title", type: "text" },
            { name: "date", label: "Event Date", type: "date" },
            { name: "category", label: "Category", type: "text" },
            { name: "description", label: "Description", type: "textarea" },
            { name: "location", label: "Location", type: "text" },
            { name: "image", label: "Image ID", type: "text" },
            { name: "id", label: "Event ID", type: "text" },
            { name: "link", label: "Event Link", type: "url" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-[#2d2d2d] text-gray-200 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f46e5] focus:border-transparent"
                  rows="4"
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-[#2d2d2d] text-gray-200 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f46e5] focus:border-transparent"
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] text-white py-3 px-6 rounded-md font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Adding Event..." : "Add Event"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
