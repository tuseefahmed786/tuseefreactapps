import React from "react";

export default function User(props) {
  return (
    <>
      <tbody>
        <tr>
         
          <td className="fixed-td">
            <img src={props.imgees} alt="Here User Imag"  />
          </td>
          <td className="postion-top text-aligns">{props.uname}</td>
          <td className="postion-top text-aligns">
            <button type="button" className="btn btn-primary">
              Active
            </button>
          </td>
          
          <td className="postion-top text-aligns">{Math.random() * 400 }</td>
          <td className="postion-top text-aligns">{Math.random() * 50000}</td>
          <td></td>
        </tr>
      </tbody>
      {/* <tr className="td_align aligniments">
                <td>
                  <span>
                    <img src={props.imgees} alt="" />
                  </span>
                  <span>   {props.uname}</span>
                </td>
                <td>
                  <button type="button" className="btn btn-primary">
                    Active
                  </button>
                </td>
                
                <td>
                <span>324</span> <td>Total users</td>
                </td>
                <td>
                <span>32424</span><td>Total Impression</td>
                </td>
                <td>
                <span>32424</span> <td>Converted users </td>
                </td>
              </tr> */}

    
    </>
  );
}
