import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "엘리",
    title: "개발자",
    mentors: [
      {
        name: "밥",
        title: "시니어개발자",
      },
      {
        name: "제임스",
        title: "시니어개발자",
      },
    ],
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
          setPerson((person) => {
            const update = [
              person.mentors.map((item) => {
                if (item.name === prev) {
                  return (item.name = current);
                }
              }),
            ];
            return { ...person, update };
          });
        }}
      >
        멘토의 이름을 바꾸기
      </button>
      <button
        onClick={() => {
          const inputName = prompt("멘토 이름을 입력하세요");
          const inputTitle = prompt("멘토의 경력을 입력하세요");
          setPerson((person) => {
            const newMentors = {
              ...person,
              mentors: [
                ...person.mentors,
                { name: inputName, title: inputTitle },
              ],
            };
            return newMentors;
          });
        }}
      >
        멘토 추가
      </button>
      <button
        onClick={() => {
          const inputName = prompt("멘토 이름을 입력하세요");
          setPerson((person) => {
            const delMentor = {
              ...person,
              mentors: person.mentors.filter(
                (mentor) => mentor.name !== inputName
              ),
            };
            return delMentor;
          });
        }}
      >
        멘토 삭제
      </button>
    </div>
  );
}
