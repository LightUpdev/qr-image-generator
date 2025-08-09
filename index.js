import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{ type: "input", message: "Enter your URL", name: "url" }])
  .then((answers) => {
    const url = answers.url;

    var qr_png = qr.image(url, { type: "png" });
    qr_png.pipe(fs.createWriteStream("qr.png"));
    fs.writeFile("url.txt", url, (err) => {
      if (err) {
        console.log(err);
      }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
