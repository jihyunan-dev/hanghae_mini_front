export const RESP = {
  // 회원가입
  REGISTER: [
    { ok: true, message: "회원가입 성공!" },
    { ok: false, message: "회원가입 실패!" },
  ],

  // 로그인
  LOGIN: [
    {
      ok: true,
      result: {
        token: "sg4$sfdsahsh",
        user: {
          name: "admin",
          userId: 4,
        },
      },
    },
    { ok: false, message: "로그인 정보가 틀렸습니다!" },
  ],

  // 메뉴 카테고리 보내서, 추천 음식 가져오기
  MENU: [
    {
      ok: true,
      menuList: [
        {
          name: "샌드위치",
          id: 1,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8SBqGpS3Ylo4qrMgF7wglEBo5FVCxLeOUsQ&usqp=CAU",
        },
        {
          name: "짜장면",
          id: 2,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9IeNQCuHe-lJHu_8Hfl5e02Rxalz1ouD_g&usqp=CAU",
        },
        {
          name: "피자",
          id: 3,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThFANwvf7DYVnUIcXPMkUQ7A7sBuw82F8TYg&usqp=CAU",
        },
        {
          name: "치킨",
          id: 3,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLUGRVOJQtFiBak_s_L-4Mtia8Udw512bPyw&usqp=CAU",
        },
        {
          name: "냉면",
          id: 4,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStwK_ITGq7BH2lhobirEHPLF5Zx-4bEo-ZWEQsxglKvMOAtMbaPsP4ZaBYtw&usqp=CAc",
        },
        {
          name: "김치볶음밥",
          id: 5,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQ7Yy6cHJq1H9MQmexpdfWuA0rVQ7GVLeNA&usqp=CAU",
        },
        {
          name: "순대국밥",
          id: 6,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKXAekWJatdnR6ecApzQ9RZlArpTQtvTf_mzq7TRLmsXZVrdvKaZlII_mXYw&usqp=CAc",
        },
        {
          name: "돈까스",
          id: 7,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_LhkcoLZTNTIROjgsyYbWtw_Bd8aoAO6Wbg&usqp=CAU",
        },
        {
          name: "햄버거",
          id: 8,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYrcFANynDDRzxIGPNi6QE-bqMt4918in3_A&usqp=CAU",
        },
        {
          name: "족발",
          id: 9,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFru2koGVhW-MmbJ9OjEZe_en4yixByaRXA&usqp=CAU",
        },
        {
          name: "보쌈",
          id: 10,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDDgL_9ldUVpwikYkQ2g9GANLlRPMdeoiqSw&usqp=CAU",
        },
        {
          name: "떡볶이",
          id: 11,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdjWhiL1RoJ40Ofep4-HhnXITniS_pfjAQmw&usqp=CAU",
        },
        {
          name: "마라탕",
          id: 12,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlIRJKWxWPdzvt_9pPd72XH5kqnmF0GSq-kg&usqp=CAU",
        },
        {
          name: "훠궈",
          id: 13,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSmwDyHqaDCQp4S-cjQaeH5IM_vsO2HjacxQ&usqp=CAU",
        },
        {
          name: "파스타",
          id: 14,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlrUEhOwq1nqq4Ea9f3WMfnB0lAScGD85Ynw&usqp=CAU",
        },
        {
          name: "카레",
          id: 15,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2qSOl9XRcvIp9s7u8VFhC2Rz8v0VCjl-hyA&usqp=CAU",
        },
        {
          name: "김밥",
          id: 16,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnGGiyryMXTrLuF36p9u38PaKwJxp2GzA2wA&usqp=CAU",
        },
        {
          name: "백반",
          id: 17,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ChZmzYeWPXUWli4eXDBqgqsLswYvGn5e9Q&usqp=CAU",
        },
        {
          name: "가츠동",
          id: 18,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm0Gw0HbJYfda9iB8zlmShLuY5AuLPUClotA&usqp=CAU",
        },
        {
          name: "라멘",
          id: 19,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWHnYxO8WygMVa83RcgeD-ttGrb605gZ3kFQ&usqp=CAU",
        },
        {
          name: "비빔밥",
          id: 20,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8TgzcEGvR9rAOG8unUUaLnKWwyzRgIl5ew&usqp=CAU",
        },
      ],
    },
    { ok: false, message: "메뉴 가져오기 실패!" },
  ],

  // 선택된 메뉴 인기순위 업데이트
  LIKE: [
    { ok: true, message: "좋아요 성공!" },
    { ok: false, message: "좋아요 실패!" },
  ],

  // 인기순위 보여주기
  RANKLIST: [
    {
      ok: true,
      rank: [
        {
          name: "샌드위치",
          id: 1,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8SBqGpS3Ylo4qrMgF7wglEBo5FVCxLeOUsQ&usqp=CAU",
        },
        {
          name: "짜장면",
          id: 2,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9IeNQCuHe-lJHu_8Hfl5e02Rxalz1ouD_g&usqp=CAU",
        },
        {
          name: "피자",
          id: 3,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThFANwvf7DYVnUIcXPMkUQ7A7sBuw82F8TYg&usqp=CAU",
        },
        {
          name: "치킨",
          id: 3,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLUGRVOJQtFiBak_s_L-4Mtia8Udw512bPyw&usqp=CAU",
        },
        {
          name: "냉면",
          id: 4,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStwK_ITGq7BH2lhobirEHPLF5Zx-4bEo-ZWEQsxglKvMOAtMbaPsP4ZaBYtw&usqp=CAc",
        },
        {
          name: "김치볶음밥",
          id: 5,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQ7Yy6cHJq1H9MQmexpdfWuA0rVQ7GVLeNA&usqp=CAU",
        },
      ],
    },
    { ok: false, message: "순위 불러오기 실패!" },
  ],

  // 메뉴 상세 가져오기
  MENUDETAIL: [
    {
      ok: true,
      message: "메뉴 상세 가져오기 성공!",
      result: {
        name: "메뉴이름",
        img: "메뉴이미지",
        category1: "카테고리",
        category2: "카테고리",
        category3: "카테고리",
        user: {
          id: 1,
          nickName: "배달의 민족",
        },
      },
    },
    { ok: false, message: "메뉴 상세 가져오기 실패!" },
  ],

  // 메뉴 등록하기
  MENUUPLOAD: [
    { ok: true, message: "메뉴등록 성공!" },
    { ok: false, message: "메뉴등록 실패!" },
  ],

  // 메뉴 수정하기
  MENUCHANGE: [
    { ok: true, message: "메뉴수정 성공!" },
    { ok: false, message: "메뉴수정 실패!" },
  ],

  // 메뉴 삭제하기
  MENUDELETE: [
    { ok: true, message: "메뉴삭제 성공!" },
    { ok: false, message: "메뉴삭제 실패!" },
  ],

  // 댓글
  COMMENT: [
    {
      ok: true,
      result: [
        {
          comment: "와 맛있겠다",
          nickname: "배달의 민족",
          menuId: "2",
        },
        {
          comment: "부럽다",
          nickname: "쿠팡잇츠",
          menuId: "2",
        },
        {
          comment: "다음에 저랑 같이먹어요!",
          nickname: "요기요",
          menuId: "2",
        },
      ],
    },
    { ok: false, message: "댓글을 불러오기 실패!" },
  ],
};
