import { SenarioThreeModule } from './senario-three.module';

describe('SenarioThreeModule', () => {
  let senarioThreeModule: SenarioThreeModule;

  beforeEach(() => {
    senarioThreeModule = new SenarioThreeModule();
  });

  it('should create an instance', () => {
    expect(senarioThreeModule).toBeTruthy();
  });
});
