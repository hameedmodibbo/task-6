import React from 'react';

// Posts component that renders a list of posts
// Props: posts (array of objects with title and content)
const Posts = ({ posts }) => {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Latest News</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300 ease-in-out border-t-4 border-blue-600">
            <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
            <p className="text-gray-600 leading-relaxed">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;