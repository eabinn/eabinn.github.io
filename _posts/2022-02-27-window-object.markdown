---
layout: post
title: "Window 객체"
data: "2022-02-27 19:00:00 +0900"
tags: [all, javascript]
comments: true
---

# Window 객체

window 객체는 웹 브라우저의 창(window)을 나타내는 객체로, 대부분의 웹 브라우저에서 지원하고 있다.
자바스크립트를 이용하면 브라우저의 정보에 접근하거나 브라우저의 여러 기능들을 제어할 수 있다. 이때 사용하는 것이 브라우저 객체 모델(BOM, Browser Object Model)이다. 자바스크립트에서는 BOM의 객체들을 전역 객체(global object)로 사용할 수 있다.

전역 객체는 실행 전(previous) 단계에 생성이 된다. 자바스크립트의 모든 객체, 전역 함수, 전역 변수들은 자동으로 window 객체의 프로퍼티가 된다. window 객체의 메소드는 전역 함수이며, window 객체의 프로퍼티는 전역 변수가 됩니다. 또한 문서 모델(DOM)의 요소들도 모두 window 객체의 프로퍼티가 된다. 따라서 window 객체는 전역 객체 그 자신이라고 할 수 있다.

<br>

---

### 참고

- <a href="http://www.tcpschool.com/javascript/js_bom_window" target="_blank">Window 객체</a>

<br>

---
