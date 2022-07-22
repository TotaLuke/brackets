module.exports = function check(str, bracketsConfig) {
  let head = 0;
  while ( head < str.length) {
    bracketsConfig.forEach(elem => {
      if (str[head] === elem[0] && str[head + 1] === elem[1]) {
        str = str.slice(0, head) + str.slice(head + 2, str.length);
        head = head - 2;
      }
    })
    head++;
  }
  return (head === 0);
}
