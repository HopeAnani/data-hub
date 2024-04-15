import React from "react";
import sample from "../images/English.png"

const ArticlePage = () => {
  const article = {
    title: "UI/UX Design Trends for 2024",
    date: "April 1, 2024",
    content: [
      "The world of UI/UX design is ever-evolving, with new trends emerging as technology advances. In 2024, we're seeing a shift towards more immersive experiences, leveraging augmented reality (AR) and virtual reality (VR) to provide users with more engaging and interactive interfaces.",
      "Accessibility remains a top priority, with designs becoming more inclusive to cater to a wider range of users. Designs are being optimized for users with disabilities, ensuring that everyone has equal access to information and functionality.",
      "Minimalist design continues to dominate, emphasizing clean lines, ample white space, and a focus on simplicity to enhance usability. This approach not only creates aesthetically pleasing interfaces but also improves the overall user experience by making navigation more intuitive.",
      "As technology continues to evolve, so too will the trends in UI/UX design. Designers must stay abreast of these changes to create interfaces that meet the needs of modern users."
    ],
    imageUrl: sample,
  };

  const suggestions = [
    { 
      title: "How to Improve Your Website's Accessibility", 
      description: "Explore key strategies for enhancing your site's accessibility, ensuring all users have a seamless experience.",
      imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#" 
    },
    { 
      title: "The Future of Augmented Reality in Design", 
      description: "Dive into the potential of AR in design, and how it's shaping the future of user interactions.",
      imageUrl: "https://images.unsplash.com/photo-1530825894095-9c184b068fcb?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#" 
    },
    { 
      title: "Minimalist Design: Tips and Tricks", 
      description: "Learn how to master the art of minimalist design, focusing on what truly matters to users.",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#" 
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <img src={article.imageUrl} alt="Article" className="w-full h-96 rounded-lg object-cover" />
      <h1 className="mt-6 text-3xl font-bold text-gray-800">{article.title}</h1>
      <p className="mt-2 text-sm text-gray-500">{article.date}</p>
      <div className="mt-4 text-gray-700 text-base whitespace-pre-line text-justify">
        {article.content.map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Enhanced Suggestions Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">You May Also Like</h2>
        <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {suggestions.map((suggestion, index) => (
            <a key={index} href={suggestion.link} className="block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-200 ease-in-out">
              <img src={suggestion.imageUrl} alt="" className="w-full h-48 object-cover"/>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-800">{suggestion.title}</h3>
                <p className="text-sm text-gray-600">{suggestion.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
