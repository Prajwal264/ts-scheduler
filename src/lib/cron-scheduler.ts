import { delay } from './utils';

const MAX_TIMEOUT_DELAY = 2000000000;

export class CronScheduler {

  callback: CallableFunction;

  invocations: number[] = [];

  constructor() { }

  private createInvocations(delay: number) {
    let timeoutDelay = delay;
    while (timeoutDelay > MAX_TIMEOUT_DELAY) {
      timeoutDelay = timeoutDelay - MAX_TIMEOUT_DELAY;
      this.invocations.push(0);
    }
    this.invocations.push(timeoutDelay)
  }

  public scheduleTask(callback: CallableFunction, delay: number) {
    this.callback = callback;
    this.createInvocations(delay);
    this.invokeInvocations();
  }

  private async invokeInvocations() {
    while (true) {
      for (let i = 0; i < this.invocations.length; i++) {
        await this.invokeSingleInvocation(this.invocations[i]);
      }
    }
  }

  private async invokeSingleInvocation(invocationDelay: number) {
    let delayTimer = MAX_TIMEOUT_DELAY;
    if (invocationDelay) {
      delayTimer = invocationDelay;
    }
    await delay(delayTimer);
    if (invocationDelay) {
      this.callback();
    }
  }
}