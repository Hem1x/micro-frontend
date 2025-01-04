import { useState } from 'react';

const Couter = ({ inversed = false }: { inversed?: boolean }) => {
  const [couter, setCouter] = useState(0);

  return (
    <>
      {inversed ? (
        <div>
          <span>inversed: {couter}</span>
          <button onClick={() => setCouter((prev) => prev - 1)}>+</button>
          <button onClick={() => setCouter((prev) => prev + 1)}>-</button>
        </div>
      ) : (
        <div>
          <span>{couter}</span>
          <button onClick={() => setCouter((prev) => prev + 1)}>+</button>
          <button onClick={() => setCouter((prev) => prev - 1)}>-</button>
        </div>
      )}
    </>
  );
};

export default Couter;
