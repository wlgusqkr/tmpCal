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
        <h2 className="text-center mb-5 font-bold">
          이번 학기 식사 계획 입력하기
        </h2>
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
        <div className="text-xs text-gray-500 mt-3">
          <p className="pb-1">식사수요를 조사하고 있습니다.</p>
          <p>
            그에 맞는 수요 예측으로 조리되므로 학교 시간표 / 동아리 일정 / 생활
            패턴 등 본인 일정에 맞게 식사 여부를 체크해주세요
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
