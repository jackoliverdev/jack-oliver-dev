import React from 'react';

const Mockups = ({ title, items }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="space-y-12">
        {items.map((item, index) => {
          const MockupComponent = item.component;
          return (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
              <div className="mt-6 border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                <MockupComponent />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Mockups; 