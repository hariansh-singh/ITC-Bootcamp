import axios from "axios";
import React, { useEffect, useState } from "react";

const User = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const URL = "https://jsonplaceholder.typicode.com/users";

    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        setPostData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Fetching Data!</h2>
      <table className="table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {postData.map((User, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{User.name}</td>
              <td>{User.email}</td>
              <td>{User.phone}</td>
              <td>{User.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
