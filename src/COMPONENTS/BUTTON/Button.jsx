import React from "react";

const Button = ({ children }) => {
  return (
    <div className="text-center mt-4">
      <button className="btn btn-active btn- neutral">{children}</button>
    </div>
  );
};

export default Button;
<button className="btn btn-active btn-primary">Button</button>;
