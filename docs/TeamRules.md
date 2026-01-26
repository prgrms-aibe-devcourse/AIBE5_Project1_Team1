# 작업규칙


## 작업시작하기
```bash
# 1. VS Code 사용
- 아이콘 누르기

# 2. Terminal 사용
- 상단에 있는 'Terminal'을 선택하기

# 3. GitHub 프로젝트 가져오기
- 하단에 생긴 'Terminal'에 아래와 같은 Git 명령어를 입력한다.
- git clone https://github.com/prgrms-aibe-devcourse/AIBE5_Project1_Team1.git

# 4. 본인 브랜치로 이동하기
- git checkout [본인브랜치명]

# 5. 작업하기
- 일해라 노예야
```

---

## API 규칙
- Github Repository에 올라가선 안되는 개인정보, 데이터, API KEY는 **.gitignore**에 올리고 Slack에 적용사항 애기해주기
- API KEY는 반드시 비공개처리하여 타인에게 공유하시면 안됩니다. (잘못하면 다른사람이 API를 마음대로 써서 돈 청구됨)

---

## 1. 매일 작업 전 최신 feature 내용 가져오기
```bash
git fetch origin
git checkout [본인브랜치]
git merge origin/feature
```

## 2. 작업 중 커밋
```text
# 의미있는 단위로 커밋
# 커밋 규칙: [기능분류]: [파일명] - [작업내용] - [날짜]
```

## 3. 작업 종료시 / PR 제출 전
```text
# Slack 혹은 Zoom으로 팀장에게 작업완료를 알리며 PR 제출
# 자신이 작업한 기능의 정상작동 확인 후 PR 제출
# 충돌 발생 시, 해결 후 PR 제출
```

## 4. PR 규칙
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

# 4. Repository에 있는 본인브랜치에 적용하기
git push origin [본인브랜치]
```


## Merge 중 문제 발생 시
```bash
# 리눅스 기반 텍스트파일 등장시
:wq!        # 강제로 저장 후 종료

# 그외는 저 부르세요 (feat.작성자 고완석)
```