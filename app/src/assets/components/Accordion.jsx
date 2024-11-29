import { useEffect, useState } from "react";
import faq from './API/faq.json';

function Accordion() {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    setData(faq);
  }, []);

  const handleClick = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <>
      <h1 className="accordion-title">The Accordion</h1>
      <ul className="accordion-list">
        {data.map((curElem) => {
          const { id, question, answer } = curElem;
          return (
            <li
              key={id}
              className={`accordion-item ${activeId === id ? "active" : ""}`}
            >
              <div className="accordion-header" onClick={() => handleClick(id)}>
                <p className="accordion-question">{question}</p>
                <button className="accordion-toggle">
                  {activeId === id ? "Close" : "Show"}
                </button>
              </div>
              <div className="accordion-answer">
                {activeId === id && <p>{answer}</p>}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Accordion;
