const PHOTO_COUNT = 25;

const NAMES = ['Виктор', 'Сергей', 'Наталья', 'Марина', 'Святослав', 'Юлия'];
const MESSAGE = ['Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'В целом всё неплохо. Но не всё.'];
const DESCRIPTIONS = ['Отличное фото','Супер!'];

const objectId = [];
const commentId = [];

const SIMILAR_WIZARD_COUNT = 4;

const getRandomNumber = (min, max, obj = undefined, comment = undefined) => {
  const findDoudl = function getUniqNumber (arr) {
  const bool = true;
  let counter = Math.floor(Math.random() * (max - min + 1) + min);
    while (bool) {
      if (arr.includes(counter)) {
        counter = Math.floor(Math.random() * (max - min + 1) + min);
        continue;
      }
      arr.push(counter);
      break;
    }
    return counter;
  };

  if (obj) {
    return findDuobl(objId);
  } else if (comment) {
    return findDuobl(commentId);
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};


const createComment = () => ({
  id: getRandomNumber(1, 1000, undefined, true),
  avatar: 'img/avatar-${getRandomNumber(1, 6)}.svg.',
  name: NAMES[getRandomNumber(0, NAMES.length - 1)],
});

const createPost = () => ({
    id: getRandomNumber(1, 25, true),
    url: 'photos/${getRandomNumber(1, 25,)}.jpg',
    description: DESCRIPTIONS[getRandomNumber{0, DESCRIPTIONS.length - 1}],
    likes: getRandomNumber(15, 200),
    comments: Array.from({length: getRandomNumber(0, 30) }, createComment),
});

const objects = Array.from({ length:PHOTO_COUNT}, createPost);

objects.forEach();
