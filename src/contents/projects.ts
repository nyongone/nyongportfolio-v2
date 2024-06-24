export const projectList = [
  {
    id: 1,
    title: "문화복지카드 사용처 검색 서비스 (Front-end)",
    term: "2023. 03 ~ 진행중",
    tech: "Typescript, React, Styled Components, Recoil, Next.js",
    summary:
      "전라남도에서 시행하는 사업인 ‘전남청년 문화복지카드 지원사업’에서, 문화복지카드 사용처 정보 제공의 부실로 만들게 된 서비스 입니다. 이 서비스는 사용자들에게 문화복지카드 사용처를 지도 기반의 정보로 제공합니다. 프론트엔드 개발 팀에서 리더를 담당하였습니다. <br/>또한, 제공하는 기능들의 이용률을 분석하여 상대적으로 이용률이 낮은 키워드 검색 기능은 제거하고, 사용자들의 이용률이 높은 지도 검색 기능을 메인으로 서비스를 개편하였습니다. 개편하는 과정에서 사용자에게 쾌적한 서비스 사용 환경을 제공하기 위해 Next.js로 프레임워크를 마이그레이션 하였습니다. 이를 통해 웹 사이트 초기 로딩 시간이 감소하였습니다.",
    contributes: [
      "Figma를 통해 서비스의 전반적인 프론트엔드 레이아웃 및 UI/UX 설계 담당",
      "React 프레임워크를 이용한 서비스 개발",
      "네이버 지도 API를 통해 지도에 사용처를 마커로 표시 → 사용자에게 더욱 직관적인 정보 제공",
      "Next.js로 프레임워크 마이그레이션 → Server-side Rendering 및 검색 엔진 최적화 진행",
      "에러 및 퍼포먼스 모니터링을 위한 Sentry 도입 → 서비스 이용 시 발생하는 오류 등을 더욱 신속하게 확인",
      "이전 버전의 서비스에서의 레이아웃 개편 → 데스크톱/모바일 버전의 반응형 레이아웃 도입",
    ],
    website: "https://ywc.wavers.kr",
    github: "https://github.com/team-wavers/ywc-fe-v2",
    link: "https://bit.ly/3VbVhOC",
  },
  {
    id: 2,
    title: "MBTI-Lens (Front-end)",
    term: "2023. 06 ~ 2023. 09",
    tech: "Typescript, Next.js, Styled Components, Recoil",
    summary:
      "자신의 MBTI를 타인에게 공유하고 평가 받을 수 있는 서비스 입니다. 프론트엔드 개발을 담당하였습니다. <br/>타인에게 MBTI를 공유하기 위해 유저 정보를 생성하는 과정에서, 백엔드 팀과 협업하여 Kakao OAuth를 도입하였습니다. 이를 통해 사용자가 별도의 아이디/비밀번호를 생성하지 않아도 간편하게 서비스를 이용할 수 있었습니다.",
    contributes: [
      "서비스의 레이아웃 및 컴포넌트 디자인 설계 일부 기여",
      "Next.js 프레임워크를 이용한 서비스 개발 기여 (MBTI 입력창, 메인 화면, 카카오 로그인 연동)",
    ],
    website: undefined,
    github: "https://github.com/team-wavers/mbti-lens",
    link: undefined,
  },
  {
    id: 3,
    title: "코리아 클래시 기업 소개 페이지 외주 개발",
    term: "2023. 12 ~ 2024. 01",
    tech: "Javascript, React, Styled Components, Express",
    summary:
      "외주를 받아 진행한 기업 소개 페이지 개발 프로젝트 입니다. 소개 페이지의 전반적인 디자인과 CSS 애니메이션을 , Node.js 서버 배포를 위해 Express 프레임워크를 이용하였습니다.",
    contributes: [
      "웹사이트 UI/UX 및 레이아웃 설계",
      "React 프레임워크를 이용하여 페이지 및 컴포넌트 설계 및 개발",
      "CSS 및 Vanilla JS로 각종 컴포넌트 애니메이션, 이미지 캐러셀 등 개발",
      "서드파티 SMTP 라이브러리를 이용한 이메일로 문의하기 기능 개발",
      "정적 페이지 라우팅을 위한 Express 서버 개발",
    ],
    website: "http://korea-classy.com ",
    github: undefined,
    link: undefined,
  },
  {
    id: 4,
    title: "개인 포트폴리오 사이트 개발",
    term: "2024. 05. 23",
    tech: "Typescript, React, Emotion, React Router Dom",
    summary: "React를 통해 개인 포트폴리오 사이트를 개발했습니다.",
    contributes: [
      "웹사이트 UI/UX 및 컴포넌트 디자인",
      "SPA 개발을 위한 싱글 페이지 컴포넌트 디자인",
      "Hash Router를 통한 동적 Scroll Event 기능 개발",
    ],
    website: "https://pf.nyong.world",
    github: "https://github.com/nyongone/nyongportfolio-v2",
    link: "https://velog.io/@dyslo/React-Bun-간단한-포트폴리오-사이트-만들기",
  },
];
