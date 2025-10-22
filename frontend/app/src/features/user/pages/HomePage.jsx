import React, { useEffect, useState } from "react";
import QuesList from "../components/QuesList";
import { getAllQuestions, submitAnswers } from "../../../services/userService";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const HomePage = () => {
  const [ques, setQues] = useState([]);
  const [loading,setLoading]=useState(false);
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

  const saveAnswers =async () => {
    console.log("All Answers:", answers);
    setLoading(true)
    try {
      const response=await submitAnswers(answers);
      if(response===200) {
        toast.success("Submitted Successfully")
      } else {
        toast.error("Something went wrong")
      }
      
    } catch (error) {
      console.error(error);
      
    }finally{
      setLoading(false);
      setAnswers({})
    }
   
  };

  return (
    <div className="max-w-6xl h-screen flex flex-col mx-auto gap-4 justify-center overflow-y-hidden p-4">
      <QuesList data={ques} onAnswerChange={handleAnswerChange} answers={answers} />

      <button
        onClick={saveAnswers}
        disabled={loading}
        className="bg-blue-500 cursor-pointer text-white px-3 py-2 w-32 rounded-md hover:bg-blue-600 transition"
      >
       {loading ? <ClipLoader size={20} color="white"/> : "SAVE"}
      </button>
    </div>
  );
};

export default HomePage;
