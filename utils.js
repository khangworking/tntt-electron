const { each } = require("lodash");

exports.toSlug = (str) => {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // Thay ký tự đĐ
  str = str.replace(/[đĐ]/g, "d");
  str = str.replace(/[đăĐă]/g, "da");

  // xóa dấu
  str = str
    .normalize("NFD") // chuyển chuỗi sang unicode tổ hợp
    .replace(/[\u0300-\u036f]/g, ""); // xóa các ký tự dấu sau khi tách tổ hợp

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, "");

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, "-");

  // Xóa ký tự - liên tiếp
  str = str.replace(/-+/g, "-");

  // xóa phần dư - ở đầu & cuối
  str = str.replace(/^-+|-+$/g, "");

  // return
  return str;
};

exports.getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};

exports.shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

exports.processStudentFormValues = (values) => {
  const processValues = { ...values };
  each(Object.keys(processValues), (val) => {
    if (
      processValues[val] === "" ||
      processValues[val] === undefined ||
      (typeof processValues[val] === "object" &&
        !Object.keys(processValues[val]).length)
    ) {
      delete processValues[val];
    }
    if (val === "level_id" && !!processValues.level_id)
      processValues.level_id = parseInt(processValues.level_id);
  });
  return processValues;
};

exports.convertFeastToDate = (str) => {
  const [day, month] = str.split("/");
  return new Date(`${month}/${day}`);
};
