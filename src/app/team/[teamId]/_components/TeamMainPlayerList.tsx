import React from "react";
import PlayerListItem from "./TeamMainPlayerListItem";

function TeamMainPlayerList() {
  return (
    <>
      <PlayerListItem
        playerId="123"
        name="홍길동"
        level={5}
        profileImg="https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png"
        position="가드"
        birthDate="1999-12-21"
        gisu={1}
      />
      <PlayerListItem
        playerId="3123"
        name="홍길동"
        level={4}
        profileImg="https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png"
        position="가드"
        birthDate="2000-01-01"
        gisu={1}
      />
      <PlayerListItem
        playerId="31523"
        name="홍길동"
        level={3}
        profileImg="https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png"
        position="가드"
        birthDate="2000-01-01"
        gisu={2}
      />
      <PlayerListItem
        playerId="31273"
        name="홍길동"
        level={3}
        profileImg="https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png"
        position="가드"
        birthDate="2000-01-01"
        gisu={3}
      />
      <PlayerListItem
        playerId="131273"
        name="홍길동"
        level={2}
        profileImg="https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png"
        position="센터"
        birthDate="2000-01-01"
        gisu={3}
      />
      <PlayerListItem
        playerId="94"
        name="홍길동"
        level={0}
        profileImg="https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png"
        position="가드"
        birthDate="2000-01-01"
        gisu={3}
      />
    </>
  );
}

export default TeamMainPlayerList;
