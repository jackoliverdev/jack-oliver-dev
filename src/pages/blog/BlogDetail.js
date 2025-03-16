import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Blog posts data
const blogPosts = {
  'javascript-features': {
    id: 'javascript-features',
    title: 'Essential Modern JavaScript Features Every Developer Should Know',
    category: 'Development',
    date: 'June 15, 2023',
    readTime: '8 min read',
    coverImage: '/images/blog/javascript-features.jpg',
    excerpt: 'Exploring the most useful JavaScript features introduced in recent years and how they can improve your code.',
    author: {
      name: 'Jack Oliver',
      avatar: '/images/avatar.jpg',
      title: 'Full-Stack Developer'
    },
    tags: ['JavaScript', 'ES6+', 'Web Development', 'Coding Tips'],
    sections: [
      {
        title: 'Introduction',
        content: [
          'JavaScript has evolved significantly over the past decade, with new features being added regularly to make the language more powerful, expressive, and developer-friendly. As web development continues to grow in complexity, staying up-to-date with modern JavaScript features is essential for writing clean, efficient, and maintainable code.',
          'In this article, we\'ll explore some of the most useful JavaScript features that have been introduced in recent years, and how they can improve your development workflow and code quality.'
        ]
      },
      {
        title: 'Arrow Functions',
        content: [
          'Arrow functions were introduced in ES6 (ECMAScript 2015) and have quickly become one of the most widely used JavaScript features. They provide a more concise syntax for writing functions and automatically bind the current scope, eliminating many issues with the `this` keyword.',
          '```javascript\n// Traditional function\nfunction add(a, b) {\n  return a + b;\n}\n\n// Arrow function\nconst add = (a, b) => a + b;\n```',
          'Arrow functions are particularly useful for callbacks and methods that require access to the surrounding context:',
          '```javascript\n// Traditional approach with lexical binding\nconst obj = {\n  data: [1, 2, 3],\n  processData: function() {\n    const self = this;\n    return this.data.map(function(num) {\n      return self.multiplier * num;\n    });\n  },\n  multiplier: 2\n};\n\n// Using arrow functions\nconst obj = {\n  data: [1, 2, 3],\n  processData: function() {\n    return this.data.map(num => this.multiplier * num);\n  },\n  multiplier: 2\n};\n```'
        ]
      },
      {
        title: 'Destructuring Assignment',
        content: [
          'Destructuring assignment is a syntax that allows you to extract values from arrays or properties from objects into distinct variables. This can make your code more readable and reduce duplication.',
          '```javascript\n// Object destructuring\nconst user = {\n  name: "John",\n  email: "john@example.com",\n  age: 30,\n  address: {\n    city: "New York",\n    country: "USA"\n  }\n};\n\nconst { name, email, address: { city } } = user;\nconsole.log(name, email, city); // "John" "john@example.com" "New York"\n\n// Array destructuring\nconst rgb = [255, 200, 100];\nconst [red, green, blue] = rgb;\nconsole.log(red, green, blue); // 255 200 100\n```',
          'Destructuring is particularly useful in function parameters, making it clearer what data a function expects:',
          '```javascript\n// Without destructuring\nfunction displayUser(user) {\n  console.log(`${user.name} (${user.age}) - ${user.email}`);\n}\n\n// With destructuring\nfunction displayUser({ name, age, email }) {\n  console.log(`${name} (${age}) - ${email}`);\n}\n```'
        ]
      },
      {
        title: 'Spread and Rest Operators',
        content: [
          'The spread (`...`) operator allows an iterable (like an array) to be expanded in places where zero or more arguments or elements are expected. This makes it easier to work with arrays and objects without modifying the originals.',
          '```javascript\n// Combining arrays\nconst arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]\n\n// Cloning and extending objects\nconst baseConfig = { apiUrl: "https://api.example.com", timeout: 5000 };\nconst devConfig = { ...baseConfig, environment: "development" };\n```',
          'The rest parameter syntax uses the same `...` notation but collects multiple elements and "condenses" them into a single array:',
          '```javascript\nfunction sum(...numbers) {\n  return numbers.reduce((total, num) => total + num, 0);\n}\n\nconsole.log(sum(1, 2, 3, 4, 5)); // 15\n```'
        ]
      },
      {
        title: 'Conclusion',
        content: [
          'The JavaScript features covered in this article represent just a fraction of the modern capabilities available in the language today. By incorporating these patterns into your code, you can write more concise, maintainable, and efficient applications.',
          'Remember that while these features are powerful, it\'s important to ensure browser compatibility when using them in production. Tools like Babel can help transpile modern JavaScript into code that runs in older browsers.',
          'Stay curious and keep exploring new features as JavaScript continues to evolve!'
        ]
      }
    ]
  },
  'ai-web-development': {
    id: 'ai-web-development',
    title: 'How AI is Transforming Web Development',
    category: 'AI',
    date: 'May 22, 2023',
    readTime: '10 min read',
    coverImage: '/images/blog/ai-web-dev.jpg',
    excerpt: 'From code generation to design assistance, artificial intelligence is revolutionizing how developers build websites and applications.',
    author: {
      name: 'Jack Oliver',
      avatar: '/images/avatar.jpg',
      title: 'Full-Stack Developer'
    },
    tags: ['AI', 'Web Development', 'Technology', 'Future Trends'],
    sections: [
      {
        title: 'Introduction',
        content: [
          'Artificial Intelligence (AI) has emerged as a transformative force across numerous industries, and web development is no exception. The integration of AI technologies into the web development workflow is reshaping how developers conceptualize, design, and implement digital experiences.',
          'In this article, we\'ll explore the various ways AI is changing web development, from automated code generation to intelligent design systems and sophisticated testing tools.'
        ]
      },
      {
        title: 'AI-Powered Code Generation',
        content: [
          'One of the most significant impacts of AI on web development is in the realm of code generation. Tools like GitHub Copilot, powered by OpenAI\'s Codex, can suggest entire functions or code blocks based on comments or partial implementations.',
          'These AI assistants understand context, can work across multiple files, and learn from your coding style to provide increasingly relevant suggestions over time. While they don\'t replace the need for human developers, they can significantly accelerate development speed and reduce boilerplate coding.',
          '```javascript\n// Example: Ask AI to generate a function to format currency\n// Comment: Function to format a number as USD currency\nfunction formatAsCurrency(number) {\n  return new Intl.NumberFormat(\'en-US\', {\n    style: \'currency\',\n    currency: \'USD\',\n    minimumFractionDigits: 2\n  }).format(number);\n}\n```',
          'The ability of AI to generate code from natural language descriptions is particularly powerful for prototyping and rapid development. Developers can focus more on architecture and problem-solving while delegating routine coding tasks to AI assistants.'
        ]
      },
      {
        title: 'AI in Web Design',
        content: [
          'AI is also revolutionizing the design aspect of web development. Tools like Midjourney and DALL-E can generate images and design elements based on text descriptions, while other AI systems can create entire wireframes or layouts from simple prompts.',
          'Design systems are becoming more intelligent, with AI suggesting color palettes, typography combinations, and layout adjustments that align with best practices and accessibility guidelines. Some tools can even analyze user behavior and suggest design optimizations to improve engagement and conversion rates.',
          'For example, AI can analyze heatmaps and user flow data to suggest repositioning key elements for better visibility, or automatically adjust contrast ratios to ensure WCAG compliance for accessibility.'
        ]
      },
      {
        title: 'Personalization and User Experience',
        content: [
          'AI enables a new level of personalization in web applications. By analyzing user behavior, preferences, and contextual data, AI can help create dynamic experiences tailored to individual users.',
          'From content recommendations to interface adjustments, AI-driven personalization can significantly enhance user engagement and satisfaction. For example, an e-commerce site might use AI to dynamically rearrange product categories based on a user\'s browsing history, or a news site might prioritize certain types of articles based on reading patterns.',
          'Machine learning models can continuously improve these personalization algorithms by learning from user interactions, creating a virtuous cycle of enhancement.'
        ]
      },
      {
        title: 'Testing and Quality Assurance',
        content: [
          'AI is transforming testing and quality assurance in web development through intelligent test generation, visual regression testing, and predictive analytics for potential issues.',
          'AI-powered testing tools can automatically generate test cases, identify edge cases that human testers might miss, and provide more comprehensive coverage with less manual effort. Visual testing tools can detect even subtle UI changes or inconsistencies across different browsers and devices.',
          'Furthermore, AI can analyze code changes to predict potential problems before they reach production, allowing developers to address issues earlier in the development cycle when they\'re less costly to fix.'
        ]
      },
      {
        title: 'Conclusion',
        content: [
          'The integration of AI into web development workflows represents not just an evolution, but a revolution in how digital experiences are created. From code generation and design to personalization and testing, AI tools are enabling developers to work more efficiently, creatively, and effectively.',
          'While these technologies won\'t replace human developers, they will likely redefine the role of web developers to focus more on high-level problem solving, creativity, and strategy, while delegating more routine tasks to AI systems.',
          'As AI continues to advance, we can expect even more profound changes in web development methodologies and capabilities. The developers who embrace these tools and adapt their workflows accordingly will be well-positioned to create more sophisticated, user-centered, and effective web experiences in the future.'
        ]
      }
    ]
  },
  'responsive-design-practices': {
    id: 'responsive-design-practices',
    title: 'Responsive Design Best Practices for 2023',
    category: 'Design',
    date: 'April 10, 2023',
    readTime: '7 min read',
    coverImage: '/images/blog/responsive-design.jpg',
    excerpt: 'Creating truly responsive experiences across all device types with modern CSS techniques and design strategies.',
    author: {
      name: 'Jack Oliver',
      avatar: '/images/avatar.jpg',
      title: 'Full-Stack Developer'
    },
    tags: ['Responsive Design', 'CSS', 'UX', 'Mobile First'],
    sections: [
      {
        title: 'Introduction',
        content: [
          'Responsive design has evolved significantly since Ethan Marcotte first coined the term in 2010. With the proliferation of devices of all shapes and sizes, creating truly responsive experiences is more important—and more complex—than ever before.',
          'In 2023, responsive design goes beyond simply adapting layouts to different screen sizes. It encompasses performance optimization, accessibility considerations, and providing consistent experiences across a vast array of devices and contexts.',
          'This article explores the latest best practices for responsive design, highlighting modern CSS techniques and strategic approaches that will help you build more robust, adaptable web experiences.'
        ]
      },
      {
        title: 'Moving Beyond Media Queries with Modern CSS',
        content: [
          'While media queries remain an important tool in responsive design, modern CSS provides many powerful features that allow for more intrinsic responsiveness without the need for numerous breakpoints.',
          '### CSS Grid and Flexbox',
          'CSS Grid and Flexbox have revolutionized layout design, making it easier to create responsive layouts that adapt naturally to available space:',
          '```css\n.card-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1rem;\n}\n```',
          'This simple grid setup automatically adjusts the number of columns based on the available space, without requiring any media queries.',
          '### Container Queries',
          'Container queries are one of the most exciting recent additions to CSS, allowing styles to be applied based on the size of a container rather than the viewport:',
          '```css\n.card-container {\n  container-type: inline-size;\n}\n\n@container (min-width: 400px) {\n  .card {\n    flex-direction: row;\n  }\n}\n```',
          'This approach is particularly valuable for reusable components that may appear in different contexts throughout a site.'
        ]
      },
      {
        title: 'Performance Optimization for All Devices',
        content: [
          'Responsive design in 2023 must account for performance across a wide range of devices and network conditions. This includes:',
          '### Responsive Images',
          'Use modern image formats like WebP and AVIF, along with the `srcset` and `sizes` attributes to serve appropriately sized images:',
          '```html\n<img \n  srcset="/images/product-small.webp 400w,\n          /images/product-medium.webp 800w,\n          /images/product-large.webp 1200w"\n  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"\n  src="/images/product-fallback.jpg"\n  alt="Product description">\n```',
          '### Lazy Loading',
          'Implement native lazy loading for images and iframes that are below the fold:',
          '```html\n<img src="image.jpg" loading="lazy" alt="Description">\n```',
          '### Critical CSS',
          'Inline critical CSS to ensure the above-the-fold content renders quickly, and defer non-critical CSS loading:',
          '```html\n<!-- Critical CSS inline in head -->\n<style>\n  /* Critical styles here */\n</style>\n\n<!-- Non-critical CSS with defer -->\n<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel=\'stylesheet\'">\n```'
        ]
      },
      {
        title: 'Designing for Touch, Mouse, and Beyond',
        content: [
          'Modern responsive design requires accounting for various input methods beyond just screen size:',
          '### Touch-Friendly Targets',
          'Ensure interactive elements are sufficiently sized for touch input (at least 44×44px according to WCAG guidelines) and provide adequate spacing between clickable elements.',
          '### Input-Specific Styling',
          'Use media queries to adapt the UI based on the primary input method:',
          '```css\n/* Styles for pointer devices like mouse */\n@media (pointer: fine) {\n  .button {\n    padding: 0.5em 1em;\n  }\n}\n\n/* Styles for touch devices */\n@media (pointer: coarse) {\n  .button {\n    padding: 0.75em 1.5em;\n  }\n}\n```',
          '### Focus States',
          'Design clear, visible focus states for keyboard navigation, ensuring they\'re visible on all device types:',
          '```css\n.button:focus-visible {\n  outline: 3px solid #4d90fe;\n  outline-offset: 2px;\n}\n```'
        ]
      },
      {
        title: 'Conclusion',
        content: [
          'Responsive design in 2023 requires a holistic approach that goes beyond flexible layouts. By leveraging modern CSS capabilities, optimizing for performance across devices, and designing for multiple input methods, you can create truly responsive experiences that serve all users effectively.',
          'The most successful responsive designs anticipate user needs and context, providing appropriate solutions for each scenario rather than simply shrinking or rearranging content based on screen size.',
          'By following these best practices, you\'ll be well-equipped to create web experiences that are not just responsive, but truly adaptable to the diverse landscape of devices and user contexts in 2023 and beyond.'
        ]
      }
    ]
  }
};

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts[id];
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!post) {
    return <div className="container mx-auto p-8">Loading...</div>;
  }
  
  return (
    <main className="container mx-auto px-4 pt-32 pb-24">
      {/* Back to blog link */}
      <Link 
        to="/blog" 
        className="inline-flex items-center text-blue-400 hover:text-blue-500 transition-colors mb-8"
      >
        <svg 
          className="h-5 w-5 mr-2" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to all articles
      </Link>
      
      {/* Article header */}
      <header className="mb-12">
        <div className="flex items-center space-x-3 mb-4">
          <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">
            {post.category}
          </span>
          <span className="text-gray-400">{post.date}</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-400">{post.readTime}</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
          {post.title}
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-3xl">
          {post.excerpt}
        </p>
        
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <div className="text-white font-medium">{post.author.name}</div>
            <div className="text-gray-400 text-sm">{post.author.title}</div>
          </div>
        </div>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main article content */}
        <article className="lg:col-span-8 prose prose-invert prose-blue max-w-none">
          {/* Cover image */}
          <div className="mb-10 rounded-xl overflow-hidden">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-auto" 
            />
          </div>
          
          {/* Article sections */}
          {post.sections.map((section, index) => (
            <section key={index} className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
              {section.content.map((paragraph, pIndex) => (
                <div key={pIndex} className="mb-6">
                  {paragraph.startsWith('```') ? (
                    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 overflow-x-auto my-6">
                      <pre className="text-sm text-gray-300 font-mono">
                        {paragraph.replace(/```javascript\n|```\n|```/g, '')}
                      </pre>
                    </div>
                  ) : paragraph.startsWith('###') ? (
                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">
                      {paragraph.replace('### ', '')}
                    </h3>
                  ) : (
                    <p className="text-gray-300 leading-relaxed">{paragraph}</p>
                  )}
                </div>
              ))}
            </section>
          ))}
        </article>
        
        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <div className="sticky top-24">
            {/* Tags section */}
            <div className="rounded-xl overflow-hidden shadow-xl p-6 border border-gray-800/80 relative mb-8"
                style={{ background: 'rgba(17, 24, 39, 0.8)', backdropFilter: 'blur(4px)' }}>
              {/* Subtle glow effect */}
              <div className="absolute -inset-[40%] bg-blue-500/10 rounded-full blur-3xl z-0 opacity-50"></div>
              
              <h2 className="text-xl font-bold mb-4 text-white relative z-10">Tags</h2>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="text-sm px-3 py-1 rounded-full text-blue-400 border border-blue-500/20"
                    style={{ background: 'rgba(59, 130, 246, 0.1)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-12 h-12">
                <div className="absolute top-0 left-0 w-3 h-10 border-t-2 border-l-2 border-blue-500 rounded-tl-lg"></div>
                <div className="absolute top-0 left-0 h-3 w-10 border-t-2 border-l-2 border-blue-500 rounded-tl-lg"></div>
              </div>
              
              <div className="absolute bottom-0 right-0 w-12 h-12">
                <div className="absolute bottom-0 right-0 w-3 h-10 border-b-2 border-r-2 border-blue-500 rounded-br-lg"></div>
                <div className="absolute bottom-0 right-0 h-3 w-10 border-b-2 border-r-2 border-blue-500 rounded-br-lg"></div>
              </div>
            </div>
            
            {/* Share section */}
            <div className="rounded-xl overflow-hidden shadow-xl p-6 border border-gray-800/80 relative mb-8"
                style={{ background: 'rgba(17, 24, 39, 0.8)', backdropFilter: 'blur(4px)' }}>
              <h2 className="text-xl font-bold mb-4 text-white relative z-10">Share this article</h2>
              
              <div className="flex space-x-4 relative z-10">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.225 0H1.77C.79 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.77 24h20.452C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0zM7.257 20.252H3.621V8.895h3.636v11.357zM5.439 7.33a2.11 2.11 0 1 1-.001-4.22 2.11 2.11 0 0 1 .001 4.22zm14.582 12.923h-3.63v-5.514c0-1.355-.027-3.095-1.886-3.095-1.886 0-2.176 1.473-2.176 2.994v5.615H8.699V8.895h3.485v1.599h.051c.484-.917 1.668-1.886 3.433-1.886 3.667 0 4.35 2.411 4.35 5.551v6.093h.003z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"></path>
                  </svg>
                </a>
              </div>
              
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-12 h-12">
                <div className="absolute top-0 left-0 w-3 h-10 border-t-2 border-l-2 border-blue-500 rounded-tl-lg"></div>
                <div className="absolute top-0 left-0 h-3 w-10 border-t-2 border-l-2 border-blue-500 rounded-tl-lg"></div>
              </div>
              
              <div className="absolute bottom-0 right-0 w-12 h-12">
                <div className="absolute bottom-0 right-0 w-3 h-10 border-b-2 border-r-2 border-blue-500 rounded-br-lg"></div>
                <div className="absolute bottom-0 right-0 h-3 w-10 border-b-2 border-r-2 border-blue-500 rounded-br-lg"></div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default BlogDetail; 