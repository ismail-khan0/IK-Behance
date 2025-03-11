import React, { useState } from 'react';
import SocialAuthButtons from './SocialAuthButtons';

export default function Conversation() {
  const allComments = [
    { name: 'Fibo Studio', comment: 'Thanks @SB. Sourav', date: 'Feb 23, 2025' },
    { name: 'SB. Sourav', comment: 'Great work', date: 'Feb 23, 2025' },
    { name: 'Fibo Studio', comment: 'Thanks @Oluwatemitope John', date: 'Feb 22, 2025' },
    { name: 'Oluwatemitope John', comment: 'Great work', date: 'Feb 22, 2025' },
    { name: 'Fibo Studio', comment: 'Thanks @Byzed Ahmed', date: 'Feb 15, 2025' },
    { name: 'Byzed Ahmed', comment: 'Great work', date: 'Feb 15, 2025' },
    { name: 'Fibo Studio', comment: 'Thanks @Radhika Sharma', date: 'Feb 12, 2025' },
    { name: 'Radhika Sharma', comment: 'Amazing work', date: 'Feb 11, 2025' },
    { name: 'Fibo Studio', comment: 'Thanks @Web CanvasX', date: 'Feb 10, 2025' },
    { name: 'Web CanvasX', comment: 'Amazing one', date: 'Feb 9, 2025' },
    { name: 'John Doe', comment: 'Excellent job!', date: 'Feb 8, 2025' },
    { name: 'Jane Smith', comment: 'Very impressive work.', date: 'Feb 7, 2025' }
  ];

  const [visibleComments, setVisibleComments] = useState(5);

  const showMoreComments = () => {
    setVisibleComments((prev) => Math.min(prev + 5, allComments.length));
  };

  return (
    <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-md">
     <SocialAuthButtons/>
     <hr/>
      <div className="mt-6">
        {allComments.slice(0, visibleComments).map((comment, index) => (
          <div key={index} className="border-b py-3 flex gap-3 items-start">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
            <div>
              <p className="font-semibold text-sm">{comment.name} <span className="text-gray-500 text-xs">· {comment.date}</span></p>
              <p className="text-gray-600 text-sm">{comment.comment}</p>
            </div>
          </div>
        ))}
        {visibleComments < allComments.length && (
          <button className="text-blue-600 mt-4" onClick={showMoreComments}>See More Comments ↓</button>
        )}
      </div>
    </div>
  );
}
