import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleOnSignIn = () => {
    navigate("/sign-in");
  };
  const handleOnSignUp = () => {
    navigate("/sign-up");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <button
          onClick={handleOnSignIn}
          className="mb-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          로그인
        </button>
        <button
          onClick={handleOnSignUp}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Home;
