const button = document.querySelector("#start");
const holder = document.querySelector("#result");
button.addEventListener("click", main);
function main(e) {
  let result = 0;
  let inputtext = document.querySelector("#calculation").value;
  if (inputtext.includes("+")) {
    let split = inputtext.split("+");
    let split1 = Number(split[0]);
    let split2 = Number(split[1]);
    result = split1 + split2;
  } else if (inputtext.includes("-")) {
    let split = inputtext.split("-");
    let split1 = Number(split[0]);
    let split2 = Number(split[1]);
    result = split1 - split2;
  } else if (inputtext.includes("*")) {
    let split = inputtext.split("*");
    let split1 = Number(split[0]);
    let split2 = Number(split[1]);
    result = split1 * split2;
  } else if (inputtext.includes("/")) {
    let split = inputtext.split("/");
    let split1 = Number(split[0]);
    let split2 = Number(split[1]);
    result = split1 / split2;
  }

  holder.textContent = result;
}
