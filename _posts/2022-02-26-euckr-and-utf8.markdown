---
layout: post
title: "Unicode와 인코딩 방식"
data: "2022-02-26 20:21:00 +0900"
tags: [all, format]
comments: true
---

# Unicode 란

각 나라마다 컴퓨터에서 해당 언어를 표현할 수 있는 독자적인 문자 집합이 있으나 문제는 '어떻게 동시에 여러 나라의 문자를 표현하는 가' 이다. 이러한 문제를 해결하기 위해 전 세계적으로 사용되는 모든 문자 집합을 하나로 모아 탄생시킨 것이 유니코드이다. ISO 10646 표준에서 UCS (Universal Character Set)을 정의하고 있다.

유니코드 값을 나타내기 위해서는 코드 포인트 (Code Point)를 사용하는데, 보통 +U를 붙여 표시한다. 유니코드는 공식적으로 31비트 문자 집합이며 논리적으로 평면 (Plane)이라는 개념을 이용하여 구획을 나누며, 기본 다국어 평면 (BMP, Basic Multilingual Plane)인 0번부터 16번까지 총 17개의 평면으로 구성되어있다. 한글은 U+1100 - 11FF 사이에 한글 자모 영역, U+AC00 - U+D7AF 사이의 한글 소리 마디 영역에 포함된다.

<br>

# Unicode 인코딩 방식

유니코드의 인코딩 방식으로는 코드 포인트를 코드화한 UCS-2와 UCS-4, 변환 인코딩 방식 (UTF, UCS Transformation Format)인 UTF-7, UTF-8, UTF-16, UTF-32 인코딩 등이 있으며 이 중 ASCII와 호환이 가능 (UTF-8의 영문과 ASCII의 영문영역에서 호환)하면서 유니코드를 표현할 수 있는 UTF-8 인코딩이 가장 많이 사용된다.

UTF-8 인코딩은 유니코드 한 문자를 나타내기 위해 1바이트에서 4바이트까지를 사용한다. 예를 들어서, U+0000부터 U+007F 범위에 있는 ASCII 문자들은 UTF-8에서 1바이트만으로 표시된다. 한글의 경우에는 한글 완성형의 코드 포인트 범위가 U+AC00 ~ U+D7AF이므로 UTF-8에서 3바이트로 표시된다.

<br>

# EUC-KR 인코딩

EUC-KR은 KS X 1001와 KS X 1003을 사용하는 8비트 문자 인코딩, EUC의 일종이며 대표적인 한글 완성형 인코딩이기 때문에 보통 완성형이라고 불린다. 텍스트를 다루는 외부 서비스를 사용할 경우 가끔 UTF-8 방식이 아닌 EUC-KR로 한글을 인코딩하는 경우도 있으므로 이 존재에 대해서 알고 있으면 좋겠다.
