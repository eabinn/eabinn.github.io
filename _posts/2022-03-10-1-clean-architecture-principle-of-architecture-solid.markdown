---
layout: post
title: "[Clean Architecture] SOLID 설계 원칙"
data: "2022-03-10 20:43:00 +0900"
tags: [all, cleanArchitecture, book]
comments: true
---

해당 포스트는 Robert C. Martin의 Clean Architecture 저서를 읽고 정리했다.
<br>
<br>

# SOLID 란

SOLID란 좋은 벽돌(좋은 코드)로 좋은 아키텍처를 정의하는 원칙을 말한다. SOLID `원칙은 함수와 데이터 구조를 클래스로 배치하는 방법`와 `클래스를 서로 결합하는 방법`을 설명한다.
SOLID 원칙의 목적은 중간 수준의 소프트웨어의 구조가 아래와 같도록 만드는데 있다.

('중간 수준' 이라는 것은 프로그래머가 이들 원칙을 모듈 수준에서 작업할 때 적용할 수 있다는 뜻이다. 즉, 코드 수준보다는 조금 상위에서 적용되며 모듈과 컴포넌트 내부에서 사용되는 소프트웨어 구조를 정의하는데 도움을 준다.)

- 변경에 유연하다
- 이해하기 쉽다
- 많은 소프트웨어 시스템에 사용될 수 있는 컴포넌트의 기반이 된다.

<br>

# SOLID 원칙

1. SRP: 단일 책임 원칙 Single Responsibility Principle
   -> 소프트웨어 모듈은 변경의 이유가 하나여야만 한다.
2. OCP: 개방 - 폐쇄 원칙 Open-Closed Principle
   -> 기존 코드를 수정하기 보다는 반드시 새로운 코드를 추가하는 방식으로 시스템의 행위를 변경할 수 있도록 설계해야만 소프트웨어 시스템을 쉽게 변경할 수 있다.
3. LSP: 리스코프 치환 원칙 Liskov Substitution Principle
   -> 상호 대체 가능한 구성요소를 이용해 소프트웨어 시스템을 만들 수 있으려면, 이들 구성요소는 반드시 서로 취환 가능해야 한다.
4. ISP: 인터페이스 분리 원칙 Interface Segregation Principle
   -> 소프트웨어 설계자는 사용하지 않은 것에 의존하지 않아야 한다.
5. DIP: 의존성 역전 원칙 Dependency Inversion Principle
   -> 고수준 정책을 구현하는 코드는 저수준 세부사항을 구현하는 코드에 절대로 의존해서는 안된다. 대신 세부사항이 정책에 의존해야 한다.

<br>

---

### 저서

- <a href="https://martinfowler.com" target="_blank">Martin C.Fowler</a>의 Clean Architecture

<br>

---
