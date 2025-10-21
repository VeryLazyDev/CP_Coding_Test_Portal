import React, { useEffect, useState } from "react";
import QuesList from "../components/QuesList";
import { getAllQuestions } from "../../../services/userService";

const HomePage = () => {
  const [ques, setQues] = useState([]);
  const [answers, setAnswers] = useState({}); // store all selected answers

  // Fetch all questions
  useEffect(() => {
    const fetchQues = async () => {
      try {
        const response = await getAllQuestions();
        console.log("QUES LIST", response);
        if (response.status === 200) {
          setQues(response.data.questions);
        }
      } catch (error) {
        console.error("FETCH AT Component", error);
      }
    };
    fetchQues();
  }, []);

  // Called whenever a MultipleChoice option is selected
  const handleAnswerChange = ({ questionId, value }) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const saveAnswers = () => {
    console.log("All Answers:", answers);
    // Here you can call your API to save answers
    // e.g., await saveUserAnswers(answers)
  };

  return (
    <div className="max-w-6xl h-screen flex flex-col mx-auto gap-4 justify-center overflow-y-hidden p-4">
      <QuesList data={ques} onAnswerChange={handleAnswerChange} answers={answers} />

      <button
        onClick={saveAnswers}
        className="bg-blue-500 cursor-pointer text-white px-3 py-2 w-32 rounded-md hover:bg-blue-600 transition"
      >
        SAVE
      </button>
    </div>
  );
};

export default HomePage;
