function MultipleChoice({ 
  className = "", 
  question, 
  image, 
  options = [], 
  name = "question", 
  onChange 
}) {
  return (
    <div className={`border border-blue-500 p-4 rounded-xl  ${className}`}>
      {/* Question */}
      <div className="text-2xl font-semibold mb-3 text-blue-900">
        {question}
      </div>

      {/* Optional Image */}
      {image && (
        <div className="mb-3">
          <img 
            src={image} 
            alt="question illustration" 
            className="rounded-lg max-w-[250px] border border-blue-300" 
          />
        </div>
      )}

      {/* Options (only one selectable) */}
      <div className="flex flex-col items-start gap-2">
        {Array.isArray(options?.answers) && options.answers.length > 0 ? (
          options.answers.map((opt, i) => (
            <label 
              key={i} 
              className="flex items-center gap-3 cursor-pointer px-3 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-200 w-full"
            >
              <input 
                type="radio" 
                name={name} 
                value={opt} 
                onChange={() => onChange?.(opt)} 
                className="accent-blue-600 w-5 h-5"
              />
              <span className="text-blue-800">{opt}</span>
            </label>
          ))
        ) : (
          <div className="text-blue-500 italic">No options available.</div>
        )}
      </div>
    </div>
  );
}

export default MultipleChoice;
