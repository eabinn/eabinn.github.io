---
layout: post
title: "URL 인코딩"
data: "2022-02-27 22:02:00 +0900"
tags: [all, format, web]
comments: true
---

# URL 인코딩이란

URL 인코딩은 퍼센트 인코딩이라고도 하며 URL에 문자를 표현하는 문자 인코딩 방법이다. 알파벳이나 숫자 등 몇몇 문자를 제외한 나머지는 1바이트 단위로 묶인 16진수로 인코딩하는 방식이다.

<br>

# 왜 해야 하는가?

GET 방식을 통해 HTTP 요청을 할 때 쿼리 파리미터가 붙는 경우가 생기는데 URL은 ASCII 코드값만 사용된다. 이 쿼리 파라미터에 한글이 포함될 경우, ASCII 코드만으로 표현을 할 수 없어 인코딩을 진행해야 한다. 호출하는 API마다 쿼리 파라미터에 한글 문자를 그대로 지원하는 경우도 있지만 그렇지 않은 경우도 있으므로 인코딩을 거친 형식으로 전송하는 것이 바람직하다.

<br>

---

### 참고

- <a href="https://brownbears.tistory.com/501" target="_blank">[Python] URL 인코딩 (퍼센트 인코딩) - urllib 사용하기</a>

<br>

---
