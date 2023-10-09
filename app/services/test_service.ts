import testConfig from '#config/test'

export default class TestService {
  constructor(protected config = testConfig) {}

  getValue() {
    return this.config.value
  }
}
