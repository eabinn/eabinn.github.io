---
layout: post
title: "null와 undefined"
data: "2022-02-27 19:34:00 +0900"
tags: [all, javascript]
comments: true
---

# null와 undefined

null와 undefined 다 자바스크립트의 원시 타입이며 **값이 없음**을 의미한다. 또한 둘 다 값이며 동시에 타입이다. 차이점은 null의 경우에는 변수 선언 후 null로 값을 바꾸지만 undefined는 변수 선언 시 아무 값도 넣어주지 않으면 undefined라는 값이 할당된다는 것이다.
둘 다 값이 없음을 의미하기 때문에 동등연산자(==) 사용시 두 값이 같다고 간주하기 때문에 정확하게 비교하려면 엄격한 일치연산자(===)를 사용해야 한다.

# null

null 타입 변수의 경우에는 명시적으로 값이 비어있음을 의미하는데 이는 어느 것도 참조하고 있지 않다는 의미가 들어있다. 그래서 주로 객체를 담을 변수를 초기화할 때 많이 사용한다.

# undefined

값을 할당받지 않은 변수는 undefined 타입을 가지며 undefined 값을 가지게 된다.

<br>

---

### 참고

- <a href="https://webclub.tistory.com/1" target="_blank">undefined와 null의 차이점</a>

<br>

---
