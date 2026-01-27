# 작업규칙


## 첫 시작
```bash
# 1. VS Code 사용
- 아이콘 누르기

# 2. Terminal 사용
- 상단에 있는 'Terminal'을 선택하기

# 3. GitHub 프로젝트 가져오기
- 하단에 생긴 'Terminal'에 아래와 같은 Git 명령어를 입력한다.
- git clone https://github.com/prgrms-aibe-devcourse/AIBE5_Project1_Team1.git

# 4. 패키지 설치하기
- npm install
- npm install --save-dev @types/react @types/react-dom

# 4. 본인 브랜치로 이동하기 및 브랜치 설정
- git checkout -b [본인브랜치명]

# 5. 본인디렉터리 덮어쓰기
- git push -f origin [본인브랜치명]
```

---

## GitHub Push방법
```bash
# 0. branch 확인하기
  - git branch
  - 만약 개인 브랜치가 아니라면 'git checkout [본인브랜치명]'
# 1. 작업한 파일 넣기
  - git add .
  - 현재 작업하던 파일들을 git에 보내겠다는 의미
  - 특정 파일만 보낼때: git add 파일1 파일2 파일3
# 2. push하기 전에 commit하기
  - git commit -m " [기능분류]: [파일명] - [작업내용] - [날짜] "
  - 커밋 규칙에 맞춰서 보내기
# 3. 작업한 내용을 개인 브랜치로 보내기
  - git push
  - 반드시 본인 브랜치에 먼저 push하고 feat에는 나중에 merge하기
```

---

## 1. 매일 작업 전 최신 feature 내용 가져오기
```bash
git fetch origin
git checkout [본인브랜치]
git merge origin/feature
  - 위 명령어가 문제된다면 'git reset --hard origin/feature' 을 사용하기
```

## 2. 커밋 메시지 기본 형식
```text
[기능분류]: [작성내용] - [날짜]
```
- **기능분류:** 작업의 성격
- **수정/작성내용:** 추가·수정한 작업 내용을 간단히 요약
- **수정/작성일:** 작업을 완료한 날짜 (YYYY-MM-DD)

#### 기능분류(Type)

| 타입     | 의미          |
| ------ | ------------- |
| feat   | 새로운 기능 추가  |
| docs   | 문서 작성 / 수정 |
| fix    | 버그 수정       |
| refact | 코드 리팩토링    |

#### Commit 규칙 상세

```text
[기능분류]: [파일명] - [작업내용] - [날짜]
```
- 작성내용 앞에 작업한 파일명 명시
- 작업내용을 중심으로 간단히 작성

```text
# 예시
git commit -m "feat: index.js - 로그인 추가 - 26.01.22"
git commit -m "feat: Header.js - 헤더구현 - 26.01.22"
git commit -m "feat: Header.js, index.js - 헤더로 메인화면 돌아가는 기능 구현 - 26.01.22"
```

## 3. 작업 종료시 / PR 제출 전
```text
# Slack 혹은 Zoom으로 팀장에게 작업완료를 알리며 PR 제출
# 자신이 작업한 기능의 정상작동 확인 후 PR 제출
# 충돌 발생 시, 해결 후 PR 제출
```

## 4. PR 규칙
```t
# PR 대상 브랜치 → 항상 feature
# PR 제목/설명 작성 필수
# PR 전에 개인 브랜치가 feature 최신 반영 상태인지 확인

# Pull Request 진행 절차
1. 개인 브랜치(t1 ~ t7)에서 기능 개발을 진행한다.
2. 작업이 완료되면 개인 브랜치에 push한다.
  2-1. Git은 Commit마다 저장하기 때문에 기능을 완성할 때마다 [push 작업]()하는 것을 추천함
3. push한 내용을 **feature 브랜치를 대상으로 Pull Request를 생성**
4. PR의 제목에 **기능분류**에 맞게 작업 내용 및 변경 사항을 간단히 설명한다.
5. 팀장이 PR을 리뷰하고 승인(Approve)한다.
6. 승인 완료 후 feature 브랜치에 병합(Merge)된다.
```

# 5. 브랜치 규칙
```t
# **main 브랜치**
  - 배포 전용 브랜치로 사용한다.
  - **팀장만 push 및 merge 권한**을 가진다.
  - 개인 작업 및 직접적인 수정은 금지한다.

# **feature 브랜치**
  - 개인 브랜치에서 작업한 내용을 통합하는 브랜치이다.
  - 개인 브랜치(t1 ~ t7)에서 **직접 push는 불가**하다.
  - 반드시 **Pull Request(PR)** 를 통해서만 병합할 수 있다.
  - PR은 **팀장의 승인(Approve) 후에만 merge 가능**하다.

# **개인 브랜치 (t1 ~ t7)**
  - 각 팀원은 본인에게 할당된 브랜치에서만 작업한다.
  - 작업 완료 후 feature 브랜치를 대상으로 PR을 생성한다.
  - 매일 작업 완료 후 각자 작업한 내용을 push한다.

# **main, feature 브랜치는 보호 브랜치로 설정**한다.
- 보호 브랜치에는 다음 규칙을 적용한다.
  - 직접 push 금지
  - Pull Request 없이 merge 금지
  - 팀장 승인 필수
```

---

## API 규칙
- Github Repository에 올라가선 안되는 개인정보, 데이터, API KEY는 **.gitignore**에 올리고 Slack에 적용사항 애기해주기
- API KEY는 반드시 비공개처리하여 타인에게 공유하시면 안됩니다. (잘못하면 다른사람이 API를 마음대로 써서 돈 청구됨)

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

---

## PR 중 문제 발생 시
```bash
# 리눅스 기반 텍스트파일 등장시
1. ESC를 눌러 관리자모드로 나온다.
2. :wq!        # 강제로 저장 후 종료

# feature의 내용과 본인이 작업한 파일의 불일치 발생시
1. 문제가 되는 파일이 어떤 것인지 살펴본다.
2. git fetch origin                               // GitHub Repository에서 최신정보를 가져온다.
3. git checkout origin/[본인브랜치] --[문제파일]       // 문제되는 파일을 최신버전으로 갱신해온다.
4. 이후에 모든 파일을 저장하고 다시 push 작업을 수행한다.

# 실제로 main으로 다이렉트로 올리거나 오류가 발생한 파일을 push해서 올렸을 때
1. 웹페이지에서 https://github.com/prgrms-aibe-devcourse/AIBE5_Project1_Team1/pulls로 이동
    - 프로젝트를 진행하는 Repository에서 'Pull Request'를 클릭하면 이동할 수 있음
2. 문제되는 본인의 Commit을 클릭
3. 보냈던 Commit 목록 아래에 있는 Revert 버튼 누르기
    - Revert: 이 Commit이 있기전으로 되돌아가기
4. Revert되는 PR을 만들고 바로 그 PR 진행하기
5. Commit한 내용이 Revert되면 브랜치를 잘 설정하거나 파일을 잘 수정한 뒤에 push 작업을 수행한다.
  
# 그외는 저 부르세요 (feat.작성자 고완석)
```

---