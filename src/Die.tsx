import React from 'react';

interface IProps {
  key: string;
  value: number;
  isHeld: boolean;
  holdDice: () => void;
}

const Die: React.FC<IProps> = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? '#59E391' : 'white',
  };

  return (
    <div className='die-face' style={styles} onClick={props.holdDice}>
      <h2 className='die-num'>{props.value}</h2>
    </div>
  );
};

export default Die;
