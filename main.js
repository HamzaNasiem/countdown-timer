import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
const res = await inquirer.prompt({
    type: "number",
    name: "UserInput",
    message: "Enter your Amount: ",
    validate: (input) => {
        if (isNaN(input)) {
            return "Enter a Valid number";
        }
        else if (input > 60) {
            return "Enter must be in second";
        }
        else {
            return true;
        }
    }
});
let input = res.UserInput;
function startTime(val) {
    const initialTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(initialTime);
    setInterval((() => {
        const currentTime = new Date();
        const timeDifference = differenceInSeconds(intervalTime, currentTime);
        if (timeDifference <= 0) {
            console.log('timer has expired');
            process.exit();
        }
        const min = Math.floor((timeDifference % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDifference % 60);
        console.log(`${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`);
    }), 1000);
}
startTime(input);
