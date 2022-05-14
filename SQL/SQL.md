# SELECT

### SELECT : [열1, 열2, 열3, ...]
* AS : 별칭
  ```SQL
  SELECT Address AS 주소
  ```
### FROM : 테이블 이름
### WHERE : 행 선택 조건식
### GROUP BY : 같은 결과값을 그룹화
### ORDER BY : 정렬
* ASC | DESC : 오름차순 | 내림차순
  ```SQL
  SELECT *
  FROM users
  ORDER BY age DESC
  ```
### LIMIT : 행 최대 개수 제한

<br><br>
# 데이터 가공

### 수학
* 단순 수식
  ```SQL
  SELECT 1+1 // 2
  ```
* MOD(a, b) : a%b
* ROUND(a, b) : a를 소수점 아래 b번쨰자리까지 표시 (b+1 자리에서 반올림)
* COUNT(열이름) : 해당 열의 개수

### 문자열
* CONCAT (str1, str2, ...) : 문자열 합쳐서 하나의 문자열로 출력
* SUBSTR (str, a, b) : str의 a번째 문자부터 b개 출력
  ```SQL
  SUBSTR('우아한형제들', 2, 4) // '아한형제'
  ```

### 시간
* CURDATE() : 현재 날짜 (시간은 00:00:00)
* CURTIME() : 현재 시간 (24시간제 표현)