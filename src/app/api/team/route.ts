import { NextResponse } from "next/server";

export async function GET(_: Request) {
  return NextResponse.json({
    teamId: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
    teamName: "ONE농구",
    masterNm: "김이프",
    activeArea: "경기 성남시",
    teamIntro: "2024년 1위! 농구 동아리",
    countMember: 22,
    createDt: "2024-01-01",
    bgUrl:
      "https://images.unsplash.com/photo-1519766304817-4f37bda74a26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  });
}
