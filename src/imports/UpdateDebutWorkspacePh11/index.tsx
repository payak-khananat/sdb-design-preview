import svgPaths from "./svg-uzo8tkg292";

function Heading() {
  return (
    <div className="relative shrink-0" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">DEBUT WORKSPACE</p>
      </div>
    </div>
  );
}

function Container2() {
  return <div className="bg-[rgba(255,255,255,0.3)] h-[16px] relative shrink-0 w-px" data-name="Container" />;
}

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[25.714px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Meeting</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Heading />
        <Container2 />
        <Text />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[12.85px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col h-[41.711px] items-start justify-center left-0 overflow-clip pl-[40px] pr-[16px] py-[8px] rounded-[10px] top-0 w-[500px]" data-name="Text Input">
      <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-[rgba(10,10,10,0.5)] w-full">Search...</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[41.711px] relative shrink-0 w-[500px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
        <TextInput />
      </div>
    </div>
  );
}

function Container5() {
  return <div className="relative shrink-0 size-0" data-name="Container" />;
}

function Container6() {
  return <div className="relative shrink-0 size-0" data-name="Container" />;
}

function Container7() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Bold',sans-serif] leading-[25.714px] not-italic relative shrink-0 text-[#e67e22] text-[18px] text-center whitespace-nowrap">S</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container5 />
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#e67e22] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[24px] py-[10px] relative size-full">
          <Container1 />
          <Container3 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return <div className="absolute left-0 rounded-[16px] size-[56px] top-0" style={{ backgroundImage: "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0) 100%)" }} data-name="Container" />;
}

function Text1() {
  return (
    <div className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.15)] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">DB</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[8px] relative shrink-0 w-[39px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[6px] not-italic relative shrink-0 text-[6px] text-[rgba(255,255,255,0.9)] tracking-[0.3px] whitespace-nowrap">WORKSPACE</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[8.48px] top-[12px]" data-name="Container">
      <Text1 />
      <Text2 />
    </div>
  );
}

function Container9() {
  return (
    <div className="col-1 drop-shadow-[0px_20px_12.5px_rgba(255,105,0,0.3),0px_8px_5px_rgba(255,105,0,0.3)] ml-0 mt-0 relative rounded-[16px] row-1 size-[56px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(230, 126, 34) 0%, rgb(232, 130, 32) 7.1429%, rgb(234, 135, 31) 14.286%, rgb(236, 139, 29) 21.429%, rgb(238, 143, 27) 28.571%, rgb(239, 147, 24) 35.714%, rgb(241, 152, 21) 42.857%, rgb(243, 156, 18) 50%, rgb(242, 146, 31) 57.143%, rgb(241, 135, 39) 64.286%, rgb(239, 124, 45) 71.429%, rgb(237, 113, 50) 78.571%, rgb(235, 102, 54) 85.714%, rgb(233, 89, 57) 92.857%, rgb(231, 76, 60) 100%)" }} data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Container9 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Group />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Icon">
          <path d={svgPaths.p2bbf6680} id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p206ad900} id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[12.5px] not-italic relative shrink-0 text-[#99a1af] text-[10px] text-center whitespace-nowrap">Home</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[64px] relative rounded-[14px] shrink-0 w-[80px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center justify-center relative size-full">
        <Icon1 />
        <Text3 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Icon">
          <path d={svgPaths.p3c61fe80} id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[12.5px] not-italic relative shrink-0 text-[#99a1af] text-[10px] text-center whitespace-nowrap">Chat</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[64px] relative rounded-[14px] shrink-0 w-[80px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center justify-center relative size-full">
        <Icon2 />
        <Text4 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Icon">
          <path d={svgPaths.p2bf8f980} id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p311e6900} id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[12.5px] not-italic relative shrink-0 text-[#99a1af] text-[10px] text-center whitespace-nowrap">Mail</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[64px] relative rounded-[14px] shrink-0 w-[80px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center justify-center relative size-full">
        <Icon3 />
        <Text5 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Icon">
          <path d="M12 8V4H8" id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p22a3b200} id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2 14H4" id="Vector_3" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M20 14H22" id="Vector_4" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M15 13V15" id="Vector_5" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 13V15" id="Vector_6" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[12.5px] not-italic relative shrink-0 text-[#99a1af] text-[10px] text-center whitespace-nowrap">SmartChat</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[64px] relative rounded-[14px] shrink-0 w-[80px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center justify-center relative size-full">
        <Icon4 />
        <Text6 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Icon">
          <path d="M8 2V6" id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 2V6" id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p32f12c00} id="Vector_3" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 10H21" id="Vector_4" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[12.5px] not-italic relative shrink-0 text-[#99a1af] text-[10px] text-center whitespace-nowrap">Calendar</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[64px] relative rounded-[14px] shrink-0 w-[80px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center justify-center relative size-full">
        <Icon5 />
        <Text7 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Icon">
          <path d={svgPaths.p1c4d0dc0} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p4207a00} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[12.5px] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">Meeting</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#e67e22] drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] h-[64px] relative rounded-[14px] shrink-0 w-[80px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center justify-center relative size-full">
        <Icon6 />
        <Text8 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Icon">
          <path d={svgPaths.pb47f400} id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p17a13100} id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[12.5px] not-italic relative shrink-0 text-[#99a1af] text-[10px] text-center whitespace-nowrap">Files</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[64px] relative rounded-[14px] shrink-0 w-[80px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center justify-center relative size-full">
        <Icon7 />
        <Text9 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Icon">
          <path d={svgPaths.p1d820380} id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p161d4800} id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2981fe00} id="Vector_3" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p13e20900} id="Vector_4" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[12.5px] not-italic relative shrink-0 text-[#99a1af] text-[10px] text-center whitespace-nowrap">Contact</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[64px] relative rounded-[14px] shrink-0 w-[80px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center justify-center relative size-full">
        <Icon8 />
        <Text10 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="flex-[555.289_0_0] min-h-px relative w-[96px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start overflow-clip px-[8px] relative rounded-[inherit] size-full">
        <Button />
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
        <Button6 />
        <Button7 />
      </div>
    </div>
  );
}

