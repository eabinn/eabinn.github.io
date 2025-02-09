---
layout: post
title: "[Clean Architecture] 컴포넌트 응집도"
data: "2022-03-11 06:10:00 +0900"
tags: [all, cleanArchitecture, book]
comments: true
---

해당 포스트는 Robert C. Martin의 Clean Architecture 저서를 읽고 정리했다.
<br>
<br>

# 컴포넌트 응집도

컴포넌트 응집도는 다음의 세 가지 원칙으로 논의된다.

- REP: 재사용 / 릴리스 등가 원칙 Reuse / Release Equivalence Principle
- CCP: 공통 폐쇄 원칙 Common Closure Principle
- CRP: 공통 재사용 원칙 Common Reuse Principle

<br>

# REP: 재사용 / 릴리스 등가 원칙

`재사용 단위는 릴리스 단위와 같다.`

<br>

소프트웨어 컴포넌트가 릴리스 절차를 통해 추적 관리되지 않거나 릴리스 번호가 부여되지 않는다면 해당 컴포넌트를 재사용하고 싶어도 할 수도 없고 하지도 않을 것이다.
-> 릴리스 번호가 없다면 재사용 컴포넌트들이 서로 호환되는지 보증할 방법이 없다. 하지만 이보다 더 중요한 것은 새로운 버전이 언제 출시되고 무엇이 변했는지 소프트웨어 개발자들이 알아야 하기 때문이다.

<br>

릴리스 절차에서는 적절한 공지와 함께 릴리스 문서 작성도 포함되어야 한다.
-> 그래야 개발자가 충분한 정보를 바탕으로 새 릴리스를 통합할지, 한다면 언제 할지 결정할 수 있다.

<br>

이 원칙을 소프트웨어 설계와 아키텍처 관점에서 보면 단일 컴포넌트는 응집성 높은 클래스와 모듈들로 구성되어야 함을 뜻한다. 컴포넌트를 구성하는 모든 모듈은 서로 공유하는 중요한 테마나 목적이 있어야 한다. 하나의 컴포넌트로 묶인 클래스와 모듈은 버전 번호가 같아야 하며, 동일한 릴리스로 추적 관리되고, 동일한 릴리스 문서에 포함되어야 한다.

<br>

이 원칙으로 클래스와 모듈을 단일 컴포넌트로 묶는 방법을 제대로 설명하기는 어렵지만, 이 원칙은 당연하며 중요하다. 이 원칙을 어기면 '이치에 맞지' 않게 된다.

<br>

# CCP: 공통 폐쇄 원칙

`동일한 이유로 동일한 시점에 변경되는 클래스를 같은 컴포넌트로 묶어라. 서로 다른 시점에 다른 이유로 변경되는 클래스는 다른 컴포넌트로 분리하라.`

<br>

이 원칙은 단일 책임 원칙 SRP을 컴포넌트 관점에서 다시 쓴 것이다. SRP에서 단일 클래스는 변경의 이유가 여러 개 있으면 안 된다고 말하듯이, 공통 폐쇄 원칙 CCP에서도 단일 컴포넌트는 변경의 이유가 여러 개 있으면 안된다.

<br>

애플리케이션은 유지보수성maintainability이 재사용보다 훨씬 중요하다. 코드 변경이 여러 컴포넌트에서 발생하기 보다는 단일 컴포넌트에서 발생하는 것이 낫다.
-> 만약 변경을 단일 컴포넌트로 제한 할 수 있다면 해당 컴포넌트만 재배포하면 된다.

<br>

CCP는 이 같은 이유로 변경될 가능성이 있는 클래스는 모두 한 곳으로 묶을 것을 권한다. 물리적 또는 개념적으로 강하게 결합되어 항상 함께 변경되는 클래스들은 하나의 컴포넌트에 속해야 한다.
-> 이를 통해 소프트웨어를 릴리스, 재검증, 배포하는 일과 관련된 작업량을 최소화할 수 있다.

<br>

이 원칙은 개방 폐쇄 원칙 OCP(Open Closure Principle)과 관련되어 있다. OCP는 클래스가 변경에는 닫혀 있고 확장에는 열려 있어야 한다고 말한다. 전략적으로 폐쇄시켜야 한다. 발생할 가능성이 있거나 과거에 발생했던 대다수의 공통적인 변경에 대해서 클래스가 닫혀 있도록 설계한다.
-> **닫혀 있다는 것은 기존의 코드를 변경하지 않으면서 (closed) 기능을 추가할 수 있도록(Open) 설계가 되어야 함**을 의미한다.

