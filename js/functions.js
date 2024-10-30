
//Первая задача
const checksStringLength = (string, maxLength) => {
  if (string.length <= maxLength) {
    return true;
  } else {
    return false;
  }
};

checksStringLength ('проверяемая строка', 20);
checksStringLength ('проверяемая строка', 18);
checksStringLength ('проверяемая строка', 10);

//Вторая задача
const isPalindrome = (string) => {
  string = string.replaceAll(' ','').toLowerCase();
  let emptyString = '';

  for (let i = string.length-1; i >= 0; i--) {
    emptyString += string(i);
  }
  return string === emptyString;
};

isPalindrome ('топот');
isPalindrome ('ДовОд');
isPalindrome ('Кекс');
