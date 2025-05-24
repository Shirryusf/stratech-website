import React from 'react';

export default function CareersPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Join Our Team</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Open Positions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Marketing Position */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Digital Marketing Specialist</h3>
            <p className="text-gray-700 mb-4">We are seeking a skilled Digital Marketing Specialist to develop and execute comprehensive digital marketing campaigns.</p>
            <p className="text-sm text-gray-700">Location: Remote | Department: Marketing | Focus: SEO, SEM, Social Media</p>
          </div>

          {/* Development Position - Level 1 */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Frontend Developer (Mid-Level)</h3>
            <p className="text-gray-700 mb-4">Join our team to build responsive and user-friendly interfaces using React/Next.js and Tailwind CSS.</p>
            <p className="text-sm text-gray-700">Location: Remote | Department: Development | Technologies: React, Next.js, TypeScript, Tailwind CSS</p>
          </div>

          {/* Development Position - Level 2 */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Backend Developer (Senior)</h3>
            <p className="text-gray-700 mb-4">We are looking for a Senior Backend Developer to lead the design, development, and maintenance of our server-side applications and APIs.</p>
            <p className="text-sm text-gray-700">Location: Remote | Department: Development | Technologies: Node.js, Express, Databases (e.g., PostgreSQL, MongoDB)</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Application Form</h2>
        <form className="bg-gray-100 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900">Full Name</label>
              <input type="text" name="name" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email Address</label>
              <input type="email" name="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="position" className="block text-sm font-medium text-gray-900">Applying For Position</label>
            <select id="position" name="position" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
              <option value="">Select a position</option>
              <option value="digital-marketing-specialist">Digital Marketing Specialist</option>
              <option value="mid-level-frontend-developer">Frontend Developer (Mid-Level)</option>
              <option value="senior-backend-developer">Backend Developer (Senior)</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="cv" className="block text-sm font-medium text-gray-900">Upload CV</label>
            <input type="file" name="cv" id="cv" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
          </div>

          <div className="mb-6">
            <label htmlFor="motivationLetter" className="block text-sm font-medium text-gray-900">Upload Motivation Letter</label>
            <input type="file" name="motivationLetter" id="motivationLetter" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
          </div>

          <div className="flex justify-end">
            <button type="submit" className="btn btn-primary px-6 py-3">Submit Application</button>
          </div>
        </form>
      </section>
    </div>
  );
} 