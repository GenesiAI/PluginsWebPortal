import React from "react";
import { useNavigate } from "react-router-dom";

const LogOut: React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    localStorage.removeItem("X");
    navigate("/");
  });
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-black text-white">
      <h1 className="block m-2">Loggin you out</h1>
    </div>
  );
};
