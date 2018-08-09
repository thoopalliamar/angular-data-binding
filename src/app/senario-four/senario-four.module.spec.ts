import { SenarioFourModule } from './senario-four.module';

describe('SenarioFourModule', () => {
  let senarioFourModule: SenarioFourModule;

  beforeEach(() => {
    senarioFourModule = new SenarioFourModule();
  });

  it('should create an instance', () => {
    expect(senarioFourModule).toBeTruthy();
  });
});