function Container13() {
  return <div className="h-0 relative shrink-0 w-[96px]" data-name="Container" />;
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <Container13 />
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="bg-[#2c2d30] h-full relative shrink-0 w-[96px]" data-name="Sidebar">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center py-[16px] relative size-full">
          <ContainerMargin />
          <Container12 />
          <ContainerMargin1 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Bold',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#101828] text-[20px] whitespace-nowrap">Meetings</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[28px] relative shrink-0 w-[391.047px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] whitespace-nowrap">Manage your video calls, meetings, and room bookings</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-[391.047px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading1 />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[13.82px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#e67e22] h-[43px] relative rounded-[10px] shrink-0 w-[180.922px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon9 />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[27px] left-[102.5px] not-italic text-[18px] text-center text-white top-[7.5px] whitespace-nowrap">Create Meeting</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container16 />
        <Button8 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[25px] pt-[24px] px-[32px] relative size-full">
        <Container15 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Icon">
          <path d={svgPaths.p1c4d0dc0} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p4207a00} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#e67e22] relative rounded-[14px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[27px] not-italic relative shrink-0 text-[#101828] text-[18px] whitespace-nowrap">Video Call</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[23px] relative shrink-0 w-[143.828px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#6a7282] text-[14px] whitespace-nowrap">Start instant video call</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-[143.828px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading2 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[16px] items-center left-0 p-[21px] rounded-[14px] top-0 w-[308px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container19 />
      <Container20 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Icon">
          <path d={svgPaths.p375d9e80} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#2b7fff] relative rounded-[14px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[27px] not-italic relative shrink-0 text-[#101828] text-[18px] whitespace-nowrap">Voice Call</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[23px] relative shrink-0 w-[129.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#6a7282] text-[14px] whitespace-nowrap">Start audio-only call</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-[129.688px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading3 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[16px] items-center left-[324px] p-[21px] rounded-[14px] top-0 w-[308px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container21 />
      <Container22 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Icon">
          <path d="M12 8V4H8" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p22a3b200} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2 14H4" id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M20 14H22" id="Vector_4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M15 13V15" id="Vector_5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 13V15" id="Vector_6" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#ad46ff] relative rounded-[14px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[27px] not-italic relative shrink-0 text-[#101828] text-[18px] whitespace-nowrap">AI Meeting</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[23px] relative shrink-0 w-[162.547px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#6a7282] text-[14px] whitespace-nowrap">Meeting with AI assistant</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-[162.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading4 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[16px] items-center left-[648px] p-[21px] rounded-[14px] top-0 w-[308px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container23 />
      <Container24 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Icon">
          <path d="M8 2V6" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 2V6" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p32f12c00} id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 10H21" id="Vector_4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#00c950] relative rounded-[14px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[27px] not-italic relative shrink-0 text-[#101828] text-[18px] whitespace-nowrap">New Schedule</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[23px] relative shrink-0 w-[156.594px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#6a7282] text-[14px] whitespace-nowrap">Schedule a new meeting</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-[156.594px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading5 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[16px] items-center left-[972px] p-[21px] rounded-[14px] top-0 w-[308px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[92px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button9 />
        <Button10 />
        <Button11 />
        <Button12 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d={svgPaths.p24bc3d00} id="Vector" stroke="#2B7FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3e238c80} id="Vector_2" stroke="#2B7FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#101828] text-[20px] whitespace-nowrap">Meetings</p>
        <Icon14 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Heading6 />
        <Button13 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="flex-[466_0_0] min-w-px relative" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[8px] relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[25.714px] not-italic relative shrink-0 text-[#101828] text-[18px] whitespace-nowrap">Q1 Product Review</p>
      </div>
    </div>
  );
}

function Text13() {
  return <div className="absolute bg-[#e67e22] h-[5.51px] left-0 rounded-[13923489px] top-[1.25px] w-[2px]" data-name="Text" />;
}

function TextTransform() {
  return (
    <div className="h-[8px] relative shrink-0 w-[2px]" data-name="Text:transform">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text13 />
      </div>
    </div>
  );
}

function Text14() {
  return <div className="absolute bg-[#e67e22] h-[7.615px] left-0 rounded-[12373500px] top-[3.28px] w-[2px]" data-name="Text" />;
}

function TextTransform1() {
  return (
    <div className="h-[14px] relative shrink-0 w-[2px]" data-name="Text:transform">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text14 />
      </div>
    </div>
  );
}

