import TestService from '#services/test_service'
import { inject } from '@adonisjs/core'
import { BaseCommand } from '@adonisjs/core/ace'
import { CommandOptions } from '@adonisjs/core/types/ace'

export default class TestImport extends BaseCommand {
  static commandName = 'test:import'
  static description = ''

  static options: CommandOptions = {}

  @inject()
  async run(service: TestService) {
    this.logger.info(`Value: ${service.getValue()}`)
  }
}
