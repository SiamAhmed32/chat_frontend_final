import React from "react";

type Props = {};

const RegisterHeader = (props: Props) => {
  return (
    <div className="flex flex-col space-y-2 text-center mb-5">
      <h1 className="text-2xl font-semibold tracking-tight">
        Create an account
      </h1>
      <p className="text-sm text-muted-foreground font-medium">Enter Your details below to register for the chat</p>
    </div>
  );
};

export default RegisterHeader;