function Text15() {
  return <div className="absolute bg-[#e67e22] h-[4.437px] left-0 rounded-[11175038px] top-[2.67px] w-[2px]" data-name="Text" />;
}

function TextTransform2() {
  return (
    <div className="h-[10px] relative shrink-0 w-[2px]" data-name="Text:transform">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text15 />
      </div>
    </div>
  );
}

function Text16() {
  return <div className="absolute bg-[#e67e22] h-[6.428px] left-0 rounded-[10634217px] top-[4.79px] w-[2px]" data-name="Text" />;
}

function TextTransform3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[2px]" data-name="Text:transform">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text16 />
      </div>
    </div>
  );
}

function Text17() {
  return <div className="absolute bg-[#e67e22] h-[4.561px] left-0 rounded-[10802902px] top-[3.28px] w-[2px]" data-name="Text" />;
}

function TextTransform4() {
  return (
    <div className="h-[11px] relative shrink-0 w-[2px]" data-name="Text:transform">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text17 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[16px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-px items-end relative size-full">
        <TextTransform />
        <TextTransform1 />
        <TextTransform2 />
        <TextTransform3 />
        <TextTransform4 />
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute bg-[#e67e22] content-stretch flex items-center justify-center left-0 p-[2px] rounded-[16777200px] size-[24px] top-0" data-name="Text">
      <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Bold',sans-serif] leading-[13.5px] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">JD</p>
    </div>
  );
}

function TextMargin() {
  return (
    <div className="h-[24px] relative shrink-0 w-[16px]" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text19 />
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute bg-[#ffb86a] content-stretch flex items-center justify-center left-0 p-[2px] rounded-[16777200px] size-[24px] top-0" data-name="Text">
      <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Bold',sans-serif] leading-[13.5px] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">SK</p>
    </div>
  );
}

function TextMargin1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[16px]" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text20 />
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="bg-[#fdc700] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Text">
      <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Bold',sans-serif] leading-[13.5px] not-italic relative shrink-0 text-[9px] text-white whitespace-nowrap">PT</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <TextMargin />
        <TextMargin1 />
        <Text21 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Text12 />
        <Text18 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-[542px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Heading7 />
        <Text11 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_49)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_0_49">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[30px] relative shrink-0 w-[542px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center pt-[8px] relative size-full">
        <Icon16 />
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#4a5565] text-[16px] whitespace-nowrap">10:00 AM - 11:00 AM</p>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#99a1af] text-[16px] whitespace-nowrap">ID: 123-456-789</p>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M7.5 1.5H10.5V4.5" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7L10.5 1.5" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1a2200} id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#e67e22] relative rounded-[10px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[12px] py-[6px] relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Join</p>
        <Icon17 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[46px] relative shrink-0 w-[542px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
        <Text22 />
        <Button14 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[#fff7ed] drop-shadow-[0px_4px_3px_#ffedd4,0px_2px_2px_#ffedd4] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#e67e22] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[18px] relative size-full">
        <Container33 />
        <Paragraph5 />
        <Container34 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[8px] relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[25.714px] not-italic relative shrink-0 text-[#101828] text-[18px] whitespace-nowrap">Client Presentation</p>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_49)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_0_49">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[30px] relative shrink-0 w-[542px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center pt-[8px] relative size-full">
        <Icon18 />
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#4a5565] text-[16px] whitespace-nowrap">9:00 AM - 10:00 AM</p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#99a1af] text-[16px] whitespace-nowrap">ID: 987-654-321</p>
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M7.5 1.5H10.5V4.5" id="Vector" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7L10.5 1.5" id="Vector_2" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1a2200} id="Vector_3" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e67e22] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[13px] py-[7px] relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#e67e22] text-[16px] text-center whitespace-nowrap">Join</p>
        <Icon19 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[48px] relative shrink-0 w-[542px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
        <Text23 />
        <Button15 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col items-start p-[18px] relative size-full">
        <Container36 />
        <Paragraph6 />
        <Container37 />
      </div>
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Container35 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[306px] relative shrink-0 w-[578px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container32 />
        <ContainerMargin3 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[25px] relative size-full">
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d="M6.66667 1.66667V5" id="Vector" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading8() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#101828] text-[20px] whitespace-nowrap">Upcoming</p>
        <Icon20 />
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Icon21 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Heading8 />
        <Button16 />
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p144f51c0} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1e94b080} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-[#8ec5ff] relative rounded-[14px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon22 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[21.328px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap">Q1 Product Review</p>
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g clipPath="url(#clip0_0_29)" id="Icon">
          <path d={svgPaths.p3cf7650} id="Vector" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M5 2.5V5L6.66667 5.83333" id="Vector_2" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_0_29">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute content-stretch flex gap-[2px] items-center left-0 top-0" data-name="Text">
      <Icon23 />
      <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#99a1af] text-[16px] whitespace-nowrap">10:00 AM – 11:00 AM</p>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g clipPath="url(#clip0_0_24)" id="Icon">
          <path d="M3.33333 0.833333V2.5" id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M6.66667 0.833333V2.5" id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.p6dda540} id="Vector_3" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M1.25 4.16667H8.75" id="Vector_4" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_0_24">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute content-stretch flex gap-[2px] items-center left-[191.51px] top-0" data-name="Text">
      <Icon24 />
      <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#99a1af] text-[16px] whitespace-nowrap">Today</p>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g clipPath="url(#clip0_0_93)" id="Icon">
          <path d={svgPaths.p34ec8600} id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.pdead2f0} id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.p2e522c80} id="Vector_3" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.p1fb0c4f0} id="Vector_4" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_0_93">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text26() {
  return (
    <div className="absolute content-stretch flex gap-[2px] items-center left-0 top-[29.33px]" data-name="Text">
      <Icon25 />
      <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#99a1af] text-[16px] whitespace-nowrap">3 คน</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[50.656px] relative shrink-0 w-full" data-name="Container">
      <Text24 />
      <p className="[word-break:break-word] absolute font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] left-[177.16px] not-italic text-[#99a1af] text-[16px] top-0 whitespace-nowrap">•</p>
      <Text25 />
      <p className="[word-break:break-word] absolute font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] left-[254.31px] not-italic text-[#99a1af] text-[16px] top-0 whitespace-nowrap">•</p>
      <p className="[word-break:break-word] absolute font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] left-[268.66px] not-italic text-[#51a2ff] text-[16px] top-0 whitespace-nowrap">ID: 123-456-789</p>
      <p className="[word-break:break-word] absolute font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] left-[401.41px] not-italic text-[#99a1af] text-[16px] top-0 whitespace-nowrap">•</p>
      <Text26 />
    </div>
  );
}

function ContainerMargin5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <Container45 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="flex-[424.445_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph7 />
        <ContainerMargin5 />
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g clipPath="url(#clip0_0_17)" id="Icon">
          <path d="M6.25 1.25H8.75V3.75" id="Vector" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M4.16667 5.83333L8.75 1.25" id="Vector_2" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.p215abe00} id="Vector_3" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_0_17">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e67e22] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[11px] py-[5px] relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#e67e22] text-[16px] text-center whitespace-nowrap">Join</p>
        <Icon26 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-[552px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container43 />
        <Container44 />
        <Button17 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[13px] relative size-full">
        <Container42 />
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p144f51c0} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1e94b080} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-[#e6a96e] relative rounded-[14px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon27 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[21.328px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap">Design Sprint Planning</p>
      </div>
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g clipPath="url(#clip0_0_29)" id="Icon">
          <path d={svgPaths.p3cf7650} id="Vector" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M5 2.5V5L6.66667 5.83333" id="Vector_2" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_0_29">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text27() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-center relative size-full">
        <Icon28 />
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#99a1af] text-[16px] whitespace-nowrap">2:00 PM – 3:30 PM</p>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#99a1af] text-[16px] whitespace-nowrap">•</p>
      </div>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g clipPath="url(#clip0_0_24)" id="Icon">
          <path d="M3.33333 0.833333V2.5" id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M6.66667 0.833333V2.5" id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.p6dda540} id="Vector_3" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M1.25 4.16667H8.75" id="Vector_4" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_0_24">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text29() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-center relative size-full">
        <Icon29 />
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#99a1af] text-[16px] whitespace-nowrap">Today</p>
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#99a1af] text-[16px] whitespace-nowrap">•</p>
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g clipPath="url(#clip0_0_93)" id="Icon">
          <path d={svgPaths.p34ec8600} id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.pdead2f0} id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.p2e522c80} id="Vector_3" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.p1fb0c4f0} id="Vector_4" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_0_93">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text31() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-center relative size-full">
        <Icon30 />
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#99a1af] text-[16px] whitespace-nowrap">2 คน</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[24px] relative shrink-0 w-[424px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pt-[2px] relative size-full">
        <Text27 />
        <Text28 />
        <Text29 />
        <Text30 />
        <Text31 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="flex-[424.445_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph8 />
        <Container50 />
      </div>
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g clipPath="url(#clip0_0_17)" id="Icon">
          <path d="M6.25 1.25H8.75V3.75" id="Vector" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M4.16667 5.83333L8.75 1.25" id="Vector_2" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.p215abe00} id="Vector_3" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_0_17">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e67e22] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[11px] py-[5px] relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#e67e22] text-[16px] text-center whitespace-nowrap">Join</p>
        <Icon31 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 w-[552px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container48 />
        <Container49 />
        <Button18 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col items-start p-[13px] relative size-full">
        <Container47 />
      </div>
    </div>
  );
}

