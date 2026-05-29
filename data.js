// Food data for the Diebates dashboard.
// All 22 foods are diabetes-friendly low/medium GI options sourced from /assets/foods.
// GI bands: low ≤55 · medium 56–69 · high ≥70 (none here — that's the point.)
// Plain JS — loaded with a regular <script> so window.FOODS etc are defined
// BEFORE any text/babel script runs.

var FOODS = [
  // ── 곡류 / 탄수화물 (whole grains) ────────────────────────────
  { id: "brown-rice",   name: "현미밥",         category: "grain",     img: "brown-rice.png",            gi: 55, kcal: 165, carb: 35, protein: 4,  fat: 1,  fiber: 2,
    note: "백미보다 GI가 낮고 식이섬유가 풍부합니다." },
  { id: "whole-wheat",  name: "통밀빵",         category: "grain",     img: "whole-wheat.png",            gi: 49, kcal: 235, carb: 41, protein: 8,  fat: 4,  fiber: 6,
    note: "정제 밀가루 빵보다 혈당 상승 속도가 완만합니다." },
  { id: "buckwheat",    name: "메밀면",         category: "grain",     img: "buckwheat.png",            gi: 54, kcal: 153, carb: 30, protein: 6,  fat: 1,  fiber: 3,
    note: "루틴이 풍부해 혈관 건강에 도움을 줍니다." },
  { id: "sweet-potato", name: "고구마",         category: "grain",     img: "sweet-potato.png",            gi: 55, kcal: 132, carb: 31, protein: 2,  fat: 0,  fiber: 4,
    note: "껍질째 먹으면 GI가 더 낮아집니다." },

  // ── 단백질 ───────────────────────────────────────────────────
  { id: "chicken",      name: "구운 닭가슴살",  category: "protein",   img: "chicken.png",     gi: 0,  kcal: 165, carb: 0,  protein: 31, fat: 3,  fiber: 0,
    note: "지방이 적고 단백질이 풍부한 핵심 식재료." },
  { id: "egg",          name: "삶은 계란",      category: "protein",   img: "egg.png",         gi: 0,  kcal: 78,  carb: 1,  protein: 6,  fat: 5,  fiber: 0,
    note: "포만감이 높아 간식·아침으로 좋습니다." },
  { id: "beef",         name: "소고기",         category: "protein",   img: "beef.png",            gi: 0,  kcal: 217, carb: 0,  protein: 26, fat: 12, fiber: 0,
    note: "기름기 적은 부위를 골라 적정량을 섭취하세요." },
  { id: "tuna",         name: "참치캔",         category: "protein",   img: "tuna.png",            gi: 0,  kcal: 116, carb: 0,  protein: 25, fat: 1,  fiber: 0,
    note: "오일이 아닌 물에 담긴 제품을 권장합니다." },
  { id: "yogurt",       name: "무가당 그릭요거트", category: "protein", img: "yogurt.png", gi: 11, kcal: 100, carb: 6,  protein: 10, fat: 5,  fiber: 0,
    note: "프로바이오틱스 + 단백질, 무가당 필수." },

  // ── 콩 ───────────────────────────────────────────────────────
  { id: "chickpea",     name: "병아리콩",       category: "legume",    img: "chickpea.png",          gi: 28, kcal: 164, carb: 27, protein: 9,  fat: 3,  fiber: 8,
    note: "식이섬유와 식물성 단백질이 함께 들어있습니다." },

  // ── 채소 / 식이섬유 ──────────────────────────────────────────
  { id: "cabbage",      name: "양배추",         category: "vegetable", img: "cabbage.png",            gi: 10, kcal: 25,  carb: 6,  protein: 1,  fat: 0,  fiber: 3,
    note: "무제한 가까이 먹어도 좋은 저칼로리 채소." },
  { id: "spinach",      name: "데친 시금치",    category: "vegetable", img: "spinach.png",       gi: 15, kcal: 23,  carb: 4,  protein: 3,  fat: 0,  fiber: 2,
    note: "철·엽산이 풍부, 데치면 더 부드럽습니다." },
  { id: "broccoli",     name: "찐 브로콜리",    category: "vegetable", img: "broccoli.png",       gi: 10, kcal: 35,  carb: 7,  protein: 2,  fat: 0,  fiber: 3,
    note: "비타민 C와 항산화 성분이 가득합니다." },
  { id: "chicory",      name: "치커리",         category: "vegetable", img: "chicory.png",            gi: 15, kcal: 23,  carb: 4,  protein: 2,  fat: 0,  fiber: 3,
    note: "이눌린이 풍부해 장 건강에 도움을 줍니다." },
  { id: "seaweed",      name: "미역줄기",       category: "vegetable", img: "seaweed.png",          gi: 12, kcal: 26,  carb: 5,  protein: 1,  fat: 0,  fiber: 3,
    note: "수용성 식이섬유가 혈당을 천천히 올립니다." },

  // ── 견과 & 좋은 지방 ─────────────────────────────────────────
  { id: "almond",       name: "아몬드",         category: "fat",       img: "almond.png",            gi: 0,  kcal: 164, carb: 6,  protein: 6,  fat: 14, fiber: 4,
    note: "한 줌(약 23알)이 적정량입니다." },
  { id: "avocado",      name: "아보카도",       category: "fat",       img: "avocado.png",          gi: 10, kcal: 160, carb: 9,  protein: 2,  fat: 15, fiber: 7,
    note: "단일불포화지방 + 식이섬유가 풍부합니다." },
  { id: "peanut-butter",name: "무가당 땅콩버터", category: "fat",      img: "peanut-butter.png",     gi: 14, kcal: 188, carb: 7,  protein: 8,  fat: 16, fiber: 3,
    note: "당이 첨가되지 않은 제품만 선택하세요." },
  { id: "olive-oil",    name: "올리브유",       category: "fat",       img: "olive-oil.png",          gi: 0,  kcal: 119, carb: 0,  protein: 0,  fat: 14, fiber: 0,
    note: "샐러드·드레싱에 사용. 가열은 짧게." },
  { id: "perilla-oil",  name: "들기름",         category: "fat",       img: "perilla-oil.png",            gi: 0,  kcal: 120, carb: 0,  protein: 0,  fat: 14, fiber: 0,
    note: "오메가-3가 풍부한 한국식 좋은 지방." },
];

