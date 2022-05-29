import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminloading, setAdminloading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`https://bikes-alaeze.herokuapp.com/admin/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
          setAdminloading(false);
        });
    }
  }, [user]);
  return [admin, adminloading];
};
export default useAdmin;
