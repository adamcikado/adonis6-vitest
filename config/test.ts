import env from '#start/env'

const testConfig = {
  value: env.get('TEST_VALUE'),
}

export default testConfig
