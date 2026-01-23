# 작업규칙

## 작업규칙

---

### 1. 매일 작업 전 최신 feature 내용 가져오기
```bash
git fetch origin
git checkout [본인브랜치]
git merge origin/feature
```

### 2. 작업 중 커밋
```text
# 의미있는 단위로 커밋
# 커밋 규칙: [기능분류]: [파일명] - [작업내용] - [날짜]
```

### 3. 작업 종료시 / PR 제출 전
```text
# Slack 혹은 Zoom으로 팀장에게 작업완료를 알리며 PR 제출
# 자신이 작업한 기능의 정상작동 확인 후 PR 제출
# 충돌 발생 시, 해결 후 PR 제출
```

### 4. PR 규칙
```text
# PR 대상 브랜치 → 항상 feature
# PR 제목/설명 작성 필수
# PR 전에 개인 브랜치가 feature 최신 반영 상태인지 확인
```

---

## 개인 브랜치 초기화 방법
```bash
# 1. 본인 브랜치로 이동
git checkout [본인브랜치]

# 2. 원격 브랜치 최신 정보 가져오기
git fetch origin

# 3. feature의 내용으로 병합하기
git merge origin/feature
```