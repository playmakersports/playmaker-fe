var BoardTypeEnums = /* @__PURE__ */ ((BoardTypeEnums2) => {
  BoardTypeEnums2[BoardTypeEnums2["NOTICE"] = 1] = "NOTICE";
  BoardTypeEnums2[BoardTypeEnums2["FREE"] = 2] = "FREE";
  BoardTypeEnums2[BoardTypeEnums2["GALLERY"] = 3] = "GALLERY";
  return BoardTypeEnums2;
})(BoardTypeEnums || {});
const TeamPlayerAuthStatusName = {
  APPLICABLE: "가입가능",
  APPLY: "가입 신청",
  MEMBER: "팀원",
  STAFF: "운영진",
  ASSISTANT: "부회장",
  MASTER: "회장"
};
export {
  BoardTypeEnums as B,
  TeamPlayerAuthStatusName as T
};
