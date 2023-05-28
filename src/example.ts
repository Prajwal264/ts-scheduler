import { CronScheduler } from './lib/cron-scheduler';
import { Scheduler } from './lib/scheduler';

const scheduler = new Scheduler();
const cronScheduler = new CronScheduler();

const callbackFunction = () => {
  console.log('called');
}

scheduler.scheduleTask(callbackFunction, 2000);

cronScheduler.scheduleTask(callbackFunction, 2000);

