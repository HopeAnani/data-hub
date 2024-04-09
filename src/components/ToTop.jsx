import React from 'react';

class ScrollButton extends React.Component {
  constructor() {
    super();

    this.state = {
      isVisible: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollY = window.scrollY;
    const isVisible = scrollY > 100; // Change 100 to the desired scroll distance for button to appear
    this.setState({ isVisible });
  };

  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  render() {
    const { isVisible } = this.state;

    return (
      <>
        {isVisible && (
          <button
            title="Back to top"
            className="scroll bg-[#173e26] opacity-70 hover:opacity-100 rounded-lg fixed bottom-10 right-10 w-12 h-12 border border-[#173e26] "
            onClick={this.scrollToTop}
          >
            <span className="text-white text-center block">&#9650;</span>
          </button>
        )}
      </>
    );
  }
}

export default ScrollButton;
