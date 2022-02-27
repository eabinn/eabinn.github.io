---
layout: post
title: "MySQL Index"
data: "2022-02-27 14:47:00 +0900"
tags: [all, database]
comments: true
---

# Index란

Index는 특정 column 값을 가지고 있는 열을 빠르게 찾기 위해 사용한다. MySQL은 전체 테이블에 걸쳐서 첫번째 열부터 연관된 열을 검색하기 때문에 테이블이 크면 클수록 비용이 엄청나게 늘어난다.

# Index의 역할

1. Primary Key
   - Table의 하나의 record를 대표하는 column 값으로 만들어진 Index다.
   - 이 column 값은 하나의 record를 식별할 수 있는 식별자로 불린다.
   - NULL을 사용할 수 없고 중복을 허용하지 않는다.
2. Secondary Key
   - Primary Key를 제외한 나머지 모든 Index를 Secondary Index라고 한다.
   - 보조 index key라고도 불린다.

# 특정 필드에 대해서 indexing을 한 경우

MySQL의 index는 효과적으로 제목을 찾기 위해 **"색인(index)"** 작업 하는 것을 의미한다. DB에서는 검색 시간을 효율적으로 하기 위해 Index를 붙인다. MySQL의 index는 B-Tree 데이터 구조로 구현되어 있다. 따라서 탐색시간은 O(log n)이 된다.

- B-Tree 데이터 구조: 전산학에서 B-트리(B-tree)는 데이터베이스와 파일 시스템에서 널리 사용되는 트리 자료구조의 일종으로, 이진 트리를 확장해 하나의 노드가 가질 수 있는 자식 노드의 최대 숫자가 2보다 큰 트리 구조이다. (출처: [위키백과](<https://ko.wikipedia.org/wiki/B_%ED%8A%B8%EB%A6%AC#:~:text=%EC%A0%84%EC%82%B0%ED%95%99%EC%97%90%EC%84%9C%20B%2D%ED%8A%B8%EB%A6%AC(B,%EB%B3%B4%EB%8B%A4%20%ED%81%B0%20%ED%8A%B8%EB%A6%AC%20%EA%B5%AC%EC%A1%B0%EC%9D%B4%EB%8B%A4.)>))

# DB에서 index와 저장되는 데이터의 자료구조

|          |    Index    | 저장되는 데이터 |
| :------: | :---------: | :-------------: |
| 자료구조 | Sorted List |   Array List    |

- Sorted List: 저장되는 값을 항상 정렬된 상태로 유지하는 자료구조다
- Array List: 저장되는 순서에 따라서 정렬없이 저장되는 값을 유지하는 자료구조다.

# Index의 자료구조 SortedList의 장점과 단점

- 장점 : 이미 정렬되어 있기 때문에 DB에서 SELECT query를 사용하는 경우, 매우 빠른 속도로 원하는 결과를 검색 가능하다.
- 단점 : 데이터가 조작하는 INSERT, UPDATE, DELETE query를 사용하는 경우, 정렬을 해서 데이터를 저장해야 하기 때문에 query의 수행시간이 늘어난다.

따라서, 특정 필드를 indexing하는 경우 해당 필드에 대한 INSERT, UPDATE, DELETE 성능은 저하되지만 SELECT 성능은 향상된다. 하지만 하나의 테이블의 필드들에 대해 너무 많은 indexing을 하게 될 경우에는 전체적으로 성능이 저하되므로 분명한 목적을 가지고 indexing을 해야 한다.

# Index를 지정하면 좋은 경우

Index의 경우 SELECT의 성능이 향상되므로 다음과 같은 경우에는 Index를 지정하는 것이 좋다.

- 관계(foreign key) 잡혀있을 때
- order by 또는 select 해야할 때
- join 할 때

<br>

---

# 참고

- <a href="https://brunch.co.kr/@skeks463/25#:~:text=%EC%A6%89%20%EC%83%89%EC%9D%B8(Index)%20%EA%B8%B0%EB%8A%A5%EC%9D%80,%EB%8F%84%EA%B5%AC%EB%A1%9C%20%EB%A7%8E%EC%9D%B4%20%EC%82%AC%EC%9A%A9%EB%90%9C%EB%8B%A4" target="_blank">[DataBase] DB 성능을 위한 Index</a>

<br>

---
