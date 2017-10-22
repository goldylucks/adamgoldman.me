import React from 'react';

const Answers = ({ answers }) => (
  <div>
    {answers.map((a, idx) => {
      // if it's a component render as is
      if (!a.text) {
        return (
          <div key={idx} className="tool-answer">
            - {a}
          </div>
        );
      }
      return (
        <div key={idx} className="tool-answer">
          - <a onClick={a.onClick}>{a.text}</a>
        </div>
      );
    })}
  </div>
);

export default Answers;
