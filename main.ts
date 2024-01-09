import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";

let res = await inquirer.prompt({
  type: "number",
  name: "userinput",
  message: "Please enter the amount of second",
  validate: (input) => {
    if (isNaN(input)) {
      return "please enter a valid number";
    } else if (input > 60) {
      return "seconds must be in 60";
    } else {
      return true;
    }
  },
});

let input = res.userinput;

function startTime(val: number) {
  let intTime = new Date().setSeconds(new Date().getSeconds() + val);
  let intervalTime = new Date(intTime);
  setInterval(() => {
    let currentTime = new Date();
    let timeDiff = differenceInSeconds(intervalTime, currentTime);
    if (timeDiff <= 0) {
      console.log("timer has been expired");
      process.exit();
    }
    let min = Math.floor((timeDiff % (3600 * 24)) / 3600);
    let sec = Math.floor(timeDiff % 60);
    console.log(
      `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`
    );
  }, 1000);
}

startTime(input);
