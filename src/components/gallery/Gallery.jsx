import React from 'react';

// Dummy data for the gallery
const galleryItems = [
  {
    src: 'https://tse3.mm.bing.net/th?id=OIP.if2z3t9JBIpvWVZDYAKcFwHaCv&pid=Api&P=0&h=180',
    alt: 'Sports Day',
    caption: 'Students participating in various sports events.',
    textColor: 'text-red-500'
  },
  {
    src: 'https://i.pinimg.com/originals/63/cf/e7/63cfe7624cb899bd7115b2c73c4f794b.jpg',
    alt: 'Science Exhibition',
    caption: 'Students presenting their science projects.',
    textColor: 'text-blue-500'
  },
  {
    src: 'https://tse1.mm.bing.net/th?id=OIP.8RoKHKs-VPL8SZ8fVxQ8fAHaE8&pid=Api&P=0&h=180',
    alt: 'Cultural Fest',
    caption: 'Students performing in the cultural fest.',
    textColor: 'text-green-500'
  },
  {
    src: 'https://tse4.mm.bing.net/th?id=OIP.JRpAGPUzu3mz2x1b1uugKQHaET&pid=Api&P=0&h=180',
    alt: 'Classroom',
    caption: 'A glimpse of our interactive classrooms.',
    textColor: 'text-purple-500'
  },
  {
    src:"https://tse3.mm.bing.net/th?id=OIP.ixmC4zU5ElPH2BKySs-2ogHaE5&pid=Api&P=0&h=180",
    alt: 'Library',
    caption: 'Students reading and studying in the school library.',
    textColor: 'text-yellow-500'
  }
];

const Gallery = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 text-center">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryItems.map((item, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img src={item.src} alt={item.alt} className="w-full h-48 object-cover"/>
            <div className={`p-4 ${item.textColor}`}>
              <p className="text-lg">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
