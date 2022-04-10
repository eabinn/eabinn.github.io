---
layout: post
title: "[Rx] Stream, Operator 와 Marble Diagram"
data: "2022-04-10 17:00:00 +0900"
tags: [all, rx]
comments: true
---

해당 포스트는 <a href="https://github.com/kangraemin/RxJavaStudy" target="_blank">RxJava 스터디</a>를 통해 알게된 내용을 정리했습니다.
<br>
<br>

# Stream

Stream이란 데이터의 변화 도중 생긴 이벤트들을(onNext, onComplte, onError, ...) 관찰자(Observer)에게 알려주는 객체이다. Observer 패턴에서 Subject 객체와 유사한 개념이다.
Rx은 스트림의 형태를 바꿀 수 있는 함수들을 제공하는데 이 함수들을 Operator라고 한다.

<br>

# Operator

Operator은 스트림에서 발생하는 데이터 또는 이벤트를 필요에 맞게 변형하기 위해 사용한다. ReactiveX 라이브러리에는 다양한 Operator가 구현돼 있고 작업자는 사용 목적에 따라 각기 다른 Operator를 사용해 스트림을 변형할 수 있다.
Operator의 종류는 <a href="https://reactivex.io/documentation/operators.html">공식문서</a>에서 확인할 수 있다. 공식 문서를 보면 각 Operator들 마다 다이어그램이 그려져 있는데 이를 Marble Diagram이라고 하며 이를 통해 해당 operator가 어떻게 동작하는지를 알 수 있다.

<br>

# Marble Diagram

Marble Diagram은 Stream에서 데이터가 발행되고, 발행된 데이터가 어떻게 처리되는지를 한눈에 보기 쉽게 정리해놓은 것이다. 작업자는 이를 확인해 해당 operator가 어떤 식으로 동작하는지를 알 수 있다.

<br>

# 여러 Operator

## • All (<a href="https://reactivex.io/documentation/operators/all.html">https://reactivex.io/documentation/operators/all.html</a>)

생각했던 내용

- Stream에 있는 모든 아이템들이 조건을 통과하면 onComplete시 true를 반환

설명

- Observable(subject)가 내보면 모든 아이템이 일부 기준을 충족하는지 확인
- 충족할 경우 true를 반환, 하나의 아이템도 충족하지 않으면 false를 반환

## • AMB (<a href="https://reactivex.io/documentation/operators/amb.html">(https://reactivex.io/documentation/operators/amb.html</a>)

생각했던 내용

- 여러 Stream을 받아서 첫번째로 아이템을 방출하는 Stream을 반환

설명

- 2개 또는 더 많은 stream을 받고 제일 먼저있는 stream의 모든 아이템을 방출한다.

## • Buffer (<a href="https://reactivex.io/documentation/operators/buffer.html">(https://reactivex.io/documentation/operators/buffer.html</a>)

생각했던 내용

- 하나의 스트립에서 특정한 기준 시간동안 연속적으로 들어오는 아이템들을 하나의 배열 아이템으로 묶어 방출한다.

설명

- Observable에서 방출된 항목을 주기먹으로 번들로 수집하고 한번에 하나씩 방출하는 대신 번들로 방출한다.
- Buffer 연산자는 아이템들을 내보내는 Observable을 해당 아이템들의 컬렉션을 내보내는 Observable로 변환한다.
- Source Observable이 onError 이벤트를 발행하면 buffer에 아이템들이 있다 하더라도 이 이벤트를 먼저 발행한다.

## • DO (<a href="https://reactivex.io/documentation/operators/do.html">https://reactivex.io/documentation/operators/do.html</a>)

생각했던 내용

- Do 연산자는 두 조건을 받으며 첫번째 조건은 아이템이 발행할때 해당 아이템을 변환하는데 사용되며 두번째 조건은 onComplete시 실행된다.

설명

- 다양한 Observable 수명 주기 이벤트에 대해 수행할 작업을 등록한다.
- Observable에서 특정 이벤트가 발생할때 ReactiveX가 호출할 콜백을 등록할 수 있다.
- 이러한 콜백은 Observable cascade와 관련된 notification 셋과는 독립적으로 실행된다.

