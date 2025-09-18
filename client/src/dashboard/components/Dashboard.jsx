import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentProfileAction } from "../../profile/redux/action/profileAction";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, token } = useSelector((state) => state.auth);
  const { profile, loading, error, status } = useSelector(
    (state) => state.profile
  );
  useEffect(() => {
    console.log("hello from useeffect");
    // if ur an authenticated user , token, and status !=loading===> getCurrentProfileAction ()
    if (isAuthenticated && token && status === "empty") {
      dispatch(getCurrentProfileAction());
    }
  }, []); // to run it only once when the component is mounted.loading phase of component.

  // 1. user is not authenticated but came to dashboard
  if (!isAuthenticated) {
    return (
      <section className="container">
        <h2>Please sign in</h2>
        <p>You must be authenticated to view the dashboard.</p>
        <Link to="/auth/login" className="btn btn-primary">
          Go to Login
        </Link>
      </section>
    );
  }
  // 2. u r in loading phase

  //   if (loading || status === "loading") {
  //     return (
  //       <section className="container">
  //         <h2 className="my-2">Dashboard</h2>
  //         <p>Loading your profile…</p>
  //       </section>
  //     );
  //   }
  // 3. empty there is no profile
  if (status === "empty") {
    return (
      <section className="container">
        <h2 className="my-2">Dashboard</h2>
        <p>You haven’t created a profile yet.</p>
        <Link to="/profile/create-profile" className="btn btn-primary">
          Create Profile
        </Link>
      </section>
    );
  }
  // 4. success there we have a user profile.
  // 5. failure : rest call failures.

  return <>Dashboard</>;
};

export default Dashboard;
