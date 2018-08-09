import { SenarioSixModule } from './senario-six.module';

describe('SenarioSixModule', () => {
  let senarioSixModule: SenarioSixModule;

  beforeEach(() => {
    senarioSixModule = new SenarioSixModule();
  });

  it('should create an instance', () => {
    expect(senarioSixModule).toBeTruthy();
  });
});
