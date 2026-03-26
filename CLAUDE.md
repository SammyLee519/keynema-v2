# Keynema v2

영화 감상 기록 및 AI 취향 리포트 플랫폼. 개인 포트폴리오 프로젝트.

## 기술 스택
- React 18, TypeScript (strict mode)
- Vite
- Tailwind CSS v4
- Supabase (auth + DB)
- TanStack Query v5
- React Router v6

## 디렉토리 구조
src/
├── features/        # 도메인별 (movie, review, wishlist, report)
├── components/      # 공통 컴포넌트
├── hooks/           # 커스텀 훅
├── lib/             # supabase 클라이언트 등 외부 설정
├── pages/           # 페이지 컴포넌트
└── types/           # 전역 타입

## 코드 컨벤션
- any 사용 금지
- enum 금지 → as const 사용
- Props 타입은 별도 type으로 분리
- 커스텀 훅으로 분리 가능한 로직은 분리
- Supabase 쿼리는 features/*/api.ts에 위치

## 기능 범위 (MVP)
- 영화 검색 (TMDB API)
- 감상 기록 (별점, 감정태그)
- 위시리스트
- 장르 태깅
- AI 취향 리포트

## 개발 명령어
- `pnpm dev`
- `pnpm build`
- `pnpm lint`

## 주의사항
- 개인 포트폴리오 프로젝트 → 코드 품질과 설계 패턴 학습이 목적
- 주니어 수준에서 시니어처럼 코드 짜는 습관 형성 목표
- Claude Code 리뷰 적극 활용