function ContainerMargin6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Container46 />
      </div>
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p144f51c0} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1e94b080} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-[#8ec5ff] relative rounded-[14px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon32 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[21.328px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap">Client Presentation</p>
      </div>
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g clipPath="url(#clip0_0_29)" id="Icon">
          <path d={svgPaths.p3cf7650} id="Vector" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M5 2.5V5L6.66667 5.83333" id="Vector_2" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_0_29">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text32() {
  return (
    <div className="absolute content-stretch flex gap-[2px] items-center left-0 top-0" data-name="Text">
      <Icon33 />
      <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#99a1af] text-[16px] whitespace-nowrap">9:00 AM – 10:00 AM</p>
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g clipPath="url(#clip0_0_24)" id="Icon">
          <path d="M3.33333 0.833333V2.5" id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M6.66667 0.833333V2.5" id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.p6dda540} id="Vector_3" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M1.25 4.16667H8.75" id="Vector_4" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_0_24">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text33() {
  return (
    <div className="absolute content-stretch flex gap-[2px] items-center left-[181.91px] top-0" data-name="Text">
      <Icon34 />
      <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#99a1af] text-[16px] whitespace-nowrap">Tomorrow</p>
    </div>
  );
}

function Icon35() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g clipPath="url(#clip0_0_93)" id="Icon">
          <path d={svgPaths.p34ec8600} id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.pdead2f0} id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.p2e522c80} id="Vector_3" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.p1fb0c4f0} id="Vector_4" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_0_93">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text34() {
  return (
    <div className="absolute content-stretch flex gap-[2px] items-center left-[14.34px] top-[29.33px]" data-name="Text">
      <Icon35 />
      <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#99a1af] text-[16px] whitespace-nowrap">4 คน</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[50.656px] relative shrink-0 w-full" data-name="Container">
      <Text32 />
      <p className="[word-break:break-word] absolute font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] left-[167.56px] not-italic text-[#99a1af] text-[16px] top-0 whitespace-nowrap">•</p>
      <Text33 />
      <p className="[word-break:break-word] absolute font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] left-[274.74px] not-italic text-[#99a1af] text-[16px] top-0 whitespace-nowrap">•</p>
      <p className="[word-break:break-word] absolute font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] left-[289.09px] not-italic text-[#51a2ff] text-[16px] top-0 whitespace-nowrap">ID: 987-654-321</p>
      <p className="[word-break:break-word] absolute font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] left-0 not-italic text-[#99a1af] text-[16px] top-[29.33px] whitespace-nowrap">•</p>
      <Text34 />
    </div>
  );
}

