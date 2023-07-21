/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";

const ErrorPage = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 5000);
  return (
    <div>
      <img
        style={{ width: "100%" }}
        src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1"
        alt="error"
      />
    </div>
  );
};

export default ErrorPage;
