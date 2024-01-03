import { Link } from 'react-router-dom';
import '../styles/sidebar.css';
import { AiFillCaretDown,  AiOutlineMenuFold, } from 'react-icons/ai';

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
    <div className='flex'>
       {/* <div>
        <AiFillCaretLeft/>
      </div> */}
      <input type="checkbox" id="sidecheck"></input>
      <label for="sidecheck">
			  <span class="spann" id="bars" onclick="contentMove('r')"><AiOutlineMenuFold size={25}/></span>
		  </label>

    {/* <input type="checkbox" id="drawer-toggle" class="relative sr-only peer" checked/>
    <label for="drawer-toggle" class="absolute left-0 inline-block p-4 transition-all duration-500 bg-indigo-500 rounded-lg peer-checked:rotate-180 peer-checked:left-64">
        <div class="w-6 h-1 mb-3 -rotate-45 bg-white rounded-lg"></div>
        <div class="w-6 h-1 rotate-45 bg-white rounded-lg"></div>
    </label> */}

    <nav className="sidebar overflow-y-scroll" id="sb">
      <div className="sideText">Side Menu</div> 
      <ul className="list-none">
        <li>
          <Link  onClick={handleLinkClick}>
            Regulatory & Strategy <AiFillCaretDown className="inline caret" />
          </Link>
          <ul>
            <li>
              <Link to="/explore/National-strategies-and-policies">National Strategies & Policies</Link>
            </li>
            <li>
              <Link to="/explore/Strategy-repository">Business Regulatory Framework</Link>
            </li>
            <li>
              <Link to="/explore/Important-links">Important Links</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link onClick={handleLinkClick}>
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
          <Link onClick={handleLinkClick}>
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
          <Link onClick={handleLinkClick}>Ace Services</Link>
        </li>
      <div className=' h-20'></div>
      </ul>
    </nav>
    </div>
  );
};

export default Sidebar;
