// React Component for Weekly Meal Plan with Radio Buttons
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const days = ["월", "화", "수", "목", "금", "토", "일"] as const;
const meals = ["아침", "점심", "저녁"] as const;

type Day = (typeof days)[number];
type Meal = (typeof meals)[number];

type MealPlan = {
  [key in Day]: {
    [key in Meal]: boolean;
  };
};

const InputContainer = () => {
  const navigate = useNavigate();
  const [selectedMeals, setSelectedMeals] = useState<MealPlan>(
    days.reduce((acc, day) => {
      acc[day] = { 아침: false, 점심: false, 저녁: false };
      return acc;
    }, {} as MealPlan)
  );

  const handleMealChange = (day: Day, meal: Meal) => {
    setSelectedMeals((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [meal]: !prev[day][meal],
      },
    }));
  };

  const handleSubmit = () => {
    navigate("/");
    console.log("Submitted Meal Plan:", selectedMeals);
  };

  return (
    <div className="px-6 pb-6 pt-2 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-bold text-center mb-2">
        시간표와 생활 패턴에 따른 식사 계획 등록
      </h1>
      <p className="text-center text-gray-500 text-sm mb-3">
        먹는 시간에 체크를 눌러주세요
      </p>
      <div className="space-y-4">
        {days.map((day) => (
          <div key={day} className="bg-white p-[14px] rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-1">{day}</h2>
            <div className="flex space-x-4">
              {meals.map((meal) => (
                <label key={meal} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedMeals[day][meal]}
                    onChange={() => handleMealChange(day, meal)}
                    className="form-checkbox h-4 w-4 text-indigo-600"
                  />
                  <span className="text-gray-700">{meal}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        제출하기
      </button>
    </div>
  );
};

export default InputContainer;
