import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    navigate("/week-meal-plan");
    console.log("Name:", name);
    console.log("Password:", password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-semibold mb-6 text-center">회원가입</h2>
        <div className="mb-4 ">
          <label className="block text-sm font-medium text-gray-700">
            이름
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            비밀번호
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="text-xs text-gray-500 mb-2">
          <p className="">아이디는 예시처럼 입력해주세요</p>
          <p>예 &#41; 409-2 -&gt; 4092</p>
        </div>
        <button
          onClick={handleSignUp}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default SignUp;
