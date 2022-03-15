import { injectable } from 'inversify';
import * as mongoDB from 'mongodb';

/**
 * Represents MongoDB data source.
 * @class
 */
@injectable()
export class MongoSource {
  public static Token = 'MONGO_SOURCE';

  constructor(private db: mongoDB.Db) {}

  /**
   *
   * @returns {Db} - database instance
   */
  public get database(): mongoDB.Db | undefined {
    return this.db;
  }
}