import express, { Application } from 'express';
import { configs, initialise } from 'src/common/configs';

initialise();

const app: Application = express();

app.listen(configs.PORT, async () => {
  console.log(`SERVER IS RUNNING ON PORT ${configs.PORT}`);
});
