const subs = [
    "소프트웨어 설계",
    "소프트웨어 개발",
    "데이터베이스 구축",
    "프로그래밍 언어 활용",
    "정보 시스템 구축 관리"
];

const chpaters = {
    1: [
        "소프트웨어 개발 방법론",
        "요구사항 확인",
        "화면 설계",
        "애플리케이션 설계",
        "인터페이스 설계"
      ],
    2: [
        "데이터 입출력 구현",
        "통합 구현",
        "제품 소프트웨어 패키징",
        "애플리케이션 테스트 관리"
      ],
}
const sections = {
    111:"소프트웨어의 분류와 특성",
    112:"소프트웨어 개발 방법론 활용",
    113:"소프트웨어 생명주기 모델",
    212:"자료구조"
}
const classfication = {
  subjects:subs,
  chapters:chpaters,
  sections:sections
};

module.exports = classfication