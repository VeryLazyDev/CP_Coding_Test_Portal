import React, { useEffect } from "react";
import MultipleChoice from "../components/MutipleChoice";
import QuesList from "../components/QuesList";
import { useState } from "react";
import { getAllQuestions } from "../../../services/userService";

const HomePage = () => {
    const [ques, setQues] = useState([]);

    //you shouldn't use async like this bro this is kinda wrong
    useEffect(async () => {
        try {
            const response = await getAllQuestions();
            console.log("QUES LIST", response);
            if (response.status === 200) {
                setQues(response.data.questions);
            }
        } catch (error) {
            console.log("FETCH AT Component", error);
        }
    }, []);

    return (
        <div className="max-w-6xl h-dvh  mx-auto   ">
            {/* <div className='flex flex-col p-1 gap-4 w-full h-3/4  bg-red-50  overflow-y-scroll scroll-smooth'>
  <MultipleChoice
  question="What is JWT?"
  // image="https://placehold.co/200"
  options={["JSON Web Token", "Java Web Token", "Joint Web Transfer", "JavaScript Web Tool"]}
  onChange={(value) => console.log("Selected:", value)}
/>
  <MultipleChoice
  question="What is JWT?"
  // image="https://placehold.co/200"
  options={["JSON Web Token", "Java Web Token", "Joint Web Transfer", "JavaScript Web Tool"]}
  onChange={(value) => console.log("Selected:", value)}
/>

  <MultipleChoice
  question="What is JWT?"
  // image="https://placehold.co/200"
  options={["JSON Web Token", "Java Web Token", "Joint Web Transfer", "JavaScript Web Tool"]}
  onChange={(value) => console.log("Selected:", value)}
/>

  <MultipleChoice
  question="What is JWT?"
  // image="https://placehold.co/200"
  options={["JSON Web Token", "Java Web Token", "Joint Web Transfer", "JavaScript Web Tool"]}
  onChange={(value) => console.log("Selected:", value)}
/>

  <MultipleChoice
  question="What is JWT?"
  // image="https://placehold.co/200"
  options={["JSON Web Token", "Java Web Token", "Joint Web Transfer", "JavaScript Web Tool"]}
  onChange={(value) => console.log("Selected:", value)}
/>

  <MultipleChoice
  question="What is JWT?"
  // image="https://placehold.co/200"
  options={["JSON Web Token", "Java Web Token", "Joint Web Transfer", "JavaScript Web Tool"]}
  onChange={(value) => console.log("Selected:", value)}
/>

  <MultipleChoice
  question="What is JWT?"
  // image="https://placehold.co/200"
  options={["JSON Web Token", "Java Web Token", "Joint Web Transfer", "JavaScript Web Tool"]}
  onChange={(value) => console.log("Selected:", value)}
/>

  <MultipleChoice
  question="What is JWT?"
  // image="https://placehold.co/200"
  options={["JSON Web Token", "Java Web Token", "Joint Web Transfer", "JavaScript Web Tool"]}
  onChange={(value) => console.log("Selected:", value)}
/>



  <MultipleChoice
  question="What is JWT?"
  // image="https://placehold.co/200"
  options={["JSON Web Token", "Java Web Token", "Joint Web Transfer", "JavaScript Web Tool"]}
  onChange={(value) => console.log("Selected:", value)}
/>



  <MultipleChoice
  question="What is JWT?"
  // image="https://placehold.co/200"
  options={["JSON Web Token", "Java Web Token", "Joint Web Transfer", "JavaScript Web Tool"]}
  onChange={(value) => console.log("Selected:", value)}
/>



</div> */}

            <QuesList data={ques} />

            <button className="bg-blue-500 text-white px-3 py-2 rounded-md">
                SAVE
            </button>
        </div>
    );
};

export default HomePage;
