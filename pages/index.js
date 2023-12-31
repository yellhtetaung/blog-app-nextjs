import React, { useContext, useEffect } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/router";

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  console.log(isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated]);

  return <div>Home Page</div>;
};

export default Home;