var CATEGORIES = [
  { id: "all",       label: "전체",       icon: "sparkle" },
  { id: "grain",     label: "곡류",       icon: "leaf"    },
  { id: "protein",   label: "단백질",     icon: "activity"},
  { id: "vegetable", label: "채소",       icon: "leaf"    },
  { id: "legume",    label: "콩",         icon: "leaf"    },
  { id: "fat",       label: "좋은 지방",  icon: "drop"    },
];

// Helper — GI band
function giBand(gi) {
  if (gi === 0) return { label: "단백질·지방", tone: "neutral" };
  if (gi <= 55) return { label: "낮은 GI",   tone: "good"    };
  if (gi <= 69) return { label: "중간 GI",   tone: "warn"    };
  return         { label: "높은 GI",   tone: "danger"  };
}

var MEAL_SLOTS = [
  { id: "breakfast", label: "아침", time: "07:30" },
  { id: "lunch",     label: "점심", time: "12:30" },
  { id: "dinner",    label: "저녁", time: "18:30" },
  { id: "snack",     label: "간식", time: "15:00" },
];

var DAILY_TARGET = { kcal: 1800, carb: 225, protein: 90, fat: 60 };

var MYTHS = [
  {
    myth: "당뇨병 환자는 무조건 비만이다",
    fact: "한국인 당뇨병 환자의 절반 가까이가 정상 체중 또는 마른 체형입니다. 인슐린 분비 능력의 차이가 더 큰 원인입니다.",
  },
  {
    myth: "단 음식만 피하면 된다",
    fact: "백미·정제 탄수화물도 빠르게 혈당을 올립니다. 무엇을 먹느냐만큼 어떻게·언제·얼마나 먹느냐가 중요합니다.",
  },
  {
    myth: "탄수화물은 절대 먹으면 안 된다",
    fact: "현미·통밀·고구마처럼 GI가 낮은 복합 탄수화물은 적정량 섭취해야 합니다. 무탄수 식단은 오히려 저혈당을 부를 수 있습니다.",
  },
  {
    myth: "약을 먹으면 식단은 자유다",
    fact: "약은 보조 도구일 뿐, 식단·운동·수면이 가장 큰 변수입니다. 식단 기록이 약효를 좌우합니다.",
  },
];

