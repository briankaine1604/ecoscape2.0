import { useState } from 'react';

const HeaderState = () => {
  const [isSticking, setIsSticking] = useState(false);
  const [isSticking2, setIsSticking2] = useState(false);
  const [toggle, setToggle] = useState(false);

  const onClick = () => {
    setToggle((prev) => !prev);
  };

  return { isSticking, isSticking2, toggle, onClick, setIsSticking, setIsSticking2 };
};

export default HeaderState;
