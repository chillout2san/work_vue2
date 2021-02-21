let s = '';
const presentYear = new Date().getFullYear();
const years = [];
for (let i = 1903; i < presentYear + 1; i++) {
  if (i > 2018) {
    s = '令和' + (i - 2018);
  } else if (i > 1988) {
    s = '平成' + (i - 1988);
  } else if (i > 1925) {
    s = '昭和' + (i - 1925);
  } else if (i > 1911) {
    s = '大正' + (i - 1911);
  } else if (i > 1867) {
    s = '明治' + (i - 1867);
  }
  years.push(i + '年' + '(' + s + ')');
}

const monthes = [];
for (let i = 1; i < 13; i++) {
  monthes.push(i);
}

const days = [];
for (let i = 1; i < 32; i++) {
  days.push(i);
}

export { years, monthes, days };
