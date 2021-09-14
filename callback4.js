/* 
	Problem 4: Write a function that will use the previously written functions to get the following information.
     You do not need to pass control back to the code that called it.
    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for the Mind list simultaneously
*/

const infoOfThanosBoard = (boards, lists, cards) => {
  setTimeout(() => {
    boards.forEach((obj) => {
      if (obj.name === "Thanos") {
        console.log(obj);
        let id = obj.id;

        setTimeout(() => {
          console.log(lists[id]);
          let mindOfId = lists[id]
            .filter((obj) => obj.name === "Mind")
            .map((obj) => obj.id);
          mindOfId = mindOfId[0];

          setTimeout(() => {
            console.log(cards[mindOfId]);
          }, 2000);
        }, 2000);
      }
    });
  }, 2000);
};

module.exports = infoOfThanosBoard;
