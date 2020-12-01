import React, { useState } from 'react';
import { css } from '@emotion/core';

const Wave = () => {
  const [waves, setWaves] = useState(0);
  const label = `👋 ${waves || "No"} ${waves === 1 ? "wave" : "waves"}`

  return (
    <button css={css`
      background-color: rebeccapurple;
      border: none;
      color: #fff;
      font-size: 1.5rem;
    `} onClick={() => setWaves(waves + 1)}>{label}</button>
  )
};

export default Wave;