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
    <div className='flex'>
       {/* <div>
        <AiFillCaretLeft/>
      </div> */}
      {/* <input type="checkbox" id="sidecheck"></input>
      <label for="sidecheck">
			  <span class="spann" id="bars" onclick="contentMove('r')"><AiOutlineMenuFold size={25}/></span>
		  </label> */}

    {/* <input type="checkbox" id="drawer-toggle" class="relative sr-only peer" checked/>
    <label for="drawer-toggle" class="absolute left-0 inline-block p-4 transition-all duration-500 bg-indigo-500 rounded-lg peer-checked:rotate-180 peer-checked:left-64">
        <div class="w-6 h-1 mb-3 -rotate-45 bg-white rounded-lg"></div>
        <div class="w-6 h-1 rotate-45 bg-white rounded-lg"></div>
    </label> */}

    <nav className="sidebar overflow-y-scroll" id="sb">
      <div className="sideText">Content</div> 
      <ul className="list-none">
        <li>
          <Link  onClick={handleLinkClick} to='/explore/Regulatory-and-Strategy'>
            Regulatory & Strategy <AiFillCaretDown className="inline caret" />
          </Link>
          <ul>
            <li>
              <Link to="/explore/National-strategies-and-policies">National Strategies & Policies</Link>
            </li>
            <li>
              <Link to="/explore/Buisness-and-regulatory-framework">Business Regulatory Framework</Link>
            </li>
            <li>
              <Link to="/explore/Other-studies">Other Studies</Link>
            </li>
            <li>
              <Link to="/explore/Important-links">Important Links</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/explore/Investment-Lifecycle" onClick={handleLinkClick}>
            Investment Lifecycle <AiFillCaretDown className="inline caret" />
          </Link>
          <ul>
            <li>
              <Link to="/explore/Investment-Lifecycle/Pre-implementation">Pre-implementation</Link>
            </li>
            <li>
              <Link to="/explore/Investment-Lifecycle/Implementation">Implementation</Link>
            </li>
            <li>
              <Link to="/explore/Investment-Lifecycle/Operation">Operation</Link> 
            </li>
          </ul>
        </li>
        <li>
          <Link onClick={handleLinkClick}>
            Data Repository <AiFillCaretDown className="inline caret" />
          </Link>
          <ul>
            <li>
              <Link to="/explore/data-repository/Economy">Economy</Link>
            </li>
            <li>
              <Link to="/explore/data-repository/Trade">Trade</Link>
            </li>
            <li>
              <Link to="/explore/data-repository/Social">Social</Link>
            </li>
            <li>
              <Link to="/explore/data-repository/Investment">Investment</Link>
            </li>
            <li>
              <Link to="/explore/data-repository/Infrastructure">Infrastructure</Link>
            </li>
            <li>
              <Link to="/explore/data-repository/Doing-Business">Doing Buisness</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/explore/ACE-Services" onClick={handleLinkClick}>ACE Services</Link>
        </li>
      <div className=' h-20'></div>
      </ul>
    </nav>
    </div>
  );
};

export default Sidebar;
