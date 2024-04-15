import React, { useEffect, useState } from "react";
import { ShimmerPostItem } from "react-shimmer-effects";

function User() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      await fetch("https://jsonplaceholder.typicode.com/users/2")
        .then((data) => {
          return data.json();
        })
        .then((jsondata) => {
          setUser(jsondata);
        })
        .catch((e) => {
          console.log(e);
        });
    }, 3000);
  }, []);

  return (
    <div>
      <h2>User</h2>

      {user ? (
        <div style={{border:"2px solid", padding : "10px" , margin : "5px"}}>
          <h4>{user.name}</h4>
          <div>{user.email}</div>
          <div>{user.website}</div>
        </div>
      ) : (
        <ShimmerPostItem
        card
        title
        cta
        imageType="thumbnail"
        imageWidth={80}
        imageHeight={80}
        contentCenter
      />
      )}

    </div>
  );
}

export default User;
