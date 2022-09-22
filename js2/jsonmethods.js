// let room = {
//     number: 23
// };

// let meetup = {
//     title: "Conference",
//     participants: [{ name: "John" }, { name: "Alice" }],
//     place: room // meetup references room
// };

// room.occupiedBy = meetup; // room references meetup

// console.log(JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']));

let room = {
    number: 23,
    toJSON() {
      return this.number;
    }
  };
  
  let meetup = {
    title: "Conference",
    room
  };
  
  console.log( JSON.stringify(room) ); // 23
  
  console.log( JSON.stringify(meetup) );
