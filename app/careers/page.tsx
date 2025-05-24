import React from 'react';

export default function CareersPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Join Our Team</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Open Positions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Marketing Position */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Marketing Specialist</h3>
            <p className="text-gray-700 mb-4">We are looking for a creative Marketing Specialist to develop and implement marketing strategies.</p>
            <p className="text-sm text-gray-600">Location: Remote | Department: Marketing</p>
          </div>

          {/* Development Position - Level 1 */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Junior Frontend Developer</h3>
            <p className="text-gray-700 mb-4">Join our development team to build user interfaces with modern web technologies.</p>
            <p className="text-sm text-gray-600">Location: Remote | Department: Development | Level: Junior</p>
          </div>

          {/* Development Position - Level 2 */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Senior Backend Developer</h3>
            <p className="text-gray-700 mb-4">We seek an experienced Backend Developer to design and implement server-side logic and APIs.</p>
            <p className="text-sm text-gray-600">Location: Remote | Department: Development | Level: Senior</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Application Form</h2>
        <form className="bg-gray-100 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" name="name" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" name="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="position" className="block text-sm font-medium text-gray-700">Applying For Position</label>
            <select id="position" name="position" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
              <option value="">Select a position</option>
              <option value="marketing-specialist">Marketing Specialist</option>
              <option value="junior-frontend-developer">Junior Frontend Developer</option>
              <option value="senior-backend-developer">Senior Backend Developer</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Years of Experience</label>
              <input type="number" name="experience" id="experience" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            <div>
              <label htmlFor="noticePeriod" className="block text-sm font-medium text-gray-700">Notice Period</label>
              <input type="text" name="noticePeriod" id="noticePeriod" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="cv" className="block text-sm font-medium text-gray-700">Upload CV</label>
            <input type="file" name="cv" id="cv" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
          </div>

          <div className="mb-6">
            <label htmlFor="motivationLetter" className="block text-sm font-medium text-gray-700">Upload Motivation Letter</label>
            <input type="file" name="motivationLetter" id="motivationLetter" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
          </div>

          <div className="flex justify-end">
            <button type="submit" className="btn btn-primary">Submit Application</button>
          </div>
        </form>
      </section>
    </div>
  );
} 