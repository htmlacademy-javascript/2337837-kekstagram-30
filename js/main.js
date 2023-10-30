//Проверка длинны строки
function testStringLenght (string, maxLength) {
  return (string.length <= maxLength);
}
testStringLenght('дезоксирибонуклеин', 20);

//Проверка строки на полиндром
let newString = '';
function testPolindrome(string) {
  const modifiedString = string.replaceAll(' ', '').toLowerCase(string);
  for (let i = modifiedString.length - 1; i >= 0; i--) {
    newString += modifiedString[i];
  }
  if(modifiedString === newString){
    return true;
  }
}
testPolindrome('топоТ');
