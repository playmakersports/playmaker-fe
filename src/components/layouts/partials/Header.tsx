import { useRouter } from "next/router";
import styled from "styled-components";
import { usePageTitle } from "@/hook/usePageTitle";
import Icons from "@/components/common/Icons";
// import LeftArrowHeader from "assets/icon/arrow/LeftArrowHeader.svg";

function Header() {
  const router = useRouter();
  const title = usePageTitle();

  return (
    <Wrapper>
      <button type="button" aria-label="뒤로가기" onClick={() => router.back()}>
        <Icons icon="fi-bs-arrow-left" size={20} color="gray1" />
      </button>
      <div className="page-title">{title}</div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  padding: 0 20px;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-title {
    font-weight: 400;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.gray1};
  }
`;

export default Header;
