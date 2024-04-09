import React from 'react';
import { ArticleComp } from '../components/articlecomp';
import SearchBar from '../components/Searchbar';
import { articles } from '../pages/data'; // Ensure this path is correct
import { motion } from 'framer-motion';

const Article = () => {
  return (
    <>
      <SearchBar />
      <div className='flex flex-wrap gap-6 mb-6 justify-center'>
       
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className='mb-6 md:mb-0' // Add margin-bottom on mobile
            >
              {/* You might adjust the width or padding of each ArticleComp here if needed */}
              <ArticleComp article={article} />
            </motion.div>
          ))}
        
      </div>
    </>
  );
};

export default Article;
