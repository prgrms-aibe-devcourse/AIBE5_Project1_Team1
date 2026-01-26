import imgImage8 from "figma:asset/73e1dcd836f61821c3d986cad23bf3fa3cd2a178.png";

function MiniLogo() {
  return (
    <div className="bg-[#ffe18e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="mini logo">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="image 8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[-105.86%] max-w-none size-[286.42%] top-[-56.97%]" src={imgImage8} />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0">
      <MiniLogo />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[24px] text-black">
        <span className="leading-[normal]">{`PLAN `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] text-[#ffc067]">Jeju</span>
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal gap-[24px] items-center justify-center leading-[normal] not-italic overflow-clip px-[9px] py-[6px] relative shrink-0 text-[16px] text-black">
      <p className="css-ew64yg relative shrink-0">제주도 여행지</p>
      <p className="css-ew64yg relative shrink-0">여행 설문</p>
      <p className="css-ew64yg relative shrink-0">여행 후기</p>
      <p className="css-ew64yg relative shrink-0">여행 계획</p>
      <p className="css-ew64yg relative shrink-0">마이페이지</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[30px] items-center relative shrink-0">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#ffc067] content-stretch flex items-center justify-center overflow-clip px-[10px] py-[5px] relative rounded-[8px] shrink-0">
      <p className="css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-white">로그아웃</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <p className="css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black">김XX님, 안녕하세요</p>
      <Frame4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white content-stretch flex h-[64px] items-center justify-between overflow-clip px-[20px] py-[16px] relative shrink-0 w-[1216px]">
      <Frame3 />
      <Frame6 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white h-[64px] pointer-events-auto sticky top-0 w-[1920px]" data-name="header">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[275px] relative rounded-[inherit] size-full">
        <Frame />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#ffede2] content-stretch flex items-center justify-center overflow-clip px-[16px] py-[4px] relative rounded-[999px] shrink-0 w-[100px]">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#ffc067] text-[16px] text-center">Step 2</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative shrink-0">
      <ol className="block css-3nmod4 css-g0mm18 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[30px] text-black" start="1">
        <li className="css-4hzbpn ms-[45px]">
          <span className="leading-[normal]">기본 여행 정보(필수)</span>
        </li>
      </ol>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">당일치기</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">1박 2일</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">2박 3일</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">3박 4일 이상</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <p className="css-4hzbpn font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light leading-[normal] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">1-1. 여행기간을 알려주세요.</p>
      <Frame25 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame33 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">혼자</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">연인</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">친구</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">가족</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">아이 동반</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame18 />
      <Frame17 />
      <Frame16 />
      <Frame15 />
      <Frame19 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[348px]">
      <p className="css-4hzbpn font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-full">1-2. 누구와 함께인가요?</p>
      <Frame30 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">노숙</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">1박</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">2박</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">3박 이상</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame24 />
      <Frame23 />
      <Frame22 />
      <Frame21 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame32 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[268px]">
      <p className="css-4hzbpn font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-full">1-3. 숙박은 몇 박 할래요?</p>
      <Frame41 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-[364px]">
      <Frame31 />
      <Frame34 />
      <Frame35 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 590 1">
            <line id="Line 4" stroke="var(--stroke-0, black)" x2="590" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame44 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      <Frame47 />
      <Frame45 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative shrink-0">
      <ol className="block css-3nmod4 css-g0mm18 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[30px] text-black" start="2">
        <li className="css-4hzbpn ms-[45px]">
          <span className="leading-[normal]">여행 스타일은(패키지 성격 결정)</span>
        </li>
      </ol>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">자연/힐링</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">맛집/카페</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">액티비티</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">관광지 정복</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">감성 사진</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame11 />
      <Frame12 />
      <Frame13 />
      <Frame14 />
      <Frame20 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <p className="css-4hzbpn font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light leading-[normal] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">2-1. 이번 여행의 핵심은?</p>
      <Frame26 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame36 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">동선 최소(근처 위주)</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">핵심만 찍고 이동</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">여기저기 돌아다녀도 OK</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame27 />
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[348px]">
      <p className="css-4hzbpn font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-full">2-2. 이동 스타일은?</p>
      <Frame38 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-[364px]">
      <Frame37 />
      <Frame39 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 590 1">
            <line id="Line 4" stroke="var(--stroke-0, black)" x2="590" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame46 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      <Frame50 />
      <Frame51 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative shrink-0">
      <ol className="block css-3nmod4 css-g0mm18 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[30px] text-black" start="3">
        <li className="css-4hzbpn ms-[45px]">
          <span className="leading-[normal]">숙소 및 음식(상세 취향)</span>
        </li>
      </ol>
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">제주 시내(제주시)</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">서귀포</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">애월/한림(서쪽)</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">성산/표선(동쪽)</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">상관없음</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame40 />
      <Frame42 />
      <Frame43 />
      <Frame56 />
      <Frame59 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <p className="css-4hzbpn font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light leading-[normal] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">3-1. 숙소 지역 선호는?</p>
      <Frame61 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame62 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">위치</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">가성비</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">풍경</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame67() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">조용함</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame68() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">편의시설</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame64 />
      <Frame65 />
      <Frame66 />
      <Frame67 />
      <Frame68 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[348px]">
      <p className="css-4hzbpn font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-full">3-2. 숙소에서 가장 중요한건?</p>
      <Frame69 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-[364px]">
      <Frame63 />
      <Frame70 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">제주 로컬(고기국수/해산물)</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame73() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">인스타감성</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame74() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">가성비</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame75() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center">
          <p className="css-ew64yg leading-[normal]">가리지 않음</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame72 />
      <Frame73 />
      <Frame74 />
      <Frame75 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[348px]">
      <p className="css-4hzbpn font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-full">3-3. 선호하는 음식 스타일은?</p>
      <Frame76 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 590 1">
            <line id="Line 4" stroke="var(--stroke-0, black)" x2="590" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame71 />
      <Frame77 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      <Frame54 />
      <Frame78 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-[38px] items-start relative shrink-0 w-full">
      <Frame48 />
      <Frame49 />
      <Frame52 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[25px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[32px] py-[14px] relative rounded-[inherit]">
        <p className="css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center">돌아가기</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[25px]" />
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-[#ffc067] relative rounded-[25px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[32px] py-[14px] relative rounded-[inherit]">
        <p className="css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-white">결과 보기</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ffc067] border-solid inset-0 pointer-events-none rounded-[25px]" />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0">
      <Frame53 />
      <Frame55 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-center relative shrink-0 w-[590px]">
      <Frame58 />
      <Frame57 />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-[704px]" data-name="설문 내용">
      <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip p-[48px] relative rounded-[inherit] w-full">
        <Frame5 />
        <Frame60 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Full() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-[80px] pt-[160px] relative shrink-0" data-name="FULL 설문">
      <Component />
    </div>
  );
}

export default function F() {
  return (
    <div className="bg-[#ffede2] content-stretch flex flex-col items-center relative size-full" data-name="설문조사-F">
      <div className="absolute bottom-0 h-[1324px] left-0 pointer-events-none top-0">
        <Header />
      </div>
      <Full />
    </div>
  );
}