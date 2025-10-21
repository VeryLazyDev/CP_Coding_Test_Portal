import React, { useEffect } from "react";
import MultipleChoice from "../components/MutipleChoice";
import QuesList from "../components/QuesList";
import { useState } from "react";
import { getAllQuestions } from "../../../services/userService";

const HomePage = () => {
    const [ques, setQues] = useState([]);
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




  console.log("DATA",ques);
  


    return (
        <div className="max-w-6xl h-screen flex flex-col mx-auto gap-3 justify-center overflow-y-hidden">
      

            <QuesList data={ques} />

            <button className="bg-blue-500 cursor-pointer text-white px-3 py-2 w-2xs rounded-md">
                SAVE
            </button>
        </div>
    );
};

export default HomePage;
