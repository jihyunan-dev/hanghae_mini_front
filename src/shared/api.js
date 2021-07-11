import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const apis = {
  // /user/register
  // register: (registerInfo) =>
  //   api.post("/register", {
  //     data: {
  //       ...registerInfo,
  //     },
  //   }),

  // // /user/login
  // login: (loginInfo) =>
  //   api.post("/login", {
  //     data: {
  //       ...loginInfo,
  //     },
  //   }),

  // /menu
  getRandomMenus: (categoryObj) =>
    api.get("/menu", {
      params: { categoryObj },
    }),

  // /menu/${menuId}/like
  // likeMenu: (menuId) =>
  //   api.post(`/menu_id_like`, {
  //     params: {
  //       id: menuId,
  //     },
  //   }),

  // /menu/like
  getTopMenus: () => api.get("/menu_like"),

  // /menu/${menuId}
  // getMenuDetail: (menuId) => api.get(`/menu_id`),

  // /menu
  // addMenu: (menuObj) =>
  //   api.post("/post_menu", {
  //     data: { ...menuObj },
  //   }),

  // /menu/${menuId}
  // editMenu: (menuId, menuObj) =>
  //   api.patch(`/patch_menu`, {
  //     data: { ...menuObj },
  //   }),

  // /menu/${menuId}
  // deleteMenu: (menuId) => api.delete(`/delete_menu`),

  // /comment
  getComments: (menuId) =>
    api.get("/comments", {
      data: { menuId },
    }),

  // addComments: (commentObj) =>
  //   api.post("/comments", {
  //     data: { ...commentObj },
  //   }),
  // 댓글 수정 (api 테이블에 적혀있지 않아서 확인 요청)
  // 댓글 삭제 (api 테이블에 적혀있지 않아서 확인 요청)
};
