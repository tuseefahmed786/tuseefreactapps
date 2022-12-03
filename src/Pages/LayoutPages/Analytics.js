import User from "./User";
import "../PagesCss/Analytics.css"
import image from "../Assests/Group 9.png";

import { useState } from "react";

import { Link } from "react-router-dom";

export default function Analytics(props) {
  const [name, setname] = useState([]);
  
  function userValue() {
    try {
      const getname = document.getElementById("exampleInputEmail1").value; 
          /* 1- name value get*/
      const getimg = document.getElementById("example").files[0];
          /* 1- image value get*/ 
      const gernateurl = URL.createObjectURL(getimg); 
  
      var covertarray = [{
        fname : getname,
        urles : gernateurl
      }];
      /* 4- String to Array (Convert)*/
      setname(covertarray);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="max_width">
        <div className="cover_sections">
          <div className="first_sec">
            <h4>Overview</h4>
            <hr />
          </div>

          <div className="ana_img">
            <img src={image} alt="" />
          </div>

          {/* <div className="user_table"> */}
            <hr />
            <table class="table">
  <thead>
    <tr>
      
      <th scope="col">Users</th>
      <th scope="col">Name</th>
      <th scope="col">Status</th>
      <th scope="col">Conversion</th>
      <th scope="col">Impression</th>

      <th>
      <div className="dropdown">
                    <a
      className="btn btn-secondary "
                      href="/Analytics"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      New <i class="fa-solid fa-plus"></i>
                    </a>

                    <ul className="dropdown-menu menu_align">
                      <form>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                            Full Name
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">
                            Insert Image
                          </label>
                          <input
                            type="file"
                            class="form-control"
                            id="example"
                          />
                        </div>
                        <div class="mb-3 form-check"></div>
                        <Link onClick={userValue} class="btn btn-primary">
                          Add
                        </Link>
                      
                      </form>
                      </ul>
                      </div>
                      </th>
                      </tr>
                      </thead>    
                      {name.map((bulb) => {
                return <User uname={bulb.fname} imgees={bulb.urles} />;
              })}     
             
                      
   

       </table>


            {/* <table className="table_align" id="able">
              <tr className="tx_align">
                <th>Users</th>
                <th>Status</th>
                <th>Users</th>
                <th>Impression</th>
                <th>Conversion</th>
                <th>
                  <div className="dropdown">
                    <a
                      className="btn btn-secondary "
                      href="/Analytics"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      New <i class="fa-solid fa-plus"></i>
                    </a>

                    <ul className="dropdown-menu menu_align">
                      <form>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                            Full Name
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">
                            Insert Image
                          </label>
                          <input
                            type="file"
                            class="form-control"
                            id="example"
                          />
                        </div>
                        <div class="mb-3 form-check"></div>
                        <Link onClick={userValue} class="btn btn-primary">
                          Add
                        </Link>
                      </form>
                    </ul>
                  </div>
                </th>
              </tr>
              {name.map((bulb) => {
                return <User uname={bulb.fname} imgees={bulb.urles} />;
              })}
    

      </table> */}

         
        </div>
      </div>
    </>
  );
}
 