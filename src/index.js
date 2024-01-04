import 'dotenv/config'
import app from './app.js';
import chalk from "chalk";
import logger from './config/logger.js';
const PORT = 8080;

// Inicia la aplicación en este index.js
//**** UP SERVER  */
app.listen(PORT, () => {
  console.log(chalk.bgYellowBright.black.bold(`SERVER UP PORT: ${PORT}`));
});

