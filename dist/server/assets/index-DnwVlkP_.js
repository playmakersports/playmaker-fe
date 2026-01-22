import { jsxs, jsx } from "react/jsx-runtime";
import { useFormContext, useForm, FormProvider } from "react-hook-form";
import { useRouter } from "@tanstack/react-router";
import { S as StageWrapper, u as useFunnel } from "./StageWrapper-DCIdQPz_.js";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import { u as usePopup } from "./PopupProvider-CCXZDelm.js";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { u as useModal } from "./useModal--yzWVOVY.js";
import { F as FONTS } from "./common-6ceLbjxn.js";
import { s as stageFormWrapper, a as stageWrapper, b as stageFavSportsGrid, c as stageWelcomeContainer, w as welcomeTextContainer, d as welcomeTextItem, e as welcomeTextFadeIn } from "./stage.css-BcVhTwyI.js";
import { I as InputCheckbox } from "./SelectInput-Dl1BIb6a.js";
import { R as RightArrowIcon } from "./RightArrow-DXzZnMRc.js";
import { B as BasicInput } from "./BaseInput-Bx50CJaq.js";
import { I as InputWrapper } from "./InputWrapper-CgYCSwII.js";
import { M as MainTab } from "./MainTab-DOXli7NZ.js";
import { D as DateSwiperSelect } from "./DateSwiperSelect-Bt0W0vbk.js";
import clsx from "clsx";
import { u as useToast } from "./useToast-hwetiz13.js";
import { u as useGet, a as usePost } from "./query-Ciubt76c.js";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { L as Loading } from "./Loading-BabSRuVM.js";
import { C as Chip } from "./Chip-Bq9i_bIn.js";
import { c as commonAPI, a as authAPI } from "./authToken-Bx9YTtw3.js";
import { L as LocationContainer, a as LocationChildList } from "./location-styled-DzexRJKn.js";
import { c as convertWebpImage } from "./webp-VRlAmM_r.js";
import { T as TextArea } from "./TextArea-C-rWbjLd.js";
import { P as PersonIcon } from "./Person-BRhULpHA.js";
import { P as PlusIcon } from "./Plus-CBBY8JMW.js";
import { atom, useSetAtom } from "jotai";
import { S as SUPPORT_SPORTS } from "./SPORTS-C8KNL8RQ.js";
import { B as Button } from "./Button-cLlpCM0x.js";
import { c as colors } from "./color.css-BLEreRIo.js";
import { e as flexColumnGap8, a as flexColumnGap20, g as flexColumnGap10 } from "./container.css-C2ezn6CH.js";
import { D as DropdownInput } from "./DropdownInput-18dVrCGm.js";
import "./Badge-CVtyNCaL.js";
import "./Portal-D4P9dmtA.js";
import "react-dom";
import "@vanilla-extract/css";
import "./Check-xgghRidd.js";
import "./Wrapper-DpW65hF8.js";
import "./Close20-w_89MMCP.js";
import "./Search-DrxoJQ2v.js";
import "./container.css-DZr6lpKA.js";
import "swiper/react";
/* empty css                */
import "date-fns";
import "sonner";
import "./AlertFilled-JvwFT9H1.js";
import "@tanstack/react-query";
import "cookies-next";
import "axios";
import "@number-flow/react";
import "@floating-ui/react";
import "./container-B0RuEqwG.js";
import "./DownArrow-CJuEPh4T.js";
const SERVICE_TERMS = `
<div><h3>제1조(목적)</h3>
<p>플레이어메이커 서비스 이용약관은 포이프랩(이하 "회사"라 합니다)이 제공하는 플레이어메이커 서비스 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임 사항 등을 규정함을 목적으로 합니다.</p>

<h3>제2조(정의)</h3>

<ol>

  <li>이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</li>

  <ol>

    <li>"서비스"란, 회사가 제공하는 모든 서비스 및 기능을 말합니다.</li>

    <li>"이용자"란, 이 약관에 따라 서비스를 이용하는 회원 및 비회원을 말합니다.</li>

    <li>"회원"이란, 서비스에 회원등록을 하고 서비스를 이용하는 자를 말합니다.</li>

    <li>"비회원"이란, 서비스에 회원등록을 하지 않고 서비스를 이용하는 자를 말합니다.</li>

    <li>"게시물"이란, 서비스에 게재된 문자, 사진, 영상, 첨부파일, 광고 등을 말합니다.</li>

    <li>”스포츠팀” 혹은 “팀” 이란, 서비스에서 스포츠를 함께 하는 동아리 구성 단위를 말합니다.</li>

    <li>”경기” 혹은 “교류전” 이란, 서비스에 등록된 두 스포츠팀이 소속 팀에서 참가자를 선발하여 지정된 스포츠 종목으로 승부를 겨루고 이를 관리하는 서비스를 말합니다.</li>

    <li>"커뮤니티"란, 서비스에서 제공하는 피드 및 스포츠팀에서 게시물을 게시할 수 있는 공간을 말합니다.</li>

    <li>"이용 기록"이란, 이용자가 서비스를 이용하면서 발생한 팀의 일정, 대회 관련한 기록, 경기 및 교류전 관련한 기록, 팀 및 선수 활동 정보 등을 말합니다.</li>

    <li>"로그 기록"이란, 이용자가 서비스를 이용하면서 자동으로 생성된 IP 주소, 접속 시간 등을 말합니다.</li>

    <li>"기기 정보"란, 이용자의 통신 기기에서 수집된 유저 에이전트, ADID 등을 말합니다.</li>

    <li>"계정"이란, 이용계약을 통해 생성된 회원의 고유 아이디와 이에 수반하는 정보를 말합니다.</li>

    <li>"서비스 내부 알림 수단"이란, 팝업, 알림, 1:1 대화, 내 정보 메뉴 등을 말합니다.</li>

    <li>"연락처"란, 회원가입, 본인 인증, 문의 창구 등을 통해 수집된 이용자의 이메일, 휴대전화 번호 등을 의미합니다.</li>

    <li>"관련법"이란, 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 전기통신사업법, 개인정보보호법 등 관련 있는 국내 법령을 말합니다.</li>

    <li>"본인 인증"이란, 아이핀, 휴대전화 번호 등을 이용한 본인 확인 절차를 말합니다.</li>

    <li>”재학 인증" 혹은 "재학 증명"이란, 학생증, 학교 웹메일, 증명서 등을 이용한 대학생 여부 및 학적 확인 절차를 말합니다.</li>

  </ol>

  <li>제1항에서 정의되지 않은 이 약관 내 용어의 의미는 일반적인 이용관행에 의합니다.</li>

</ol>

 

<h3>제3조(약관 등의 명시와 설명 및 개정)</h3>

<ol>

  <li>회사는 이 약관을 서비스 초기화면의 하단, 회원가입 화면 및 “마이 페이지” 내의 설정 메뉴 등에 게시하거나 기타의 방법으로 회원에게 공지합니다.</li>

  <li>회사는 필요하다고 인정되는 경우, 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</li>

  <li>회사는 약관을 개정할 경우, 적용 일자 및 개정 사유를 명시하여 현행약관과 함께 개정약관 적용 일자 7일 전부터 "공지사항"을 통해 공지합니다. 다만, 개정 내용이 회원의 권리 및 의무에 중대한 영향을 미치는 경우에는 적용 일자 30일 전부터 회원의 연락처 또는 서비스 내부 알림 수단으로 개별 공지합니다.</li>

  <li>회원은 개정 약관에 동의하지 않을 경우, 제7조(서비스 이용계약의 종료)에 따른 회원 탈퇴 방법으로 거부 의사를 표시할 수 있습니다. 단, 회사가 약관 개정 시 "개정 약관의 적용 일자까지 회원이 거부 의사를 표시하지 아니할 경우 약관의 개정에 동의한 것으로 간주한다"는 내용을 고지하였음에도 불구하고 회원이 약관 개정에 대한 거부 의사를 표시하지 아니하면, 회사는 적용 일자부로 개정 약관에 동의한 것으로 간주합니다.</li>

  <li>회원은 약관 일부분만을 동의 또는 거부할 수 없습니다.</li>

  <li>회사는 제1항부터 제4항까지를 준수하였음에도 불구하고 회원이 약관 개정 사실을 알지 못함으로써 발생한 피해에 대해 회사의 고의 또는 중대한 과실이 없는 한 어떠한 책임도 지지 않습니다.</li>

</ol>

 

<h3>제4조(서비스의 제공)</h3>

<ol>

  <li>회사는 다음 서비스를 제공합니다.</li>

  <ol>

    <li>스포츠팀 생성 및 팀 운영과 관련한 일정, 경기 기록 등 편의 서비스</li>

    <li>스포츠팀 단위의 폐쇄형 커뮤니티 서비스</li>

    <li>스포츠를 주제로 한 공개형 커뮤니티 서비스</li>

    <li>스포츠 종목별 대회 및 경기, 교류전 참가, 운영 서비스</li>

    <li>할인, 이벤트, 프로모션, 광고 정보 제공 서비스</li>

    <li>다른 회사 및 단체와의 제휴나 협력을 통해 제공하는 서비스</li>

    <li>기타 회사가 정하는 서비스</li>

  </ol>

  <li>플레이어메이커는 스포츠팀에서 활동하는 이용자(이하 ‘일반 이용자’) 및 학생증, 학교 웹메일, 증명서 등을 통해 해당 대학교의 학부 재학생 및 졸업생 또는 해당연도 입학생으로 인증받아 대학(교) 소속으로 활동하는 이용자(이하 ‘대학생 이용자’)에게 스포츠팀을 운영할 수 있도록 하는 솔루션 및 폐쇄형 커뮤니티를 제공하며, 일반 이용자와 대학생 이용자는 소속된 팀 뿐아니라 대회 및 교류전, 공개형 커뮤니티에서 활동할 수 있습니다.</li>

  <li>회사는 운영상, 기술상의 필요에 따라 제공하고 있는 서비스를 변경할 수 있습니다.</li>

  <li>회사는 이용자의 개인정보 및 서비스 이용 기록에 따라 서비스 이용에 차이를 둘 수 있습니다.</li>

  <li>회사는 설비의 보수, 교체, 점검 또는 기간통신사업자의 서비스 중지, 인터넷 장애 등의 사유로 인해 일시적으로 서비스 제공이 어려울 경우, 통보 없이 일시적으로 서비스 제공을 중단할 수 있습니다.</li>

  <li>회사는 천재지변, 전쟁, 경영 악화 등 불가항력적인 사유로 인해 서비스를 더 이상 제공하기 어려울 경우, 통보 없이 서비스 제공을 영구적으로 중단할 수 있습니다.</li>

  <li>회사는 제4항부터 제6항까지 및 다음 내용으로 인해 발생한 피해에 대해 회사의 고의 또는 중대한 과실이 없는 한 어떠한 책임도 지지 않습니다.</li>

  <ol>

    <li>모든 서비스, 게시물, 이용 기록의 진본성, 무결성, 신뢰성, 이용가능성의 보장</li>

    <li>서비스 이용 중 타인과 상호 간에 합의한 내용</li>

    <li>게시물, 광고의 버튼, 하이퍼링크 등 외부로 연결된 서비스와 같이 회사가 제공하지 않은 서비스에서 발생한 피해</li>

    <li>회사가 관련 법령에 따라 요구되는 보호조치를 이행하였음에도 불구하고, 네트워크의 안정성을 해치는 행위 또는 악성 프로그램 등에 의하여 발생하는 예기치 못한 이용자의 피해</li>

    <li>이용자의 귀책 사유 또는 회사의 귀책 사유가 아닌 사유로 발생한 이용자의 피해</li>

  </ol>

</ol>

 

<h3>제5조(서비스 이용계약의 성립)</h3>

<ol>

  <li>회사와 회원의 서비스 이용계약은 서비스를 이용하고자 하는 자(이하 "가입 신청자"라고 합니다)가 서비스 내부의 회원가입 양식에 따라 필요한 회원정보를 기입하고, 이 약관, 개인정보 수집 및 이용 동의, 커뮤니티 이용규칙 등에 명시적인 동의를 한 후, 신청한 회원가입 의사 표시(이하 "이용신청"이라 합니다)를 회사가 승낙함으로써 체결됩니다.</li>
  <li>제1항의 승낙은 신청순서에 따라 순차적으로 처리되며, 회원가입의 성립 시기는 회사의 회원가입이 완료되었음을 알리는 승낙의 통지가 회원에게 도달하거나, 이에 준하는 권한이 회원에게 부여되는 시점으로 합니다.</li>
  <li>회사는 만 14세 미만 이용자의 이용신청을 금지하고 있습니다. 가입 신청자는 이용신청 시 만 14세 이상에 해당한다는 항목에 명시적인 동의를 함으로써 회원은 만 14세 이상임을 진술하고 보증합니다.</li>
  <li>회사는 일반 이용자에게 특정 연령 및 지역, 성별 등을 대상으로 하는 스포츠 대회의 참가 조건을 충족하는 지를 확인하기 위한 목적으로 대회 주최 혹은 주관사의 요청에 따라 추가적인 개인정보를 요청할 수 있습니다.</li>
  <li>회사는 대학생 이용자에게 부정사용방지 및 대학생 대상의 스포츠 대회 참가 조건을 충족하는 지를 확인하기 위한 목적으로 학교 인증 및 대회 주최 혹은 주관사가 요구하는 추가적인 개인정보를 요청할 수 있습니다.</li>
  <li>회사는 가입 신청자의 이용신청에 있어 다음 각 호에 해당하는 경우, 이용신청을 영구적으로 승낙하지 않거나 유보할 수 있습니다.</li>

  <ol>

    <li>회사가 정한 이용신청 요건에 충족되지 않을 경우</li>

    <li>가입 신청자가 만 14세 미만인 경우</li>

    <li>제12조(금지행위)에 해당하는 행위를 하거나 해당하는 행위를 했던 이력이 있을 경우</li>

    <li>회사의 기술 및 설비 상 서비스를 제공할 수 없는 경우</li>

    <li>기타 회사가 합리적인 판단에 의하여 필요하다고 인정하는 경우</li>

  </ol>

  <li>회사는 제3항부터 제5항까지로 인해 발생한 피해에 대해 회사의 고의 또는 중대한 과실이 없는 한 어떠한 책임도 지지 않습니다.</li>

</ol>

 

<h3>제6조(개인정보의 관리 및 보호)</h3>

<ol>

  <li>회사는 관계 법령이 정하는 바에 따라 회원의 개인정보를 보호하기 위해 노력합니다. 개인정보의 보호 및 이용에 관해서는 관련 법령 및 회사의 개인정보 처리방침을 따릅니다.</li>

  <li>회원은 개인정보에 변동이 있을 경우, 즉시 "내 정보" 메뉴 및 문의 창구를 이용하여 정보를 최신화해야 합니다.</li>

  <li>회원의 아이디, 비밀번호(본 서비스와는 별도의 제3의 외부 서비스(소셜 로그인)를 통해 가입 및 로그인했을 경우엔 해당하는 외부 서비스에 접근하기 위한 관련 정보를 포함), 이메일, 대학생 정보 등 모든 개인정보의 관리책임은 본인에게 있으므로, 타인에게 양도 및 대여할 수 없으며 유출되지 않도록 관리해야 합니다. 만약 본인의 아이디 및 비밀번호를 타인이 사용하고 있음을 인지했을 경우, 즉시 문의 창구로 알려야 하고, 안내가 있는 경우 이에 따라야 합니다.</li>

  <li>회사는 회원이 제2항과 제3항을 이행하지 않아 발생한 피해에 대해, 회사의 고의 또는 중대한 과실이 없는 한 어떠한 책임도 지지 않습니다.</li>

</ol>

 

<h3>제7조(서비스 이용계약의 종료)</h3>

<ol>

  <li>회원은 언제든지 본인의 계정으로 로그인한 뒤 서비스 내부의 "탈퇴하기" 버튼을 누르는 방법으로 탈퇴를 요청할 수 있으며, 그 외 문의 창구 등을 통한 탈퇴 요청은 처리되지 않습니다. 회사는 해당 요청을 확인한 후 탈퇴를 처리합니다.</li>

  <li>회원은 관리하고 있는 스포츠팀이 있을 경우, 이를 타인에게 양도하거나 삭제하기 전까지 탈퇴를 할 수 없습니다.</li>

  <li>탈퇴 처리가 완료 되었더라도, 회원이 게시한 게시물은 삭제되지 않습니다.</li>

  <li>회사는 회원이 제12조(금지행위)에 해당하는 행위를 하거나 해당하는 행위를 했던 이력이 있을 경우, 제13조(서비스 제공의 중단 및 서비스 이용계약의 해지)에 따라 서비스 제공을 중단하거나 서비스 이용계약을 해지할 수 있습니다.</li>

  <li>회사는 제1항부터 제4항까지로 인해 발생한 피해에 대해 회사의 고의 또는 중대한 과실이 없는 한 어떠한 책임도 지지 않습니다.</li>

</ol>

 

<h3>제8조(회원에 대한 통지)</h3>

<ol>

  <li>회사가 회원에 대한 통지가 필요한 경우, 회원의 연락처 또는 서비스 내부 알림 수단을 이용할 수 있습니다.</li>

  <li>회사는 회원 전체에 대한 통지의 경우 공지사항에 게시함으로써 전 항의 통지에 갈음할 수 있습니다. 단, 회원의 권리 및 의무에 중대한 영향을 미치는 사항에 대해서는 1항에 따릅니다.</li>

  <li>회사가 회원에게 "30일 이내에 의사를 표시하지 아니할 경우 동의한 것으로 간주한다"는 내용을 고지하였음에도 불구하고 회원이 의사를 표시하지 아니하면, 회사는 통지 내용에 동의한 것으로 간주합니다.</li>

</ol>

 

<h3>제9조(저작권의 귀속)</h3>

<ol>

  <li>본 서비스 및 회사는 유용하고 편리한 서비스를 제공하기 위해, 각 스포츠팀의 팀 정보 및 일정, 각 팀원의 운동 관련 통계 및 수상 이력, 대회 및 경기 혹은 교류전의 기록 및 결과와 관련한 정보를 직접 설계 및 운영하고 있는 데이터베이스 제작자에 해당합니다. 회사는 저작권법에 따라 데이터베이스 제작자는 복제권 및 전송권을 포함한 데이터베이스 전부에 대한 권리를 가지고 있으며, 이는 법률에 따라 보호를 받는 대상입니다. 그러므로 이용자는 데이터베이스 제작자인 회사의 승인 없이 데이터베이스의 전부 또는 일부를 복제·배포·방송 또는 전송할 수 없습니다.</li>

  <li>회사가 작성한 게시물에 대한 권리는 회사에 귀속되며, 회원이 작성한 게시물에 대한 권리는 회원에게 귀속됩니다. 다만 회원의 서비스 이용 과정에서 데이터베이스 상에 기록된 대회 및 경기 혹은 교류전의 기록 및 결과나 스포츠팀 및 이용자 개인의 대회 실적 및 수상 이력, 운동과 관련한 일정 및 영상 기록은 서비스 품질 향상 및 고도화를 위해 회사의 자산으로서 데이터 분석 및 인공지능의 학습 자료를 포함한 회사가 정한 방식으로 제한적으로 활용될 수 있습니다.</li>

  <li>회원이 서비스에 게시물을 작성하는 경우 해당 게시물은 서비스에 노출될 수 있고 필요한 범위 내에서 사용, 저장, 복제, 수정, 공중송신, 전시, 배포 등의 방식으로 해당 게시물을 이용할 수 있도록 허락하는 전 세계적인 라이선스를 회사에 제공하게 됩니다. 이 경우, 회사는 저작권법을 준수하며 회원은 언제든지 문의 창구 및 서비스 내부의 관리 기능이 제공되는 경우에는 해당 관리 기능을 이용하여 가능한 범위에 한해 해당 게시물에 대한 삭제, 수정, 비공개 등의 조치를 취할 수 있습니다.</li>

  <li>회사는 제3항 이외의 방법으로 회원의 게시물을 이용할 경우, 해당 회원으로부터 개별적이고 명시적인 동의를 받아야 합니다.</li>

</ol>

 

<h3>제10조(게시물의 삭제 및 접근 차단)</h3>

<ol>

  <li>누구든지 게시물로 인해 사생활 침해나 명예훼손 등 권리가 침해된 경우 회사에 해당 게시물의 삭제 또는 반박내용의 게재를 요청할 수 있습니다. 이 때 회사는 해당 게시물을 삭제할 수 있으며, 만약 권리 침해 여부가 불분명하거나 당사자 간 다툼이 예상될 경우에는 해당 게시물에 대한 접근을 30일간 임시적으로 차단하는 조치를 취할 수 있습니다.</li>

  <li>회사가 제1항에 따라 회원의 게시물을 삭제하거나 접근을 임시적으로 차단하는 경우, 해당 게시물이 작성된 커뮤니티에 필요한 조치를 한 사실을 명시하고, 불가능한 사유가 없을 경우 이를 요청한 자와 해당 게시물을 작성한 회원에게 그 사실을 통지합니다.</li>

</ol>

 

<h3>제11조(광고의 게재 및 발신)</h3>

<ol>

  <li>회사는 서비스의 제공을 위해 서비스 내부에 광고를 게재할 수 있습니다.</li>

  <li>회사는 이용자의 이용 기록을 활용한 광고를 게재할 수 있습니다.</li>

  <li>회사는 회원이 광고성 정보 수신에 명시적으로 동의한 경우, 회원이 동의한 수단을 통해 광고성 정보를 발신할 수 있습니다.</li>

  <li>회사는 광고 게재 및 동의된 광고성 정보의 발신으로 인해 발생한 피해에 대해 회사의 고의 또는 중대한 과실이 없는 한 어떠한 책임도 지지 않습니다.</li>

</ol>

 

<h3>제12조(금지행위)</h3>

<ol>

  <li>이용자는 다음과 같은 행위를 해서는 안됩니다.</li>

  <ol>

    <li>성적 도의관념에 반하는 행위</li>

    <ol>

      <li>정보통신망 이용촉진 및 정보보호 등에 관한 법률에 따른 유해정보 유통 행위</li>

      <li>전기통신사업법에 따른 불법촬영물등 유통 행위</li>

      <li>청소년보호법에 따른 청소년유해매체물 유통 행위</li>

      <li>방송통신심의위원회의 정보통신에 관한 심의규정에 따른 심의기준의 성적 도의관념에 반하는 행위</li>

      <li>커뮤니티 이용규칙 금지행위에 따른 불건전 만남, 유흥, 성매매 등 내용 유통 행위</li>

    </ol>

    <li>홍보/판매 행위</li>

    <ol>

      <li>이 약관이 적용되는 서비스 및 기능과 동일하거나 유사한 서비스 및 기능에 대한 직·간접적 홍보 행위</li>

      <li>서비스, 브랜드, 사이트, 애플리케이션, 사업체, 단체 등을 알리거나 가입, 방문을 유도하기 위한 직·간접적 홍보 행위</li>

      <li>계정 판매 및 공유, 대리 게시, 서포터즈 등을 통해 여러 스포츠팀에 다발적으로 가입 및 유사한 주제에 대한 직·간접적 홍보 행위</li>

      <li>비상업적 목적의 일상 생활과 관련된 중고 품목 이외의 품목 등 커뮤니티 이용규칙 금지행위에 따른 홍보 및 판매 행위</li>

    </ol>

    <li>개인정보 또는 계정 기만, 침해, 공유 행위</li>

    <ol>

      <li>개인정보를 허위, 누락, 오기, 도용하여 작성하는 행위</li>

      <li>타인의 개인정보 및 계정을 수집, 저장, 공개, 이용하는 행위</li>

      <li>자신과 타인의 개인정보를 제3자에게 공개, 양도, 승계하는 행위</li>

      <li>다중 계정을 생성 및 이용하는 행위</li>

      <li>자신의 계정을 이용하여 타인의 요청을 이행하는 행위</li>

    </ol>

    <li>시스템 부정행위</li>

    <ol>

      <li>특정 대학교의 학부 재학생 및 졸업생이 아닌 이용자가 해당 대학교의 학부 재학생 및 졸업생인 것처럼 기만하여 서비스를 이용하는 행위</li>

      <li>프로그램, 스크립트, 봇을 이용한 서비스 접근 등 사람이 아닌 컴퓨팅 시스템을 통한 서비스 접근 행위</li>

      <li>API 직접 호출, 유저 에이전트 조작, 패킷 캡처, 비정상적인 반복 조회 및 요청 등 허가하지 않은 방식의 서비스 이용 행위</li>

      <li>회사의 모든 재산에 대한 침해 행위</li>

    </ol>

    <li>업무 방해 행위</li>

    <ol>

      <li>서비스 관리자 또는 이에 준하는 자격을 허가 없이 취득하여 권한을 행사하거나, 사칭하여 허위의 정보를 발설하는 행위</li>

      <li>회사 및 타인의 명예를 훼손하거나 기타 업무를 방해하는 행위</li>

      <li>서비스 내부 정보 일체를 허가 없이 이용, 변조, 삭제 및 외부로 유출하는 행위</li>

    </ol>

    <li>기타 현행법에 어긋나거나 부적절하다고 판단되는 행위</li>

  </ol>

  <li>이용자는 제1항에 기재된 내용 외에 이 약관과 커뮤니티 이용규칙에서 규정한 내용에 반하는 행위를 해서는 안됩니다.</li>

  <li>이용자가 제1항에 해당하는 행위를 할 경우, 회사는 이 약관 제13조(서비스 제공의 중단 및 서비스 이용계약의 해지)에 따라 서비스 제공을 중단하거나 서비스 이용계약을 해지할 수 있습니다.</li>

</ol>

 

<h3>제13조(서비스 제공의 중단 및 서비스 이용계약의 해지)</h3>

<ol>

  <li>이용자가 이 약관 및 커뮤니티 이용규칙에서 이 조항 적용이 명시된 금지행위 및 이에 준하는 행위를 할 경우, 회사는 서비스 보호를 위해 다음과 같은 조치를 최대 영구적으로 강제적으로 취할 수 있습니다. 해당 조치는 서비스 보호를 위해 불가피하다고 판단될 경우, 회사가 제공하는 모든 서비스의 동일인으로 확인되는 모든 계정에 일괄적으로 적용될 수 있습니다.</li>

  <ol>

    <li>회원의 서비스 이용 권한, 자격, 혜택 제한 및 회수</li>

    <li>회원과 체결된 이용계약의 해지</li>

    <li>회원가입 및 본인 인증</li>

    <li>대학생 이용자의 경우, 학교 인증 거부</li>

    <li>회원의 커뮤니티, 게시물, 닉네임, 프로필 사진, 이용 기록을 삭제, 중단, 수정, 변경</li>

    <li>그 외 서비스의 정상적인 운영을 위해 회사가 필요하다고 판단되는 조치</li>

  </ol>

  <li>회사는 서비스 제공 중단 및 서비스 이용계약 해지 시, 회원의 연락처 또는 서비스 내부 알림 수단을 통하여 그 사실을 사유와 함께 개별 통지합니다. 회원은 해당 통지를 받은 날로부터 7일 이내에 문의 창구로 이의를 제기할 수 있습니다.</li>

  <li>회사는 이용자의 귀책 사유로 인한 서비스 제공 중단 및 서비스 이용계약의 해지로 인해 발생한 피해에 대해 회사의 고의 또는 중대한 과실이 없는 한 어떠한 책임도 지지 않습니다.</li>

</ol>

 

<h3>제14조(재판권 및 준거법)</h3>

<ol>

  <li>회사와 이용자 간에 발생한 분쟁에 관한 소송은 민사소송법상의 관할 법원에 제소합니다.</li>

  <li>회사와 이용자 간에 제기된 소송에는 대한민국 법을 준거법으로 합니다.</li>

</ol>

 

<h3>제15조(기타)</h3>

<ol>

  <li>이 약관은 2025년 1월 20일에 개정되었습니다.</li>

  <li>이 약관에도 불구하고, 회사와 이용자가 이 약관의 내용과 다르게 합의한 사항이 있는 경우에는 해당 내용을 우선으로 합니다</li>

  <li>회사는 필요한 경우 약관의 하위 규정을 정할 수 있으며, 이 약관과 하위 규정이 상충하는 경우에는 이 약관의 내용이 우선 적용됩니다.</li>

  <li>이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 관련법 또는 관례에 따릅니다.</li>

</ol>
</div>`;
const TERMS_LIST = [
  { termName: "서비스 이용약관", required: true, termId: "required1" },
  { termName: "개인정보 수집 및 활용", required: true, termId: "required2" },
  { termName: "이벤트 및 마케팅 정보 수신", required: false, termId: "event1" }
];
function Stage1({ setStep }) {
  const { ModalComponents, showModal } = useModal();
  const { register, watch, getValues, setValue } = useFormContext();
  const popup = usePopup();
  const [selectedTerm, setSelectedTerm] = useState("");
  const [allChecked, setAllChecked] = useState(false);
  const handleAllChecked = (event) => {
    const isChecked = event.target.checked;
    setAllChecked(isChecked);
    setValue("required1", isChecked);
    setValue("required2", isChecked);
    setValue("event1", isChecked);
  };
  useEffect(() => {
    const isEveryChecked = [getValues("required1"), getValues("required2"), getValues("event1")].every((v) => v);
    setAllChecked(isEveryChecked);
  }, [watch()]);
  const handleNextStep = () => {
    const isEveryChecked = [getValues("required1"), getValues("required2")].every((v) => v);
    if (!isEveryChecked) {
      popup?.alert("필수 약관에 동의하셔야 가입할 수 있어요.", {
        showIcon: true,
        title: "약관 동의"
      });
      return;
    }
    setStep("Stage2");
  };
  return /* @__PURE__ */ jsxs(StageWrapper, { onClickNext: handleNextStep, start: true, length: 5, current: 1, children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: stageFormWrapper,
        style: {
          justifyContent: "space-between"
        },
        children: [
          /* @__PURE__ */ jsxs("h3", { className: stageWrapper.title, children: [
            "플메에 오신 것을 환영합니다",
            /* @__PURE__ */ jsx("br", {}),
            "약관에 동의해 주세요"
          ] }),
          /* @__PURE__ */ jsxs(Agreement, { children: [
            /* @__PURE__ */ jsxs(AllCheck, { children: [
              /* @__PURE__ */ jsx(InputCheckbox, { id: "allChecked", size: "LARGE", checked: allChecked, onChange: handleAllChecked }),
              /* @__PURE__ */ jsx("label", { htmlFor: "allChecked", children: "약관 전체 동의" })
            ] }),
            /* @__PURE__ */ jsx(TermList, { children: TERMS_LIST.map((term) => /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(InputCheckbox, { size: "MEDIUM", id: term.termId, ...register(term.termId) }),
                /* @__PURE__ */ jsxs("label", { htmlFor: term.termId, children: [
                  "[",
                  term.required ? "필수" : "선택",
                  "] ",
                  term.termName
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                TermView,
                {
                  type: "button",
                  "aria-label": "해당 약관 내용을 자세히",
                  onClick: () => {
                    showModal();
                    setSelectedTerm(term.termId);
                  },
                  children: /* @__PURE__ */ jsx(RightArrowIcon, {})
                }
              )
            ] }, term.termId)) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      ModalComponents,
      {
        draggable: "bar",
        title: TERMS_LIST.find((v) => v.termId === selectedTerm)?.termName,
        buttons: [
          {
            mode: "primary",
            fillType: "light",
            name: "닫기",
            onClick: (close) => {
              close();
            }
          },
          {
            flex: 2,
            mode: "primary",
            name: "위 약관에 동의",
            onClick: (close) => {
              setValue(selectedTerm, true);
              close();
            }
          }
        ],
        children: /* @__PURE__ */ jsx(TermContents, { children: /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: SERVICE_TERMS } }) })
      }
    )
  ] });
}
const Agreement = styled.div`
  display: flex;
  margin-bottom: 28px;
  flex-direction: column;
  gap: 20px;
`;
const AllCheck = styled.div`
  display: inline-flex;
  padding-bottom: 20px;
  align-items: center;
  border-bottom: 1px solid var(--gray200);
  gap: 10px;

  label {
    cursor: pointer;
    user-select: none;
    width: 100%;
    color: var(--gray900);
    ${FONTS.body3("medium")};
  }
`;
const TermList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;

  li {
    display: flex;
    justify-content: space-between;
    padding: 6px 0;
    color: var(--gray700);
    ${FONTS.body4("regular")};

    & > div {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
`;
const TermView = styled.button`
  width: 24px;
  height: 24px;
  svg {
    width: 100%;
    height: 100%;
    fill: var(--gray400);
  }
`;
const TermContents = styled.div`
  user-select: none;
  padding: 0 12px 0 4px;
  overflow-y: auto;
  height: 60vh;
  color: var(--gray800);
  font-size: 1.3rem;

  h3 {
    font-size: 1.4rem;
    padding: 8px 0 4px;
  }
  ol {
    & > li {
      &::before {
        content: "•";
        margin-right: 4px;
      }
    }
    & > ol {
      padding-left: 8px;
    }
  }
`;
function Stage2({ setStep }) {
  const {
    register,
    setValue,
    watch,
    formState: { isValid }
  } = useFormContext();
  const handleSexKey = (value) => {
    setValue("sexKey", value);
  };
  const handlePrevStep = () => {
    setStep("Stage1");
  };
  const handleNextStep = () => {
    setStep("Stage3");
  };
  return /* @__PURE__ */ jsx(
    StageWrapper,
    {
      onClickPrev: handlePrevStep,
      onClickNext: handleNextStep,
      length: 5,
      current: 2,
      disableNext: !isValid,
      children: /* @__PURE__ */ jsxs("div", { className: stageFormWrapper, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: stageWrapper.title, children: "플레이어님의 정보를 확인할게요" }),
          /* @__PURE__ */ jsx("p", { className: stageWrapper.description, children: "필수 정보를 입력해 주세요" })
        ] }),
        /* @__PURE__ */ jsx(BasicInput, { type: "text", title: "이름", required: true, ...register("username", { required: true }) }),
        /* @__PURE__ */ jsx(
          DateSwiperSelect,
          {
            title: "생년월일",
            bottomSheetHeader: { title: "생년월일 선택", description: "플레이어님의 생년월일을 선택해주세요." },
            pickType: "ONLY_PAST",
            required: true,
            ...register("birth", { required: true })
          }
        ),
        /* @__PURE__ */ jsx(
          BasicInput,
          {
            type: "tel",
            required: true,
            title: "휴대전화 번호",
            ...register("contact", {
              required: true,
              onChange: (event) => event.target.value = event.target.value.replace(/[^0-9]/g, "").replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)
            })
          }
        ),
        /* @__PURE__ */ jsx(InputWrapper, { title: "성별", required: true, children: /* @__PURE__ */ jsx(
          MainTab,
          {
            type: "filled",
            color: "gray",
            size: "medium",
            sameWidth: true,
            initialValue: watch("sexKey"),
            nowValue: handleSexKey,
            items: [
              { value: "MALE", name: "남성" },
              { value: "FEMALE", name: "여성" }
            ]
          }
        ) })
      ] })
    }
  );
}
function Stage3({ setStep }) {
  const toast = useToast();
  const { setValue, watch } = useFormContext();
  const { data, isLoading } = useGet(`${commonAPI.CODES}/activeArea`);
  const [sido, setSido] = useState({ key: "11", name: "서울특별시" });
  const formLocation = watch("activeAreas") ?? [];
  const formLocationDisplayValues = formLocation.map((key) => ({
    key,
    name: findAreaByCodeSequenceKey(data, key)?.text
  }));
  const [locations, setLocations] = useState(formLocationDisplayValues);
  const onClickLocation = (locationKey, name) => {
    if (locations.length >= 2) {
      toast.trigger("위치는 최대 2개까지 선택 가능합니다.", { type: "error" });
      return;
    }
    if (formLocation.includes(locationKey)) {
      toast.trigger("이미 선택한 지역입니다.", { type: "error" });
      return;
    }
    setLocations((prev) => [...prev, { key: locationKey, name: `${sido.name} ${name}` }]);
    setValue("activeAreas", [...formLocation, locationKey]);
  };
  const onRemoveLocation = (locationKey) => {
    setLocations((prev) => prev.filter((location) => location.key !== locationKey));
    setValue(
      "activeAreas",
      formLocation.filter((key) => key !== locationKey)
    );
  };
  const handlePrevStep = () => {
    setStep("Stage2");
  };
  const handleNextStep = () => {
    setStep("Stage4");
  };
  return /* @__PURE__ */ jsx(
    StageWrapper,
    {
      onClickPrev: handlePrevStep,
      onClickNext: handleNextStep,
      length: 5,
      current: 3,
      disableNext: false,
      children: /* @__PURE__ */ jsxs("div", { className: stageFormWrapper, style: { overflow: "hidden", margin: "0 -16px", padding: "0 16px" }, children: [
        /* @__PURE__ */ jsxs("div", { style: { marginBottom: "-4px" }, children: [
          /* @__PURE__ */ jsx("h3", { className: stageWrapper.title, children: "플레이어님의 활동 위치를 선택해주세요" }),
          /* @__PURE__ */ jsx("p", { className: stageWrapper.description, children: "주로 운동하시는 지역을 최대 2군데 선택해주세요" })
        ] }),
        isLoading ? /* @__PURE__ */ jsx("div", { style: { marginTop: "32px" }, children: /* @__PURE__ */ jsx(Loading, {}) }) : /* @__PURE__ */ jsxs(LocationContainer, { children: [
          /* @__PURE__ */ jsx("div", { className: "location-selected", children: locations.map((location) => /* @__PURE__ */ jsx(
            Chip,
            {
              type: "primary",
              fillType: "light",
              size: "large",
              closeAction: () => {
                onRemoveLocation(location.key);
              },
              children: location.name
            },
            location.key
          )) }),
          /* @__PURE__ */ jsxs(LocationChildList, { className: fonts.body3.regular, children: [
            /* @__PURE__ */ jsx("ul", { className: "parent", children: data?.map((item) => {
              const parent = item.parent;
              return /* @__PURE__ */ jsx(
                "li",
                {
                  onClick: () => setSido({ key: parent.codeSequenceKey, name: parent.codeValue }),
                  className: clsx({
                    active: sido.key === parent.codeSequenceKey,
                    [fonts.body3.semibold]: sido.key === parent.codeSequenceKey
                  }),
                  role: "button",
                  children: parent.codeValue
                },
                parent.codeSequenceKey
              );
            }) }),
            /* @__PURE__ */ jsx("ul", { className: "child", children: data?.find((item) => item.parent.codeSequenceKey === sido.key)?.child?.map((item) => /* @__PURE__ */ jsx(
              "li",
              {
                role: "button",
                className: clsx(
                  formLocation.includes(item.codeSequenceKey) && { active: true, [fonts.body3.semibold]: true }
                ),
                onClick: () => onClickLocation(item.codeSequenceKey, item.codeValue),
                children: item.codeValue
              },
              `${item.codeSequenceKey}+${item.codeValue}`
            )) })
          ] })
        ] })
      ] })
    }
  );
}
function findAreaByCodeSequenceKey(data, targetKey) {
  const item = data?.find((item2) => item2.child.some((child2) => child2.codeSequenceKey === targetKey));
  if (!item) return null;
  const child = item?.child?.find((child2) => child2.codeSequenceKey === targetKey);
  return {
    parent: item.parent.codeValue,
    child: child?.codeValue,
    text: `${item.parent.codeValue} ${child?.codeValue}`
  };
}
function Stage4({ setStep }) {
  const {
    register,
    watch,
    setValue,
    formState: { isValid }
  } = useFormContext();
  const [previewImage, setPreviewImage] = useState("");
  const handlePreviewImg = async (event) => {
    const file = event.currentTarget.files?.[0];
    if (!file) return;
    try {
      const webpBlob = await convertWebpImage(file, { maxWidth: 600, quality: 0.8 });
      const webpFile = new File([webpBlob], "profile.webp", { type: "image/webp" });
      const previewBase64 = URL.createObjectURL(webpBlob);
      setPreviewImage(previewBase64);
      setValue("image", webpFile);
    } catch (error) {
      console.error("Error converting image to WebP:", error);
    }
  };
  useEffect(() => {
    if (watch("image") instanceof Blob) {
      const file = watch("image");
      const reader = new FileReader();
      if (file) {
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          if (reader.result) {
            setPreviewImage(reader.result.toString());
          }
        };
      }
    }
  }, []);
  const handlePrevStep = () => {
    setStep("Stage3");
  };
  const handleNextStep = () => {
    setStep("Stage5");
  };
  return /* @__PURE__ */ jsx(
    StageWrapper,
    {
      onClickPrev: handlePrevStep,
      onClickNext: handleNextStep,
      length: 5,
      current: 4,
      disableNext: !isValid,
      children: /* @__PURE__ */ jsxs("div", { className: stageFormWrapper, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: stageWrapper.title, children: "프로필을 작성해주세요" }),
          /* @__PURE__ */ jsx("p", { className: stageWrapper.description })
        ] }),
        /* @__PURE__ */ jsxs(ImageUpload, { htmlFor: "profileImgUpload", children: [
          previewImage ? /* @__PURE__ */ jsx(PreviewImg, { src: previewImage }) : /* @__PURE__ */ jsx(PersonIcon, {}),
          /* @__PURE__ */ jsx("div", { className: "camera-icon-wrapper", children: /* @__PURE__ */ jsx(PlusIcon, {}) })
        ] }),
        /* @__PURE__ */ jsx(
          TextArea,
          {
            title: "자기소개",
            placeholder: `다른 플레이어들에게 보일 자기소개를 작성해 주세요
200자 이내 작성 가능합니다.`,
            required: true,
            style: { height: "130px", resize: "none" },
            displayLength: true,
            maxLength: 200,
            ...register("selfIntro", { required: true })
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            style: { display: "none" },
            type: "file",
            accept: "image/*",
            id: "profileImgUpload",
            ...register("image", {
              onChange: handlePreviewImg
            })
          }
        )
      ] })
    }
  );
}
const ImageUpload = styled.label`
  cursor: pointer;
  position: relative;
  display: flex;
  margin: 0 auto;
  width: 88px;
  height: 88px;
  border-radius: 14px;
  background-color: var(--gray50);
  align-items: center;
  justify-content: center;
  user-select: none;

  svg {
    width: 44px;
    height: 44px;
    fill: var(--gray300);
  }
  .camera-icon-wrapper {
    position: absolute;
    display: flex;
    right: -6px;
    top: -6px;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: var(--primary500);
    border: 2px solid var(--background-light);
    svg {
      width: 14px;
      height: 14px;
      fill: #fff;
    }
  }

  &:active {
    transform: scale(0.97);
    transition: transform 0.25s;
  }
`;
const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
  overflow: hidden;
`;
const userAtom = atom(null);
function Stage5({ setStep }) {
  const { register, watch } = useFormContext();
  const setUserAtom = useSetAtom(userAtom);
  const { trigger } = useToast();
  const popup = usePopup();
  const { mutateAsync, isPending } = usePost(authAPI.JOIN, "form-data");
  const selectedSports = watch("preferredSport") ?? [];
  const handleSubmitForm = async () => {
    const formValues = watch();
    const formData = new FormData();
    const userInfo = {
      username: formValues.username,
      contact: formValues.contact,
      birth: formValues.birth.replaceAll("-", ""),
      university: null,
      sexKey: formValues.sexKey,
      activeAreas: formValues.activeAreas,
      preferredSports: selectedSports,
      selfIntro: formValues.selfIntro
    };
    formData.append("userInfo", new Blob([JSON.stringify(userInfo)], { type: "application/json" }));
    if (formValues.image instanceof File) {
      formData.append("image", formValues.image);
    }
    try {
      await mutateAsync({
        data: formData
      });
      setUserAtom({
        username: formValues.username,
        role: "",
        nickname: "",
        isLogin: true
      });
      setStep("Welcome");
    } catch (error) {
      popup?.alert("가입에 실패했습니다. 다시 시도해주세요.", {
        showIcon: true,
        title: "가입 실패",
        color: "red"
      });
    }
  };
  const handlePrevStep = () => {
    setStep("Stage4");
  };
  const handleNextStep = () => {
    handleSubmitForm();
  };
  useEffect(() => {
    if (selectedSports.length > 3) {
      trigger("최대 3개까지 선택할 수 있어요.", { type: "error" });
    }
  }, [selectedSports]);
  return /* @__PURE__ */ jsxs(
    StageWrapper,
    {
      last: true,
      onClickPrev: handlePrevStep,
      onClickLast: handleNextStep,
      length: 5,
      current: 5,
      disableNext: !(selectedSports.length > 0) || selectedSports.length > 3,
      children: [
        isPending && /* @__PURE__ */ jsx(Loading, { page: true }),
        /* @__PURE__ */ jsxs("div", { className: stageFormWrapper, children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: stageWrapper.title, children: "관심 스포츠를 선택해 주세요" }),
            /* @__PURE__ */ jsx("p", { className: stageWrapper.description, children: "최대 3개까지 선택할 수 있어요" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: stageFavSportsGrid, children: SUPPORT_SPORTS.map((item) => /* @__PURE__ */ jsxs(SportsButton, { children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "checkbox",
                id: `${item.value}+${item.name}`,
                value: item.value,
                style: { display: "none" },
                ...register("preferredSport", {
                  maxLength: 3
                })
              }
            ),
            /* @__PURE__ */ jsxs("label", { htmlFor: `${item.value}+${item.name}`, children: [
              /* @__PURE__ */ jsx("div", { className: "icon-wrapper", children: /* @__PURE__ */ jsx("img", { src: item.icon, alt: item.name, width: 80, height: 80 }) }),
              /* @__PURE__ */ jsx("span", { className: "sports-name", children: item.name })
            ] })
          ] }, item.value)) })
        ] })
      ]
    }
  );
}
const SportsButton = styled.div`
  width: 100%;
  max-width: 110px;
  label {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;

    div.icon-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 110px;
      border-radius: 10px;
      border: 1px solid var(--gray200);
      transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    }
    span.sports-name {
      ${FONTS.body3("medium")};
      padding: 10px 0;
      color: var(--gray600);
    }

    &:active div.icon-wrapper > img {
      transform: scale(0.95);
      transition: transform 0.2s ease-in-out;
    }
  }

  input:checked + label div.icon-wrapper {
    border: 2px solid var(--primary500);
  }
  input:checked + label span.sports-name {
    ${FONTS.body3("semibold")};
    color: var(--primary500);
  }
`;
function Welcome({ setStep }) {
  const { watch } = useFormContext();
  const router = useRouter();
  const [textPhase, setTextPhase] = useState(0);
  const username = watch("username");
  useEffect(() => {
    setTextPhase(1);
    setTimeout(() => {
      setTextPhase(2);
    }, 2300);
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: stageWelcomeContainer,
      style: {
        backgroundColor: "rgba(243, 254, 245, 1)",
        backgroundImage: `url('/images/assets/complete_shoot_animation.png')`,
        backgroundSize: "100%",
        gap: "36px"
      },
      children: [
        /* @__PURE__ */ jsx("div", { style: { flex: 1, display: "flex", justifyContent: "center", alignItems: "flex-end", textAlign: "center" }, children: /* @__PURE__ */ jsxs("div", { className: welcomeTextContainer, children: [
          /* @__PURE__ */ jsxs("div", { className: clsx(welcomeTextItem, { [welcomeTextFadeIn]: textPhase === 1 }), children: [
            /* @__PURE__ */ jsxs("p", { className: fonts.head4.medium, children: [
              /* @__PURE__ */ jsx("span", { className: colors.primary500, children: username }),
              " 님,"
            ] }),
            /* @__PURE__ */ jsx("p", { className: fonts.head5.medium, style: { paddingBottom: "calc(60px - 36px)" }, children: "만나서 반가워요!" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: clsx(welcomeTextItem, fonts.head6.regular, { [welcomeTextFadeIn]: textPhase === 2 }), children: [
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("span", { className: colors.primary500, children: "추가 정보" }),
              "를 입력하시면,"
            ] }),
            "맞춤 팀을 추천해드릴 수 있어요!"
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: flexColumnGap8, children: [
          /* @__PURE__ */ jsx("div", { className: clsx(welcomeTextItem, { [welcomeTextFadeIn]: textPhase === 2 }), children: /* @__PURE__ */ jsx(
            Button,
            {
              type: "button",
              fillType: "outline",
              size: "xlarge",
              mode: "gray",
              fullWidth: true,
              onClick: () => setStep("Option1"),
              children: "추가 정보 입력하기"
            }
          ) }),
          /* @__PURE__ */ jsx(Button, { type: "button", size: "xlarge", fullWidth: true, onClick: () => router.navigate({ to: "/home", replace: true }), children: "시작하기" })
        ] })
      ]
    }
  );
}
function OptionalStage1({ setStep }) {
  const { register, setValue, watch } = useFormContext();
  const handleHandedness = (value) => {
    setValue("handedness", value);
  };
  const handleNextStep = () => {
    setStep("Option2");
  };
  return /* @__PURE__ */ jsx(StageWrapper, { start: true, onClickNext: handleNextStep, current: -1, length: 6, currentStageName: "선택사항", children: /* @__PURE__ */ jsxs("div", { className: stageFormWrapper, children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: stageWrapper.title, children: "플레이어님의 신체 정보를 입력해 주세요." }),
      /* @__PURE__ */ jsx("p", { className: stageWrapper.description, children: "세부 정보를 입력하시면, 맞춤 팀을 추천드려요!" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: flexColumnGap20, children: [
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: "12px" }, children: [
        /* @__PURE__ */ jsx("div", { style: { flex: 1 }, children: /* @__PURE__ */ jsx(BasicInput, { type: "number", title: "키", suffix: "cm", ...register("height") }) }),
        /* @__PURE__ */ jsx("div", { style: { flex: 1 }, children: /* @__PURE__ */ jsx(BasicInput, { type: "number", title: "체중", suffix: "kg", ...register("weight") }) })
      ] }),
      /* @__PURE__ */ jsx(InputWrapper, { title: "주 사용 손", required: true, children: /* @__PURE__ */ jsx(
        MainTab,
        {
          type: "filled",
          color: "gray",
          size: "medium",
          sameWidth: true,
          initialValue: watch("handedness"),
          nowValue: handleHandedness,
          items: [
            { value: "left", name: "왼손잡이" },
            { value: "right", name: "오른손잡이" }
          ]
        }
      ) })
    ] })
  ] }) });
}
function OptionalStage2({ setStep }) {
  const { register, watch, setValue } = useFormContext();
  const router = useRouter();
  const popup = usePopup();
  const toast = useToast();
  const [exp, setExp] = useState(!!watch("basketball.exDuration") ? "write" : "0");
  const { mutateAsync, isPending } = usePost(authAPI.FITNESS);
  const handleSubmitForm = async () => {
    const formValues = watch();
    try {
      await mutateAsync({
        data: {
          exDuration: formValues.basketball.exDuration,
          wingSpan: formValues.basketball.wingSpan,
          posKey: formValues.basketball.posKey,
          height: formValues.height,
          weight: formValues.weight
        }
      });
      router.navigate({ to: "/home", replace: true });
      toast.trigger("스포츠 정보가 저장되었습니다.", { type: "success" });
    } catch (error) {
      popup?.alert("스포츠 정보 저장에 실패했습니다. 다시 시도해주세요.", {
        showIcon: true,
        title: "가입 실패",
        color: "red"
      });
      return;
    }
  };
  const handlePosition = (value) => {
    setValue("basketball.posKey", value);
  };
  const handlePrevStep = () => {
    setStep("Option1");
  };
  const handleNextStep = () => {
    handleSubmitForm();
  };
  return /* @__PURE__ */ jsx(
    StageWrapper,
    {
      onClickPrev: handlePrevStep,
      onClickLast: handleNextStep,
      current: -1,
      length: 6,
      last: true,
      currentStageName: "선택사항",
      children: /* @__PURE__ */ jsxs("div", { className: stageFormWrapper, children: [
        isPending && /* @__PURE__ */ jsx(Loading, { page: true }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: stageWrapper.title, children: "플레이어님의 스포츠 정보를 입력해 주세요." }),
          /* @__PURE__ */ jsx("p", { className: stageWrapper.description, children: "세부 정보를 입력하시면, 맞춤 팀을 추천드려요!" })
        ] }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: flexColumnGap10,
            style: {
              justifyContent: "space-between",
              height: "100%"
            },
            children: [
              /* @__PURE__ */ jsxs("div", { className: flexColumnGap20, children: [
                /* @__PURE__ */ jsx(
                  MainTab,
                  {
                    type: "line",
                    size: "large",
                    nowValue: () => {
                    },
                    initialValue: "basketball",
                    sameWidth: true,
                    items: [
                      { value: "volleyball", name: "배구", disabled: true },
                      { value: "baseball", name: "야구", disabled: true },
                      { value: "basketball", name: "농구" }
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(InputWrapper, { title: "운동 기간", children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: "8px" }, children: [
                  /* @__PURE__ */ jsx("div", { style: { flex: 1 }, children: /* @__PURE__ */ jsx(
                    DropdownInput,
                    {
                      placeholder: "",
                      value: exp,
                      onChange: (target) => {
                        if (target === "0") {
                          setValue("basketball.exDuration", 0);
                        }
                        setExp(target);
                      },
                      options: [
                        { name: "1년 미만", value: "0" },
                        { name: "직접 입력", value: "write" }
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsx("div", { style: { flex: 2 }, children: /* @__PURE__ */ jsx(
                    BasicInput,
                    {
                      type: "number",
                      suffix: "년",
                      disabled: exp === "0",
                      ...register("basketball.exDuration", {
                        valueAsNumber: true
                      })
                    }
                  ) })
                ] }) }),
                /* @__PURE__ */ jsx(
                  BasicInput,
                  {
                    title: "윙스팬",
                    type: "number",
                    suffix: "cm",
                    ...register("basketball.wingSpan", {
                      valueAsNumber: true
                    })
                  }
                ),
                /* @__PURE__ */ jsx(InputWrapper, { title: "포지션", children: /* @__PURE__ */ jsx(
                  MainTab,
                  {
                    type: "filled",
                    color: "gray",
                    size: "medium",
                    sameWidth: true,
                    initialValue: watch("basketball.posKey"),
                    nowValue: handlePosition,
                    items: [
                      { value: "10", name: "가드" },
                      { value: "20", name: "포워드" },
                      { value: "30", name: "센터" }
                    ]
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: fonts.body4.medium,
                  style: {
                    margin: "0 -20px",
                    padding: "16px 0",
                    textAlign: "center",
                    backgroundColor: "var(--gray50)",
                    color: "var(--gray400)"
                  },
                  children: "* 농구 외의 종목은 추후 업데이트 될 예정입니다."
                }
              )
            ]
          }
        )
      ] })
    }
  );
}
const stages = ["Stage1", "Stage2", "Stage3", "Stage4", "Stage5", "Option1", "Option2", "Welcome"];
function JoinStage() {
  const popup = usePopup();
  const router = useRouter();
  useHeader({
    transparent: true,
    onClickBack: () => {
      const handleConfirm = async () => {
        const confirmValue = await popup?.confirm(`입력된 정보는 저장되지 않고, 다시 복구할 수 없습니다.`, {
          showIcon: true,
          title: "회원가입을 취소하시겠습니까?",
          buttonText: {
            yes: "네, 취소할게요",
            no: "아니오"
          }
        });
        if (confirmValue) {
          router.navigate({
            to: "/user/logout",
            replace: true
          });
        }
      };
      handleConfirm();
    }
  });
  const methods = useForm({
    defaultValues: {
      required1: false,
      required2: false,
      event1: false,
      sexKey: "MALE"
    }
  });
  const {
    Funnel,
    Step,
    setStep
  } = useFunnel({
    initialStep: stages[0]
  });
  return /* @__PURE__ */ jsx(FormProvider, { ...methods, children: /* @__PURE__ */ jsxs(Funnel, { children: [
    /* @__PURE__ */ jsx(Step, { name: stages[0], children: /* @__PURE__ */ jsx(Stage1, { setStep }) }),
    /* @__PURE__ */ jsx(Step, { name: stages[1], children: /* @__PURE__ */ jsx(Stage2, { setStep }) }),
    /* @__PURE__ */ jsx(Step, { name: stages[2], children: /* @__PURE__ */ jsx(Stage3, { setStep }) }),
    /* @__PURE__ */ jsx(Step, { name: stages[3], children: /* @__PURE__ */ jsx(Stage4, { setStep }) }),
    /* @__PURE__ */ jsx(Step, { name: stages[4], children: /* @__PURE__ */ jsx(Stage5, { setStep }) }),
    /* @__PURE__ */ jsx(Step, { name: stages[4], children: /* @__PURE__ */ jsx(Stage5, { setStep }) }),
    /* @__PURE__ */ jsx(Step, { name: stages[5], children: /* @__PURE__ */ jsx(OptionalStage1, { setStep }) }),
    /* @__PURE__ */ jsx(Step, { name: stages[6], children: /* @__PURE__ */ jsx(OptionalStage2, { setStep }) }),
    /* @__PURE__ */ jsx(Step, { name: stages[7], children: /* @__PURE__ */ jsx(Welcome, { setStep }) })
  ] }) });
}
export {
  JoinStage as component
};
