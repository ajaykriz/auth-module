import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function Profile() {
  const { user } = useSelector((state) => state.auth);
  const [Profile, setProfile] = useState({
    username: "",
    name: "",
    email: "",
  });
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios
      .get(`http://localhost:5000/api/users/profile/${user._id}`, config)
      .then((res) => setProfile(res.data));
  }, [user]);

  return (
    <div className="flex flex-col w-full items-center text-3xl space-y-4 mt-4 justify-center">
      <h1>name:{Profile.username}</h1>
      <h1>name:{Profile.name}</h1>
      <h1> email:{Profile.email}</h1>
    </div>
  );
}

export default Profile;
