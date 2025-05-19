import "@/styles/editor.css";
import { articleDetailHeader } from "../_components/teamBoard.css";
import ArticleReply from "../_components/ArticleReply";

function ArticleId() {
  return (
    <div style={{ padding: "0 16px" }}>
      <div className={articleDetailHeader.container}>
        <h3 className={articleDetailHeader.title}>5월 정기 경기 일정 알려드립니다.</h3>
        <div className={articleDetailHeader.info}>
          <span className="writer">홍길동</span>
          <p className="right">
            <span className="create-at">2025-04-01</span>
            <span className="view">조회 40</span>
          </p>
        </div>
      </div>
      <article
        id="tiptap_Editor"
        dangerouslySetInnerHTML={{
          __html: MOCK.replace(/<(iframe|script)[\s\S]*?<\/\1>/gi, ""),
        }}
      />
      <ArticleReply />
    </div>
  );
}

const MOCK = ` <p>안녕하세요 손수철입니다.</p>
  <p>이번주 경기 일정을 알려드리겠습니다.</p>
  <p></p>
  <blockquote>
    <h3>
      <strong>일정</strong>
    </h3>
  </blockquote>
  <p>
    2024년
    <strong>
      <mark>5월 15일</mark>
    </strong>
    16:00
  </p>
  <p>2024년 5월 25일 21:00</p>
  <p></p>
  <ul>
    <li>
      <p>하나</p>
    </li>
  </ul>
  <p>늦지 말고 모두 참석해주세요.</p>
  <p></p>
  <script>document.query</script>
  <iframe>이상한 코드</iframe>
  <p>감사합니다.</p>
  <p>손수철 드림.</p>`;

export default ArticleId;
