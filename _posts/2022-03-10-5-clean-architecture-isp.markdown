---
layout: post
title: "[Clean Architecture] SOLID - ISP 인터페이스 분리 원칙"
data: "2022-03-10 23:22:00 +0900"
tags: [all, cleanArchitecture, book]
comments: true
---

해당 포스트는 Robert C. Martin의 Clean Architecture 저서를 읽고 정리했다.
<br>
<br>

# 인터페이스 분리 원칙 Interface Segregation Principle

소프트웨어 설계자는 사용하지 않은 것에 의존하지 않아야 한다.

<br>

# ISP와 언어

- 정적 타입 언어는 사용자가 import, use 또는 include와 같은 타입 선언문을 사용하도록 강제한다. 이처럼 소스 코드에 포함된(included) 선언문으로 인해 소스 코드 의존성이 발생하고, 이로 인해 재컴파일 또는 재배포가 강제되는 상황이 무조건 초래된다.
- 루비나 파이썬 같은 동적 타입 언어에서는 소스 코드에 이러한 선언문이 존재하지 않지만 대신 런타임에 추론이 발생한다. 따라서 소스 코드 의존성이 없으며, 결국 재컴파일과 재배포가 필요없다. 동적 타입 언어를 사용하면 정적 타입 언어를 사용할 때보다 유연하며 결합도가 낮은 시스템을 만들 수 있다.
- 이러한 사실로 ISP를 아키텍처가 아닌 언어와 관련된 문제라고 결론내릴 여지가 있다.

<br>

## ISP와 아키텍처

- 일반적으로 필요 이상으로 많은 걸 포함하는 모듈에 의존하는 것은 좋지 않다. 소스 코드 의존성의 경우에는 이는 명백한데 불필요한 재컴파일과 재배포를 강제하기 때문이다.
- 하지만 더 고수준적인 아키텍처 수준에서도 마찬가지 상황이 발생한다.
- 의존하는 것이 끊임없이 엮여 있는 것을 피해야 한다.

<br>

# 결론

- 불필요한 짐을 실은 무언가에 의존하면 예상치도 못한 문제에 빠진다.

<br>

---

### 저서

- <a href="https://martinfowler.com" target="_blank">Martin C.Fowler</a>의 Clean Architecture

<br>

---
