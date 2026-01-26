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

function Frame5() {
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

function Frame7() {
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

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#ffc067] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[16px] relative w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px not-italic relative text-[20px] text-center text-white">로그인</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame9 />
      <Frame13 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex font-light gap-[16px] items-center leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-center">
      <p className="css-ew64yg font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] relative shrink-0">비밀번호 찾기</p>
      <p className="css-ew64yg font-['Inter:Light',sans-serif] relative shrink-0">|</p>
      <p className="css-ew64yg font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] relative shrink-0">아이디 찾기</p>
      <p className="css-ew64yg font-['Inter:Light',sans-serif] relative shrink-0">|</p>
      <p className="css-ew64yg font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] relative shrink-0">회원가입</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[40px] shrink-0 w-[568px]">
      <div className="content-stretch flex flex-col gap-[20px] items-center overflow-clip p-[40px] relative rounded-[inherit] w-full">
        <Frame10 />
        <Frame11 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center pb-[160px] pt-[224px] relative shrink-0 w-[704px]">
      <Frame5 />
      <Frame12 />
    </div>
  );
}

export default function Login() {
  return (
    <div className="bg-[#e3eeff] content-stretch flex flex-col items-center relative size-full" data-name="login">
      <BlankPage />
      <Frame6 />
    </div>
  );
}