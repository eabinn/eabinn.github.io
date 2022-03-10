---
layout: post
title: "[Clean Architecture] SOLID - SRP 단일 책임 원칙"
data: "2022-03-10 22:43:00 +0900"
tags: [all, cleanArchitecture, book]
comments: true
---

해당 포스트는 Robert C. Martin의 Clean Architecture 저서를 읽고 정리했다.
<br>
<br>

# 단일 책임 원칙 Single Responsibility Principle

- 단 하나의 일을 해야 한다는 원칙은 함수를 위한 것이다. **함수는 반드시 하나의, 단 하나의 일만 해야 한다.**
- **'변경의 이유'**는 사용자와 이해관계자를 위해서 쓴 것으로 SRP를 변경하면 다음과 같다.<br>
  `하나의 모듈은 하나의, 오직 하나의 사용자 또는 이해관계자에 대해서만 책임져야 한다.`
- 하지만 이해관계자와 사용자는 여럿일 수 있으므로 이들 집단을 액터라고 Actor 부르면 SRP는 다음과 같이 결론을 지을 수 있다.<br>
  `하나의 모듈은 하나의, 오직 하나의 액터에 대해서만 책임져야 한다.`
- '모듈'은 소스 파일이며 단순히 함수와 데이터 구조로 응집된 집합이며 이 '응집된'이 SRP를 의미한다.

<br>

# SRP를 위반하는 징후와 해결책

## SRP를 위반하는 징후 1: 우발적 중복

```javascript
class Employee {
	calculatePay(...arg) {
        // 회계팀에서 기능을 정의, CFO 보고를 위해 사용
		...
	}
	reportHours(...arg) {
        // 인사팀에서 기능을 정의하고 사용, COO 보고를 위해 사용
		...
	}
	save(...arg) {
        // DBA가 기능을 정의하고, CTO 보고를 위해 사용
		...
	}
```

이 클래스는 SRP를 위반하는데, 이들 세 가지 메서드가 서로 다른 엑터를 책임지기 때문이다. 이럴 경우 어느 한 팀에서 결정한 조치가 다른 팀에 의존하는 무언가에 영향을 줄 수 있다. 다음과 같은 상황들을 예상할 수 있다.

1. calculatePay(), reportHours() 메서드가 초과 근무 제외한 업무 시간을 계산하는 알고리즘을 공유하고 이 알고리즘을 regulateHours() 메서드에 넣음
2. CFO 팀에서 업무 시간 계산 방식을 약간 수정
3. 개발자가 regulateHours() 메서드가 두 메서드에서 사용되는 것을 확인하지 못함

서로 다른 엑터가 의존하는 코드를 너무 가까이 배치하면 위와 같은 문제가 발생할 수 있다.
-> `SRP는 서로 다른 엑터가 의존하는 코드를 서로 분리하라고 말한다.`

## SRP를 위반하는 징후 2: 병합

서로 다른 목적을 가지고 동일한 소스 파일을 변경할 때 발생
-> `서로 다른 엑터를 뒷받침하는 코드를 서로 분리해야 한다.`

## 해결책

각각의 메서드들을 그 메서드만을 담당하는 클래스로 이동시킨다. 그리고 데이터와 메서드를 분리한다. 아무런 메서드가 없는 간단한 데이터 구조인 EmployeeData 클래스를 만들어 세 개의 클래스가 공유하게 한다. 각 클래스는 자신의 메서드에 반드시 필요한 코드만 포함한다. **이 클래스들은 서로의 존재를 몰라야 하며 이렇게 함으로써 '우연한 중복'을 피할 수 있다.**

```javascript
class EmployeeData {
    ...
}

class PayCalculator {
	constructor() {
    this.data = new EmplyeeData();
  }
	calculatePay(...arg) {
        // 회계팀에서 기능을 정의, CFO 보고를 위해 사용
		...
	}
}

class HourReporter {
  constructor() {
    this.data = new EmplyeeData();
  }
  reportHours(...arg) {
      // 인사팀에서 기능을 정의하고 사용, COO 보고를 위해 사용
		...
	}
}

class EmployeeSaver {
  constructor() {
    this.data = new EmplyeeData();
  }
	saveEmployee(...arg) {
        // DBA가 기능을 정의하고, CTO 보고를 위해 사용
		...
	}
}
```

<br>
하지만 이렇게 각기 다른 클래스들로 만들경우 이 인스턴스들을 전부 추적하고 관리해야 한다는 단점이 있다. 이런 관리의 문제에 봉착했을 때는 흔히 쓰는 기법으로 파사드 Facade 패턴이 있다. 이 인스턴스들을 하나의 클래스로 감싸 관리하는 것이다. EmployeeFacade 클래스는 세 클래스의 객체를 생성하고, 요청된 메서드를 가지는 객체로 위임하는 일을 책임진다.
(파사드 Facade 패턴: 속은 보이지 않고 복잡한 것들, 세부적인 것들은 감추고, 간단한 것만 보여주는 패턴)
```javascript
class EmployeeFacade {
	calulatePay() {
	  const calculator = new PayCalculator().calculate();
	}
  ...  
}
```

<br>

# 결론

- SRP는 메서드와 클래스 수준의 원칙이다. 하지만 상위의 두 수준에서도 다른 형태로 등장한다.
- 컴포넌트 수준에서는 공통 폐쇄 원칙 Common Closure Principle이 된다.
- 아킥텍쳐 수준에서는 아키텍쳐 경계 Architectural Boundary의 생성을 책임지는 변경의 축 Axis of Change가 된다.

<br>

---

### 저서

- <a href="https://martinfowler.com" target="_blank">Martin C.Fowler</a>의 Clean Architecture

<br>

---