function ContainerMargin8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <Container55 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="flex-[424.445_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph9 />
        <ContainerMargin8 />
      </div>
    </div>
  );
}

function Icon36() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g clipPath="url(#clip0_0_17)" id="Icon">
          <path d="M6.25 1.25H8.75V3.75" id="Vector" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M4.16667 5.83333L8.75 1.25" id="Vector_2" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.p215abe00} id="Vector_3" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_0_17">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button19() {
  return (
    <div className="relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e67e22] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[11px] py-[5px] relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#e67e22] text-[16px] text-center whitespace-nowrap">Join</p>
        <Icon36 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 w-[552px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container53 />
        <Container54 />
        <Button19 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col items-start p-[13px] relative size-full">
        <Container52 />
      </div>
    </div>
  );
}

function ContainerMargin7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Container51 />
      </div>
    </div>
  );
}

function Icon37() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p144f51c0} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1e94b080} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container58() {
  return (
    <div className="bg-[#e6a96e] relative rounded-[14px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon37 />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[21.328px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap">Strategy Discussion</p>
      </div>
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g clipPath="url(#clip0_0_29)" id="Icon">
          <path d={svgPaths.p3cf7650} id="Vector" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M5 2.5V5L6.66667 5.83333" id="Vector_2" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_0_29">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text35() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-center relative size-full">
        <Icon38 />
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#99a1af] text-[16px] whitespace-nowrap">11:00 AM – 12:00 PM</p>
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#99a1af] text-[16px] whitespace-nowrap">•</p>
      </div>
    </div>
  );
}

function Icon39() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g clipPath="url(#clip0_0_24)" id="Icon">
          <path d="M3.33333 0.833333V2.5" id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M6.66667 0.833333V2.5" id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.p6dda540} id="Vector_3" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M1.25 4.16667H8.75" id="Vector_4" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_0_24">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text37() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-center relative size-full">
        <Icon39 />
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#99a1af] text-[16px] whitespace-nowrap">Tomorrow</p>
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#99a1af] text-[16px] whitespace-nowrap">•</p>
      </div>
    </div>
  );
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g clipPath="url(#clip0_0_93)" id="Icon">
          <path d={svgPaths.p34ec8600} id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.pdead2f0} id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.p2e522c80} id="Vector_3" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.p1fb0c4f0} id="Vector_4" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_0_93">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text39() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-center relative size-full">
        <Icon40 />
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#99a1af] text-[16px] whitespace-nowrap">2 คน</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[24px] relative shrink-0 w-[424px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pt-[2px] relative size-full">
        <Text35 />
        <Text36 />
        <Text37 />
        <Text38 />
        <Text39 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="flex-[424.445_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph10 />
        <Container60 />
      </div>
    </div>
  );
}

function Icon41() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g clipPath="url(#clip0_0_17)" id="Icon">
          <path d="M6.25 1.25H8.75V3.75" id="Vector" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M4.16667 5.83333L8.75 1.25" id="Vector_2" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.p215abe00} id="Vector_3" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_0_17">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button20() {
  return (
    <div className="relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e67e22] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[11px] py-[5px] relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#e67e22] text-[16px] text-center whitespace-nowrap">Join</p>
        <Icon41 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0 w-[552px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container58 />
        <Container59 />
        <Button20 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col items-start p-[13px] relative size-full">
        <Container57 />
      </div>
    </div>
  );
}

function ContainerMargin9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Container56 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[394.625px] relative shrink-0 w-[578px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container41 />
        <ContainerMargin6 />
        <ContainerMargin7 />
        <ContainerMargin9 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col items-start p-[25px] relative size-full">
        <Container39 />
        <Container40 />
      </div>
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container38 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col h-[880.016px] items-start left-0 top-0 w-[628px]" data-name="Container">
      <Container29 />
      <ContainerMargin4 />
    </div>
  );
}

