import React from 'react'

export default function Conversation() {
  return (
    <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-lg font-semibold">Sign up to join the conversation</h2>
    <p className="text-gray-600 mb-4">
      Add your feedback for Md. Shamsul Alam’s project by signing in or signing up.
    </p>
    <button className="bg-blue-600 text-white px-4 py-2 rounded">Sign Up With Email</button>
    <div className="mt-6">
      {[
        { name: "Fibo Studio", comment: "Thanks @SB. Sourav" },
        { name: "SB. Sourav", comment: "Great work" },
        { name: "Fibo Studio", comment: "Thanks @Oluwatemitope John" },
        { name: "Oluwatemitope John", comment: "Great work" },
        { name: "Fibo Studio", comment: "Thanks @Byzaed Ahmed" },
        { name: "Byzaed Ahmed", comment: "Great work" },
        { name: "Fibo Studio", comment: "Thanks @Radhika Sharma" },
        { name: "Radhika Sharma", comment: "Amazing work" },
        { name: "Fibo Studio", comment: "Thanks @Web CanvasX" },
        { name: "Web CanvasX", comment: "Amazing one" },
      ].map((comment, index) => (
        <div key={index} className="border-b py-2">
          <p className="font-semibold">{comment.name}</p>
          <p className="text-gray-600">{comment.comment}</p>
        </div>
      ))}
      <button className="text-blue-600 mt-4">See More Comments ↓</button>
    </div>
  </div>
  )
}
