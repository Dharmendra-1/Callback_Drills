/* 
	Problem 6: Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for all lists simultaneously
*/

const boardInfo = require('./callback1');
const listInfo = require('./callback2');
const cardsInfo = require('./callback3');

const allCardsOfList = (boards, lists, cards) => {
  if (
    board.length === 0 ||
    Object.keys(lists).length === 0 ||
    Object.keys(cards).length === 0
  ) {
    throw new Error('Boards or lists or cards is Empty..');
  }

  setTimeout(() => {
    boardInfo(boards, (data) => {
      if (data.name === 'Thanos') {
        console.log(data);
        let thanosId = data.id;

        setTimeout(() => {
          listInfo(boards, lists, (listData, id) => {
            if (thanosId == id) {
              console.log(listData);
              let idOfList = [];
              listData.forEach((obj) => {
                idOfList.push(obj.id);
              });

              setTimeout(() => {
                cardsInfo(boards, lists, cards, (cardData, id) => {
                  idOfList.forEach((idOfList) => {
                    if (idOfList === id) {
                      console.log(cardData);
                    }
                  });
                });
              }, 2000);
            }
          });
        }, 2000);
      }
    });
  }, 2000);
};

module.exports = allCardsOfList;
