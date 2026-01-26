import imgFrame66 from "figma:asset/424c5ca820ae850ac6fbe42e3a30a18956725c45.png";

function Frame1() {
  return (
    <div className="h-[465px] relative shrink-0 w-[620px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame66} />
    </div>
  );
}

function Frame12() {
  return (
    <button className="absolute bg-[#d9d9d9] content-stretch cursor-pointer flex items-center justify-center left-[604px] overflow-clip rounded-[999px] size-[32px] top-[-16px]">
      <p className="css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-left">X</p>
    </button>
  );
}

function Frame() {
  return (
    <div className="bg-[#efefef] content-stretch flex items-center justify-center overflow-clip px-[12px] py-[4px] relative rounded-[999px] shrink-0">
      <p className="css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-black">자연</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <p className="css-ew64yg font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[20px] text-black">한라산</p>
      <Frame />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame9 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[14px] text-black">
      <p className="css-4hzbpn relative shrink-0 w-full">여행시간: 5~7시간</p>
      <p className="css-4hzbpn relative shrink-0 w-full">위치: 제주시</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[620px]">
      <Frame10 />
      <Frame8 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[33px] items-start relative shrink-0 w-full">
      <Frame11 />
      <p className="css-4hzbpn font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light leading-[normal] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">대한민국 최고봉이자 제주의 상징. 백록담까지 오르는 트레킹 코스가 유명합니다.</p>
      <p className="css-ew64yg font-['Inter:Light','Noto_Sans_KR:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[14px] text-black">
        한라산은 제주도 중앙에 위치한 대한민국 최고봉으로 해발 1,947m입니다.
        <br aria-hidden="true" />
        순상화산으로 형성된 휴화산이며, 정상에는 백록담이라는 분화구 호수가 있습니다.
        <br aria-hidden="true" />
        고도에 따라 다양한 식생이 분포해 생태적 가치가 매우 높습니다.
        <br aria-hidden="true" />
        이러한 자연적 가치를 인정받아 유네스코 세계자연유산으로 등재되어 있습니다.
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
        <div className="bg-[#59ff00] shrink-0 size-[24px]" />
        <p className="css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-black">네이버 링크</p>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
        <div className="bg-[#ffea00] shrink-0 size-[24px]" />
        <p className="css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-black">카카오 링크</p>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
        <div className="bg-[#3b82f6] shrink-0 size-[24px]" />
        <p className="css-ew64yg font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-black">구글 링크</p>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[465px] items-start justify-between left-0 top-0 w-[620px]">
      <Frame7 />
      <Frame5 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[465px] relative shrink-0 w-[620px]">
      <Frame12 />
      <Frame6 />
    </div>
  );
}

export default function Overlay() {
  return (
    <div className="bg-white relative size-full" data-name="overlay">
      <div className="content-stretch flex gap-[40px] items-center p-[40px] relative size-full">
        <Frame1 />
        <Frame13 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}