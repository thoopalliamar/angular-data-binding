import { SenarioFiveModule } from './senario-five.module';

describe('SenarioFiveModule', () => {
  let senarioFiveModule: SenarioFiveModule;

  beforeEach(() => {
    senarioFiveModule = new SenarioFiveModule();
  });

  it('should create an instance', () => {
    expect(senarioFiveModule).toBeTruthy();
  });
});
