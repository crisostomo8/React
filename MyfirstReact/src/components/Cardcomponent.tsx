import React, { useState }  from 'react';

const Cardcomponent: React.FC = () => {
const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const total = likeCount + dislikeCount;

  const buttonStyle = {
    backgroundColor: 'green',
    color: 'white',
    marginRight: '10px',
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Group Activity</h2>

      <p> React is a JavaScript library, developed by Facebook, used for building user interfaces (UIs).
       It's known for its component-based approach, enabling the creation of reusable UI elements.
       React focuses on the "view" layer of an application, making it efficient for handling user interactions 
        and dynamic content updates. </p>

        <p> Capstone project members: Crisostomo, Mary Ann; Calayo Rochelle; Lagco, Ellane; Lopez, Lei Anne</p>

      <button onClick={() => setLikeCount(likeCount + 1)} style={buttonStyle}>
        Like ({likeCount})
      </button>

      <button onClick={() => setDislikeCount(dislikeCount + 1)}  style={buttonStyle}>  
        Dislike ({dislikeCount}) 
      </button>

      <p style={{ marginTop: '20px' }}>Total ratings: {total}</p>
    </div>

  );
};

export default Cardcomponent;
