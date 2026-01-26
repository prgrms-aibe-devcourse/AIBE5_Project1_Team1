import imgImage5 from "figma:asset/424c5ca820ae850ac6fbe42e3a30a18956725c45.png";
import imgImage8 from "figma:asset/73e1dcd836f61821c3d986cad23bf3fa3cd2a178.png";

function Frame5() {
  return (
    <div className="bg-[#ffc067] content-stretch flex flex-col gap-[16px] items-center justify-center leading-[normal] not-italic overflow-clip pb-[64px] pt-[128px] px-[106px] relative shrink-0 text-center text-white w-[1920px]">
      <p className="css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium relative shrink-0 text-[48px]">나의 여행 계획</p>
      <p className="css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal relative shrink-0 text-[18px]">일차별로 시간과 장소를 지정하여 상세한 여행 일정을 만들어보세요</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light h-[24px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-black text-center">
            <p className="css-4hzbpn leading-[normal]">새 여행 계획</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="col-[1] content-stretch css-uwkwlr flex flex-col gap-[6px] items-start relative row-[1] self-start shrink-0 w-[388px]">
      <div className="flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black w-full">
        <p className="css-4hzbpn leading-[normal]">플랜 이름</p>
      </div>
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[24px] text-black text-center">
            <p className="css-4hzbpn leading-[normal]">YY년 MM월 DD일</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame64() {
  return (
    <div className="col-[2] content-stretch css-uwkwlr flex flex-col gap-[6px] items-start relative row-[1] self-start shrink-0 w-[388px]">
      <div className="flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black w-full">
        <p className="css-4hzbpn leading-[normal]">출발일</p>
      </div>
      <Frame9 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="gap-[12px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_fit-content(100%))] relative shrink-0 w-full">
      <Frame11 />
      <Frame64 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0">
      <div className="bg-[#d9d9d9] shrink-0 size-[10px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black">
        <p className="css-ew64yg leading-[normal]">나만보기</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black">
        <p className="css-ew64yg leading-[normal]">설명</p>
      </div>
      <Frame30 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light h-[74px] leading-[normal] min-h-[74px] min-w-px not-italic relative text-[16px] text-black">여행 목적 / 주의사항 / 메모</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Frame29 />
      <Frame10 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black">
          <p className="css-ew64yg leading-[normal]"># 액티비티형</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame12 />
      <Frame13 />
      <Frame31 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[20px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[40px] relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-black">
          <p className="css-ew64yg leading-[normal]">플랜 정보</p>
        </div>
        <Frame32 />
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-[#ffc067] relative rounded-[16px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
        <div className="css-g0mm18 flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-black">
          <p className="css-ew64yg leading-[normal]">+ 일정 추가</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between p-[20px] relative shrink-0 w-[972px]">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-black">
        <p className="css-ew64yg leading-[normal]">여행 일정표</p>
      </div>
      <Frame33 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center w-[24px]">
        <p className="css-4hzbpn leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="col-[2] content-stretch css-uwkwlr flex items-center px-[10px] relative row-[2] self-stretch shrink-0">
      <Frame44 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0">
      <div className="content-stretch flex gap-[18px] items-center overflow-clip px-[10px] py-[13px] relative rounded-[inherit]">
        <p className="css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-center">{`오전  11:30`}</p>
        <div className="bg-[#d9d9d9] rounded-[999px] shrink-0 size-[20px]" />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame43() {
  return (
    <div className="col-[3] content-stretch css-vsca90 flex flex-col items-center justify-center relative row-[2] self-stretch shrink-0">
      <Frame36 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="col-[4] content-stretch flex flex-col items-center justify-center relative row-[2] self-stretch shrink-0 w-[260px]">
      <div className="aspect-[450/253.125] relative rounded-[12px] shrink-0 w-full" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="font-light gap-[8px] grid-cols-[repeat(2,_fit-content(100%))] grid-rows-[repeat(3,_fit-content(100%))] inline-grid leading-[0] relative shrink-0 text-[16px]">
      <div className="col-[1] css-vsca90 flex flex-col font-['Inter:Light','Noto_Sans_JP:Light',sans-serif] justify-center relative row-[1] self-start shrink-0 text-center">
        <p className="css-4hzbpn leading-[normal]">￦</p>
      </div>
      <div className="col-[1] css-vsca90 flex flex-col font-['Inter:Light',sans-serif] justify-center relative row-[2] self-start shrink-0 text-center">
        <p className="css-4hzbpn leading-[normal]">●</p>
      </div>
      <div className="col-[1] css-vsca90 flex flex-col font-['Inter:Light',sans-serif] justify-center relative row-[3] self-start shrink-0 text-center">
        <p className="css-4hzbpn leading-[normal]">※</p>
      </div>
      <div className="col-[2] css-g0mm18 css-uwkwlr flex flex-col font-['Inter:Light',sans-serif] justify-center relative row-[2] self-start shrink-0">
        <p className="css-ew64yg leading-[normal]">{`11:00 ~ 22:00 `}</p>
      </div>
      <div className="col-[2] css-vsca90 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] justify-center relative row-[1] self-start shrink-0">
        <p className="css-4hzbpn leading-[normal]">11,000원</p>
      </div>
      <div className="col-[2] css-vsca90 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] justify-center relative row-[3] self-start shrink-0">
        <p className="css-4hzbpn leading-[normal]">자연</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-white col-[5] css-por8k5 relative rounded-[20px] row-[2] self-start shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[18px] items-start not-italic p-[20px] relative text-black w-full">
          <p className="css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-center">한라산 국립공원</p>
          <Frame40 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center w-[24px]">
        <p className="css-4hzbpn leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="col-[2] content-stretch css-uwkwlr flex items-center px-[10px] relative row-[3] self-stretch shrink-0">
      <Frame61 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0">
      <div className="content-stretch flex gap-[18px] items-center overflow-clip px-[10px] py-[13px] relative rounded-[inherit]">
        <p className="css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-center">{`오전  11:30`}</p>
        <div className="bg-[#d9d9d9] rounded-[999px] shrink-0 size-[20px]" />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame47() {
  return (
    <div className="col-[3] content-stretch css-vsca90 flex flex-col items-center justify-center relative row-[3] self-stretch shrink-0">
      <Frame37 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="col-[4] content-stretch flex flex-col items-center justify-center relative row-[3] self-stretch shrink-0 w-[260px]">
      <div className="aspect-[450/253.125] relative rounded-[12px] shrink-0 w-full" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="font-light gap-[8px] grid-cols-[repeat(2,_fit-content(100%))] grid-rows-[repeat(3,_fit-content(100%))] inline-grid leading-[0] relative shrink-0 text-[16px]">
      <div className="col-[1] css-vsca90 flex flex-col font-['Inter:Light','Noto_Sans_JP:Light',sans-serif] justify-center relative row-[1] self-start shrink-0 text-center">
        <p className="css-4hzbpn leading-[normal]">￦</p>
      </div>
      <div className="col-[1] css-vsca90 flex flex-col font-['Inter:Light',sans-serif] justify-center relative row-[2] self-start shrink-0 text-center">
        <p className="css-4hzbpn leading-[normal]">●</p>
      </div>
      <div className="col-[1] css-vsca90 flex flex-col font-['Inter:Light',sans-serif] justify-center relative row-[3] self-start shrink-0 text-center">
        <p className="css-4hzbpn leading-[normal]">※</p>
      </div>
      <div className="col-[2] css-g0mm18 css-uwkwlr flex flex-col font-['Inter:Light',sans-serif] justify-center relative row-[2] self-start shrink-0">
        <p className="css-ew64yg leading-[normal]">{`11:00 ~ 22:00 `}</p>
      </div>
      <div className="col-[2] css-vsca90 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] justify-center relative row-[1] self-start shrink-0">
        <p className="css-4hzbpn leading-[normal]">11,000원</p>
      </div>
      <div className="col-[2] css-vsca90 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] justify-center relative row-[3] self-start shrink-0">
        <p className="css-4hzbpn leading-[normal]">자연</p>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-white col-[5] css-por8k5 relative rounded-[20px] row-[3] self-start shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[18px] items-start not-italic p-[20px] relative text-black w-full">
          <p className="css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-center">한라산 국립공원</p>
          <Frame41 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame62() {
  return (
    <div className="font-light gap-[8px] grid-cols-[repeat(2,_fit-content(100%))] grid-rows-[repeat(3,_fit-content(100%))] inline-grid leading-[0] relative shrink-0 text-[16px]">
      <div className="col-[1] css-vsca90 flex flex-col font-['Inter:Light','Noto_Sans_JP:Light',sans-serif] justify-center relative row-[1] self-start shrink-0 text-center">
        <p className="css-4hzbpn leading-[normal]">￦</p>
      </div>
      <div className="col-[1] css-vsca90 flex flex-col font-['Inter:Light',sans-serif] justify-center relative row-[2] self-start shrink-0 text-center">
        <p className="css-4hzbpn leading-[normal]">●</p>
      </div>
      <div className="col-[1] css-vsca90 flex flex-col font-['Inter:Light',sans-serif] justify-center relative row-[3] self-start shrink-0 text-center">
        <p className="css-4hzbpn leading-[normal]">※</p>
      </div>
      <div className="col-[2] css-g0mm18 css-uwkwlr flex flex-col font-['Inter:Light',sans-serif] justify-center relative row-[2] self-start shrink-0">
        <p className="css-ew64yg leading-[normal]">{`11:00 ~ 22:00 `}</p>
      </div>
      <div className="col-[2] css-vsca90 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] justify-center relative row-[1] self-start shrink-0">
        <p className="css-4hzbpn leading-[normal]">11,000원</p>
      </div>
      <div className="col-[2] css-vsca90 flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] justify-center relative row-[3] self-start shrink-0">
        <p className="css-4hzbpn leading-[normal]">자연</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="bg-white col-[5] css-por8k5 relative rounded-[20px] row-[4] self-start shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[18px] items-start not-italic p-[20px] relative text-black w-full">
          <p className="css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-center">한라산 국립공원</p>
          <Frame62 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame51() {
  return (
    <div className="col-[4] content-stretch flex flex-col items-center justify-center relative row-[4] self-stretch shrink-0 w-[260px]">
      <div className="aspect-[450/253.125] relative rounded-[12px] shrink-0 w-full" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0">
      <div className="content-stretch flex gap-[18px] items-center overflow-clip px-[10px] py-[13px] relative rounded-[inherit]">
        <p className="css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-center">{`오전  11:30`}</p>
        <div className="bg-[#d9d9d9] rounded-[999px] shrink-0 size-[20px]" />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame52() {
  return (
    <div className="col-[3] content-stretch css-vsca90 flex flex-col items-center justify-center relative row-[4] self-stretch shrink-0">
      <Frame38 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center w-[24px]">
        <p className="css-4hzbpn leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="col-[2] content-stretch css-uwkwlr flex items-center px-[10px] relative row-[4] self-stretch shrink-0">
      <Frame63 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="gap-[10px] grid grid-cols-[repeat(6,_fit-content(100%))] grid-rows-[repeat(4,_fit-content(100%))] p-[40px] relative w-full">
          <p className="col-[1] css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative row-[1] shrink-0 size-[30px] text-[24px] text-black text-center">↕</p>
          <div className="col-[1] css-vsca90 flex flex-col font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative row-[2] self-stretch shrink-0 text-[24px] text-black text-center">
            <p className="css-4hzbpn leading-[normal]">▒</p>
          </div>
          <p className="col-[2] css-4hzbpn font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[30px] leading-[normal] not-italic relative row-[1] shrink-0 text-[24px] text-black text-center w-[60px]">일차</p>
          <p className="col-[3] css-4hzbpn font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[30px] leading-[normal] not-italic relative row-[1] shrink-0 text-[24px] text-black text-center w-[180px]">시간</p>
          <p className="col-[4] css-4hzbpn font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[32px] leading-[normal] not-italic relative row-[1] shrink-0 text-[24px] text-black text-center w-[260px]">사진</p>
          <p className="col-[5] css-4hzbpn font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[32px] leading-[normal] not-italic relative row-[1] shrink-0 text-[24px] text-black text-center w-[240px]">관광지 정보</p>
          <p className="col-[6] css-4hzbpn font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[32px] leading-[normal] not-italic relative row-[1] shrink-0 text-[24px] text-black text-center w-[45px]">관리</p>
          <Frame45 />
          <Frame43 />
          <Frame42 />
          <Frame39 />
          <div className="col-[6] css-vsca90 flex flex-col font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative row-[2] self-stretch shrink-0 text-[24px] text-black text-center">
            <p className="css-4hzbpn leading-[normal]">▣</p>
          </div>
          <div className="col-[1] css-vsca90 flex flex-col font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative row-[3] self-stretch shrink-0 text-[24px] text-black text-center">
            <p className="css-4hzbpn leading-[normal]">▒</p>
          </div>
          <Frame46 />
          <Frame47 />
          <Frame48 />
          <Frame49 />
          <div className="col-[6] css-vsca90 flex flex-col font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative row-[3] self-stretch shrink-0 text-[24px] text-black text-center">
            <p className="css-4hzbpn leading-[normal]">▣</p>
          </div>
          <Frame50 />
          <Frame51 />
          <Frame52 />
          <Frame53 />
          <div className="col-[1] css-vsca90 flex flex-col font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative row-[4] self-stretch shrink-0 text-[24px] text-black text-center">
            <p className="css-4hzbpn leading-[normal]">▒</p>
          </div>
          <div className="col-[6] css-vsca90 flex flex-col font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative row-[4] self-stretch shrink-0 text-[24px] text-black text-center">
            <p className="css-4hzbpn leading-[normal]">▣</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light gap-[10px] items-start relative shrink-0 text-[20px] w-full">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="css-4hzbpn leading-[normal]">머시기 저시기 사유</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="css-4hzbpn leading-[normal]">머시기 저시기 사유</p>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start leading-[0] not-italic relative shrink-0 text-black w-full">
      <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[24px] w-full">
        <p className="css-4hzbpn leading-[normal]">사용 팁</p>
      </div>
      <Frame56 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-[#e3eeff] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[20px] relative w-full">
          <Frame57 />
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-white relative rounded-[40px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[40px]" />
      <div className="content-stretch flex flex-col items-start p-[40px] relative w-full">
        <Frame34 />
        <Frame35 />
        <Frame55 />
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-[#ffc067] relative rounded-[20px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[397px] py-[20px] relative w-full">
          <p className="css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-black">저장하기</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[1052px]">
      <Frame14 />
      <Frame54 />
      <Frame59 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#d9d9d9] col-1 h-[18.881px] ml-[230.92px] mt-[93.36px] relative rounded-[18px] row-1 w-[14.211px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[12px] relative size-full">
          <p className="css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[16px] text-black">2</p>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#d9d9d9] col-1 h-[18.881px] ml-[175.66px] mt-[152.1px] relative rounded-[18px] row-1 w-[14.211px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[12px] relative size-full">
          <p className="css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[16px] text-black">3</p>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#d9d9d9] col-1 h-[18.881px] ml-[90.79px] mt-[123.25px] relative rounded-[18px] row-1 w-[14.211px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[12px] relative size-full">
          <p className="css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[16px] text-black">4</p>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#d9d9d9] col-1 h-[18.881px] ml-[162.63px] mt-[44.58px] relative rounded-[18px] row-1 w-[14.211px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[12px] relative size-full">
          <p className="css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[16px] text-black">1</p>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 h-[225px] ml-0 mt-0 relative row-1 w-[300px]">
        <div className="absolute inset-[-2.22%_-1.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 310 235">
            <ellipse cx="155" cy="117.5" fill="var(--fill-0, #C3FF8E)" id="Ellipse 1" rx="150" ry="112.5" stroke="var(--stroke-0, black)" strokeWidth="10" />
          </svg>
        </div>
      </div>
      <div className="col-1 flex h-[48.776px] items-center justify-center ml-[169.74px] mt-[54.02px] relative row-1 w-[68.289px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[35.54deg] scale-y-[97%] skew-x-[13.51deg]">
          <div className="h-0 relative w-[83.92px]">
            <div className="absolute inset-[-4px_0_0_0]" style={{ "--stroke-0": "rgba(255, 192, 103, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83.92 4">
                <line id="Line 1" stroke="var(--stroke-0, #FFC067)" strokeWidth="4" x2="83.92" y1="2" y2="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[58.741px] items-center justify-center ml-[182.76px] mt-[102.8px] relative row-1 w-[55.263px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-46.75deg] scale-y-[96%] skew-x-[-15.7deg]">
          <div className="h-0 relative w-[80.651px]">
            <div className="absolute inset-[-4px_0_0_0]" style={{ "--stroke-0": "rgba(255, 192, 103, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80.6508 4">
                <line id="Line 2" stroke="var(--stroke-0, #FFC067)" strokeWidth="4" x2="80.6508" y1="2" y2="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[28.846px] items-center justify-center ml-[97.89px] mt-[132.69px] relative row-1 w-[84.868px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-161.23deg] scale-y-[99%] skew-x-[7.87deg]">
          <div className="h-0 relative w-[89.637px]">
            <div className="absolute inset-[-4px_0_0_0]" style={{ "--stroke-0": "rgba(255, 192, 103, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89.6367 4">
                <line id="Line 3" stroke="var(--stroke-0, #FFC067)" strokeWidth="4" x2="89.6367" y1="2" y2="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame15 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#dbf0ff] h-[360px] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[284px] py-[183px] relative size-full">
          <Group />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[40px] relative w-full">
          <p className="css-4hzbpn font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[36px] text-black w-full">동선 지도</p>
          <Frame20 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-center w-full">
      <p className="css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium relative shrink-0">관광지 입장료</p>
      <p className="css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal relative shrink-0">123456789원</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-center w-full">
      <p className="css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium relative shrink-0">숙박비</p>
      <p className="css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal relative shrink-0">123456789원</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-center w-full">
      <p className="css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium relative shrink-0">식비</p>
      <p className="css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal relative shrink-0">123456789원</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pb-[10px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-b border-black border-solid inset-0 pointer-events-none" />
      <Frame21 />
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-center w-full">
      <p className="css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium relative shrink-0">총 예상 비용</p>
      <p className="css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal relative shrink-0">370,370,367원</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame25 />
      <Frame24 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[46px] items-start p-[40px] relative w-full">
        <p className="css-4hzbpn font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[36px] text-black w-full">예상 비용</p>
        <Frame26 />
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[560px]">
      <Frame19 />
      <Frame27 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-white content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full">
      <Frame58 />
      <Frame28 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-center px-[32px] py-[48px] relative shrink-0">
      <Frame60 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="content">
      <Frame5 />
      <Frame6 />
    </div>
  );
}

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

function Frame7() {
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
      <Frame7 />
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

export default function Planner() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="planner">
      <Content />
      <div className="absolute bottom-0 h-[1831px] left-0 pointer-events-none top-0">
        <Header />
      </div>
    </div>
  );
}