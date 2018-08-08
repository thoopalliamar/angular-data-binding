import { SenarioOneModule } from './senario-one.module';

describe('SenarioOneModule', () => {
  let senarioOneModule: SenarioOneModule;

  beforeEach(() => {
    senarioOneModule = new SenarioOneModule();
  });

  it('should create an instance', () => {
    expect(senarioOneModule).toBeTruthy();
  });
});
