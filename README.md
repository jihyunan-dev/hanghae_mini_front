# 🍕오늘 점심 뭐 먹냐?

<center>
<img src="https://github.com/jihyunan-dev/hanghae_mini_front/blob/development/public/og-image-lunch.jpg?raw=true" width="500px">
</center>

오늘은 또 뭐먹어야하나...  
이제는 음악, 운동, 요리, 먹방 등 **카테고리별로 나누어 관리하세요!**

**Link**  
http://lunch-menu
http://lunch-menu.shop.s3-website.ap-northeast-2.amazonaws.com/

**Notion**  
https://www.notion.so/15-4b8716eaebb240b7a4748baaa53ed338

<br>

## 1. 제작 기간 & 팀원 소개

- 2021년 7월 9일 ~ 2021년 7월 15일
- 5인 1조 팀 프로젝트

**FRONT END**

- 공통 : CSS(styled-components)
- 안지현 : 메뉴 업로드 / 댓글 등록·수정·삭제 등
- 김태현 : 회원가입 / 로그인 / 유저 토큰 인증 / 메뉴 수정/삭제 등

**BACK END**

- 이현수 : 회원가입 / 로그인 / 유저 토큰 인증
- 이대성 : 메뉴 등록,수정,삭제,추천
- 장상현 : 댓글 등록,수정,삭제

<br>

## 2. 사용 기술

`Back-end`

- Node.js
- SQL with sequelize

`Front-end`

- React
- Redux
- styled-components

`deploy`

- Front-end : AWS S3
- Back-end : AWS EC2 (Ubuntu 18.04 LTS)

<br>

## 3. 실행화면

Youtube Link : https://youtu.be/VAf98TNt9TA

<br>

## 4. 핵심기능

- **회원가입, 로그인**  
  : JWT를 이용하여 로그인과 회원가입을 구현하였습니다.
  : bcrypt를 이용하여 암호화된 비밀번호를 DB에 저장합니다.

  <br>

- **메뉴 등록**  
  : 로그인 후 메뉴의 카테고리, 이름, 사진, 설명을 등록합니다.
  : '내 게시물' 페이지에서 유저가 등록한 메뉴 리스트를 볼 수 있으며, 수정·삭제가 가능합니다.

<br>

- **점심 메뉴 추천**  
  : 원하는 메뉴의 카테고리를 고르면 등록되어있던 메뉴 중 카테고리가 일치하는 메뉴가 추천됩니다.
  : 메뉴를 클릭한 후 하트 버튼을 누르면 해당 메뉴의 like가 1이 추가됩니다.
  : 메인 페이지 상단에 like 수가 많은 메뉴 순서대로 10개를 보여줍니다.

<br>

- **댓글**  
  : 각각의 메뉴마다 댓글을 작성할 수 있습니다.
  : 자신이 작성한 댓글은 로그인 후 수정 및 삭제 할 수 있습니다.
