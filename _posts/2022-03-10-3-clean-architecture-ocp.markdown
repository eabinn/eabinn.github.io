---
layout: post
title: "[Clean Architecture] SOLID - OCP 개방 폐쇄 원칙"
data: "2022-03-10 22:45:00 +0900"
tags: [all, cleanArchitecture, book]
comments: true
---

해당 포스트는 Robert C. Martin의 Clean Architecture 저서를 읽고 정리했다.
<br>
<br>

# 개방 폐쇄 원칙 Open - Close Principle

- 소프트웨어는 확장에는 열려 있어야 하고, 변경에는 닫혀 있어야 한다.
  -> 소프트웨어 개체의 행위는 확장할 수 있어야 하지만, 이때 개체를 변경해서는 안된다.
- OCP는 클래스와 모듈을 설계할 때 도움되는 원칙이라고는 하지만, 아키텍처 컴포넌트 수준에서 OCP를 고려할 때 훨씬 중요한 의미를 가진다.

<br>

# 결론

- OCP의 목표는 시스템을 확장하기 쉬운 동시에 변경으로 인해 시스템이 너무 많은 영향을 받지 않도록 하는데 있다.
- 이러한 목표를 달성하려면 시스템을 컴포넌트 단위로 분리하고, 저수준 컴포넌트에서 발생한 변경으로부터 고수준 컴포넌트를 보호할 수 있는 형태로 의존성 계층구조가 만들어지도록 해야 한다.

<br>

---

### 저서

- <a href="https://martinfowler.com" target="_blank">Martin C.Fowler</a>의 Clean Architecture

<br>

---
