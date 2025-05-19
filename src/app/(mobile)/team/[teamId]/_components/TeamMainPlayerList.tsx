import React from "react";
import PlayerListItem from "./PlayerListItem";

function TeamMainPlayerList() {
  return (
    <>
      <PlayerListItem
        size="small"
        playerId="123"
        name="홍길동"
        level={5}
        profileImg="https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png"
        position="가드"
        birthDate="1999-12-21"
        sex="FEMALE"
        gisu={1}
      />
      <PlayerListItem
        size="small"
        playerId="3123"
        name="홍길동"
        level={4}
        profileImg="https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png"
        position="가드"
        birthDate="2000-01-01"
        sex="FEMALE"
        gisu={1}
      />
      <PlayerListItem
        size="small"
        playerId="31523"
        name="홍길동"
        level={3}
        profileImg="https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png"
        position="가드"
        birthDate="2000-01-01"
        sex="MALE"
        gisu={2}
      />
      <PlayerListItem
        size="small"
        playerId="31273"
        name="홍길동"
        level={3}
        profileImg="https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png"
        position="가드"
        birthDate="2000-01-01"
        sex="MALE"
        gisu={3}
      />
      <PlayerListItem
        size="small"
        playerId="131273"
        name="홍길동"
        level={2}
        profileImg="https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png"
        position="센터"
        birthDate="2000-01-01"
        sex="MALE"
        gisu={3}
      />
      <PlayerListItem
        size="small"
        playerId="94"
        name="홍길동"
        level={0}
        profileImg="https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png"
        position="가드"
        birthDate="2000-01-01"
        sex="MALE"
        gisu={3}
      />
    </>
  );
}

export default TeamMainPlayerList;
