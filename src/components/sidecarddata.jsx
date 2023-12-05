import React from 'react'
import SideCard from './sidecard';

const Sidecarddata = () => {
    const cardData=[{
        title: 'Card 1',
        content: 'Content for Card 1 goes here.',
        buttonText: 'Click me',
        imageUrl: 'https://images.unsplash.com/photo-1599690925058-90e1a0b56154?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Card 2',
        content: 'Content for Card 2 goes here.',
        buttonText: 'Click me',
        imageUrl: 'https://images.unsplash.com/photo-1599690925058-90e1a0b56154?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Card 3',
        content: 'Content for Card 3 goes here.',
        buttonText: 'Click me',
        imageUrl: 'https://images.unsplash.com/photo-1599690925058-90e1a0b56154?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Card 3',
        content: 'Content for Card 3 goes here.',
        buttonText: 'Click me',
        imageUrl: 'https://images.unsplash.com/photo-1599690925058-90e1a0b56154?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Card 3',
        content: 'Content for Card 3 goes here.',
        buttonText: 'Click me',
        imageUrl: 'https://images.unsplash.com/photo-1599690925058-90e1a0b56154?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      }

    ]
    return (
        <div className="flex flex-wrap w-[100%] gap-4 p-4">
          {cardData.map((card, index) => (
            <SideCard key={index} title={card.title} content={card.content}  buttonText={card.buttonText} imageUrl={card.imageUrl}/>
          ))}
        </div>
      );
}

export default Sidecarddata