/* 
	Problem 1: Write a function that will return a particular board's information based on the boardID that is passed from the given list of boards in boards.json and then pass control back to the code that called it by using a callback function.
*/

const boardsInfo = (board, lists) => {
  setTimeout(() => {
    let idOfBoard = board.map((obj) => obj.id);
    console.log(idOfBoard);

    setTimeout(() => {
      idOfBoard.forEach((id) => {
        console.log(lists[id]);
      });
    }, 2000);
  }, 2000);
};

module.exports = boardsInfo;
