const roles: { [key: string]: string } = {
  user: "Пользователь",
  manager: "Менеджер",
  admin: "Админ",
};

export const getTitleByRole = function (role: string) {
  return roles[role] ?? "-";
};
