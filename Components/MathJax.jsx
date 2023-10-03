import React, { useEffect } from 'react';


const MathJaxComponent = ({ mathExpression}) => {
  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.Hub.Config({
        tex2jax: {
            inlineMath: [['$', '$']],
            displayMath: [['\[', '\]']],
          processEscapes: true,
        },
      });
      window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub]);
    }
  }, [mathExpression]);

  return (
   <div>{mathExpression}</div>
   )
};

export default MathJaxComponent;