function Icon42() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_11)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="#E67E22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_0_11">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading9() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon42 />
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#101828] text-[24px] whitespace-nowrap">History</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[24px] relative size-full">
          <Heading9 />
        </div>
      </div>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="absolute bg-[#f9fafb] h-[39.328px] left-0 rounded-[14px] top-0 w-[144.07px]" data-name="Text Input">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip pl-[37px] pr-[13px] py-[9px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] w-full">Search...</p>
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Icon43() {
  return (
    <div className="absolute left-[12px] size-[14px] top-[12.66px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Icon">
          <path d={svgPaths.p8cdb700} id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M12.25 12.25L9.74167 9.74167" id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container66() {
  return (
    <div className="flex-[144.07_0_0] h-[39.328px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <TextInput1 />
        <Icon43 />
      </div>
    </div>
  );
}

function DatePicker() {
  return (
    <div className="bg-[#f9fafb] h-[39.328px] relative rounded-[14px] shrink-0 w-[165px]" data-name="Date Picker">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] absolute font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[normal] left-[20px] not-italic text-[#0a0a0a] text-[16px] top-[6.29px] w-[94.07px]">dd/mm/yyyy</p>
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Text40() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#d1d5dc] text-[16px] whitespace-nowrap">–</p>
      </div>
    </div>
  );
}

function DatePicker1() {
  return (
    <div className="bg-[#f9fafb] h-[39.328px] relative rounded-[14px] shrink-0 w-[165px]" data-name="Date Picker">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] absolute font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[normal] left-[20px] not-italic text-[#0a0a0a] text-[16px] top-[6.29px] w-[94.07px]">dd/mm/yyyy</p>
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Text41() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#99a1af] text-[16px] whitespace-nowrap">6 results</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="relative shrink-0 w-[578px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container66 />
        <DatePicker />
        <Text40 />
        <DatePicker1 />
        <Text41 />
      </div>
    </div>
  );
}

function Icon44() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p144f51c0} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1e94b080} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container70() {
  return (
    <div className="bg-[#8ec5ff] relative rounded-[14px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon44 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[25.711px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[25.714px] not-italic relative shrink-0 text-[#101828] text-[18px] whitespace-nowrap">Weekly Team Sync</p>
      </div>
    </div>
  );
}

function Icon45() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M4 1V3" id="Vector" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 1V3" id="Vector_2" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p333d5300} id="Vector_3" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 5H10.5" id="Vector_4" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text42() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon45 />
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">Yesterday</p>
      </div>
    </div>
  );
}

function Icon46() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_14)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text43() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon46 />
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">9:00 AM - 9:30 AM</p>
      </div>
    </div>
  );
}

function Text44() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#d1d5dc] text-[16px] whitespace-nowrap">•</p>
      </div>
    </div>
  );
}

function Text45() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">28 min</p>
      </div>
    </div>
  );
}

function Text46() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#d1d5dc] text-[16px] whitespace-nowrap">•</p>
      </div>
    </div>
  );
}

function Icon47() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p38fdee00} id="Vector" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p13058e80} id="Vector_2" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3b81ea80} id="Vector_3" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3b3a5000} id="Vector_4" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text47() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon47 />
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">8 คน</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[24px] relative shrink-0 w-[460px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pt-[2px] relative size-full">
        <Text42 />
        <Text43 />
        <Text44 />
        <Text45 />
        <Text46 />
        <Text47 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="flex-[460_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading10 />
        <Container72 />
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="flex-[508_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container70 />
        <Container71 />
      </div>
    </div>
  );
}

function Icon48() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button21() {
  return (
    <div className="h-[24px] relative shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center pl-[16px] pr-[4px] py-[4px] relative size-full">
        <Icon48 />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="relative shrink-0 w-[544px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container69 />
        <Button21 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start px-[17px] py-[13px] relative size-full">
        <Container68 />
      </div>
    </div>
  );
}

function ContainerMargin10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container67 />
      </div>
    </div>
  );
}

function Icon49() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p144f51c0} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1e94b080} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container76() {
  return (
    <div className="bg-[#e6a96e] relative rounded-[14px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon49 />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[25.711px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[25.714px] not-italic relative shrink-0 text-[#101828] text-[18px] whitespace-nowrap">Code Review Session</p>
      </div>
    </div>
  );
}

function Icon50() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M4 1V3" id="Vector" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 1V3" id="Vector_2" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p333d5300} id="Vector_3" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 5H10.5" id="Vector_4" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text48() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon50 />
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">Mar 21</p>
      </div>
    </div>
  );
}

function Icon51() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_14)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text49() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon51 />
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">3:00 PM - 4:00 PM</p>
      </div>
    </div>
  );
}

function Text50() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#d1d5dc] text-[16px] whitespace-nowrap">•</p>
      </div>
    </div>
  );
}

function Text51() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">55 min</p>
      </div>
    </div>
  );
}

function Text52() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#d1d5dc] text-[16px] whitespace-nowrap">•</p>
      </div>
    </div>
  );
}

