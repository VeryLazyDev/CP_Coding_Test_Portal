
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Questions
 * 
 */
export type Questions = $Result.DefaultSelection<Prisma.$QuestionsPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model QuestionType
 * 
 */
export type QuestionType = $Result.DefaultSelection<Prisma.$QuestionTypePayload>
/**
 * Model UserAnswers
 * 
 */
export type UserAnswers = $Result.DefaultSelection<Prisma.$UserAnswersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Questions
 * const questions = await prisma.questions.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Questions
   * const questions = await prisma.questions.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.questions`: Exposes CRUD operations for the **Questions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.questions.findMany()
    * ```
    */
  get questions(): Prisma.QuestionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questionType`: Exposes CRUD operations for the **QuestionType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionTypes
    * const questionTypes = await prisma.questionType.findMany()
    * ```
    */
  get questionType(): Prisma.QuestionTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAnswers`: Exposes CRUD operations for the **UserAnswers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAnswers
    * const userAnswers = await prisma.userAnswers.findMany()
    * ```
    */
  get userAnswers(): Prisma.UserAnswersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Questions: 'Questions',
    Role: 'Role',
    Team: 'Team',
    User: 'User',
    QuestionType: 'QuestionType',
    UserAnswers: 'UserAnswers'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "questions" | "role" | "team" | "user" | "questionType" | "userAnswers"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Questions: {
        payload: Prisma.$QuestionsPayload<ExtArgs>
        fields: Prisma.QuestionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          findFirst: {
            args: Prisma.QuestionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          findMany: {
            args: Prisma.QuestionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>[]
          }
          create: {
            args: Prisma.QuestionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          createMany: {
            args: Prisma.QuestionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>[]
          }
          delete: {
            args: Prisma.QuestionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          update: {
            args: Prisma.QuestionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          deleteMany: {
            args: Prisma.QuestionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>[]
          }
          upsert: {
            args: Prisma.QuestionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          aggregate: {
            args: Prisma.QuestionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestions>
          }
          groupBy: {
            args: Prisma.QuestionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionsCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionsCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      QuestionType: {
        payload: Prisma.$QuestionTypePayload<ExtArgs>
        fields: Prisma.QuestionTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTypePayload>
          }
          findFirst: {
            args: Prisma.QuestionTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTypePayload>
          }
          findMany: {
            args: Prisma.QuestionTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTypePayload>[]
          }
          create: {
            args: Prisma.QuestionTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTypePayload>
          }
          createMany: {
            args: Prisma.QuestionTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTypePayload>[]
          }
          delete: {
            args: Prisma.QuestionTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTypePayload>
          }
          update: {
            args: Prisma.QuestionTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTypePayload>
          }
          deleteMany: {
            args: Prisma.QuestionTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTypePayload>[]
          }
          upsert: {
            args: Prisma.QuestionTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTypePayload>
          }
          aggregate: {
            args: Prisma.QuestionTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestionType>
          }
          groupBy: {
            args: Prisma.QuestionTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionTypeCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionTypeCountAggregateOutputType> | number
          }
        }
      }
      UserAnswers: {
        payload: Prisma.$UserAnswersPayload<ExtArgs>
        fields: Prisma.UserAnswersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAnswersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAnswersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload>
          }
          findFirst: {
            args: Prisma.UserAnswersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAnswersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload>
          }
          findMany: {
            args: Prisma.UserAnswersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload>[]
          }
          create: {
            args: Prisma.UserAnswersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload>
          }
          createMany: {
            args: Prisma.UserAnswersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAnswersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload>[]
          }
          delete: {
            args: Prisma.UserAnswersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload>
          }
          update: {
            args: Prisma.UserAnswersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload>
          }
          deleteMany: {
            args: Prisma.UserAnswersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAnswersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAnswersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload>[]
          }
          upsert: {
            args: Prisma.UserAnswersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload>
          }
          aggregate: {
            args: Prisma.UserAnswersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAnswers>
          }
          groupBy: {
            args: Prisma.UserAnswersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAnswersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAnswersCountArgs<ExtArgs>
            result: $Utils.Optional<UserAnswersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    questions?: QuestionsOmit
    role?: RoleOmit
    team?: TeamOmit
    user?: UserOmit
    questionType?: QuestionTypeOmit
    userAnswers?: UserAnswersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type QuestionsCountOutputType
   */

  export type QuestionsCountOutputType = {
    UserAnswers: number
  }

  export type QuestionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserAnswers?: boolean | QuestionsCountOutputTypeCountUserAnswersArgs
  }

  // Custom InputTypes
  /**
   * QuestionsCountOutputType without action
   */
  export type QuestionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionsCountOutputType
     */
    select?: QuestionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionsCountOutputType without action
   */
  export type QuestionsCountOutputTypeCountUserAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAnswersWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    users: number
    questions: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | TeamCountOutputTypeCountUsersArgs
    questions?: boolean | TeamCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionsWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userAnswers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAnswers?: boolean | UserCountOutputTypeCountUserAnswersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAnswersWhereInput
  }


  /**
   * Count Type QuestionTypeCountOutputType
   */

  export type QuestionTypeCountOutputType = {
    Questions: number
  }

  export type QuestionTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Questions?: boolean | QuestionTypeCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * QuestionTypeCountOutputType without action
   */
  export type QuestionTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTypeCountOutputType
     */
    select?: QuestionTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionTypeCountOutputType without action
   */
  export type QuestionTypeCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Questions
   */

  export type AggregateQuestions = {
    _count: QuestionsCountAggregateOutputType | null
    _avg: QuestionsAvgAggregateOutputType | null
    _sum: QuestionsSumAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  export type QuestionsAvgAggregateOutputType = {
    id: number | null
    typeId: number | null
    teamId: number | null
  }

  export type QuestionsSumAggregateOutputType = {
    id: number | null
    typeId: number | null
    teamId: number | null
  }

  export type QuestionsMinAggregateOutputType = {
    id: number | null
    question: string | null
    image: string | null
    typeId: number | null
    teamId: number | null
    correct_answer: string | null
    created_datetime: Date | null
    updated_datetime: Date | null
  }

  export type QuestionsMaxAggregateOutputType = {
    id: number | null
    question: string | null
    image: string | null
    typeId: number | null
    teamId: number | null
    correct_answer: string | null
    created_datetime: Date | null
    updated_datetime: Date | null
  }

  export type QuestionsCountAggregateOutputType = {
    id: number
    question: number
    options: number
    image: number
    typeId: number
    teamId: number
    correct_answer: number
    created_datetime: number
    updated_datetime: number
    _all: number
  }


  export type QuestionsAvgAggregateInputType = {
    id?: true
    typeId?: true
    teamId?: true
  }

  export type QuestionsSumAggregateInputType = {
    id?: true
    typeId?: true
    teamId?: true
  }

  export type QuestionsMinAggregateInputType = {
    id?: true
    question?: true
    image?: true
    typeId?: true
    teamId?: true
    correct_answer?: true
    created_datetime?: true
    updated_datetime?: true
  }

  export type QuestionsMaxAggregateInputType = {
    id?: true
    question?: true
    image?: true
    typeId?: true
    teamId?: true
    correct_answer?: true
    created_datetime?: true
    updated_datetime?: true
  }

  export type QuestionsCountAggregateInputType = {
    id?: true
    question?: true
    options?: true
    image?: true
    typeId?: true
    teamId?: true
    correct_answer?: true
    created_datetime?: true
    updated_datetime?: true
    _all?: true
  }

  export type QuestionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to aggregate.
     */
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionsMaxAggregateInputType
  }

  export type GetQuestionsAggregateType<T extends QuestionsAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestions[P]>
      : GetScalarType<T[P], AggregateQuestions[P]>
  }




  export type QuestionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionsWhereInput
    orderBy?: QuestionsOrderByWithAggregationInput | QuestionsOrderByWithAggregationInput[]
    by: QuestionsScalarFieldEnum[] | QuestionsScalarFieldEnum
    having?: QuestionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionsCountAggregateInputType | true
    _avg?: QuestionsAvgAggregateInputType
    _sum?: QuestionsSumAggregateInputType
    _min?: QuestionsMinAggregateInputType
    _max?: QuestionsMaxAggregateInputType
  }

  export type QuestionsGroupByOutputType = {
    id: number
    question: string
    options: JsonValue
    image: string | null
    typeId: number
    teamId: number
    correct_answer: string
    created_datetime: Date
    updated_datetime: Date
    _count: QuestionsCountAggregateOutputType | null
    _avg: QuestionsAvgAggregateOutputType | null
    _sum: QuestionsSumAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  type GetQuestionsGroupByPayload<T extends QuestionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
        }
      >
    >


  export type QuestionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    options?: boolean
    image?: boolean
    typeId?: boolean
    teamId?: boolean
    correct_answer?: boolean
    created_datetime?: boolean
    updated_datetime?: boolean
    type?: boolean | QuestionTypeDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
    UserAnswers?: boolean | Questions$UserAnswersArgs<ExtArgs>
    _count?: boolean | QuestionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questions"]>

  export type QuestionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    options?: boolean
    image?: boolean
    typeId?: boolean
    teamId?: boolean
    correct_answer?: boolean
    created_datetime?: boolean
    updated_datetime?: boolean
    type?: boolean | QuestionTypeDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questions"]>

  export type QuestionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    options?: boolean
    image?: boolean
    typeId?: boolean
    teamId?: boolean
    correct_answer?: boolean
    created_datetime?: boolean
    updated_datetime?: boolean
    type?: boolean | QuestionTypeDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questions"]>

  export type QuestionsSelectScalar = {
    id?: boolean
    question?: boolean
    options?: boolean
    image?: boolean
    typeId?: boolean
    teamId?: boolean
    correct_answer?: boolean
    created_datetime?: boolean
    updated_datetime?: boolean
  }

  export type QuestionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question" | "options" | "image" | "typeId" | "teamId" | "correct_answer" | "created_datetime" | "updated_datetime", ExtArgs["result"]["questions"]>
  export type QuestionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | QuestionTypeDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
    UserAnswers?: boolean | Questions$UserAnswersArgs<ExtArgs>
    _count?: boolean | QuestionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | QuestionTypeDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type QuestionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | QuestionTypeDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $QuestionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Questions"
    objects: {
      type: Prisma.$QuestionTypePayload<ExtArgs>
      team: Prisma.$TeamPayload<ExtArgs>
      UserAnswers: Prisma.$UserAnswersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      question: string
      options: Prisma.JsonValue
      image: string | null
      typeId: number
      teamId: number
      correct_answer: string
      created_datetime: Date
      updated_datetime: Date
    }, ExtArgs["result"]["questions"]>
    composites: {}
  }

  type QuestionsGetPayload<S extends boolean | null | undefined | QuestionsDefaultArgs> = $Result.GetResult<Prisma.$QuestionsPayload, S>

  type QuestionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionsCountAggregateInputType | true
    }

  export interface QuestionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Questions'], meta: { name: 'Questions' } }
    /**
     * Find zero or one Questions that matches the filter.
     * @param {QuestionsFindUniqueArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionsFindUniqueArgs>(args: SelectSubset<T, QuestionsFindUniqueArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Questions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionsFindUniqueOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionsFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsFindFirstArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionsFindFirstArgs>(args?: SelectSubset<T, QuestionsFindFirstArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsFindFirstOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionsFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.questions.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.questions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionsWithIdOnly = await prisma.questions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionsFindManyArgs>(args?: SelectSubset<T, QuestionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Questions.
     * @param {QuestionsCreateArgs} args - Arguments to create a Questions.
     * @example
     * // Create one Questions
     * const Questions = await prisma.questions.create({
     *   data: {
     *     // ... data to create a Questions
     *   }
     * })
     * 
     */
    create<T extends QuestionsCreateArgs>(args: SelectSubset<T, QuestionsCreateArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionsCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const questions = await prisma.questions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionsCreateManyArgs>(args?: SelectSubset<T, QuestionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionsCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const questions = await prisma.questions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionsWithIdOnly = await prisma.questions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionsCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Questions.
     * @param {QuestionsDeleteArgs} args - Arguments to delete one Questions.
     * @example
     * // Delete one Questions
     * const Questions = await prisma.questions.delete({
     *   where: {
     *     // ... filter to delete one Questions
     *   }
     * })
     * 
     */
    delete<T extends QuestionsDeleteArgs>(args: SelectSubset<T, QuestionsDeleteArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Questions.
     * @param {QuestionsUpdateArgs} args - Arguments to update one Questions.
     * @example
     * // Update one Questions
     * const questions = await prisma.questions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionsUpdateArgs>(args: SelectSubset<T, QuestionsUpdateArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionsDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.questions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionsDeleteManyArgs>(args?: SelectSubset<T, QuestionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const questions = await prisma.questions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionsUpdateManyArgs>(args: SelectSubset<T, QuestionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionsUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const questions = await prisma.questions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionsWithIdOnly = await prisma.questions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionsUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Questions.
     * @param {QuestionsUpsertArgs} args - Arguments to update or create a Questions.
     * @example
     * // Update or create a Questions
     * const questions = await prisma.questions.upsert({
     *   create: {
     *     // ... data to create a Questions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Questions we want to update
     *   }
     * })
     */
    upsert<T extends QuestionsUpsertArgs>(args: SelectSubset<T, QuestionsUpsertArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.questions.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionsCountArgs>(
      args?: Subset<T, QuestionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionsAggregateArgs>(args: Subset<T, QuestionsAggregateArgs>): Prisma.PrismaPromise<GetQuestionsAggregateType<T>>

    /**
     * Group by Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionsGroupByArgs['orderBy'] }
        : { orderBy?: QuestionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Questions model
   */
  readonly fields: QuestionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Questions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends QuestionTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionTypeDefaultArgs<ExtArgs>>): Prisma__QuestionTypeClient<$Result.GetResult<Prisma.$QuestionTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    UserAnswers<T extends Questions$UserAnswersArgs<ExtArgs> = {}>(args?: Subset<T, Questions$UserAnswersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Questions model
   */
  interface QuestionsFieldRefs {
    readonly id: FieldRef<"Questions", 'Int'>
    readonly question: FieldRef<"Questions", 'String'>
    readonly options: FieldRef<"Questions", 'Json'>
    readonly image: FieldRef<"Questions", 'String'>
    readonly typeId: FieldRef<"Questions", 'Int'>
    readonly teamId: FieldRef<"Questions", 'Int'>
    readonly correct_answer: FieldRef<"Questions", 'String'>
    readonly created_datetime: FieldRef<"Questions", 'DateTime'>
    readonly updated_datetime: FieldRef<"Questions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Questions findUnique
   */
  export type QuestionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where: QuestionsWhereUniqueInput
  }

  /**
   * Questions findUniqueOrThrow
   */
  export type QuestionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where: QuestionsWhereUniqueInput
  }

  /**
   * Questions findFirst
   */
  export type QuestionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * Questions findFirstOrThrow
   */
  export type QuestionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * Questions findMany
   */
  export type QuestionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * Questions create
   */
  export type QuestionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Questions.
     */
    data: XOR<QuestionsCreateInput, QuestionsUncheckedCreateInput>
  }

  /**
   * Questions createMany
   */
  export type QuestionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionsCreateManyInput | QuestionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Questions createManyAndReturn
   */
  export type QuestionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionsCreateManyInput | QuestionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Questions update
   */
  export type QuestionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Questions.
     */
    data: XOR<QuestionsUpdateInput, QuestionsUncheckedUpdateInput>
    /**
     * Choose, which Questions to update.
     */
    where: QuestionsWhereUniqueInput
  }

  /**
   * Questions updateMany
   */
  export type QuestionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionsUpdateManyMutationInput, QuestionsUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionsWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Questions updateManyAndReturn
   */
  export type QuestionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionsUpdateManyMutationInput, QuestionsUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionsWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Questions upsert
   */
  export type QuestionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Questions to update in case it exists.
     */
    where: QuestionsWhereUniqueInput
    /**
     * In case the Questions found by the `where` argument doesn't exist, create a new Questions with this data.
     */
    create: XOR<QuestionsCreateInput, QuestionsUncheckedCreateInput>
    /**
     * In case the Questions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionsUpdateInput, QuestionsUncheckedUpdateInput>
  }

  /**
   * Questions delete
   */
  export type QuestionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * Filter which Questions to delete.
     */
    where: QuestionsWhereUniqueInput
  }

  /**
   * Questions deleteMany
   */
  export type QuestionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionsWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Questions.UserAnswers
   */
  export type Questions$UserAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    where?: UserAnswersWhereInput
    orderBy?: UserAnswersOrderByWithRelationInput | UserAnswersOrderByWithRelationInput[]
    cursor?: UserAnswersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAnswersScalarFieldEnum | UserAnswersScalarFieldEnum[]
  }

  /**
   * Questions without action
   */
  export type QuestionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    roleName: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    roleName: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    roleName: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    roleName?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    roleName?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    roleName?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    roleName: string
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleName?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleName?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleName?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    roleName?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roleName", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roleName: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly roleName: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    id: number | null
  }

  export type TeamSumAggregateOutputType = {
    id: number | null
  }

  export type TeamMinAggregateOutputType = {
    id: number | null
    teamName: string | null
  }

  export type TeamMaxAggregateOutputType = {
    id: number | null
    teamName: string | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    teamName: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    id?: true
  }

  export type TeamSumAggregateInputType = {
    id?: true
  }

  export type TeamMinAggregateInputType = {
    id?: true
    teamName?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    teamName?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    teamName?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: number
    teamName: string
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamName?: boolean
    users?: boolean | Team$usersArgs<ExtArgs>
    questions?: boolean | Team$questionsArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamName?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamName?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    teamName?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamName", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Team$usersArgs<ExtArgs>
    questions?: boolean | Team$questionsArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      questions: Prisma.$QuestionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teamName: string
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Team$usersArgs<ExtArgs> = {}>(args?: Subset<T, Team$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questions<T extends Team$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Team$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'Int'>
    readonly teamName: FieldRef<"Team", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.users
   */
  export type Team$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Team.questions
   */
  export type Team$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    where?: QuestionsWhereInput
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    cursor?: QuestionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
    teamId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    roleId: number | null
    teamId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    name: string | null
    email: string | null
    roleId: number | null
    teamId: number | null
    created_datetime: Date | null
    updated_datetime: Date | null
    active: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    name: string | null
    email: string | null
    roleId: number | null
    teamId: number | null
    created_datetime: Date | null
    updated_datetime: Date | null
    active: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    name: number
    email: number
    roleId: number
    teamId: number
    created_datetime: number
    updated_datetime: number
    active: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    roleId?: true
    teamId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    roleId?: true
    teamId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    email?: true
    roleId?: true
    teamId?: true
    created_datetime?: true
    updated_datetime?: true
    active?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    email?: true
    roleId?: true
    teamId?: true
    created_datetime?: true
    updated_datetime?: true
    active?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    email?: true
    roleId?: true
    teamId?: true
    created_datetime?: true
    updated_datetime?: true
    active?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    name: string
    email: string | null
    roleId: number
    teamId: number
    created_datetime: Date
    updated_datetime: Date
    active: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    email?: boolean
    roleId?: boolean
    teamId?: boolean
    created_datetime?: boolean
    updated_datetime?: boolean
    active?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
    userAnswers?: boolean | User$userAnswersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    email?: boolean
    roleId?: boolean
    teamId?: boolean
    created_datetime?: boolean
    updated_datetime?: boolean
    active?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    email?: boolean
    roleId?: boolean
    teamId?: boolean
    created_datetime?: boolean
    updated_datetime?: boolean
    active?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    email?: boolean
    roleId?: boolean
    teamId?: boolean
    created_datetime?: boolean
    updated_datetime?: boolean
    active?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "name" | "email" | "roleId" | "teamId" | "created_datetime" | "updated_datetime" | "active", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
    userAnswers?: boolean | User$userAnswersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      team: Prisma.$TeamPayload<ExtArgs>
      userAnswers: Prisma.$UserAnswersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      name: string
      email: string | null
      roleId: number
      teamId: number
      created_datetime: Date
      updated_datetime: Date
      active: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userAnswers<T extends User$userAnswersArgs<ExtArgs> = {}>(args?: Subset<T, User$userAnswersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly roleId: FieldRef<"User", 'Int'>
    readonly teamId: FieldRef<"User", 'Int'>
    readonly created_datetime: FieldRef<"User", 'DateTime'>
    readonly updated_datetime: FieldRef<"User", 'DateTime'>
    readonly active: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userAnswers
   */
  export type User$userAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    where?: UserAnswersWhereInput
    orderBy?: UserAnswersOrderByWithRelationInput | UserAnswersOrderByWithRelationInput[]
    cursor?: UserAnswersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAnswersScalarFieldEnum | UserAnswersScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model QuestionType
   */

  export type AggregateQuestionType = {
    _count: QuestionTypeCountAggregateOutputType | null
    _avg: QuestionTypeAvgAggregateOutputType | null
    _sum: QuestionTypeSumAggregateOutputType | null
    _min: QuestionTypeMinAggregateOutputType | null
    _max: QuestionTypeMaxAggregateOutputType | null
  }

  export type QuestionTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type QuestionTypeSumAggregateOutputType = {
    id: number | null
  }

  export type QuestionTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type QuestionTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type QuestionTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type QuestionTypeAvgAggregateInputType = {
    id?: true
  }

  export type QuestionTypeSumAggregateInputType = {
    id?: true
  }

  export type QuestionTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type QuestionTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type QuestionTypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type QuestionTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionType to aggregate.
     */
    where?: QuestionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionTypes to fetch.
     */
    orderBy?: QuestionTypeOrderByWithRelationInput | QuestionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionTypes
    **/
    _count?: true | QuestionTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionTypeMaxAggregateInputType
  }

  export type GetQuestionTypeAggregateType<T extends QuestionTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionType[P]>
      : GetScalarType<T[P], AggregateQuestionType[P]>
  }




  export type QuestionTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionTypeWhereInput
    orderBy?: QuestionTypeOrderByWithAggregationInput | QuestionTypeOrderByWithAggregationInput[]
    by: QuestionTypeScalarFieldEnum[] | QuestionTypeScalarFieldEnum
    having?: QuestionTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionTypeCountAggregateInputType | true
    _avg?: QuestionTypeAvgAggregateInputType
    _sum?: QuestionTypeSumAggregateInputType
    _min?: QuestionTypeMinAggregateInputType
    _max?: QuestionTypeMaxAggregateInputType
  }

  export type QuestionTypeGroupByOutputType = {
    id: number
    name: string
    _count: QuestionTypeCountAggregateOutputType | null
    _avg: QuestionTypeAvgAggregateOutputType | null
    _sum: QuestionTypeSumAggregateOutputType | null
    _min: QuestionTypeMinAggregateOutputType | null
    _max: QuestionTypeMaxAggregateOutputType | null
  }

  type GetQuestionTypeGroupByPayload<T extends QuestionTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionTypeGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionTypeGroupByOutputType[P]>
        }
      >
    >


  export type QuestionTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    Questions?: boolean | QuestionType$QuestionsArgs<ExtArgs>
    _count?: boolean | QuestionTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionType"]>

  export type QuestionTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["questionType"]>

  export type QuestionTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["questionType"]>

  export type QuestionTypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type QuestionTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["questionType"]>
  export type QuestionTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Questions?: boolean | QuestionType$QuestionsArgs<ExtArgs>
    _count?: boolean | QuestionTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type QuestionTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QuestionTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestionType"
    objects: {
      Questions: Prisma.$QuestionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["questionType"]>
    composites: {}
  }

  type QuestionTypeGetPayload<S extends boolean | null | undefined | QuestionTypeDefaultArgs> = $Result.GetResult<Prisma.$QuestionTypePayload, S>

  type QuestionTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionTypeCountAggregateInputType | true
    }

  export interface QuestionTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestionType'], meta: { name: 'QuestionType' } }
    /**
     * Find zero or one QuestionType that matches the filter.
     * @param {QuestionTypeFindUniqueArgs} args - Arguments to find a QuestionType
     * @example
     * // Get one QuestionType
     * const questionType = await prisma.questionType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionTypeFindUniqueArgs>(args: SelectSubset<T, QuestionTypeFindUniqueArgs<ExtArgs>>): Prisma__QuestionTypeClient<$Result.GetResult<Prisma.$QuestionTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuestionType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionTypeFindUniqueOrThrowArgs} args - Arguments to find a QuestionType
     * @example
     * // Get one QuestionType
     * const questionType = await prisma.questionType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionTypeClient<$Result.GetResult<Prisma.$QuestionTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTypeFindFirstArgs} args - Arguments to find a QuestionType
     * @example
     * // Get one QuestionType
     * const questionType = await prisma.questionType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionTypeFindFirstArgs>(args?: SelectSubset<T, QuestionTypeFindFirstArgs<ExtArgs>>): Prisma__QuestionTypeClient<$Result.GetResult<Prisma.$QuestionTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTypeFindFirstOrThrowArgs} args - Arguments to find a QuestionType
     * @example
     * // Get one QuestionType
     * const questionType = await prisma.questionType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionTypeClient<$Result.GetResult<Prisma.$QuestionTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuestionTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionTypes
     * const questionTypes = await prisma.questionType.findMany()
     * 
     * // Get first 10 QuestionTypes
     * const questionTypes = await prisma.questionType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionTypeWithIdOnly = await prisma.questionType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionTypeFindManyArgs>(args?: SelectSubset<T, QuestionTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuestionType.
     * @param {QuestionTypeCreateArgs} args - Arguments to create a QuestionType.
     * @example
     * // Create one QuestionType
     * const QuestionType = await prisma.questionType.create({
     *   data: {
     *     // ... data to create a QuestionType
     *   }
     * })
     * 
     */
    create<T extends QuestionTypeCreateArgs>(args: SelectSubset<T, QuestionTypeCreateArgs<ExtArgs>>): Prisma__QuestionTypeClient<$Result.GetResult<Prisma.$QuestionTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuestionTypes.
     * @param {QuestionTypeCreateManyArgs} args - Arguments to create many QuestionTypes.
     * @example
     * // Create many QuestionTypes
     * const questionType = await prisma.questionType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionTypeCreateManyArgs>(args?: SelectSubset<T, QuestionTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuestionTypes and returns the data saved in the database.
     * @param {QuestionTypeCreateManyAndReturnArgs} args - Arguments to create many QuestionTypes.
     * @example
     * // Create many QuestionTypes
     * const questionType = await prisma.questionType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuestionTypes and only return the `id`
     * const questionTypeWithIdOnly = await prisma.questionType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuestionType.
     * @param {QuestionTypeDeleteArgs} args - Arguments to delete one QuestionType.
     * @example
     * // Delete one QuestionType
     * const QuestionType = await prisma.questionType.delete({
     *   where: {
     *     // ... filter to delete one QuestionType
     *   }
     * })
     * 
     */
    delete<T extends QuestionTypeDeleteArgs>(args: SelectSubset<T, QuestionTypeDeleteArgs<ExtArgs>>): Prisma__QuestionTypeClient<$Result.GetResult<Prisma.$QuestionTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuestionType.
     * @param {QuestionTypeUpdateArgs} args - Arguments to update one QuestionType.
     * @example
     * // Update one QuestionType
     * const questionType = await prisma.questionType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionTypeUpdateArgs>(args: SelectSubset<T, QuestionTypeUpdateArgs<ExtArgs>>): Prisma__QuestionTypeClient<$Result.GetResult<Prisma.$QuestionTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuestionTypes.
     * @param {QuestionTypeDeleteManyArgs} args - Arguments to filter QuestionTypes to delete.
     * @example
     * // Delete a few QuestionTypes
     * const { count } = await prisma.questionType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionTypeDeleteManyArgs>(args?: SelectSubset<T, QuestionTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionTypes
     * const questionType = await prisma.questionType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionTypeUpdateManyArgs>(args: SelectSubset<T, QuestionTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionTypes and returns the data updated in the database.
     * @param {QuestionTypeUpdateManyAndReturnArgs} args - Arguments to update many QuestionTypes.
     * @example
     * // Update many QuestionTypes
     * const questionType = await prisma.questionType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuestionTypes and only return the `id`
     * const questionTypeWithIdOnly = await prisma.questionType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuestionType.
     * @param {QuestionTypeUpsertArgs} args - Arguments to update or create a QuestionType.
     * @example
     * // Update or create a QuestionType
     * const questionType = await prisma.questionType.upsert({
     *   create: {
     *     // ... data to create a QuestionType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionType we want to update
     *   }
     * })
     */
    upsert<T extends QuestionTypeUpsertArgs>(args: SelectSubset<T, QuestionTypeUpsertArgs<ExtArgs>>): Prisma__QuestionTypeClient<$Result.GetResult<Prisma.$QuestionTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuestionTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTypeCountArgs} args - Arguments to filter QuestionTypes to count.
     * @example
     * // Count the number of QuestionTypes
     * const count = await prisma.questionType.count({
     *   where: {
     *     // ... the filter for the QuestionTypes we want to count
     *   }
     * })
    **/
    count<T extends QuestionTypeCountArgs>(
      args?: Subset<T, QuestionTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionTypeAggregateArgs>(args: Subset<T, QuestionTypeAggregateArgs>): Prisma.PrismaPromise<GetQuestionTypeAggregateType<T>>

    /**
     * Group by QuestionType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionTypeGroupByArgs['orderBy'] }
        : { orderBy?: QuestionTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestionType model
   */
  readonly fields: QuestionTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Questions<T extends QuestionType$QuestionsArgs<ExtArgs> = {}>(args?: Subset<T, QuestionType$QuestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuestionType model
   */
  interface QuestionTypeFieldRefs {
    readonly id: FieldRef<"QuestionType", 'Int'>
    readonly name: FieldRef<"QuestionType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuestionType findUnique
   */
  export type QuestionTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionType
     */
    select?: QuestionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionType
     */
    omit?: QuestionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTypeInclude<ExtArgs> | null
    /**
     * Filter, which QuestionType to fetch.
     */
    where: QuestionTypeWhereUniqueInput
  }

  /**
   * QuestionType findUniqueOrThrow
   */
  export type QuestionTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionType
     */
    select?: QuestionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionType
     */
    omit?: QuestionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTypeInclude<ExtArgs> | null
    /**
     * Filter, which QuestionType to fetch.
     */
    where: QuestionTypeWhereUniqueInput
  }

  /**
   * QuestionType findFirst
   */
  export type QuestionTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionType
     */
    select?: QuestionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionType
     */
    omit?: QuestionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTypeInclude<ExtArgs> | null
    /**
     * Filter, which QuestionType to fetch.
     */
    where?: QuestionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionTypes to fetch.
     */
    orderBy?: QuestionTypeOrderByWithRelationInput | QuestionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionTypes.
     */
    cursor?: QuestionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionTypes.
     */
    distinct?: QuestionTypeScalarFieldEnum | QuestionTypeScalarFieldEnum[]
  }

  /**
   * QuestionType findFirstOrThrow
   */
  export type QuestionTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionType
     */
    select?: QuestionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionType
     */
    omit?: QuestionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTypeInclude<ExtArgs> | null
    /**
     * Filter, which QuestionType to fetch.
     */
    where?: QuestionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionTypes to fetch.
     */
    orderBy?: QuestionTypeOrderByWithRelationInput | QuestionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionTypes.
     */
    cursor?: QuestionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionTypes.
     */
    distinct?: QuestionTypeScalarFieldEnum | QuestionTypeScalarFieldEnum[]
  }

  /**
   * QuestionType findMany
   */
  export type QuestionTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionType
     */
    select?: QuestionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionType
     */
    omit?: QuestionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTypeInclude<ExtArgs> | null
    /**
     * Filter, which QuestionTypes to fetch.
     */
    where?: QuestionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionTypes to fetch.
     */
    orderBy?: QuestionTypeOrderByWithRelationInput | QuestionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionTypes.
     */
    cursor?: QuestionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionTypes.
     */
    skip?: number
    distinct?: QuestionTypeScalarFieldEnum | QuestionTypeScalarFieldEnum[]
  }

  /**
   * QuestionType create
   */
  export type QuestionTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionType
     */
    select?: QuestionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionType
     */
    omit?: QuestionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestionType.
     */
    data: XOR<QuestionTypeCreateInput, QuestionTypeUncheckedCreateInput>
  }

  /**
   * QuestionType createMany
   */
  export type QuestionTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestionTypes.
     */
    data: QuestionTypeCreateManyInput | QuestionTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestionType createManyAndReturn
   */
  export type QuestionTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionType
     */
    select?: QuestionTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionType
     */
    omit?: QuestionTypeOmit<ExtArgs> | null
    /**
     * The data used to create many QuestionTypes.
     */
    data: QuestionTypeCreateManyInput | QuestionTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestionType update
   */
  export type QuestionTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionType
     */
    select?: QuestionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionType
     */
    omit?: QuestionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestionType.
     */
    data: XOR<QuestionTypeUpdateInput, QuestionTypeUncheckedUpdateInput>
    /**
     * Choose, which QuestionType to update.
     */
    where: QuestionTypeWhereUniqueInput
  }

  /**
   * QuestionType updateMany
   */
  export type QuestionTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestionTypes.
     */
    data: XOR<QuestionTypeUpdateManyMutationInput, QuestionTypeUncheckedUpdateManyInput>
    /**
     * Filter which QuestionTypes to update
     */
    where?: QuestionTypeWhereInput
    /**
     * Limit how many QuestionTypes to update.
     */
    limit?: number
  }

  /**
   * QuestionType updateManyAndReturn
   */
  export type QuestionTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionType
     */
    select?: QuestionTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionType
     */
    omit?: QuestionTypeOmit<ExtArgs> | null
    /**
     * The data used to update QuestionTypes.
     */
    data: XOR<QuestionTypeUpdateManyMutationInput, QuestionTypeUncheckedUpdateManyInput>
    /**
     * Filter which QuestionTypes to update
     */
    where?: QuestionTypeWhereInput
    /**
     * Limit how many QuestionTypes to update.
     */
    limit?: number
  }

  /**
   * QuestionType upsert
   */
  export type QuestionTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionType
     */
    select?: QuestionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionType
     */
    omit?: QuestionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestionType to update in case it exists.
     */
    where: QuestionTypeWhereUniqueInput
    /**
     * In case the QuestionType found by the `where` argument doesn't exist, create a new QuestionType with this data.
     */
    create: XOR<QuestionTypeCreateInput, QuestionTypeUncheckedCreateInput>
    /**
     * In case the QuestionType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionTypeUpdateInput, QuestionTypeUncheckedUpdateInput>
  }

  /**
   * QuestionType delete
   */
  export type QuestionTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionType
     */
    select?: QuestionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionType
     */
    omit?: QuestionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTypeInclude<ExtArgs> | null
    /**
     * Filter which QuestionType to delete.
     */
    where: QuestionTypeWhereUniqueInput
  }

  /**
   * QuestionType deleteMany
   */
  export type QuestionTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionTypes to delete
     */
    where?: QuestionTypeWhereInput
    /**
     * Limit how many QuestionTypes to delete.
     */
    limit?: number
  }

  /**
   * QuestionType.Questions
   */
  export type QuestionType$QuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    where?: QuestionsWhereInput
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    cursor?: QuestionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * QuestionType without action
   */
  export type QuestionTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionType
     */
    select?: QuestionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionType
     */
    omit?: QuestionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTypeInclude<ExtArgs> | null
  }


  /**
   * Model UserAnswers
   */

  export type AggregateUserAnswers = {
    _count: UserAnswersCountAggregateOutputType | null
    _avg: UserAnswersAvgAggregateOutputType | null
    _sum: UserAnswersSumAggregateOutputType | null
    _min: UserAnswersMinAggregateOutputType | null
    _max: UserAnswersMaxAggregateOutputType | null
  }

  export type UserAnswersAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    questionId: number | null
  }

  export type UserAnswersSumAggregateOutputType = {
    id: number | null
    userId: number | null
    questionId: number | null
  }

  export type UserAnswersMinAggregateOutputType = {
    id: number | null
    userId: number | null
    questionId: number | null
    answer: string | null
    created_datetime: Date | null
    updated_datetime: Date | null
  }

  export type UserAnswersMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    questionId: number | null
    answer: string | null
    created_datetime: Date | null
    updated_datetime: Date | null
  }

  export type UserAnswersCountAggregateOutputType = {
    id: number
    userId: number
    questionId: number
    answer: number
    created_datetime: number
    updated_datetime: number
    _all: number
  }


  export type UserAnswersAvgAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
  }

  export type UserAnswersSumAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
  }

  export type UserAnswersMinAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    answer?: true
    created_datetime?: true
    updated_datetime?: true
  }

  export type UserAnswersMaxAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    answer?: true
    created_datetime?: true
    updated_datetime?: true
  }

  export type UserAnswersCountAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    answer?: true
    created_datetime?: true
    updated_datetime?: true
    _all?: true
  }

  export type UserAnswersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAnswers to aggregate.
     */
    where?: UserAnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnswers to fetch.
     */
    orderBy?: UserAnswersOrderByWithRelationInput | UserAnswersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAnswers
    **/
    _count?: true | UserAnswersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAnswersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAnswersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAnswersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAnswersMaxAggregateInputType
  }

  export type GetUserAnswersAggregateType<T extends UserAnswersAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAnswers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAnswers[P]>
      : GetScalarType<T[P], AggregateUserAnswers[P]>
  }




  export type UserAnswersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAnswersWhereInput
    orderBy?: UserAnswersOrderByWithAggregationInput | UserAnswersOrderByWithAggregationInput[]
    by: UserAnswersScalarFieldEnum[] | UserAnswersScalarFieldEnum
    having?: UserAnswersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAnswersCountAggregateInputType | true
    _avg?: UserAnswersAvgAggregateInputType
    _sum?: UserAnswersSumAggregateInputType
    _min?: UserAnswersMinAggregateInputType
    _max?: UserAnswersMaxAggregateInputType
  }

  export type UserAnswersGroupByOutputType = {
    id: number
    userId: number
    questionId: number
    answer: string
    created_datetime: Date
    updated_datetime: Date
    _count: UserAnswersCountAggregateOutputType | null
    _avg: UserAnswersAvgAggregateOutputType | null
    _sum: UserAnswersSumAggregateOutputType | null
    _min: UserAnswersMinAggregateOutputType | null
    _max: UserAnswersMaxAggregateOutputType | null
  }

  type GetUserAnswersGroupByPayload<T extends UserAnswersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAnswersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAnswersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAnswersGroupByOutputType[P]>
            : GetScalarType<T[P], UserAnswersGroupByOutputType[P]>
        }
      >
    >


  export type UserAnswersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    answer?: boolean
    created_datetime?: boolean
    updated_datetime?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAnswers"]>

  export type UserAnswersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    answer?: boolean
    created_datetime?: boolean
    updated_datetime?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAnswers"]>

  export type UserAnswersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    answer?: boolean
    created_datetime?: boolean
    updated_datetime?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAnswers"]>

  export type UserAnswersSelectScalar = {
    id?: boolean
    userId?: boolean
    questionId?: boolean
    answer?: boolean
    created_datetime?: boolean
    updated_datetime?: boolean
  }

  export type UserAnswersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "questionId" | "answer" | "created_datetime" | "updated_datetime", ExtArgs["result"]["userAnswers"]>
  export type UserAnswersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionsDefaultArgs<ExtArgs>
  }
  export type UserAnswersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionsDefaultArgs<ExtArgs>
  }
  export type UserAnswersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionsDefaultArgs<ExtArgs>
  }

  export type $UserAnswersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAnswers"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      question: Prisma.$QuestionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      questionId: number
      answer: string
      created_datetime: Date
      updated_datetime: Date
    }, ExtArgs["result"]["userAnswers"]>
    composites: {}
  }

  type UserAnswersGetPayload<S extends boolean | null | undefined | UserAnswersDefaultArgs> = $Result.GetResult<Prisma.$UserAnswersPayload, S>

  type UserAnswersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAnswersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAnswersCountAggregateInputType | true
    }

  export interface UserAnswersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAnswers'], meta: { name: 'UserAnswers' } }
    /**
     * Find zero or one UserAnswers that matches the filter.
     * @param {UserAnswersFindUniqueArgs} args - Arguments to find a UserAnswers
     * @example
     * // Get one UserAnswers
     * const userAnswers = await prisma.userAnswers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAnswersFindUniqueArgs>(args: SelectSubset<T, UserAnswersFindUniqueArgs<ExtArgs>>): Prisma__UserAnswersClient<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAnswers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAnswersFindUniqueOrThrowArgs} args - Arguments to find a UserAnswers
     * @example
     * // Get one UserAnswers
     * const userAnswers = await prisma.userAnswers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAnswersFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAnswersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAnswersClient<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswersFindFirstArgs} args - Arguments to find a UserAnswers
     * @example
     * // Get one UserAnswers
     * const userAnswers = await prisma.userAnswers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAnswersFindFirstArgs>(args?: SelectSubset<T, UserAnswersFindFirstArgs<ExtArgs>>): Prisma__UserAnswersClient<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAnswers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswersFindFirstOrThrowArgs} args - Arguments to find a UserAnswers
     * @example
     * // Get one UserAnswers
     * const userAnswers = await prisma.userAnswers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAnswersFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAnswersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAnswersClient<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAnswers
     * const userAnswers = await prisma.userAnswers.findMany()
     * 
     * // Get first 10 UserAnswers
     * const userAnswers = await prisma.userAnswers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAnswersWithIdOnly = await prisma.userAnswers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAnswersFindManyArgs>(args?: SelectSubset<T, UserAnswersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAnswers.
     * @param {UserAnswersCreateArgs} args - Arguments to create a UserAnswers.
     * @example
     * // Create one UserAnswers
     * const UserAnswers = await prisma.userAnswers.create({
     *   data: {
     *     // ... data to create a UserAnswers
     *   }
     * })
     * 
     */
    create<T extends UserAnswersCreateArgs>(args: SelectSubset<T, UserAnswersCreateArgs<ExtArgs>>): Prisma__UserAnswersClient<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAnswers.
     * @param {UserAnswersCreateManyArgs} args - Arguments to create many UserAnswers.
     * @example
     * // Create many UserAnswers
     * const userAnswers = await prisma.userAnswers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAnswersCreateManyArgs>(args?: SelectSubset<T, UserAnswersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAnswers and returns the data saved in the database.
     * @param {UserAnswersCreateManyAndReturnArgs} args - Arguments to create many UserAnswers.
     * @example
     * // Create many UserAnswers
     * const userAnswers = await prisma.userAnswers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAnswers and only return the `id`
     * const userAnswersWithIdOnly = await prisma.userAnswers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAnswersCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAnswersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAnswers.
     * @param {UserAnswersDeleteArgs} args - Arguments to delete one UserAnswers.
     * @example
     * // Delete one UserAnswers
     * const UserAnswers = await prisma.userAnswers.delete({
     *   where: {
     *     // ... filter to delete one UserAnswers
     *   }
     * })
     * 
     */
    delete<T extends UserAnswersDeleteArgs>(args: SelectSubset<T, UserAnswersDeleteArgs<ExtArgs>>): Prisma__UserAnswersClient<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAnswers.
     * @param {UserAnswersUpdateArgs} args - Arguments to update one UserAnswers.
     * @example
     * // Update one UserAnswers
     * const userAnswers = await prisma.userAnswers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAnswersUpdateArgs>(args: SelectSubset<T, UserAnswersUpdateArgs<ExtArgs>>): Prisma__UserAnswersClient<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAnswers.
     * @param {UserAnswersDeleteManyArgs} args - Arguments to filter UserAnswers to delete.
     * @example
     * // Delete a few UserAnswers
     * const { count } = await prisma.userAnswers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAnswersDeleteManyArgs>(args?: SelectSubset<T, UserAnswersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAnswers
     * const userAnswers = await prisma.userAnswers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAnswersUpdateManyArgs>(args: SelectSubset<T, UserAnswersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAnswers and returns the data updated in the database.
     * @param {UserAnswersUpdateManyAndReturnArgs} args - Arguments to update many UserAnswers.
     * @example
     * // Update many UserAnswers
     * const userAnswers = await prisma.userAnswers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAnswers and only return the `id`
     * const userAnswersWithIdOnly = await prisma.userAnswers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserAnswersUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAnswersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAnswers.
     * @param {UserAnswersUpsertArgs} args - Arguments to update or create a UserAnswers.
     * @example
     * // Update or create a UserAnswers
     * const userAnswers = await prisma.userAnswers.upsert({
     *   create: {
     *     // ... data to create a UserAnswers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAnswers we want to update
     *   }
     * })
     */
    upsert<T extends UserAnswersUpsertArgs>(args: SelectSubset<T, UserAnswersUpsertArgs<ExtArgs>>): Prisma__UserAnswersClient<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswersCountArgs} args - Arguments to filter UserAnswers to count.
     * @example
     * // Count the number of UserAnswers
     * const count = await prisma.userAnswers.count({
     *   where: {
     *     // ... the filter for the UserAnswers we want to count
     *   }
     * })
    **/
    count<T extends UserAnswersCountArgs>(
      args?: Subset<T, UserAnswersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAnswersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAnswersAggregateArgs>(args: Subset<T, UserAnswersAggregateArgs>): Prisma.PrismaPromise<GetUserAnswersAggregateType<T>>

    /**
     * Group by UserAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserAnswersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAnswersGroupByArgs['orderBy'] }
        : { orderBy?: UserAnswersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserAnswersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAnswersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAnswers model
   */
  readonly fields: UserAnswersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAnswers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAnswersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionsDefaultArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserAnswers model
   */
  interface UserAnswersFieldRefs {
    readonly id: FieldRef<"UserAnswers", 'Int'>
    readonly userId: FieldRef<"UserAnswers", 'Int'>
    readonly questionId: FieldRef<"UserAnswers", 'Int'>
    readonly answer: FieldRef<"UserAnswers", 'String'>
    readonly created_datetime: FieldRef<"UserAnswers", 'DateTime'>
    readonly updated_datetime: FieldRef<"UserAnswers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAnswers findUnique
   */
  export type UserAnswersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    /**
     * Filter, which UserAnswers to fetch.
     */
    where: UserAnswersWhereUniqueInput
  }

  /**
   * UserAnswers findUniqueOrThrow
   */
  export type UserAnswersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    /**
     * Filter, which UserAnswers to fetch.
     */
    where: UserAnswersWhereUniqueInput
  }

  /**
   * UserAnswers findFirst
   */
  export type UserAnswersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    /**
     * Filter, which UserAnswers to fetch.
     */
    where?: UserAnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnswers to fetch.
     */
    orderBy?: UserAnswersOrderByWithRelationInput | UserAnswersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAnswers.
     */
    cursor?: UserAnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAnswers.
     */
    distinct?: UserAnswersScalarFieldEnum | UserAnswersScalarFieldEnum[]
  }

  /**
   * UserAnswers findFirstOrThrow
   */
  export type UserAnswersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    /**
     * Filter, which UserAnswers to fetch.
     */
    where?: UserAnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnswers to fetch.
     */
    orderBy?: UserAnswersOrderByWithRelationInput | UserAnswersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAnswers.
     */
    cursor?: UserAnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAnswers.
     */
    distinct?: UserAnswersScalarFieldEnum | UserAnswersScalarFieldEnum[]
  }

  /**
   * UserAnswers findMany
   */
  export type UserAnswersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    /**
     * Filter, which UserAnswers to fetch.
     */
    where?: UserAnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnswers to fetch.
     */
    orderBy?: UserAnswersOrderByWithRelationInput | UserAnswersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAnswers.
     */
    cursor?: UserAnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnswers.
     */
    skip?: number
    distinct?: UserAnswersScalarFieldEnum | UserAnswersScalarFieldEnum[]
  }

  /**
   * UserAnswers create
   */
  export type UserAnswersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAnswers.
     */
    data: XOR<UserAnswersCreateInput, UserAnswersUncheckedCreateInput>
  }

  /**
   * UserAnswers createMany
   */
  export type UserAnswersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAnswers.
     */
    data: UserAnswersCreateManyInput | UserAnswersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAnswers createManyAndReturn
   */
  export type UserAnswersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * The data used to create many UserAnswers.
     */
    data: UserAnswersCreateManyInput | UserAnswersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAnswers update
   */
  export type UserAnswersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAnswers.
     */
    data: XOR<UserAnswersUpdateInput, UserAnswersUncheckedUpdateInput>
    /**
     * Choose, which UserAnswers to update.
     */
    where: UserAnswersWhereUniqueInput
  }

  /**
   * UserAnswers updateMany
   */
  export type UserAnswersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAnswers.
     */
    data: XOR<UserAnswersUpdateManyMutationInput, UserAnswersUncheckedUpdateManyInput>
    /**
     * Filter which UserAnswers to update
     */
    where?: UserAnswersWhereInput
    /**
     * Limit how many UserAnswers to update.
     */
    limit?: number
  }

  /**
   * UserAnswers updateManyAndReturn
   */
  export type UserAnswersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * The data used to update UserAnswers.
     */
    data: XOR<UserAnswersUpdateManyMutationInput, UserAnswersUncheckedUpdateManyInput>
    /**
     * Filter which UserAnswers to update
     */
    where?: UserAnswersWhereInput
    /**
     * Limit how many UserAnswers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAnswers upsert
   */
  export type UserAnswersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAnswers to update in case it exists.
     */
    where: UserAnswersWhereUniqueInput
    /**
     * In case the UserAnswers found by the `where` argument doesn't exist, create a new UserAnswers with this data.
     */
    create: XOR<UserAnswersCreateInput, UserAnswersUncheckedCreateInput>
    /**
     * In case the UserAnswers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAnswersUpdateInput, UserAnswersUncheckedUpdateInput>
  }

  /**
   * UserAnswers delete
   */
  export type UserAnswersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    /**
     * Filter which UserAnswers to delete.
     */
    where: UserAnswersWhereUniqueInput
  }

  /**
   * UserAnswers deleteMany
   */
  export type UserAnswersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAnswers to delete
     */
    where?: UserAnswersWhereInput
    /**
     * Limit how many UserAnswers to delete.
     */
    limit?: number
  }

  /**
   * UserAnswers without action
   */
  export type UserAnswersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const QuestionsScalarFieldEnum: {
    id: 'id',
    question: 'question',
    options: 'options',
    image: 'image',
    typeId: 'typeId',
    teamId: 'teamId',
    correct_answer: 'correct_answer',
    created_datetime: 'created_datetime',
    updated_datetime: 'updated_datetime'
  };

  export type QuestionsScalarFieldEnum = (typeof QuestionsScalarFieldEnum)[keyof typeof QuestionsScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    roleName: 'roleName'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    teamName: 'teamName'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    name: 'name',
    email: 'email',
    roleId: 'roleId',
    teamId: 'teamId',
    created_datetime: 'created_datetime',
    updated_datetime: 'updated_datetime',
    active: 'active'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const QuestionTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type QuestionTypeScalarFieldEnum = (typeof QuestionTypeScalarFieldEnum)[keyof typeof QuestionTypeScalarFieldEnum]


  export const UserAnswersScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    questionId: 'questionId',
    answer: 'answer',
    created_datetime: 'created_datetime',
    updated_datetime: 'updated_datetime'
  };

  export type UserAnswersScalarFieldEnum = (typeof UserAnswersScalarFieldEnum)[keyof typeof UserAnswersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type QuestionsWhereInput = {
    AND?: QuestionsWhereInput | QuestionsWhereInput[]
    OR?: QuestionsWhereInput[]
    NOT?: QuestionsWhereInput | QuestionsWhereInput[]
    id?: IntFilter<"Questions"> | number
    question?: StringFilter<"Questions"> | string
    options?: JsonFilter<"Questions">
    image?: StringNullableFilter<"Questions"> | string | null
    typeId?: IntFilter<"Questions"> | number
    teamId?: IntFilter<"Questions"> | number
    correct_answer?: StringFilter<"Questions"> | string
    created_datetime?: DateTimeFilter<"Questions"> | Date | string
    updated_datetime?: DateTimeFilter<"Questions"> | Date | string
    type?: XOR<QuestionTypeScalarRelationFilter, QuestionTypeWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    UserAnswers?: UserAnswersListRelationFilter
  }

  export type QuestionsOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    options?: SortOrder
    image?: SortOrderInput | SortOrder
    typeId?: SortOrder
    teamId?: SortOrder
    correct_answer?: SortOrder
    created_datetime?: SortOrder
    updated_datetime?: SortOrder
    type?: QuestionTypeOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
    UserAnswers?: UserAnswersOrderByRelationAggregateInput
  }

  export type QuestionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuestionsWhereInput | QuestionsWhereInput[]
    OR?: QuestionsWhereInput[]
    NOT?: QuestionsWhereInput | QuestionsWhereInput[]
    question?: StringFilter<"Questions"> | string
    options?: JsonFilter<"Questions">
    image?: StringNullableFilter<"Questions"> | string | null
    typeId?: IntFilter<"Questions"> | number
    teamId?: IntFilter<"Questions"> | number
    correct_answer?: StringFilter<"Questions"> | string
    created_datetime?: DateTimeFilter<"Questions"> | Date | string
    updated_datetime?: DateTimeFilter<"Questions"> | Date | string
    type?: XOR<QuestionTypeScalarRelationFilter, QuestionTypeWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    UserAnswers?: UserAnswersListRelationFilter
  }, "id">

  export type QuestionsOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    options?: SortOrder
    image?: SortOrderInput | SortOrder
    typeId?: SortOrder
    teamId?: SortOrder
    correct_answer?: SortOrder
    created_datetime?: SortOrder
    updated_datetime?: SortOrder
    _count?: QuestionsCountOrderByAggregateInput
    _avg?: QuestionsAvgOrderByAggregateInput
    _max?: QuestionsMaxOrderByAggregateInput
    _min?: QuestionsMinOrderByAggregateInput
    _sum?: QuestionsSumOrderByAggregateInput
  }

  export type QuestionsScalarWhereWithAggregatesInput = {
    AND?: QuestionsScalarWhereWithAggregatesInput | QuestionsScalarWhereWithAggregatesInput[]
    OR?: QuestionsScalarWhereWithAggregatesInput[]
    NOT?: QuestionsScalarWhereWithAggregatesInput | QuestionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Questions"> | number
    question?: StringWithAggregatesFilter<"Questions"> | string
    options?: JsonWithAggregatesFilter<"Questions">
    image?: StringNullableWithAggregatesFilter<"Questions"> | string | null
    typeId?: IntWithAggregatesFilter<"Questions"> | number
    teamId?: IntWithAggregatesFilter<"Questions"> | number
    correct_answer?: StringWithAggregatesFilter<"Questions"> | string
    created_datetime?: DateTimeWithAggregatesFilter<"Questions"> | Date | string
    updated_datetime?: DateTimeWithAggregatesFilter<"Questions"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    roleName?: StringFilter<"Role"> | string
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    roleName?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    roleName?: StringFilter<"Role"> | string
    users?: UserListRelationFilter
  }, "id">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    roleName?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    roleName?: StringWithAggregatesFilter<"Role"> | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: IntFilter<"Team"> | number
    teamName?: StringFilter<"Team"> | string
    users?: UserListRelationFilter
    questions?: QuestionsListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    teamName?: SortOrder
    users?: UserOrderByRelationAggregateInput
    questions?: QuestionsOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    teamName?: StringFilter<"Team"> | string
    users?: UserListRelationFilter
    questions?: QuestionsListRelationFilter
  }, "id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    teamName?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _avg?: TeamAvgOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
    _sum?: TeamSumOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Team"> | number
    teamName?: StringWithAggregatesFilter<"Team"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    roleId?: IntFilter<"User"> | number
    teamId?: IntFilter<"User"> | number
    created_datetime?: DateTimeFilter<"User"> | Date | string
    updated_datetime?: DateTimeFilter<"User"> | Date | string
    active?: BoolFilter<"User"> | boolean
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    userAnswers?: UserAnswersListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    roleId?: SortOrder
    teamId?: SortOrder
    created_datetime?: SortOrder
    updated_datetime?: SortOrder
    active?: SortOrder
    role?: RoleOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
    userAnswers?: UserAnswersOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    roleId?: IntFilter<"User"> | number
    teamId?: IntFilter<"User"> | number
    created_datetime?: DateTimeFilter<"User"> | Date | string
    updated_datetime?: DateTimeFilter<"User"> | Date | string
    active?: BoolFilter<"User"> | boolean
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    userAnswers?: UserAnswersListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    roleId?: SortOrder
    teamId?: SortOrder
    created_datetime?: SortOrder
    updated_datetime?: SortOrder
    active?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    roleId?: IntWithAggregatesFilter<"User"> | number
    teamId?: IntWithAggregatesFilter<"User"> | number
    created_datetime?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_datetime?: DateTimeWithAggregatesFilter<"User"> | Date | string
    active?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type QuestionTypeWhereInput = {
    AND?: QuestionTypeWhereInput | QuestionTypeWhereInput[]
    OR?: QuestionTypeWhereInput[]
    NOT?: QuestionTypeWhereInput | QuestionTypeWhereInput[]
    id?: IntFilter<"QuestionType"> | number
    name?: StringFilter<"QuestionType"> | string
    Questions?: QuestionsListRelationFilter
  }

  export type QuestionTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Questions?: QuestionsOrderByRelationAggregateInput
  }

  export type QuestionTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuestionTypeWhereInput | QuestionTypeWhereInput[]
    OR?: QuestionTypeWhereInput[]
    NOT?: QuestionTypeWhereInput | QuestionTypeWhereInput[]
    name?: StringFilter<"QuestionType"> | string
    Questions?: QuestionsListRelationFilter
  }, "id">

  export type QuestionTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: QuestionTypeCountOrderByAggregateInput
    _avg?: QuestionTypeAvgOrderByAggregateInput
    _max?: QuestionTypeMaxOrderByAggregateInput
    _min?: QuestionTypeMinOrderByAggregateInput
    _sum?: QuestionTypeSumOrderByAggregateInput
  }

  export type QuestionTypeScalarWhereWithAggregatesInput = {
    AND?: QuestionTypeScalarWhereWithAggregatesInput | QuestionTypeScalarWhereWithAggregatesInput[]
    OR?: QuestionTypeScalarWhereWithAggregatesInput[]
    NOT?: QuestionTypeScalarWhereWithAggregatesInput | QuestionTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QuestionType"> | number
    name?: StringWithAggregatesFilter<"QuestionType"> | string
  }

  export type UserAnswersWhereInput = {
    AND?: UserAnswersWhereInput | UserAnswersWhereInput[]
    OR?: UserAnswersWhereInput[]
    NOT?: UserAnswersWhereInput | UserAnswersWhereInput[]
    id?: IntFilter<"UserAnswers"> | number
    userId?: IntFilter<"UserAnswers"> | number
    questionId?: IntFilter<"UserAnswers"> | number
    answer?: StringFilter<"UserAnswers"> | string
    created_datetime?: DateTimeFilter<"UserAnswers"> | Date | string
    updated_datetime?: DateTimeFilter<"UserAnswers"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionsScalarRelationFilter, QuestionsWhereInput>
  }

  export type UserAnswersOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    answer?: SortOrder
    created_datetime?: SortOrder
    updated_datetime?: SortOrder
    user?: UserOrderByWithRelationInput
    question?: QuestionsOrderByWithRelationInput
  }

  export type UserAnswersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserAnswersWhereInput | UserAnswersWhereInput[]
    OR?: UserAnswersWhereInput[]
    NOT?: UserAnswersWhereInput | UserAnswersWhereInput[]
    userId?: IntFilter<"UserAnswers"> | number
    questionId?: IntFilter<"UserAnswers"> | number
    answer?: StringFilter<"UserAnswers"> | string
    created_datetime?: DateTimeFilter<"UserAnswers"> | Date | string
    updated_datetime?: DateTimeFilter<"UserAnswers"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionsScalarRelationFilter, QuestionsWhereInput>
  }, "id">

  export type UserAnswersOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    answer?: SortOrder
    created_datetime?: SortOrder
    updated_datetime?: SortOrder
    _count?: UserAnswersCountOrderByAggregateInput
    _avg?: UserAnswersAvgOrderByAggregateInput
    _max?: UserAnswersMaxOrderByAggregateInput
    _min?: UserAnswersMinOrderByAggregateInput
    _sum?: UserAnswersSumOrderByAggregateInput
  }

  export type UserAnswersScalarWhereWithAggregatesInput = {
    AND?: UserAnswersScalarWhereWithAggregatesInput | UserAnswersScalarWhereWithAggregatesInput[]
    OR?: UserAnswersScalarWhereWithAggregatesInput[]
    NOT?: UserAnswersScalarWhereWithAggregatesInput | UserAnswersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserAnswers"> | number
    userId?: IntWithAggregatesFilter<"UserAnswers"> | number
    questionId?: IntWithAggregatesFilter<"UserAnswers"> | number
    answer?: StringWithAggregatesFilter<"UserAnswers"> | string
    created_datetime?: DateTimeWithAggregatesFilter<"UserAnswers"> | Date | string
    updated_datetime?: DateTimeWithAggregatesFilter<"UserAnswers"> | Date | string
  }

  export type QuestionsCreateInput = {
    question: string
    options: JsonNullValueInput | InputJsonValue
    image?: string | null
    correct_answer: string
    created_datetime?: Date | string
    updated_datetime?: Date | string
    type: QuestionTypeCreateNestedOneWithoutQuestionsInput
    team: TeamCreateNestedOneWithoutQuestionsInput
    UserAnswers?: UserAnswersCreateNestedManyWithoutQuestionInput
  }

  export type QuestionsUncheckedCreateInput = {
    id?: number
    question: string
    options: JsonNullValueInput | InputJsonValue
    image?: string | null
    typeId: number
    teamId: number
    correct_answer: string
    created_datetime?: Date | string
    updated_datetime?: Date | string
    UserAnswers?: UserAnswersUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionsUpdateInput = {
    question?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    image?: NullableStringFieldUpdateOperationsInput | string | null
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: QuestionTypeUpdateOneRequiredWithoutQuestionsNestedInput
    team?: TeamUpdateOneRequiredWithoutQuestionsNestedInput
    UserAnswers?: UserAnswersUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    image?: NullableStringFieldUpdateOperationsInput | string | null
    typeId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    UserAnswers?: UserAnswersUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionsCreateManyInput = {
    id?: number
    question: string
    options: JsonNullValueInput | InputJsonValue
    image?: string | null
    typeId: number
    teamId: number
    correct_answer: string
    created_datetime?: Date | string
    updated_datetime?: Date | string
  }

  export type QuestionsUpdateManyMutationInput = {
    question?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    image?: NullableStringFieldUpdateOperationsInput | string | null
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    image?: NullableStringFieldUpdateOperationsInput | string | null
    typeId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    roleName: string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    roleName: string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    roleName?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleName?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    roleName: string
  }

  export type RoleUpdateManyMutationInput = {
    roleName?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleName?: StringFieldUpdateOperationsInput | string
  }

  export type TeamCreateInput = {
    teamName: string
    users?: UserCreateNestedManyWithoutTeamInput
    questions?: QuestionsCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: number
    teamName: string
    users?: UserUncheckedCreateNestedManyWithoutTeamInput
    questions?: QuestionsUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    teamName?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutTeamNestedInput
    questions?: QuestionsUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamName?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutTeamNestedInput
    questions?: QuestionsUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: number
    teamName: string
  }

  export type TeamUpdateManyMutationInput = {
    teamName?: StringFieldUpdateOperationsInput | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamName?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    username: string
    password: string
    name: string
    email?: string | null
    created_datetime?: Date | string
    updated_datetime?: Date | string
    active?: boolean
    role: RoleCreateNestedOneWithoutUsersInput
    team: TeamCreateNestedOneWithoutUsersInput
    userAnswers?: UserAnswersCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    name: string
    email?: string | null
    roleId: number
    teamId: number
    created_datetime?: Date | string
    updated_datetime?: Date | string
    active?: boolean
    userAnswers?: UserAnswersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    team?: TeamUpdateOneRequiredWithoutUsersNestedInput
    userAnswers?: UserAnswersUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    userAnswers?: UserAnswersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    name: string
    email?: string | null
    roleId: number
    teamId: number
    created_datetime?: Date | string
    updated_datetime?: Date | string
    active?: boolean
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuestionTypeCreateInput = {
    name: string
    Questions?: QuestionsCreateNestedManyWithoutTypeInput
  }

  export type QuestionTypeUncheckedCreateInput = {
    id?: number
    name: string
    Questions?: QuestionsUncheckedCreateNestedManyWithoutTypeInput
  }

  export type QuestionTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Questions?: QuestionsUpdateManyWithoutTypeNestedInput
  }

  export type QuestionTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Questions?: QuestionsUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type QuestionTypeCreateManyInput = {
    id?: number
    name: string
  }

  export type QuestionTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserAnswersCreateInput = {
    answer: string
    created_datetime?: Date | string
    updated_datetime?: Date | string
    user: UserCreateNestedOneWithoutUserAnswersInput
    question: QuestionsCreateNestedOneWithoutUserAnswersInput
  }

  export type UserAnswersUncheckedCreateInput = {
    id?: number
    userId: number
    questionId: number
    answer: string
    created_datetime?: Date | string
    updated_datetime?: Date | string
  }

  export type UserAnswersUpdateInput = {
    answer?: StringFieldUpdateOperationsInput | string
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserAnswersNestedInput
    question?: QuestionsUpdateOneRequiredWithoutUserAnswersNestedInput
  }

  export type UserAnswersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswersCreateManyInput = {
    id?: number
    userId: number
    questionId: number
    answer: string
    created_datetime?: Date | string
    updated_datetime?: Date | string
  }

  export type UserAnswersUpdateManyMutationInput = {
    answer?: StringFieldUpdateOperationsInput | string
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type QuestionTypeScalarRelationFilter = {
    is?: QuestionTypeWhereInput
    isNot?: QuestionTypeWhereInput
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type UserAnswersListRelationFilter = {
    every?: UserAnswersWhereInput
    some?: UserAnswersWhereInput
    none?: UserAnswersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserAnswersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionsCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    options?: SortOrder
    image?: SortOrder
    typeId?: SortOrder
    teamId?: SortOrder
    correct_answer?: SortOrder
    created_datetime?: SortOrder
    updated_datetime?: SortOrder
  }

  export type QuestionsAvgOrderByAggregateInput = {
    id?: SortOrder
    typeId?: SortOrder
    teamId?: SortOrder
  }

  export type QuestionsMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    image?: SortOrder
    typeId?: SortOrder
    teamId?: SortOrder
    correct_answer?: SortOrder
    created_datetime?: SortOrder
    updated_datetime?: SortOrder
  }

  export type QuestionsMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    image?: SortOrder
    typeId?: SortOrder
    teamId?: SortOrder
    correct_answer?: SortOrder
    created_datetime?: SortOrder
    updated_datetime?: SortOrder
  }

  export type QuestionsSumOrderByAggregateInput = {
    id?: SortOrder
    typeId?: SortOrder
    teamId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    roleName?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    roleName?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    roleName?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QuestionsListRelationFilter = {
    every?: QuestionsWhereInput
    some?: QuestionsWhereInput
    none?: QuestionsWhereInput
  }

  export type QuestionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    teamName?: SortOrder
  }

  export type TeamAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    teamName?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    teamName?: SortOrder
  }

  export type TeamSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    email?: SortOrder
    roleId?: SortOrder
    teamId?: SortOrder
    created_datetime?: SortOrder
    updated_datetime?: SortOrder
    active?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    teamId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    email?: SortOrder
    roleId?: SortOrder
    teamId?: SortOrder
    created_datetime?: SortOrder
    updated_datetime?: SortOrder
    active?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    email?: SortOrder
    roleId?: SortOrder
    teamId?: SortOrder
    created_datetime?: SortOrder
    updated_datetime?: SortOrder
    active?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    teamId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type QuestionTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type QuestionTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QuestionTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type QuestionTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type QuestionTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type QuestionsScalarRelationFilter = {
    is?: QuestionsWhereInput
    isNot?: QuestionsWhereInput
  }

  export type UserAnswersCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    answer?: SortOrder
    created_datetime?: SortOrder
    updated_datetime?: SortOrder
  }

  export type UserAnswersAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
  }

  export type UserAnswersMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    answer?: SortOrder
    created_datetime?: SortOrder
    updated_datetime?: SortOrder
  }

  export type UserAnswersMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    answer?: SortOrder
    created_datetime?: SortOrder
    updated_datetime?: SortOrder
  }

  export type UserAnswersSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
  }

  export type QuestionTypeCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<QuestionTypeCreateWithoutQuestionsInput, QuestionTypeUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuestionTypeCreateOrConnectWithoutQuestionsInput
    connect?: QuestionTypeWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<TeamCreateWithoutQuestionsInput, TeamUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutQuestionsInput
    connect?: TeamWhereUniqueInput
  }

  export type UserAnswersCreateNestedManyWithoutQuestionInput = {
    create?: XOR<UserAnswersCreateWithoutQuestionInput, UserAnswersUncheckedCreateWithoutQuestionInput> | UserAnswersCreateWithoutQuestionInput[] | UserAnswersUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserAnswersCreateOrConnectWithoutQuestionInput | UserAnswersCreateOrConnectWithoutQuestionInput[]
    createMany?: UserAnswersCreateManyQuestionInputEnvelope
    connect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
  }

  export type UserAnswersUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<UserAnswersCreateWithoutQuestionInput, UserAnswersUncheckedCreateWithoutQuestionInput> | UserAnswersCreateWithoutQuestionInput[] | UserAnswersUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserAnswersCreateOrConnectWithoutQuestionInput | UserAnswersCreateOrConnectWithoutQuestionInput[]
    createMany?: UserAnswersCreateManyQuestionInputEnvelope
    connect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type QuestionTypeUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<QuestionTypeCreateWithoutQuestionsInput, QuestionTypeUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuestionTypeCreateOrConnectWithoutQuestionsInput
    upsert?: QuestionTypeUpsertWithoutQuestionsInput
    connect?: QuestionTypeWhereUniqueInput
    update?: XOR<XOR<QuestionTypeUpdateToOneWithWhereWithoutQuestionsInput, QuestionTypeUpdateWithoutQuestionsInput>, QuestionTypeUncheckedUpdateWithoutQuestionsInput>
  }

  export type TeamUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<TeamCreateWithoutQuestionsInput, TeamUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutQuestionsInput
    upsert?: TeamUpsertWithoutQuestionsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutQuestionsInput, TeamUpdateWithoutQuestionsInput>, TeamUncheckedUpdateWithoutQuestionsInput>
  }

  export type UserAnswersUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<UserAnswersCreateWithoutQuestionInput, UserAnswersUncheckedCreateWithoutQuestionInput> | UserAnswersCreateWithoutQuestionInput[] | UserAnswersUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserAnswersCreateOrConnectWithoutQuestionInput | UserAnswersCreateOrConnectWithoutQuestionInput[]
    upsert?: UserAnswersUpsertWithWhereUniqueWithoutQuestionInput | UserAnswersUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: UserAnswersCreateManyQuestionInputEnvelope
    set?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    disconnect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    delete?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    connect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    update?: UserAnswersUpdateWithWhereUniqueWithoutQuestionInput | UserAnswersUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: UserAnswersUpdateManyWithWhereWithoutQuestionInput | UserAnswersUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: UserAnswersScalarWhereInput | UserAnswersScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserAnswersUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<UserAnswersCreateWithoutQuestionInput, UserAnswersUncheckedCreateWithoutQuestionInput> | UserAnswersCreateWithoutQuestionInput[] | UserAnswersUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserAnswersCreateOrConnectWithoutQuestionInput | UserAnswersCreateOrConnectWithoutQuestionInput[]
    upsert?: UserAnswersUpsertWithWhereUniqueWithoutQuestionInput | UserAnswersUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: UserAnswersCreateManyQuestionInputEnvelope
    set?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    disconnect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    delete?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    connect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    update?: UserAnswersUpdateWithWhereUniqueWithoutQuestionInput | UserAnswersUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: UserAnswersUpdateManyWithWhereWithoutQuestionInput | UserAnswersUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: UserAnswersScalarWhereInput | UserAnswersScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutTeamInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type QuestionsCreateNestedManyWithoutTeamInput = {
    create?: XOR<QuestionsCreateWithoutTeamInput, QuestionsUncheckedCreateWithoutTeamInput> | QuestionsCreateWithoutTeamInput[] | QuestionsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: QuestionsCreateOrConnectWithoutTeamInput | QuestionsCreateOrConnectWithoutTeamInput[]
    createMany?: QuestionsCreateManyTeamInputEnvelope
    connect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type QuestionsUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<QuestionsCreateWithoutTeamInput, QuestionsUncheckedCreateWithoutTeamInput> | QuestionsCreateWithoutTeamInput[] | QuestionsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: QuestionsCreateOrConnectWithoutTeamInput | QuestionsCreateOrConnectWithoutTeamInput[]
    createMany?: QuestionsCreateManyTeamInputEnvelope
    connect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutTeamNestedInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTeamInput | UserUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTeamInput | UserUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTeamInput | UserUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type QuestionsUpdateManyWithoutTeamNestedInput = {
    create?: XOR<QuestionsCreateWithoutTeamInput, QuestionsUncheckedCreateWithoutTeamInput> | QuestionsCreateWithoutTeamInput[] | QuestionsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: QuestionsCreateOrConnectWithoutTeamInput | QuestionsCreateOrConnectWithoutTeamInput[]
    upsert?: QuestionsUpsertWithWhereUniqueWithoutTeamInput | QuestionsUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: QuestionsCreateManyTeamInputEnvelope
    set?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    disconnect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    delete?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    connect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    update?: QuestionsUpdateWithWhereUniqueWithoutTeamInput | QuestionsUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: QuestionsUpdateManyWithWhereWithoutTeamInput | QuestionsUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: QuestionsScalarWhereInput | QuestionsScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTeamInput | UserUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTeamInput | UserUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTeamInput | UserUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type QuestionsUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<QuestionsCreateWithoutTeamInput, QuestionsUncheckedCreateWithoutTeamInput> | QuestionsCreateWithoutTeamInput[] | QuestionsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: QuestionsCreateOrConnectWithoutTeamInput | QuestionsCreateOrConnectWithoutTeamInput[]
    upsert?: QuestionsUpsertWithWhereUniqueWithoutTeamInput | QuestionsUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: QuestionsCreateManyTeamInputEnvelope
    set?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    disconnect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    delete?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    connect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    update?: QuestionsUpdateWithWhereUniqueWithoutTeamInput | QuestionsUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: QuestionsUpdateManyWithWhereWithoutTeamInput | QuestionsUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: QuestionsScalarWhereInput | QuestionsScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutUsersInput = {
    create?: XOR<TeamCreateWithoutUsersInput, TeamUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutUsersInput
    connect?: TeamWhereUniqueInput
  }

  export type UserAnswersCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAnswersCreateWithoutUserInput, UserAnswersUncheckedCreateWithoutUserInput> | UserAnswersCreateWithoutUserInput[] | UserAnswersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAnswersCreateOrConnectWithoutUserInput | UserAnswersCreateOrConnectWithoutUserInput[]
    createMany?: UserAnswersCreateManyUserInputEnvelope
    connect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
  }

  export type UserAnswersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAnswersCreateWithoutUserInput, UserAnswersUncheckedCreateWithoutUserInput> | UserAnswersCreateWithoutUserInput[] | UserAnswersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAnswersCreateOrConnectWithoutUserInput | UserAnswersCreateOrConnectWithoutUserInput[]
    createMany?: UserAnswersCreateManyUserInputEnvelope
    connect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type TeamUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<TeamCreateWithoutUsersInput, TeamUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutUsersInput
    upsert?: TeamUpsertWithoutUsersInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutUsersInput, TeamUpdateWithoutUsersInput>, TeamUncheckedUpdateWithoutUsersInput>
  }

  export type UserAnswersUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAnswersCreateWithoutUserInput, UserAnswersUncheckedCreateWithoutUserInput> | UserAnswersCreateWithoutUserInput[] | UserAnswersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAnswersCreateOrConnectWithoutUserInput | UserAnswersCreateOrConnectWithoutUserInput[]
    upsert?: UserAnswersUpsertWithWhereUniqueWithoutUserInput | UserAnswersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAnswersCreateManyUserInputEnvelope
    set?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    disconnect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    delete?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    connect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    update?: UserAnswersUpdateWithWhereUniqueWithoutUserInput | UserAnswersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAnswersUpdateManyWithWhereWithoutUserInput | UserAnswersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAnswersScalarWhereInput | UserAnswersScalarWhereInput[]
  }

  export type UserAnswersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAnswersCreateWithoutUserInput, UserAnswersUncheckedCreateWithoutUserInput> | UserAnswersCreateWithoutUserInput[] | UserAnswersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAnswersCreateOrConnectWithoutUserInput | UserAnswersCreateOrConnectWithoutUserInput[]
    upsert?: UserAnswersUpsertWithWhereUniqueWithoutUserInput | UserAnswersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAnswersCreateManyUserInputEnvelope
    set?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    disconnect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    delete?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    connect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    update?: UserAnswersUpdateWithWhereUniqueWithoutUserInput | UserAnswersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAnswersUpdateManyWithWhereWithoutUserInput | UserAnswersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAnswersScalarWhereInput | UserAnswersScalarWhereInput[]
  }

  export type QuestionsCreateNestedManyWithoutTypeInput = {
    create?: XOR<QuestionsCreateWithoutTypeInput, QuestionsUncheckedCreateWithoutTypeInput> | QuestionsCreateWithoutTypeInput[] | QuestionsUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: QuestionsCreateOrConnectWithoutTypeInput | QuestionsCreateOrConnectWithoutTypeInput[]
    createMany?: QuestionsCreateManyTypeInputEnvelope
    connect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
  }

  export type QuestionsUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<QuestionsCreateWithoutTypeInput, QuestionsUncheckedCreateWithoutTypeInput> | QuestionsCreateWithoutTypeInput[] | QuestionsUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: QuestionsCreateOrConnectWithoutTypeInput | QuestionsCreateOrConnectWithoutTypeInput[]
    createMany?: QuestionsCreateManyTypeInputEnvelope
    connect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
  }

  export type QuestionsUpdateManyWithoutTypeNestedInput = {
    create?: XOR<QuestionsCreateWithoutTypeInput, QuestionsUncheckedCreateWithoutTypeInput> | QuestionsCreateWithoutTypeInput[] | QuestionsUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: QuestionsCreateOrConnectWithoutTypeInput | QuestionsCreateOrConnectWithoutTypeInput[]
    upsert?: QuestionsUpsertWithWhereUniqueWithoutTypeInput | QuestionsUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: QuestionsCreateManyTypeInputEnvelope
    set?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    disconnect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    delete?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    connect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    update?: QuestionsUpdateWithWhereUniqueWithoutTypeInput | QuestionsUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: QuestionsUpdateManyWithWhereWithoutTypeInput | QuestionsUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: QuestionsScalarWhereInput | QuestionsScalarWhereInput[]
  }

  export type QuestionsUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<QuestionsCreateWithoutTypeInput, QuestionsUncheckedCreateWithoutTypeInput> | QuestionsCreateWithoutTypeInput[] | QuestionsUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: QuestionsCreateOrConnectWithoutTypeInput | QuestionsCreateOrConnectWithoutTypeInput[]
    upsert?: QuestionsUpsertWithWhereUniqueWithoutTypeInput | QuestionsUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: QuestionsCreateManyTypeInputEnvelope
    set?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    disconnect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    delete?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    connect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    update?: QuestionsUpdateWithWhereUniqueWithoutTypeInput | QuestionsUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: QuestionsUpdateManyWithWhereWithoutTypeInput | QuestionsUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: QuestionsScalarWhereInput | QuestionsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserAnswersInput = {
    create?: XOR<UserCreateWithoutUserAnswersInput, UserUncheckedCreateWithoutUserAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAnswersInput
    connect?: UserWhereUniqueInput
  }

  export type QuestionsCreateNestedOneWithoutUserAnswersInput = {
    create?: XOR<QuestionsCreateWithoutUserAnswersInput, QuestionsUncheckedCreateWithoutUserAnswersInput>
    connectOrCreate?: QuestionsCreateOrConnectWithoutUserAnswersInput
    connect?: QuestionsWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserAnswersNestedInput = {
    create?: XOR<UserCreateWithoutUserAnswersInput, UserUncheckedCreateWithoutUserAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAnswersInput
    upsert?: UserUpsertWithoutUserAnswersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserAnswersInput, UserUpdateWithoutUserAnswersInput>, UserUncheckedUpdateWithoutUserAnswersInput>
  }

  export type QuestionsUpdateOneRequiredWithoutUserAnswersNestedInput = {
    create?: XOR<QuestionsCreateWithoutUserAnswersInput, QuestionsUncheckedCreateWithoutUserAnswersInput>
    connectOrCreate?: QuestionsCreateOrConnectWithoutUserAnswersInput
    upsert?: QuestionsUpsertWithoutUserAnswersInput
    connect?: QuestionsWhereUniqueInput
    update?: XOR<XOR<QuestionsUpdateToOneWithWhereWithoutUserAnswersInput, QuestionsUpdateWithoutUserAnswersInput>, QuestionsUncheckedUpdateWithoutUserAnswersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type QuestionTypeCreateWithoutQuestionsInput = {
    name: string
  }

  export type QuestionTypeUncheckedCreateWithoutQuestionsInput = {
    id?: number
    name: string
  }

  export type QuestionTypeCreateOrConnectWithoutQuestionsInput = {
    where: QuestionTypeWhereUniqueInput
    create: XOR<QuestionTypeCreateWithoutQuestionsInput, QuestionTypeUncheckedCreateWithoutQuestionsInput>
  }

  export type TeamCreateWithoutQuestionsInput = {
    teamName: string
    users?: UserCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutQuestionsInput = {
    id?: number
    teamName: string
    users?: UserUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutQuestionsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutQuestionsInput, TeamUncheckedCreateWithoutQuestionsInput>
  }

  export type UserAnswersCreateWithoutQuestionInput = {
    answer: string
    created_datetime?: Date | string
    updated_datetime?: Date | string
    user: UserCreateNestedOneWithoutUserAnswersInput
  }

  export type UserAnswersUncheckedCreateWithoutQuestionInput = {
    id?: number
    userId: number
    answer: string
    created_datetime?: Date | string
    updated_datetime?: Date | string
  }

  export type UserAnswersCreateOrConnectWithoutQuestionInput = {
    where: UserAnswersWhereUniqueInput
    create: XOR<UserAnswersCreateWithoutQuestionInput, UserAnswersUncheckedCreateWithoutQuestionInput>
  }

  export type UserAnswersCreateManyQuestionInputEnvelope = {
    data: UserAnswersCreateManyQuestionInput | UserAnswersCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type QuestionTypeUpsertWithoutQuestionsInput = {
    update: XOR<QuestionTypeUpdateWithoutQuestionsInput, QuestionTypeUncheckedUpdateWithoutQuestionsInput>
    create: XOR<QuestionTypeCreateWithoutQuestionsInput, QuestionTypeUncheckedCreateWithoutQuestionsInput>
    where?: QuestionTypeWhereInput
  }

  export type QuestionTypeUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: QuestionTypeWhereInput
    data: XOR<QuestionTypeUpdateWithoutQuestionsInput, QuestionTypeUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuestionTypeUpdateWithoutQuestionsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionTypeUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TeamUpsertWithoutQuestionsInput = {
    update: XOR<TeamUpdateWithoutQuestionsInput, TeamUncheckedUpdateWithoutQuestionsInput>
    create: XOR<TeamCreateWithoutQuestionsInput, TeamUncheckedCreateWithoutQuestionsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutQuestionsInput, TeamUncheckedUpdateWithoutQuestionsInput>
  }

  export type TeamUpdateWithoutQuestionsInput = {
    teamName?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamName?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UserAnswersUpsertWithWhereUniqueWithoutQuestionInput = {
    where: UserAnswersWhereUniqueInput
    update: XOR<UserAnswersUpdateWithoutQuestionInput, UserAnswersUncheckedUpdateWithoutQuestionInput>
    create: XOR<UserAnswersCreateWithoutQuestionInput, UserAnswersUncheckedCreateWithoutQuestionInput>
  }

  export type UserAnswersUpdateWithWhereUniqueWithoutQuestionInput = {
    where: UserAnswersWhereUniqueInput
    data: XOR<UserAnswersUpdateWithoutQuestionInput, UserAnswersUncheckedUpdateWithoutQuestionInput>
  }

  export type UserAnswersUpdateManyWithWhereWithoutQuestionInput = {
    where: UserAnswersScalarWhereInput
    data: XOR<UserAnswersUpdateManyMutationInput, UserAnswersUncheckedUpdateManyWithoutQuestionInput>
  }

  export type UserAnswersScalarWhereInput = {
    AND?: UserAnswersScalarWhereInput | UserAnswersScalarWhereInput[]
    OR?: UserAnswersScalarWhereInput[]
    NOT?: UserAnswersScalarWhereInput | UserAnswersScalarWhereInput[]
    id?: IntFilter<"UserAnswers"> | number
    userId?: IntFilter<"UserAnswers"> | number
    questionId?: IntFilter<"UserAnswers"> | number
    answer?: StringFilter<"UserAnswers"> | string
    created_datetime?: DateTimeFilter<"UserAnswers"> | Date | string
    updated_datetime?: DateTimeFilter<"UserAnswers"> | Date | string
  }

  export type UserCreateWithoutRoleInput = {
    username: string
    password: string
    name: string
    email?: string | null
    created_datetime?: Date | string
    updated_datetime?: Date | string
    active?: boolean
    team: TeamCreateNestedOneWithoutUsersInput
    userAnswers?: UserAnswersCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: number
    username: string
    password: string
    name: string
    email?: string | null
    teamId: number
    created_datetime?: Date | string
    updated_datetime?: Date | string
    active?: boolean
    userAnswers?: UserAnswersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    roleId?: IntFilter<"User"> | number
    teamId?: IntFilter<"User"> | number
    created_datetime?: DateTimeFilter<"User"> | Date | string
    updated_datetime?: DateTimeFilter<"User"> | Date | string
    active?: BoolFilter<"User"> | boolean
  }

  export type UserCreateWithoutTeamInput = {
    username: string
    password: string
    name: string
    email?: string | null
    created_datetime?: Date | string
    updated_datetime?: Date | string
    active?: boolean
    role: RoleCreateNestedOneWithoutUsersInput
    userAnswers?: UserAnswersCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeamInput = {
    id?: number
    username: string
    password: string
    name: string
    email?: string | null
    roleId: number
    created_datetime?: Date | string
    updated_datetime?: Date | string
    active?: boolean
    userAnswers?: UserAnswersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeamInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
  }

  export type UserCreateManyTeamInputEnvelope = {
    data: UserCreateManyTeamInput | UserCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type QuestionsCreateWithoutTeamInput = {
    question: string
    options: JsonNullValueInput | InputJsonValue
    image?: string | null
    correct_answer: string
    created_datetime?: Date | string
    updated_datetime?: Date | string
    type: QuestionTypeCreateNestedOneWithoutQuestionsInput
    UserAnswers?: UserAnswersCreateNestedManyWithoutQuestionInput
  }

  export type QuestionsUncheckedCreateWithoutTeamInput = {
    id?: number
    question: string
    options: JsonNullValueInput | InputJsonValue
    image?: string | null
    typeId: number
    correct_answer: string
    created_datetime?: Date | string
    updated_datetime?: Date | string
    UserAnswers?: UserAnswersUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionsCreateOrConnectWithoutTeamInput = {
    where: QuestionsWhereUniqueInput
    create: XOR<QuestionsCreateWithoutTeamInput, QuestionsUncheckedCreateWithoutTeamInput>
  }

  export type QuestionsCreateManyTeamInputEnvelope = {
    data: QuestionsCreateManyTeamInput | QuestionsCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutTeamInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTeamInput, UserUncheckedUpdateWithoutTeamInput>
    create: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTeamInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTeamInput, UserUncheckedUpdateWithoutTeamInput>
  }

  export type UserUpdateManyWithWhereWithoutTeamInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTeamInput>
  }

  export type QuestionsUpsertWithWhereUniqueWithoutTeamInput = {
    where: QuestionsWhereUniqueInput
    update: XOR<QuestionsUpdateWithoutTeamInput, QuestionsUncheckedUpdateWithoutTeamInput>
    create: XOR<QuestionsCreateWithoutTeamInput, QuestionsUncheckedCreateWithoutTeamInput>
  }

  export type QuestionsUpdateWithWhereUniqueWithoutTeamInput = {
    where: QuestionsWhereUniqueInput
    data: XOR<QuestionsUpdateWithoutTeamInput, QuestionsUncheckedUpdateWithoutTeamInput>
  }

  export type QuestionsUpdateManyWithWhereWithoutTeamInput = {
    where: QuestionsScalarWhereInput
    data: XOR<QuestionsUpdateManyMutationInput, QuestionsUncheckedUpdateManyWithoutTeamInput>
  }

  export type QuestionsScalarWhereInput = {
    AND?: QuestionsScalarWhereInput | QuestionsScalarWhereInput[]
    OR?: QuestionsScalarWhereInput[]
    NOT?: QuestionsScalarWhereInput | QuestionsScalarWhereInput[]
    id?: IntFilter<"Questions"> | number
    question?: StringFilter<"Questions"> | string
    options?: JsonFilter<"Questions">
    image?: StringNullableFilter<"Questions"> | string | null
    typeId?: IntFilter<"Questions"> | number
    teamId?: IntFilter<"Questions"> | number
    correct_answer?: StringFilter<"Questions"> | string
    created_datetime?: DateTimeFilter<"Questions"> | Date | string
    updated_datetime?: DateTimeFilter<"Questions"> | Date | string
  }

  export type RoleCreateWithoutUsersInput = {
    roleName: string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    roleName: string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type TeamCreateWithoutUsersInput = {
    teamName: string
    questions?: QuestionsCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutUsersInput = {
    id?: number
    teamName: string
    questions?: QuestionsUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutUsersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutUsersInput, TeamUncheckedCreateWithoutUsersInput>
  }

  export type UserAnswersCreateWithoutUserInput = {
    answer: string
    created_datetime?: Date | string
    updated_datetime?: Date | string
    question: QuestionsCreateNestedOneWithoutUserAnswersInput
  }

  export type UserAnswersUncheckedCreateWithoutUserInput = {
    id?: number
    questionId: number
    answer: string
    created_datetime?: Date | string
    updated_datetime?: Date | string
  }

  export type UserAnswersCreateOrConnectWithoutUserInput = {
    where: UserAnswersWhereUniqueInput
    create: XOR<UserAnswersCreateWithoutUserInput, UserAnswersUncheckedCreateWithoutUserInput>
  }

  export type UserAnswersCreateManyUserInputEnvelope = {
    data: UserAnswersCreateManyUserInput | UserAnswersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    roleName?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleName?: StringFieldUpdateOperationsInput | string
  }

  export type TeamUpsertWithoutUsersInput = {
    update: XOR<TeamUpdateWithoutUsersInput, TeamUncheckedUpdateWithoutUsersInput>
    create: XOR<TeamCreateWithoutUsersInput, TeamUncheckedCreateWithoutUsersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutUsersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutUsersInput, TeamUncheckedUpdateWithoutUsersInput>
  }

  export type TeamUpdateWithoutUsersInput = {
    teamName?: StringFieldUpdateOperationsInput | string
    questions?: QuestionsUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamName?: StringFieldUpdateOperationsInput | string
    questions?: QuestionsUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UserAnswersUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAnswersWhereUniqueInput
    update: XOR<UserAnswersUpdateWithoutUserInput, UserAnswersUncheckedUpdateWithoutUserInput>
    create: XOR<UserAnswersCreateWithoutUserInput, UserAnswersUncheckedCreateWithoutUserInput>
  }

  export type UserAnswersUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAnswersWhereUniqueInput
    data: XOR<UserAnswersUpdateWithoutUserInput, UserAnswersUncheckedUpdateWithoutUserInput>
  }

  export type UserAnswersUpdateManyWithWhereWithoutUserInput = {
    where: UserAnswersScalarWhereInput
    data: XOR<UserAnswersUpdateManyMutationInput, UserAnswersUncheckedUpdateManyWithoutUserInput>
  }

  export type QuestionsCreateWithoutTypeInput = {
    question: string
    options: JsonNullValueInput | InputJsonValue
    image?: string | null
    correct_answer: string
    created_datetime?: Date | string
    updated_datetime?: Date | string
    team: TeamCreateNestedOneWithoutQuestionsInput
    UserAnswers?: UserAnswersCreateNestedManyWithoutQuestionInput
  }

  export type QuestionsUncheckedCreateWithoutTypeInput = {
    id?: number
    question: string
    options: JsonNullValueInput | InputJsonValue
    image?: string | null
    teamId: number
    correct_answer: string
    created_datetime?: Date | string
    updated_datetime?: Date | string
    UserAnswers?: UserAnswersUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionsCreateOrConnectWithoutTypeInput = {
    where: QuestionsWhereUniqueInput
    create: XOR<QuestionsCreateWithoutTypeInput, QuestionsUncheckedCreateWithoutTypeInput>
  }

  export type QuestionsCreateManyTypeInputEnvelope = {
    data: QuestionsCreateManyTypeInput | QuestionsCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type QuestionsUpsertWithWhereUniqueWithoutTypeInput = {
    where: QuestionsWhereUniqueInput
    update: XOR<QuestionsUpdateWithoutTypeInput, QuestionsUncheckedUpdateWithoutTypeInput>
    create: XOR<QuestionsCreateWithoutTypeInput, QuestionsUncheckedCreateWithoutTypeInput>
  }

  export type QuestionsUpdateWithWhereUniqueWithoutTypeInput = {
    where: QuestionsWhereUniqueInput
    data: XOR<QuestionsUpdateWithoutTypeInput, QuestionsUncheckedUpdateWithoutTypeInput>
  }

  export type QuestionsUpdateManyWithWhereWithoutTypeInput = {
    where: QuestionsScalarWhereInput
    data: XOR<QuestionsUpdateManyMutationInput, QuestionsUncheckedUpdateManyWithoutTypeInput>
  }

  export type UserCreateWithoutUserAnswersInput = {
    username: string
    password: string
    name: string
    email?: string | null
    created_datetime?: Date | string
    updated_datetime?: Date | string
    active?: boolean
    role: RoleCreateNestedOneWithoutUsersInput
    team: TeamCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutUserAnswersInput = {
    id?: number
    username: string
    password: string
    name: string
    email?: string | null
    roleId: number
    teamId: number
    created_datetime?: Date | string
    updated_datetime?: Date | string
    active?: boolean
  }

  export type UserCreateOrConnectWithoutUserAnswersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserAnswersInput, UserUncheckedCreateWithoutUserAnswersInput>
  }

  export type QuestionsCreateWithoutUserAnswersInput = {
    question: string
    options: JsonNullValueInput | InputJsonValue
    image?: string | null
    correct_answer: string
    created_datetime?: Date | string
    updated_datetime?: Date | string
    type: QuestionTypeCreateNestedOneWithoutQuestionsInput
    team: TeamCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionsUncheckedCreateWithoutUserAnswersInput = {
    id?: number
    question: string
    options: JsonNullValueInput | InputJsonValue
    image?: string | null
    typeId: number
    teamId: number
    correct_answer: string
    created_datetime?: Date | string
    updated_datetime?: Date | string
  }

  export type QuestionsCreateOrConnectWithoutUserAnswersInput = {
    where: QuestionsWhereUniqueInput
    create: XOR<QuestionsCreateWithoutUserAnswersInput, QuestionsUncheckedCreateWithoutUserAnswersInput>
  }

  export type UserUpsertWithoutUserAnswersInput = {
    update: XOR<UserUpdateWithoutUserAnswersInput, UserUncheckedUpdateWithoutUserAnswersInput>
    create: XOR<UserCreateWithoutUserAnswersInput, UserUncheckedCreateWithoutUserAnswersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserAnswersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserAnswersInput, UserUncheckedUpdateWithoutUserAnswersInput>
  }

  export type UserUpdateWithoutUserAnswersInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    team?: TeamUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutUserAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuestionsUpsertWithoutUserAnswersInput = {
    update: XOR<QuestionsUpdateWithoutUserAnswersInput, QuestionsUncheckedUpdateWithoutUserAnswersInput>
    create: XOR<QuestionsCreateWithoutUserAnswersInput, QuestionsUncheckedCreateWithoutUserAnswersInput>
    where?: QuestionsWhereInput
  }

  export type QuestionsUpdateToOneWithWhereWithoutUserAnswersInput = {
    where?: QuestionsWhereInput
    data: XOR<QuestionsUpdateWithoutUserAnswersInput, QuestionsUncheckedUpdateWithoutUserAnswersInput>
  }

  export type QuestionsUpdateWithoutUserAnswersInput = {
    question?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    image?: NullableStringFieldUpdateOperationsInput | string | null
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: QuestionTypeUpdateOneRequiredWithoutQuestionsNestedInput
    team?: TeamUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionsUncheckedUpdateWithoutUserAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    image?: NullableStringFieldUpdateOperationsInput | string | null
    typeId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswersCreateManyQuestionInput = {
    id?: number
    userId: number
    answer: string
    created_datetime?: Date | string
    updated_datetime?: Date | string
  }

  export type UserAnswersUpdateWithoutQuestionInput = {
    answer?: StringFieldUpdateOperationsInput | string
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserAnswersNestedInput
  }

  export type UserAnswersUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswersUncheckedUpdateManyWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyRoleInput = {
    id?: number
    username: string
    password: string
    name: string
    email?: string | null
    teamId: number
    created_datetime?: Date | string
    updated_datetime?: Date | string
    active?: boolean
  }

  export type UserUpdateWithoutRoleInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    team?: TeamUpdateOneRequiredWithoutUsersNestedInput
    userAnswers?: UserAnswersUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: IntFieldUpdateOperationsInput | number
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    userAnswers?: UserAnswersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: IntFieldUpdateOperationsInput | number
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateManyTeamInput = {
    id?: number
    username: string
    password: string
    name: string
    email?: string | null
    roleId: number
    created_datetime?: Date | string
    updated_datetime?: Date | string
    active?: boolean
  }

  export type QuestionsCreateManyTeamInput = {
    id?: number
    question: string
    options: JsonNullValueInput | InputJsonValue
    image?: string | null
    typeId: number
    correct_answer: string
    created_datetime?: Date | string
    updated_datetime?: Date | string
  }

  export type UserUpdateWithoutTeamInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    userAnswers?: UserAnswersUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    userAnswers?: UserAnswersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuestionsUpdateWithoutTeamInput = {
    question?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    image?: NullableStringFieldUpdateOperationsInput | string | null
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: QuestionTypeUpdateOneRequiredWithoutQuestionsNestedInput
    UserAnswers?: UserAnswersUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionsUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    image?: NullableStringFieldUpdateOperationsInput | string | null
    typeId?: IntFieldUpdateOperationsInput | number
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    UserAnswers?: UserAnswersUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionsUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    image?: NullableStringFieldUpdateOperationsInput | string | null
    typeId?: IntFieldUpdateOperationsInput | number
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswersCreateManyUserInput = {
    id?: number
    questionId: number
    answer: string
    created_datetime?: Date | string
    updated_datetime?: Date | string
  }

  export type UserAnswersUpdateWithoutUserInput = {
    answer?: StringFieldUpdateOperationsInput | string
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionsUpdateOneRequiredWithoutUserAnswersNestedInput
  }

  export type UserAnswersUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswersUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionsCreateManyTypeInput = {
    id?: number
    question: string
    options: JsonNullValueInput | InputJsonValue
    image?: string | null
    teamId: number
    correct_answer: string
    created_datetime?: Date | string
    updated_datetime?: Date | string
  }

  export type QuestionsUpdateWithoutTypeInput = {
    question?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    image?: NullableStringFieldUpdateOperationsInput | string | null
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutQuestionsNestedInput
    UserAnswers?: UserAnswersUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionsUncheckedUpdateWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    image?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: IntFieldUpdateOperationsInput | number
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    UserAnswers?: UserAnswersUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionsUncheckedUpdateManyWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    image?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: IntFieldUpdateOperationsInput | number
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}