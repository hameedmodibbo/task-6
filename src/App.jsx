import React from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import Posts from './components/Posts';
import LifecycleDemo from './components/LifecycleDemo';

function App() {
  // Array of Real Madrid-related posts
  const posts = [
    {
      title: 'Real Madrid Wins Champions League',
      content: 'Real Madrid secured their 15th Champions League title in a thrilling final against Manchester City, showcasing incredible teamwork and skill.'
    },
    {
      title: 'New Signing: Jude Bellingham',
      content: 'Jude Bellingham joins Real Madrid from Borussia Dortmund in a record-breaking transfer, bringing fresh energy to the squad.'
    },
    {
      title: 'Santiago Bernabéu Renovation',
      content: 'The iconic Santiago Bernabéu stadium is undergoing major renovations to modernize the facilities and enhance the fan experience.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <Header
          title="Fulani Madridista"
          subtitle="Labarai na Real Madrid a Fulfulde, Pidgin da harsunan gida"
        />
        <Counter />
        <Posts posts={posts} />
        <LifecycleDemo />
      </div>
    </div>
  );
}

export default App;
