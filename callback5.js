const { listInfo } = require('./callback2');
const { boardId, boardsInfo } = require('./callback1');

const infoOfMindAndList = (boards, lists, cards) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        boards.length === 0 ||
        Object.keys(lists).length === 0 ||
        Object.keys(cards).length === 0
      ) {
        reject('Board or lists or card is empty');
      }

      boardId(boards).then((idOfBoard) => {
        boardsInfo(boards, idOfBoard[0])
          .then((info) => {
            if (info.name === 'Thanos') {
              console.log(info);
              listInfo(lists, info.id)
                .then((infoOfList) => {
                  let idOfMind = [];
                  infoOfList.forEach((obj) => {
                    if (obj.name === 'Mind' || obj.name === 'Space') {
                      idOfMind.push(obj.id);
                      console.log(obj);
                    }
                  });

                  resolve(idOfMind);
                })
                .catch((error) => {
                  console.log(error);
                });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      });
    }, 2000);
  });
};

module.exports = infoOfMindAndList;
