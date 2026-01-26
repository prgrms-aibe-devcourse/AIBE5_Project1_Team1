import imgImage7 from "figma:asset/73e1dcd836f61821c3d986cad23bf3fa3cd2a178.png";

function Frame6() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-[600px]">
      <div className="content-stretch flex items-center overflow-clip px-[20px] py-[10px] relative rounded-[inherit] w-full">
        <p className="css-4hzbpn font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[560px]">Plan J가 최적의 여행을 구현중입니다. 잠시만 기다려주세요...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Ai() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-full" data-name="AI">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[35px] items-center px-[48px] py-[37px] relative w-full">
          <div className="relative shrink-0 size-[282px]" data-name="image 7">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-[-120.37%] max-w-none size-[316.05%] top-[-69.44%]" src={imgImage7} />
            </div>
          </div>
          <Frame6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Ai1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[10px] pt-[170px] px-[10px] relative shrink-0 w-[724px]" data-name="AI">
      <Ai />
    </div>
  );
}

function MiniLogo() {
  return (
    <div className="bg-[#ffe18e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="mini logo">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="image 8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[-105.86%] max-w-none size-[286.42%] top-[-56.97%]" src={imgImage7} />
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

function Frame5() {
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
      <Frame5 />
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

export default function Loading() {
  return (
    <div className="bg-[#ffede2] content-stretch flex flex-col items-center relative size-full" data-name="Loading">
      <Ai1 />
      <div className="absolute bottom-0 h-[960px] left-0 pointer-events-none top-0">
        <Header />
      </div>
    </div>
  );
}