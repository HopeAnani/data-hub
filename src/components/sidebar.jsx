import { Link } from 'react-router-dom';
import '../styles/sidebar.css';
import { AiFillCaretDown } from 'react-icons/ai';

const Sidebar = () => {
  const handleLinkClick = (event) => {
    const clickedLink = event.currentTarget;
    const clickedItem = clickedLink.parentNode;
    const dropdownMenu = clickedItem.querySelector('ul');

    // Toggle active class on clicked item
    clickedItem.classList.toggle('active');

    // Toggle active class on dropdown menu
    if (dropdownMenu) {
      dropdownMenu.classList.toggle('active');
    }
  };

  return (
    <nav className="sidebar overflow-y-scroll" id="sb">
      <div className="sideText">Side Menu</div>
      <ul className="list-none">
        <li>
          <Link to="" onClick={handleLinkClick}>
            Regulatory & Strategy <AiFillCaretDown className="inline caret" />
          </Link>
          <ul>
            <li>
              <Link to="">Regulatory Repository</Link>
            </li>
            <li>
              <Link to="">Strategy Repository</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="" onClick={handleLinkClick}>
            Investment Lifecycle <AiFillCaretDown className="inline caret" />
          </Link>
          <ul>
            <li>
              <Link to="">Pre-implementation</Link>
            </li>
            <li>
              <Link to="">Implementation</Link>
            </li>
            <li>
              <Link to="">Operating</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="" onClick={handleLinkClick}>
            Data Repository <AiFillCaretDown className="inline caret" />
          </Link>
          <ul>
            <li>
              <Link to="">Economy</Link>
            </li>
            <li>
              <Link to="">Trade</Link>
            </li>
            <li>
              <Link to="">Social</Link>
            </li>
            <li>
              <Link to="">Investment</Link>
            </li>
            <li>
              <Link to="">Infrastructure</Link>
            </li>
            <li>
              <Link to="">Doing Buisness</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="" onClick={handleLinkClick}>Ace Services</Link>
        </li>
      <div className=' h-20'></div>
      </ul>
    </nav>
  );
};

export default Sidebar;
