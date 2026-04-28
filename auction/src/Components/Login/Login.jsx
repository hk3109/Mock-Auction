import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/ipl/home1");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
