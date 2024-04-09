import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function ArticleComp({ article }) {
  const { title, imageUrl, content, date } = article;
  const [isHovered, setIsHovered] = useState(false); // State to manage hover

  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  // Inline styles
  const cardStyle = {
    transition: 'box-shadow 300ms ease-in-out',
    boxShadow: isHovered ? '0 10px 15px rgba(0, 0, 0, 0.2)' : 'none',
  };

  const imageStyle = {
    transition: 'transform 300ms ease-in-out',
    transform: isHovered ? 'scale(1.1)' : 'scale(1.0)',
  };

  const titleStyle = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100%',
  };

  return (
    <Card 
      className="mt-12 md:w-96" 
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader color="blue-gray" className="relative h-56 -mt-6 overflow-hidden">
        <img
          src={imageUrl}
          alt="Article"
          style={imageStyle}
        />
      </CardHeader>
      <CardBody>
        <Typography 
          variant="h5" 
          color="blue-gray" 
          className="mb-2" 
          style={titleStyle}
        >
          {title}
        </Typography>
        <Typography color="blue-gray" className="mb-2">
          {formattedDate}
        </Typography>
        <Typography>
          {content}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to="/articlepage">
          <Button className="bg-[#173e26]">Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
