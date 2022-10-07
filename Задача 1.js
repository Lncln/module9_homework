// SF Задание 1.
// Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.
const parser = new DOMParser();
let studentsListXml = `
    <list>
        <student>
            <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>
`;
let studentsListDOM = parser.parseFromString(studentsListXml, 'text/xml');
let studentsList = document.querySelector('studentsListDOM');
let students = studentsListDOM.querySelectorAll('student');
let result ={};
result.list = [];
for (let student of students){
    let name = student.querySelector('name');
    let age = student.querySelector('age');
    let prof = student.querySelector('prof')
    let langAttr = name.getAttribute('lang')
    result.list.push({name: name.firstElementChild.textContent + ' ' + name.lastElementChild.textContent, age: Number(age.textContent), prof: prof.textContent, lang: langAttr }) // наверное можно вместо ключа name как то взять имя тэга? (Видимо если другим способом заполнять объект где будет result[name.tagName] = name.firstElementChild.textContent)
  // console.log(name.textContent, age.textContent, prof.textContent, langAttr);
}
console.log(result)