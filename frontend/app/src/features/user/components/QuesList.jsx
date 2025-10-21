
import MultipleChoice from '../components/MutipleChoice.jsx';

const QuesList = ({ data, onAnswerChange, answers }) => {
  return (
    <div className='flex flex-col p-1 gap-4 w-full h-3/4 overflow-y-scroll scroll-smooth'>
      {data.length > 0 && data.map((que) => (
        <MultipleChoice
          key={que.id}
          questionId={que.id}
          question={que.question}
          options={que.options}
          name={`question-${que.id}`}
          onChange={onAnswerChange}
          selectedValue={answers[que.id]} 
        />
      ))}
    </div>
  );
};

export default QuesList;
