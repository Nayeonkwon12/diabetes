# Diebates — 당뇨병 다이어트 대시보드

> **Diebates** (Diabetes + Debate). 당뇨병 = 비만이라는 편견을 깨고, 정보를 알려주고, 식단을 짤 수 있는 대시보드.

## 🌐 Live demo
- **URL**: https://nayeonkwon12.github.io/diabetes/

## 🚀 로컬에서 실행

이 저장소는 정적 파일만 사용하므로 어떤 정적 서버로도 실행됩니다.

```bash
# Python 3
python3 -m http.server 8000
# → http://localhost:8000/

# 또는 Node.js
npx serve .
```

## 🗂 구조

```
.
├── index.html              ← 진입점
├── colors_and_type.css     ← 디자인 토큰 + Pretendard @font-face
├── styles.css              ← 컴포넌트 스타일
├── data.js                 ← 음식·신화·OECD 데이터 (globals)
├── bundle.jsx              ← React 컴포넌트 번들 (Babel 인-브라우저)
├── .nojekyll               ← GitHub Pages Jekyll 비활성
├── fonts/                  ← Pretendard 9 weights (woff)
└── assets/
    ├── bg_image1.png       ← 의료 배경
    ├── bg_image2.png       ← 음식 배경
    └── foods/              ← 22개의 식재료 PNG (투명 배경)
```

## 🧱 기술 스택
- React 18 (UMD) + Babel Standalone — 빌드 단계 없음, 정적 호스팅만 있으면 됩니다.
- Pretendard — 한글 본문체.

## 📐 디자인 시스템
- **시그니처 컬러**: `#CCFF17` (라임)
- **대조 컬러**: `#1A1A1A` (다크 사이드바·히어로)
- **모서리**: 카드 18px · 버튼 12px · 칩 999px (pill)
- **모션**: 모든 인터랙션은 `cubic-bezier(0.22, 1, 0.36, 1)` ease-out (건강 제품 톤에 맞춰 bounce 없음)

자세한 내용은 프로젝트 루트의 `README.md` 참고.
