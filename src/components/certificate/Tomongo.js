/*
,
    {
        "title": "",
        "pages": "1-064",
        "chapter": "Chapter 02 - Section 03",
        "subject": "1 / 요구사항 확인",
        "content": `
            <h4>
            </h4>
            <ul>
                <li></li>
            </ul>
        `
    }
*/
export default 
[
    {
        "title": "EAI ( Enterprise Application Integration )",
        "pages": "1-133",
        "code":212,
        "chapter": "Chapter 01 - Section 02",
        "subject": "2 / 데이터 입출력 구현",
        "content": `
            <ul>
                <li>
                    Point to Point
                    <ul>
                        <li>미들웨어 없이 애플리케이션 간 직접 연결하는 방식이다.</li>
                        <li>솔루션의 구매 없이 단순하게 통합이 가능하지만, 변경이나 재사용이 업렵다.</li>
                    </ul>
                </li>
                <li>
                    Hub & Spoke
                    <ul>
                        <li>단일 접점인 허브 시스템을 통해 데이터를 통해 전송하는 중앙 집중형 방식이다.</li>
                        <li>확장 및 유지보수가 용이하고 모든 데이터의 전송을 보장하지만, 허브에 장애가 발생하면 전체 시스템에 영향을 받는다.</li>
                    </ul>
                </li>
                <li>
                    Message Bus ( Enterprise Service Bus )
                    <ul>
                        <li>애플리케이션 사이에 미들웨어(버스)를 두어 처리하는 방식이다.</li>
                        <li>미들웨어(버스)를 통해서 통합되므로 뛰어난 확장성, 대용량 처리가 가능하다.</li>
                        <li>별도의 어댑터가 필요 없고 서비스 버스(Bus) 라는 백본을 이용하여 통신하는 방식이다.</li>
                        <li>웹 서비스 기반 통신으로 네트워크에 의존적이며 이용 자체가 복잡하고 xml 변환을 사용하는 과정에 부하가 생긴다.</li>
                    </ul>
                </li>
                <li>
                    EAI/ESB ( Hybrid )
                    <ul>
                        <li>그룹 내에는 Hub & Spoke 방식을 사용하고, 그룹 간에는 Message Bus 방식을 사용하는 표준 통합 기술이다.</li>
                        <li>데이터 병목 현상을 최소화할 수 있다.</li>
                    </ul>
                </li>
            </ul>
        `
    },
    {
        "title": "무방향 그래프",
        "pages": "1-133",
        "chapter": "Chapter 01 - Section 02",
        "subject": "2 / 데이터 입출력 구현",
        "content": `
            <h4>
                최대 간선의 수 n ( n-1 ) / 2
            </h4>
        `
    },
    {
        "title": "시간 복잡도",
        "pages": "1-135",
        "chapter": "Chapter 01 - Section 03",
        "subject": "2 / 데이터 입출력 구현",
        "content": `
            <ul>
                <li>탐색 등을 진행하는 대상 알고리즘으로 인해 연산이 수행되는 횟수를 나타내는 단위</li>
                <li>하드웨어 및 운영시스템의 환경에 따라 실행 시간이 달라지므로, 연산의 횟수가 보다 정확한 기준이 될 수 있다.</li>\
                <li>데이터에 따라 연산 횟수 산출 결과가 다를 때는 최악의 경우를 기준으로 산출한다.</li>
            </ul>
        `
    },
    {
        "title": "인터페이스 설계서",
        "pages": "1-166",
        "chapter": "Chapter 02 - Section 05",
        "subject": "2 / 인터페이스 구현",
        "content": `
            <h4>
                인터페이스 설계서
            </h4>
            <ul>
                <li>서로 다른 시스템이나 컴포넌트 사이에 데이터 교환, 처리를 위한 목적으로 각 시스템의 교환 데이터, 업무, 송수신 주체 등이 정의되어 있는 문서이다.</li>
                <li>인터페이스 현황을 쉽게 확인하기 위하여 한 시스템이 갖는 인터페이스 목록이다.</li>
                <li>인터페이스의 상세 게이터 명세와 각 기능의 세부 인터페이스 정보를 정의한 문서이다.</li>
            </ul>
        `
    },
    {
        "title": "자료 결합도( Data Coupling )",
        "pages": "1-088",
        "chapter": "Chapter 04 - Section 02",
        "subject": "1 / 애플리케이션 설계",
        "content": `
            <ul>
                <li>가장 낮은 결합도를 가지며 모듈의 품질을 향샹시킨다.</li>
                <li>모듈 간의 인터페이스로 전달되는 인수와 전달받는 매게변수를 통해서만 상호작용이 일어나는 경우이다.</li>
                <li>Call By Value의 방식으로 함수를 호출한다.</li>
            </ul>
        `
    },
    {
        "title": "모듈의 독립성과 품질의 관계",
        "pages": "1-087",
        "chapter": "Chapter 04 - Section 02",
        "subject": "1 / 애플리케이션 설계",
        "content": `
            <h4>응집도</h4>
            <h2>우 논 시 절 통 순 기</h2>
            <table>
                <tr>
                    <td align="center" colspan="7">응집도 낮음 (낮은품질) ------> 응집도 높음 (높은 품질)</td>
                </tr>
                <tr>
                    <td>우연적</td>
                    <td>논리적</td>
                    <td>시간적</td>
                    <td>절차적</td>
                    <td>통신적</td>
                    <td>순차적</td>
                    <td>기능적</td>
                </tr>
            </table>
            <hr>
            <h4>결합도 내공외자스자</h4>
            <h2>자 스 제 외 공 내</h2>
            <table>
                <tr>
                    <td align="center" colspan="6">결합도 낮음 (높은품질) ------> 결합도 높음 (낮은 품질)</td>
                </tr>
                <tr>
                    <td>자료</td>
                    <td>스탬프</td>
                    <td>제어</td>
                    <td>외부</td>
                    <td>공통</td>
                    <td>내용</td>
                </tr>
            </table>
        `
    },
    {
        "title": "디자인 패턴의 구성 요소",
        "pages": "1-100",
        "chapter": "Chapter 04 - Section 04",
        "subject": "1 / 애플리케이션 설계",
        "content": `
            <ul>
                <li>패턴의 이름과 구분</li>
                <li>문제 및 배경</li>
                <li>솔루션</li>
                <li>사례</li>
                <li>결과</li>
                <li>샘플코드</li>
            </ul>
        `
    },
    {
        "title": "모튤의 개념",
        "pages": "1-082",
        "chapter": "Chapter 04 - Section 01",
        "subject": "1 / 애플리케이션 설계",
        "content": `
            <h4>
                개념
            </h4>
            <ul>
                <li>프로그램의 효율적인 관리를 위해 프로그램을 기능 단위로 분해한 것이다.</li>
                <li>인터페이스가 단순해지고 소프트웨어의 이해가 쉬워진다.</li>
                <li>재사용이 가능하기 때문에 프로그램 개발과 유지보수가 용이해진다.</li>
                <li>소프트웨어 통합, 수정 및 테스트가 용이하며 오류의 파급 효과가 적다.</li>
                <li>다른 모듈들을 호출하거나 호툴을 당할 수 있으며 종속적으로 수행된다.</li>
            </ul>
        `
    },
    {
        "title": "디자인 패턴 - 구조(Structural) 패턴",
        "pages": "1-102",
        "chapter": "Chapter 04 - Section 04",
        "subject": "1 / 애플리케이션 설계",
        "content": `
            <ul>
                <li>여러 객체를 모아 구조화시키는 패턴이다.</li>
                <li>객체에 접근할 수 있는 인터페이스와 새로운 기능을 제공한다.</li>
                <li>객체들의 협력에 의해 어떤 역할을 수행할 때 객체를 조직화시키는 일반적인 방식을 제시한다.</li>
            </ul>
        `
    },
    {
        "title": "사용자 인터페이스",
        "pages": "1-070",
        "chapter": "Chapter 03 - Section 01",
        "subject": "1 / 화면 설계",
        "content": `
            <h4>

            </h4>
            <ul>
                <li>둘 이상의 대상, 주로 사용자와 컴퓨터(시스템) 간의 상호작용이 원활하도록 도와주는 하두웨어 및 소프트웨어이다.</li>
                <li>UI에 따라 사용자의 소프트웨어 이용(의사소통) 방식이 결정된다.</li>
                <li>사용자가 시스템을 조작하는 입력 수단과 시스템이 정보를 표시하는 출력 수단으로 나뉜다.</li>
                <li>물리적 제어, 기능적 제어, 전체 구성의 제어 등 3가지 분야로 나뉜다.</li>
            </ul>
        `
    },
    {
        "title": "설계 모델링",
        "pages": "1-086",
        "chapter": "Chapter 04 - Section 02",
        "subject": "1 / 애플리케이션 설계",
        "content": `
            <h4>
                설계 모델링의 개념
            </h4>
            <ul>
                <li>요구사항 분석 단계를 바탕으로 정의된 기능들을 구체적으로 구현하여 명시하는 단계</li>
                <li>소프트웨어에서 요구되는 기능과 성능을 만족하도록 설계 명세서를 작성하는 과정이다.</li>
                <li>기능 외에도 소프트웨어 구조, 행위들을 모델링하여 분석, 검증하는 단계이다.</li>
                <li>소프트웨어 실행에 필요한 관련 기술과 원칙을 적용하는 과정이다.</li>
            </ul>
        `
    },
    {
        "title": "시스템 아키텍처의 설계",
        "pages": "1-090",
        "chapter": "Chapter 04 - Section 03",
        "subject": "1 / 애플리케이션 설계",
        "content": `
            <ul>
                <li>시스템 아키텍처 설계는 소프트웨어 아키텍처 설계에 제약을 하는 상위 설계이다</li>
                <li>소프트웨어 아키텍처의 설계는 소프트웨어 상세 설계를 제약한다/</li>
                <li>전체적인 아키텍처 설계, 인터페이스 정의, 사용자 인터페이스 설계 등을 수행한다.</li>
                <li>시스템 아키텍처 설계, 소프트웨어 아키텍처 설계, 소프트웨어 상세 설계는 일반적인 공동 특성을 가지고 있다.</li>
            </ul>
        `
    },
    {
        "title": "설계 모델링의 절차",
        "pages": "1-086",
        "chapter": "Chapter 04 - Section 02",
        "subject": "1 / 애플리케이션 설계",
        "content": `
            <ul>
                <li>요구 명세</li>
                <li>설계 프로세스</li>
                <li>아키텍처 설계 명세</li>
                <li>상세 설계 명세</li>
            </ul>
        `
    },
    {
        "title": "CMMI ( Capability Maturity Integration )",
        "pages": "1-040",
        "chapter": "Chapter 01 - Section 02",
        "subject": "1 / 소프트웨어 개발 방법론",
        "content": `
            <ol>
                <li>개념
                    <ul>
                        <li>CMM의 후속!모델이다.</li>
                        <li>조직의 개발 프로세스 역량 성숙도를 평가한다</li>
                        <li>어떤 모델이든 업무의 목적에 맞게 수정하여 사용할 필요가 있다.</li>
                        <li>프로세스 관리, 프로젝트 관리, 엔지니어링, 지원 영역 등이 있다.</li>
                    </ul>
                </li>
            </ol>
        `
    },
    {
        "title": "유스케이스 기술서 구성요소 중 기본흐름",
        "pages": "1-055",
        "chapter": "Chapter 02 - Section 02", 
        "subject": "1 / 요구사항 확인",
        "content": `
            <h4>기본 흐름</h4>
            <ul>
                <li>시스템과 액터 사이에 목정을 달성하기 위한 기본적인 상호작용 흐름을 기술한다.</li>
                <li>어떠한 오류나 예외가 발생하지 않고 모든 것이 완전하게 수행되는 것을 전제로 기술한다.</li>
                <li>첫 번째 단계는 해당 유스케이스를 시작하는 사건(trigger)을 기술한다.</li>
            </ul>
        `
    },
    {
        "title": "보안 개발 방법론의 종류 Seven Touchpoints",
        "pages": "1-032",
        "chapter": "Chapter 01 - Section 02",
        "subject": "1 / 소프트웨어 개발 방법론",
        "content": `
            <ul>
                <li>실무적으로 검증된 개발 보안 방법론 중 하나이다.</li>
                <li>소프트웨어 보안의 모범 사례를 SDLC에 통합한 소프트웨어ㅏ 개발 보안 생명주기 방법론이다.</li>
                <li>소프트웨어 보안의 모범사례
                    <ul>
                        <li>코드 검토 ( code review )</li>
                        <li>아키텍처 위험 분석 ( architectural risk analysis )</li>
                        <li>침투 테스트 ( penetration testing )</li>
                        <li>위험 기반 보안 테스트 (risk-based security tests )</li>
                        <li>악용 사례 ( abuse cases )</li>
                        <li>보안 요구 ( security requirement )</li>
                        <li>보안 운영( security operation )</li>
                    </ul>
                </li>
            </ul>
        `
    },
    {
        "title": "XP(eXtreme Programming) 모델 - 개발 프로세스",
        "pages": "1-044",
        "chapter": "Chapter 01 - Section 03", 
        "subject": "1 / 소프트웨어 개발 방법론",
        "content": `
            <h4>개발 프로세스</h4>
            <ol>
                <li>사용자 스토리</li>
                <li>릴리즈 계획 수립</li>
                <li>스파이크</li>
                <li>이터레이션</li>
                <li>승인검사</li>
                <li>소규모 릴리즈</li>
            </ol>
        `
    },
    {
        "title": "UML의 구성요소 - 사물(Things) 의 종류",
        "pages": "1-064",
        "chapter": "Chapter 02 - Section 03",
        "subject": "1 / 요구사항 확인",
        "content": `
            <h4>
                사물의 종류
            </h4>
            <ul>
                <li>구조 사물 ( structural Things )</li>
                <li>행동 사물 ( Behavioral Things )</li>
                <li>그룹 사물 ( Grouping Things )</li>
                <li>주해 사물 ( Annotation Things )</li>
            </ul>
        `
    },
    {
        "title": "SPICE 모델의 단계",
        "pages": "1-040",
        "chapter": "Chapter 01 - Section 02",
        "subject": "1 / 소프트웨어 개발 방법론",
        "content": `
            <table>
                <tr>
                    <th>LEVEL</th>
                    <th>명칭</th>
                    <th>설명</th>
                </tr>
                <tr>
                    <td>0</td>
                    <td>불안정</td>
                    <td>프로세스가 충분히 구현되지 못한 단계</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>수행</td>
                    <td>프로세스가 전반적으로 구현된 단계</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>관리</td>
                    <td>자원의 한도 내에서 프로세스가 직접 작업 산출물 인도</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>확립</td>
                    <td>소프트웨어 공학 원칙을 기반으로 프로세스 수행</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>예측</td>
                    <td>목적 달성을 위한 소프트웨어 통제, 정량적 측정</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>최적화</td>
                    <td>프로젝트 수행 최적화, 지속적인 업무 목적을 만족시킴</td>
                </tr>
            </table>
        `
    },
    {
        "title": "현행시스템 파악 중 네트워크 구성 파악",
        "pages": "1-051",
        "chapter": "Chapter 02 - Section 01",
        "subject": "1 / 요구사항 확인",
        "content": `
            <h4>
                현행시스템 파악 - 네트워크 구성 파악
            </h4>
            <ul>
                <li>업무 시스템들의 네트워크 구성을 파악</li>
                <li>서버의 위치와 서버 간의 네트워크 연결 방식을 구성도로 작성하여 물리적인 위치를 파악</li>
                <li>보안 취약성을 미리 분석하여 적절한 대응을 할 수 있고, 장애 발생 원인ㄴ을 찾아 복구하는 용도로도 활용할 수 있다.</li>
            </ul>
        `
    },
    {
        "title": "요구사항 명세기법 - 비정형 명세 기법",
        "pages": "1-059",
        "chapter": "Chapter 02 - Section 02",
        "subject": "1 / 요구사항 확인",
        "content": `
            <ul>
                <li>자연어를 기반으로 사용자의 요구를 서술한다.</li>
                <li>일반적이고 친숙하지만 명세서로는 불충분할 수 있다.</li>
                <li>사용자의 요구를 상태, 기능, 객체 중심으로 서술한다.</li>
                <li>의사 전달 방법이 다양하고 이해가 용이하다.</li>
            </ul>
        `
    },
    {
        "title": "보안 개발 방법론의 종류 CWE ( Common Weakness Enumeration )",
        "pages": "1-032",
        "chapter": "Chapter 01 - Section 02",
        "subject": "1 / 소프트웨어 개발 방법론",
        "content": `
            <ul>
                <li>입력 데이터 검증 및 표현</li>
                <li>보안 기능</li>
                <li>시간 및 상태</li>
                <li>에러 처리</li>
                <li>코드 오류</li>
                <li>캡슐화</li>
                <li>API 오용</li>
            </ul>
        `
    },
    {
        "title": "객체지향 방법론의 기본 원칙",
        "pages": "1-032",
        "chapter": "Chapter 01 - Section 02",
        "subject": "1 / 소프트웨어 개발 방법론",
        "content": `
            <ul>
                <li>캡슐화</li>
                <li>정보은닉</li>
                <li>상속성</li>
                <li>추상화</li>
                <li>다형성</li>
            </ul>
        `
    }
    
]
;


