import "./PagesCss/Layout.css"
import { Link, Outlet } from "react-router-dom";
import image from "./Assests/6.png";
export default function Layout(props) {
  return (
    <>
      <div className="navbar_align">
        <div className="profiles_align">
          <div className="pimg_align">
            <img src={image} alt="" />
          </div>
          <h3>{props.profiename}</h3>
          <Link to="/">

            <h4>My Profiles</h4>
          </Link>
        </div>
        <nav>
          <h3>Menu</h3>
          <ul className="nan_ul">
            <li>
              <Link to="/">
            
                <i class="fa-solid fa-inbox icons_color"></i> Inbox
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <i class="fa-regular fa-paper-plane icons_color"></i> Sent
              </Link>
            </li>
            <li>
              <Link to="/drafts">
             
                <i class="fa-solid fa-pen-ruler icons_color"></i>Drafts
              </Link>
            </li>

            <li>
              <Link to="/deleted">
                <i class="fa-solid fa-trash icons_color"></i> Deleted
              </Link>
            </li>

            <li>
              <Link to="/favourite">
              <i class="fa-solid fa-gear icons_color"></i> Favourite
              </Link>
            </li>

            <li>
              <Link to="/analytics">
              <i class="fa-solid fa-code-branch icons_color"></i>Analytics
              </Link>
            </li>

            <li>
              <Link to="/settings">
              <i class="fa-solid fa-code-compare icons_color"></i> Settings
              </Link>
            </li>
          </ul>
        </nav>
        <div className="foter_btn">
          <button type="button" className="btn btn-primary btn-lg">
            Upgrade Plan
          </button>
      
        </div>
      </div>
      <Outlet />
    </>
  );
}