## From (<a href="https://reactivex.io/documentation/operators/from.html">https://reactivex.io/documentation/operators/from.html</a>)

생각했던 것

- 하나의 컬렉션 아이템을 받아서 stream에 해당 컬렉션의 아이템들을 방출해준다.
- 데이터를 스트림으로 변화시켜주며 변화 후에는 onComplete 이벤트가 방출된다.

설명

- 다양한 다른 객체와 데이터 유형을 Observable로 변환한다.

## GroupBy (<a href="https://reactivex.io/documentation/operators/groupby.html">https://reactivex.io/documentation/operators/groupby.html</a>)

생각했던 것

- 특정 아이템들끼리 묶어 새로운 스트림을 생성해 방출한다.

설명

- Observable을 여러 셋의 Observable로 분리한다. 분리된 Observable은 기존 Observable 아이템들의 각기 다른 subset을 방출한다.
- 하나의 스트림에서 아이템들을 subset 으로 묶는 것은 각 아이템에서 동일한 키를 가진 항목들이다.

## Materialize / Dematerialize (<a href="https://reactivex.io/documentation/operators/materialize-dematerialize.html">https://reactivex.io/documentation/operators/materialize-dematerialize.html</a>)

생각했던 것

- Materialize: 아티템이 발행되면 해당 아이템의 특정 이벤트를 실행시킨다.
- Dematerialize: 특정 아이템의 이벤트가 실행되면 아이템으로 변환시킨다.

설명

- Materialize는 방출된 아이템과 아이템으로 전송된 알림을 모두 나타냅니다. Dematerialize는 이의 반대 동작입니다.
- Materialize는 onNext 메서드를 0번 이상 호출한 다음 onCompleted 또는 onError 메서드를 정확히 한 번 호출한다.

## Range (<a href="https://reactivex.io/documentation/operators/range.html">https://reactivex.io/documentation/operators/range.html</a>)

생각했던 것

- Range() 오페레이터는 시작 아이템과 끝 아이템을 인자로 받아서 시작 부터 끝까지의 아이템들을 순차적으로 방출하는 스트림을 생성한다.

설명

- 특정 범위의 순차 정수를 방출하는 Observable을 생성한다.

## Publish (<a href="https://reactivex.io/documentation/operators/publish.html">https://reactivex.io/documentation/operators/publish.html</a>)

생각했던 것

- 하나의 스트림을 여러 개의 스트림으로 방출한다.
- 이 방출되는 스트림은 그 나름의 조건에 따라(또는 시점?) 기존의 스트림에서 받는 아이템들이 다르다.
- 하지만 기존의 스트림이 종료되는 시점은 해당 오퍼레이터 결과 스트림들이 종료되는 시점과 동일하다.

- 설명

- 일반 Observable을 연결 가능한 Observable로 변환
- 연결 가능한 Observable은 Subscribe(구독)할때 아이템을 방출하는 것을 시작하지 않고, Connect 연산자가 적용될 때만 아이템들을 방출한다.
- 연결 가능한 Observable을 사용하면 선택한 시간에 아이템을 방출하도록 프롬프트 할 수 있다.

## Replay (<a href="https://reactivex.io/documentation/operators/replay.html">https://reactivex.io/documentation/operators/replay.html</a>)

생각했던 것

- 스트림에서 연속적으로 들어오는 아이템들을(일정 시간을 기준으로) 또 다른 스트림으로 방출한다.

- 설명

- Observable이 아이템을 방출하기 시작한 후에 구독하더라도 모든 관찰자가 방출된 아이템의 동일한 시퀀스를 볼 수 있게 한다.

## Scan (<a href="https://reactivex.io/documentation/operators/scan.html">https://reactivex.io/documentation/operators/scan.html</a>)

생각했던 것

- 스트림에서 아이템이 방출될때 이전의 모든 아이템들의 값을 더한 값을 가진 아이템을 방출한다.

설명

- Observable이 방출한 아이템에 함수를 순차적으로 적용하고 각각의 연속적인 값을 방출한다.

<br>

---

### 출처

- <a href="https://kangraemin.github.io/android/2021/08/23/reactive-stream-marble-diagram/" target="_blank">RxJava 강의 3 - Stream이란 / Operator란 / 마블 다이어그램 보는법</a>

<br>

---
