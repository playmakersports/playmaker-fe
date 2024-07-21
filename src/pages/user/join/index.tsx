import React, { useState } from "react";
import styled from "@emotion/styled";

import { usePageTitle } from "@/hook/usePageTitle";
import { BaseContainer } from "@/components/common/Container";

import { CardCheckboxButton } from "@/components/common/CardButton";
import { FONTS } from "@/styles/common";
import Button from "@/components/common/Button";

function Join() {
  usePageTitle({ title: "회원가입" });
  const [termYn, setTermYn] = useState(false);

  return (
    <Container>
      <Term>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, corrupti dolores enim provident laudantium
        in doloribus quos amet velit quaerat. Dolor sint eligendi vitae repudiandae obcaecati magni voluptatem tempora
        qui? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, corrupti dolores enim provident
        laudantium in doloribus quos amet velit quaerat. Dolor sint eligendi vitae repudiandae obcaecati magni
        voluptatem tempora qui? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, corrupti dolores
        enim provident laudantium in doloribus quos amet velit quaerat. Dolor sint eligendi vitae repudiandae obcaecati
        magni voluptatem tempora qui? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, corrupti
        dolores enim provident laudantium in doloribus quos amet velit quaerat. Dolor sint eligendi vitae repudiandae
        obcaecati magni voluptatem tempora qui? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
        corrupti dolores enim provident laudantium in doloribus quos amet velit quaerat. Dolor sint eligendi vitae
        repudiandae obcaecati magni voluptatem tempora qui? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Incidunt, corrupti dolores enim provident laudantium in doloribus quos amet velit quaerat. Dolor sint eligendi
        vitae repudiandae obcaecati magni voluptatem tempora qui? Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Incidunt, corrupti dolores enim provident laudantium in doloribus quos amet velit quaerat. Dolor sint
        eligendi vitae repudiandae obcaecati magni voluptatem tempora qui? Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Incidunt, corrupti dolores enim provident laudantium in doloribus quos amet velit quaerat.
        Dolor sint eligendi vitae repudiandae obcaecati magni voluptatem tempora qui? Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Incidunt, corrupti dolores enim provident laudantium in doloribus quos amet velit
        quaerat. Dolor sint eligendi vitae repudiandae obcaecati magni voluptatem tempora qui? Lorem, ipsum dolor sit
        amet consectetur adipisicing elit. Incidunt, corrupti dolores enim provident laudantium in doloribus quos amet
        velit quaerat. Dolor sint eligendi vitae repudiandae obcaecati magni voluptatem tempora qui? Lorem, ipsum dolor
        sit amet consectetur adipisicing elit. Incidunt, corrupti dolores enim provident laudantium in doloribus quos
        amet velit quaerat. Dolor sint eligendi vitae repudiandae obcaecati magni voluptatem tempora qui? Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Incidunt, corrupti dolores enim provident laudantium in doloribus
        quos amet velit quaerat. Dolor sint eligendi vitae repudiandae obcaecati magni voluptatem tempora qui? Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Incidunt, corrupti dolores enim provident laudantium in
        doloribus quos amet velit quaerat. Dolor sint eligendi vitae repudiandae obcaecati magni voluptatem tempora qui?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, corrupti dolores enim provident laudantium
        in doloribus quos amet velit quaerat. Dolor sint eligendi vitae repudiandae obcaecati magni voluptatem tempora
        qui? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, corrupti dolores enim provident
        laudantium in doloribus quos amet velit quaerat. Dolor sint eligendi vitae repudiandae obcaecati magni
        voluptatem tempora qui? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, corrupti dolores
        enim provident laudantium in doloribus quos amet velit quaerat. Dolor sint eligendi vitae repudiandae obcaecati
        magni voluptatem tempora qui? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, corrupti
        dolores enim provident laudantium in doloribus quos amet velit quaerat. Dolor sint eligendi vitae repudiandae
        obcaecati magni voluptatem tempora qui? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
        corrupti dolores enim provident laudantium in doloribus quos amet velit quaerat. Dolor sint eligendi vitae
        repudiandae obcaecati magni voluptatem tempora qui? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Incidunt, corrupti dolores enim provident laudantium in doloribus quos amet velit quaerat. Dolor sint eligendi
        vitae repudiandae obcaecati magni voluptatem tempora qui? Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Incidunt, corrupti dolores enim provident laudantium in doloribus quos amet velit quaerat. Dolor sint
        eligendi vitae repudiandae obcaecati magni voluptatem tempora qui? Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Incidunt, corrupti dolores enim provident laudantium in doloribus quos amet velit quaerat.
        Dolor sint eligendi vitae repudiandae obcaecati magni voluptatem tempora qui? Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Incidunt, corrupti dolores enim provident laudantium in doloribus quos amet velit
        quaerat. Dolor sint eligendi vitae repudiandae obcaecati magni voluptatem tempora qui? Lorem, ipsum dolor sit
        amet consectetur adipisicing elit. Incidunt, corrupti dolores enim provident laudantium in doloribus quos amet
        velit quaerat. Dolor sint eligendi vitae repudiandae obcaecati magni voluptatem tempora qui? Lorem, ipsum dolor
        sit amet consectetur adipisicing elit. Incidunt, corrupti dolores enim provident laudantium in doloribus quos
        amet velit quaerat. Dolor sint eligendi vitae repudiandae obcaecati magni voluptatem tempora qui? Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Incidunt, corrupti dolores enim provident laudantium in doloribus
        quos amet velit quaerat. Dolor sint eligendi vitae repudiandae obcaecati magni voluptatem tempora qui? Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Incidunt, corrupti dolores enim provident laudantium in
        doloribus quos amet velit quaerat. Dolor sint eligendi vitae repudiandae obcaecati magni voluptatem tempora qui?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, corrupti dolores enim provident laudantium
        in doloribus quos amet velit quaerat. Dolor sint eligendi vitae repudiandae obcaecati magni voluptatem tempora
        qui? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, corrupti dolores enim provident
        laudantium in doloribus quos amet velit quaerat. Dolor sint eligendi vitae repudiandae obcaecati magni
        voluptatem tempora qui?
      </Term>
      <Bottom>
        <div className="card-button-wrapper">
          <CardCheckboxButton
            id="termYn"
            cardTitle="약관에 동의합니다"
            cardDescription="개인정보처리방침, 서비스 이용약관"
            required={true}
            checked={termYn}
            onChange={(e) => {
              setTermYn(e.target.checked);
            }}
          />
          <CardCheckboxButton
            id="univTeamYn"
            cardTitle="혹시 대학리그 팀 소속이신가요"
            cardDescription={`대학리그를 위해 가입한다면 선택해주세요.\n재학증명서를 필수로 등록해야 해요.`}
          />
        </div>
        <Button
          type="button"
          mode="MAIN"
          disabled={!termYn}
          onClick={() => {
            console.log("");
          }}
        >
          다음
        </Button>
      </Bottom>
    </Container>
  );
}

const Container = styled(BaseContainer)`
  display: flex;
  height: calc(100vh - var(--safe-area-top) - 1px);
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
  overflow: hidden;
  scroll-behavior: none;
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* padding: 12px 16px calc(20px + env(safe-area-inset-bottom)); */
  padding: 12px 0 env(safe-area-inset-bottom);
  gap: 16px;
  background-color: var(--background);

  .card-button-wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  label:has(#termYn) {
    order: 2;
    z-index: 1;
    box-shadow: 0 0 10px 6px var(--box-shadow);
  }
  label:has(#univTeamYn) {
    order: 1;
    margin-bottom: -60px;
    scale: 0.9;
    opacity: 0.8;
    z-index: 0;
  }

  label:has(#termYn:checked) {
    order: 1;
    margin-bottom: -60px;
    scale: 0.9;
    opacity: 0.8;
    z-index: 0;
    & + label {
      z-index: 1;
      order: 2;
      margin-bottom: 0;
      scale: 1;
      opacity: 1;
    }
  }

  label {
    transition: all 0.3s;
  }
`;

const Term = styled.div`
  overflow-y: scroll;
  ${FONTS.MD2};
`;

export default Join;
