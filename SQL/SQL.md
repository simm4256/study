# SELECT

### SELECT : [열1, 열2, 열3, ...]
* AS : 별칭
  ```SQL
  SELECT Address AS 주소
  ```
* CASE ~ WHEN ~ THEN ~ ELSE ~ END : 조건문
  ```SQL
  SELECT
    CASE
      WHEN Address = '1' THEN '001'
      WHEN Address = '2' THEN '002'
      WHEN Address is NULL THEN 'NULL'
      ELSE '???'
    END AS 00_Address
  FROM users
  ```
### FROM : 테이블 이름
* JOIN : 2개의 테이블을 엮은 범위 생성
  * INNER : 교집합
    ```SQL
    SELECT *
    FROM table1
        INNER JOIN table2
        ON 조인조건
    [WHERE 검색조건]
    ```
  * OUTER
    <img src=https://hongong.hanbit.co.kr/wp-content/uploads/2021/11/OUTER-JOIN_%EB%8D%94%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0-600x600.png>
### WHERE : 행 선택 조건식
### GROUP BY : 같은 결과값을 그룹화
* HAVING : 그룹화한 결과에서 조건식을 사용할 때. WHERE과 달리 집계식(수학) 사용 가능
### ORDER BY : 정렬
* ASC | DESC : 오름차순 | 내림차순
  ```SQL
  SELECT *
  FROM users
  ORDER BY age DESC
  ```
### LIMIT : 행 최대 개수 제한

### WITH + RECURSIVE : 반복문으로 임시 테이블 생성
```SQL
with recursive 뷰명 as(
    초기 SQL
 
    union all(or union)
 
    반복할 SQL(+반복을 멈출 where절 포함)
 
)select * from 뷰명;
```

<br><br>
# 데이터 가공

### 수학
* 단순 수식
  ```SQL
  SELECT 1+1 // 2
  ```
* MOD(a, b) : a%b
* ROUND(a, b) : a를 소수점 아래 b번쨰자리까지 표시 (b+1 자리에서 반올림)
* COUNT(열) : 해당 열의 개수
* DISTINCT(열) : 중복을 제거한 열 목록 (COUNT와 조합하여 자주 사용)
  ```SQL
  SELECT COUNT(DISTINCT names) FROM users
  ```

### 문자열
* CONCAT (str1, str2, ...) : 문자열 합쳐서 하나의 문자열로 출력
* SUBSTR (str, a, b) : str의 a번째 문자부터 b개 출력
  ```SQL
  SUBSTR('우아한형제들', 2, 4) // '아한형제'
  ```

### 시간 (DATETIME)
* CURDATE() : 현재 날짜 (시간은 00:00:00)
* CURTIME() : 현재 시간 (24시간제 표현)
* HOUR(date) : date의 시간
* DAY(date) : date의 날짜

### 비교
* 숫자나 문자열의 단순 비교는 =, != 사용 가능
* `NULL`을 비교할 떈 `is`, `is not` 을 사용해야 함

### 변경
* REPLACE('문자열' or 열, a, b) : a를 b로 바꾼 결과. (`NULL`값은 NVL 사용)

### NULL
* NVL(표현식1, 표현식2) : 표현식1의 결과가 NULL이면 표현식2로 출력
  ```SQL
  SELECT NVL(NULL, 'isNull')
  FROM users
  // isNull
  ```
