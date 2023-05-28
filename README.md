# Scheduler
The Scheduler library provides a convenient way to schedule tasks and invocations with delays in your Node.js applications. It offers two main classes: Scheduler and CronScheduler, each serving different scheduling needs.

```bash
npm install my-scheduler-library
```

### Usage
First, import the required classes and the delay function from the library:

```ts
import { Scheduler, CronScheduler } from 'my-scheduler-library';
```

### Scheduler
The Scheduler class allows you to schedule a single task for execution after a specified delay.

Create an instance of the Scheduler class:

```ts
const scheduler = new Scheduler();
```
Schedule a task by calling the scheduleTask method, passing in a callback function and the desired delay in milliseconds:

```ts
function myTask() {
  console.log('Executing scheduled task...');
  // Perform your task logic here
}

scheduler.scheduleTask(myTask, 5000); // Schedule the task to run after a 5-second delay
```
### CronScheduler
The CronScheduler class enables you to schedule tasks to be invoked repeatedly based on a specified delay pattern.

Create an instance of the CronScheduler class:

```ts
const cronScheduler = new CronScheduler();
```

Schedule a task with recurring invocations by calling the scheduleTask method, passing in a callback function and the desired delay in milliseconds:

```ts
function myRecurringTask() {
  console.log('Executing recurring task...');
  // Perform your recurring task logic here
}

cronScheduler.scheduleTask(myRecurringTask, 10000); // Schedule the task to run every 10 seconds
```

### Customization
Both the Scheduler and CronScheduler classes use the delay function from the library to introduce delays. You can customize the delay function implementation to fit your specific needs.

### Contributing
Contributions to the Scheduler library are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

### License
This project is licensed under the MIT License. See the LICENSE file for more information.

### Acknowledgements
The Scheduler library was inspired by the need for a flexible and reliable task scheduling solution in Node.js applications. We would like to express our gratitude to the open-source community for their valuable contributions.

### Contact
If you have any questions or need assistance, feel free to reach out to the maintainers of this project:

Prajwal (prajwal.praveen1997@gmail.com)

### Happy Coding