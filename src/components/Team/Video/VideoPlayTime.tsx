import React from "react";
import styled from "@emotion/styled";

function VideoPlayTime() {
  return <Container>VideoPlayTime</Container>;
}

const Container = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
`;

export default VideoPlayTime;
