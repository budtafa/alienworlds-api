import { config } from '@config';
import { Result } from '@core/domain/result';
import { inject, injectable } from 'inversify';
import { Failure } from '../../../core/domain/failure';
import { CurrencyStats } from '../domain/entities/currecy-stats';
import { EosDacInfo } from '../domain/entities/eos-dac-info';
import { EosDacRepository } from '../domain/eos-dac.repository';
import { EosDacService } from './eos-dac.service';

/**
 * EosDacRepository implementation
 * @class
 */
@injectable()
export class EosDacRepositoryImpl implements EosDacRepository {
  /**
   * @constructor
   * @param {EosDacService} eosDacService
   */
  constructor(
    @inject(EosDacService.Token) private eosDacService: EosDacService
  ) {}

  /**
   * Gets the blockchain information
   *
   * @async
   * @returns {Promise<Result<EosDacInfo>>}
   */
  public async getInfo(): Promise<Result<EosDacInfo>> {
    console.log(`Fetching lib from ${config.endpoints[0]}/v1/chain/get_info`);
    try {
      const dto = await this.eosDacService.getInfo();
      return Result.withContent(EosDacInfo.fromDto(dto));
    } catch (error) {
      return Result.withFailure(Failure.fromError(error));
    }
  }

  /**
   * Gets the TLM currency statistics
   *
   * @async
   * @returns {Promise<Result<CurrencyStats>>}
   */
  public async getCurrecyStats(): Promise<Result<CurrencyStats>> {
    try {
      const dto = await this.eosDacService.getCurrencyStats();
      return Result.withContent(CurrencyStats.fromDto(dto));
    } catch (error) {
      return Result.withFailure(Failure.fromError(error));
    }
  }

  /**
   * Gets the current TLM currency balance
   *
   * @async
   * @param {string} account
   * @returns {Promise<Result<number>>}
   */
  public async getCurrencyBalance(account: string): Promise<Result<number>> {
    try {
      const dto = this.eosDacService.getCurrencyBalance(account);
      // map dto to float number
      const [balance] = dto[0].split(' ');
      return Result.withContent(parseFloat(balance));
    } catch (error) {
      // TODO: Should we log errors?
      return Result.withContent(0);
    }
  }
}