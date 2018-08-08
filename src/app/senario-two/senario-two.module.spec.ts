import { SenarioTwoModule } from './senario-two.module';

describe('SenarioTwoModule', () => {
  let senarioTwoModule: SenarioTwoModule;

  beforeEach(() => {
    senarioTwoModule = new SenarioTwoModule();
  });

  it('should create an instance', () => {
    expect(senarioTwoModule).toBeTruthy();
  });
});
