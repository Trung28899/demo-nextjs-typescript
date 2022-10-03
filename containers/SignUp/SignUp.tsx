import React from "react";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import classes from "./SignUp.module.scss";
import { useRouter } from "next/router";

function SignUp() {
  const router = useRouter();

  const goToSignIn = () => {
    router.push("/login");
  };

  return (
    <div className={classes.container}>
      <Title>Sign Up To My App</Title>
      <Button onClick={goToSignIn}>Go To Sign In</Button>
    </div>
  );
}

export default SignUp;
