
const postList = [
  {
    "no": 1,
    "title": "첫번째 게시글입니다.",
    "createDate": "2023-11-20",
    "readCount": 6
  },
  {
    "no": 2,
    "title": "두번째 게시글입니다.",
    "createDate": "2023-11-21",
    "readCount": 5
  },
  {
    "no": 3,
    "title": "세번째 게시글입니다.",
    "createDate": "2023-11-22",
    "readCount": 1
  },
  {
    "no": 4,
    "title": "네번째 게시글입니다.",
    "createDate": "2023-11-23",
    "readCount": 2
  },
  {
    "no": 5,
    "title": "다섯번째 게시글입니다.",
    "createDate": "2023-11-24",
    "readCount": 11
  },
  {
    "no": 6,
    "title": "여섯번째 게시글입니다.",
    "createDate": "2023-11-25",
    "readCount": 2
  },
  {
    "no": 7,
    "title": "일곱번째 게시글입니다.",
    "createDate": "2023-11-26",
    "readCount": 54
  },
  {
    "no": 8,
    "title": "여덟번째 게시글입니다.",
    "createDate": "2023-11-27",
    "readCount": 8
  },
  {
    "no": 9,
    "title": "아홉번째 게시글입니다.",
    "createDate": "2023-11-28",
    "readCount": 76
  },
  {
    "no": 10,
    "title": "열번째 게시글입니다.",
    "createDate": "2023-11-29",
    "readCount": 46
  },
];

const getPostByNo = no => {
  const array = postList.filter(x => x.no == no);
  if (array.length == 1) {
    console.log ('count');
    return array[0];
  }
  return null;
}

export {
  postList,
  getPostByNo
};