function MultipleChoice({ 
  className = "", 
  question, 
  image, 
  options = [], 
  name = "question", 
  onChange 
}) {
  return (
    <div className={`border border-slate-900 p-4 rounded-xl ${className}`}>
      {/* Question */}
      <div className="text-2xl font-medium mb-3">
        {question}
      </div>

      {/* Optional Image */}
      {image && (
        <div className="mb-3">
          <img 
            src={image} 
            alt="question illustration" 
            className="rounded-lg max-w-[250px]" 
          />
        </div>
      )}

      {/* Options (only one selectable) */}
      <div className="flex flex-col items-start gap-2">
        {options.map((opt, i) => (
          <label key={i} className="flex items-center gap-2 cursor-pointer">
            <input 
              type="radio" 
              name={name} 
              value={opt} 
              onChange={() => onChange?.(opt)} 
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default MultipleChoice;