function Icon52() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p38fdee00} id="Vector" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p13058e80} id="Vector_2" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3b81ea80} id="Vector_3" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3b3a5000} id="Vector_4" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text53() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon52 />
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">8 คน</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[24px] relative shrink-0 w-[460px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pt-[2px] relative size-full">
        <Text48 />
        <Text49 />
        <Text50 />
        <Text51 />
        <Text52 />
        <Text53 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="flex-[460_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading11 />
        <Container78 />
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="flex-[508_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container76 />
        <Container77 />
      </div>
    </div>
  );
}

function Icon53() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button22() {
  return (
    <div className="h-[24px] relative shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center pl-[16px] pr-[4px] py-[4px] relative size-full">
        <Icon53 />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="relative shrink-0 w-[544px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container75 />
        <Button22 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start px-[17px] py-[13px] relative size-full">
        <Container74 />
      </div>
    </div>
  );
}

function ContainerMargin11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container73 />
      </div>
    </div>
  );
}

function Icon54() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p144f51c0} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1e94b080} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container82() {
  return (
    <div className="bg-[#e6a96e] relative rounded-[14px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon54 />
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[25.711px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[25.714px] not-italic relative shrink-0 text-[#101828] text-[18px] whitespace-nowrap">Marketing Campaign Brainstorm</p>
      </div>
    </div>
  );
}

function Icon55() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M4 1V3" id="Vector" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 1V3" id="Vector_2" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p333d5300} id="Vector_3" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 5H10.5" id="Vector_4" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text54() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon55 />
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">Mar 20</p>
      </div>
    </div>
  );
}

function Icon56() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_14)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text55() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon56 />
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">10:00 AM - 11:00 AM</p>
      </div>
    </div>
  );
}

function Text56() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#d1d5dc] text-[16px] whitespace-nowrap">•</p>
      </div>
    </div>
  );
}

function Text57() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">1 hr 2 min</p>
      </div>
    </div>
  );
}

function Text58() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#d1d5dc] text-[16px] whitespace-nowrap">•</p>
      </div>
    </div>
  );
}

function Icon57() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p38fdee00} id="Vector" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p13058e80} id="Vector_2" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3b81ea80} id="Vector_3" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3b3a5000} id="Vector_4" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text59() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon57 />
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">8 คน</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[24px] relative shrink-0 w-[460px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pt-[2px] relative size-full">
        <Text54 />
        <Text55 />
        <Text56 />
        <Text57 />
        <Text58 />
        <Text59 />
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="flex-[460_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading12 />
        <Container84 />
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="flex-[508_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container82 />
        <Container83 />
      </div>
    </div>
  );
}

function Icon58() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button23() {
  return (
    <div className="h-[24px] relative shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center pl-[16px] pr-[4px] py-[4px] relative size-full">
        <Icon58 />
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="relative shrink-0 w-[544px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container81 />
        <Button23 />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start px-[17px] py-[13px] relative size-full">
        <Container80 />
      </div>
    </div>
  );
}

function ContainerMargin12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container79 />
      </div>
    </div>
  );
}

function Icon59() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p144f51c0} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1e94b080} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container88() {
  return (
    <div className="bg-[#8ec5ff] relative rounded-[14px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon59 />
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[25.711px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[25.714px] not-italic relative shrink-0 text-[#101828] text-[18px] whitespace-nowrap">Sprint Retrospective Q1</p>
      </div>
    </div>
  );
}

function Icon60() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M4 1V3" id="Vector" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 1V3" id="Vector_2" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p333d5300} id="Vector_3" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 5H10.5" id="Vector_4" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text60() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon60 />
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">Mar 19</p>
      </div>
    </div>
  );
}

function Icon61() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_14)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text61() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon61 />
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">2:00 PM - 3:00 PM</p>
      </div>
    </div>
  );
}

function Text62() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#d1d5dc] text-[16px] whitespace-nowrap">•</p>
      </div>
    </div>
  );
}

function Text63() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">58 min</p>
      </div>
    </div>
  );
}

function Text64() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#d1d5dc] text-[16px] whitespace-nowrap">•</p>
      </div>
    </div>
  );
}

function Icon62() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p38fdee00} id="Vector" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p13058e80} id="Vector_2" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3b81ea80} id="Vector_3" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3b3a5000} id="Vector_4" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text65() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon62 />
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">4 คน</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[24px] relative shrink-0 w-[460px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pt-[2px] relative size-full">
        <Text60 />
        <Text61 />
        <Text62 />
        <Text63 />
        <Text64 />
        <Text65 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="flex-[460_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading13 />
        <Container90 />
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="flex-[508_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container88 />
        <Container89 />
      </div>
    </div>
  );
}

function Icon63() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button24() {
  return (
    <div className="h-[24px] relative shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center pl-[16px] pr-[4px] py-[4px] relative size-full">
        <Icon63 />
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="relative shrink-0 w-[544px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container87 />
        <Button24 />
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start px-[17px] py-[13px] relative size-full">
        <Container86 />
      </div>
    </div>
  );
}

function ContainerMargin13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container85 />
      </div>
    </div>
  );
}

