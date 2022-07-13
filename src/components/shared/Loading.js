import React from "react";
import styled from "styled-components";
// images
import loading from "../../assets/img/loading.svg";
const Loaded = styled.div`
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Loading = () => {
  return (
    <Loaded>
      <img src={loading} alt="loading" />
    </Loaded>
  );
};

export default Loading;
