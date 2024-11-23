let userName;
do {
  userName = prompt("Enter your name");
  switch (userName) {
    case "John":
      console.log("Hello John, nice to see you!");
      break;
    case "Alice":
      console.log("Hello Alice, we do not wait you, please go away!");
      break;
    default:
      console.log("I don't know you, go away");
  }
} while(userName !== 'John');
