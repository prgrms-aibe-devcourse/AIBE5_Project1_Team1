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
      <p className="css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-white">로그인</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white content-stretch flex h-[64px] items-center justify-between overflow-clip px-[20px] py-[16px] relative shrink-0 w-[1216px]">
      <Frame3 />
      <Frame4 />
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

function BlankPage() {
  return (
    <div className="absolute bg-[#ffede2] content-stretch flex flex-col h-[960px] items-center left-0 min-h-[960px] overflow-clip top-0 w-[1920px]" data-name="blank page">
      <div className="absolute bottom-0 h-[960px] left-0 pointer-events-none top-0">
        <Header />
      </div>
    </div>
  );
}

function MiniLogo1() {
  return (
    <div className="bg-[#ffe18e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[48px]" data-name="mini logo">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="image 8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[-105.86%] max-w-none size-[286.42%] top-[-56.97%]" src={imgImage8} />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0">
      <MiniLogo1 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[0px] text-[32px] text-black">
        <span className="leading-[normal]">{`PLAN `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] text-[#ffc067]">Jeju</span>
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[16px] relative w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px not-italic relative text-[20px] text-black">아이디</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-[-1px] pointer-events-none rounded-tl-[13px] rounded-tr-[13px]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[16px] relative w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px not-italic relative text-[20px] text-black">이메일</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[16px] relative w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px not-italic relative text-[20px] text-black">비밀번호</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-[-1px] pointer-events-none rounded-bl-[13px] rounded-br-[13px]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame6 />
      <Frame8 />
      <Frame7 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-white relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[16px] relative w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px not-italic relative text-[20px] text-black">이름</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-[-1px] pointer-events-none rounded-tl-[13px] rounded-tr-[13px]" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[16px] relative w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px not-italic relative text-[20px] text-black">별명</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[16px] relative w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px not-italic relative text-[20px] text-black">생년월일 8자리</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="col-[1] css-por8k5 relative rounded-bl-[4px] rounded-tl-[4px] row-[1] self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[4.5px] rounded-tl-[4.5px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[2px] relative w-full">
          <p className="css-ew64yg font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[20px] text-black">남자</p>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="col-[2] css-por8k5 relative row-[1] self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[2px] relative w-full">
          <p className="css-ew64yg font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[20px] text-black">여자</p>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="col-[3] css-por8k5 relative rounded-br-[4px] rounded-tr-[4px] row-[1] self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-br-[4.5px] rounded-tr-[4.5px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[2px] relative w-full">
          <p className="css-ew64yg font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[20px] text-black">선택안함</p>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="grid grid-cols-[repeat(3,_minmax(0,_1fr))] grid-rows-[repeat(1,_fit-content(100%))] px-[20px] py-[16px] relative w-full">
          <Frame12 />
          <Frame13 />
          <Frame14 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-[-1px] pointer-events-none rounded-bl-[13px] rounded-br-[13px]" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame17 />
      <Frame18 />
      <Frame9 />
      <Frame19 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame11 />
      <Frame20 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#ffc067] h-[56px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[16px] relative size-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px not-italic relative text-[20px] text-center text-white">회원가입</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px pt-[20px] relative w-[488px]">
      <Frame21 />
      <Frame10 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-center min-h-px min-w-px pb-[120px] pt-[184px] relative w-[704px]">
      <Frame16 />
      <Frame15 />
    </div>
  );
}

export default function SignUp() {
  return (
    <div className="bg-[#e3eeff] content-stretch flex flex-col items-center relative size-full" data-name="sign up">
      <BlankPage />
      <Frame5 />
    </div>
  );
}