<br>

CCP 에서는 동일한 유형의 변경에 대해 닫혀있는 클래스들을 하나의 컴포넌트로 묶는다. 따라서 변경이 필요한 요구사항이 발생했을 때, 그 변경이 영향을 주는 컴포넌트들이 최소함으로 한정될 가능성이 확실히 높아진다.

<br>

# CRP: 공통 재사용 원칙

`컴포넌트 사용자들을 필요하지 않는 것에 의존하게 강요하지 말라.`

<br>

CRP 에서는 같이 재사용되는 경향이 있는 클래스와 모듈들은 같은 컴포넌트에 포함해야 한다고 말한다.
-> 재사용 되는 모듈의 일부로서 해당 모듈의 다른 클래스들과 상호작용 하는 클래스들은 같은 컴포넌트에 포함되어야 한다. (예를 들어 Container 클래스와 해당 클래스의 Iterator 클래스)

<br>

CRP는 또한 강하게 결합되지 않은 클래스들을 동일한 컴포넌트에 위치시켜서는 안된다고 말한다.
-> 어떤 컴포넌트가 어떤 컴포넌트를 사용한다. 사용하는 컴포넌트가 사용되는 컴포넌트에서 단 하나의 클래스만 사용할 수 있다. 그렇다고 의존성이 약해지는 것은 아니다. 사용하는 컴포넌트는 사용되는 컴포넌트에 의존한다. 이 같은 의존성으로 사용되는 컴포넌트가 변경될 때마다 사용하는 컴포넌트도 변경해야 할 가능성이 높다.

<br>

CRP는 인터페이스 분리 원칙 ISP의 포괄적인 버전이다. ISP는 사용하지 않는 메서드가 있는 클래스에 의존하지 말라고 조언한다. CRP는 사용하지 않는 클래스를 가진 컴포넌트에 의존하지 말라고 조언한다.

<br>

# 컴포넌트 응집도에 대한 균형 다이어그램

- REP 와 CCP는 포함 inclusive 원칙이다. -> 두 원칙은 컴포넌트를 더욱 크게 만든다.
- CRP는 배제 exclusive 원칙이다. -> 이 원칙은 컴포넌트를 더욱 작게 만든다.

<br>

<img width="100%" src="{{ "/assets/images/2022-03-11-1/1.jpg" | relative_url }}" />

- 각 변은 반대쪽 꼭지점에 있는 원칙을 보기했을 때 감수해야 할 비용이다.
- REP와 CRP에 중점을 두면, 사소한 변경이 생겼을 때 너무 많은 컴포넌트에 영향을 미친다.
- 반대로 CCP와 REP에 중점을 두면 불필요한 릴리스가 너무 빈번해진다.
- 아키텍트는 이 균형 다이어그램에서 현재의 상황을 충족시키는 위치를 찾아야 한다. 프로젝트 초기에는 CCP가 REP보다 훨씬 중요한데, 개발 가능성이 재사용성보다 중요하기 때문이다.<br>
  -> 일반적으로 프로젝트는 CCP에서 시작해서 REP로 간다. 프로젝트가 성숙하면서, 해당 프로젝트에서 파생된 프로젝트가 시작되면 점차 왼쪽으로 간다. 즉, 프로젝트의 컴포넌트 구조는 시간과 성숙도에 따라 변한다는 뜻이다.<br>
  -> 이 원칙들은 프로젝트가 발전되고 사용되는 방법과 더 관련이 깊다.

<br>

# 결론

- 어느 클래스들을 묶어서 컴포넌트로 만들지를 결정할 때, `재사용성`과 `개발 가능성`이라는 상충하는 힘을 반드시 고려해야 한다. 또한 이들 사이에서 애플리케이션의 요구에 맞게 균형을 잡는 일도 중요하다. 이 균형점은 유동적이다.
- 시간의 흐름에 따라 프로젝트의 초점이 개발가능성에서 재사용성으로 바뀌고, 그에 따라 컴포넌트를 구성하는 방식도 조금씩 흐트러지고 진화한다.

<br>

---

### 저서

- <a href="https://martinfowler.com" target="_blank">Martin C.Fowler</a>의 Clean Architecture

<br>

---
