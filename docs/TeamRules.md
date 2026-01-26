# 작업규칙


## 첫 시작
```bash
# 1. VS Code 사용
- 아이콘 누르기

# 2. Terminal 사용
- 상단에 있는 'Terminal'을 선택하기

# 3. GitHub 프로젝트 가져오기
- 하단에 생긴 'Terminal'에 아래와 같은 Git 명령어를 입력한다.
- git remote add origin https://github.com/prgrms-aibe-devcourse/AIBE5_Project1_Team1.git

# 4. 본인 브랜치로 이동하기 및 브랜치 설정
- git checkout -b [본인브랜치명]

# 5. git 설치하기
- git init 

# 6. 본인 디렉터리를 main으로 덮어쓰기
- git reset --hard origin/main

# 7. 패키지 설치하기
- npm install
- npm install --save-dev @types/react @types/react-dom
```

---

## 프로젝트 시작방법
```bash
# 1. README.md와 src가 있는 폴더로 이동한다. (기본값이니 이동할 필요는 없음)
    - 이동방법: 터미널에서 cd TRAVEL PLANNING WEBSITE

#2. 프로젝트 구동
- npm run dev
- https://localhost:3000/ 로 접속
```

---

## GitHub Push방법
```bash
# 1. git add .
    - 현재 작업하던 파일들을 git에 보내겠다는 의미
    - 특정 파일만 보낼때: git add 파일1 파일2 파일3
# 2. git commit -m " [기능분류]: [파일명] - [작업내용] - [날짜] "
    - 커밋 규칙에 맞춰서 보내기
# 3. git push
    - 반드시 본인 브랜치에 먼저 push하고 feat에는 나중에 merge하기
```

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
# 기능분류(Type)
| 타입     | 의미          |
| ------ | ------------- |
| feat   | 새로운 기능 추가  |
| docs   | 문서 작성 / 수정 |
| fix    | 버그 수정       |
| refact | 코드 리팩토링    |
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