// ─── Guidelines view data ─────────────────────────────────────
// 4 nutrient groups shown as slot + stack pairs. The "weight" suffix
// matches the Figma reference exactly.
var NUTRIENT_GROUPS = [
  {
    id: "carb",
    label: "탄수화물",
    color: "#FF9248",         // orange
    colorSoft: "rgba(255,146,72,0.18)",
    hint: "에너지원을 골라 담아보세요.",
    foods: [
      { id: "buckwheat",   name: "메밀면",   weight: "150g", img: "buckwheat.png" },
      { id: "sweet-potato",name: "고구마",   weight: "200g", img: "sweet-potato.png" },
      { id: "whole-wheat", name: "통밀빵",   weight: "100g", img: "whole-wheat.png" },
      { id: "brown-rice",  name: "현미밥",   weight: "180g", img: "brown-rice.png" },
      { id: "chickpea",    name: "병아리콩", weight: "170g", img: "chickpea.png" },
    ],
  },
  {
    id: "protein",
    label: "단백질",
    color: "#F8A5B5",         // pink
    colorSoft: "rgba(248,165,181,0.18)",
    hint: "근육을 지키는 음식을 채워보세요.",
    foods: [
      { id: "beef",      name: "소고기",            weight: "100g", img: "beef.png" },
      { id: "tuna",      name: "참치캔",            weight: "100g", img: "tuna.png" },
      { id: "yogurt",    name: "무가당 그릭요거트", weight: "200g", img: "yogurt.png" },
      { id: "egg",       name: "삶은 계란",         weight: "150g", img: "egg.png" },
      { id: "chicken",   name: "삶은 닭가슴살",     weight: "130g", img: "chicken.png" },
    ],
  },
  {
    id: "fat",
    label: "지방",
    color: "#7DB0E0",         // blue
    colorSoft: "rgba(125,176,224,0.18)",
    hint: "좋은 지방을 한 가지 선택해보세요.",
    foods: [
      { id: "avocado",      name: "아보카도",         weight: "60g", img: "avocado.png" },
      { id: "olive-oil",    name: "올리브유",         weight: "10g", img: "olive-oil.png" },
      { id: "almond",       name: "아몬드",           weight: "25g", img: "almond.png" },
      { id: "perilla-oil",  name: "들기름",           weight: "8g",  img: "perilla-oil.png" },
      { id: "peanut-butter",name: "무가당 땅콩버터",  weight: "20g", img: "peanut-butter.png" },
    ],
  },
  {
    id: "fiber",
    label: "식이섬유",
    color: "#B9E25A",         // lime green
    colorSoft: "rgba(185,226,90,0.18)",
    hint: "혈당을 낮춰줄 채소를 추가해보세요.",
    foods: [
      { id: "broccoli", name: "찐 브로콜리", weight: "130g", img: "broccoli.png" },
      { id: "spinach",  name: "데친 시금치", weight: "150g", img: "spinach.png" },
      { id: "seaweed",  name: "미역줄기",    weight: "80g",  img: "seaweed.png" },
      { id: "cabbage",  name: "양배추",      weight: "150g", img: "cabbage.png" },
      { id: "chicory",  name: "치커리",      weight: "110g", img: "chicory.png" },
    ],
  },
];

// Recommended portion for a single meal (used when a food card is clicked).
// Differs from the full serving shown on the right-hand stack because the
// plate is a single-meal portion suggestion.
var GUIDE_PORTION = {
  "sweet-potato": "75g",
  "egg": "150g",
  "olive-oil": "10g",
  "broccoli": "130g",
  // fallbacks come from each food's `weight` on the stack
};

// Weekly exercise guide table
var WEEK_EXERCISE = [
  { day: "Mon", type: "유산소",    typeTone: "good", activity: "빠르게 걷기" },
  { day: "Tue", type: "근력",      typeTone: "warn", activity: "하체 스쿼트 등\n기구 운동" },
  { day: "Wed", type: "유산소",    typeTone: "good", activity: "자전거 타기\n30분" },
  { day: "Thu", type: "근력",      typeTone: "warn", activity: "상체 아령 운동" },
  { day: "Fri", type: "유산소",    typeTone: "good", activity: "계단 오르기\n30분" },
  { day: "Sat", type: "혼합 운동", typeTone: "info", activity: "등산" },
  { day: "Sun", type: "휴식",      typeTone: "mute", activity: "💤" },
];

var DAILY_HABITS = [
  { icon: "moon",    title: "규칙적이고 충분한 수면", body: "매일 7~8시간 수면,\n일정한 취침 및 기상 시간 유지" },
  { icon: "scale",   title: "건강 체중 유지",         body: "복부비만은 인슐린 저항성과 연관\n→ 건강 체중(BMI 18.5~23) 유지 목표" },
  { icon: "smoke",   title: "금연 및 절주",           body: "흡연은 인슐린 저항성과 관련 있음\n→ 완전 금연 권장" },
  { icon: "check",   title: "정기적인 건강 검진",     body: "공복혈당 체크로 조기 발견,\n비만, 가족력 등은 더 자주 검진 필요" },
];

Object.assign(window, { FOODS, CATEGORIES, MEAL_SLOTS, DAILY_TARGET, MYTHS, giBand });