function Icon64() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p144f51c0} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1e94b080} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container94() {
  return (
    <div className="bg-[#e6a96e] relative rounded-[14px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon64 />
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[25.711px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[25.714px] not-italic relative shrink-0 text-[#101828] text-[18px] whitespace-nowrap">Product Roadmap Review</p>
      </div>
    </div>
  );
}

function Icon65() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M4 1V3" id="Vector" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 1V3" id="Vector_2" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p333d5300} id="Vector_3" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 5H10.5" id="Vector_4" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text66() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon65 />
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">Mar 18</p>
      </div>
    </div>
  );
}

function Icon66() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_14)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text67() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon66 />
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">11:00 AM - 12:30 PM</p>
      </div>
    </div>
  );
}

function Text68() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#d1d5dc] text-[16px] whitespace-nowrap">•</p>
      </div>
    </div>
  );
}

function Text69() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">1 hr 25 min</p>
      </div>
    </div>
  );
}

function Text70() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#d1d5dc] text-[16px] whitespace-nowrap">•</p>
      </div>
    </div>
  );
}

function Icon67() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p38fdee00} id="Vector" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p13058e80} id="Vector_2" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3b81ea80} id="Vector_3" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3b3a5000} id="Vector_4" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text71() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon67 />
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">5 คน</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[24px] relative shrink-0 w-[460px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pt-[2px] relative size-full">
        <Text66 />
        <Text67 />
        <Text68 />
        <Text69 />
        <Text70 />
        <Text71 />
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="flex-[460_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading14 />
        <Container96 />
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="flex-[508_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container94 />
        <Container95 />
      </div>
    </div>
  );
}

function Icon68() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button25() {
  return (
    <div className="h-[24px] relative shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center pl-[16px] pr-[4px] py-[4px] relative size-full">
        <Icon68 />
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="relative shrink-0 w-[544px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container93 />
        <Button25 />
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start px-[17px] py-[13px] relative size-full">
        <Container92 />
      </div>
    </div>
  );
}

function ContainerMargin14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container91 />
      </div>
    </div>
  );
}

function Icon69() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p144f51c0} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1e94b080} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container100() {
  return (
    <div className="bg-[#8ec5ff] relative rounded-[14px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon69 />
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="h-[25.711px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:SemiBold',sans-serif] leading-[25.714px] not-italic relative shrink-0 text-[#101828] text-[18px] whitespace-nowrap">UX Research Findings</p>
      </div>
    </div>
  );
}

function Icon70() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M4 1V3" id="Vector" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 1V3" id="Vector_2" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p333d5300} id="Vector_3" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 5H10.5" id="Vector_4" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text72() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon70 />
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">Mar 17</p>
      </div>
    </div>
  );
}

function Icon71() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_14)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text73() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon71 />
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">9:30 AM - 10:30 AM</p>
      </div>
    </div>
  );
}

function Text74() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#d1d5dc] text-[16px] whitespace-nowrap">•</p>
      </div>
    </div>
  );
}

function Text75() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">1 hr</p>
      </div>
    </div>
  );
}

function Text76() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#d1d5dc] text-[16px] whitespace-nowrap">•</p>
      </div>
    </div>
  );
}

function Icon72() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p38fdee00} id="Vector" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p13058e80} id="Vector_2" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3b81ea80} id="Vector_3" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3b3a5000} id="Vector_4" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text77() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon72 />
        <p className="[word-break:break-word] font-['IBM_Plex_Sans_Thai:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">3 คน</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="h-[24px] relative shrink-0 w-[460px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pt-[2px] relative size-full">
        <Text72 />
        <Text73 />
        <Text74 />
        <Text75 />
        <Text76 />
        <Text77 />
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="flex-[460_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading15 />
        <Container102 />
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="flex-[508_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container100 />
        <Container101 />
      </div>
    </div>
  );
}

function Icon73() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button26() {
  return (
    <div className="h-[24px] relative shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center pl-[16px] pr-[4px] py-[4px] relative size-full">
        <Icon73 />
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="relative shrink-0 w-[544px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container99 />
        <Button26 />
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start px-[17px] py-[13px] relative size-full">
        <Container98 />
      </div>
    </div>
  );
}

function ContainerMargin15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container97 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Container65 />
        <ContainerMargin10 />
        <ContainerMargin11 />
        <ContainerMargin12 />
        <ContainerMargin13 />
        <ContainerMargin14 />
        <ContainerMargin15 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="bg-white h-[704.563px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container63 />
        <Container64 />
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex flex-col h-[880.016px] items-start left-[652px] top-0 w-[628px]" data-name="Container">
      <Container62 />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[880.016px] relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container61 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Container27 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[560.289_0_0] min-h-px relative w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[32px] relative size-full">
          <Container18 />
          <ContainerMargin2 />
        </div>
      </div>
    </div>
  );
}

function MeetingView() {
  return (
    <div className="bg-[#f9fafb] flex-[1344_0_0] h-[1039px] min-w-px relative" data-name="MeetingView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container14 />
        <Container17 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[667.289_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Sidebar />
        <MeetingView />
      </div>
    </div>
  );
}

function Root() {
  return (
    <div className="bg-[#f3f4f6] h-[1101px] min-h-[729px] relative shrink-0 w-[1440px]" data-name="Root">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container />
        <Container8 />
      </div>
    </div>
  );
}

export default function UpdateDebutWorkspacePh() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Update-Debut Workspace-PH1.1">
      <Root />
    </div>
  );
}