
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
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Timesheet
 * 
 */
export type Timesheet = $Result.DefaultSelection<Prisma.$TimesheetPayload>
/**
 * Model TimesheetEntry
 * 
 */
export type TimesheetEntry = $Result.DefaultSelection<Prisma.$TimesheetEntryPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model Leave
 * 
 */
export type Leave = $Result.DefaultSelection<Prisma.$LeavePayload>
/**
 * Model Branch
 * 
 */
export type Branch = $Result.DefaultSelection<Prisma.$BranchPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model AttendanceRequest
 * 
 */
export type AttendanceRequest = $Result.DefaultSelection<Prisma.$AttendanceRequestPayload>
/**
 * Model SalaryStructure
 * 
 */
export type SalaryStructure = $Result.DefaultSelection<Prisma.$SalaryStructurePayload>
/**
 * Model Payroll
 * 
 */
export type Payroll = $Result.DefaultSelection<Prisma.$PayrollPayload>
/**
 * Model PayrollItem
 * 
 */
export type PayrollItem = $Result.DefaultSelection<Prisma.$PayrollItemPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs>;

  /**
   * `prisma.timesheet`: Exposes CRUD operations for the **Timesheet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Timesheets
    * const timesheets = await prisma.timesheet.findMany()
    * ```
    */
  get timesheet(): Prisma.TimesheetDelegate<ExtArgs>;

  /**
   * `prisma.timesheetEntry`: Exposes CRUD operations for the **TimesheetEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimesheetEntries
    * const timesheetEntries = await prisma.timesheetEntry.findMany()
    * ```
    */
  get timesheetEntry(): Prisma.TimesheetEntryDelegate<ExtArgs>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs>;

  /**
   * `prisma.leave`: Exposes CRUD operations for the **Leave** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leaves
    * const leaves = await prisma.leave.findMany()
    * ```
    */
  get leave(): Prisma.LeaveDelegate<ExtArgs>;

  /**
   * `prisma.branch`: Exposes CRUD operations for the **Branch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Branches
    * const branches = await prisma.branch.findMany()
    * ```
    */
  get branch(): Prisma.BranchDelegate<ExtArgs>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs>;

  /**
   * `prisma.attendanceRequest`: Exposes CRUD operations for the **AttendanceRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttendanceRequests
    * const attendanceRequests = await prisma.attendanceRequest.findMany()
    * ```
    */
  get attendanceRequest(): Prisma.AttendanceRequestDelegate<ExtArgs>;

  /**
   * `prisma.salaryStructure`: Exposes CRUD operations for the **SalaryStructure** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalaryStructures
    * const salaryStructures = await prisma.salaryStructure.findMany()
    * ```
    */
  get salaryStructure(): Prisma.SalaryStructureDelegate<ExtArgs>;

  /**
   * `prisma.payroll`: Exposes CRUD operations for the **Payroll** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payrolls
    * const payrolls = await prisma.payroll.findMany()
    * ```
    */
  get payroll(): Prisma.PayrollDelegate<ExtArgs>;

  /**
   * `prisma.payrollItem`: Exposes CRUD operations for the **PayrollItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayrollItems
    * const payrollItems = await prisma.payrollItem.findMany()
    * ```
    */
  get payrollItem(): Prisma.PayrollItemDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Role: 'Role',
    Customer: 'Customer',
    User: 'User',
    Project: 'Project',
    Timesheet: 'Timesheet',
    TimesheetEntry: 'TimesheetEntry',
    Task: 'Task',
    Leave: 'Leave',
    Branch: 'Branch',
    Attendance: 'Attendance',
    AttendanceRequest: 'AttendanceRequest',
    SalaryStructure: 'SalaryStructure',
    Payroll: 'Payroll',
    PayrollItem: 'PayrollItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "role" | "customer" | "user" | "project" | "timesheet" | "timesheetEntry" | "task" | "leave" | "branch" | "attendance" | "attendanceRequest" | "salaryStructure" | "payroll" | "payrollItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
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
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Timesheet: {
        payload: Prisma.$TimesheetPayload<ExtArgs>
        fields: Prisma.TimesheetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimesheetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimesheetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetPayload>
          }
          findFirst: {
            args: Prisma.TimesheetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimesheetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetPayload>
          }
          findMany: {
            args: Prisma.TimesheetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetPayload>[]
          }
          create: {
            args: Prisma.TimesheetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetPayload>
          }
          createMany: {
            args: Prisma.TimesheetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimesheetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetPayload>[]
          }
          delete: {
            args: Prisma.TimesheetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetPayload>
          }
          update: {
            args: Prisma.TimesheetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetPayload>
          }
          deleteMany: {
            args: Prisma.TimesheetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimesheetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TimesheetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetPayload>
          }
          aggregate: {
            args: Prisma.TimesheetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimesheet>
          }
          groupBy: {
            args: Prisma.TimesheetGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimesheetGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimesheetCountArgs<ExtArgs>
            result: $Utils.Optional<TimesheetCountAggregateOutputType> | number
          }
        }
      }
      TimesheetEntry: {
        payload: Prisma.$TimesheetEntryPayload<ExtArgs>
        fields: Prisma.TimesheetEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimesheetEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimesheetEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetEntryPayload>
          }
          findFirst: {
            args: Prisma.TimesheetEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimesheetEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetEntryPayload>
          }
          findMany: {
            args: Prisma.TimesheetEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetEntryPayload>[]
          }
          create: {
            args: Prisma.TimesheetEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetEntryPayload>
          }
          createMany: {
            args: Prisma.TimesheetEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimesheetEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetEntryPayload>[]
          }
          delete: {
            args: Prisma.TimesheetEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetEntryPayload>
          }
          update: {
            args: Prisma.TimesheetEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetEntryPayload>
          }
          deleteMany: {
            args: Prisma.TimesheetEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimesheetEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TimesheetEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetEntryPayload>
          }
          aggregate: {
            args: Prisma.TimesheetEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimesheetEntry>
          }
          groupBy: {
            args: Prisma.TimesheetEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimesheetEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimesheetEntryCountArgs<ExtArgs>
            result: $Utils.Optional<TimesheetEntryCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      Leave: {
        payload: Prisma.$LeavePayload<ExtArgs>
        fields: Prisma.LeaveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          findFirst: {
            args: Prisma.LeaveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          findMany: {
            args: Prisma.LeaveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>[]
          }
          create: {
            args: Prisma.LeaveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          createMany: {
            args: Prisma.LeaveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>[]
          }
          delete: {
            args: Prisma.LeaveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          update: {
            args: Prisma.LeaveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          deleteMany: {
            args: Prisma.LeaveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LeaveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          aggregate: {
            args: Prisma.LeaveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeave>
          }
          groupBy: {
            args: Prisma.LeaveGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaveGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaveCountArgs<ExtArgs>
            result: $Utils.Optional<LeaveCountAggregateOutputType> | number
          }
        }
      }
      Branch: {
        payload: Prisma.$BranchPayload<ExtArgs>
        fields: Prisma.BranchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BranchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BranchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findFirst: {
            args: Prisma.BranchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BranchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findMany: {
            args: Prisma.BranchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          create: {
            args: Prisma.BranchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          createMany: {
            args: Prisma.BranchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BranchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          delete: {
            args: Prisma.BranchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          update: {
            args: Prisma.BranchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          deleteMany: {
            args: Prisma.BranchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BranchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BranchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          aggregate: {
            args: Prisma.BranchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBranch>
          }
          groupBy: {
            args: Prisma.BranchGroupByArgs<ExtArgs>
            result: $Utils.Optional<BranchGroupByOutputType>[]
          }
          count: {
            args: Prisma.BranchCountArgs<ExtArgs>
            result: $Utils.Optional<BranchCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      AttendanceRequest: {
        payload: Prisma.$AttendanceRequestPayload<ExtArgs>
        fields: Prisma.AttendanceRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRequestPayload>
          }
          findFirst: {
            args: Prisma.AttendanceRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRequestPayload>
          }
          findMany: {
            args: Prisma.AttendanceRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRequestPayload>[]
          }
          create: {
            args: Prisma.AttendanceRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRequestPayload>
          }
          createMany: {
            args: Prisma.AttendanceRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRequestPayload>[]
          }
          delete: {
            args: Prisma.AttendanceRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRequestPayload>
          }
          update: {
            args: Prisma.AttendanceRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRequestPayload>
          }
          deleteMany: {
            args: Prisma.AttendanceRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AttendanceRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRequestPayload>
          }
          aggregate: {
            args: Prisma.AttendanceRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendanceRequest>
          }
          groupBy: {
            args: Prisma.AttendanceRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceRequestCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceRequestCountAggregateOutputType> | number
          }
        }
      }
      SalaryStructure: {
        payload: Prisma.$SalaryStructurePayload<ExtArgs>
        fields: Prisma.SalaryStructureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalaryStructureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryStructurePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalaryStructureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryStructurePayload>
          }
          findFirst: {
            args: Prisma.SalaryStructureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryStructurePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalaryStructureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryStructurePayload>
          }
          findMany: {
            args: Prisma.SalaryStructureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryStructurePayload>[]
          }
          create: {
            args: Prisma.SalaryStructureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryStructurePayload>
          }
          createMany: {
            args: Prisma.SalaryStructureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalaryStructureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryStructurePayload>[]
          }
          delete: {
            args: Prisma.SalaryStructureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryStructurePayload>
          }
          update: {
            args: Prisma.SalaryStructureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryStructurePayload>
          }
          deleteMany: {
            args: Prisma.SalaryStructureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalaryStructureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SalaryStructureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryStructurePayload>
          }
          aggregate: {
            args: Prisma.SalaryStructureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalaryStructure>
          }
          groupBy: {
            args: Prisma.SalaryStructureGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalaryStructureGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalaryStructureCountArgs<ExtArgs>
            result: $Utils.Optional<SalaryStructureCountAggregateOutputType> | number
          }
        }
      }
      Payroll: {
        payload: Prisma.$PayrollPayload<ExtArgs>
        fields: Prisma.PayrollFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayrollFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayrollFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          findFirst: {
            args: Prisma.PayrollFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayrollFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          findMany: {
            args: Prisma.PayrollFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>[]
          }
          create: {
            args: Prisma.PayrollCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          createMany: {
            args: Prisma.PayrollCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayrollCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>[]
          }
          delete: {
            args: Prisma.PayrollDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          update: {
            args: Prisma.PayrollUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          deleteMany: {
            args: Prisma.PayrollDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayrollUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PayrollUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          aggregate: {
            args: Prisma.PayrollAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayroll>
          }
          groupBy: {
            args: Prisma.PayrollGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayrollGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayrollCountArgs<ExtArgs>
            result: $Utils.Optional<PayrollCountAggregateOutputType> | number
          }
        }
      }
      PayrollItem: {
        payload: Prisma.$PayrollItemPayload<ExtArgs>
        fields: Prisma.PayrollItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayrollItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayrollItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload>
          }
          findFirst: {
            args: Prisma.PayrollItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayrollItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload>
          }
          findMany: {
            args: Prisma.PayrollItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload>[]
          }
          create: {
            args: Prisma.PayrollItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload>
          }
          createMany: {
            args: Prisma.PayrollItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayrollItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload>[]
          }
          delete: {
            args: Prisma.PayrollItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload>
          }
          update: {
            args: Prisma.PayrollItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload>
          }
          deleteMany: {
            args: Prisma.PayrollItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayrollItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PayrollItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload>
          }
          aggregate: {
            args: Prisma.PayrollItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayrollItem>
          }
          groupBy: {
            args: Prisma.PayrollItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayrollItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayrollItemCountArgs<ExtArgs>
            result: $Utils.Optional<PayrollItemCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    projects: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | CustomerCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    timesheets: number
    leaves: number
    attendance: number
    managedProjects: number
    projectMemberships: number
    assignedTasks: number
    attendanceRequest: number
    payrolls: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timesheets?: boolean | UserCountOutputTypeCountTimesheetsArgs
    leaves?: boolean | UserCountOutputTypeCountLeavesArgs
    attendance?: boolean | UserCountOutputTypeCountAttendanceArgs
    managedProjects?: boolean | UserCountOutputTypeCountManagedProjectsArgs
    projectMemberships?: boolean | UserCountOutputTypeCountProjectMembershipsArgs
    assignedTasks?: boolean | UserCountOutputTypeCountAssignedTasksArgs
    attendanceRequest?: boolean | UserCountOutputTypeCountAttendanceRequestArgs
    payrolls?: boolean | UserCountOutputTypeCountPayrollsArgs
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
  export type UserCountOutputTypeCountTimesheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimesheetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLeavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountManagedProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAttendanceRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPayrollsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    teamMembers: number
    entries: number
    tasks: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teamMembers?: boolean | ProjectCountOutputTypeCountTeamMembersArgs
    entries?: boolean | ProjectCountOutputTypeCountEntriesArgs
    tasks?: boolean | ProjectCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTeamMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimesheetEntryWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type TimesheetCountOutputType
   */

  export type TimesheetCountOutputType = {
    entries: number
  }

  export type TimesheetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | TimesheetCountOutputTypeCountEntriesArgs
  }

  // Custom InputTypes
  /**
   * TimesheetCountOutputType without action
   */
  export type TimesheetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimesheetCountOutputType
     */
    select?: TimesheetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TimesheetCountOutputType without action
   */
  export type TimesheetCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimesheetEntryWhereInput
  }


  /**
   * Count Type BranchCountOutputType
   */

  export type BranchCountOutputType = {
    users: number
  }

  export type BranchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | BranchCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchCountOutputType
     */
    select?: BranchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type PayrollCountOutputType
   */

  export type PayrollCountOutputType = {
    items: number
  }

  export type PayrollCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | PayrollCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * PayrollCountOutputType without action
   */
  export type PayrollCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollCountOutputType
     */
    select?: PayrollCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PayrollCountOutputType without action
   */
  export type PayrollCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    remarks: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    remarks: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    code: number
    name: number
    remarks: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    remarks?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    remarks?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    remarks?: true
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
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    code: string
    name: string
    remarks: string | null
    _count: RoleCountAggregateOutputType | null
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
    code?: boolean
    name?: boolean
    remarks?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    remarks?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    remarks?: boolean
  }

  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      remarks: string | null
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany">>

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
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly id: FieldRef<"Role", 'String'>
    readonly code: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
    readonly remarks: FieldRef<"Role", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    address: string | null
    remarks: string | null
    contactPerson: string | null
    phone: string | null
    email: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    address: string | null
    remarks: string | null
    contactPerson: string | null
    phone: string | null
    email: string | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    code: number
    name: number
    address: number
    remarks: number
    contactPerson: number
    phone: number
    email: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    address?: true
    remarks?: true
    contactPerson?: true
    phone?: true
    email?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    address?: true
    remarks?: true
    contactPerson?: true
    phone?: true
    email?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    address?: true
    remarks?: true
    contactPerson?: true
    phone?: true
    email?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    code: string
    name: string
    address: string | null
    remarks: string | null
    contactPerson: string | null
    phone: string | null
    email: string | null
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    address?: boolean
    remarks?: boolean
    contactPerson?: boolean
    phone?: boolean
    email?: boolean
    projects?: boolean | Customer$projectsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    address?: boolean
    remarks?: boolean
    contactPerson?: boolean
    phone?: boolean
    email?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    address?: boolean
    remarks?: boolean
    contactPerson?: boolean
    phone?: boolean
    email?: boolean
  }

  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | Customer$projectsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      address: string | null
      remarks: string | null
      contactPerson: string | null
      phone: string | null
      email: string | null
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends Customer$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly code: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly remarks: FieldRef<"Customer", 'String'>
    readonly contactPerson: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer.projects
   */
  export type Customer$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    code: string | null
    email: string | null
    password: string | null
    name: string | null
    image: string | null
    roleId: string | null
    branchLegacy: string | null
    branchId: string | null
    phone: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    code: string | null
    email: string | null
    password: string | null
    name: string | null
    image: string | null
    roleId: string | null
    branchLegacy: string | null
    branchId: string | null
    phone: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    code: number
    email: number
    password: number
    name: number
    image: number
    roleId: number
    branchLegacy: number
    branchId: number
    phone: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    code?: true
    email?: true
    password?: true
    name?: true
    image?: true
    roleId?: true
    branchLegacy?: true
    branchId?: true
    phone?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    code?: true
    email?: true
    password?: true
    name?: true
    image?: true
    roleId?: true
    branchLegacy?: true
    branchId?: true
    phone?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    code?: true
    email?: true
    password?: true
    name?: true
    image?: true
    roleId?: true
    branchLegacy?: true
    branchId?: true
    phone?: true
    createdAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    code: string | null
    email: string
    password: string
    name: string | null
    image: string | null
    roleId: string | null
    branchLegacy: string | null
    branchId: string | null
    phone: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
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
    code?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    image?: boolean
    roleId?: boolean
    branchLegacy?: boolean
    branchId?: boolean
    phone?: boolean
    createdAt?: boolean
    role?: boolean | User$roleArgs<ExtArgs>
    branch?: boolean | User$branchArgs<ExtArgs>
    timesheets?: boolean | User$timesheetsArgs<ExtArgs>
    leaves?: boolean | User$leavesArgs<ExtArgs>
    attendance?: boolean | User$attendanceArgs<ExtArgs>
    managedProjects?: boolean | User$managedProjectsArgs<ExtArgs>
    projectMemberships?: boolean | User$projectMembershipsArgs<ExtArgs>
    assignedTasks?: boolean | User$assignedTasksArgs<ExtArgs>
    attendanceRequest?: boolean | User$attendanceRequestArgs<ExtArgs>
    salaryStructure?: boolean | User$salaryStructureArgs<ExtArgs>
    payrolls?: boolean | User$payrollsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    image?: boolean
    roleId?: boolean
    branchLegacy?: boolean
    branchId?: boolean
    phone?: boolean
    createdAt?: boolean
    role?: boolean | User$roleArgs<ExtArgs>
    branch?: boolean | User$branchArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    code?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    image?: boolean
    roleId?: boolean
    branchLegacy?: boolean
    branchId?: boolean
    phone?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | User$roleArgs<ExtArgs>
    branch?: boolean | User$branchArgs<ExtArgs>
    timesheets?: boolean | User$timesheetsArgs<ExtArgs>
    leaves?: boolean | User$leavesArgs<ExtArgs>
    attendance?: boolean | User$attendanceArgs<ExtArgs>
    managedProjects?: boolean | User$managedProjectsArgs<ExtArgs>
    projectMemberships?: boolean | User$projectMembershipsArgs<ExtArgs>
    assignedTasks?: boolean | User$assignedTasksArgs<ExtArgs>
    attendanceRequest?: boolean | User$attendanceRequestArgs<ExtArgs>
    salaryStructure?: boolean | User$salaryStructureArgs<ExtArgs>
    payrolls?: boolean | User$payrollsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | User$roleArgs<ExtArgs>
    branch?: boolean | User$branchArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs> | null
      branch: Prisma.$BranchPayload<ExtArgs> | null
      timesheets: Prisma.$TimesheetPayload<ExtArgs>[]
      leaves: Prisma.$LeavePayload<ExtArgs>[]
      attendance: Prisma.$AttendancePayload<ExtArgs>[]
      managedProjects: Prisma.$ProjectPayload<ExtArgs>[]
      projectMemberships: Prisma.$ProjectPayload<ExtArgs>[]
      assignedTasks: Prisma.$TaskPayload<ExtArgs>[]
      attendanceRequest: Prisma.$AttendanceRequestPayload<ExtArgs>[]
      salaryStructure: Prisma.$SalaryStructurePayload<ExtArgs> | null
      payrolls: Prisma.$PayrollPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string | null
      email: string
      password: string
      name: string | null
      image: string | null
      roleId: string | null
      branchLegacy: string | null
      branchId: string | null
      phone: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends User$roleArgs<ExtArgs> = {}>(args?: Subset<T, User$roleArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    branch<T extends User$branchArgs<ExtArgs> = {}>(args?: Subset<T, User$branchArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    timesheets<T extends User$timesheetsArgs<ExtArgs> = {}>(args?: Subset<T, User$timesheetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "findMany"> | Null>
    leaves<T extends User$leavesArgs<ExtArgs> = {}>(args?: Subset<T, User$leavesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findMany"> | Null>
    attendance<T extends User$attendanceArgs<ExtArgs> = {}>(args?: Subset<T, User$attendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany"> | Null>
    managedProjects<T extends User$managedProjectsArgs<ExtArgs> = {}>(args?: Subset<T, User$managedProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany"> | Null>
    projectMemberships<T extends User$projectMembershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectMembershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany"> | Null>
    assignedTasks<T extends User$assignedTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
    attendanceRequest<T extends User$attendanceRequestArgs<ExtArgs> = {}>(args?: Subset<T, User$attendanceRequestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceRequestPayload<ExtArgs>, T, "findMany"> | Null>
    salaryStructure<T extends User$salaryStructureArgs<ExtArgs> = {}>(args?: Subset<T, User$salaryStructureArgs<ExtArgs>>): Prisma__SalaryStructureClient<$Result.GetResult<Prisma.$SalaryStructurePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    payrolls<T extends User$payrollsArgs<ExtArgs> = {}>(args?: Subset<T, User$payrollsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly code: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly roleId: FieldRef<"User", 'String'>
    readonly branchLegacy: FieldRef<"User", 'String'>
    readonly branchId: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
  }

  /**
   * User.role
   */
  export type User$roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
  }

  /**
   * User.branch
   */
  export type User$branchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
  }

  /**
   * User.timesheets
   */
  export type User$timesheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetInclude<ExtArgs> | null
    where?: TimesheetWhereInput
    orderBy?: TimesheetOrderByWithRelationInput | TimesheetOrderByWithRelationInput[]
    cursor?: TimesheetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimesheetScalarFieldEnum | TimesheetScalarFieldEnum[]
  }

  /**
   * User.leaves
   */
  export type User$leavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    where?: LeaveWhereInput
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    cursor?: LeaveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[]
  }

  /**
   * User.attendance
   */
  export type User$attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * User.managedProjects
   */
  export type User$managedProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.projectMemberships
   */
  export type User$projectMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.assignedTasks
   */
  export type User$assignedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.attendanceRequest
   */
  export type User$attendanceRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRequest
     */
    select?: AttendanceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRequestInclude<ExtArgs> | null
    where?: AttendanceRequestWhereInput
    orderBy?: AttendanceRequestOrderByWithRelationInput | AttendanceRequestOrderByWithRelationInput[]
    cursor?: AttendanceRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceRequestScalarFieldEnum | AttendanceRequestScalarFieldEnum[]
  }

  /**
   * User.salaryStructure
   */
  export type User$salaryStructureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryStructure
     */
    select?: SalaryStructureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryStructureInclude<ExtArgs> | null
    where?: SalaryStructureWhereInput
  }

  /**
   * User.payrolls
   */
  export type User$payrollsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    where?: PayrollWhereInput
    orderBy?: PayrollOrderByWithRelationInput | PayrollOrderByWithRelationInput[]
    cursor?: PayrollWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayrollScalarFieldEnum | PayrollScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    description: string | null
    isActive: boolean | null
    customerId: string | null
    managerId: string | null
    remarks: string | null
    startDate: Date | null
    endDate: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    description: string | null
    isActive: boolean | null
    customerId: string | null
    managerId: string | null
    remarks: string | null
    startDate: Date | null
    endDate: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    code: number
    name: number
    description: number
    isActive: number
    customerId: number
    managerId: number
    remarks: number
    startDate: number
    endDate: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    isActive?: true
    customerId?: true
    managerId?: true
    remarks?: true
    startDate?: true
    endDate?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    isActive?: true
    customerId?: true
    managerId?: true
    remarks?: true
    startDate?: true
    endDate?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    isActive?: true
    customerId?: true
    managerId?: true
    remarks?: true
    startDate?: true
    endDate?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    code: string
    name: string
    description: string | null
    isActive: boolean
    customerId: string | null
    managerId: string | null
    remarks: string | null
    startDate: Date | null
    endDate: Date | null
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    customerId?: boolean
    managerId?: boolean
    remarks?: boolean
    startDate?: boolean
    endDate?: boolean
    customer?: boolean | Project$customerArgs<ExtArgs>
    manager?: boolean | Project$managerArgs<ExtArgs>
    teamMembers?: boolean | Project$teamMembersArgs<ExtArgs>
    entries?: boolean | Project$entriesArgs<ExtArgs>
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    customerId?: boolean
    managerId?: boolean
    remarks?: boolean
    startDate?: boolean
    endDate?: boolean
    customer?: boolean | Project$customerArgs<ExtArgs>
    manager?: boolean | Project$managerArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    customerId?: boolean
    managerId?: boolean
    remarks?: boolean
    startDate?: boolean
    endDate?: boolean
  }

  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Project$customerArgs<ExtArgs>
    manager?: boolean | Project$managerArgs<ExtArgs>
    teamMembers?: boolean | Project$teamMembersArgs<ExtArgs>
    entries?: boolean | Project$entriesArgs<ExtArgs>
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Project$customerArgs<ExtArgs>
    manager?: boolean | Project$managerArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs> | null
      manager: Prisma.$UserPayload<ExtArgs> | null
      teamMembers: Prisma.$UserPayload<ExtArgs>[]
      entries: Prisma.$TimesheetEntryPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      description: string | null
      isActive: boolean
      customerId: string | null
      managerId: string | null
      remarks: string | null
      startDate: Date | null
      endDate: Date | null
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends Project$customerArgs<ExtArgs> = {}>(args?: Subset<T, Project$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    manager<T extends Project$managerArgs<ExtArgs> = {}>(args?: Subset<T, Project$managerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    teamMembers<T extends Project$teamMembersArgs<ExtArgs> = {}>(args?: Subset<T, Project$teamMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    entries<T extends Project$entriesArgs<ExtArgs> = {}>(args?: Subset<T, Project$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimesheetEntryPayload<ExtArgs>, T, "findMany"> | Null>
    tasks<T extends Project$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Project$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly code: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly isActive: FieldRef<"Project", 'Boolean'>
    readonly customerId: FieldRef<"Project", 'String'>
    readonly managerId: FieldRef<"Project", 'String'>
    readonly remarks: FieldRef<"Project", 'String'>
    readonly startDate: FieldRef<"Project", 'DateTime'>
    readonly endDate: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
  }

  /**
   * Project.customer
   */
  export type Project$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * Project.manager
   */
  export type Project$managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Project.teamMembers
   */
  export type Project$teamMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
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
   * Project.entries
   */
  export type Project$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimesheetEntry
     */
    select?: TimesheetEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetEntryInclude<ExtArgs> | null
    where?: TimesheetEntryWhereInput
    orderBy?: TimesheetEntryOrderByWithRelationInput | TimesheetEntryOrderByWithRelationInput[]
    cursor?: TimesheetEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimesheetEntryScalarFieldEnum | TimesheetEntryScalarFieldEnum[]
  }

  /**
   * Project.tasks
   */
  export type Project$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Timesheet
   */

  export type AggregateTimesheet = {
    _count: TimesheetCountAggregateOutputType | null
    _avg: TimesheetAvgAggregateOutputType | null
    _sum: TimesheetSumAggregateOutputType | null
    _min: TimesheetMinAggregateOutputType | null
    _max: TimesheetMaxAggregateOutputType | null
  }

  export type TimesheetAvgAggregateOutputType = {
    totalHours: number | null
  }

  export type TimesheetSumAggregateOutputType = {
    totalHours: number | null
  }

  export type TimesheetMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    status: string | null
    totalHours: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TimesheetMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    status: string | null
    totalHours: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TimesheetCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    status: number
    totalHours: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TimesheetAvgAggregateInputType = {
    totalHours?: true
  }

  export type TimesheetSumAggregateInputType = {
    totalHours?: true
  }

  export type TimesheetMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    status?: true
    totalHours?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TimesheetMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    status?: true
    totalHours?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TimesheetCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    status?: true
    totalHours?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TimesheetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timesheet to aggregate.
     */
    where?: TimesheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timesheets to fetch.
     */
    orderBy?: TimesheetOrderByWithRelationInput | TimesheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimesheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timesheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timesheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Timesheets
    **/
    _count?: true | TimesheetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimesheetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimesheetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimesheetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimesheetMaxAggregateInputType
  }

  export type GetTimesheetAggregateType<T extends TimesheetAggregateArgs> = {
        [P in keyof T & keyof AggregateTimesheet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimesheet[P]>
      : GetScalarType<T[P], AggregateTimesheet[P]>
  }




  export type TimesheetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimesheetWhereInput
    orderBy?: TimesheetOrderByWithAggregationInput | TimesheetOrderByWithAggregationInput[]
    by: TimesheetScalarFieldEnum[] | TimesheetScalarFieldEnum
    having?: TimesheetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimesheetCountAggregateInputType | true
    _avg?: TimesheetAvgAggregateInputType
    _sum?: TimesheetSumAggregateInputType
    _min?: TimesheetMinAggregateInputType
    _max?: TimesheetMaxAggregateInputType
  }

  export type TimesheetGroupByOutputType = {
    id: string
    userId: string
    date: Date
    status: string
    totalHours: number
    createdAt: Date
    updatedAt: Date
    _count: TimesheetCountAggregateOutputType | null
    _avg: TimesheetAvgAggregateOutputType | null
    _sum: TimesheetSumAggregateOutputType | null
    _min: TimesheetMinAggregateOutputType | null
    _max: TimesheetMaxAggregateOutputType | null
  }

  type GetTimesheetGroupByPayload<T extends TimesheetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimesheetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimesheetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimesheetGroupByOutputType[P]>
            : GetScalarType<T[P], TimesheetGroupByOutputType[P]>
        }
      >
    >


  export type TimesheetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    status?: boolean
    totalHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    entries?: boolean | Timesheet$entriesArgs<ExtArgs>
    _count?: boolean | TimesheetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timesheet"]>

  export type TimesheetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    status?: boolean
    totalHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timesheet"]>

  export type TimesheetSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    status?: boolean
    totalHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TimesheetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    entries?: boolean | Timesheet$entriesArgs<ExtArgs>
    _count?: boolean | TimesheetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TimesheetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TimesheetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Timesheet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      entries: Prisma.$TimesheetEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      status: string
      totalHours: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["timesheet"]>
    composites: {}
  }

  type TimesheetGetPayload<S extends boolean | null | undefined | TimesheetDefaultArgs> = $Result.GetResult<Prisma.$TimesheetPayload, S>

  type TimesheetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TimesheetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TimesheetCountAggregateInputType | true
    }

  export interface TimesheetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Timesheet'], meta: { name: 'Timesheet' } }
    /**
     * Find zero or one Timesheet that matches the filter.
     * @param {TimesheetFindUniqueArgs} args - Arguments to find a Timesheet
     * @example
     * // Get one Timesheet
     * const timesheet = await prisma.timesheet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimesheetFindUniqueArgs>(args: SelectSubset<T, TimesheetFindUniqueArgs<ExtArgs>>): Prisma__TimesheetClient<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Timesheet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TimesheetFindUniqueOrThrowArgs} args - Arguments to find a Timesheet
     * @example
     * // Get one Timesheet
     * const timesheet = await prisma.timesheet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimesheetFindUniqueOrThrowArgs>(args: SelectSubset<T, TimesheetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimesheetClient<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Timesheet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetFindFirstArgs} args - Arguments to find a Timesheet
     * @example
     * // Get one Timesheet
     * const timesheet = await prisma.timesheet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimesheetFindFirstArgs>(args?: SelectSubset<T, TimesheetFindFirstArgs<ExtArgs>>): Prisma__TimesheetClient<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Timesheet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetFindFirstOrThrowArgs} args - Arguments to find a Timesheet
     * @example
     * // Get one Timesheet
     * const timesheet = await prisma.timesheet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimesheetFindFirstOrThrowArgs>(args?: SelectSubset<T, TimesheetFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimesheetClient<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Timesheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Timesheets
     * const timesheets = await prisma.timesheet.findMany()
     * 
     * // Get first 10 Timesheets
     * const timesheets = await prisma.timesheet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timesheetWithIdOnly = await prisma.timesheet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimesheetFindManyArgs>(args?: SelectSubset<T, TimesheetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Timesheet.
     * @param {TimesheetCreateArgs} args - Arguments to create a Timesheet.
     * @example
     * // Create one Timesheet
     * const Timesheet = await prisma.timesheet.create({
     *   data: {
     *     // ... data to create a Timesheet
     *   }
     * })
     * 
     */
    create<T extends TimesheetCreateArgs>(args: SelectSubset<T, TimesheetCreateArgs<ExtArgs>>): Prisma__TimesheetClient<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Timesheets.
     * @param {TimesheetCreateManyArgs} args - Arguments to create many Timesheets.
     * @example
     * // Create many Timesheets
     * const timesheet = await prisma.timesheet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimesheetCreateManyArgs>(args?: SelectSubset<T, TimesheetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Timesheets and returns the data saved in the database.
     * @param {TimesheetCreateManyAndReturnArgs} args - Arguments to create many Timesheets.
     * @example
     * // Create many Timesheets
     * const timesheet = await prisma.timesheet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Timesheets and only return the `id`
     * const timesheetWithIdOnly = await prisma.timesheet.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimesheetCreateManyAndReturnArgs>(args?: SelectSubset<T, TimesheetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Timesheet.
     * @param {TimesheetDeleteArgs} args - Arguments to delete one Timesheet.
     * @example
     * // Delete one Timesheet
     * const Timesheet = await prisma.timesheet.delete({
     *   where: {
     *     // ... filter to delete one Timesheet
     *   }
     * })
     * 
     */
    delete<T extends TimesheetDeleteArgs>(args: SelectSubset<T, TimesheetDeleteArgs<ExtArgs>>): Prisma__TimesheetClient<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Timesheet.
     * @param {TimesheetUpdateArgs} args - Arguments to update one Timesheet.
     * @example
     * // Update one Timesheet
     * const timesheet = await prisma.timesheet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimesheetUpdateArgs>(args: SelectSubset<T, TimesheetUpdateArgs<ExtArgs>>): Prisma__TimesheetClient<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Timesheets.
     * @param {TimesheetDeleteManyArgs} args - Arguments to filter Timesheets to delete.
     * @example
     * // Delete a few Timesheets
     * const { count } = await prisma.timesheet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimesheetDeleteManyArgs>(args?: SelectSubset<T, TimesheetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timesheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Timesheets
     * const timesheet = await prisma.timesheet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimesheetUpdateManyArgs>(args: SelectSubset<T, TimesheetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Timesheet.
     * @param {TimesheetUpsertArgs} args - Arguments to update or create a Timesheet.
     * @example
     * // Update or create a Timesheet
     * const timesheet = await prisma.timesheet.upsert({
     *   create: {
     *     // ... data to create a Timesheet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Timesheet we want to update
     *   }
     * })
     */
    upsert<T extends TimesheetUpsertArgs>(args: SelectSubset<T, TimesheetUpsertArgs<ExtArgs>>): Prisma__TimesheetClient<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Timesheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetCountArgs} args - Arguments to filter Timesheets to count.
     * @example
     * // Count the number of Timesheets
     * const count = await prisma.timesheet.count({
     *   where: {
     *     // ... the filter for the Timesheets we want to count
     *   }
     * })
    **/
    count<T extends TimesheetCountArgs>(
      args?: Subset<T, TimesheetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimesheetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Timesheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimesheetAggregateArgs>(args: Subset<T, TimesheetAggregateArgs>): Prisma.PrismaPromise<GetTimesheetAggregateType<T>>

    /**
     * Group by Timesheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetGroupByArgs} args - Group by arguments.
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
      T extends TimesheetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimesheetGroupByArgs['orderBy'] }
        : { orderBy?: TimesheetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimesheetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimesheetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Timesheet model
   */
  readonly fields: TimesheetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Timesheet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimesheetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    entries<T extends Timesheet$entriesArgs<ExtArgs> = {}>(args?: Subset<T, Timesheet$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimesheetEntryPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Timesheet model
   */ 
  interface TimesheetFieldRefs {
    readonly id: FieldRef<"Timesheet", 'String'>
    readonly userId: FieldRef<"Timesheet", 'String'>
    readonly date: FieldRef<"Timesheet", 'DateTime'>
    readonly status: FieldRef<"Timesheet", 'String'>
    readonly totalHours: FieldRef<"Timesheet", 'Float'>
    readonly createdAt: FieldRef<"Timesheet", 'DateTime'>
    readonly updatedAt: FieldRef<"Timesheet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Timesheet findUnique
   */
  export type TimesheetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetInclude<ExtArgs> | null
    /**
     * Filter, which Timesheet to fetch.
     */
    where: TimesheetWhereUniqueInput
  }

  /**
   * Timesheet findUniqueOrThrow
   */
  export type TimesheetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetInclude<ExtArgs> | null
    /**
     * Filter, which Timesheet to fetch.
     */
    where: TimesheetWhereUniqueInput
  }

  /**
   * Timesheet findFirst
   */
  export type TimesheetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetInclude<ExtArgs> | null
    /**
     * Filter, which Timesheet to fetch.
     */
    where?: TimesheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timesheets to fetch.
     */
    orderBy?: TimesheetOrderByWithRelationInput | TimesheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timesheets.
     */
    cursor?: TimesheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timesheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timesheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timesheets.
     */
    distinct?: TimesheetScalarFieldEnum | TimesheetScalarFieldEnum[]
  }

  /**
   * Timesheet findFirstOrThrow
   */
  export type TimesheetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetInclude<ExtArgs> | null
    /**
     * Filter, which Timesheet to fetch.
     */
    where?: TimesheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timesheets to fetch.
     */
    orderBy?: TimesheetOrderByWithRelationInput | TimesheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timesheets.
     */
    cursor?: TimesheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timesheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timesheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timesheets.
     */
    distinct?: TimesheetScalarFieldEnum | TimesheetScalarFieldEnum[]
  }

  /**
   * Timesheet findMany
   */
  export type TimesheetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetInclude<ExtArgs> | null
    /**
     * Filter, which Timesheets to fetch.
     */
    where?: TimesheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timesheets to fetch.
     */
    orderBy?: TimesheetOrderByWithRelationInput | TimesheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Timesheets.
     */
    cursor?: TimesheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timesheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timesheets.
     */
    skip?: number
    distinct?: TimesheetScalarFieldEnum | TimesheetScalarFieldEnum[]
  }

  /**
   * Timesheet create
   */
  export type TimesheetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetInclude<ExtArgs> | null
    /**
     * The data needed to create a Timesheet.
     */
    data: XOR<TimesheetCreateInput, TimesheetUncheckedCreateInput>
  }

  /**
   * Timesheet createMany
   */
  export type TimesheetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Timesheets.
     */
    data: TimesheetCreateManyInput | TimesheetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Timesheet createManyAndReturn
   */
  export type TimesheetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Timesheets.
     */
    data: TimesheetCreateManyInput | TimesheetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Timesheet update
   */
  export type TimesheetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetInclude<ExtArgs> | null
    /**
     * The data needed to update a Timesheet.
     */
    data: XOR<TimesheetUpdateInput, TimesheetUncheckedUpdateInput>
    /**
     * Choose, which Timesheet to update.
     */
    where: TimesheetWhereUniqueInput
  }

  /**
   * Timesheet updateMany
   */
  export type TimesheetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Timesheets.
     */
    data: XOR<TimesheetUpdateManyMutationInput, TimesheetUncheckedUpdateManyInput>
    /**
     * Filter which Timesheets to update
     */
    where?: TimesheetWhereInput
  }

  /**
   * Timesheet upsert
   */
  export type TimesheetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetInclude<ExtArgs> | null
    /**
     * The filter to search for the Timesheet to update in case it exists.
     */
    where: TimesheetWhereUniqueInput
    /**
     * In case the Timesheet found by the `where` argument doesn't exist, create a new Timesheet with this data.
     */
    create: XOR<TimesheetCreateInput, TimesheetUncheckedCreateInput>
    /**
     * In case the Timesheet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimesheetUpdateInput, TimesheetUncheckedUpdateInput>
  }

  /**
   * Timesheet delete
   */
  export type TimesheetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetInclude<ExtArgs> | null
    /**
     * Filter which Timesheet to delete.
     */
    where: TimesheetWhereUniqueInput
  }

  /**
   * Timesheet deleteMany
   */
  export type TimesheetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timesheets to delete
     */
    where?: TimesheetWhereInput
  }

  /**
   * Timesheet.entries
   */
  export type Timesheet$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimesheetEntry
     */
    select?: TimesheetEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetEntryInclude<ExtArgs> | null
    where?: TimesheetEntryWhereInput
    orderBy?: TimesheetEntryOrderByWithRelationInput | TimesheetEntryOrderByWithRelationInput[]
    cursor?: TimesheetEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimesheetEntryScalarFieldEnum | TimesheetEntryScalarFieldEnum[]
  }

  /**
   * Timesheet without action
   */
  export type TimesheetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetInclude<ExtArgs> | null
  }


  /**
   * Model TimesheetEntry
   */

  export type AggregateTimesheetEntry = {
    _count: TimesheetEntryCountAggregateOutputType | null
    _avg: TimesheetEntryAvgAggregateOutputType | null
    _sum: TimesheetEntrySumAggregateOutputType | null
    _min: TimesheetEntryMinAggregateOutputType | null
    _max: TimesheetEntryMaxAggregateOutputType | null
  }

  export type TimesheetEntryAvgAggregateOutputType = {
    hours: number | null
  }

  export type TimesheetEntrySumAggregateOutputType = {
    hours: number | null
  }

  export type TimesheetEntryMinAggregateOutputType = {
    id: string | null
    timesheetId: string | null
    projectId: string | null
    taskId: string | null
    activity: string | null
    location: string | null
    description: string | null
    hours: number | null
  }

  export type TimesheetEntryMaxAggregateOutputType = {
    id: string | null
    timesheetId: string | null
    projectId: string | null
    taskId: string | null
    activity: string | null
    location: string | null
    description: string | null
    hours: number | null
  }

  export type TimesheetEntryCountAggregateOutputType = {
    id: number
    timesheetId: number
    projectId: number
    taskId: number
    activity: number
    location: number
    description: number
    hours: number
    _all: number
  }


  export type TimesheetEntryAvgAggregateInputType = {
    hours?: true
  }

  export type TimesheetEntrySumAggregateInputType = {
    hours?: true
  }

  export type TimesheetEntryMinAggregateInputType = {
    id?: true
    timesheetId?: true
    projectId?: true
    taskId?: true
    activity?: true
    location?: true
    description?: true
    hours?: true
  }

  export type TimesheetEntryMaxAggregateInputType = {
    id?: true
    timesheetId?: true
    projectId?: true
    taskId?: true
    activity?: true
    location?: true
    description?: true
    hours?: true
  }

  export type TimesheetEntryCountAggregateInputType = {
    id?: true
    timesheetId?: true
    projectId?: true
    taskId?: true
    activity?: true
    location?: true
    description?: true
    hours?: true
    _all?: true
  }

  export type TimesheetEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimesheetEntry to aggregate.
     */
    where?: TimesheetEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimesheetEntries to fetch.
     */
    orderBy?: TimesheetEntryOrderByWithRelationInput | TimesheetEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimesheetEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimesheetEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimesheetEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimesheetEntries
    **/
    _count?: true | TimesheetEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimesheetEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimesheetEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimesheetEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimesheetEntryMaxAggregateInputType
  }

  export type GetTimesheetEntryAggregateType<T extends TimesheetEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateTimesheetEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimesheetEntry[P]>
      : GetScalarType<T[P], AggregateTimesheetEntry[P]>
  }




  export type TimesheetEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimesheetEntryWhereInput
    orderBy?: TimesheetEntryOrderByWithAggregationInput | TimesheetEntryOrderByWithAggregationInput[]
    by: TimesheetEntryScalarFieldEnum[] | TimesheetEntryScalarFieldEnum
    having?: TimesheetEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimesheetEntryCountAggregateInputType | true
    _avg?: TimesheetEntryAvgAggregateInputType
    _sum?: TimesheetEntrySumAggregateInputType
    _min?: TimesheetEntryMinAggregateInputType
    _max?: TimesheetEntryMaxAggregateInputType
  }

  export type TimesheetEntryGroupByOutputType = {
    id: string
    timesheetId: string
    projectId: string
    taskId: string | null
    activity: string | null
    location: string | null
    description: string
    hours: number
    _count: TimesheetEntryCountAggregateOutputType | null
    _avg: TimesheetEntryAvgAggregateOutputType | null
    _sum: TimesheetEntrySumAggregateOutputType | null
    _min: TimesheetEntryMinAggregateOutputType | null
    _max: TimesheetEntryMaxAggregateOutputType | null
  }

  type GetTimesheetEntryGroupByPayload<T extends TimesheetEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimesheetEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimesheetEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimesheetEntryGroupByOutputType[P]>
            : GetScalarType<T[P], TimesheetEntryGroupByOutputType[P]>
        }
      >
    >


  export type TimesheetEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timesheetId?: boolean
    projectId?: boolean
    taskId?: boolean
    activity?: boolean
    location?: boolean
    description?: boolean
    hours?: boolean
    timesheet?: boolean | TimesheetDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timesheetEntry"]>

  export type TimesheetEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timesheetId?: boolean
    projectId?: boolean
    taskId?: boolean
    activity?: boolean
    location?: boolean
    description?: boolean
    hours?: boolean
    timesheet?: boolean | TimesheetDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timesheetEntry"]>

  export type TimesheetEntrySelectScalar = {
    id?: boolean
    timesheetId?: boolean
    projectId?: boolean
    taskId?: boolean
    activity?: boolean
    location?: boolean
    description?: boolean
    hours?: boolean
  }

  export type TimesheetEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timesheet?: boolean | TimesheetDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type TimesheetEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timesheet?: boolean | TimesheetDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $TimesheetEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimesheetEntry"
    objects: {
      timesheet: Prisma.$TimesheetPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timesheetId: string
      projectId: string
      taskId: string | null
      activity: string | null
      location: string | null
      description: string
      hours: number
    }, ExtArgs["result"]["timesheetEntry"]>
    composites: {}
  }

  type TimesheetEntryGetPayload<S extends boolean | null | undefined | TimesheetEntryDefaultArgs> = $Result.GetResult<Prisma.$TimesheetEntryPayload, S>

  type TimesheetEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TimesheetEntryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TimesheetEntryCountAggregateInputType | true
    }

  export interface TimesheetEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimesheetEntry'], meta: { name: 'TimesheetEntry' } }
    /**
     * Find zero or one TimesheetEntry that matches the filter.
     * @param {TimesheetEntryFindUniqueArgs} args - Arguments to find a TimesheetEntry
     * @example
     * // Get one TimesheetEntry
     * const timesheetEntry = await prisma.timesheetEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimesheetEntryFindUniqueArgs>(args: SelectSubset<T, TimesheetEntryFindUniqueArgs<ExtArgs>>): Prisma__TimesheetEntryClient<$Result.GetResult<Prisma.$TimesheetEntryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TimesheetEntry that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TimesheetEntryFindUniqueOrThrowArgs} args - Arguments to find a TimesheetEntry
     * @example
     * // Get one TimesheetEntry
     * const timesheetEntry = await prisma.timesheetEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimesheetEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, TimesheetEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimesheetEntryClient<$Result.GetResult<Prisma.$TimesheetEntryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TimesheetEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetEntryFindFirstArgs} args - Arguments to find a TimesheetEntry
     * @example
     * // Get one TimesheetEntry
     * const timesheetEntry = await prisma.timesheetEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimesheetEntryFindFirstArgs>(args?: SelectSubset<T, TimesheetEntryFindFirstArgs<ExtArgs>>): Prisma__TimesheetEntryClient<$Result.GetResult<Prisma.$TimesheetEntryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TimesheetEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetEntryFindFirstOrThrowArgs} args - Arguments to find a TimesheetEntry
     * @example
     * // Get one TimesheetEntry
     * const timesheetEntry = await prisma.timesheetEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimesheetEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, TimesheetEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimesheetEntryClient<$Result.GetResult<Prisma.$TimesheetEntryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TimesheetEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimesheetEntries
     * const timesheetEntries = await prisma.timesheetEntry.findMany()
     * 
     * // Get first 10 TimesheetEntries
     * const timesheetEntries = await prisma.timesheetEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timesheetEntryWithIdOnly = await prisma.timesheetEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimesheetEntryFindManyArgs>(args?: SelectSubset<T, TimesheetEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimesheetEntryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TimesheetEntry.
     * @param {TimesheetEntryCreateArgs} args - Arguments to create a TimesheetEntry.
     * @example
     * // Create one TimesheetEntry
     * const TimesheetEntry = await prisma.timesheetEntry.create({
     *   data: {
     *     // ... data to create a TimesheetEntry
     *   }
     * })
     * 
     */
    create<T extends TimesheetEntryCreateArgs>(args: SelectSubset<T, TimesheetEntryCreateArgs<ExtArgs>>): Prisma__TimesheetEntryClient<$Result.GetResult<Prisma.$TimesheetEntryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TimesheetEntries.
     * @param {TimesheetEntryCreateManyArgs} args - Arguments to create many TimesheetEntries.
     * @example
     * // Create many TimesheetEntries
     * const timesheetEntry = await prisma.timesheetEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimesheetEntryCreateManyArgs>(args?: SelectSubset<T, TimesheetEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TimesheetEntries and returns the data saved in the database.
     * @param {TimesheetEntryCreateManyAndReturnArgs} args - Arguments to create many TimesheetEntries.
     * @example
     * // Create many TimesheetEntries
     * const timesheetEntry = await prisma.timesheetEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TimesheetEntries and only return the `id`
     * const timesheetEntryWithIdOnly = await prisma.timesheetEntry.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimesheetEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, TimesheetEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimesheetEntryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TimesheetEntry.
     * @param {TimesheetEntryDeleteArgs} args - Arguments to delete one TimesheetEntry.
     * @example
     * // Delete one TimesheetEntry
     * const TimesheetEntry = await prisma.timesheetEntry.delete({
     *   where: {
     *     // ... filter to delete one TimesheetEntry
     *   }
     * })
     * 
     */
    delete<T extends TimesheetEntryDeleteArgs>(args: SelectSubset<T, TimesheetEntryDeleteArgs<ExtArgs>>): Prisma__TimesheetEntryClient<$Result.GetResult<Prisma.$TimesheetEntryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TimesheetEntry.
     * @param {TimesheetEntryUpdateArgs} args - Arguments to update one TimesheetEntry.
     * @example
     * // Update one TimesheetEntry
     * const timesheetEntry = await prisma.timesheetEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimesheetEntryUpdateArgs>(args: SelectSubset<T, TimesheetEntryUpdateArgs<ExtArgs>>): Prisma__TimesheetEntryClient<$Result.GetResult<Prisma.$TimesheetEntryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TimesheetEntries.
     * @param {TimesheetEntryDeleteManyArgs} args - Arguments to filter TimesheetEntries to delete.
     * @example
     * // Delete a few TimesheetEntries
     * const { count } = await prisma.timesheetEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimesheetEntryDeleteManyArgs>(args?: SelectSubset<T, TimesheetEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimesheetEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimesheetEntries
     * const timesheetEntry = await prisma.timesheetEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimesheetEntryUpdateManyArgs>(args: SelectSubset<T, TimesheetEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TimesheetEntry.
     * @param {TimesheetEntryUpsertArgs} args - Arguments to update or create a TimesheetEntry.
     * @example
     * // Update or create a TimesheetEntry
     * const timesheetEntry = await prisma.timesheetEntry.upsert({
     *   create: {
     *     // ... data to create a TimesheetEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimesheetEntry we want to update
     *   }
     * })
     */
    upsert<T extends TimesheetEntryUpsertArgs>(args: SelectSubset<T, TimesheetEntryUpsertArgs<ExtArgs>>): Prisma__TimesheetEntryClient<$Result.GetResult<Prisma.$TimesheetEntryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TimesheetEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetEntryCountArgs} args - Arguments to filter TimesheetEntries to count.
     * @example
     * // Count the number of TimesheetEntries
     * const count = await prisma.timesheetEntry.count({
     *   where: {
     *     // ... the filter for the TimesheetEntries we want to count
     *   }
     * })
    **/
    count<T extends TimesheetEntryCountArgs>(
      args?: Subset<T, TimesheetEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimesheetEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimesheetEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimesheetEntryAggregateArgs>(args: Subset<T, TimesheetEntryAggregateArgs>): Prisma.PrismaPromise<GetTimesheetEntryAggregateType<T>>

    /**
     * Group by TimesheetEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetEntryGroupByArgs} args - Group by arguments.
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
      T extends TimesheetEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimesheetEntryGroupByArgs['orderBy'] }
        : { orderBy?: TimesheetEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimesheetEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimesheetEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimesheetEntry model
   */
  readonly fields: TimesheetEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimesheetEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimesheetEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    timesheet<T extends TimesheetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TimesheetDefaultArgs<ExtArgs>>): Prisma__TimesheetClient<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the TimesheetEntry model
   */ 
  interface TimesheetEntryFieldRefs {
    readonly id: FieldRef<"TimesheetEntry", 'String'>
    readonly timesheetId: FieldRef<"TimesheetEntry", 'String'>
    readonly projectId: FieldRef<"TimesheetEntry", 'String'>
    readonly taskId: FieldRef<"TimesheetEntry", 'String'>
    readonly activity: FieldRef<"TimesheetEntry", 'String'>
    readonly location: FieldRef<"TimesheetEntry", 'String'>
    readonly description: FieldRef<"TimesheetEntry", 'String'>
    readonly hours: FieldRef<"TimesheetEntry", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * TimesheetEntry findUnique
   */
  export type TimesheetEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimesheetEntry
     */
    select?: TimesheetEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimesheetEntry to fetch.
     */
    where: TimesheetEntryWhereUniqueInput
  }

  /**
   * TimesheetEntry findUniqueOrThrow
   */
  export type TimesheetEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimesheetEntry
     */
    select?: TimesheetEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimesheetEntry to fetch.
     */
    where: TimesheetEntryWhereUniqueInput
  }

  /**
   * TimesheetEntry findFirst
   */
  export type TimesheetEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimesheetEntry
     */
    select?: TimesheetEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimesheetEntry to fetch.
     */
    where?: TimesheetEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimesheetEntries to fetch.
     */
    orderBy?: TimesheetEntryOrderByWithRelationInput | TimesheetEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimesheetEntries.
     */
    cursor?: TimesheetEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimesheetEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimesheetEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimesheetEntries.
     */
    distinct?: TimesheetEntryScalarFieldEnum | TimesheetEntryScalarFieldEnum[]
  }

  /**
   * TimesheetEntry findFirstOrThrow
   */
  export type TimesheetEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimesheetEntry
     */
    select?: TimesheetEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimesheetEntry to fetch.
     */
    where?: TimesheetEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimesheetEntries to fetch.
     */
    orderBy?: TimesheetEntryOrderByWithRelationInput | TimesheetEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimesheetEntries.
     */
    cursor?: TimesheetEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimesheetEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimesheetEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimesheetEntries.
     */
    distinct?: TimesheetEntryScalarFieldEnum | TimesheetEntryScalarFieldEnum[]
  }

  /**
   * TimesheetEntry findMany
   */
  export type TimesheetEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimesheetEntry
     */
    select?: TimesheetEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimesheetEntries to fetch.
     */
    where?: TimesheetEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimesheetEntries to fetch.
     */
    orderBy?: TimesheetEntryOrderByWithRelationInput | TimesheetEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimesheetEntries.
     */
    cursor?: TimesheetEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimesheetEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimesheetEntries.
     */
    skip?: number
    distinct?: TimesheetEntryScalarFieldEnum | TimesheetEntryScalarFieldEnum[]
  }

  /**
   * TimesheetEntry create
   */
  export type TimesheetEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimesheetEntry
     */
    select?: TimesheetEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a TimesheetEntry.
     */
    data: XOR<TimesheetEntryCreateInput, TimesheetEntryUncheckedCreateInput>
  }

  /**
   * TimesheetEntry createMany
   */
  export type TimesheetEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimesheetEntries.
     */
    data: TimesheetEntryCreateManyInput | TimesheetEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimesheetEntry createManyAndReturn
   */
  export type TimesheetEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimesheetEntry
     */
    select?: TimesheetEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TimesheetEntries.
     */
    data: TimesheetEntryCreateManyInput | TimesheetEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimesheetEntry update
   */
  export type TimesheetEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimesheetEntry
     */
    select?: TimesheetEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a TimesheetEntry.
     */
    data: XOR<TimesheetEntryUpdateInput, TimesheetEntryUncheckedUpdateInput>
    /**
     * Choose, which TimesheetEntry to update.
     */
    where: TimesheetEntryWhereUniqueInput
  }

  /**
   * TimesheetEntry updateMany
   */
  export type TimesheetEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimesheetEntries.
     */
    data: XOR<TimesheetEntryUpdateManyMutationInput, TimesheetEntryUncheckedUpdateManyInput>
    /**
     * Filter which TimesheetEntries to update
     */
    where?: TimesheetEntryWhereInput
  }

  /**
   * TimesheetEntry upsert
   */
  export type TimesheetEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimesheetEntry
     */
    select?: TimesheetEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the TimesheetEntry to update in case it exists.
     */
    where: TimesheetEntryWhereUniqueInput
    /**
     * In case the TimesheetEntry found by the `where` argument doesn't exist, create a new TimesheetEntry with this data.
     */
    create: XOR<TimesheetEntryCreateInput, TimesheetEntryUncheckedCreateInput>
    /**
     * In case the TimesheetEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimesheetEntryUpdateInput, TimesheetEntryUncheckedUpdateInput>
  }

  /**
   * TimesheetEntry delete
   */
  export type TimesheetEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimesheetEntry
     */
    select?: TimesheetEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetEntryInclude<ExtArgs> | null
    /**
     * Filter which TimesheetEntry to delete.
     */
    where: TimesheetEntryWhereUniqueInput
  }

  /**
   * TimesheetEntry deleteMany
   */
  export type TimesheetEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimesheetEntries to delete
     */
    where?: TimesheetEntryWhereInput
  }

  /**
   * TimesheetEntry without action
   */
  export type TimesheetEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimesheetEntry
     */
    select?: TimesheetEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimesheetEntryInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: string | null
    priority: string | null
    dueDate: Date | null
    assignedToId: string | null
    projectId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: string | null
    priority: string | null
    dueDate: Date | null
    assignedToId: string | null
    projectId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    priority: number
    dueDate: number
    assignedToId: number
    projectId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    dueDate?: true
    assignedToId?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    dueDate?: true
    assignedToId?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    dueDate?: true
    assignedToId?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    title: string
    description: string | null
    status: string
    priority: string
    dueDate: Date | null
    assignedToId: string
    projectId: string
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    dueDate?: boolean
    assignedToId?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    dueDate?: boolean
    assignedToId?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    dueDate?: boolean
    assignedToId?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      assignedTo: Prisma.$UserPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      status: string
      priority: string
      dueDate: Date | null
      assignedToId: string
      projectId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignedTo<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Task model
   */ 
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly status: FieldRef<"Task", 'String'>
    readonly priority: FieldRef<"Task", 'String'>
    readonly dueDate: FieldRef<"Task", 'DateTime'>
    readonly assignedToId: FieldRef<"Task", 'String'>
    readonly projectId: FieldRef<"Task", 'String'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model Leave
   */

  export type AggregateLeave = {
    _count: LeaveCountAggregateOutputType | null
    _min: LeaveMinAggregateOutputType | null
    _max: LeaveMaxAggregateOutputType | null
  }

  export type LeaveMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    type: string | null
    status: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type LeaveMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    type: string | null
    status: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type LeaveCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    type: number
    status: number
    reason: number
    createdAt: number
    _all: number
  }


  export type LeaveMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    type?: true
    status?: true
    reason?: true
    createdAt?: true
  }

  export type LeaveMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    type?: true
    status?: true
    reason?: true
    createdAt?: true
  }

  export type LeaveCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    type?: true
    status?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type LeaveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leave to aggregate.
     */
    where?: LeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leaves
    **/
    _count?: true | LeaveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaveMaxAggregateInputType
  }

  export type GetLeaveAggregateType<T extends LeaveAggregateArgs> = {
        [P in keyof T & keyof AggregateLeave]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeave[P]>
      : GetScalarType<T[P], AggregateLeave[P]>
  }




  export type LeaveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveWhereInput
    orderBy?: LeaveOrderByWithAggregationInput | LeaveOrderByWithAggregationInput[]
    by: LeaveScalarFieldEnum[] | LeaveScalarFieldEnum
    having?: LeaveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaveCountAggregateInputType | true
    _min?: LeaveMinAggregateInputType
    _max?: LeaveMaxAggregateInputType
  }

  export type LeaveGroupByOutputType = {
    id: string
    userId: string
    date: Date
    type: string
    status: string
    reason: string | null
    createdAt: Date
    _count: LeaveCountAggregateOutputType | null
    _min: LeaveMinAggregateOutputType | null
    _max: LeaveMaxAggregateOutputType | null
  }

  type GetLeaveGroupByPayload<T extends LeaveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaveGroupByOutputType[P]>
            : GetScalarType<T[P], LeaveGroupByOutputType[P]>
        }
      >
    >


  export type LeaveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    type?: boolean
    status?: boolean
    reason?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leave"]>

  export type LeaveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    type?: boolean
    status?: boolean
    reason?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leave"]>

  export type LeaveSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    type?: boolean
    status?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type LeaveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LeaveIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LeavePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Leave"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      type: string
      status: string
      reason: string | null
      createdAt: Date
    }, ExtArgs["result"]["leave"]>
    composites: {}
  }

  type LeaveGetPayload<S extends boolean | null | undefined | LeaveDefaultArgs> = $Result.GetResult<Prisma.$LeavePayload, S>

  type LeaveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LeaveFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LeaveCountAggregateInputType | true
    }

  export interface LeaveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Leave'], meta: { name: 'Leave' } }
    /**
     * Find zero or one Leave that matches the filter.
     * @param {LeaveFindUniqueArgs} args - Arguments to find a Leave
     * @example
     * // Get one Leave
     * const leave = await prisma.leave.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaveFindUniqueArgs>(args: SelectSubset<T, LeaveFindUniqueArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Leave that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LeaveFindUniqueOrThrowArgs} args - Arguments to find a Leave
     * @example
     * // Get one Leave
     * const leave = await prisma.leave.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaveFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Leave that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveFindFirstArgs} args - Arguments to find a Leave
     * @example
     * // Get one Leave
     * const leave = await prisma.leave.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaveFindFirstArgs>(args?: SelectSubset<T, LeaveFindFirstArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Leave that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveFindFirstOrThrowArgs} args - Arguments to find a Leave
     * @example
     * // Get one Leave
     * const leave = await prisma.leave.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaveFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaveFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Leaves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leaves
     * const leaves = await prisma.leave.findMany()
     * 
     * // Get first 10 Leaves
     * const leaves = await prisma.leave.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaveWithIdOnly = await prisma.leave.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaveFindManyArgs>(args?: SelectSubset<T, LeaveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Leave.
     * @param {LeaveCreateArgs} args - Arguments to create a Leave.
     * @example
     * // Create one Leave
     * const Leave = await prisma.leave.create({
     *   data: {
     *     // ... data to create a Leave
     *   }
     * })
     * 
     */
    create<T extends LeaveCreateArgs>(args: SelectSubset<T, LeaveCreateArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Leaves.
     * @param {LeaveCreateManyArgs} args - Arguments to create many Leaves.
     * @example
     * // Create many Leaves
     * const leave = await prisma.leave.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaveCreateManyArgs>(args?: SelectSubset<T, LeaveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leaves and returns the data saved in the database.
     * @param {LeaveCreateManyAndReturnArgs} args - Arguments to create many Leaves.
     * @example
     * // Create many Leaves
     * const leave = await prisma.leave.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leaves and only return the `id`
     * const leaveWithIdOnly = await prisma.leave.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaveCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Leave.
     * @param {LeaveDeleteArgs} args - Arguments to delete one Leave.
     * @example
     * // Delete one Leave
     * const Leave = await prisma.leave.delete({
     *   where: {
     *     // ... filter to delete one Leave
     *   }
     * })
     * 
     */
    delete<T extends LeaveDeleteArgs>(args: SelectSubset<T, LeaveDeleteArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Leave.
     * @param {LeaveUpdateArgs} args - Arguments to update one Leave.
     * @example
     * // Update one Leave
     * const leave = await prisma.leave.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaveUpdateArgs>(args: SelectSubset<T, LeaveUpdateArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Leaves.
     * @param {LeaveDeleteManyArgs} args - Arguments to filter Leaves to delete.
     * @example
     * // Delete a few Leaves
     * const { count } = await prisma.leave.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaveDeleteManyArgs>(args?: SelectSubset<T, LeaveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leaves
     * const leave = await prisma.leave.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaveUpdateManyArgs>(args: SelectSubset<T, LeaveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Leave.
     * @param {LeaveUpsertArgs} args - Arguments to update or create a Leave.
     * @example
     * // Update or create a Leave
     * const leave = await prisma.leave.upsert({
     *   create: {
     *     // ... data to create a Leave
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leave we want to update
     *   }
     * })
     */
    upsert<T extends LeaveUpsertArgs>(args: SelectSubset<T, LeaveUpsertArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Leaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveCountArgs} args - Arguments to filter Leaves to count.
     * @example
     * // Count the number of Leaves
     * const count = await prisma.leave.count({
     *   where: {
     *     // ... the filter for the Leaves we want to count
     *   }
     * })
    **/
    count<T extends LeaveCountArgs>(
      args?: Subset<T, LeaveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeaveAggregateArgs>(args: Subset<T, LeaveAggregateArgs>): Prisma.PrismaPromise<GetLeaveAggregateType<T>>

    /**
     * Group by Leave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveGroupByArgs} args - Group by arguments.
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
      T extends LeaveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaveGroupByArgs['orderBy'] }
        : { orderBy?: LeaveGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeaveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Leave model
   */
  readonly fields: LeaveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Leave.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Leave model
   */ 
  interface LeaveFieldRefs {
    readonly id: FieldRef<"Leave", 'String'>
    readonly userId: FieldRef<"Leave", 'String'>
    readonly date: FieldRef<"Leave", 'DateTime'>
    readonly type: FieldRef<"Leave", 'String'>
    readonly status: FieldRef<"Leave", 'String'>
    readonly reason: FieldRef<"Leave", 'String'>
    readonly createdAt: FieldRef<"Leave", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Leave findUnique
   */
  export type LeaveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * Filter, which Leave to fetch.
     */
    where: LeaveWhereUniqueInput
  }

  /**
   * Leave findUniqueOrThrow
   */
  export type LeaveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * Filter, which Leave to fetch.
     */
    where: LeaveWhereUniqueInput
  }

  /**
   * Leave findFirst
   */
  export type LeaveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * Filter, which Leave to fetch.
     */
    where?: LeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leaves.
     */
    cursor?: LeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leaves.
     */
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[]
  }

  /**
   * Leave findFirstOrThrow
   */
  export type LeaveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * Filter, which Leave to fetch.
     */
    where?: LeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leaves.
     */
    cursor?: LeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leaves.
     */
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[]
  }

  /**
   * Leave findMany
   */
  export type LeaveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * Filter, which Leaves to fetch.
     */
    where?: LeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leaves.
     */
    cursor?: LeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[]
  }

  /**
   * Leave create
   */
  export type LeaveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * The data needed to create a Leave.
     */
    data: XOR<LeaveCreateInput, LeaveUncheckedCreateInput>
  }

  /**
   * Leave createMany
   */
  export type LeaveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leaves.
     */
    data: LeaveCreateManyInput | LeaveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Leave createManyAndReturn
   */
  export type LeaveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Leaves.
     */
    data: LeaveCreateManyInput | LeaveCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Leave update
   */
  export type LeaveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * The data needed to update a Leave.
     */
    data: XOR<LeaveUpdateInput, LeaveUncheckedUpdateInput>
    /**
     * Choose, which Leave to update.
     */
    where: LeaveWhereUniqueInput
  }

  /**
   * Leave updateMany
   */
  export type LeaveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leaves.
     */
    data: XOR<LeaveUpdateManyMutationInput, LeaveUncheckedUpdateManyInput>
    /**
     * Filter which Leaves to update
     */
    where?: LeaveWhereInput
  }

  /**
   * Leave upsert
   */
  export type LeaveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * The filter to search for the Leave to update in case it exists.
     */
    where: LeaveWhereUniqueInput
    /**
     * In case the Leave found by the `where` argument doesn't exist, create a new Leave with this data.
     */
    create: XOR<LeaveCreateInput, LeaveUncheckedCreateInput>
    /**
     * In case the Leave was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaveUpdateInput, LeaveUncheckedUpdateInput>
  }

  /**
   * Leave delete
   */
  export type LeaveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * Filter which Leave to delete.
     */
    where: LeaveWhereUniqueInput
  }

  /**
   * Leave deleteMany
   */
  export type LeaveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leaves to delete
     */
    where?: LeaveWhereInput
  }

  /**
   * Leave without action
   */
  export type LeaveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
  }


  /**
   * Model Branch
   */

  export type AggregateBranch = {
    _count: BranchCountAggregateOutputType | null
    _avg: BranchAvgAggregateOutputType | null
    _sum: BranchSumAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  export type BranchAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    radius: number | null
  }

  export type BranchSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    radius: number | null
  }

  export type BranchMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    radius: number | null
    shiftStart: string | null
    shiftEnd: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BranchMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    radius: number | null
    shiftStart: string | null
    shiftEnd: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BranchCountAggregateOutputType = {
    id: number
    name: number
    address: number
    latitude: number
    longitude: number
    radius: number
    shiftStart: number
    shiftEnd: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BranchAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    radius?: true
  }

  export type BranchSumAggregateInputType = {
    latitude?: true
    longitude?: true
    radius?: true
  }

  export type BranchMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
    radius?: true
    shiftStart?: true
    shiftEnd?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BranchMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
    radius?: true
    shiftStart?: true
    shiftEnd?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BranchCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
    radius?: true
    shiftStart?: true
    shiftEnd?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BranchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branch to aggregate.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Branches
    **/
    _count?: true | BranchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BranchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BranchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchMaxAggregateInputType
  }

  export type GetBranchAggregateType<T extends BranchAggregateArgs> = {
        [P in keyof T & keyof AggregateBranch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranch[P]>
      : GetScalarType<T[P], AggregateBranch[P]>
  }




  export type BranchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithAggregationInput | BranchOrderByWithAggregationInput[]
    by: BranchScalarFieldEnum[] | BranchScalarFieldEnum
    having?: BranchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchCountAggregateInputType | true
    _avg?: BranchAvgAggregateInputType
    _sum?: BranchSumAggregateInputType
    _min?: BranchMinAggregateInputType
    _max?: BranchMaxAggregateInputType
  }

  export type BranchGroupByOutputType = {
    id: string
    name: string
    address: string | null
    latitude: number
    longitude: number
    radius: number
    shiftStart: string
    shiftEnd: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: BranchCountAggregateOutputType | null
    _avg: BranchAvgAggregateOutputType | null
    _sum: BranchSumAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  type GetBranchGroupByPayload<T extends BranchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BranchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchGroupByOutputType[P]>
            : GetScalarType<T[P], BranchGroupByOutputType[P]>
        }
      >
    >


  export type BranchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    radius?: boolean
    shiftStart?: boolean
    shiftEnd?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Branch$usersArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    radius?: boolean
    shiftStart?: boolean
    shiftEnd?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    radius?: boolean
    shiftStart?: boolean
    shiftEnd?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BranchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Branch$usersArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BranchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BranchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Branch"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string | null
      latitude: number
      longitude: number
      radius: number
      shiftStart: string
      shiftEnd: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["branch"]>
    composites: {}
  }

  type BranchGetPayload<S extends boolean | null | undefined | BranchDefaultArgs> = $Result.GetResult<Prisma.$BranchPayload, S>

  type BranchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BranchFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BranchCountAggregateInputType | true
    }

  export interface BranchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Branch'], meta: { name: 'Branch' } }
    /**
     * Find zero or one Branch that matches the filter.
     * @param {BranchFindUniqueArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BranchFindUniqueArgs>(args: SelectSubset<T, BranchFindUniqueArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Branch that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BranchFindUniqueOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BranchFindUniqueOrThrowArgs>(args: SelectSubset<T, BranchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Branch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BranchFindFirstArgs>(args?: SelectSubset<T, BranchFindFirstArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Branch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BranchFindFirstOrThrowArgs>(args?: SelectSubset<T, BranchFindFirstOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Branches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Branches
     * const branches = await prisma.branch.findMany()
     * 
     * // Get first 10 Branches
     * const branches = await prisma.branch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branchWithIdOnly = await prisma.branch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BranchFindManyArgs>(args?: SelectSubset<T, BranchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Branch.
     * @param {BranchCreateArgs} args - Arguments to create a Branch.
     * @example
     * // Create one Branch
     * const Branch = await prisma.branch.create({
     *   data: {
     *     // ... data to create a Branch
     *   }
     * })
     * 
     */
    create<T extends BranchCreateArgs>(args: SelectSubset<T, BranchCreateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Branches.
     * @param {BranchCreateManyArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BranchCreateManyArgs>(args?: SelectSubset<T, BranchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Branches and returns the data saved in the database.
     * @param {BranchCreateManyAndReturnArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Branches and only return the `id`
     * const branchWithIdOnly = await prisma.branch.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BranchCreateManyAndReturnArgs>(args?: SelectSubset<T, BranchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Branch.
     * @param {BranchDeleteArgs} args - Arguments to delete one Branch.
     * @example
     * // Delete one Branch
     * const Branch = await prisma.branch.delete({
     *   where: {
     *     // ... filter to delete one Branch
     *   }
     * })
     * 
     */
    delete<T extends BranchDeleteArgs>(args: SelectSubset<T, BranchDeleteArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Branch.
     * @param {BranchUpdateArgs} args - Arguments to update one Branch.
     * @example
     * // Update one Branch
     * const branch = await prisma.branch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BranchUpdateArgs>(args: SelectSubset<T, BranchUpdateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Branches.
     * @param {BranchDeleteManyArgs} args - Arguments to filter Branches to delete.
     * @example
     * // Delete a few Branches
     * const { count } = await prisma.branch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BranchDeleteManyArgs>(args?: SelectSubset<T, BranchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Branches
     * const branch = await prisma.branch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BranchUpdateManyArgs>(args: SelectSubset<T, BranchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Branch.
     * @param {BranchUpsertArgs} args - Arguments to update or create a Branch.
     * @example
     * // Update or create a Branch
     * const branch = await prisma.branch.upsert({
     *   create: {
     *     // ... data to create a Branch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Branch we want to update
     *   }
     * })
     */
    upsert<T extends BranchUpsertArgs>(args: SelectSubset<T, BranchUpsertArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchCountArgs} args - Arguments to filter Branches to count.
     * @example
     * // Count the number of Branches
     * const count = await prisma.branch.count({
     *   where: {
     *     // ... the filter for the Branches we want to count
     *   }
     * })
    **/
    count<T extends BranchCountArgs>(
      args?: Subset<T, BranchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BranchAggregateArgs>(args: Subset<T, BranchAggregateArgs>): Prisma.PrismaPromise<GetBranchAggregateType<T>>

    /**
     * Group by Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchGroupByArgs} args - Group by arguments.
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
      T extends BranchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BranchGroupByArgs['orderBy'] }
        : { orderBy?: BranchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BranchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Branch model
   */
  readonly fields: BranchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Branch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BranchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Branch$usersArgs<ExtArgs> = {}>(args?: Subset<T, Branch$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Branch model
   */ 
  interface BranchFieldRefs {
    readonly id: FieldRef<"Branch", 'String'>
    readonly name: FieldRef<"Branch", 'String'>
    readonly address: FieldRef<"Branch", 'String'>
    readonly latitude: FieldRef<"Branch", 'Float'>
    readonly longitude: FieldRef<"Branch", 'Float'>
    readonly radius: FieldRef<"Branch", 'Float'>
    readonly shiftStart: FieldRef<"Branch", 'String'>
    readonly shiftEnd: FieldRef<"Branch", 'String'>
    readonly isActive: FieldRef<"Branch", 'Boolean'>
    readonly createdAt: FieldRef<"Branch", 'DateTime'>
    readonly updatedAt: FieldRef<"Branch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Branch findUnique
   */
  export type BranchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findUniqueOrThrow
   */
  export type BranchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findFirst
   */
  export type BranchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findFirstOrThrow
   */
  export type BranchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findMany
   */
  export type BranchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branches to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch create
   */
  export type BranchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to create a Branch.
     */
    data: XOR<BranchCreateInput, BranchUncheckedCreateInput>
  }

  /**
   * Branch createMany
   */
  export type BranchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Branch createManyAndReturn
   */
  export type BranchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Branch update
   */
  export type BranchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to update a Branch.
     */
    data: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
    /**
     * Choose, which Branch to update.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch updateMany
   */
  export type BranchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchWhereInput
  }

  /**
   * Branch upsert
   */
  export type BranchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The filter to search for the Branch to update in case it exists.
     */
    where: BranchWhereUniqueInput
    /**
     * In case the Branch found by the `where` argument doesn't exist, create a new Branch with this data.
     */
    create: XOR<BranchCreateInput, BranchUncheckedCreateInput>
    /**
     * In case the Branch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
  }

  /**
   * Branch delete
   */
  export type BranchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter which Branch to delete.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch deleteMany
   */
  export type BranchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branches to delete
     */
    where?: BranchWhereInput
  }

  /**
   * Branch.users
   */
  export type Branch$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
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
   * Branch without action
   */
  export type BranchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceAvgAggregateOutputType = {
    clockInLat: number | null
    clockInLng: number | null
    clockOutLat: number | null
    clockOutLng: number | null
  }

  export type AttendanceSumAggregateOutputType = {
    clockInLat: number | null
    clockInLng: number | null
    clockOutLat: number | null
    clockOutLng: number | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    clockIn: Date | null
    clockInLat: number | null
    clockInLng: number | null
    clockOut: Date | null
    clockOutLat: number | null
    clockOutLng: number | null
    status: string | null
    ipAddress: string | null
    punchMode: string | null
    punchInNote: string | null
    punchOutNote: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    clockIn: Date | null
    clockInLat: number | null
    clockInLng: number | null
    clockOut: Date | null
    clockOutLat: number | null
    clockOutLng: number | null
    status: string | null
    ipAddress: string | null
    punchMode: string | null
    punchInNote: string | null
    punchOutNote: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    clockIn: number
    clockInLat: number
    clockInLng: number
    clockOut: number
    clockOutLat: number
    clockOutLng: number
    status: number
    ipAddress: number
    punchMode: number
    punchInNote: number
    punchOutNote: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttendanceAvgAggregateInputType = {
    clockInLat?: true
    clockInLng?: true
    clockOutLat?: true
    clockOutLng?: true
  }

  export type AttendanceSumAggregateInputType = {
    clockInLat?: true
    clockInLng?: true
    clockOutLat?: true
    clockOutLng?: true
  }

  export type AttendanceMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    clockIn?: true
    clockInLat?: true
    clockInLng?: true
    clockOut?: true
    clockOutLat?: true
    clockOutLng?: true
    status?: true
    ipAddress?: true
    punchMode?: true
    punchInNote?: true
    punchOutNote?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    clockIn?: true
    clockInLat?: true
    clockInLng?: true
    clockOut?: true
    clockOutLat?: true
    clockOutLng?: true
    status?: true
    ipAddress?: true
    punchMode?: true
    punchInNote?: true
    punchOutNote?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    clockIn?: true
    clockInLat?: true
    clockInLng?: true
    clockOut?: true
    clockOutLat?: true
    clockOutLng?: true
    status?: true
    ipAddress?: true
    punchMode?: true
    punchInNote?: true
    punchOutNote?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _avg?: AttendanceAvgAggregateInputType
    _sum?: AttendanceSumAggregateInputType
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: string
    userId: string
    date: Date
    clockIn: Date
    clockInLat: number | null
    clockInLng: number | null
    clockOut: Date | null
    clockOutLat: number | null
    clockOutLng: number | null
    status: string
    ipAddress: string | null
    punchMode: string
    punchInNote: string | null
    punchOutNote: string | null
    createdAt: Date
    updatedAt: Date
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    clockIn?: boolean
    clockInLat?: boolean
    clockInLng?: boolean
    clockOut?: boolean
    clockOutLat?: boolean
    clockOutLng?: boolean
    status?: boolean
    ipAddress?: boolean
    punchMode?: boolean
    punchInNote?: boolean
    punchOutNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    clockIn?: boolean
    clockInLat?: boolean
    clockInLng?: boolean
    clockOut?: boolean
    clockOutLat?: boolean
    clockOutLng?: boolean
    status?: boolean
    ipAddress?: boolean
    punchMode?: boolean
    punchInNote?: boolean
    punchOutNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    clockIn?: boolean
    clockInLat?: boolean
    clockInLng?: boolean
    clockOut?: boolean
    clockOutLat?: boolean
    clockOutLng?: boolean
    status?: boolean
    ipAddress?: boolean
    punchMode?: boolean
    punchInNote?: boolean
    punchOutNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      clockIn: Date
      clockInLat: number | null
      clockInLng: number | null
      clockOut: Date | null
      clockOutLat: number | null
      clockOutLng: number | null
      status: string
      ipAddress: string | null
      punchMode: string
      punchInNote: string | null
      punchOutNote: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
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
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Attendance model
   */ 
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'String'>
    readonly userId: FieldRef<"Attendance", 'String'>
    readonly date: FieldRef<"Attendance", 'DateTime'>
    readonly clockIn: FieldRef<"Attendance", 'DateTime'>
    readonly clockInLat: FieldRef<"Attendance", 'Float'>
    readonly clockInLng: FieldRef<"Attendance", 'Float'>
    readonly clockOut: FieldRef<"Attendance", 'DateTime'>
    readonly clockOutLat: FieldRef<"Attendance", 'Float'>
    readonly clockOutLng: FieldRef<"Attendance", 'Float'>
    readonly status: FieldRef<"Attendance", 'String'>
    readonly ipAddress: FieldRef<"Attendance", 'String'>
    readonly punchMode: FieldRef<"Attendance", 'String'>
    readonly punchInNote: FieldRef<"Attendance", 'String'>
    readonly punchOutNote: FieldRef<"Attendance", 'String'>
    readonly createdAt: FieldRef<"Attendance", 'DateTime'>
    readonly updatedAt: FieldRef<"Attendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model AttendanceRequest
   */

  export type AggregateAttendanceRequest = {
    _count: AttendanceRequestCountAggregateOutputType | null
    _min: AttendanceRequestMinAggregateOutputType | null
    _max: AttendanceRequestMaxAggregateOutputType | null
  }

  export type AttendanceRequestMinAggregateOutputType = {
    id: string | null
    userId: string | null
    attendanceId: string | null
    date: Date | null
    requestType: string | null
    newTime: Date | null
    reason: string | null
    status: string | null
    adminRemarks: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendanceRequestMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    attendanceId: string | null
    date: Date | null
    requestType: string | null
    newTime: Date | null
    reason: string | null
    status: string | null
    adminRemarks: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendanceRequestCountAggregateOutputType = {
    id: number
    userId: number
    attendanceId: number
    date: number
    requestType: number
    newTime: number
    reason: number
    status: number
    adminRemarks: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttendanceRequestMinAggregateInputType = {
    id?: true
    userId?: true
    attendanceId?: true
    date?: true
    requestType?: true
    newTime?: true
    reason?: true
    status?: true
    adminRemarks?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendanceRequestMaxAggregateInputType = {
    id?: true
    userId?: true
    attendanceId?: true
    date?: true
    requestType?: true
    newTime?: true
    reason?: true
    status?: true
    adminRemarks?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendanceRequestCountAggregateInputType = {
    id?: true
    userId?: true
    attendanceId?: true
    date?: true
    requestType?: true
    newTime?: true
    reason?: true
    status?: true
    adminRemarks?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttendanceRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceRequest to aggregate.
     */
    where?: AttendanceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceRequests to fetch.
     */
    orderBy?: AttendanceRequestOrderByWithRelationInput | AttendanceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttendanceRequests
    **/
    _count?: true | AttendanceRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceRequestMaxAggregateInputType
  }

  export type GetAttendanceRequestAggregateType<T extends AttendanceRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendanceRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendanceRequest[P]>
      : GetScalarType<T[P], AggregateAttendanceRequest[P]>
  }




  export type AttendanceRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceRequestWhereInput
    orderBy?: AttendanceRequestOrderByWithAggregationInput | AttendanceRequestOrderByWithAggregationInput[]
    by: AttendanceRequestScalarFieldEnum[] | AttendanceRequestScalarFieldEnum
    having?: AttendanceRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceRequestCountAggregateInputType | true
    _min?: AttendanceRequestMinAggregateInputType
    _max?: AttendanceRequestMaxAggregateInputType
  }

  export type AttendanceRequestGroupByOutputType = {
    id: string
    userId: string
    attendanceId: string | null
    date: Date
    requestType: string
    newTime: Date
    reason: string
    status: string
    adminRemarks: string | null
    createdAt: Date
    updatedAt: Date
    _count: AttendanceRequestCountAggregateOutputType | null
    _min: AttendanceRequestMinAggregateOutputType | null
    _max: AttendanceRequestMaxAggregateOutputType | null
  }

  type GetAttendanceRequestGroupByPayload<T extends AttendanceRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceRequestGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceRequestGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    attendanceId?: boolean
    date?: boolean
    requestType?: boolean
    newTime?: boolean
    reason?: boolean
    status?: boolean
    adminRemarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendanceRequest"]>

  export type AttendanceRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    attendanceId?: boolean
    date?: boolean
    requestType?: boolean
    newTime?: boolean
    reason?: boolean
    status?: boolean
    adminRemarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendanceRequest"]>

  export type AttendanceRequestSelectScalar = {
    id?: boolean
    userId?: boolean
    attendanceId?: boolean
    date?: boolean
    requestType?: boolean
    newTime?: boolean
    reason?: boolean
    status?: boolean
    adminRemarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AttendanceRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttendanceRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AttendanceRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttendanceRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      attendanceId: string | null
      date: Date
      requestType: string
      newTime: Date
      reason: string
      status: string
      adminRemarks: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attendanceRequest"]>
    composites: {}
  }

  type AttendanceRequestGetPayload<S extends boolean | null | undefined | AttendanceRequestDefaultArgs> = $Result.GetResult<Prisma.$AttendanceRequestPayload, S>

  type AttendanceRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AttendanceRequestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AttendanceRequestCountAggregateInputType | true
    }

  export interface AttendanceRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttendanceRequest'], meta: { name: 'AttendanceRequest' } }
    /**
     * Find zero or one AttendanceRequest that matches the filter.
     * @param {AttendanceRequestFindUniqueArgs} args - Arguments to find a AttendanceRequest
     * @example
     * // Get one AttendanceRequest
     * const attendanceRequest = await prisma.attendanceRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceRequestFindUniqueArgs>(args: SelectSubset<T, AttendanceRequestFindUniqueArgs<ExtArgs>>): Prisma__AttendanceRequestClient<$Result.GetResult<Prisma.$AttendanceRequestPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AttendanceRequest that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AttendanceRequestFindUniqueOrThrowArgs} args - Arguments to find a AttendanceRequest
     * @example
     * // Get one AttendanceRequest
     * const attendanceRequest = await prisma.attendanceRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceRequestClient<$Result.GetResult<Prisma.$AttendanceRequestPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AttendanceRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRequestFindFirstArgs} args - Arguments to find a AttendanceRequest
     * @example
     * // Get one AttendanceRequest
     * const attendanceRequest = await prisma.attendanceRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceRequestFindFirstArgs>(args?: SelectSubset<T, AttendanceRequestFindFirstArgs<ExtArgs>>): Prisma__AttendanceRequestClient<$Result.GetResult<Prisma.$AttendanceRequestPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AttendanceRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRequestFindFirstOrThrowArgs} args - Arguments to find a AttendanceRequest
     * @example
     * // Get one AttendanceRequest
     * const attendanceRequest = await prisma.attendanceRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceRequestClient<$Result.GetResult<Prisma.$AttendanceRequestPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AttendanceRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttendanceRequests
     * const attendanceRequests = await prisma.attendanceRequest.findMany()
     * 
     * // Get first 10 AttendanceRequests
     * const attendanceRequests = await prisma.attendanceRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceRequestWithIdOnly = await prisma.attendanceRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceRequestFindManyArgs>(args?: SelectSubset<T, AttendanceRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceRequestPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AttendanceRequest.
     * @param {AttendanceRequestCreateArgs} args - Arguments to create a AttendanceRequest.
     * @example
     * // Create one AttendanceRequest
     * const AttendanceRequest = await prisma.attendanceRequest.create({
     *   data: {
     *     // ... data to create a AttendanceRequest
     *   }
     * })
     * 
     */
    create<T extends AttendanceRequestCreateArgs>(args: SelectSubset<T, AttendanceRequestCreateArgs<ExtArgs>>): Prisma__AttendanceRequestClient<$Result.GetResult<Prisma.$AttendanceRequestPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AttendanceRequests.
     * @param {AttendanceRequestCreateManyArgs} args - Arguments to create many AttendanceRequests.
     * @example
     * // Create many AttendanceRequests
     * const attendanceRequest = await prisma.attendanceRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceRequestCreateManyArgs>(args?: SelectSubset<T, AttendanceRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AttendanceRequests and returns the data saved in the database.
     * @param {AttendanceRequestCreateManyAndReturnArgs} args - Arguments to create many AttendanceRequests.
     * @example
     * // Create many AttendanceRequests
     * const attendanceRequest = await prisma.attendanceRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AttendanceRequests and only return the `id`
     * const attendanceRequestWithIdOnly = await prisma.attendanceRequest.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceRequestPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AttendanceRequest.
     * @param {AttendanceRequestDeleteArgs} args - Arguments to delete one AttendanceRequest.
     * @example
     * // Delete one AttendanceRequest
     * const AttendanceRequest = await prisma.attendanceRequest.delete({
     *   where: {
     *     // ... filter to delete one AttendanceRequest
     *   }
     * })
     * 
     */
    delete<T extends AttendanceRequestDeleteArgs>(args: SelectSubset<T, AttendanceRequestDeleteArgs<ExtArgs>>): Prisma__AttendanceRequestClient<$Result.GetResult<Prisma.$AttendanceRequestPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AttendanceRequest.
     * @param {AttendanceRequestUpdateArgs} args - Arguments to update one AttendanceRequest.
     * @example
     * // Update one AttendanceRequest
     * const attendanceRequest = await prisma.attendanceRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceRequestUpdateArgs>(args: SelectSubset<T, AttendanceRequestUpdateArgs<ExtArgs>>): Prisma__AttendanceRequestClient<$Result.GetResult<Prisma.$AttendanceRequestPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AttendanceRequests.
     * @param {AttendanceRequestDeleteManyArgs} args - Arguments to filter AttendanceRequests to delete.
     * @example
     * // Delete a few AttendanceRequests
     * const { count } = await prisma.attendanceRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceRequestDeleteManyArgs>(args?: SelectSubset<T, AttendanceRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttendanceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttendanceRequests
     * const attendanceRequest = await prisma.attendanceRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceRequestUpdateManyArgs>(args: SelectSubset<T, AttendanceRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AttendanceRequest.
     * @param {AttendanceRequestUpsertArgs} args - Arguments to update or create a AttendanceRequest.
     * @example
     * // Update or create a AttendanceRequest
     * const attendanceRequest = await prisma.attendanceRequest.upsert({
     *   create: {
     *     // ... data to create a AttendanceRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttendanceRequest we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceRequestUpsertArgs>(args: SelectSubset<T, AttendanceRequestUpsertArgs<ExtArgs>>): Prisma__AttendanceRequestClient<$Result.GetResult<Prisma.$AttendanceRequestPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AttendanceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRequestCountArgs} args - Arguments to filter AttendanceRequests to count.
     * @example
     * // Count the number of AttendanceRequests
     * const count = await prisma.attendanceRequest.count({
     *   where: {
     *     // ... the filter for the AttendanceRequests we want to count
     *   }
     * })
    **/
    count<T extends AttendanceRequestCountArgs>(
      args?: Subset<T, AttendanceRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttendanceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceRequestAggregateArgs>(args: Subset<T, AttendanceRequestAggregateArgs>): Prisma.PrismaPromise<GetAttendanceRequestAggregateType<T>>

    /**
     * Group by AttendanceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRequestGroupByArgs} args - Group by arguments.
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
      T extends AttendanceRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceRequestGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttendanceRequest model
   */
  readonly fields: AttendanceRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttendanceRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the AttendanceRequest model
   */ 
  interface AttendanceRequestFieldRefs {
    readonly id: FieldRef<"AttendanceRequest", 'String'>
    readonly userId: FieldRef<"AttendanceRequest", 'String'>
    readonly attendanceId: FieldRef<"AttendanceRequest", 'String'>
    readonly date: FieldRef<"AttendanceRequest", 'DateTime'>
    readonly requestType: FieldRef<"AttendanceRequest", 'String'>
    readonly newTime: FieldRef<"AttendanceRequest", 'DateTime'>
    readonly reason: FieldRef<"AttendanceRequest", 'String'>
    readonly status: FieldRef<"AttendanceRequest", 'String'>
    readonly adminRemarks: FieldRef<"AttendanceRequest", 'String'>
    readonly createdAt: FieldRef<"AttendanceRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"AttendanceRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AttendanceRequest findUnique
   */
  export type AttendanceRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRequest
     */
    select?: AttendanceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRequest to fetch.
     */
    where: AttendanceRequestWhereUniqueInput
  }

  /**
   * AttendanceRequest findUniqueOrThrow
   */
  export type AttendanceRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRequest
     */
    select?: AttendanceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRequest to fetch.
     */
    where: AttendanceRequestWhereUniqueInput
  }

  /**
   * AttendanceRequest findFirst
   */
  export type AttendanceRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRequest
     */
    select?: AttendanceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRequest to fetch.
     */
    where?: AttendanceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceRequests to fetch.
     */
    orderBy?: AttendanceRequestOrderByWithRelationInput | AttendanceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceRequests.
     */
    cursor?: AttendanceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceRequests.
     */
    distinct?: AttendanceRequestScalarFieldEnum | AttendanceRequestScalarFieldEnum[]
  }

  /**
   * AttendanceRequest findFirstOrThrow
   */
  export type AttendanceRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRequest
     */
    select?: AttendanceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRequest to fetch.
     */
    where?: AttendanceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceRequests to fetch.
     */
    orderBy?: AttendanceRequestOrderByWithRelationInput | AttendanceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceRequests.
     */
    cursor?: AttendanceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceRequests.
     */
    distinct?: AttendanceRequestScalarFieldEnum | AttendanceRequestScalarFieldEnum[]
  }

  /**
   * AttendanceRequest findMany
   */
  export type AttendanceRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRequest
     */
    select?: AttendanceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRequests to fetch.
     */
    where?: AttendanceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceRequests to fetch.
     */
    orderBy?: AttendanceRequestOrderByWithRelationInput | AttendanceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttendanceRequests.
     */
    cursor?: AttendanceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceRequests.
     */
    skip?: number
    distinct?: AttendanceRequestScalarFieldEnum | AttendanceRequestScalarFieldEnum[]
  }

  /**
   * AttendanceRequest create
   */
  export type AttendanceRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRequest
     */
    select?: AttendanceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a AttendanceRequest.
     */
    data: XOR<AttendanceRequestCreateInput, AttendanceRequestUncheckedCreateInput>
  }

  /**
   * AttendanceRequest createMany
   */
  export type AttendanceRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttendanceRequests.
     */
    data: AttendanceRequestCreateManyInput | AttendanceRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttendanceRequest createManyAndReturn
   */
  export type AttendanceRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRequest
     */
    select?: AttendanceRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AttendanceRequests.
     */
    data: AttendanceRequestCreateManyInput | AttendanceRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttendanceRequest update
   */
  export type AttendanceRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRequest
     */
    select?: AttendanceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a AttendanceRequest.
     */
    data: XOR<AttendanceRequestUpdateInput, AttendanceRequestUncheckedUpdateInput>
    /**
     * Choose, which AttendanceRequest to update.
     */
    where: AttendanceRequestWhereUniqueInput
  }

  /**
   * AttendanceRequest updateMany
   */
  export type AttendanceRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttendanceRequests.
     */
    data: XOR<AttendanceRequestUpdateManyMutationInput, AttendanceRequestUncheckedUpdateManyInput>
    /**
     * Filter which AttendanceRequests to update
     */
    where?: AttendanceRequestWhereInput
  }

  /**
   * AttendanceRequest upsert
   */
  export type AttendanceRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRequest
     */
    select?: AttendanceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the AttendanceRequest to update in case it exists.
     */
    where: AttendanceRequestWhereUniqueInput
    /**
     * In case the AttendanceRequest found by the `where` argument doesn't exist, create a new AttendanceRequest with this data.
     */
    create: XOR<AttendanceRequestCreateInput, AttendanceRequestUncheckedCreateInput>
    /**
     * In case the AttendanceRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceRequestUpdateInput, AttendanceRequestUncheckedUpdateInput>
  }

  /**
   * AttendanceRequest delete
   */
  export type AttendanceRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRequest
     */
    select?: AttendanceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRequestInclude<ExtArgs> | null
    /**
     * Filter which AttendanceRequest to delete.
     */
    where: AttendanceRequestWhereUniqueInput
  }

  /**
   * AttendanceRequest deleteMany
   */
  export type AttendanceRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceRequests to delete
     */
    where?: AttendanceRequestWhereInput
  }

  /**
   * AttendanceRequest without action
   */
  export type AttendanceRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRequest
     */
    select?: AttendanceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRequestInclude<ExtArgs> | null
  }


  /**
   * Model SalaryStructure
   */

  export type AggregateSalaryStructure = {
    _count: SalaryStructureCountAggregateOutputType | null
    _avg: SalaryStructureAvgAggregateOutputType | null
    _sum: SalaryStructureSumAggregateOutputType | null
    _min: SalaryStructureMinAggregateOutputType | null
    _max: SalaryStructureMaxAggregateOutputType | null
  }

  export type SalaryStructureAvgAggregateOutputType = {
    basic: number | null
    hra: number | null
    allowances: number | null
    specialAllowance: number | null
    pf: number | null
    pt: number | null
    deductions: number | null
    netSalary: number | null
  }

  export type SalaryStructureSumAggregateOutputType = {
    basic: number | null
    hra: number | null
    allowances: number | null
    specialAllowance: number | null
    pf: number | null
    pt: number | null
    deductions: number | null
    netSalary: number | null
  }

  export type SalaryStructureMinAggregateOutputType = {
    id: string | null
    userId: string | null
    basic: number | null
    hra: number | null
    allowances: number | null
    specialAllowance: number | null
    pf: number | null
    pt: number | null
    deductions: number | null
    netSalary: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalaryStructureMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    basic: number | null
    hra: number | null
    allowances: number | null
    specialAllowance: number | null
    pf: number | null
    pt: number | null
    deductions: number | null
    netSalary: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalaryStructureCountAggregateOutputType = {
    id: number
    userId: number
    basic: number
    hra: number
    allowances: number
    specialAllowance: number
    pf: number
    pt: number
    deductions: number
    netSalary: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SalaryStructureAvgAggregateInputType = {
    basic?: true
    hra?: true
    allowances?: true
    specialAllowance?: true
    pf?: true
    pt?: true
    deductions?: true
    netSalary?: true
  }

  export type SalaryStructureSumAggregateInputType = {
    basic?: true
    hra?: true
    allowances?: true
    specialAllowance?: true
    pf?: true
    pt?: true
    deductions?: true
    netSalary?: true
  }

  export type SalaryStructureMinAggregateInputType = {
    id?: true
    userId?: true
    basic?: true
    hra?: true
    allowances?: true
    specialAllowance?: true
    pf?: true
    pt?: true
    deductions?: true
    netSalary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalaryStructureMaxAggregateInputType = {
    id?: true
    userId?: true
    basic?: true
    hra?: true
    allowances?: true
    specialAllowance?: true
    pf?: true
    pt?: true
    deductions?: true
    netSalary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalaryStructureCountAggregateInputType = {
    id?: true
    userId?: true
    basic?: true
    hra?: true
    allowances?: true
    specialAllowance?: true
    pf?: true
    pt?: true
    deductions?: true
    netSalary?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SalaryStructureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalaryStructure to aggregate.
     */
    where?: SalaryStructureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalaryStructures to fetch.
     */
    orderBy?: SalaryStructureOrderByWithRelationInput | SalaryStructureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalaryStructureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalaryStructures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalaryStructures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalaryStructures
    **/
    _count?: true | SalaryStructureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalaryStructureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalaryStructureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalaryStructureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalaryStructureMaxAggregateInputType
  }

  export type GetSalaryStructureAggregateType<T extends SalaryStructureAggregateArgs> = {
        [P in keyof T & keyof AggregateSalaryStructure]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalaryStructure[P]>
      : GetScalarType<T[P], AggregateSalaryStructure[P]>
  }




  export type SalaryStructureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaryStructureWhereInput
    orderBy?: SalaryStructureOrderByWithAggregationInput | SalaryStructureOrderByWithAggregationInput[]
    by: SalaryStructureScalarFieldEnum[] | SalaryStructureScalarFieldEnum
    having?: SalaryStructureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalaryStructureCountAggregateInputType | true
    _avg?: SalaryStructureAvgAggregateInputType
    _sum?: SalaryStructureSumAggregateInputType
    _min?: SalaryStructureMinAggregateInputType
    _max?: SalaryStructureMaxAggregateInputType
  }

  export type SalaryStructureGroupByOutputType = {
    id: string
    userId: string
    basic: number
    hra: number
    allowances: number
    specialAllowance: number
    pf: number
    pt: number
    deductions: number
    netSalary: number
    createdAt: Date
    updatedAt: Date
    _count: SalaryStructureCountAggregateOutputType | null
    _avg: SalaryStructureAvgAggregateOutputType | null
    _sum: SalaryStructureSumAggregateOutputType | null
    _min: SalaryStructureMinAggregateOutputType | null
    _max: SalaryStructureMaxAggregateOutputType | null
  }

  type GetSalaryStructureGroupByPayload<T extends SalaryStructureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalaryStructureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalaryStructureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalaryStructureGroupByOutputType[P]>
            : GetScalarType<T[P], SalaryStructureGroupByOutputType[P]>
        }
      >
    >


  export type SalaryStructureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    basic?: boolean
    hra?: boolean
    allowances?: boolean
    specialAllowance?: boolean
    pf?: boolean
    pt?: boolean
    deductions?: boolean
    netSalary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salaryStructure"]>

  export type SalaryStructureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    basic?: boolean
    hra?: boolean
    allowances?: boolean
    specialAllowance?: boolean
    pf?: boolean
    pt?: boolean
    deductions?: boolean
    netSalary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salaryStructure"]>

  export type SalaryStructureSelectScalar = {
    id?: boolean
    userId?: boolean
    basic?: boolean
    hra?: boolean
    allowances?: boolean
    specialAllowance?: boolean
    pf?: boolean
    pt?: boolean
    deductions?: boolean
    netSalary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SalaryStructureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SalaryStructureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SalaryStructurePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalaryStructure"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      basic: number
      hra: number
      allowances: number
      specialAllowance: number
      pf: number
      pt: number
      deductions: number
      netSalary: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["salaryStructure"]>
    composites: {}
  }

  type SalaryStructureGetPayload<S extends boolean | null | undefined | SalaryStructureDefaultArgs> = $Result.GetResult<Prisma.$SalaryStructurePayload, S>

  type SalaryStructureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SalaryStructureFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SalaryStructureCountAggregateInputType | true
    }

  export interface SalaryStructureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalaryStructure'], meta: { name: 'SalaryStructure' } }
    /**
     * Find zero or one SalaryStructure that matches the filter.
     * @param {SalaryStructureFindUniqueArgs} args - Arguments to find a SalaryStructure
     * @example
     * // Get one SalaryStructure
     * const salaryStructure = await prisma.salaryStructure.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalaryStructureFindUniqueArgs>(args: SelectSubset<T, SalaryStructureFindUniqueArgs<ExtArgs>>): Prisma__SalaryStructureClient<$Result.GetResult<Prisma.$SalaryStructurePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SalaryStructure that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SalaryStructureFindUniqueOrThrowArgs} args - Arguments to find a SalaryStructure
     * @example
     * // Get one SalaryStructure
     * const salaryStructure = await prisma.salaryStructure.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalaryStructureFindUniqueOrThrowArgs>(args: SelectSubset<T, SalaryStructureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalaryStructureClient<$Result.GetResult<Prisma.$SalaryStructurePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SalaryStructure that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryStructureFindFirstArgs} args - Arguments to find a SalaryStructure
     * @example
     * // Get one SalaryStructure
     * const salaryStructure = await prisma.salaryStructure.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalaryStructureFindFirstArgs>(args?: SelectSubset<T, SalaryStructureFindFirstArgs<ExtArgs>>): Prisma__SalaryStructureClient<$Result.GetResult<Prisma.$SalaryStructurePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SalaryStructure that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryStructureFindFirstOrThrowArgs} args - Arguments to find a SalaryStructure
     * @example
     * // Get one SalaryStructure
     * const salaryStructure = await prisma.salaryStructure.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalaryStructureFindFirstOrThrowArgs>(args?: SelectSubset<T, SalaryStructureFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalaryStructureClient<$Result.GetResult<Prisma.$SalaryStructurePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SalaryStructures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryStructureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalaryStructures
     * const salaryStructures = await prisma.salaryStructure.findMany()
     * 
     * // Get first 10 SalaryStructures
     * const salaryStructures = await prisma.salaryStructure.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salaryStructureWithIdOnly = await prisma.salaryStructure.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalaryStructureFindManyArgs>(args?: SelectSubset<T, SalaryStructureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaryStructurePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SalaryStructure.
     * @param {SalaryStructureCreateArgs} args - Arguments to create a SalaryStructure.
     * @example
     * // Create one SalaryStructure
     * const SalaryStructure = await prisma.salaryStructure.create({
     *   data: {
     *     // ... data to create a SalaryStructure
     *   }
     * })
     * 
     */
    create<T extends SalaryStructureCreateArgs>(args: SelectSubset<T, SalaryStructureCreateArgs<ExtArgs>>): Prisma__SalaryStructureClient<$Result.GetResult<Prisma.$SalaryStructurePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SalaryStructures.
     * @param {SalaryStructureCreateManyArgs} args - Arguments to create many SalaryStructures.
     * @example
     * // Create many SalaryStructures
     * const salaryStructure = await prisma.salaryStructure.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalaryStructureCreateManyArgs>(args?: SelectSubset<T, SalaryStructureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalaryStructures and returns the data saved in the database.
     * @param {SalaryStructureCreateManyAndReturnArgs} args - Arguments to create many SalaryStructures.
     * @example
     * // Create many SalaryStructures
     * const salaryStructure = await prisma.salaryStructure.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalaryStructures and only return the `id`
     * const salaryStructureWithIdOnly = await prisma.salaryStructure.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalaryStructureCreateManyAndReturnArgs>(args?: SelectSubset<T, SalaryStructureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaryStructurePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SalaryStructure.
     * @param {SalaryStructureDeleteArgs} args - Arguments to delete one SalaryStructure.
     * @example
     * // Delete one SalaryStructure
     * const SalaryStructure = await prisma.salaryStructure.delete({
     *   where: {
     *     // ... filter to delete one SalaryStructure
     *   }
     * })
     * 
     */
    delete<T extends SalaryStructureDeleteArgs>(args: SelectSubset<T, SalaryStructureDeleteArgs<ExtArgs>>): Prisma__SalaryStructureClient<$Result.GetResult<Prisma.$SalaryStructurePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SalaryStructure.
     * @param {SalaryStructureUpdateArgs} args - Arguments to update one SalaryStructure.
     * @example
     * // Update one SalaryStructure
     * const salaryStructure = await prisma.salaryStructure.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalaryStructureUpdateArgs>(args: SelectSubset<T, SalaryStructureUpdateArgs<ExtArgs>>): Prisma__SalaryStructureClient<$Result.GetResult<Prisma.$SalaryStructurePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SalaryStructures.
     * @param {SalaryStructureDeleteManyArgs} args - Arguments to filter SalaryStructures to delete.
     * @example
     * // Delete a few SalaryStructures
     * const { count } = await prisma.salaryStructure.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalaryStructureDeleteManyArgs>(args?: SelectSubset<T, SalaryStructureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalaryStructures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryStructureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalaryStructures
     * const salaryStructure = await prisma.salaryStructure.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalaryStructureUpdateManyArgs>(args: SelectSubset<T, SalaryStructureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SalaryStructure.
     * @param {SalaryStructureUpsertArgs} args - Arguments to update or create a SalaryStructure.
     * @example
     * // Update or create a SalaryStructure
     * const salaryStructure = await prisma.salaryStructure.upsert({
     *   create: {
     *     // ... data to create a SalaryStructure
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalaryStructure we want to update
     *   }
     * })
     */
    upsert<T extends SalaryStructureUpsertArgs>(args: SelectSubset<T, SalaryStructureUpsertArgs<ExtArgs>>): Prisma__SalaryStructureClient<$Result.GetResult<Prisma.$SalaryStructurePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SalaryStructures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryStructureCountArgs} args - Arguments to filter SalaryStructures to count.
     * @example
     * // Count the number of SalaryStructures
     * const count = await prisma.salaryStructure.count({
     *   where: {
     *     // ... the filter for the SalaryStructures we want to count
     *   }
     * })
    **/
    count<T extends SalaryStructureCountArgs>(
      args?: Subset<T, SalaryStructureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalaryStructureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalaryStructure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryStructureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalaryStructureAggregateArgs>(args: Subset<T, SalaryStructureAggregateArgs>): Prisma.PrismaPromise<GetSalaryStructureAggregateType<T>>

    /**
     * Group by SalaryStructure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryStructureGroupByArgs} args - Group by arguments.
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
      T extends SalaryStructureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalaryStructureGroupByArgs['orderBy'] }
        : { orderBy?: SalaryStructureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SalaryStructureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalaryStructureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalaryStructure model
   */
  readonly fields: SalaryStructureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalaryStructure.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalaryStructureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SalaryStructure model
   */ 
  interface SalaryStructureFieldRefs {
    readonly id: FieldRef<"SalaryStructure", 'String'>
    readonly userId: FieldRef<"SalaryStructure", 'String'>
    readonly basic: FieldRef<"SalaryStructure", 'Float'>
    readonly hra: FieldRef<"SalaryStructure", 'Float'>
    readonly allowances: FieldRef<"SalaryStructure", 'Float'>
    readonly specialAllowance: FieldRef<"SalaryStructure", 'Float'>
    readonly pf: FieldRef<"SalaryStructure", 'Float'>
    readonly pt: FieldRef<"SalaryStructure", 'Float'>
    readonly deductions: FieldRef<"SalaryStructure", 'Float'>
    readonly netSalary: FieldRef<"SalaryStructure", 'Float'>
    readonly createdAt: FieldRef<"SalaryStructure", 'DateTime'>
    readonly updatedAt: FieldRef<"SalaryStructure", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SalaryStructure findUnique
   */
  export type SalaryStructureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryStructure
     */
    select?: SalaryStructureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryStructureInclude<ExtArgs> | null
    /**
     * Filter, which SalaryStructure to fetch.
     */
    where: SalaryStructureWhereUniqueInput
  }

  /**
   * SalaryStructure findUniqueOrThrow
   */
  export type SalaryStructureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryStructure
     */
    select?: SalaryStructureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryStructureInclude<ExtArgs> | null
    /**
     * Filter, which SalaryStructure to fetch.
     */
    where: SalaryStructureWhereUniqueInput
  }

  /**
   * SalaryStructure findFirst
   */
  export type SalaryStructureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryStructure
     */
    select?: SalaryStructureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryStructureInclude<ExtArgs> | null
    /**
     * Filter, which SalaryStructure to fetch.
     */
    where?: SalaryStructureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalaryStructures to fetch.
     */
    orderBy?: SalaryStructureOrderByWithRelationInput | SalaryStructureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalaryStructures.
     */
    cursor?: SalaryStructureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalaryStructures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalaryStructures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalaryStructures.
     */
    distinct?: SalaryStructureScalarFieldEnum | SalaryStructureScalarFieldEnum[]
  }

  /**
   * SalaryStructure findFirstOrThrow
   */
  export type SalaryStructureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryStructure
     */
    select?: SalaryStructureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryStructureInclude<ExtArgs> | null
    /**
     * Filter, which SalaryStructure to fetch.
     */
    where?: SalaryStructureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalaryStructures to fetch.
     */
    orderBy?: SalaryStructureOrderByWithRelationInput | SalaryStructureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalaryStructures.
     */
    cursor?: SalaryStructureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalaryStructures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalaryStructures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalaryStructures.
     */
    distinct?: SalaryStructureScalarFieldEnum | SalaryStructureScalarFieldEnum[]
  }

  /**
   * SalaryStructure findMany
   */
  export type SalaryStructureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryStructure
     */
    select?: SalaryStructureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryStructureInclude<ExtArgs> | null
    /**
     * Filter, which SalaryStructures to fetch.
     */
    where?: SalaryStructureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalaryStructures to fetch.
     */
    orderBy?: SalaryStructureOrderByWithRelationInput | SalaryStructureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalaryStructures.
     */
    cursor?: SalaryStructureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalaryStructures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalaryStructures.
     */
    skip?: number
    distinct?: SalaryStructureScalarFieldEnum | SalaryStructureScalarFieldEnum[]
  }

  /**
   * SalaryStructure create
   */
  export type SalaryStructureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryStructure
     */
    select?: SalaryStructureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryStructureInclude<ExtArgs> | null
    /**
     * The data needed to create a SalaryStructure.
     */
    data: XOR<SalaryStructureCreateInput, SalaryStructureUncheckedCreateInput>
  }

  /**
   * SalaryStructure createMany
   */
  export type SalaryStructureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalaryStructures.
     */
    data: SalaryStructureCreateManyInput | SalaryStructureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalaryStructure createManyAndReturn
   */
  export type SalaryStructureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryStructure
     */
    select?: SalaryStructureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SalaryStructures.
     */
    data: SalaryStructureCreateManyInput | SalaryStructureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryStructureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SalaryStructure update
   */
  export type SalaryStructureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryStructure
     */
    select?: SalaryStructureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryStructureInclude<ExtArgs> | null
    /**
     * The data needed to update a SalaryStructure.
     */
    data: XOR<SalaryStructureUpdateInput, SalaryStructureUncheckedUpdateInput>
    /**
     * Choose, which SalaryStructure to update.
     */
    where: SalaryStructureWhereUniqueInput
  }

  /**
   * SalaryStructure updateMany
   */
  export type SalaryStructureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalaryStructures.
     */
    data: XOR<SalaryStructureUpdateManyMutationInput, SalaryStructureUncheckedUpdateManyInput>
    /**
     * Filter which SalaryStructures to update
     */
    where?: SalaryStructureWhereInput
  }

  /**
   * SalaryStructure upsert
   */
  export type SalaryStructureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryStructure
     */
    select?: SalaryStructureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryStructureInclude<ExtArgs> | null
    /**
     * The filter to search for the SalaryStructure to update in case it exists.
     */
    where: SalaryStructureWhereUniqueInput
    /**
     * In case the SalaryStructure found by the `where` argument doesn't exist, create a new SalaryStructure with this data.
     */
    create: XOR<SalaryStructureCreateInput, SalaryStructureUncheckedCreateInput>
    /**
     * In case the SalaryStructure was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalaryStructureUpdateInput, SalaryStructureUncheckedUpdateInput>
  }

  /**
   * SalaryStructure delete
   */
  export type SalaryStructureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryStructure
     */
    select?: SalaryStructureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryStructureInclude<ExtArgs> | null
    /**
     * Filter which SalaryStructure to delete.
     */
    where: SalaryStructureWhereUniqueInput
  }

  /**
   * SalaryStructure deleteMany
   */
  export type SalaryStructureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalaryStructures to delete
     */
    where?: SalaryStructureWhereInput
  }

  /**
   * SalaryStructure without action
   */
  export type SalaryStructureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryStructure
     */
    select?: SalaryStructureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryStructureInclude<ExtArgs> | null
  }


  /**
   * Model Payroll
   */

  export type AggregatePayroll = {
    _count: PayrollCountAggregateOutputType | null
    _avg: PayrollAvgAggregateOutputType | null
    _sum: PayrollSumAggregateOutputType | null
    _min: PayrollMinAggregateOutputType | null
    _max: PayrollMaxAggregateOutputType | null
  }

  export type PayrollAvgAggregateOutputType = {
    year: number | null
    monthNumber: number | null
    basic: number | null
    hra: number | null
    allowances: number | null
    grossEarnings: number | null
    pf: number | null
    pt: number | null
    deductions: number | null
    totalDeductions: number | null
    netSalary: number | null
    totalDays: number | null
    presentDays: number | null
    absentDays: number | null
    lopDays: number | null
    lopAmount: number | null
  }

  export type PayrollSumAggregateOutputType = {
    year: number | null
    monthNumber: number | null
    basic: number | null
    hra: number | null
    allowances: number | null
    grossEarnings: number | null
    pf: number | null
    pt: number | null
    deductions: number | null
    totalDeductions: number | null
    netSalary: number | null
    totalDays: number | null
    presentDays: number | null
    absentDays: number | null
    lopDays: number | null
    lopAmount: number | null
  }

  export type PayrollMinAggregateOutputType = {
    id: string | null
    userId: string | null
    month: string | null
    year: number | null
    monthNumber: number | null
    basic: number | null
    hra: number | null
    allowances: number | null
    grossEarnings: number | null
    pf: number | null
    pt: number | null
    deductions: number | null
    totalDeductions: number | null
    netSalary: number | null
    totalDays: number | null
    presentDays: number | null
    absentDays: number | null
    lopDays: number | null
    lopAmount: number | null
    status: string | null
    generatedAt: Date | null
    paidAt: Date | null
  }

  export type PayrollMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    month: string | null
    year: number | null
    monthNumber: number | null
    basic: number | null
    hra: number | null
    allowances: number | null
    grossEarnings: number | null
    pf: number | null
    pt: number | null
    deductions: number | null
    totalDeductions: number | null
    netSalary: number | null
    totalDays: number | null
    presentDays: number | null
    absentDays: number | null
    lopDays: number | null
    lopAmount: number | null
    status: string | null
    generatedAt: Date | null
    paidAt: Date | null
  }

  export type PayrollCountAggregateOutputType = {
    id: number
    userId: number
    month: number
    year: number
    monthNumber: number
    basic: number
    hra: number
    allowances: number
    grossEarnings: number
    pf: number
    pt: number
    deductions: number
    totalDeductions: number
    netSalary: number
    totalDays: number
    presentDays: number
    absentDays: number
    lopDays: number
    lopAmount: number
    status: number
    generatedAt: number
    paidAt: number
    _all: number
  }


  export type PayrollAvgAggregateInputType = {
    year?: true
    monthNumber?: true
    basic?: true
    hra?: true
    allowances?: true
    grossEarnings?: true
    pf?: true
    pt?: true
    deductions?: true
    totalDeductions?: true
    netSalary?: true
    totalDays?: true
    presentDays?: true
    absentDays?: true
    lopDays?: true
    lopAmount?: true
  }

  export type PayrollSumAggregateInputType = {
    year?: true
    monthNumber?: true
    basic?: true
    hra?: true
    allowances?: true
    grossEarnings?: true
    pf?: true
    pt?: true
    deductions?: true
    totalDeductions?: true
    netSalary?: true
    totalDays?: true
    presentDays?: true
    absentDays?: true
    lopDays?: true
    lopAmount?: true
  }

  export type PayrollMinAggregateInputType = {
    id?: true
    userId?: true
    month?: true
    year?: true
    monthNumber?: true
    basic?: true
    hra?: true
    allowances?: true
    grossEarnings?: true
    pf?: true
    pt?: true
    deductions?: true
    totalDeductions?: true
    netSalary?: true
    totalDays?: true
    presentDays?: true
    absentDays?: true
    lopDays?: true
    lopAmount?: true
    status?: true
    generatedAt?: true
    paidAt?: true
  }

  export type PayrollMaxAggregateInputType = {
    id?: true
    userId?: true
    month?: true
    year?: true
    monthNumber?: true
    basic?: true
    hra?: true
    allowances?: true
    grossEarnings?: true
    pf?: true
    pt?: true
    deductions?: true
    totalDeductions?: true
    netSalary?: true
    totalDays?: true
    presentDays?: true
    absentDays?: true
    lopDays?: true
    lopAmount?: true
    status?: true
    generatedAt?: true
    paidAt?: true
  }

  export type PayrollCountAggregateInputType = {
    id?: true
    userId?: true
    month?: true
    year?: true
    monthNumber?: true
    basic?: true
    hra?: true
    allowances?: true
    grossEarnings?: true
    pf?: true
    pt?: true
    deductions?: true
    totalDeductions?: true
    netSalary?: true
    totalDays?: true
    presentDays?: true
    absentDays?: true
    lopDays?: true
    lopAmount?: true
    status?: true
    generatedAt?: true
    paidAt?: true
    _all?: true
  }

  export type PayrollAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payroll to aggregate.
     */
    where?: PayrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payrolls to fetch.
     */
    orderBy?: PayrollOrderByWithRelationInput | PayrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payrolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payrolls
    **/
    _count?: true | PayrollCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayrollAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayrollSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayrollMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayrollMaxAggregateInputType
  }

  export type GetPayrollAggregateType<T extends PayrollAggregateArgs> = {
        [P in keyof T & keyof AggregatePayroll]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayroll[P]>
      : GetScalarType<T[P], AggregatePayroll[P]>
  }




  export type PayrollGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollWhereInput
    orderBy?: PayrollOrderByWithAggregationInput | PayrollOrderByWithAggregationInput[]
    by: PayrollScalarFieldEnum[] | PayrollScalarFieldEnum
    having?: PayrollScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayrollCountAggregateInputType | true
    _avg?: PayrollAvgAggregateInputType
    _sum?: PayrollSumAggregateInputType
    _min?: PayrollMinAggregateInputType
    _max?: PayrollMaxAggregateInputType
  }

  export type PayrollGroupByOutputType = {
    id: string
    userId: string
    month: string
    year: number
    monthNumber: number
    basic: number
    hra: number
    allowances: number
    grossEarnings: number
    pf: number
    pt: number
    deductions: number
    totalDeductions: number
    netSalary: number
    totalDays: number
    presentDays: number
    absentDays: number
    lopDays: number
    lopAmount: number
    status: string
    generatedAt: Date
    paidAt: Date | null
    _count: PayrollCountAggregateOutputType | null
    _avg: PayrollAvgAggregateOutputType | null
    _sum: PayrollSumAggregateOutputType | null
    _min: PayrollMinAggregateOutputType | null
    _max: PayrollMaxAggregateOutputType | null
  }

  type GetPayrollGroupByPayload<T extends PayrollGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayrollGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayrollGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayrollGroupByOutputType[P]>
            : GetScalarType<T[P], PayrollGroupByOutputType[P]>
        }
      >
    >


  export type PayrollSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    month?: boolean
    year?: boolean
    monthNumber?: boolean
    basic?: boolean
    hra?: boolean
    allowances?: boolean
    grossEarnings?: boolean
    pf?: boolean
    pt?: boolean
    deductions?: boolean
    totalDeductions?: boolean
    netSalary?: boolean
    totalDays?: boolean
    presentDays?: boolean
    absentDays?: boolean
    lopDays?: boolean
    lopAmount?: boolean
    status?: boolean
    generatedAt?: boolean
    paidAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Payroll$itemsArgs<ExtArgs>
    _count?: boolean | PayrollCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payroll"]>

  export type PayrollSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    month?: boolean
    year?: boolean
    monthNumber?: boolean
    basic?: boolean
    hra?: boolean
    allowances?: boolean
    grossEarnings?: boolean
    pf?: boolean
    pt?: boolean
    deductions?: boolean
    totalDeductions?: boolean
    netSalary?: boolean
    totalDays?: boolean
    presentDays?: boolean
    absentDays?: boolean
    lopDays?: boolean
    lopAmount?: boolean
    status?: boolean
    generatedAt?: boolean
    paidAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payroll"]>

  export type PayrollSelectScalar = {
    id?: boolean
    userId?: boolean
    month?: boolean
    year?: boolean
    monthNumber?: boolean
    basic?: boolean
    hra?: boolean
    allowances?: boolean
    grossEarnings?: boolean
    pf?: boolean
    pt?: boolean
    deductions?: boolean
    totalDeductions?: boolean
    netSalary?: boolean
    totalDays?: boolean
    presentDays?: boolean
    absentDays?: boolean
    lopDays?: boolean
    lopAmount?: boolean
    status?: boolean
    generatedAt?: boolean
    paidAt?: boolean
  }

  export type PayrollInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Payroll$itemsArgs<ExtArgs>
    _count?: boolean | PayrollCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PayrollIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PayrollPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payroll"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$PayrollItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      month: string
      year: number
      monthNumber: number
      basic: number
      hra: number
      allowances: number
      grossEarnings: number
      pf: number
      pt: number
      deductions: number
      totalDeductions: number
      netSalary: number
      totalDays: number
      presentDays: number
      absentDays: number
      lopDays: number
      lopAmount: number
      status: string
      generatedAt: Date
      paidAt: Date | null
    }, ExtArgs["result"]["payroll"]>
    composites: {}
  }

  type PayrollGetPayload<S extends boolean | null | undefined | PayrollDefaultArgs> = $Result.GetResult<Prisma.$PayrollPayload, S>

  type PayrollCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PayrollFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PayrollCountAggregateInputType | true
    }

  export interface PayrollDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payroll'], meta: { name: 'Payroll' } }
    /**
     * Find zero or one Payroll that matches the filter.
     * @param {PayrollFindUniqueArgs} args - Arguments to find a Payroll
     * @example
     * // Get one Payroll
     * const payroll = await prisma.payroll.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayrollFindUniqueArgs>(args: SelectSubset<T, PayrollFindUniqueArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Payroll that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PayrollFindUniqueOrThrowArgs} args - Arguments to find a Payroll
     * @example
     * // Get one Payroll
     * const payroll = await prisma.payroll.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayrollFindUniqueOrThrowArgs>(args: SelectSubset<T, PayrollFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Payroll that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollFindFirstArgs} args - Arguments to find a Payroll
     * @example
     * // Get one Payroll
     * const payroll = await prisma.payroll.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayrollFindFirstArgs>(args?: SelectSubset<T, PayrollFindFirstArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Payroll that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollFindFirstOrThrowArgs} args - Arguments to find a Payroll
     * @example
     * // Get one Payroll
     * const payroll = await prisma.payroll.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayrollFindFirstOrThrowArgs>(args?: SelectSubset<T, PayrollFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Payrolls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payrolls
     * const payrolls = await prisma.payroll.findMany()
     * 
     * // Get first 10 Payrolls
     * const payrolls = await prisma.payroll.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payrollWithIdOnly = await prisma.payroll.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayrollFindManyArgs>(args?: SelectSubset<T, PayrollFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Payroll.
     * @param {PayrollCreateArgs} args - Arguments to create a Payroll.
     * @example
     * // Create one Payroll
     * const Payroll = await prisma.payroll.create({
     *   data: {
     *     // ... data to create a Payroll
     *   }
     * })
     * 
     */
    create<T extends PayrollCreateArgs>(args: SelectSubset<T, PayrollCreateArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Payrolls.
     * @param {PayrollCreateManyArgs} args - Arguments to create many Payrolls.
     * @example
     * // Create many Payrolls
     * const payroll = await prisma.payroll.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayrollCreateManyArgs>(args?: SelectSubset<T, PayrollCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payrolls and returns the data saved in the database.
     * @param {PayrollCreateManyAndReturnArgs} args - Arguments to create many Payrolls.
     * @example
     * // Create many Payrolls
     * const payroll = await prisma.payroll.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payrolls and only return the `id`
     * const payrollWithIdOnly = await prisma.payroll.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayrollCreateManyAndReturnArgs>(args?: SelectSubset<T, PayrollCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Payroll.
     * @param {PayrollDeleteArgs} args - Arguments to delete one Payroll.
     * @example
     * // Delete one Payroll
     * const Payroll = await prisma.payroll.delete({
     *   where: {
     *     // ... filter to delete one Payroll
     *   }
     * })
     * 
     */
    delete<T extends PayrollDeleteArgs>(args: SelectSubset<T, PayrollDeleteArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Payroll.
     * @param {PayrollUpdateArgs} args - Arguments to update one Payroll.
     * @example
     * // Update one Payroll
     * const payroll = await prisma.payroll.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayrollUpdateArgs>(args: SelectSubset<T, PayrollUpdateArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Payrolls.
     * @param {PayrollDeleteManyArgs} args - Arguments to filter Payrolls to delete.
     * @example
     * // Delete a few Payrolls
     * const { count } = await prisma.payroll.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayrollDeleteManyArgs>(args?: SelectSubset<T, PayrollDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payrolls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payrolls
     * const payroll = await prisma.payroll.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayrollUpdateManyArgs>(args: SelectSubset<T, PayrollUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payroll.
     * @param {PayrollUpsertArgs} args - Arguments to update or create a Payroll.
     * @example
     * // Update or create a Payroll
     * const payroll = await prisma.payroll.upsert({
     *   create: {
     *     // ... data to create a Payroll
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payroll we want to update
     *   }
     * })
     */
    upsert<T extends PayrollUpsertArgs>(args: SelectSubset<T, PayrollUpsertArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Payrolls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollCountArgs} args - Arguments to filter Payrolls to count.
     * @example
     * // Count the number of Payrolls
     * const count = await prisma.payroll.count({
     *   where: {
     *     // ... the filter for the Payrolls we want to count
     *   }
     * })
    **/
    count<T extends PayrollCountArgs>(
      args?: Subset<T, PayrollCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayrollCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payroll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PayrollAggregateArgs>(args: Subset<T, PayrollAggregateArgs>): Prisma.PrismaPromise<GetPayrollAggregateType<T>>

    /**
     * Group by Payroll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollGroupByArgs} args - Group by arguments.
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
      T extends PayrollGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayrollGroupByArgs['orderBy'] }
        : { orderBy?: PayrollGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PayrollGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayrollGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payroll model
   */
  readonly fields: PayrollFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payroll.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayrollClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    items<T extends Payroll$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Payroll$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Payroll model
   */ 
  interface PayrollFieldRefs {
    readonly id: FieldRef<"Payroll", 'String'>
    readonly userId: FieldRef<"Payroll", 'String'>
    readonly month: FieldRef<"Payroll", 'String'>
    readonly year: FieldRef<"Payroll", 'Int'>
    readonly monthNumber: FieldRef<"Payroll", 'Int'>
    readonly basic: FieldRef<"Payroll", 'Float'>
    readonly hra: FieldRef<"Payroll", 'Float'>
    readonly allowances: FieldRef<"Payroll", 'Float'>
    readonly grossEarnings: FieldRef<"Payroll", 'Float'>
    readonly pf: FieldRef<"Payroll", 'Float'>
    readonly pt: FieldRef<"Payroll", 'Float'>
    readonly deductions: FieldRef<"Payroll", 'Float'>
    readonly totalDeductions: FieldRef<"Payroll", 'Float'>
    readonly netSalary: FieldRef<"Payroll", 'Float'>
    readonly totalDays: FieldRef<"Payroll", 'Int'>
    readonly presentDays: FieldRef<"Payroll", 'Float'>
    readonly absentDays: FieldRef<"Payroll", 'Float'>
    readonly lopDays: FieldRef<"Payroll", 'Float'>
    readonly lopAmount: FieldRef<"Payroll", 'Float'>
    readonly status: FieldRef<"Payroll", 'String'>
    readonly generatedAt: FieldRef<"Payroll", 'DateTime'>
    readonly paidAt: FieldRef<"Payroll", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payroll findUnique
   */
  export type PayrollFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter, which Payroll to fetch.
     */
    where: PayrollWhereUniqueInput
  }

  /**
   * Payroll findUniqueOrThrow
   */
  export type PayrollFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter, which Payroll to fetch.
     */
    where: PayrollWhereUniqueInput
  }

  /**
   * Payroll findFirst
   */
  export type PayrollFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter, which Payroll to fetch.
     */
    where?: PayrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payrolls to fetch.
     */
    orderBy?: PayrollOrderByWithRelationInput | PayrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payrolls.
     */
    cursor?: PayrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payrolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payrolls.
     */
    distinct?: PayrollScalarFieldEnum | PayrollScalarFieldEnum[]
  }

  /**
   * Payroll findFirstOrThrow
   */
  export type PayrollFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter, which Payroll to fetch.
     */
    where?: PayrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payrolls to fetch.
     */
    orderBy?: PayrollOrderByWithRelationInput | PayrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payrolls.
     */
    cursor?: PayrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payrolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payrolls.
     */
    distinct?: PayrollScalarFieldEnum | PayrollScalarFieldEnum[]
  }

  /**
   * Payroll findMany
   */
  export type PayrollFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter, which Payrolls to fetch.
     */
    where?: PayrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payrolls to fetch.
     */
    orderBy?: PayrollOrderByWithRelationInput | PayrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payrolls.
     */
    cursor?: PayrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payrolls.
     */
    skip?: number
    distinct?: PayrollScalarFieldEnum | PayrollScalarFieldEnum[]
  }

  /**
   * Payroll create
   */
  export type PayrollCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * The data needed to create a Payroll.
     */
    data: XOR<PayrollCreateInput, PayrollUncheckedCreateInput>
  }

  /**
   * Payroll createMany
   */
  export type PayrollCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payrolls.
     */
    data: PayrollCreateManyInput | PayrollCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payroll createManyAndReturn
   */
  export type PayrollCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Payrolls.
     */
    data: PayrollCreateManyInput | PayrollCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payroll update
   */
  export type PayrollUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * The data needed to update a Payroll.
     */
    data: XOR<PayrollUpdateInput, PayrollUncheckedUpdateInput>
    /**
     * Choose, which Payroll to update.
     */
    where: PayrollWhereUniqueInput
  }

  /**
   * Payroll updateMany
   */
  export type PayrollUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payrolls.
     */
    data: XOR<PayrollUpdateManyMutationInput, PayrollUncheckedUpdateManyInput>
    /**
     * Filter which Payrolls to update
     */
    where?: PayrollWhereInput
  }

  /**
   * Payroll upsert
   */
  export type PayrollUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * The filter to search for the Payroll to update in case it exists.
     */
    where: PayrollWhereUniqueInput
    /**
     * In case the Payroll found by the `where` argument doesn't exist, create a new Payroll with this data.
     */
    create: XOR<PayrollCreateInput, PayrollUncheckedCreateInput>
    /**
     * In case the Payroll was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayrollUpdateInput, PayrollUncheckedUpdateInput>
  }

  /**
   * Payroll delete
   */
  export type PayrollDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter which Payroll to delete.
     */
    where: PayrollWhereUniqueInput
  }

  /**
   * Payroll deleteMany
   */
  export type PayrollDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payrolls to delete
     */
    where?: PayrollWhereInput
  }

  /**
   * Payroll.items
   */
  export type Payroll$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    where?: PayrollItemWhereInput
    orderBy?: PayrollItemOrderByWithRelationInput | PayrollItemOrderByWithRelationInput[]
    cursor?: PayrollItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayrollItemScalarFieldEnum | PayrollItemScalarFieldEnum[]
  }

  /**
   * Payroll without action
   */
  export type PayrollDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
  }


  /**
   * Model PayrollItem
   */

  export type AggregatePayrollItem = {
    _count: PayrollItemCountAggregateOutputType | null
    _avg: PayrollItemAvgAggregateOutputType | null
    _sum: PayrollItemSumAggregateOutputType | null
    _min: PayrollItemMinAggregateOutputType | null
    _max: PayrollItemMaxAggregateOutputType | null
  }

  export type PayrollItemAvgAggregateOutputType = {
    amount: number | null
  }

  export type PayrollItemSumAggregateOutputType = {
    amount: number | null
  }

  export type PayrollItemMinAggregateOutputType = {
    id: string | null
    payrollId: string | null
    label: string | null
    amount: number | null
    type: string | null
  }

  export type PayrollItemMaxAggregateOutputType = {
    id: string | null
    payrollId: string | null
    label: string | null
    amount: number | null
    type: string | null
  }

  export type PayrollItemCountAggregateOutputType = {
    id: number
    payrollId: number
    label: number
    amount: number
    type: number
    _all: number
  }


  export type PayrollItemAvgAggregateInputType = {
    amount?: true
  }

  export type PayrollItemSumAggregateInputType = {
    amount?: true
  }

  export type PayrollItemMinAggregateInputType = {
    id?: true
    payrollId?: true
    label?: true
    amount?: true
    type?: true
  }

  export type PayrollItemMaxAggregateInputType = {
    id?: true
    payrollId?: true
    label?: true
    amount?: true
    type?: true
  }

  export type PayrollItemCountAggregateInputType = {
    id?: true
    payrollId?: true
    label?: true
    amount?: true
    type?: true
    _all?: true
  }

  export type PayrollItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayrollItem to aggregate.
     */
    where?: PayrollItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollItems to fetch.
     */
    orderBy?: PayrollItemOrderByWithRelationInput | PayrollItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayrollItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PayrollItems
    **/
    _count?: true | PayrollItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayrollItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayrollItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayrollItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayrollItemMaxAggregateInputType
  }

  export type GetPayrollItemAggregateType<T extends PayrollItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePayrollItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayrollItem[P]>
      : GetScalarType<T[P], AggregatePayrollItem[P]>
  }




  export type PayrollItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollItemWhereInput
    orderBy?: PayrollItemOrderByWithAggregationInput | PayrollItemOrderByWithAggregationInput[]
    by: PayrollItemScalarFieldEnum[] | PayrollItemScalarFieldEnum
    having?: PayrollItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayrollItemCountAggregateInputType | true
    _avg?: PayrollItemAvgAggregateInputType
    _sum?: PayrollItemSumAggregateInputType
    _min?: PayrollItemMinAggregateInputType
    _max?: PayrollItemMaxAggregateInputType
  }

  export type PayrollItemGroupByOutputType = {
    id: string
    payrollId: string
    label: string
    amount: number
    type: string
    _count: PayrollItemCountAggregateOutputType | null
    _avg: PayrollItemAvgAggregateOutputType | null
    _sum: PayrollItemSumAggregateOutputType | null
    _min: PayrollItemMinAggregateOutputType | null
    _max: PayrollItemMaxAggregateOutputType | null
  }

  type GetPayrollItemGroupByPayload<T extends PayrollItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayrollItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayrollItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayrollItemGroupByOutputType[P]>
            : GetScalarType<T[P], PayrollItemGroupByOutputType[P]>
        }
      >
    >


  export type PayrollItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payrollId?: boolean
    label?: boolean
    amount?: boolean
    type?: boolean
    payroll?: boolean | PayrollDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payrollItem"]>

  export type PayrollItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payrollId?: boolean
    label?: boolean
    amount?: boolean
    type?: boolean
    payroll?: boolean | PayrollDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payrollItem"]>

  export type PayrollItemSelectScalar = {
    id?: boolean
    payrollId?: boolean
    label?: boolean
    amount?: boolean
    type?: boolean
  }

  export type PayrollItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payroll?: boolean | PayrollDefaultArgs<ExtArgs>
  }
  export type PayrollItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payroll?: boolean | PayrollDefaultArgs<ExtArgs>
  }

  export type $PayrollItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayrollItem"
    objects: {
      payroll: Prisma.$PayrollPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      payrollId: string
      label: string
      amount: number
      type: string
    }, ExtArgs["result"]["payrollItem"]>
    composites: {}
  }

  type PayrollItemGetPayload<S extends boolean | null | undefined | PayrollItemDefaultArgs> = $Result.GetResult<Prisma.$PayrollItemPayload, S>

  type PayrollItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PayrollItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PayrollItemCountAggregateInputType | true
    }

  export interface PayrollItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PayrollItem'], meta: { name: 'PayrollItem' } }
    /**
     * Find zero or one PayrollItem that matches the filter.
     * @param {PayrollItemFindUniqueArgs} args - Arguments to find a PayrollItem
     * @example
     * // Get one PayrollItem
     * const payrollItem = await prisma.payrollItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayrollItemFindUniqueArgs>(args: SelectSubset<T, PayrollItemFindUniqueArgs<ExtArgs>>): Prisma__PayrollItemClient<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PayrollItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PayrollItemFindUniqueOrThrowArgs} args - Arguments to find a PayrollItem
     * @example
     * // Get one PayrollItem
     * const payrollItem = await prisma.payrollItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayrollItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PayrollItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayrollItemClient<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PayrollItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollItemFindFirstArgs} args - Arguments to find a PayrollItem
     * @example
     * // Get one PayrollItem
     * const payrollItem = await prisma.payrollItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayrollItemFindFirstArgs>(args?: SelectSubset<T, PayrollItemFindFirstArgs<ExtArgs>>): Prisma__PayrollItemClient<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PayrollItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollItemFindFirstOrThrowArgs} args - Arguments to find a PayrollItem
     * @example
     * // Get one PayrollItem
     * const payrollItem = await prisma.payrollItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayrollItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PayrollItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayrollItemClient<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PayrollItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayrollItems
     * const payrollItems = await prisma.payrollItem.findMany()
     * 
     * // Get first 10 PayrollItems
     * const payrollItems = await prisma.payrollItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payrollItemWithIdOnly = await prisma.payrollItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayrollItemFindManyArgs>(args?: SelectSubset<T, PayrollItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PayrollItem.
     * @param {PayrollItemCreateArgs} args - Arguments to create a PayrollItem.
     * @example
     * // Create one PayrollItem
     * const PayrollItem = await prisma.payrollItem.create({
     *   data: {
     *     // ... data to create a PayrollItem
     *   }
     * })
     * 
     */
    create<T extends PayrollItemCreateArgs>(args: SelectSubset<T, PayrollItemCreateArgs<ExtArgs>>): Prisma__PayrollItemClient<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PayrollItems.
     * @param {PayrollItemCreateManyArgs} args - Arguments to create many PayrollItems.
     * @example
     * // Create many PayrollItems
     * const payrollItem = await prisma.payrollItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayrollItemCreateManyArgs>(args?: SelectSubset<T, PayrollItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PayrollItems and returns the data saved in the database.
     * @param {PayrollItemCreateManyAndReturnArgs} args - Arguments to create many PayrollItems.
     * @example
     * // Create many PayrollItems
     * const payrollItem = await prisma.payrollItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PayrollItems and only return the `id`
     * const payrollItemWithIdOnly = await prisma.payrollItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayrollItemCreateManyAndReturnArgs>(args?: SelectSubset<T, PayrollItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PayrollItem.
     * @param {PayrollItemDeleteArgs} args - Arguments to delete one PayrollItem.
     * @example
     * // Delete one PayrollItem
     * const PayrollItem = await prisma.payrollItem.delete({
     *   where: {
     *     // ... filter to delete one PayrollItem
     *   }
     * })
     * 
     */
    delete<T extends PayrollItemDeleteArgs>(args: SelectSubset<T, PayrollItemDeleteArgs<ExtArgs>>): Prisma__PayrollItemClient<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PayrollItem.
     * @param {PayrollItemUpdateArgs} args - Arguments to update one PayrollItem.
     * @example
     * // Update one PayrollItem
     * const payrollItem = await prisma.payrollItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayrollItemUpdateArgs>(args: SelectSubset<T, PayrollItemUpdateArgs<ExtArgs>>): Prisma__PayrollItemClient<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PayrollItems.
     * @param {PayrollItemDeleteManyArgs} args - Arguments to filter PayrollItems to delete.
     * @example
     * // Delete a few PayrollItems
     * const { count } = await prisma.payrollItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayrollItemDeleteManyArgs>(args?: SelectSubset<T, PayrollItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayrollItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayrollItems
     * const payrollItem = await prisma.payrollItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayrollItemUpdateManyArgs>(args: SelectSubset<T, PayrollItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PayrollItem.
     * @param {PayrollItemUpsertArgs} args - Arguments to update or create a PayrollItem.
     * @example
     * // Update or create a PayrollItem
     * const payrollItem = await prisma.payrollItem.upsert({
     *   create: {
     *     // ... data to create a PayrollItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayrollItem we want to update
     *   }
     * })
     */
    upsert<T extends PayrollItemUpsertArgs>(args: SelectSubset<T, PayrollItemUpsertArgs<ExtArgs>>): Prisma__PayrollItemClient<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PayrollItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollItemCountArgs} args - Arguments to filter PayrollItems to count.
     * @example
     * // Count the number of PayrollItems
     * const count = await prisma.payrollItem.count({
     *   where: {
     *     // ... the filter for the PayrollItems we want to count
     *   }
     * })
    **/
    count<T extends PayrollItemCountArgs>(
      args?: Subset<T, PayrollItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayrollItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayrollItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PayrollItemAggregateArgs>(args: Subset<T, PayrollItemAggregateArgs>): Prisma.PrismaPromise<GetPayrollItemAggregateType<T>>

    /**
     * Group by PayrollItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollItemGroupByArgs} args - Group by arguments.
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
      T extends PayrollItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayrollItemGroupByArgs['orderBy'] }
        : { orderBy?: PayrollItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PayrollItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayrollItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PayrollItem model
   */
  readonly fields: PayrollItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PayrollItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayrollItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payroll<T extends PayrollDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PayrollDefaultArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PayrollItem model
   */ 
  interface PayrollItemFieldRefs {
    readonly id: FieldRef<"PayrollItem", 'String'>
    readonly payrollId: FieldRef<"PayrollItem", 'String'>
    readonly label: FieldRef<"PayrollItem", 'String'>
    readonly amount: FieldRef<"PayrollItem", 'Float'>
    readonly type: FieldRef<"PayrollItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PayrollItem findUnique
   */
  export type PayrollItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    /**
     * Filter, which PayrollItem to fetch.
     */
    where: PayrollItemWhereUniqueInput
  }

  /**
   * PayrollItem findUniqueOrThrow
   */
  export type PayrollItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    /**
     * Filter, which PayrollItem to fetch.
     */
    where: PayrollItemWhereUniqueInput
  }

  /**
   * PayrollItem findFirst
   */
  export type PayrollItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    /**
     * Filter, which PayrollItem to fetch.
     */
    where?: PayrollItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollItems to fetch.
     */
    orderBy?: PayrollItemOrderByWithRelationInput | PayrollItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayrollItems.
     */
    cursor?: PayrollItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayrollItems.
     */
    distinct?: PayrollItemScalarFieldEnum | PayrollItemScalarFieldEnum[]
  }

  /**
   * PayrollItem findFirstOrThrow
   */
  export type PayrollItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    /**
     * Filter, which PayrollItem to fetch.
     */
    where?: PayrollItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollItems to fetch.
     */
    orderBy?: PayrollItemOrderByWithRelationInput | PayrollItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayrollItems.
     */
    cursor?: PayrollItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayrollItems.
     */
    distinct?: PayrollItemScalarFieldEnum | PayrollItemScalarFieldEnum[]
  }

  /**
   * PayrollItem findMany
   */
  export type PayrollItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    /**
     * Filter, which PayrollItems to fetch.
     */
    where?: PayrollItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollItems to fetch.
     */
    orderBy?: PayrollItemOrderByWithRelationInput | PayrollItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PayrollItems.
     */
    cursor?: PayrollItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollItems.
     */
    skip?: number
    distinct?: PayrollItemScalarFieldEnum | PayrollItemScalarFieldEnum[]
  }

  /**
   * PayrollItem create
   */
  export type PayrollItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PayrollItem.
     */
    data: XOR<PayrollItemCreateInput, PayrollItemUncheckedCreateInput>
  }

  /**
   * PayrollItem createMany
   */
  export type PayrollItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayrollItems.
     */
    data: PayrollItemCreateManyInput | PayrollItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayrollItem createManyAndReturn
   */
  export type PayrollItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PayrollItems.
     */
    data: PayrollItemCreateManyInput | PayrollItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayrollItem update
   */
  export type PayrollItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PayrollItem.
     */
    data: XOR<PayrollItemUpdateInput, PayrollItemUncheckedUpdateInput>
    /**
     * Choose, which PayrollItem to update.
     */
    where: PayrollItemWhereUniqueInput
  }

  /**
   * PayrollItem updateMany
   */
  export type PayrollItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PayrollItems.
     */
    data: XOR<PayrollItemUpdateManyMutationInput, PayrollItemUncheckedUpdateManyInput>
    /**
     * Filter which PayrollItems to update
     */
    where?: PayrollItemWhereInput
  }

  /**
   * PayrollItem upsert
   */
  export type PayrollItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PayrollItem to update in case it exists.
     */
    where: PayrollItemWhereUniqueInput
    /**
     * In case the PayrollItem found by the `where` argument doesn't exist, create a new PayrollItem with this data.
     */
    create: XOR<PayrollItemCreateInput, PayrollItemUncheckedCreateInput>
    /**
     * In case the PayrollItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayrollItemUpdateInput, PayrollItemUncheckedUpdateInput>
  }

  /**
   * PayrollItem delete
   */
  export type PayrollItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    /**
     * Filter which PayrollItem to delete.
     */
    where: PayrollItemWhereUniqueInput
  }

  /**
   * PayrollItem deleteMany
   */
  export type PayrollItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayrollItems to delete
     */
    where?: PayrollItemWhereInput
  }

  /**
   * PayrollItem without action
   */
  export type PayrollItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
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


  export const RoleScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    remarks: 'remarks'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    address: 'address',
    remarks: 'remarks',
    contactPerson: 'contactPerson',
    phone: 'phone',
    email: 'email'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    code: 'code',
    email: 'email',
    password: 'password',
    name: 'name',
    image: 'image',
    roleId: 'roleId',
    branchLegacy: 'branchLegacy',
    branchId: 'branchId',
    phone: 'phone',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    description: 'description',
    isActive: 'isActive',
    customerId: 'customerId',
    managerId: 'managerId',
    remarks: 'remarks',
    startDate: 'startDate',
    endDate: 'endDate'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const TimesheetScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    status: 'status',
    totalHours: 'totalHours',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TimesheetScalarFieldEnum = (typeof TimesheetScalarFieldEnum)[keyof typeof TimesheetScalarFieldEnum]


  export const TimesheetEntryScalarFieldEnum: {
    id: 'id',
    timesheetId: 'timesheetId',
    projectId: 'projectId',
    taskId: 'taskId',
    activity: 'activity',
    location: 'location',
    description: 'description',
    hours: 'hours'
  };

  export type TimesheetEntryScalarFieldEnum = (typeof TimesheetEntryScalarFieldEnum)[keyof typeof TimesheetEntryScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    priority: 'priority',
    dueDate: 'dueDate',
    assignedToId: 'assignedToId',
    projectId: 'projectId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const LeaveScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    type: 'type',
    status: 'status',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type LeaveScalarFieldEnum = (typeof LeaveScalarFieldEnum)[keyof typeof LeaveScalarFieldEnum]


  export const BranchScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    radius: 'radius',
    shiftStart: 'shiftStart',
    shiftEnd: 'shiftEnd',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BranchScalarFieldEnum = (typeof BranchScalarFieldEnum)[keyof typeof BranchScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    clockIn: 'clockIn',
    clockInLat: 'clockInLat',
    clockInLng: 'clockInLng',
    clockOut: 'clockOut',
    clockOutLat: 'clockOutLat',
    clockOutLng: 'clockOutLng',
    status: 'status',
    ipAddress: 'ipAddress',
    punchMode: 'punchMode',
    punchInNote: 'punchInNote',
    punchOutNote: 'punchOutNote',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const AttendanceRequestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    attendanceId: 'attendanceId',
    date: 'date',
    requestType: 'requestType',
    newTime: 'newTime',
    reason: 'reason',
    status: 'status',
    adminRemarks: 'adminRemarks',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttendanceRequestScalarFieldEnum = (typeof AttendanceRequestScalarFieldEnum)[keyof typeof AttendanceRequestScalarFieldEnum]


  export const SalaryStructureScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    basic: 'basic',
    hra: 'hra',
    allowances: 'allowances',
    specialAllowance: 'specialAllowance',
    pf: 'pf',
    pt: 'pt',
    deductions: 'deductions',
    netSalary: 'netSalary',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SalaryStructureScalarFieldEnum = (typeof SalaryStructureScalarFieldEnum)[keyof typeof SalaryStructureScalarFieldEnum]


  export const PayrollScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    month: 'month',
    year: 'year',
    monthNumber: 'monthNumber',
    basic: 'basic',
    hra: 'hra',
    allowances: 'allowances',
    grossEarnings: 'grossEarnings',
    pf: 'pf',
    pt: 'pt',
    deductions: 'deductions',
    totalDeductions: 'totalDeductions',
    netSalary: 'netSalary',
    totalDays: 'totalDays',
    presentDays: 'presentDays',
    absentDays: 'absentDays',
    lopDays: 'lopDays',
    lopAmount: 'lopAmount',
    status: 'status',
    generatedAt: 'generatedAt',
    paidAt: 'paidAt'
  };

  export type PayrollScalarFieldEnum = (typeof PayrollScalarFieldEnum)[keyof typeof PayrollScalarFieldEnum]


  export const PayrollItemScalarFieldEnum: {
    id: 'id',
    payrollId: 'payrollId',
    label: 'label',
    amount: 'amount',
    type: 'type'
  };

  export type PayrollItemScalarFieldEnum = (typeof PayrollItemScalarFieldEnum)[keyof typeof PayrollItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    code?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    remarks?: StringNullableFilter<"Role"> | string | null
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    remarks?: SortOrderInput | SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    name?: StringFilter<"Role"> | string
    remarks?: StringNullableFilter<"Role"> | string | null
    users?: UserListRelationFilter
  }, "id" | "code">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    remarks?: SortOrderInput | SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    code?: StringWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
    remarks?: StringNullableWithAggregatesFilter<"Role"> | string | null
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    code?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    address?: StringNullableFilter<"Customer"> | string | null
    remarks?: StringNullableFilter<"Customer"> | string | null
    contactPerson?: StringNullableFilter<"Customer"> | string | null
    phone?: StringNullableFilter<"Customer"> | string | null
    email?: StringNullableFilter<"Customer"> | string | null
    projects?: ProjectListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    contactPerson?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    address?: StringNullableFilter<"Customer"> | string | null
    remarks?: StringNullableFilter<"Customer"> | string | null
    contactPerson?: StringNullableFilter<"Customer"> | string | null
    phone?: StringNullableFilter<"Customer"> | string | null
    email?: StringNullableFilter<"Customer"> | string | null
    projects?: ProjectListRelationFilter
  }, "id" | "code">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    contactPerson?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    code?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    address?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    remarks?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    contactPerson?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    email?: StringNullableWithAggregatesFilter<"Customer"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    code?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    roleId?: StringNullableFilter<"User"> | string | null
    branchLegacy?: StringNullableFilter<"User"> | string | null
    branchId?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleNullableRelationFilter, RoleWhereInput> | null
    branch?: XOR<BranchNullableRelationFilter, BranchWhereInput> | null
    timesheets?: TimesheetListRelationFilter
    leaves?: LeaveListRelationFilter
    attendance?: AttendanceListRelationFilter
    managedProjects?: ProjectListRelationFilter
    projectMemberships?: ProjectListRelationFilter
    assignedTasks?: TaskListRelationFilter
    attendanceRequest?: AttendanceRequestListRelationFilter
    salaryStructure?: XOR<SalaryStructureNullableRelationFilter, SalaryStructureWhereInput> | null
    payrolls?: PayrollListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    roleId?: SortOrderInput | SortOrder
    branchLegacy?: SortOrderInput | SortOrder
    branchId?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    role?: RoleOrderByWithRelationInput
    branch?: BranchOrderByWithRelationInput
    timesheets?: TimesheetOrderByRelationAggregateInput
    leaves?: LeaveOrderByRelationAggregateInput
    attendance?: AttendanceOrderByRelationAggregateInput
    managedProjects?: ProjectOrderByRelationAggregateInput
    projectMemberships?: ProjectOrderByRelationAggregateInput
    assignedTasks?: TaskOrderByRelationAggregateInput
    attendanceRequest?: AttendanceRequestOrderByRelationAggregateInput
    salaryStructure?: SalaryStructureOrderByWithRelationInput
    payrolls?: PayrollOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    roleId?: StringNullableFilter<"User"> | string | null
    branchLegacy?: StringNullableFilter<"User"> | string | null
    branchId?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleNullableRelationFilter, RoleWhereInput> | null
    branch?: XOR<BranchNullableRelationFilter, BranchWhereInput> | null
    timesheets?: TimesheetListRelationFilter
    leaves?: LeaveListRelationFilter
    attendance?: AttendanceListRelationFilter
    managedProjects?: ProjectListRelationFilter
    projectMemberships?: ProjectListRelationFilter
    assignedTasks?: TaskListRelationFilter
    attendanceRequest?: AttendanceRequestListRelationFilter
    salaryStructure?: XOR<SalaryStructureNullableRelationFilter, SalaryStructureWhereInput> | null
    payrolls?: PayrollListRelationFilter
  }, "id" | "code" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    roleId?: SortOrderInput | SortOrder
    branchLegacy?: SortOrderInput | SortOrder
    branchId?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    code?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    roleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    branchLegacy?: StringNullableWithAggregatesFilter<"User"> | string | null
    branchId?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    code?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    isActive?: BoolFilter<"Project"> | boolean
    customerId?: StringNullableFilter<"Project"> | string | null
    managerId?: StringNullableFilter<"Project"> | string | null
    remarks?: StringNullableFilter<"Project"> | string | null
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    customer?: XOR<CustomerNullableRelationFilter, CustomerWhereInput> | null
    manager?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    teamMembers?: UserListRelationFilter
    entries?: TimesheetEntryListRelationFilter
    tasks?: TaskListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    customerId?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    customer?: CustomerOrderByWithRelationInput
    manager?: UserOrderByWithRelationInput
    teamMembers?: UserOrderByRelationAggregateInput
    entries?: TimesheetEntryOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    isActive?: BoolFilter<"Project"> | boolean
    customerId?: StringNullableFilter<"Project"> | string | null
    managerId?: StringNullableFilter<"Project"> | string | null
    remarks?: StringNullableFilter<"Project"> | string | null
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    customer?: XOR<CustomerNullableRelationFilter, CustomerWhereInput> | null
    manager?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    teamMembers?: UserListRelationFilter
    entries?: TimesheetEntryListRelationFilter
    tasks?: TaskListRelationFilter
  }, "id" | "code">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    customerId?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    code?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    isActive?: BoolWithAggregatesFilter<"Project"> | boolean
    customerId?: StringNullableWithAggregatesFilter<"Project"> | string | null
    managerId?: StringNullableWithAggregatesFilter<"Project"> | string | null
    remarks?: StringNullableWithAggregatesFilter<"Project"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
  }

  export type TimesheetWhereInput = {
    AND?: TimesheetWhereInput | TimesheetWhereInput[]
    OR?: TimesheetWhereInput[]
    NOT?: TimesheetWhereInput | TimesheetWhereInput[]
    id?: StringFilter<"Timesheet"> | string
    userId?: StringFilter<"Timesheet"> | string
    date?: DateTimeFilter<"Timesheet"> | Date | string
    status?: StringFilter<"Timesheet"> | string
    totalHours?: FloatFilter<"Timesheet"> | number
    createdAt?: DateTimeFilter<"Timesheet"> | Date | string
    updatedAt?: DateTimeFilter<"Timesheet"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    entries?: TimesheetEntryListRelationFilter
  }

  export type TimesheetOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    totalHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    entries?: TimesheetEntryOrderByRelationAggregateInput
  }

  export type TimesheetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimesheetWhereInput | TimesheetWhereInput[]
    OR?: TimesheetWhereInput[]
    NOT?: TimesheetWhereInput | TimesheetWhereInput[]
    userId?: StringFilter<"Timesheet"> | string
    date?: DateTimeFilter<"Timesheet"> | Date | string
    status?: StringFilter<"Timesheet"> | string
    totalHours?: FloatFilter<"Timesheet"> | number
    createdAt?: DateTimeFilter<"Timesheet"> | Date | string
    updatedAt?: DateTimeFilter<"Timesheet"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    entries?: TimesheetEntryListRelationFilter
  }, "id">

  export type TimesheetOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    totalHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TimesheetCountOrderByAggregateInput
    _avg?: TimesheetAvgOrderByAggregateInput
    _max?: TimesheetMaxOrderByAggregateInput
    _min?: TimesheetMinOrderByAggregateInput
    _sum?: TimesheetSumOrderByAggregateInput
  }

  export type TimesheetScalarWhereWithAggregatesInput = {
    AND?: TimesheetScalarWhereWithAggregatesInput | TimesheetScalarWhereWithAggregatesInput[]
    OR?: TimesheetScalarWhereWithAggregatesInput[]
    NOT?: TimesheetScalarWhereWithAggregatesInput | TimesheetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Timesheet"> | string
    userId?: StringWithAggregatesFilter<"Timesheet"> | string
    date?: DateTimeWithAggregatesFilter<"Timesheet"> | Date | string
    status?: StringWithAggregatesFilter<"Timesheet"> | string
    totalHours?: FloatWithAggregatesFilter<"Timesheet"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Timesheet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Timesheet"> | Date | string
  }

  export type TimesheetEntryWhereInput = {
    AND?: TimesheetEntryWhereInput | TimesheetEntryWhereInput[]
    OR?: TimesheetEntryWhereInput[]
    NOT?: TimesheetEntryWhereInput | TimesheetEntryWhereInput[]
    id?: StringFilter<"TimesheetEntry"> | string
    timesheetId?: StringFilter<"TimesheetEntry"> | string
    projectId?: StringFilter<"TimesheetEntry"> | string
    taskId?: StringNullableFilter<"TimesheetEntry"> | string | null
    activity?: StringNullableFilter<"TimesheetEntry"> | string | null
    location?: StringNullableFilter<"TimesheetEntry"> | string | null
    description?: StringFilter<"TimesheetEntry"> | string
    hours?: FloatFilter<"TimesheetEntry"> | number
    timesheet?: XOR<TimesheetRelationFilter, TimesheetWhereInput>
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }

  export type TimesheetEntryOrderByWithRelationInput = {
    id?: SortOrder
    timesheetId?: SortOrder
    projectId?: SortOrder
    taskId?: SortOrderInput | SortOrder
    activity?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    description?: SortOrder
    hours?: SortOrder
    timesheet?: TimesheetOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
  }

  export type TimesheetEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimesheetEntryWhereInput | TimesheetEntryWhereInput[]
    OR?: TimesheetEntryWhereInput[]
    NOT?: TimesheetEntryWhereInput | TimesheetEntryWhereInput[]
    timesheetId?: StringFilter<"TimesheetEntry"> | string
    projectId?: StringFilter<"TimesheetEntry"> | string
    taskId?: StringNullableFilter<"TimesheetEntry"> | string | null
    activity?: StringNullableFilter<"TimesheetEntry"> | string | null
    location?: StringNullableFilter<"TimesheetEntry"> | string | null
    description?: StringFilter<"TimesheetEntry"> | string
    hours?: FloatFilter<"TimesheetEntry"> | number
    timesheet?: XOR<TimesheetRelationFilter, TimesheetWhereInput>
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }, "id">

  export type TimesheetEntryOrderByWithAggregationInput = {
    id?: SortOrder
    timesheetId?: SortOrder
    projectId?: SortOrder
    taskId?: SortOrderInput | SortOrder
    activity?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    description?: SortOrder
    hours?: SortOrder
    _count?: TimesheetEntryCountOrderByAggregateInput
    _avg?: TimesheetEntryAvgOrderByAggregateInput
    _max?: TimesheetEntryMaxOrderByAggregateInput
    _min?: TimesheetEntryMinOrderByAggregateInput
    _sum?: TimesheetEntrySumOrderByAggregateInput
  }

  export type TimesheetEntryScalarWhereWithAggregatesInput = {
    AND?: TimesheetEntryScalarWhereWithAggregatesInput | TimesheetEntryScalarWhereWithAggregatesInput[]
    OR?: TimesheetEntryScalarWhereWithAggregatesInput[]
    NOT?: TimesheetEntryScalarWhereWithAggregatesInput | TimesheetEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TimesheetEntry"> | string
    timesheetId?: StringWithAggregatesFilter<"TimesheetEntry"> | string
    projectId?: StringWithAggregatesFilter<"TimesheetEntry"> | string
    taskId?: StringNullableWithAggregatesFilter<"TimesheetEntry"> | string | null
    activity?: StringNullableWithAggregatesFilter<"TimesheetEntry"> | string | null
    location?: StringNullableWithAggregatesFilter<"TimesheetEntry"> | string | null
    description?: StringWithAggregatesFilter<"TimesheetEntry"> | string
    hours?: FloatWithAggregatesFilter<"TimesheetEntry"> | number
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: StringFilter<"Task"> | string
    priority?: StringFilter<"Task"> | string
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    assignedToId?: StringFilter<"Task"> | string
    projectId?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    assignedTo?: XOR<UserRelationFilter, UserWhereInput>
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    assignedToId?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignedTo?: UserOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: StringFilter<"Task"> | string
    priority?: StringFilter<"Task"> | string
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    assignedToId?: StringFilter<"Task"> | string
    projectId?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    assignedTo?: XOR<UserRelationFilter, UserWhereInput>
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    assignedToId?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    status?: StringWithAggregatesFilter<"Task"> | string
    priority?: StringWithAggregatesFilter<"Task"> | string
    dueDate?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    assignedToId?: StringWithAggregatesFilter<"Task"> | string
    projectId?: StringWithAggregatesFilter<"Task"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type LeaveWhereInput = {
    AND?: LeaveWhereInput | LeaveWhereInput[]
    OR?: LeaveWhereInput[]
    NOT?: LeaveWhereInput | LeaveWhereInput[]
    id?: StringFilter<"Leave"> | string
    userId?: StringFilter<"Leave"> | string
    date?: DateTimeFilter<"Leave"> | Date | string
    type?: StringFilter<"Leave"> | string
    status?: StringFilter<"Leave"> | string
    reason?: StringNullableFilter<"Leave"> | string | null
    createdAt?: DateTimeFilter<"Leave"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type LeaveOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LeaveWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeaveWhereInput | LeaveWhereInput[]
    OR?: LeaveWhereInput[]
    NOT?: LeaveWhereInput | LeaveWhereInput[]
    userId?: StringFilter<"Leave"> | string
    date?: DateTimeFilter<"Leave"> | Date | string
    type?: StringFilter<"Leave"> | string
    status?: StringFilter<"Leave"> | string
    reason?: StringNullableFilter<"Leave"> | string | null
    createdAt?: DateTimeFilter<"Leave"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type LeaveOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LeaveCountOrderByAggregateInput
    _max?: LeaveMaxOrderByAggregateInput
    _min?: LeaveMinOrderByAggregateInput
  }

  export type LeaveScalarWhereWithAggregatesInput = {
    AND?: LeaveScalarWhereWithAggregatesInput | LeaveScalarWhereWithAggregatesInput[]
    OR?: LeaveScalarWhereWithAggregatesInput[]
    NOT?: LeaveScalarWhereWithAggregatesInput | LeaveScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Leave"> | string
    userId?: StringWithAggregatesFilter<"Leave"> | string
    date?: DateTimeWithAggregatesFilter<"Leave"> | Date | string
    type?: StringWithAggregatesFilter<"Leave"> | string
    status?: StringWithAggregatesFilter<"Leave"> | string
    reason?: StringNullableWithAggregatesFilter<"Leave"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Leave"> | Date | string
  }

  export type BranchWhereInput = {
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    id?: StringFilter<"Branch"> | string
    name?: StringFilter<"Branch"> | string
    address?: StringNullableFilter<"Branch"> | string | null
    latitude?: FloatFilter<"Branch"> | number
    longitude?: FloatFilter<"Branch"> | number
    radius?: FloatFilter<"Branch"> | number
    shiftStart?: StringFilter<"Branch"> | string
    shiftEnd?: StringFilter<"Branch"> | string
    isActive?: BoolFilter<"Branch"> | boolean
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    updatedAt?: DateTimeFilter<"Branch"> | Date | string
    users?: UserListRelationFilter
  }

  export type BranchOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    shiftStart?: SortOrder
    shiftEnd?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type BranchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    name?: StringFilter<"Branch"> | string
    address?: StringNullableFilter<"Branch"> | string | null
    latitude?: FloatFilter<"Branch"> | number
    longitude?: FloatFilter<"Branch"> | number
    radius?: FloatFilter<"Branch"> | number
    shiftStart?: StringFilter<"Branch"> | string
    shiftEnd?: StringFilter<"Branch"> | string
    isActive?: BoolFilter<"Branch"> | boolean
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    updatedAt?: DateTimeFilter<"Branch"> | Date | string
    users?: UserListRelationFilter
  }, "id">

  export type BranchOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    shiftStart?: SortOrder
    shiftEnd?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BranchCountOrderByAggregateInput
    _avg?: BranchAvgOrderByAggregateInput
    _max?: BranchMaxOrderByAggregateInput
    _min?: BranchMinOrderByAggregateInput
    _sum?: BranchSumOrderByAggregateInput
  }

  export type BranchScalarWhereWithAggregatesInput = {
    AND?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    OR?: BranchScalarWhereWithAggregatesInput[]
    NOT?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Branch"> | string
    name?: StringWithAggregatesFilter<"Branch"> | string
    address?: StringNullableWithAggregatesFilter<"Branch"> | string | null
    latitude?: FloatWithAggregatesFilter<"Branch"> | number
    longitude?: FloatWithAggregatesFilter<"Branch"> | number
    radius?: FloatWithAggregatesFilter<"Branch"> | number
    shiftStart?: StringWithAggregatesFilter<"Branch"> | string
    shiftEnd?: StringWithAggregatesFilter<"Branch"> | string
    isActive?: BoolWithAggregatesFilter<"Branch"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Branch"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Branch"> | Date | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: StringFilter<"Attendance"> | string
    userId?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    clockIn?: DateTimeFilter<"Attendance"> | Date | string
    clockInLat?: FloatNullableFilter<"Attendance"> | number | null
    clockInLng?: FloatNullableFilter<"Attendance"> | number | null
    clockOut?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    clockOutLat?: FloatNullableFilter<"Attendance"> | number | null
    clockOutLng?: FloatNullableFilter<"Attendance"> | number | null
    status?: StringFilter<"Attendance"> | string
    ipAddress?: StringNullableFilter<"Attendance"> | string | null
    punchMode?: StringFilter<"Attendance"> | string
    punchInNote?: StringNullableFilter<"Attendance"> | string | null
    punchOutNote?: StringNullableFilter<"Attendance"> | string | null
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    clockIn?: SortOrder
    clockInLat?: SortOrderInput | SortOrder
    clockInLng?: SortOrderInput | SortOrder
    clockOut?: SortOrderInput | SortOrder
    clockOutLat?: SortOrderInput | SortOrder
    clockOutLng?: SortOrderInput | SortOrder
    status?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    punchMode?: SortOrder
    punchInNote?: SortOrderInput | SortOrder
    punchOutNote?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    userId?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    clockIn?: DateTimeFilter<"Attendance"> | Date | string
    clockInLat?: FloatNullableFilter<"Attendance"> | number | null
    clockInLng?: FloatNullableFilter<"Attendance"> | number | null
    clockOut?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    clockOutLat?: FloatNullableFilter<"Attendance"> | number | null
    clockOutLng?: FloatNullableFilter<"Attendance"> | number | null
    status?: StringFilter<"Attendance"> | string
    ipAddress?: StringNullableFilter<"Attendance"> | string | null
    punchMode?: StringFilter<"Attendance"> | string
    punchInNote?: StringNullableFilter<"Attendance"> | string | null
    punchOutNote?: StringNullableFilter<"Attendance"> | string | null
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    clockIn?: SortOrder
    clockInLat?: SortOrderInput | SortOrder
    clockInLng?: SortOrderInput | SortOrder
    clockOut?: SortOrderInput | SortOrder
    clockOutLat?: SortOrderInput | SortOrder
    clockOutLng?: SortOrderInput | SortOrder
    status?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    punchMode?: SortOrder
    punchInNote?: SortOrderInput | SortOrder
    punchOutNote?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _avg?: AttendanceAvgOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
    _sum?: AttendanceSumOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attendance"> | string
    userId?: StringWithAggregatesFilter<"Attendance"> | string
    date?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    clockIn?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    clockInLat?: FloatNullableWithAggregatesFilter<"Attendance"> | number | null
    clockInLng?: FloatNullableWithAggregatesFilter<"Attendance"> | number | null
    clockOut?: DateTimeNullableWithAggregatesFilter<"Attendance"> | Date | string | null
    clockOutLat?: FloatNullableWithAggregatesFilter<"Attendance"> | number | null
    clockOutLng?: FloatNullableWithAggregatesFilter<"Attendance"> | number | null
    status?: StringWithAggregatesFilter<"Attendance"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    punchMode?: StringWithAggregatesFilter<"Attendance"> | string
    punchInNote?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    punchOutNote?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
  }

  export type AttendanceRequestWhereInput = {
    AND?: AttendanceRequestWhereInput | AttendanceRequestWhereInput[]
    OR?: AttendanceRequestWhereInput[]
    NOT?: AttendanceRequestWhereInput | AttendanceRequestWhereInput[]
    id?: StringFilter<"AttendanceRequest"> | string
    userId?: StringFilter<"AttendanceRequest"> | string
    attendanceId?: StringNullableFilter<"AttendanceRequest"> | string | null
    date?: DateTimeFilter<"AttendanceRequest"> | Date | string
    requestType?: StringFilter<"AttendanceRequest"> | string
    newTime?: DateTimeFilter<"AttendanceRequest"> | Date | string
    reason?: StringFilter<"AttendanceRequest"> | string
    status?: StringFilter<"AttendanceRequest"> | string
    adminRemarks?: StringNullableFilter<"AttendanceRequest"> | string | null
    createdAt?: DateTimeFilter<"AttendanceRequest"> | Date | string
    updatedAt?: DateTimeFilter<"AttendanceRequest"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AttendanceRequestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    attendanceId?: SortOrderInput | SortOrder
    date?: SortOrder
    requestType?: SortOrder
    newTime?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    adminRemarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AttendanceRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttendanceRequestWhereInput | AttendanceRequestWhereInput[]
    OR?: AttendanceRequestWhereInput[]
    NOT?: AttendanceRequestWhereInput | AttendanceRequestWhereInput[]
    userId?: StringFilter<"AttendanceRequest"> | string
    attendanceId?: StringNullableFilter<"AttendanceRequest"> | string | null
    date?: DateTimeFilter<"AttendanceRequest"> | Date | string
    requestType?: StringFilter<"AttendanceRequest"> | string
    newTime?: DateTimeFilter<"AttendanceRequest"> | Date | string
    reason?: StringFilter<"AttendanceRequest"> | string
    status?: StringFilter<"AttendanceRequest"> | string
    adminRemarks?: StringNullableFilter<"AttendanceRequest"> | string | null
    createdAt?: DateTimeFilter<"AttendanceRequest"> | Date | string
    updatedAt?: DateTimeFilter<"AttendanceRequest"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type AttendanceRequestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    attendanceId?: SortOrderInput | SortOrder
    date?: SortOrder
    requestType?: SortOrder
    newTime?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    adminRemarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttendanceRequestCountOrderByAggregateInput
    _max?: AttendanceRequestMaxOrderByAggregateInput
    _min?: AttendanceRequestMinOrderByAggregateInput
  }

  export type AttendanceRequestScalarWhereWithAggregatesInput = {
    AND?: AttendanceRequestScalarWhereWithAggregatesInput | AttendanceRequestScalarWhereWithAggregatesInput[]
    OR?: AttendanceRequestScalarWhereWithAggregatesInput[]
    NOT?: AttendanceRequestScalarWhereWithAggregatesInput | AttendanceRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AttendanceRequest"> | string
    userId?: StringWithAggregatesFilter<"AttendanceRequest"> | string
    attendanceId?: StringNullableWithAggregatesFilter<"AttendanceRequest"> | string | null
    date?: DateTimeWithAggregatesFilter<"AttendanceRequest"> | Date | string
    requestType?: StringWithAggregatesFilter<"AttendanceRequest"> | string
    newTime?: DateTimeWithAggregatesFilter<"AttendanceRequest"> | Date | string
    reason?: StringWithAggregatesFilter<"AttendanceRequest"> | string
    status?: StringWithAggregatesFilter<"AttendanceRequest"> | string
    adminRemarks?: StringNullableWithAggregatesFilter<"AttendanceRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AttendanceRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AttendanceRequest"> | Date | string
  }

  export type SalaryStructureWhereInput = {
    AND?: SalaryStructureWhereInput | SalaryStructureWhereInput[]
    OR?: SalaryStructureWhereInput[]
    NOT?: SalaryStructureWhereInput | SalaryStructureWhereInput[]
    id?: StringFilter<"SalaryStructure"> | string
    userId?: StringFilter<"SalaryStructure"> | string
    basic?: FloatFilter<"SalaryStructure"> | number
    hra?: FloatFilter<"SalaryStructure"> | number
    allowances?: FloatFilter<"SalaryStructure"> | number
    specialAllowance?: FloatFilter<"SalaryStructure"> | number
    pf?: FloatFilter<"SalaryStructure"> | number
    pt?: FloatFilter<"SalaryStructure"> | number
    deductions?: FloatFilter<"SalaryStructure"> | number
    netSalary?: FloatFilter<"SalaryStructure"> | number
    createdAt?: DateTimeFilter<"SalaryStructure"> | Date | string
    updatedAt?: DateTimeFilter<"SalaryStructure"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SalaryStructureOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    basic?: SortOrder
    hra?: SortOrder
    allowances?: SortOrder
    specialAllowance?: SortOrder
    pf?: SortOrder
    pt?: SortOrder
    deductions?: SortOrder
    netSalary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SalaryStructureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SalaryStructureWhereInput | SalaryStructureWhereInput[]
    OR?: SalaryStructureWhereInput[]
    NOT?: SalaryStructureWhereInput | SalaryStructureWhereInput[]
    basic?: FloatFilter<"SalaryStructure"> | number
    hra?: FloatFilter<"SalaryStructure"> | number
    allowances?: FloatFilter<"SalaryStructure"> | number
    specialAllowance?: FloatFilter<"SalaryStructure"> | number
    pf?: FloatFilter<"SalaryStructure"> | number
    pt?: FloatFilter<"SalaryStructure"> | number
    deductions?: FloatFilter<"SalaryStructure"> | number
    netSalary?: FloatFilter<"SalaryStructure"> | number
    createdAt?: DateTimeFilter<"SalaryStructure"> | Date | string
    updatedAt?: DateTimeFilter<"SalaryStructure"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type SalaryStructureOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    basic?: SortOrder
    hra?: SortOrder
    allowances?: SortOrder
    specialAllowance?: SortOrder
    pf?: SortOrder
    pt?: SortOrder
    deductions?: SortOrder
    netSalary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SalaryStructureCountOrderByAggregateInput
    _avg?: SalaryStructureAvgOrderByAggregateInput
    _max?: SalaryStructureMaxOrderByAggregateInput
    _min?: SalaryStructureMinOrderByAggregateInput
    _sum?: SalaryStructureSumOrderByAggregateInput
  }

  export type SalaryStructureScalarWhereWithAggregatesInput = {
    AND?: SalaryStructureScalarWhereWithAggregatesInput | SalaryStructureScalarWhereWithAggregatesInput[]
    OR?: SalaryStructureScalarWhereWithAggregatesInput[]
    NOT?: SalaryStructureScalarWhereWithAggregatesInput | SalaryStructureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SalaryStructure"> | string
    userId?: StringWithAggregatesFilter<"SalaryStructure"> | string
    basic?: FloatWithAggregatesFilter<"SalaryStructure"> | number
    hra?: FloatWithAggregatesFilter<"SalaryStructure"> | number
    allowances?: FloatWithAggregatesFilter<"SalaryStructure"> | number
    specialAllowance?: FloatWithAggregatesFilter<"SalaryStructure"> | number
    pf?: FloatWithAggregatesFilter<"SalaryStructure"> | number
    pt?: FloatWithAggregatesFilter<"SalaryStructure"> | number
    deductions?: FloatWithAggregatesFilter<"SalaryStructure"> | number
    netSalary?: FloatWithAggregatesFilter<"SalaryStructure"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SalaryStructure"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SalaryStructure"> | Date | string
  }

  export type PayrollWhereInput = {
    AND?: PayrollWhereInput | PayrollWhereInput[]
    OR?: PayrollWhereInput[]
    NOT?: PayrollWhereInput | PayrollWhereInput[]
    id?: StringFilter<"Payroll"> | string
    userId?: StringFilter<"Payroll"> | string
    month?: StringFilter<"Payroll"> | string
    year?: IntFilter<"Payroll"> | number
    monthNumber?: IntFilter<"Payroll"> | number
    basic?: FloatFilter<"Payroll"> | number
    hra?: FloatFilter<"Payroll"> | number
    allowances?: FloatFilter<"Payroll"> | number
    grossEarnings?: FloatFilter<"Payroll"> | number
    pf?: FloatFilter<"Payroll"> | number
    pt?: FloatFilter<"Payroll"> | number
    deductions?: FloatFilter<"Payroll"> | number
    totalDeductions?: FloatFilter<"Payroll"> | number
    netSalary?: FloatFilter<"Payroll"> | number
    totalDays?: IntFilter<"Payroll"> | number
    presentDays?: FloatFilter<"Payroll"> | number
    absentDays?: FloatFilter<"Payroll"> | number
    lopDays?: FloatFilter<"Payroll"> | number
    lopAmount?: FloatFilter<"Payroll"> | number
    status?: StringFilter<"Payroll"> | string
    generatedAt?: DateTimeFilter<"Payroll"> | Date | string
    paidAt?: DateTimeNullableFilter<"Payroll"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    items?: PayrollItemListRelationFilter
  }

  export type PayrollOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    monthNumber?: SortOrder
    basic?: SortOrder
    hra?: SortOrder
    allowances?: SortOrder
    grossEarnings?: SortOrder
    pf?: SortOrder
    pt?: SortOrder
    deductions?: SortOrder
    totalDeductions?: SortOrder
    netSalary?: SortOrder
    totalDays?: SortOrder
    presentDays?: SortOrder
    absentDays?: SortOrder
    lopDays?: SortOrder
    lopAmount?: SortOrder
    status?: SortOrder
    generatedAt?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    items?: PayrollItemOrderByRelationAggregateInput
  }

  export type PayrollWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_month?: PayrollUserIdMonthCompoundUniqueInput
    AND?: PayrollWhereInput | PayrollWhereInput[]
    OR?: PayrollWhereInput[]
    NOT?: PayrollWhereInput | PayrollWhereInput[]
    userId?: StringFilter<"Payroll"> | string
    month?: StringFilter<"Payroll"> | string
    year?: IntFilter<"Payroll"> | number
    monthNumber?: IntFilter<"Payroll"> | number
    basic?: FloatFilter<"Payroll"> | number
    hra?: FloatFilter<"Payroll"> | number
    allowances?: FloatFilter<"Payroll"> | number
    grossEarnings?: FloatFilter<"Payroll"> | number
    pf?: FloatFilter<"Payroll"> | number
    pt?: FloatFilter<"Payroll"> | number
    deductions?: FloatFilter<"Payroll"> | number
    totalDeductions?: FloatFilter<"Payroll"> | number
    netSalary?: FloatFilter<"Payroll"> | number
    totalDays?: IntFilter<"Payroll"> | number
    presentDays?: FloatFilter<"Payroll"> | number
    absentDays?: FloatFilter<"Payroll"> | number
    lopDays?: FloatFilter<"Payroll"> | number
    lopAmount?: FloatFilter<"Payroll"> | number
    status?: StringFilter<"Payroll"> | string
    generatedAt?: DateTimeFilter<"Payroll"> | Date | string
    paidAt?: DateTimeNullableFilter<"Payroll"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    items?: PayrollItemListRelationFilter
  }, "id" | "userId_month">

  export type PayrollOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    monthNumber?: SortOrder
    basic?: SortOrder
    hra?: SortOrder
    allowances?: SortOrder
    grossEarnings?: SortOrder
    pf?: SortOrder
    pt?: SortOrder
    deductions?: SortOrder
    totalDeductions?: SortOrder
    netSalary?: SortOrder
    totalDays?: SortOrder
    presentDays?: SortOrder
    absentDays?: SortOrder
    lopDays?: SortOrder
    lopAmount?: SortOrder
    status?: SortOrder
    generatedAt?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    _count?: PayrollCountOrderByAggregateInput
    _avg?: PayrollAvgOrderByAggregateInput
    _max?: PayrollMaxOrderByAggregateInput
    _min?: PayrollMinOrderByAggregateInput
    _sum?: PayrollSumOrderByAggregateInput
  }

  export type PayrollScalarWhereWithAggregatesInput = {
    AND?: PayrollScalarWhereWithAggregatesInput | PayrollScalarWhereWithAggregatesInput[]
    OR?: PayrollScalarWhereWithAggregatesInput[]
    NOT?: PayrollScalarWhereWithAggregatesInput | PayrollScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payroll"> | string
    userId?: StringWithAggregatesFilter<"Payroll"> | string
    month?: StringWithAggregatesFilter<"Payroll"> | string
    year?: IntWithAggregatesFilter<"Payroll"> | number
    monthNumber?: IntWithAggregatesFilter<"Payroll"> | number
    basic?: FloatWithAggregatesFilter<"Payroll"> | number
    hra?: FloatWithAggregatesFilter<"Payroll"> | number
    allowances?: FloatWithAggregatesFilter<"Payroll"> | number
    grossEarnings?: FloatWithAggregatesFilter<"Payroll"> | number
    pf?: FloatWithAggregatesFilter<"Payroll"> | number
    pt?: FloatWithAggregatesFilter<"Payroll"> | number
    deductions?: FloatWithAggregatesFilter<"Payroll"> | number
    totalDeductions?: FloatWithAggregatesFilter<"Payroll"> | number
    netSalary?: FloatWithAggregatesFilter<"Payroll"> | number
    totalDays?: IntWithAggregatesFilter<"Payroll"> | number
    presentDays?: FloatWithAggregatesFilter<"Payroll"> | number
    absentDays?: FloatWithAggregatesFilter<"Payroll"> | number
    lopDays?: FloatWithAggregatesFilter<"Payroll"> | number
    lopAmount?: FloatWithAggregatesFilter<"Payroll"> | number
    status?: StringWithAggregatesFilter<"Payroll"> | string
    generatedAt?: DateTimeWithAggregatesFilter<"Payroll"> | Date | string
    paidAt?: DateTimeNullableWithAggregatesFilter<"Payroll"> | Date | string | null
  }

  export type PayrollItemWhereInput = {
    AND?: PayrollItemWhereInput | PayrollItemWhereInput[]
    OR?: PayrollItemWhereInput[]
    NOT?: PayrollItemWhereInput | PayrollItemWhereInput[]
    id?: StringFilter<"PayrollItem"> | string
    payrollId?: StringFilter<"PayrollItem"> | string
    label?: StringFilter<"PayrollItem"> | string
    amount?: FloatFilter<"PayrollItem"> | number
    type?: StringFilter<"PayrollItem"> | string
    payroll?: XOR<PayrollRelationFilter, PayrollWhereInput>
  }

  export type PayrollItemOrderByWithRelationInput = {
    id?: SortOrder
    payrollId?: SortOrder
    label?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    payroll?: PayrollOrderByWithRelationInput
  }

  export type PayrollItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PayrollItemWhereInput | PayrollItemWhereInput[]
    OR?: PayrollItemWhereInput[]
    NOT?: PayrollItemWhereInput | PayrollItemWhereInput[]
    payrollId?: StringFilter<"PayrollItem"> | string
    label?: StringFilter<"PayrollItem"> | string
    amount?: FloatFilter<"PayrollItem"> | number
    type?: StringFilter<"PayrollItem"> | string
    payroll?: XOR<PayrollRelationFilter, PayrollWhereInput>
  }, "id">

  export type PayrollItemOrderByWithAggregationInput = {
    id?: SortOrder
    payrollId?: SortOrder
    label?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    _count?: PayrollItemCountOrderByAggregateInput
    _avg?: PayrollItemAvgOrderByAggregateInput
    _max?: PayrollItemMaxOrderByAggregateInput
    _min?: PayrollItemMinOrderByAggregateInput
    _sum?: PayrollItemSumOrderByAggregateInput
  }

  export type PayrollItemScalarWhereWithAggregatesInput = {
    AND?: PayrollItemScalarWhereWithAggregatesInput | PayrollItemScalarWhereWithAggregatesInput[]
    OR?: PayrollItemScalarWhereWithAggregatesInput[]
    NOT?: PayrollItemScalarWhereWithAggregatesInput | PayrollItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PayrollItem"> | string
    payrollId?: StringWithAggregatesFilter<"PayrollItem"> | string
    label?: StringWithAggregatesFilter<"PayrollItem"> | string
    amount?: FloatWithAggregatesFilter<"PayrollItem"> | number
    type?: StringWithAggregatesFilter<"PayrollItem"> | string
  }

  export type RoleCreateInput = {
    id?: string
    code: string
    name: string
    remarks?: string | null
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    remarks?: string | null
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    code: string
    name: string
    remarks?: string | null
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerCreateInput = {
    id?: string
    code: string
    name: string
    address?: string | null
    remarks?: string | null
    contactPerson?: string | null
    phone?: string | null
    email?: string | null
    projects?: ProjectCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    address?: string | null
    remarks?: string | null
    contactPerson?: string | null
    phone?: string | null
    email?: string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    code: string
    name: string
    address?: string | null
    remarks?: string | null
    contactPerson?: string | null
    phone?: string | null
    email?: string | null
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    code?: string | null
    email: string
    password: string
    name?: string | null
    image?: string | null
    branchLegacy?: string | null
    phone?: string | null
    createdAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    branch?: BranchCreateNestedOneWithoutUsersInput
    timesheets?: TimesheetCreateNestedManyWithoutUserInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    attendance?: AttendanceCreateNestedManyWithoutUserInput
    managedProjects?: ProjectCreateNestedManyWithoutManagerInput
    projectMemberships?: ProjectCreateNestedManyWithoutTeamMembersInput
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    attendanceRequest?: AttendanceRequestCreateNestedManyWithoutUserInput
    salaryStructure?: SalaryStructureCreateNestedOneWithoutUserInput
    payrolls?: PayrollCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    code?: string | null
    email: string
    password: string
    name?: string | null
    image?: string | null
    roleId?: string | null
    branchLegacy?: string | null
    branchId?: string | null
    phone?: string | null
    createdAt?: Date | string
    timesheets?: TimesheetUncheckedCreateNestedManyWithoutUserInput
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    managedProjects?: ProjectUncheckedCreateNestedManyWithoutManagerInput
    projectMemberships?: ProjectUncheckedCreateNestedManyWithoutTeamMembersInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    attendanceRequest?: AttendanceRequestUncheckedCreateNestedManyWithoutUserInput
    salaryStructure?: SalaryStructureUncheckedCreateNestedOneWithoutUserInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    branchLegacy?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    branch?: BranchUpdateOneWithoutUsersNestedInput
    timesheets?: TimesheetUpdateManyWithoutUserNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    attendance?: AttendanceUpdateManyWithoutUserNestedInput
    managedProjects?: ProjectUpdateManyWithoutManagerNestedInput
    projectMemberships?: ProjectUpdateManyWithoutTeamMembersNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    attendanceRequest?: AttendanceRequestUpdateManyWithoutUserNestedInput
    salaryStructure?: SalaryStructureUpdateOneWithoutUserNestedInput
    payrolls?: PayrollUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    branchLegacy?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timesheets?: TimesheetUncheckedUpdateManyWithoutUserNestedInput
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    managedProjects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
    projectMemberships?: ProjectUncheckedUpdateManyWithoutTeamMembersNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    attendanceRequest?: AttendanceRequestUncheckedUpdateManyWithoutUserNestedInput
    salaryStructure?: SalaryStructureUncheckedUpdateOneWithoutUserNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    code?: string | null
    email: string
    password: string
    name?: string | null
    image?: string | null
    roleId?: string | null
    branchLegacy?: string | null
    branchId?: string | null
    phone?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    branchLegacy?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    branchLegacy?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    isActive?: boolean
    remarks?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    customer?: CustomerCreateNestedOneWithoutProjectsInput
    manager?: UserCreateNestedOneWithoutManagedProjectsInput
    teamMembers?: UserCreateNestedManyWithoutProjectMembershipsInput
    entries?: TimesheetEntryCreateNestedManyWithoutProjectInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    isActive?: boolean
    customerId?: string | null
    managerId?: string | null
    remarks?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    teamMembers?: UserUncheckedCreateNestedManyWithoutProjectMembershipsInput
    entries?: TimesheetEntryUncheckedCreateNestedManyWithoutProjectInput
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUpdateOneWithoutProjectsNestedInput
    manager?: UserUpdateOneWithoutManagedProjectsNestedInput
    teamMembers?: UserUpdateManyWithoutProjectMembershipsNestedInput
    entries?: TimesheetEntryUpdateManyWithoutProjectNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teamMembers?: UserUncheckedUpdateManyWithoutProjectMembershipsNestedInput
    entries?: TimesheetEntryUncheckedUpdateManyWithoutProjectNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    isActive?: boolean
    customerId?: string | null
    managerId?: string | null
    remarks?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TimesheetCreateInput = {
    id?: string
    date: Date | string
    status?: string
    totalHours?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTimesheetsInput
    entries?: TimesheetEntryCreateNestedManyWithoutTimesheetInput
  }

  export type TimesheetUncheckedCreateInput = {
    id?: string
    userId: string
    date: Date | string
    status?: string
    totalHours?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: TimesheetEntryUncheckedCreateNestedManyWithoutTimesheetInput
  }

  export type TimesheetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    totalHours?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTimesheetsNestedInput
    entries?: TimesheetEntryUpdateManyWithoutTimesheetNestedInput
  }

  export type TimesheetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    totalHours?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: TimesheetEntryUncheckedUpdateManyWithoutTimesheetNestedInput
  }

  export type TimesheetCreateManyInput = {
    id?: string
    userId: string
    date: Date | string
    status?: string
    totalHours?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimesheetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    totalHours?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimesheetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    totalHours?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimesheetEntryCreateInput = {
    id?: string
    taskId?: string | null
    activity?: string | null
    location?: string | null
    description: string
    hours: number
    timesheet: TimesheetCreateNestedOneWithoutEntriesInput
    project: ProjectCreateNestedOneWithoutEntriesInput
  }

  export type TimesheetEntryUncheckedCreateInput = {
    id?: string
    timesheetId: string
    projectId: string
    taskId?: string | null
    activity?: string | null
    location?: string | null
    description: string
    hours: number
  }

  export type TimesheetEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    hours?: FloatFieldUpdateOperationsInput | number
    timesheet?: TimesheetUpdateOneRequiredWithoutEntriesNestedInput
    project?: ProjectUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type TimesheetEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timesheetId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    hours?: FloatFieldUpdateOperationsInput | number
  }

  export type TimesheetEntryCreateManyInput = {
    id?: string
    timesheetId: string
    projectId: string
    taskId?: string | null
    activity?: string | null
    location?: string | null
    description: string
    hours: number
  }

  export type TimesheetEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    hours?: FloatFieldUpdateOperationsInput | number
  }

  export type TimesheetEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timesheetId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    hours?: FloatFieldUpdateOperationsInput | number
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    priority?: string
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo: UserCreateNestedOneWithoutAssignedTasksInput
    project: ProjectCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    priority?: string
    dueDate?: Date | string | null
    assignedToId: string
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    priority?: string
    dueDate?: Date | string | null
    assignedToId: string
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveCreateInput = {
    id?: string
    date: Date | string
    type?: string
    status?: string
    reason?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLeavesInput
  }

  export type LeaveUncheckedCreateInput = {
    id?: string
    userId: string
    date: Date | string
    type?: string
    status?: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type LeaveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLeavesNestedInput
  }

  export type LeaveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveCreateManyInput = {
    id?: string
    userId: string
    date: Date | string
    type?: string
    status?: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type LeaveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchCreateInput = {
    id?: string
    name: string
    address?: string | null
    latitude: number
    longitude: number
    radius?: number
    shiftStart?: string
    shiftEnd?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateInput = {
    id?: string
    name: string
    address?: string | null
    latitude: number
    longitude: number
    radius?: number
    shiftStart?: string
    shiftEnd?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
    shiftStart?: StringFieldUpdateOperationsInput | string
    shiftEnd?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
    shiftStart?: StringFieldUpdateOperationsInput | string
    shiftEnd?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchCreateManyInput = {
    id?: string
    name: string
    address?: string | null
    latitude: number
    longitude: number
    radius?: number
    shiftStart?: string
    shiftEnd?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BranchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
    shiftStart?: StringFieldUpdateOperationsInput | string
    shiftEnd?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
    shiftStart?: StringFieldUpdateOperationsInput | string
    shiftEnd?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateInput = {
    id?: string
    date: Date | string
    clockIn: Date | string
    clockInLat?: number | null
    clockInLng?: number | null
    clockOut?: Date | string | null
    clockOutLat?: number | null
    clockOutLng?: number | null
    status?: string
    ipAddress?: string | null
    punchMode?: string
    punchInNote?: string | null
    punchOutNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: string
    userId: string
    date: Date | string
    clockIn: Date | string
    clockInLat?: number | null
    clockInLng?: number | null
    clockOut?: Date | string | null
    clockOutLat?: number | null
    clockOutLng?: number | null
    status?: string
    ipAddress?: string | null
    punchMode?: string
    punchInNote?: string | null
    punchOutNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockInLat?: NullableFloatFieldUpdateOperationsInput | number | null
    clockInLng?: NullableFloatFieldUpdateOperationsInput | number | null
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clockOutLat?: NullableFloatFieldUpdateOperationsInput | number | null
    clockOutLng?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    punchMode?: StringFieldUpdateOperationsInput | string
    punchInNote?: NullableStringFieldUpdateOperationsInput | string | null
    punchOutNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockInLat?: NullableFloatFieldUpdateOperationsInput | number | null
    clockInLng?: NullableFloatFieldUpdateOperationsInput | number | null
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clockOutLat?: NullableFloatFieldUpdateOperationsInput | number | null
    clockOutLng?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    punchMode?: StringFieldUpdateOperationsInput | string
    punchInNote?: NullableStringFieldUpdateOperationsInput | string | null
    punchOutNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyInput = {
    id?: string
    userId: string
    date: Date | string
    clockIn: Date | string
    clockInLat?: number | null
    clockInLng?: number | null
    clockOut?: Date | string | null
    clockOutLat?: number | null
    clockOutLng?: number | null
    status?: string
    ipAddress?: string | null
    punchMode?: string
    punchInNote?: string | null
    punchOutNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockInLat?: NullableFloatFieldUpdateOperationsInput | number | null
    clockInLng?: NullableFloatFieldUpdateOperationsInput | number | null
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clockOutLat?: NullableFloatFieldUpdateOperationsInput | number | null
    clockOutLng?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    punchMode?: StringFieldUpdateOperationsInput | string
    punchInNote?: NullableStringFieldUpdateOperationsInput | string | null
    punchOutNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockInLat?: NullableFloatFieldUpdateOperationsInput | number | null
    clockInLng?: NullableFloatFieldUpdateOperationsInput | number | null
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clockOutLat?: NullableFloatFieldUpdateOperationsInput | number | null
    clockOutLng?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    punchMode?: StringFieldUpdateOperationsInput | string
    punchInNote?: NullableStringFieldUpdateOperationsInput | string | null
    punchOutNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRequestCreateInput = {
    id?: string
    attendanceId?: string | null
    date: Date | string
    requestType: string
    newTime: Date | string
    reason: string
    status?: string
    adminRemarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAttendanceRequestInput
  }

  export type AttendanceRequestUncheckedCreateInput = {
    id?: string
    userId: string
    attendanceId?: string | null
    date: Date | string
    requestType: string
    newTime: Date | string
    reason: string
    status?: string
    adminRemarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    attendanceId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    requestType?: StringFieldUpdateOperationsInput | string
    newTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    adminRemarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAttendanceRequestNestedInput
  }

  export type AttendanceRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    attendanceId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    requestType?: StringFieldUpdateOperationsInput | string
    newTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    adminRemarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRequestCreateManyInput = {
    id?: string
    userId: string
    attendanceId?: string | null
    date: Date | string
    requestType: string
    newTime: Date | string
    reason: string
    status?: string
    adminRemarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    attendanceId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    requestType?: StringFieldUpdateOperationsInput | string
    newTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    adminRemarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    attendanceId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    requestType?: StringFieldUpdateOperationsInput | string
    newTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    adminRemarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryStructureCreateInput = {
    id?: string
    basic?: number
    hra?: number
    allowances?: number
    specialAllowance?: number
    pf?: number
    pt?: number
    deductions?: number
    netSalary?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSalaryStructureInput
  }

  export type SalaryStructureUncheckedCreateInput = {
    id?: string
    userId: string
    basic?: number
    hra?: number
    allowances?: number
    specialAllowance?: number
    pf?: number
    pt?: number
    deductions?: number
    netSalary?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalaryStructureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    basic?: FloatFieldUpdateOperationsInput | number
    hra?: FloatFieldUpdateOperationsInput | number
    allowances?: FloatFieldUpdateOperationsInput | number
    specialAllowance?: FloatFieldUpdateOperationsInput | number
    pf?: FloatFieldUpdateOperationsInput | number
    pt?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    netSalary?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSalaryStructureNestedInput
  }

  export type SalaryStructureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    basic?: FloatFieldUpdateOperationsInput | number
    hra?: FloatFieldUpdateOperationsInput | number
    allowances?: FloatFieldUpdateOperationsInput | number
    specialAllowance?: FloatFieldUpdateOperationsInput | number
    pf?: FloatFieldUpdateOperationsInput | number
    pt?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    netSalary?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryStructureCreateManyInput = {
    id?: string
    userId: string
    basic?: number
    hra?: number
    allowances?: number
    specialAllowance?: number
    pf?: number
    pt?: number
    deductions?: number
    netSalary?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalaryStructureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    basic?: FloatFieldUpdateOperationsInput | number
    hra?: FloatFieldUpdateOperationsInput | number
    allowances?: FloatFieldUpdateOperationsInput | number
    specialAllowance?: FloatFieldUpdateOperationsInput | number
    pf?: FloatFieldUpdateOperationsInput | number
    pt?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    netSalary?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryStructureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    basic?: FloatFieldUpdateOperationsInput | number
    hra?: FloatFieldUpdateOperationsInput | number
    allowances?: FloatFieldUpdateOperationsInput | number
    specialAllowance?: FloatFieldUpdateOperationsInput | number
    pf?: FloatFieldUpdateOperationsInput | number
    pt?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    netSalary?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollCreateInput = {
    id?: string
    month: string
    year: number
    monthNumber: number
    basic: number
    hra: number
    allowances: number
    grossEarnings: number
    pf: number
    pt: number
    deductions: number
    totalDeductions: number
    netSalary: number
    totalDays: number
    presentDays: number
    absentDays: number
    lopDays: number
    lopAmount: number
    status?: string
    generatedAt?: Date | string
    paidAt?: Date | string | null
    user: UserCreateNestedOneWithoutPayrollsInput
    items?: PayrollItemCreateNestedManyWithoutPayrollInput
  }

  export type PayrollUncheckedCreateInput = {
    id?: string
    userId: string
    month: string
    year: number
    monthNumber: number
    basic: number
    hra: number
    allowances: number
    grossEarnings: number
    pf: number
    pt: number
    deductions: number
    totalDeductions: number
    netSalary: number
    totalDays: number
    presentDays: number
    absentDays: number
    lopDays: number
    lopAmount: number
    status?: string
    generatedAt?: Date | string
    paidAt?: Date | string | null
    items?: PayrollItemUncheckedCreateNestedManyWithoutPayrollInput
  }

  export type PayrollUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    monthNumber?: IntFieldUpdateOperationsInput | number
    basic?: FloatFieldUpdateOperationsInput | number
    hra?: FloatFieldUpdateOperationsInput | number
    allowances?: FloatFieldUpdateOperationsInput | number
    grossEarnings?: FloatFieldUpdateOperationsInput | number
    pf?: FloatFieldUpdateOperationsInput | number
    pt?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    totalDeductions?: FloatFieldUpdateOperationsInput | number
    netSalary?: FloatFieldUpdateOperationsInput | number
    totalDays?: IntFieldUpdateOperationsInput | number
    presentDays?: FloatFieldUpdateOperationsInput | number
    absentDays?: FloatFieldUpdateOperationsInput | number
    lopDays?: FloatFieldUpdateOperationsInput | number
    lopAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutPayrollsNestedInput
    items?: PayrollItemUpdateManyWithoutPayrollNestedInput
  }

  export type PayrollUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    monthNumber?: IntFieldUpdateOperationsInput | number
    basic?: FloatFieldUpdateOperationsInput | number
    hra?: FloatFieldUpdateOperationsInput | number
    allowances?: FloatFieldUpdateOperationsInput | number
    grossEarnings?: FloatFieldUpdateOperationsInput | number
    pf?: FloatFieldUpdateOperationsInput | number
    pt?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    totalDeductions?: FloatFieldUpdateOperationsInput | number
    netSalary?: FloatFieldUpdateOperationsInput | number
    totalDays?: IntFieldUpdateOperationsInput | number
    presentDays?: FloatFieldUpdateOperationsInput | number
    absentDays?: FloatFieldUpdateOperationsInput | number
    lopDays?: FloatFieldUpdateOperationsInput | number
    lopAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: PayrollItemUncheckedUpdateManyWithoutPayrollNestedInput
  }

  export type PayrollCreateManyInput = {
    id?: string
    userId: string
    month: string
    year: number
    monthNumber: number
    basic: number
    hra: number
    allowances: number
    grossEarnings: number
    pf: number
    pt: number
    deductions: number
    totalDeductions: number
    netSalary: number
    totalDays: number
    presentDays: number
    absentDays: number
    lopDays: number
    lopAmount: number
    status?: string
    generatedAt?: Date | string
    paidAt?: Date | string | null
  }

  export type PayrollUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    monthNumber?: IntFieldUpdateOperationsInput | number
    basic?: FloatFieldUpdateOperationsInput | number
    hra?: FloatFieldUpdateOperationsInput | number
    allowances?: FloatFieldUpdateOperationsInput | number
    grossEarnings?: FloatFieldUpdateOperationsInput | number
    pf?: FloatFieldUpdateOperationsInput | number
    pt?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    totalDeductions?: FloatFieldUpdateOperationsInput | number
    netSalary?: FloatFieldUpdateOperationsInput | number
    totalDays?: IntFieldUpdateOperationsInput | number
    presentDays?: FloatFieldUpdateOperationsInput | number
    absentDays?: FloatFieldUpdateOperationsInput | number
    lopDays?: FloatFieldUpdateOperationsInput | number
    lopAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PayrollUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    monthNumber?: IntFieldUpdateOperationsInput | number
    basic?: FloatFieldUpdateOperationsInput | number
    hra?: FloatFieldUpdateOperationsInput | number
    allowances?: FloatFieldUpdateOperationsInput | number
    grossEarnings?: FloatFieldUpdateOperationsInput | number
    pf?: FloatFieldUpdateOperationsInput | number
    pt?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    totalDeductions?: FloatFieldUpdateOperationsInput | number
    netSalary?: FloatFieldUpdateOperationsInput | number
    totalDays?: IntFieldUpdateOperationsInput | number
    presentDays?: FloatFieldUpdateOperationsInput | number
    absentDays?: FloatFieldUpdateOperationsInput | number
    lopDays?: FloatFieldUpdateOperationsInput | number
    lopAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PayrollItemCreateInput = {
    id?: string
    label: string
    amount: number
    type: string
    payroll: PayrollCreateNestedOneWithoutItemsInput
  }

  export type PayrollItemUncheckedCreateInput = {
    id?: string
    payrollId: string
    label: string
    amount: number
    type: string
  }

  export type PayrollItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    payroll?: PayrollUpdateOneRequiredWithoutItemsNestedInput
  }

  export type PayrollItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    payrollId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PayrollItemCreateManyInput = {
    id?: string
    payrollId: string
    label: string
    amount: number
    type: string
  }

  export type PayrollItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PayrollItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    payrollId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    remarks?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    remarks?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    remarks?: SortOrder
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

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    address?: SortOrder
    remarks?: SortOrder
    contactPerson?: SortOrder
    phone?: SortOrder
    email?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    address?: SortOrder
    remarks?: SortOrder
    contactPerson?: SortOrder
    phone?: SortOrder
    email?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    address?: SortOrder
    remarks?: SortOrder
    contactPerson?: SortOrder
    phone?: SortOrder
    email?: SortOrder
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

  export type RoleNullableRelationFilter = {
    is?: RoleWhereInput | null
    isNot?: RoleWhereInput | null
  }

  export type BranchNullableRelationFilter = {
    is?: BranchWhereInput | null
    isNot?: BranchWhereInput | null
  }

  export type TimesheetListRelationFilter = {
    every?: TimesheetWhereInput
    some?: TimesheetWhereInput
    none?: TimesheetWhereInput
  }

  export type LeaveListRelationFilter = {
    every?: LeaveWhereInput
    some?: LeaveWhereInput
    none?: LeaveWhereInput
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type AttendanceRequestListRelationFilter = {
    every?: AttendanceRequestWhereInput
    some?: AttendanceRequestWhereInput
    none?: AttendanceRequestWhereInput
  }

  export type SalaryStructureNullableRelationFilter = {
    is?: SalaryStructureWhereInput | null
    isNot?: SalaryStructureWhereInput | null
  }

  export type PayrollListRelationFilter = {
    every?: PayrollWhereInput
    some?: PayrollWhereInput
    none?: PayrollWhereInput
  }

  export type TimesheetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeaveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendanceRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PayrollOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    image?: SortOrder
    roleId?: SortOrder
    branchLegacy?: SortOrder
    branchId?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    image?: SortOrder
    roleId?: SortOrder
    branchLegacy?: SortOrder
    branchId?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    image?: SortOrder
    roleId?: SortOrder
    branchLegacy?: SortOrder
    branchId?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CustomerNullableRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TimesheetEntryListRelationFilter = {
    every?: TimesheetEntryWhereInput
    some?: TimesheetEntryWhereInput
    none?: TimesheetEntryWhereInput
  }

  export type TimesheetEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    customerId?: SortOrder
    managerId?: SortOrder
    remarks?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    customerId?: SortOrder
    managerId?: SortOrder
    remarks?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    customerId?: SortOrder
    managerId?: SortOrder
    remarks?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TimesheetCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    totalHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimesheetAvgOrderByAggregateInput = {
    totalHours?: SortOrder
  }

  export type TimesheetMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    totalHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimesheetMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    totalHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimesheetSumOrderByAggregateInput = {
    totalHours?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TimesheetRelationFilter = {
    is?: TimesheetWhereInput
    isNot?: TimesheetWhereInput
  }

  export type ProjectRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type TimesheetEntryCountOrderByAggregateInput = {
    id?: SortOrder
    timesheetId?: SortOrder
    projectId?: SortOrder
    taskId?: SortOrder
    activity?: SortOrder
    location?: SortOrder
    description?: SortOrder
    hours?: SortOrder
  }

  export type TimesheetEntryAvgOrderByAggregateInput = {
    hours?: SortOrder
  }

  export type TimesheetEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    timesheetId?: SortOrder
    projectId?: SortOrder
    taskId?: SortOrder
    activity?: SortOrder
    location?: SortOrder
    description?: SortOrder
    hours?: SortOrder
  }

  export type TimesheetEntryMinOrderByAggregateInput = {
    id?: SortOrder
    timesheetId?: SortOrder
    projectId?: SortOrder
    taskId?: SortOrder
    activity?: SortOrder
    location?: SortOrder
    description?: SortOrder
    hours?: SortOrder
  }

  export type TimesheetEntrySumOrderByAggregateInput = {
    hours?: SortOrder
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    assignedToId?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    assignedToId?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    assignedToId?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaveCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type LeaveMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type LeaveMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type BranchCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    shiftStart?: SortOrder
    shiftEnd?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BranchAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
  }

  export type BranchMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    shiftStart?: SortOrder
    shiftEnd?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BranchMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    shiftStart?: SortOrder
    shiftEnd?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BranchSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    clockIn?: SortOrder
    clockInLat?: SortOrder
    clockInLng?: SortOrder
    clockOut?: SortOrder
    clockOutLat?: SortOrder
    clockOutLng?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrder
    punchMode?: SortOrder
    punchInNote?: SortOrder
    punchOutNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceAvgOrderByAggregateInput = {
    clockInLat?: SortOrder
    clockInLng?: SortOrder
    clockOutLat?: SortOrder
    clockOutLng?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    clockIn?: SortOrder
    clockInLat?: SortOrder
    clockInLng?: SortOrder
    clockOut?: SortOrder
    clockOutLat?: SortOrder
    clockOutLng?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrder
    punchMode?: SortOrder
    punchInNote?: SortOrder
    punchOutNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    clockIn?: SortOrder
    clockInLat?: SortOrder
    clockInLng?: SortOrder
    clockOut?: SortOrder
    clockOutLat?: SortOrder
    clockOutLng?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrder
    punchMode?: SortOrder
    punchInNote?: SortOrder
    punchOutNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceSumOrderByAggregateInput = {
    clockInLat?: SortOrder
    clockInLng?: SortOrder
    clockOutLat?: SortOrder
    clockOutLng?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type AttendanceRequestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    attendanceId?: SortOrder
    date?: SortOrder
    requestType?: SortOrder
    newTime?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    adminRemarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    attendanceId?: SortOrder
    date?: SortOrder
    requestType?: SortOrder
    newTime?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    adminRemarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceRequestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    attendanceId?: SortOrder
    date?: SortOrder
    requestType?: SortOrder
    newTime?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    adminRemarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalaryStructureCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    basic?: SortOrder
    hra?: SortOrder
    allowances?: SortOrder
    specialAllowance?: SortOrder
    pf?: SortOrder
    pt?: SortOrder
    deductions?: SortOrder
    netSalary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalaryStructureAvgOrderByAggregateInput = {
    basic?: SortOrder
    hra?: SortOrder
    allowances?: SortOrder
    specialAllowance?: SortOrder
    pf?: SortOrder
    pt?: SortOrder
    deductions?: SortOrder
    netSalary?: SortOrder
  }

  export type SalaryStructureMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    basic?: SortOrder
    hra?: SortOrder
    allowances?: SortOrder
    specialAllowance?: SortOrder
    pf?: SortOrder
    pt?: SortOrder
    deductions?: SortOrder
    netSalary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalaryStructureMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    basic?: SortOrder
    hra?: SortOrder
    allowances?: SortOrder
    specialAllowance?: SortOrder
    pf?: SortOrder
    pt?: SortOrder
    deductions?: SortOrder
    netSalary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalaryStructureSumOrderByAggregateInput = {
    basic?: SortOrder
    hra?: SortOrder
    allowances?: SortOrder
    specialAllowance?: SortOrder
    pf?: SortOrder
    pt?: SortOrder
    deductions?: SortOrder
    netSalary?: SortOrder
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

  export type PayrollItemListRelationFilter = {
    every?: PayrollItemWhereInput
    some?: PayrollItemWhereInput
    none?: PayrollItemWhereInput
  }

  export type PayrollItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PayrollUserIdMonthCompoundUniqueInput = {
    userId: string
    month: string
  }

  export type PayrollCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    monthNumber?: SortOrder
    basic?: SortOrder
    hra?: SortOrder
    allowances?: SortOrder
    grossEarnings?: SortOrder
    pf?: SortOrder
    pt?: SortOrder
    deductions?: SortOrder
    totalDeductions?: SortOrder
    netSalary?: SortOrder
    totalDays?: SortOrder
    presentDays?: SortOrder
    absentDays?: SortOrder
    lopDays?: SortOrder
    lopAmount?: SortOrder
    status?: SortOrder
    generatedAt?: SortOrder
    paidAt?: SortOrder
  }

  export type PayrollAvgOrderByAggregateInput = {
    year?: SortOrder
    monthNumber?: SortOrder
    basic?: SortOrder
    hra?: SortOrder
    allowances?: SortOrder
    grossEarnings?: SortOrder
    pf?: SortOrder
    pt?: SortOrder
    deductions?: SortOrder
    totalDeductions?: SortOrder
    netSalary?: SortOrder
    totalDays?: SortOrder
    presentDays?: SortOrder
    absentDays?: SortOrder
    lopDays?: SortOrder
    lopAmount?: SortOrder
  }

  export type PayrollMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    monthNumber?: SortOrder
    basic?: SortOrder
    hra?: SortOrder
    allowances?: SortOrder
    grossEarnings?: SortOrder
    pf?: SortOrder
    pt?: SortOrder
    deductions?: SortOrder
    totalDeductions?: SortOrder
    netSalary?: SortOrder
    totalDays?: SortOrder
    presentDays?: SortOrder
    absentDays?: SortOrder
    lopDays?: SortOrder
    lopAmount?: SortOrder
    status?: SortOrder
    generatedAt?: SortOrder
    paidAt?: SortOrder
  }

  export type PayrollMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    monthNumber?: SortOrder
    basic?: SortOrder
    hra?: SortOrder
    allowances?: SortOrder
    grossEarnings?: SortOrder
    pf?: SortOrder
    pt?: SortOrder
    deductions?: SortOrder
    totalDeductions?: SortOrder
    netSalary?: SortOrder
    totalDays?: SortOrder
    presentDays?: SortOrder
    absentDays?: SortOrder
    lopDays?: SortOrder
    lopAmount?: SortOrder
    status?: SortOrder
    generatedAt?: SortOrder
    paidAt?: SortOrder
  }

  export type PayrollSumOrderByAggregateInput = {
    year?: SortOrder
    monthNumber?: SortOrder
    basic?: SortOrder
    hra?: SortOrder
    allowances?: SortOrder
    grossEarnings?: SortOrder
    pf?: SortOrder
    pt?: SortOrder
    deductions?: SortOrder
    totalDeductions?: SortOrder
    netSalary?: SortOrder
    totalDays?: SortOrder
    presentDays?: SortOrder
    absentDays?: SortOrder
    lopDays?: SortOrder
    lopAmount?: SortOrder
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

  export type PayrollRelationFilter = {
    is?: PayrollWhereInput
    isNot?: PayrollWhereInput
  }

  export type PayrollItemCountOrderByAggregateInput = {
    id?: SortOrder
    payrollId?: SortOrder
    label?: SortOrder
    amount?: SortOrder
    type?: SortOrder
  }

  export type PayrollItemAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PayrollItemMaxOrderByAggregateInput = {
    id?: SortOrder
    payrollId?: SortOrder
    label?: SortOrder
    amount?: SortOrder
    type?: SortOrder
  }

  export type PayrollItemMinOrderByAggregateInput = {
    id?: SortOrder
    payrollId?: SortOrder
    label?: SortOrder
    amount?: SortOrder
    type?: SortOrder
  }

  export type PayrollItemSumOrderByAggregateInput = {
    amount?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type ProjectCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ProjectCreateWithoutCustomerInput, ProjectUncheckedCreateWithoutCustomerInput> | ProjectCreateWithoutCustomerInput[] | ProjectUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCustomerInput | ProjectCreateOrConnectWithoutCustomerInput[]
    createMany?: ProjectCreateManyCustomerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ProjectCreateWithoutCustomerInput, ProjectUncheckedCreateWithoutCustomerInput> | ProjectCreateWithoutCustomerInput[] | ProjectUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCustomerInput | ProjectCreateOrConnectWithoutCustomerInput[]
    createMany?: ProjectCreateManyCustomerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ProjectCreateWithoutCustomerInput, ProjectUncheckedCreateWithoutCustomerInput> | ProjectCreateWithoutCustomerInput[] | ProjectUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCustomerInput | ProjectCreateOrConnectWithoutCustomerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCustomerInput | ProjectUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ProjectCreateManyCustomerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCustomerInput | ProjectUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCustomerInput | ProjectUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ProjectCreateWithoutCustomerInput, ProjectUncheckedCreateWithoutCustomerInput> | ProjectCreateWithoutCustomerInput[] | ProjectUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCustomerInput | ProjectCreateOrConnectWithoutCustomerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCustomerInput | ProjectUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ProjectCreateManyCustomerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCustomerInput | ProjectUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCustomerInput | ProjectUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type BranchCreateNestedOneWithoutUsersInput = {
    create?: XOR<BranchCreateWithoutUsersInput, BranchUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BranchCreateOrConnectWithoutUsersInput
    connect?: BranchWhereUniqueInput
  }

  export type TimesheetCreateNestedManyWithoutUserInput = {
    create?: XOR<TimesheetCreateWithoutUserInput, TimesheetUncheckedCreateWithoutUserInput> | TimesheetCreateWithoutUserInput[] | TimesheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimesheetCreateOrConnectWithoutUserInput | TimesheetCreateOrConnectWithoutUserInput[]
    createMany?: TimesheetCreateManyUserInputEnvelope
    connect?: TimesheetWhereUniqueInput | TimesheetWhereUniqueInput[]
  }

  export type LeaveCreateNestedManyWithoutUserInput = {
    create?: XOR<LeaveCreateWithoutUserInput, LeaveUncheckedCreateWithoutUserInput> | LeaveCreateWithoutUserInput[] | LeaveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutUserInput | LeaveCreateOrConnectWithoutUserInput[]
    createMany?: LeaveCreateManyUserInputEnvelope
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutUserInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutManagerInput = {
    create?: XOR<ProjectCreateWithoutManagerInput, ProjectUncheckedCreateWithoutManagerInput> | ProjectCreateWithoutManagerInput[] | ProjectUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutManagerInput | ProjectCreateOrConnectWithoutManagerInput[]
    createMany?: ProjectCreateManyManagerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutTeamMembersInput = {
    create?: XOR<ProjectCreateWithoutTeamMembersInput, ProjectUncheckedCreateWithoutTeamMembersInput> | ProjectCreateWithoutTeamMembersInput[] | ProjectUncheckedCreateWithoutTeamMembersInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamMembersInput | ProjectCreateOrConnectWithoutTeamMembersInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type AttendanceRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<AttendanceRequestCreateWithoutUserInput, AttendanceRequestUncheckedCreateWithoutUserInput> | AttendanceRequestCreateWithoutUserInput[] | AttendanceRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceRequestCreateOrConnectWithoutUserInput | AttendanceRequestCreateOrConnectWithoutUserInput[]
    createMany?: AttendanceRequestCreateManyUserInputEnvelope
    connect?: AttendanceRequestWhereUniqueInput | AttendanceRequestWhereUniqueInput[]
  }

  export type SalaryStructureCreateNestedOneWithoutUserInput = {
    create?: XOR<SalaryStructureCreateWithoutUserInput, SalaryStructureUncheckedCreateWithoutUserInput>
    connectOrCreate?: SalaryStructureCreateOrConnectWithoutUserInput
    connect?: SalaryStructureWhereUniqueInput
  }

  export type PayrollCreateNestedManyWithoutUserInput = {
    create?: XOR<PayrollCreateWithoutUserInput, PayrollUncheckedCreateWithoutUserInput> | PayrollCreateWithoutUserInput[] | PayrollUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayrollCreateOrConnectWithoutUserInput | PayrollCreateOrConnectWithoutUserInput[]
    createMany?: PayrollCreateManyUserInputEnvelope
    connect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
  }

  export type TimesheetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TimesheetCreateWithoutUserInput, TimesheetUncheckedCreateWithoutUserInput> | TimesheetCreateWithoutUserInput[] | TimesheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimesheetCreateOrConnectWithoutUserInput | TimesheetCreateOrConnectWithoutUserInput[]
    createMany?: TimesheetCreateManyUserInputEnvelope
    connect?: TimesheetWhereUniqueInput | TimesheetWhereUniqueInput[]
  }

  export type LeaveUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LeaveCreateWithoutUserInput, LeaveUncheckedCreateWithoutUserInput> | LeaveCreateWithoutUserInput[] | LeaveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutUserInput | LeaveCreateOrConnectWithoutUserInput[]
    createMany?: LeaveCreateManyUserInputEnvelope
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<ProjectCreateWithoutManagerInput, ProjectUncheckedCreateWithoutManagerInput> | ProjectCreateWithoutManagerInput[] | ProjectUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutManagerInput | ProjectCreateOrConnectWithoutManagerInput[]
    createMany?: ProjectCreateManyManagerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutTeamMembersInput = {
    create?: XOR<ProjectCreateWithoutTeamMembersInput, ProjectUncheckedCreateWithoutTeamMembersInput> | ProjectCreateWithoutTeamMembersInput[] | ProjectUncheckedCreateWithoutTeamMembersInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamMembersInput | ProjectCreateOrConnectWithoutTeamMembersInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type AttendanceRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AttendanceRequestCreateWithoutUserInput, AttendanceRequestUncheckedCreateWithoutUserInput> | AttendanceRequestCreateWithoutUserInput[] | AttendanceRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceRequestCreateOrConnectWithoutUserInput | AttendanceRequestCreateOrConnectWithoutUserInput[]
    createMany?: AttendanceRequestCreateManyUserInputEnvelope
    connect?: AttendanceRequestWhereUniqueInput | AttendanceRequestWhereUniqueInput[]
  }

  export type SalaryStructureUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SalaryStructureCreateWithoutUserInput, SalaryStructureUncheckedCreateWithoutUserInput>
    connectOrCreate?: SalaryStructureCreateOrConnectWithoutUserInput
    connect?: SalaryStructureWhereUniqueInput
  }

  export type PayrollUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PayrollCreateWithoutUserInput, PayrollUncheckedCreateWithoutUserInput> | PayrollCreateWithoutUserInput[] | PayrollUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayrollCreateOrConnectWithoutUserInput | PayrollCreateOrConnectWithoutUserInput[]
    createMany?: PayrollCreateManyUserInputEnvelope
    connect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoleUpdateOneWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    disconnect?: RoleWhereInput | boolean
    delete?: RoleWhereInput | boolean
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type BranchUpdateOneWithoutUsersNestedInput = {
    create?: XOR<BranchCreateWithoutUsersInput, BranchUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BranchCreateOrConnectWithoutUsersInput
    upsert?: BranchUpsertWithoutUsersInput
    disconnect?: BranchWhereInput | boolean
    delete?: BranchWhereInput | boolean
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutUsersInput, BranchUpdateWithoutUsersInput>, BranchUncheckedUpdateWithoutUsersInput>
  }

  export type TimesheetUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimesheetCreateWithoutUserInput, TimesheetUncheckedCreateWithoutUserInput> | TimesheetCreateWithoutUserInput[] | TimesheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimesheetCreateOrConnectWithoutUserInput | TimesheetCreateOrConnectWithoutUserInput[]
    upsert?: TimesheetUpsertWithWhereUniqueWithoutUserInput | TimesheetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimesheetCreateManyUserInputEnvelope
    set?: TimesheetWhereUniqueInput | TimesheetWhereUniqueInput[]
    disconnect?: TimesheetWhereUniqueInput | TimesheetWhereUniqueInput[]
    delete?: TimesheetWhereUniqueInput | TimesheetWhereUniqueInput[]
    connect?: TimesheetWhereUniqueInput | TimesheetWhereUniqueInput[]
    update?: TimesheetUpdateWithWhereUniqueWithoutUserInput | TimesheetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimesheetUpdateManyWithWhereWithoutUserInput | TimesheetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimesheetScalarWhereInput | TimesheetScalarWhereInput[]
  }

  export type LeaveUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeaveCreateWithoutUserInput, LeaveUncheckedCreateWithoutUserInput> | LeaveCreateWithoutUserInput[] | LeaveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutUserInput | LeaveCreateOrConnectWithoutUserInput[]
    upsert?: LeaveUpsertWithWhereUniqueWithoutUserInput | LeaveUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeaveCreateManyUserInputEnvelope
    set?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    disconnect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    delete?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    update?: LeaveUpdateWithWhereUniqueWithoutUserInput | LeaveUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeaveUpdateManyWithWhereWithoutUserInput | LeaveUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutUserInput | AttendanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutUserInput | AttendanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutUserInput | AttendanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutManagerNestedInput = {
    create?: XOR<ProjectCreateWithoutManagerInput, ProjectUncheckedCreateWithoutManagerInput> | ProjectCreateWithoutManagerInput[] | ProjectUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutManagerInput | ProjectCreateOrConnectWithoutManagerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutManagerInput | ProjectUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: ProjectCreateManyManagerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutManagerInput | ProjectUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutManagerInput | ProjectUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutTeamMembersNestedInput = {
    create?: XOR<ProjectCreateWithoutTeamMembersInput, ProjectUncheckedCreateWithoutTeamMembersInput> | ProjectCreateWithoutTeamMembersInput[] | ProjectUncheckedCreateWithoutTeamMembersInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamMembersInput | ProjectCreateOrConnectWithoutTeamMembersInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutTeamMembersInput | ProjectUpsertWithWhereUniqueWithoutTeamMembersInput[]
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutTeamMembersInput | ProjectUpdateWithWhereUniqueWithoutTeamMembersInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutTeamMembersInput | ProjectUpdateManyWithWhereWithoutTeamMembersInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssignedToInput | TaskUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssignedToInput | TaskUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssignedToInput | TaskUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type AttendanceRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttendanceRequestCreateWithoutUserInput, AttendanceRequestUncheckedCreateWithoutUserInput> | AttendanceRequestCreateWithoutUserInput[] | AttendanceRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceRequestCreateOrConnectWithoutUserInput | AttendanceRequestCreateOrConnectWithoutUserInput[]
    upsert?: AttendanceRequestUpsertWithWhereUniqueWithoutUserInput | AttendanceRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttendanceRequestCreateManyUserInputEnvelope
    set?: AttendanceRequestWhereUniqueInput | AttendanceRequestWhereUniqueInput[]
    disconnect?: AttendanceRequestWhereUniqueInput | AttendanceRequestWhereUniqueInput[]
    delete?: AttendanceRequestWhereUniqueInput | AttendanceRequestWhereUniqueInput[]
    connect?: AttendanceRequestWhereUniqueInput | AttendanceRequestWhereUniqueInput[]
    update?: AttendanceRequestUpdateWithWhereUniqueWithoutUserInput | AttendanceRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttendanceRequestUpdateManyWithWhereWithoutUserInput | AttendanceRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttendanceRequestScalarWhereInput | AttendanceRequestScalarWhereInput[]
  }

  export type SalaryStructureUpdateOneWithoutUserNestedInput = {
    create?: XOR<SalaryStructureCreateWithoutUserInput, SalaryStructureUncheckedCreateWithoutUserInput>
    connectOrCreate?: SalaryStructureCreateOrConnectWithoutUserInput
    upsert?: SalaryStructureUpsertWithoutUserInput
    disconnect?: SalaryStructureWhereInput | boolean
    delete?: SalaryStructureWhereInput | boolean
    connect?: SalaryStructureWhereUniqueInput
    update?: XOR<XOR<SalaryStructureUpdateToOneWithWhereWithoutUserInput, SalaryStructureUpdateWithoutUserInput>, SalaryStructureUncheckedUpdateWithoutUserInput>
  }

  export type PayrollUpdateManyWithoutUserNestedInput = {
    create?: XOR<PayrollCreateWithoutUserInput, PayrollUncheckedCreateWithoutUserInput> | PayrollCreateWithoutUserInput[] | PayrollUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayrollCreateOrConnectWithoutUserInput | PayrollCreateOrConnectWithoutUserInput[]
    upsert?: PayrollUpsertWithWhereUniqueWithoutUserInput | PayrollUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PayrollCreateManyUserInputEnvelope
    set?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    disconnect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    delete?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    connect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    update?: PayrollUpdateWithWhereUniqueWithoutUserInput | PayrollUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PayrollUpdateManyWithWhereWithoutUserInput | PayrollUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PayrollScalarWhereInput | PayrollScalarWhereInput[]
  }

  export type TimesheetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimesheetCreateWithoutUserInput, TimesheetUncheckedCreateWithoutUserInput> | TimesheetCreateWithoutUserInput[] | TimesheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimesheetCreateOrConnectWithoutUserInput | TimesheetCreateOrConnectWithoutUserInput[]
    upsert?: TimesheetUpsertWithWhereUniqueWithoutUserInput | TimesheetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimesheetCreateManyUserInputEnvelope
    set?: TimesheetWhereUniqueInput | TimesheetWhereUniqueInput[]
    disconnect?: TimesheetWhereUniqueInput | TimesheetWhereUniqueInput[]
    delete?: TimesheetWhereUniqueInput | TimesheetWhereUniqueInput[]
    connect?: TimesheetWhereUniqueInput | TimesheetWhereUniqueInput[]
    update?: TimesheetUpdateWithWhereUniqueWithoutUserInput | TimesheetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimesheetUpdateManyWithWhereWithoutUserInput | TimesheetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimesheetScalarWhereInput | TimesheetScalarWhereInput[]
  }

  export type LeaveUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeaveCreateWithoutUserInput, LeaveUncheckedCreateWithoutUserInput> | LeaveCreateWithoutUserInput[] | LeaveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutUserInput | LeaveCreateOrConnectWithoutUserInput[]
    upsert?: LeaveUpsertWithWhereUniqueWithoutUserInput | LeaveUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeaveCreateManyUserInputEnvelope
    set?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    disconnect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    delete?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    update?: LeaveUpdateWithWhereUniqueWithoutUserInput | LeaveUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeaveUpdateManyWithWhereWithoutUserInput | LeaveUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutUserInput | AttendanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutUserInput | AttendanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutUserInput | AttendanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<ProjectCreateWithoutManagerInput, ProjectUncheckedCreateWithoutManagerInput> | ProjectCreateWithoutManagerInput[] | ProjectUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutManagerInput | ProjectCreateOrConnectWithoutManagerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutManagerInput | ProjectUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: ProjectCreateManyManagerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutManagerInput | ProjectUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutManagerInput | ProjectUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutTeamMembersNestedInput = {
    create?: XOR<ProjectCreateWithoutTeamMembersInput, ProjectUncheckedCreateWithoutTeamMembersInput> | ProjectCreateWithoutTeamMembersInput[] | ProjectUncheckedCreateWithoutTeamMembersInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamMembersInput | ProjectCreateOrConnectWithoutTeamMembersInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutTeamMembersInput | ProjectUpsertWithWhereUniqueWithoutTeamMembersInput[]
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutTeamMembersInput | ProjectUpdateWithWhereUniqueWithoutTeamMembersInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutTeamMembersInput | ProjectUpdateManyWithWhereWithoutTeamMembersInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssignedToInput | TaskUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssignedToInput | TaskUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssignedToInput | TaskUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type AttendanceRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttendanceRequestCreateWithoutUserInput, AttendanceRequestUncheckedCreateWithoutUserInput> | AttendanceRequestCreateWithoutUserInput[] | AttendanceRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceRequestCreateOrConnectWithoutUserInput | AttendanceRequestCreateOrConnectWithoutUserInput[]
    upsert?: AttendanceRequestUpsertWithWhereUniqueWithoutUserInput | AttendanceRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttendanceRequestCreateManyUserInputEnvelope
    set?: AttendanceRequestWhereUniqueInput | AttendanceRequestWhereUniqueInput[]
    disconnect?: AttendanceRequestWhereUniqueInput | AttendanceRequestWhereUniqueInput[]
    delete?: AttendanceRequestWhereUniqueInput | AttendanceRequestWhereUniqueInput[]
    connect?: AttendanceRequestWhereUniqueInput | AttendanceRequestWhereUniqueInput[]
    update?: AttendanceRequestUpdateWithWhereUniqueWithoutUserInput | AttendanceRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttendanceRequestUpdateManyWithWhereWithoutUserInput | AttendanceRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttendanceRequestScalarWhereInput | AttendanceRequestScalarWhereInput[]
  }

  export type SalaryStructureUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SalaryStructureCreateWithoutUserInput, SalaryStructureUncheckedCreateWithoutUserInput>
    connectOrCreate?: SalaryStructureCreateOrConnectWithoutUserInput
    upsert?: SalaryStructureUpsertWithoutUserInput
    disconnect?: SalaryStructureWhereInput | boolean
    delete?: SalaryStructureWhereInput | boolean
    connect?: SalaryStructureWhereUniqueInput
    update?: XOR<XOR<SalaryStructureUpdateToOneWithWhereWithoutUserInput, SalaryStructureUpdateWithoutUserInput>, SalaryStructureUncheckedUpdateWithoutUserInput>
  }

  export type PayrollUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PayrollCreateWithoutUserInput, PayrollUncheckedCreateWithoutUserInput> | PayrollCreateWithoutUserInput[] | PayrollUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayrollCreateOrConnectWithoutUserInput | PayrollCreateOrConnectWithoutUserInput[]
    upsert?: PayrollUpsertWithWhereUniqueWithoutUserInput | PayrollUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PayrollCreateManyUserInputEnvelope
    set?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    disconnect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    delete?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    connect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    update?: PayrollUpdateWithWhereUniqueWithoutUserInput | PayrollUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PayrollUpdateManyWithWhereWithoutUserInput | PayrollUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PayrollScalarWhereInput | PayrollScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutProjectsInput = {
    create?: XOR<CustomerCreateWithoutProjectsInput, CustomerUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutProjectsInput
    connect?: CustomerWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutManagedProjectsInput = {
    create?: XOR<UserCreateWithoutManagedProjectsInput, UserUncheckedCreateWithoutManagedProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagedProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutProjectMembershipsInput = {
    create?: XOR<UserCreateWithoutProjectMembershipsInput, UserUncheckedCreateWithoutProjectMembershipsInput> | UserCreateWithoutProjectMembershipsInput[] | UserUncheckedCreateWithoutProjectMembershipsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProjectMembershipsInput | UserCreateOrConnectWithoutProjectMembershipsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TimesheetEntryCreateNestedManyWithoutProjectInput = {
    create?: XOR<TimesheetEntryCreateWithoutProjectInput, TimesheetEntryUncheckedCreateWithoutProjectInput> | TimesheetEntryCreateWithoutProjectInput[] | TimesheetEntryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TimesheetEntryCreateOrConnectWithoutProjectInput | TimesheetEntryCreateOrConnectWithoutProjectInput[]
    createMany?: TimesheetEntryCreateManyProjectInputEnvelope
    connect?: TimesheetEntryWhereUniqueInput | TimesheetEntryWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutProjectInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutProjectMembershipsInput = {
    create?: XOR<UserCreateWithoutProjectMembershipsInput, UserUncheckedCreateWithoutProjectMembershipsInput> | UserCreateWithoutProjectMembershipsInput[] | UserUncheckedCreateWithoutProjectMembershipsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProjectMembershipsInput | UserCreateOrConnectWithoutProjectMembershipsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TimesheetEntryUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TimesheetEntryCreateWithoutProjectInput, TimesheetEntryUncheckedCreateWithoutProjectInput> | TimesheetEntryCreateWithoutProjectInput[] | TimesheetEntryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TimesheetEntryCreateOrConnectWithoutProjectInput | TimesheetEntryCreateOrConnectWithoutProjectInput[]
    createMany?: TimesheetEntryCreateManyProjectInputEnvelope
    connect?: TimesheetEntryWhereUniqueInput | TimesheetEntryWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CustomerUpdateOneWithoutProjectsNestedInput = {
    create?: XOR<CustomerCreateWithoutProjectsInput, CustomerUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutProjectsInput
    upsert?: CustomerUpsertWithoutProjectsInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutProjectsInput, CustomerUpdateWithoutProjectsInput>, CustomerUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateOneWithoutManagedProjectsNestedInput = {
    create?: XOR<UserCreateWithoutManagedProjectsInput, UserUncheckedCreateWithoutManagedProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagedProjectsInput
    upsert?: UserUpsertWithoutManagedProjectsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutManagedProjectsInput, UserUpdateWithoutManagedProjectsInput>, UserUncheckedUpdateWithoutManagedProjectsInput>
  }

  export type UserUpdateManyWithoutProjectMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutProjectMembershipsInput, UserUncheckedCreateWithoutProjectMembershipsInput> | UserCreateWithoutProjectMembershipsInput[] | UserUncheckedCreateWithoutProjectMembershipsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProjectMembershipsInput | UserCreateOrConnectWithoutProjectMembershipsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutProjectMembershipsInput | UserUpsertWithWhereUniqueWithoutProjectMembershipsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutProjectMembershipsInput | UserUpdateWithWhereUniqueWithoutProjectMembershipsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutProjectMembershipsInput | UserUpdateManyWithWhereWithoutProjectMembershipsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TimesheetEntryUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TimesheetEntryCreateWithoutProjectInput, TimesheetEntryUncheckedCreateWithoutProjectInput> | TimesheetEntryCreateWithoutProjectInput[] | TimesheetEntryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TimesheetEntryCreateOrConnectWithoutProjectInput | TimesheetEntryCreateOrConnectWithoutProjectInput[]
    upsert?: TimesheetEntryUpsertWithWhereUniqueWithoutProjectInput | TimesheetEntryUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TimesheetEntryCreateManyProjectInputEnvelope
    set?: TimesheetEntryWhereUniqueInput | TimesheetEntryWhereUniqueInput[]
    disconnect?: TimesheetEntryWhereUniqueInput | TimesheetEntryWhereUniqueInput[]
    delete?: TimesheetEntryWhereUniqueInput | TimesheetEntryWhereUniqueInput[]
    connect?: TimesheetEntryWhereUniqueInput | TimesheetEntryWhereUniqueInput[]
    update?: TimesheetEntryUpdateWithWhereUniqueWithoutProjectInput | TimesheetEntryUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TimesheetEntryUpdateManyWithWhereWithoutProjectInput | TimesheetEntryUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TimesheetEntryScalarWhereInput | TimesheetEntryScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectInput | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectInput | TaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutProjectMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutProjectMembershipsInput, UserUncheckedCreateWithoutProjectMembershipsInput> | UserCreateWithoutProjectMembershipsInput[] | UserUncheckedCreateWithoutProjectMembershipsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProjectMembershipsInput | UserCreateOrConnectWithoutProjectMembershipsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutProjectMembershipsInput | UserUpsertWithWhereUniqueWithoutProjectMembershipsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutProjectMembershipsInput | UserUpdateWithWhereUniqueWithoutProjectMembershipsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutProjectMembershipsInput | UserUpdateManyWithWhereWithoutProjectMembershipsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TimesheetEntryUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TimesheetEntryCreateWithoutProjectInput, TimesheetEntryUncheckedCreateWithoutProjectInput> | TimesheetEntryCreateWithoutProjectInput[] | TimesheetEntryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TimesheetEntryCreateOrConnectWithoutProjectInput | TimesheetEntryCreateOrConnectWithoutProjectInput[]
    upsert?: TimesheetEntryUpsertWithWhereUniqueWithoutProjectInput | TimesheetEntryUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TimesheetEntryCreateManyProjectInputEnvelope
    set?: TimesheetEntryWhereUniqueInput | TimesheetEntryWhereUniqueInput[]
    disconnect?: TimesheetEntryWhereUniqueInput | TimesheetEntryWhereUniqueInput[]
    delete?: TimesheetEntryWhereUniqueInput | TimesheetEntryWhereUniqueInput[]
    connect?: TimesheetEntryWhereUniqueInput | TimesheetEntryWhereUniqueInput[]
    update?: TimesheetEntryUpdateWithWhereUniqueWithoutProjectInput | TimesheetEntryUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TimesheetEntryUpdateManyWithWhereWithoutProjectInput | TimesheetEntryUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TimesheetEntryScalarWhereInput | TimesheetEntryScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectInput | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectInput | TaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTimesheetsInput = {
    create?: XOR<UserCreateWithoutTimesheetsInput, UserUncheckedCreateWithoutTimesheetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimesheetsInput
    connect?: UserWhereUniqueInput
  }

  export type TimesheetEntryCreateNestedManyWithoutTimesheetInput = {
    create?: XOR<TimesheetEntryCreateWithoutTimesheetInput, TimesheetEntryUncheckedCreateWithoutTimesheetInput> | TimesheetEntryCreateWithoutTimesheetInput[] | TimesheetEntryUncheckedCreateWithoutTimesheetInput[]
    connectOrCreate?: TimesheetEntryCreateOrConnectWithoutTimesheetInput | TimesheetEntryCreateOrConnectWithoutTimesheetInput[]
    createMany?: TimesheetEntryCreateManyTimesheetInputEnvelope
    connect?: TimesheetEntryWhereUniqueInput | TimesheetEntryWhereUniqueInput[]
  }

  export type TimesheetEntryUncheckedCreateNestedManyWithoutTimesheetInput = {
    create?: XOR<TimesheetEntryCreateWithoutTimesheetInput, TimesheetEntryUncheckedCreateWithoutTimesheetInput> | TimesheetEntryCreateWithoutTimesheetInput[] | TimesheetEntryUncheckedCreateWithoutTimesheetInput[]
    connectOrCreate?: TimesheetEntryCreateOrConnectWithoutTimesheetInput | TimesheetEntryCreateOrConnectWithoutTimesheetInput[]
    createMany?: TimesheetEntryCreateManyTimesheetInputEnvelope
    connect?: TimesheetEntryWhereUniqueInput | TimesheetEntryWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutTimesheetsNestedInput = {
    create?: XOR<UserCreateWithoutTimesheetsInput, UserUncheckedCreateWithoutTimesheetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimesheetsInput
    upsert?: UserUpsertWithoutTimesheetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTimesheetsInput, UserUpdateWithoutTimesheetsInput>, UserUncheckedUpdateWithoutTimesheetsInput>
  }

  export type TimesheetEntryUpdateManyWithoutTimesheetNestedInput = {
    create?: XOR<TimesheetEntryCreateWithoutTimesheetInput, TimesheetEntryUncheckedCreateWithoutTimesheetInput> | TimesheetEntryCreateWithoutTimesheetInput[] | TimesheetEntryUncheckedCreateWithoutTimesheetInput[]
    connectOrCreate?: TimesheetEntryCreateOrConnectWithoutTimesheetInput | TimesheetEntryCreateOrConnectWithoutTimesheetInput[]
    upsert?: TimesheetEntryUpsertWithWhereUniqueWithoutTimesheetInput | TimesheetEntryUpsertWithWhereUniqueWithoutTimesheetInput[]
    createMany?: TimesheetEntryCreateManyTimesheetInputEnvelope
    set?: TimesheetEntryWhereUniqueInput | TimesheetEntryWhereUniqueInput[]
    disconnect?: TimesheetEntryWhereUniqueInput | TimesheetEntryWhereUniqueInput[]
    delete?: TimesheetEntryWhereUniqueInput | TimesheetEntryWhereUniqueInput[]
    connect?: TimesheetEntryWhereUniqueInput | TimesheetEntryWhereUniqueInput[]
    update?: TimesheetEntryUpdateWithWhereUniqueWithoutTimesheetInput | TimesheetEntryUpdateWithWhereUniqueWithoutTimesheetInput[]
    updateMany?: TimesheetEntryUpdateManyWithWhereWithoutTimesheetInput | TimesheetEntryUpdateManyWithWhereWithoutTimesheetInput[]
    deleteMany?: TimesheetEntryScalarWhereInput | TimesheetEntryScalarWhereInput[]
  }

  export type TimesheetEntryUncheckedUpdateManyWithoutTimesheetNestedInput = {
    create?: XOR<TimesheetEntryCreateWithoutTimesheetInput, TimesheetEntryUncheckedCreateWithoutTimesheetInput> | TimesheetEntryCreateWithoutTimesheetInput[] | TimesheetEntryUncheckedCreateWithoutTimesheetInput[]
    connectOrCreate?: TimesheetEntryCreateOrConnectWithoutTimesheetInput | TimesheetEntryCreateOrConnectWithoutTimesheetInput[]
    upsert?: TimesheetEntryUpsertWithWhereUniqueWithoutTimesheetInput | TimesheetEntryUpsertWithWhereUniqueWithoutTimesheetInput[]
    createMany?: TimesheetEntryCreateManyTimesheetInputEnvelope
    set?: TimesheetEntryWhereUniqueInput | TimesheetEntryWhereUniqueInput[]
    disconnect?: TimesheetEntryWhereUniqueInput | TimesheetEntryWhereUniqueInput[]
    delete?: TimesheetEntryWhereUniqueInput | TimesheetEntryWhereUniqueInput[]
    connect?: TimesheetEntryWhereUniqueInput | TimesheetEntryWhereUniqueInput[]
    update?: TimesheetEntryUpdateWithWhereUniqueWithoutTimesheetInput | TimesheetEntryUpdateWithWhereUniqueWithoutTimesheetInput[]
    updateMany?: TimesheetEntryUpdateManyWithWhereWithoutTimesheetInput | TimesheetEntryUpdateManyWithWhereWithoutTimesheetInput[]
    deleteMany?: TimesheetEntryScalarWhereInput | TimesheetEntryScalarWhereInput[]
  }

  export type TimesheetCreateNestedOneWithoutEntriesInput = {
    create?: XOR<TimesheetCreateWithoutEntriesInput, TimesheetUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: TimesheetCreateOrConnectWithoutEntriesInput
    connect?: TimesheetWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutEntriesInput = {
    create?: XOR<ProjectCreateWithoutEntriesInput, ProjectUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutEntriesInput
    connect?: ProjectWhereUniqueInput
  }

  export type TimesheetUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<TimesheetCreateWithoutEntriesInput, TimesheetUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: TimesheetCreateOrConnectWithoutEntriesInput
    upsert?: TimesheetUpsertWithoutEntriesInput
    connect?: TimesheetWhereUniqueInput
    update?: XOR<XOR<TimesheetUpdateToOneWithWhereWithoutEntriesInput, TimesheetUpdateWithoutEntriesInput>, TimesheetUncheckedUpdateWithoutEntriesInput>
  }

  export type ProjectUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<ProjectCreateWithoutEntriesInput, ProjectUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutEntriesInput
    upsert?: ProjectUpsertWithoutEntriesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutEntriesInput, ProjectUpdateWithoutEntriesInput>, ProjectUncheckedUpdateWithoutEntriesInput>
  }

  export type UserCreateNestedOneWithoutAssignedTasksInput = {
    create?: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTasksInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutTasksInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAssignedTasksNestedInput = {
    create?: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTasksInput
    upsert?: UserUpsertWithoutAssignedTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedTasksInput, UserUpdateWithoutAssignedTasksInput>, UserUncheckedUpdateWithoutAssignedTasksInput>
  }

  export type ProjectUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    upsert?: ProjectUpsertWithoutTasksInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTasksInput, ProjectUpdateWithoutTasksInput>, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type UserCreateNestedOneWithoutLeavesInput = {
    create?: XOR<UserCreateWithoutLeavesInput, UserUncheckedCreateWithoutLeavesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeavesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLeavesNestedInput = {
    create?: XOR<UserCreateWithoutLeavesInput, UserUncheckedCreateWithoutLeavesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeavesInput
    upsert?: UserUpsertWithoutLeavesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLeavesInput, UserUpdateWithoutLeavesInput>, UserUncheckedUpdateWithoutLeavesInput>
  }

  export type UserCreateNestedManyWithoutBranchInput = {
    create?: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput> | UserCreateWithoutBranchInput[] | UserUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBranchInput | UserCreateOrConnectWithoutBranchInput[]
    createMany?: UserCreateManyBranchInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput> | UserCreateWithoutBranchInput[] | UserUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBranchInput | UserCreateOrConnectWithoutBranchInput[]
    createMany?: UserCreateManyBranchInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutBranchNestedInput = {
    create?: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput> | UserCreateWithoutBranchInput[] | UserUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBranchInput | UserCreateOrConnectWithoutBranchInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBranchInput | UserUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: UserCreateManyBranchInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBranchInput | UserUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBranchInput | UserUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput> | UserCreateWithoutBranchInput[] | UserUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBranchInput | UserCreateOrConnectWithoutBranchInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBranchInput | UserUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: UserCreateManyBranchInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBranchInput | UserUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBranchInput | UserUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<UserCreateWithoutAttendanceInput, UserUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendanceInput
    connect?: UserWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<UserCreateWithoutAttendanceInput, UserUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendanceInput
    upsert?: UserUpsertWithoutAttendanceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAttendanceInput, UserUpdateWithoutAttendanceInput>, UserUncheckedUpdateWithoutAttendanceInput>
  }

  export type UserCreateNestedOneWithoutAttendanceRequestInput = {
    create?: XOR<UserCreateWithoutAttendanceRequestInput, UserUncheckedCreateWithoutAttendanceRequestInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendanceRequestInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAttendanceRequestNestedInput = {
    create?: XOR<UserCreateWithoutAttendanceRequestInput, UserUncheckedCreateWithoutAttendanceRequestInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendanceRequestInput
    upsert?: UserUpsertWithoutAttendanceRequestInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAttendanceRequestInput, UserUpdateWithoutAttendanceRequestInput>, UserUncheckedUpdateWithoutAttendanceRequestInput>
  }

  export type UserCreateNestedOneWithoutSalaryStructureInput = {
    create?: XOR<UserCreateWithoutSalaryStructureInput, UserUncheckedCreateWithoutSalaryStructureInput>
    connectOrCreate?: UserCreateOrConnectWithoutSalaryStructureInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSalaryStructureNestedInput = {
    create?: XOR<UserCreateWithoutSalaryStructureInput, UserUncheckedCreateWithoutSalaryStructureInput>
    connectOrCreate?: UserCreateOrConnectWithoutSalaryStructureInput
    upsert?: UserUpsertWithoutSalaryStructureInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSalaryStructureInput, UserUpdateWithoutSalaryStructureInput>, UserUncheckedUpdateWithoutSalaryStructureInput>
  }

  export type UserCreateNestedOneWithoutPayrollsInput = {
    create?: XOR<UserCreateWithoutPayrollsInput, UserUncheckedCreateWithoutPayrollsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPayrollsInput
    connect?: UserWhereUniqueInput
  }

  export type PayrollItemCreateNestedManyWithoutPayrollInput = {
    create?: XOR<PayrollItemCreateWithoutPayrollInput, PayrollItemUncheckedCreateWithoutPayrollInput> | PayrollItemCreateWithoutPayrollInput[] | PayrollItemUncheckedCreateWithoutPayrollInput[]
    connectOrCreate?: PayrollItemCreateOrConnectWithoutPayrollInput | PayrollItemCreateOrConnectWithoutPayrollInput[]
    createMany?: PayrollItemCreateManyPayrollInputEnvelope
    connect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
  }

  export type PayrollItemUncheckedCreateNestedManyWithoutPayrollInput = {
    create?: XOR<PayrollItemCreateWithoutPayrollInput, PayrollItemUncheckedCreateWithoutPayrollInput> | PayrollItemCreateWithoutPayrollInput[] | PayrollItemUncheckedCreateWithoutPayrollInput[]
    connectOrCreate?: PayrollItemCreateOrConnectWithoutPayrollInput | PayrollItemCreateOrConnectWithoutPayrollInput[]
    createMany?: PayrollItemCreateManyPayrollInputEnvelope
    connect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPayrollsNestedInput = {
    create?: XOR<UserCreateWithoutPayrollsInput, UserUncheckedCreateWithoutPayrollsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPayrollsInput
    upsert?: UserUpsertWithoutPayrollsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPayrollsInput, UserUpdateWithoutPayrollsInput>, UserUncheckedUpdateWithoutPayrollsInput>
  }

  export type PayrollItemUpdateManyWithoutPayrollNestedInput = {
    create?: XOR<PayrollItemCreateWithoutPayrollInput, PayrollItemUncheckedCreateWithoutPayrollInput> | PayrollItemCreateWithoutPayrollInput[] | PayrollItemUncheckedCreateWithoutPayrollInput[]
    connectOrCreate?: PayrollItemCreateOrConnectWithoutPayrollInput | PayrollItemCreateOrConnectWithoutPayrollInput[]
    upsert?: PayrollItemUpsertWithWhereUniqueWithoutPayrollInput | PayrollItemUpsertWithWhereUniqueWithoutPayrollInput[]
    createMany?: PayrollItemCreateManyPayrollInputEnvelope
    set?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    disconnect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    delete?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    connect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    update?: PayrollItemUpdateWithWhereUniqueWithoutPayrollInput | PayrollItemUpdateWithWhereUniqueWithoutPayrollInput[]
    updateMany?: PayrollItemUpdateManyWithWhereWithoutPayrollInput | PayrollItemUpdateManyWithWhereWithoutPayrollInput[]
    deleteMany?: PayrollItemScalarWhereInput | PayrollItemScalarWhereInput[]
  }

  export type PayrollItemUncheckedUpdateManyWithoutPayrollNestedInput = {
    create?: XOR<PayrollItemCreateWithoutPayrollInput, PayrollItemUncheckedCreateWithoutPayrollInput> | PayrollItemCreateWithoutPayrollInput[] | PayrollItemUncheckedCreateWithoutPayrollInput[]
    connectOrCreate?: PayrollItemCreateOrConnectWithoutPayrollInput | PayrollItemCreateOrConnectWithoutPayrollInput[]
    upsert?: PayrollItemUpsertWithWhereUniqueWithoutPayrollInput | PayrollItemUpsertWithWhereUniqueWithoutPayrollInput[]
    createMany?: PayrollItemCreateManyPayrollInputEnvelope
    set?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    disconnect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    delete?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    connect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    update?: PayrollItemUpdateWithWhereUniqueWithoutPayrollInput | PayrollItemUpdateWithWhereUniqueWithoutPayrollInput[]
    updateMany?: PayrollItemUpdateManyWithWhereWithoutPayrollInput | PayrollItemUpdateManyWithWhereWithoutPayrollInput[]
    deleteMany?: PayrollItemScalarWhereInput | PayrollItemScalarWhereInput[]
  }

  export type PayrollCreateNestedOneWithoutItemsInput = {
    create?: XOR<PayrollCreateWithoutItemsInput, PayrollUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PayrollCreateOrConnectWithoutItemsInput
    connect?: PayrollWhereUniqueInput
  }

  export type PayrollUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<PayrollCreateWithoutItemsInput, PayrollUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PayrollCreateOrConnectWithoutItemsInput
    upsert?: PayrollUpsertWithoutItemsInput
    connect?: PayrollWhereUniqueInput
    update?: XOR<XOR<PayrollUpdateToOneWithWhereWithoutItemsInput, PayrollUpdateWithoutItemsInput>, PayrollUncheckedUpdateWithoutItemsInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type UserCreateWithoutRoleInput = {
    id?: string
    code?: string | null
    email: string
    password: string
    name?: string | null
    image?: string | null
    branchLegacy?: string | null
    phone?: string | null
    createdAt?: Date | string
    branch?: BranchCreateNestedOneWithoutUsersInput
    timesheets?: TimesheetCreateNestedManyWithoutUserInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    attendance?: AttendanceCreateNestedManyWithoutUserInput
    managedProjects?: ProjectCreateNestedManyWithoutManagerInput
    projectMemberships?: ProjectCreateNestedManyWithoutTeamMembersInput
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    attendanceRequest?: AttendanceRequestCreateNestedManyWithoutUserInput
    salaryStructure?: SalaryStructureCreateNestedOneWithoutUserInput
    payrolls?: PayrollCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: string
    code?: string | null
    email: string
    password: string
    name?: string | null
    image?: string | null
    branchLegacy?: string | null
    branchId?: string | null
    phone?: string | null
    createdAt?: Date | string
    timesheets?: TimesheetUncheckedCreateNestedManyWithoutUserInput
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    managedProjects?: ProjectUncheckedCreateNestedManyWithoutManagerInput
    projectMemberships?: ProjectUncheckedCreateNestedManyWithoutTeamMembersInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    attendanceRequest?: AttendanceRequestUncheckedCreateNestedManyWithoutUserInput
    salaryStructure?: SalaryStructureUncheckedCreateNestedOneWithoutUserInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutUserInput
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
    id?: StringFilter<"User"> | string
    code?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    roleId?: StringNullableFilter<"User"> | string | null
    branchLegacy?: StringNullableFilter<"User"> | string | null
    branchId?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type ProjectCreateWithoutCustomerInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    isActive?: boolean
    remarks?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    manager?: UserCreateNestedOneWithoutManagedProjectsInput
    teamMembers?: UserCreateNestedManyWithoutProjectMembershipsInput
    entries?: TimesheetEntryCreateNestedManyWithoutProjectInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCustomerInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    isActive?: boolean
    managerId?: string | null
    remarks?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    teamMembers?: UserUncheckedCreateNestedManyWithoutProjectMembershipsInput
    entries?: TimesheetEntryUncheckedCreateNestedManyWithoutProjectInput
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCustomerInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCustomerInput, ProjectUncheckedCreateWithoutCustomerInput>
  }

  export type ProjectCreateManyCustomerInputEnvelope = {
    data: ProjectCreateManyCustomerInput | ProjectCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutCustomerInput, ProjectUncheckedUpdateWithoutCustomerInput>
    create: XOR<ProjectCreateWithoutCustomerInput, ProjectUncheckedCreateWithoutCustomerInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutCustomerInput, ProjectUncheckedUpdateWithoutCustomerInput>
  }

  export type ProjectUpdateManyWithWhereWithoutCustomerInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutCustomerInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    code?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    isActive?: BoolFilter<"Project"> | boolean
    customerId?: StringNullableFilter<"Project"> | string | null
    managerId?: StringNullableFilter<"Project"> | string | null
    remarks?: StringNullableFilter<"Project"> | string | null
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
  }

  export type RoleCreateWithoutUsersInput = {
    id?: string
    code: string
    name: string
    remarks?: string | null
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: string
    code: string
    name: string
    remarks?: string | null
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type BranchCreateWithoutUsersInput = {
    id?: string
    name: string
    address?: string | null
    latitude: number
    longitude: number
    radius?: number
    shiftStart?: string
    shiftEnd?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BranchUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    address?: string | null
    latitude: number
    longitude: number
    radius?: number
    shiftStart?: string
    shiftEnd?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BranchCreateOrConnectWithoutUsersInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutUsersInput, BranchUncheckedCreateWithoutUsersInput>
  }

  export type TimesheetCreateWithoutUserInput = {
    id?: string
    date: Date | string
    status?: string
    totalHours?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: TimesheetEntryCreateNestedManyWithoutTimesheetInput
  }

  export type TimesheetUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    status?: string
    totalHours?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: TimesheetEntryUncheckedCreateNestedManyWithoutTimesheetInput
  }

  export type TimesheetCreateOrConnectWithoutUserInput = {
    where: TimesheetWhereUniqueInput
    create: XOR<TimesheetCreateWithoutUserInput, TimesheetUncheckedCreateWithoutUserInput>
  }

  export type TimesheetCreateManyUserInputEnvelope = {
    data: TimesheetCreateManyUserInput | TimesheetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LeaveCreateWithoutUserInput = {
    id?: string
    date: Date | string
    type?: string
    status?: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type LeaveUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    type?: string
    status?: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type LeaveCreateOrConnectWithoutUserInput = {
    where: LeaveWhereUniqueInput
    create: XOR<LeaveCreateWithoutUserInput, LeaveUncheckedCreateWithoutUserInput>
  }

  export type LeaveCreateManyUserInputEnvelope = {
    data: LeaveCreateManyUserInput | LeaveCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceCreateWithoutUserInput = {
    id?: string
    date: Date | string
    clockIn: Date | string
    clockInLat?: number | null
    clockInLng?: number | null
    clockOut?: Date | string | null
    clockOutLat?: number | null
    clockOutLng?: number | null
    status?: string
    ipAddress?: string | null
    punchMode?: string
    punchInNote?: string | null
    punchOutNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    clockIn: Date | string
    clockInLat?: number | null
    clockInLng?: number | null
    clockOut?: Date | string | null
    clockOutLat?: number | null
    clockOutLng?: number | null
    status?: string
    ipAddress?: string | null
    punchMode?: string
    punchInNote?: string | null
    punchOutNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutUserInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput>
  }

  export type AttendanceCreateManyUserInputEnvelope = {
    data: AttendanceCreateManyUserInput | AttendanceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutManagerInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    isActive?: boolean
    remarks?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    customer?: CustomerCreateNestedOneWithoutProjectsInput
    teamMembers?: UserCreateNestedManyWithoutProjectMembershipsInput
    entries?: TimesheetEntryCreateNestedManyWithoutProjectInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutManagerInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    isActive?: boolean
    customerId?: string | null
    remarks?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    teamMembers?: UserUncheckedCreateNestedManyWithoutProjectMembershipsInput
    entries?: TimesheetEntryUncheckedCreateNestedManyWithoutProjectInput
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutManagerInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutManagerInput, ProjectUncheckedCreateWithoutManagerInput>
  }

  export type ProjectCreateManyManagerInputEnvelope = {
    data: ProjectCreateManyManagerInput | ProjectCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutTeamMembersInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    isActive?: boolean
    remarks?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    customer?: CustomerCreateNestedOneWithoutProjectsInput
    manager?: UserCreateNestedOneWithoutManagedProjectsInput
    entries?: TimesheetEntryCreateNestedManyWithoutProjectInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTeamMembersInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    isActive?: boolean
    customerId?: string | null
    managerId?: string | null
    remarks?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    entries?: TimesheetEntryUncheckedCreateNestedManyWithoutProjectInput
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTeamMembersInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTeamMembersInput, ProjectUncheckedCreateWithoutTeamMembersInput>
  }

  export type TaskCreateWithoutAssignedToInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    priority?: string
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutAssignedToInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    priority?: string
    dueDate?: Date | string | null
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutAssignedToInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput>
  }

  export type TaskCreateManyAssignedToInputEnvelope = {
    data: TaskCreateManyAssignedToInput | TaskCreateManyAssignedToInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceRequestCreateWithoutUserInput = {
    id?: string
    attendanceId?: string | null
    date: Date | string
    requestType: string
    newTime: Date | string
    reason: string
    status?: string
    adminRemarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceRequestUncheckedCreateWithoutUserInput = {
    id?: string
    attendanceId?: string | null
    date: Date | string
    requestType: string
    newTime: Date | string
    reason: string
    status?: string
    adminRemarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceRequestCreateOrConnectWithoutUserInput = {
    where: AttendanceRequestWhereUniqueInput
    create: XOR<AttendanceRequestCreateWithoutUserInput, AttendanceRequestUncheckedCreateWithoutUserInput>
  }

  export type AttendanceRequestCreateManyUserInputEnvelope = {
    data: AttendanceRequestCreateManyUserInput | AttendanceRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SalaryStructureCreateWithoutUserInput = {
    id?: string
    basic?: number
    hra?: number
    allowances?: number
    specialAllowance?: number
    pf?: number
    pt?: number
    deductions?: number
    netSalary?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalaryStructureUncheckedCreateWithoutUserInput = {
    id?: string
    basic?: number
    hra?: number
    allowances?: number
    specialAllowance?: number
    pf?: number
    pt?: number
    deductions?: number
    netSalary?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalaryStructureCreateOrConnectWithoutUserInput = {
    where: SalaryStructureWhereUniqueInput
    create: XOR<SalaryStructureCreateWithoutUserInput, SalaryStructureUncheckedCreateWithoutUserInput>
  }

  export type PayrollCreateWithoutUserInput = {
    id?: string
    month: string
    year: number
    monthNumber: number
    basic: number
    hra: number
    allowances: number
    grossEarnings: number
    pf: number
    pt: number
    deductions: number
    totalDeductions: number
    netSalary: number
    totalDays: number
    presentDays: number
    absentDays: number
    lopDays: number
    lopAmount: number
    status?: string
    generatedAt?: Date | string
    paidAt?: Date | string | null
    items?: PayrollItemCreateNestedManyWithoutPayrollInput
  }

  export type PayrollUncheckedCreateWithoutUserInput = {
    id?: string
    month: string
    year: number
    monthNumber: number
    basic: number
    hra: number
    allowances: number
    grossEarnings: number
    pf: number
    pt: number
    deductions: number
    totalDeductions: number
    netSalary: number
    totalDays: number
    presentDays: number
    absentDays: number
    lopDays: number
    lopAmount: number
    status?: string
    generatedAt?: Date | string
    paidAt?: Date | string | null
    items?: PayrollItemUncheckedCreateNestedManyWithoutPayrollInput
  }

  export type PayrollCreateOrConnectWithoutUserInput = {
    where: PayrollWhereUniqueInput
    create: XOR<PayrollCreateWithoutUserInput, PayrollUncheckedCreateWithoutUserInput>
  }

  export type PayrollCreateManyUserInputEnvelope = {
    data: PayrollCreateManyUserInput | PayrollCreateManyUserInput[]
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
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BranchUpsertWithoutUsersInput = {
    update: XOR<BranchUpdateWithoutUsersInput, BranchUncheckedUpdateWithoutUsersInput>
    create: XOR<BranchCreateWithoutUsersInput, BranchUncheckedCreateWithoutUsersInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutUsersInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutUsersInput, BranchUncheckedUpdateWithoutUsersInput>
  }

  export type BranchUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
    shiftStart?: StringFieldUpdateOperationsInput | string
    shiftEnd?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
    shiftStart?: StringFieldUpdateOperationsInput | string
    shiftEnd?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimesheetUpsertWithWhereUniqueWithoutUserInput = {
    where: TimesheetWhereUniqueInput
    update: XOR<TimesheetUpdateWithoutUserInput, TimesheetUncheckedUpdateWithoutUserInput>
    create: XOR<TimesheetCreateWithoutUserInput, TimesheetUncheckedCreateWithoutUserInput>
  }

  export type TimesheetUpdateWithWhereUniqueWithoutUserInput = {
    where: TimesheetWhereUniqueInput
    data: XOR<TimesheetUpdateWithoutUserInput, TimesheetUncheckedUpdateWithoutUserInput>
  }

  export type TimesheetUpdateManyWithWhereWithoutUserInput = {
    where: TimesheetScalarWhereInput
    data: XOR<TimesheetUpdateManyMutationInput, TimesheetUncheckedUpdateManyWithoutUserInput>
  }

  export type TimesheetScalarWhereInput = {
    AND?: TimesheetScalarWhereInput | TimesheetScalarWhereInput[]
    OR?: TimesheetScalarWhereInput[]
    NOT?: TimesheetScalarWhereInput | TimesheetScalarWhereInput[]
    id?: StringFilter<"Timesheet"> | string
    userId?: StringFilter<"Timesheet"> | string
    date?: DateTimeFilter<"Timesheet"> | Date | string
    status?: StringFilter<"Timesheet"> | string
    totalHours?: FloatFilter<"Timesheet"> | number
    createdAt?: DateTimeFilter<"Timesheet"> | Date | string
    updatedAt?: DateTimeFilter<"Timesheet"> | Date | string
  }

  export type LeaveUpsertWithWhereUniqueWithoutUserInput = {
    where: LeaveWhereUniqueInput
    update: XOR<LeaveUpdateWithoutUserInput, LeaveUncheckedUpdateWithoutUserInput>
    create: XOR<LeaveCreateWithoutUserInput, LeaveUncheckedCreateWithoutUserInput>
  }

  export type LeaveUpdateWithWhereUniqueWithoutUserInput = {
    where: LeaveWhereUniqueInput
    data: XOR<LeaveUpdateWithoutUserInput, LeaveUncheckedUpdateWithoutUserInput>
  }

  export type LeaveUpdateManyWithWhereWithoutUserInput = {
    where: LeaveScalarWhereInput
    data: XOR<LeaveUpdateManyMutationInput, LeaveUncheckedUpdateManyWithoutUserInput>
  }

  export type LeaveScalarWhereInput = {
    AND?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
    OR?: LeaveScalarWhereInput[]
    NOT?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
    id?: StringFilter<"Leave"> | string
    userId?: StringFilter<"Leave"> | string
    date?: DateTimeFilter<"Leave"> | Date | string
    type?: StringFilter<"Leave"> | string
    status?: StringFilter<"Leave"> | string
    reason?: StringNullableFilter<"Leave"> | string | null
    createdAt?: DateTimeFilter<"Leave"> | Date | string
  }

  export type AttendanceUpsertWithWhereUniqueWithoutUserInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutUserInput, AttendanceUncheckedUpdateWithoutUserInput>
    create: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutUserInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutUserInput, AttendanceUncheckedUpdateWithoutUserInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutUserInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutUserInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: StringFilter<"Attendance"> | string
    userId?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    clockIn?: DateTimeFilter<"Attendance"> | Date | string
    clockInLat?: FloatNullableFilter<"Attendance"> | number | null
    clockInLng?: FloatNullableFilter<"Attendance"> | number | null
    clockOut?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    clockOutLat?: FloatNullableFilter<"Attendance"> | number | null
    clockOutLng?: FloatNullableFilter<"Attendance"> | number | null
    status?: StringFilter<"Attendance"> | string
    ipAddress?: StringNullableFilter<"Attendance"> | string | null
    punchMode?: StringFilter<"Attendance"> | string
    punchInNote?: StringNullableFilter<"Attendance"> | string | null
    punchOutNote?: StringNullableFilter<"Attendance"> | string | null
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutManagerInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutManagerInput, ProjectUncheckedUpdateWithoutManagerInput>
    create: XOR<ProjectCreateWithoutManagerInput, ProjectUncheckedCreateWithoutManagerInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutManagerInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutManagerInput, ProjectUncheckedUpdateWithoutManagerInput>
  }

  export type ProjectUpdateManyWithWhereWithoutManagerInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutManagerInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutTeamMembersInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutTeamMembersInput, ProjectUncheckedUpdateWithoutTeamMembersInput>
    create: XOR<ProjectCreateWithoutTeamMembersInput, ProjectUncheckedCreateWithoutTeamMembersInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutTeamMembersInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutTeamMembersInput, ProjectUncheckedUpdateWithoutTeamMembersInput>
  }

  export type ProjectUpdateManyWithWhereWithoutTeamMembersInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutTeamMembersInput>
  }

  export type TaskUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutAssignedToInput, TaskUncheckedUpdateWithoutAssignedToInput>
    create: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutAssignedToInput, TaskUncheckedUpdateWithoutAssignedToInput>
  }

  export type TaskUpdateManyWithWhereWithoutAssignedToInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: StringFilter<"Task"> | string
    priority?: StringFilter<"Task"> | string
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    assignedToId?: StringFilter<"Task"> | string
    projectId?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type AttendanceRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: AttendanceRequestWhereUniqueInput
    update: XOR<AttendanceRequestUpdateWithoutUserInput, AttendanceRequestUncheckedUpdateWithoutUserInput>
    create: XOR<AttendanceRequestCreateWithoutUserInput, AttendanceRequestUncheckedCreateWithoutUserInput>
  }

  export type AttendanceRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: AttendanceRequestWhereUniqueInput
    data: XOR<AttendanceRequestUpdateWithoutUserInput, AttendanceRequestUncheckedUpdateWithoutUserInput>
  }

  export type AttendanceRequestUpdateManyWithWhereWithoutUserInput = {
    where: AttendanceRequestScalarWhereInput
    data: XOR<AttendanceRequestUpdateManyMutationInput, AttendanceRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type AttendanceRequestScalarWhereInput = {
    AND?: AttendanceRequestScalarWhereInput | AttendanceRequestScalarWhereInput[]
    OR?: AttendanceRequestScalarWhereInput[]
    NOT?: AttendanceRequestScalarWhereInput | AttendanceRequestScalarWhereInput[]
    id?: StringFilter<"AttendanceRequest"> | string
    userId?: StringFilter<"AttendanceRequest"> | string
    attendanceId?: StringNullableFilter<"AttendanceRequest"> | string | null
    date?: DateTimeFilter<"AttendanceRequest"> | Date | string
    requestType?: StringFilter<"AttendanceRequest"> | string
    newTime?: DateTimeFilter<"AttendanceRequest"> | Date | string
    reason?: StringFilter<"AttendanceRequest"> | string
    status?: StringFilter<"AttendanceRequest"> | string
    adminRemarks?: StringNullableFilter<"AttendanceRequest"> | string | null
    createdAt?: DateTimeFilter<"AttendanceRequest"> | Date | string
    updatedAt?: DateTimeFilter<"AttendanceRequest"> | Date | string
  }

  export type SalaryStructureUpsertWithoutUserInput = {
    update: XOR<SalaryStructureUpdateWithoutUserInput, SalaryStructureUncheckedUpdateWithoutUserInput>
    create: XOR<SalaryStructureCreateWithoutUserInput, SalaryStructureUncheckedCreateWithoutUserInput>
    where?: SalaryStructureWhereInput
  }

  export type SalaryStructureUpdateToOneWithWhereWithoutUserInput = {
    where?: SalaryStructureWhereInput
    data: XOR<SalaryStructureUpdateWithoutUserInput, SalaryStructureUncheckedUpdateWithoutUserInput>
  }

  export type SalaryStructureUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    basic?: FloatFieldUpdateOperationsInput | number
    hra?: FloatFieldUpdateOperationsInput | number
    allowances?: FloatFieldUpdateOperationsInput | number
    specialAllowance?: FloatFieldUpdateOperationsInput | number
    pf?: FloatFieldUpdateOperationsInput | number
    pt?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    netSalary?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryStructureUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    basic?: FloatFieldUpdateOperationsInput | number
    hra?: FloatFieldUpdateOperationsInput | number
    allowances?: FloatFieldUpdateOperationsInput | number
    specialAllowance?: FloatFieldUpdateOperationsInput | number
    pf?: FloatFieldUpdateOperationsInput | number
    pt?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    netSalary?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollUpsertWithWhereUniqueWithoutUserInput = {
    where: PayrollWhereUniqueInput
    update: XOR<PayrollUpdateWithoutUserInput, PayrollUncheckedUpdateWithoutUserInput>
    create: XOR<PayrollCreateWithoutUserInput, PayrollUncheckedCreateWithoutUserInput>
  }

  export type PayrollUpdateWithWhereUniqueWithoutUserInput = {
    where: PayrollWhereUniqueInput
    data: XOR<PayrollUpdateWithoutUserInput, PayrollUncheckedUpdateWithoutUserInput>
  }

  export type PayrollUpdateManyWithWhereWithoutUserInput = {
    where: PayrollScalarWhereInput
    data: XOR<PayrollUpdateManyMutationInput, PayrollUncheckedUpdateManyWithoutUserInput>
  }

  export type PayrollScalarWhereInput = {
    AND?: PayrollScalarWhereInput | PayrollScalarWhereInput[]
    OR?: PayrollScalarWhereInput[]
    NOT?: PayrollScalarWhereInput | PayrollScalarWhereInput[]
    id?: StringFilter<"Payroll"> | string
    userId?: StringFilter<"Payroll"> | string
    month?: StringFilter<"Payroll"> | string
    year?: IntFilter<"Payroll"> | number
    monthNumber?: IntFilter<"Payroll"> | number
    basic?: FloatFilter<"Payroll"> | number
    hra?: FloatFilter<"Payroll"> | number
    allowances?: FloatFilter<"Payroll"> | number
    grossEarnings?: FloatFilter<"Payroll"> | number
    pf?: FloatFilter<"Payroll"> | number
    pt?: FloatFilter<"Payroll"> | number
    deductions?: FloatFilter<"Payroll"> | number
    totalDeductions?: FloatFilter<"Payroll"> | number
    netSalary?: FloatFilter<"Payroll"> | number
    totalDays?: IntFilter<"Payroll"> | number
    presentDays?: FloatFilter<"Payroll"> | number
    absentDays?: FloatFilter<"Payroll"> | number
    lopDays?: FloatFilter<"Payroll"> | number
    lopAmount?: FloatFilter<"Payroll"> | number
    status?: StringFilter<"Payroll"> | string
    generatedAt?: DateTimeFilter<"Payroll"> | Date | string
    paidAt?: DateTimeNullableFilter<"Payroll"> | Date | string | null
  }

  export type CustomerCreateWithoutProjectsInput = {
    id?: string
    code: string
    name: string
    address?: string | null
    remarks?: string | null
    contactPerson?: string | null
    phone?: string | null
    email?: string | null
  }

  export type CustomerUncheckedCreateWithoutProjectsInput = {
    id?: string
    code: string
    name: string
    address?: string | null
    remarks?: string | null
    contactPerson?: string | null
    phone?: string | null
    email?: string | null
  }

  export type CustomerCreateOrConnectWithoutProjectsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutProjectsInput, CustomerUncheckedCreateWithoutProjectsInput>
  }

  export type UserCreateWithoutManagedProjectsInput = {
    id?: string
    code?: string | null
    email: string
    password: string
    name?: string | null
    image?: string | null
    branchLegacy?: string | null
    phone?: string | null
    createdAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    branch?: BranchCreateNestedOneWithoutUsersInput
    timesheets?: TimesheetCreateNestedManyWithoutUserInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    attendance?: AttendanceCreateNestedManyWithoutUserInput
    projectMemberships?: ProjectCreateNestedManyWithoutTeamMembersInput
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    attendanceRequest?: AttendanceRequestCreateNestedManyWithoutUserInput
    salaryStructure?: SalaryStructureCreateNestedOneWithoutUserInput
    payrolls?: PayrollCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutManagedProjectsInput = {
    id?: string
    code?: string | null
    email: string
    password: string
    name?: string | null
    image?: string | null
    roleId?: string | null
    branchLegacy?: string | null
    branchId?: string | null
    phone?: string | null
    createdAt?: Date | string
    timesheets?: TimesheetUncheckedCreateNestedManyWithoutUserInput
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    projectMemberships?: ProjectUncheckedCreateNestedManyWithoutTeamMembersInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    attendanceRequest?: AttendanceRequestUncheckedCreateNestedManyWithoutUserInput
    salaryStructure?: SalaryStructureUncheckedCreateNestedOneWithoutUserInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutManagedProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutManagedProjectsInput, UserUncheckedCreateWithoutManagedProjectsInput>
  }

  export type UserCreateWithoutProjectMembershipsInput = {
    id?: string
    code?: string | null
    email: string
    password: string
    name?: string | null
    image?: string | null
    branchLegacy?: string | null
    phone?: string | null
    createdAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    branch?: BranchCreateNestedOneWithoutUsersInput
    timesheets?: TimesheetCreateNestedManyWithoutUserInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    attendance?: AttendanceCreateNestedManyWithoutUserInput
    managedProjects?: ProjectCreateNestedManyWithoutManagerInput
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    attendanceRequest?: AttendanceRequestCreateNestedManyWithoutUserInput
    salaryStructure?: SalaryStructureCreateNestedOneWithoutUserInput
    payrolls?: PayrollCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectMembershipsInput = {
    id?: string
    code?: string | null
    email: string
    password: string
    name?: string | null
    image?: string | null
    roleId?: string | null
    branchLegacy?: string | null
    branchId?: string | null
    phone?: string | null
    createdAt?: Date | string
    timesheets?: TimesheetUncheckedCreateNestedManyWithoutUserInput
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    managedProjects?: ProjectUncheckedCreateNestedManyWithoutManagerInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    attendanceRequest?: AttendanceRequestUncheckedCreateNestedManyWithoutUserInput
    salaryStructure?: SalaryStructureUncheckedCreateNestedOneWithoutUserInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectMembershipsInput, UserUncheckedCreateWithoutProjectMembershipsInput>
  }

  export type TimesheetEntryCreateWithoutProjectInput = {
    id?: string
    taskId?: string | null
    activity?: string | null
    location?: string | null
    description: string
    hours: number
    timesheet: TimesheetCreateNestedOneWithoutEntriesInput
  }

  export type TimesheetEntryUncheckedCreateWithoutProjectInput = {
    id?: string
    timesheetId: string
    taskId?: string | null
    activity?: string | null
    location?: string | null
    description: string
    hours: number
  }

  export type TimesheetEntryCreateOrConnectWithoutProjectInput = {
    where: TimesheetEntryWhereUniqueInput
    create: XOR<TimesheetEntryCreateWithoutProjectInput, TimesheetEntryUncheckedCreateWithoutProjectInput>
  }

  export type TimesheetEntryCreateManyProjectInputEnvelope = {
    data: TimesheetEntryCreateManyProjectInput | TimesheetEntryCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutProjectInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    priority?: string
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo: UserCreateNestedOneWithoutAssignedTasksInput
  }

  export type TaskUncheckedCreateWithoutProjectInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    priority?: string
    dueDate?: Date | string | null
    assignedToId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutProjectInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskCreateManyProjectInputEnvelope = {
    data: TaskCreateManyProjectInput | TaskCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutProjectsInput = {
    update: XOR<CustomerUpdateWithoutProjectsInput, CustomerUncheckedUpdateWithoutProjectsInput>
    create: XOR<CustomerCreateWithoutProjectsInput, CustomerUncheckedCreateWithoutProjectsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutProjectsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutProjectsInput, CustomerUncheckedUpdateWithoutProjectsInput>
  }

  export type CustomerUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutManagedProjectsInput = {
    update: XOR<UserUpdateWithoutManagedProjectsInput, UserUncheckedUpdateWithoutManagedProjectsInput>
    create: XOR<UserCreateWithoutManagedProjectsInput, UserUncheckedCreateWithoutManagedProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutManagedProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutManagedProjectsInput, UserUncheckedUpdateWithoutManagedProjectsInput>
  }

  export type UserUpdateWithoutManagedProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    branchLegacy?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    branch?: BranchUpdateOneWithoutUsersNestedInput
    timesheets?: TimesheetUpdateManyWithoutUserNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    attendance?: AttendanceUpdateManyWithoutUserNestedInput
    projectMemberships?: ProjectUpdateManyWithoutTeamMembersNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    attendanceRequest?: AttendanceRequestUpdateManyWithoutUserNestedInput
    salaryStructure?: SalaryStructureUpdateOneWithoutUserNestedInput
    payrolls?: PayrollUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutManagedProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    branchLegacy?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timesheets?: TimesheetUncheckedUpdateManyWithoutUserNestedInput
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    projectMemberships?: ProjectUncheckedUpdateManyWithoutTeamMembersNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    attendanceRequest?: AttendanceRequestUncheckedUpdateManyWithoutUserNestedInput
    salaryStructure?: SalaryStructureUncheckedUpdateOneWithoutUserNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutProjectMembershipsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutProjectMembershipsInput, UserUncheckedUpdateWithoutProjectMembershipsInput>
    create: XOR<UserCreateWithoutProjectMembershipsInput, UserUncheckedCreateWithoutProjectMembershipsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutProjectMembershipsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutProjectMembershipsInput, UserUncheckedUpdateWithoutProjectMembershipsInput>
  }

  export type UserUpdateManyWithWhereWithoutProjectMembershipsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutProjectMembershipsInput>
  }

  export type TimesheetEntryUpsertWithWhereUniqueWithoutProjectInput = {
    where: TimesheetEntryWhereUniqueInput
    update: XOR<TimesheetEntryUpdateWithoutProjectInput, TimesheetEntryUncheckedUpdateWithoutProjectInput>
    create: XOR<TimesheetEntryCreateWithoutProjectInput, TimesheetEntryUncheckedCreateWithoutProjectInput>
  }

  export type TimesheetEntryUpdateWithWhereUniqueWithoutProjectInput = {
    where: TimesheetEntryWhereUniqueInput
    data: XOR<TimesheetEntryUpdateWithoutProjectInput, TimesheetEntryUncheckedUpdateWithoutProjectInput>
  }

  export type TimesheetEntryUpdateManyWithWhereWithoutProjectInput = {
    where: TimesheetEntryScalarWhereInput
    data: XOR<TimesheetEntryUpdateManyMutationInput, TimesheetEntryUncheckedUpdateManyWithoutProjectInput>
  }

  export type TimesheetEntryScalarWhereInput = {
    AND?: TimesheetEntryScalarWhereInput | TimesheetEntryScalarWhereInput[]
    OR?: TimesheetEntryScalarWhereInput[]
    NOT?: TimesheetEntryScalarWhereInput | TimesheetEntryScalarWhereInput[]
    id?: StringFilter<"TimesheetEntry"> | string
    timesheetId?: StringFilter<"TimesheetEntry"> | string
    projectId?: StringFilter<"TimesheetEntry"> | string
    taskId?: StringNullableFilter<"TimesheetEntry"> | string | null
    activity?: StringNullableFilter<"TimesheetEntry"> | string | null
    location?: StringNullableFilter<"TimesheetEntry"> | string | null
    description?: StringFilter<"TimesheetEntry"> | string
    hours?: FloatFilter<"TimesheetEntry"> | number
  }

  export type TaskUpsertWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
  }

  export type TaskUpdateManyWithWhereWithoutProjectInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutProjectInput>
  }

  export type UserCreateWithoutTimesheetsInput = {
    id?: string
    code?: string | null
    email: string
    password: string
    name?: string | null
    image?: string | null
    branchLegacy?: string | null
    phone?: string | null
    createdAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    branch?: BranchCreateNestedOneWithoutUsersInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    attendance?: AttendanceCreateNestedManyWithoutUserInput
    managedProjects?: ProjectCreateNestedManyWithoutManagerInput
    projectMemberships?: ProjectCreateNestedManyWithoutTeamMembersInput
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    attendanceRequest?: AttendanceRequestCreateNestedManyWithoutUserInput
    salaryStructure?: SalaryStructureCreateNestedOneWithoutUserInput
    payrolls?: PayrollCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTimesheetsInput = {
    id?: string
    code?: string | null
    email: string
    password: string
    name?: string | null
    image?: string | null
    roleId?: string | null
    branchLegacy?: string | null
    branchId?: string | null
    phone?: string | null
    createdAt?: Date | string
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    managedProjects?: ProjectUncheckedCreateNestedManyWithoutManagerInput
    projectMemberships?: ProjectUncheckedCreateNestedManyWithoutTeamMembersInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    attendanceRequest?: AttendanceRequestUncheckedCreateNestedManyWithoutUserInput
    salaryStructure?: SalaryStructureUncheckedCreateNestedOneWithoutUserInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTimesheetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTimesheetsInput, UserUncheckedCreateWithoutTimesheetsInput>
  }

  export type TimesheetEntryCreateWithoutTimesheetInput = {
    id?: string
    taskId?: string | null
    activity?: string | null
    location?: string | null
    description: string
    hours: number
    project: ProjectCreateNestedOneWithoutEntriesInput
  }

  export type TimesheetEntryUncheckedCreateWithoutTimesheetInput = {
    id?: string
    projectId: string
    taskId?: string | null
    activity?: string | null
    location?: string | null
    description: string
    hours: number
  }

  export type TimesheetEntryCreateOrConnectWithoutTimesheetInput = {
    where: TimesheetEntryWhereUniqueInput
    create: XOR<TimesheetEntryCreateWithoutTimesheetInput, TimesheetEntryUncheckedCreateWithoutTimesheetInput>
  }

  export type TimesheetEntryCreateManyTimesheetInputEnvelope = {
    data: TimesheetEntryCreateManyTimesheetInput | TimesheetEntryCreateManyTimesheetInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTimesheetsInput = {
    update: XOR<UserUpdateWithoutTimesheetsInput, UserUncheckedUpdateWithoutTimesheetsInput>
    create: XOR<UserCreateWithoutTimesheetsInput, UserUncheckedCreateWithoutTimesheetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTimesheetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTimesheetsInput, UserUncheckedUpdateWithoutTimesheetsInput>
  }

  export type UserUpdateWithoutTimesheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    branchLegacy?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    branch?: BranchUpdateOneWithoutUsersNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    attendance?: AttendanceUpdateManyWithoutUserNestedInput
    managedProjects?: ProjectUpdateManyWithoutManagerNestedInput
    projectMemberships?: ProjectUpdateManyWithoutTeamMembersNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    attendanceRequest?: AttendanceRequestUpdateManyWithoutUserNestedInput
    salaryStructure?: SalaryStructureUpdateOneWithoutUserNestedInput
    payrolls?: PayrollUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTimesheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    branchLegacy?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    managedProjects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
    projectMemberships?: ProjectUncheckedUpdateManyWithoutTeamMembersNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    attendanceRequest?: AttendanceRequestUncheckedUpdateManyWithoutUserNestedInput
    salaryStructure?: SalaryStructureUncheckedUpdateOneWithoutUserNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TimesheetEntryUpsertWithWhereUniqueWithoutTimesheetInput = {
    where: TimesheetEntryWhereUniqueInput
    update: XOR<TimesheetEntryUpdateWithoutTimesheetInput, TimesheetEntryUncheckedUpdateWithoutTimesheetInput>
    create: XOR<TimesheetEntryCreateWithoutTimesheetInput, TimesheetEntryUncheckedCreateWithoutTimesheetInput>
  }

  export type TimesheetEntryUpdateWithWhereUniqueWithoutTimesheetInput = {
    where: TimesheetEntryWhereUniqueInput
    data: XOR<TimesheetEntryUpdateWithoutTimesheetInput, TimesheetEntryUncheckedUpdateWithoutTimesheetInput>
  }

  export type TimesheetEntryUpdateManyWithWhereWithoutTimesheetInput = {
    where: TimesheetEntryScalarWhereInput
    data: XOR<TimesheetEntryUpdateManyMutationInput, TimesheetEntryUncheckedUpdateManyWithoutTimesheetInput>
  }

  export type TimesheetCreateWithoutEntriesInput = {
    id?: string
    date: Date | string
    status?: string
    totalHours?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTimesheetsInput
  }

  export type TimesheetUncheckedCreateWithoutEntriesInput = {
    id?: string
    userId: string
    date: Date | string
    status?: string
    totalHours?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimesheetCreateOrConnectWithoutEntriesInput = {
    where: TimesheetWhereUniqueInput
    create: XOR<TimesheetCreateWithoutEntriesInput, TimesheetUncheckedCreateWithoutEntriesInput>
  }

  export type ProjectCreateWithoutEntriesInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    isActive?: boolean
    remarks?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    customer?: CustomerCreateNestedOneWithoutProjectsInput
    manager?: UserCreateNestedOneWithoutManagedProjectsInput
    teamMembers?: UserCreateNestedManyWithoutProjectMembershipsInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutEntriesInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    isActive?: boolean
    customerId?: string | null
    managerId?: string | null
    remarks?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    teamMembers?: UserUncheckedCreateNestedManyWithoutProjectMembershipsInput
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutEntriesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutEntriesInput, ProjectUncheckedCreateWithoutEntriesInput>
  }

  export type TimesheetUpsertWithoutEntriesInput = {
    update: XOR<TimesheetUpdateWithoutEntriesInput, TimesheetUncheckedUpdateWithoutEntriesInput>
    create: XOR<TimesheetCreateWithoutEntriesInput, TimesheetUncheckedCreateWithoutEntriesInput>
    where?: TimesheetWhereInput
  }

  export type TimesheetUpdateToOneWithWhereWithoutEntriesInput = {
    where?: TimesheetWhereInput
    data: XOR<TimesheetUpdateWithoutEntriesInput, TimesheetUncheckedUpdateWithoutEntriesInput>
  }

  export type TimesheetUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    totalHours?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTimesheetsNestedInput
  }

  export type TimesheetUncheckedUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    totalHours?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpsertWithoutEntriesInput = {
    update: XOR<ProjectUpdateWithoutEntriesInput, ProjectUncheckedUpdateWithoutEntriesInput>
    create: XOR<ProjectCreateWithoutEntriesInput, ProjectUncheckedCreateWithoutEntriesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutEntriesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutEntriesInput, ProjectUncheckedUpdateWithoutEntriesInput>
  }

  export type ProjectUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUpdateOneWithoutProjectsNestedInput
    manager?: UserUpdateOneWithoutManagedProjectsNestedInput
    teamMembers?: UserUpdateManyWithoutProjectMembershipsNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teamMembers?: UserUncheckedUpdateManyWithoutProjectMembershipsNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserCreateWithoutAssignedTasksInput = {
    id?: string
    code?: string | null
    email: string
    password: string
    name?: string | null
    image?: string | null
    branchLegacy?: string | null
    phone?: string | null
    createdAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    branch?: BranchCreateNestedOneWithoutUsersInput
    timesheets?: TimesheetCreateNestedManyWithoutUserInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    attendance?: AttendanceCreateNestedManyWithoutUserInput
    managedProjects?: ProjectCreateNestedManyWithoutManagerInput
    projectMemberships?: ProjectCreateNestedManyWithoutTeamMembersInput
    attendanceRequest?: AttendanceRequestCreateNestedManyWithoutUserInput
    salaryStructure?: SalaryStructureCreateNestedOneWithoutUserInput
    payrolls?: PayrollCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAssignedTasksInput = {
    id?: string
    code?: string | null
    email: string
    password: string
    name?: string | null
    image?: string | null
    roleId?: string | null
    branchLegacy?: string | null
    branchId?: string | null
    phone?: string | null
    createdAt?: Date | string
    timesheets?: TimesheetUncheckedCreateNestedManyWithoutUserInput
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    managedProjects?: ProjectUncheckedCreateNestedManyWithoutManagerInput
    projectMemberships?: ProjectUncheckedCreateNestedManyWithoutTeamMembersInput
    attendanceRequest?: AttendanceRequestUncheckedCreateNestedManyWithoutUserInput
    salaryStructure?: SalaryStructureUncheckedCreateNestedOneWithoutUserInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAssignedTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
  }

  export type ProjectCreateWithoutTasksInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    isActive?: boolean
    remarks?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    customer?: CustomerCreateNestedOneWithoutProjectsInput
    manager?: UserCreateNestedOneWithoutManagedProjectsInput
    teamMembers?: UserCreateNestedManyWithoutProjectMembershipsInput
    entries?: TimesheetEntryCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTasksInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    isActive?: boolean
    customerId?: string | null
    managerId?: string | null
    remarks?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    teamMembers?: UserUncheckedCreateNestedManyWithoutProjectMembershipsInput
    entries?: TimesheetEntryUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTasksInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
  }

  export type UserUpsertWithoutAssignedTasksInput = {
    update: XOR<UserUpdateWithoutAssignedTasksInput, UserUncheckedUpdateWithoutAssignedTasksInput>
    create: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedTasksInput, UserUncheckedUpdateWithoutAssignedTasksInput>
  }

  export type UserUpdateWithoutAssignedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    branchLegacy?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    branch?: BranchUpdateOneWithoutUsersNestedInput
    timesheets?: TimesheetUpdateManyWithoutUserNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    attendance?: AttendanceUpdateManyWithoutUserNestedInput
    managedProjects?: ProjectUpdateManyWithoutManagerNestedInput
    projectMemberships?: ProjectUpdateManyWithoutTeamMembersNestedInput
    attendanceRequest?: AttendanceRequestUpdateManyWithoutUserNestedInput
    salaryStructure?: SalaryStructureUpdateOneWithoutUserNestedInput
    payrolls?: PayrollUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    branchLegacy?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timesheets?: TimesheetUncheckedUpdateManyWithoutUserNestedInput
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    managedProjects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
    projectMemberships?: ProjectUncheckedUpdateManyWithoutTeamMembersNestedInput
    attendanceRequest?: AttendanceRequestUncheckedUpdateManyWithoutUserNestedInput
    salaryStructure?: SalaryStructureUncheckedUpdateOneWithoutUserNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectUpsertWithoutTasksInput = {
    update: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTasksInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type ProjectUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUpdateOneWithoutProjectsNestedInput
    manager?: UserUpdateOneWithoutManagedProjectsNestedInput
    teamMembers?: UserUpdateManyWithoutProjectMembershipsNestedInput
    entries?: TimesheetEntryUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teamMembers?: UserUncheckedUpdateManyWithoutProjectMembershipsNestedInput
    entries?: TimesheetEntryUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserCreateWithoutLeavesInput = {
    id?: string
    code?: string | null
    email: string
    password: string
    name?: string | null
    image?: string | null
    branchLegacy?: string | null
    phone?: string | null
    createdAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    branch?: BranchCreateNestedOneWithoutUsersInput
    timesheets?: TimesheetCreateNestedManyWithoutUserInput
    attendance?: AttendanceCreateNestedManyWithoutUserInput
    managedProjects?: ProjectCreateNestedManyWithoutManagerInput
    projectMemberships?: ProjectCreateNestedManyWithoutTeamMembersInput
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    attendanceRequest?: AttendanceRequestCreateNestedManyWithoutUserInput
    salaryStructure?: SalaryStructureCreateNestedOneWithoutUserInput
    payrolls?: PayrollCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLeavesInput = {
    id?: string
    code?: string | null
    email: string
    password: string
    name?: string | null
    image?: string | null
    roleId?: string | null
    branchLegacy?: string | null
    branchId?: string | null
    phone?: string | null
    createdAt?: Date | string
    timesheets?: TimesheetUncheckedCreateNestedManyWithoutUserInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    managedProjects?: ProjectUncheckedCreateNestedManyWithoutManagerInput
    projectMemberships?: ProjectUncheckedCreateNestedManyWithoutTeamMembersInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    attendanceRequest?: AttendanceRequestUncheckedCreateNestedManyWithoutUserInput
    salaryStructure?: SalaryStructureUncheckedCreateNestedOneWithoutUserInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLeavesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLeavesInput, UserUncheckedCreateWithoutLeavesInput>
  }

  export type UserUpsertWithoutLeavesInput = {
    update: XOR<UserUpdateWithoutLeavesInput, UserUncheckedUpdateWithoutLeavesInput>
    create: XOR<UserCreateWithoutLeavesInput, UserUncheckedCreateWithoutLeavesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLeavesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLeavesInput, UserUncheckedUpdateWithoutLeavesInput>
  }

  export type UserUpdateWithoutLeavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    branchLegacy?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    branch?: BranchUpdateOneWithoutUsersNestedInput
    timesheets?: TimesheetUpdateManyWithoutUserNestedInput
    attendance?: AttendanceUpdateManyWithoutUserNestedInput
    managedProjects?: ProjectUpdateManyWithoutManagerNestedInput
    projectMemberships?: ProjectUpdateManyWithoutTeamMembersNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    attendanceRequest?: AttendanceRequestUpdateManyWithoutUserNestedInput
    salaryStructure?: SalaryStructureUpdateOneWithoutUserNestedInput
    payrolls?: PayrollUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLeavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    branchLegacy?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timesheets?: TimesheetUncheckedUpdateManyWithoutUserNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    managedProjects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
    projectMemberships?: ProjectUncheckedUpdateManyWithoutTeamMembersNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    attendanceRequest?: AttendanceRequestUncheckedUpdateManyWithoutUserNestedInput
    salaryStructure?: SalaryStructureUncheckedUpdateOneWithoutUserNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBranchInput = {
    id?: string
    code?: string | null
    email: string
    password: string
    name?: string | null
    image?: string | null
    branchLegacy?: string | null
    phone?: string | null
    createdAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    timesheets?: TimesheetCreateNestedManyWithoutUserInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    attendance?: AttendanceCreateNestedManyWithoutUserInput
    managedProjects?: ProjectCreateNestedManyWithoutManagerInput
    projectMemberships?: ProjectCreateNestedManyWithoutTeamMembersInput
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    attendanceRequest?: AttendanceRequestCreateNestedManyWithoutUserInput
    salaryStructure?: SalaryStructureCreateNestedOneWithoutUserInput
    payrolls?: PayrollCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBranchInput = {
    id?: string
    code?: string | null
    email: string
    password: string
    name?: string | null
    image?: string | null
    roleId?: string | null
    branchLegacy?: string | null
    phone?: string | null
    createdAt?: Date | string
    timesheets?: TimesheetUncheckedCreateNestedManyWithoutUserInput
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    managedProjects?: ProjectUncheckedCreateNestedManyWithoutManagerInput
    projectMemberships?: ProjectUncheckedCreateNestedManyWithoutTeamMembersInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    attendanceRequest?: AttendanceRequestUncheckedCreateNestedManyWithoutUserInput
    salaryStructure?: SalaryStructureUncheckedCreateNestedOneWithoutUserInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBranchInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput>
  }

  export type UserCreateManyBranchInputEnvelope = {
    data: UserCreateManyBranchInput | UserCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutBranchInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutBranchInput, UserUncheckedUpdateWithoutBranchInput>
    create: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput>
  }

  export type UserUpdateWithWhereUniqueWithoutBranchInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutBranchInput, UserUncheckedUpdateWithoutBranchInput>
  }

  export type UserUpdateManyWithWhereWithoutBranchInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutBranchInput>
  }

  export type UserCreateWithoutAttendanceInput = {
    id?: string
    code?: string | null
    email: string
    password: string
    name?: string | null
    image?: string | null
    branchLegacy?: string | null
    phone?: string | null
    createdAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    branch?: BranchCreateNestedOneWithoutUsersInput
    timesheets?: TimesheetCreateNestedManyWithoutUserInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    managedProjects?: ProjectCreateNestedManyWithoutManagerInput
    projectMemberships?: ProjectCreateNestedManyWithoutTeamMembersInput
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    attendanceRequest?: AttendanceRequestCreateNestedManyWithoutUserInput
    salaryStructure?: SalaryStructureCreateNestedOneWithoutUserInput
    payrolls?: PayrollCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAttendanceInput = {
    id?: string
    code?: string | null
    email: string
    password: string
    name?: string | null
    image?: string | null
    roleId?: string | null
    branchLegacy?: string | null
    branchId?: string | null
    phone?: string | null
    createdAt?: Date | string
    timesheets?: TimesheetUncheckedCreateNestedManyWithoutUserInput
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    managedProjects?: ProjectUncheckedCreateNestedManyWithoutManagerInput
    projectMemberships?: ProjectUncheckedCreateNestedManyWithoutTeamMembersInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    attendanceRequest?: AttendanceRequestUncheckedCreateNestedManyWithoutUserInput
    salaryStructure?: SalaryStructureUncheckedCreateNestedOneWithoutUserInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAttendanceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAttendanceInput, UserUncheckedCreateWithoutAttendanceInput>
  }

  export type UserUpsertWithoutAttendanceInput = {
    update: XOR<UserUpdateWithoutAttendanceInput, UserUncheckedUpdateWithoutAttendanceInput>
    create: XOR<UserCreateWithoutAttendanceInput, UserUncheckedCreateWithoutAttendanceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAttendanceInput, UserUncheckedUpdateWithoutAttendanceInput>
  }

  export type UserUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    branchLegacy?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    branch?: BranchUpdateOneWithoutUsersNestedInput
    timesheets?: TimesheetUpdateManyWithoutUserNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    managedProjects?: ProjectUpdateManyWithoutManagerNestedInput
    projectMemberships?: ProjectUpdateManyWithoutTeamMembersNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    attendanceRequest?: AttendanceRequestUpdateManyWithoutUserNestedInput
    salaryStructure?: SalaryStructureUpdateOneWithoutUserNestedInput
    payrolls?: PayrollUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    branchLegacy?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timesheets?: TimesheetUncheckedUpdateManyWithoutUserNestedInput
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    managedProjects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
    projectMemberships?: ProjectUncheckedUpdateManyWithoutTeamMembersNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    attendanceRequest?: AttendanceRequestUncheckedUpdateManyWithoutUserNestedInput
    salaryStructure?: SalaryStructureUncheckedUpdateOneWithoutUserNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAttendanceRequestInput = {
    id?: string
    code?: string | null
    email: string
    password: string
    name?: string | null
    image?: string | null
    branchLegacy?: string | null
    phone?: string | null
    createdAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    branch?: BranchCreateNestedOneWithoutUsersInput
    timesheets?: TimesheetCreateNestedManyWithoutUserInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    attendance?: AttendanceCreateNestedManyWithoutUserInput
    managedProjects?: ProjectCreateNestedManyWithoutManagerInput
    projectMemberships?: ProjectCreateNestedManyWithoutTeamMembersInput
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    salaryStructure?: SalaryStructureCreateNestedOneWithoutUserInput
    payrolls?: PayrollCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAttendanceRequestInput = {
    id?: string
    code?: string | null
    email: string
    password: string
    name?: string | null
    image?: string | null
    roleId?: string | null
    branchLegacy?: string | null
    branchId?: string | null
    phone?: string | null
    createdAt?: Date | string
    timesheets?: TimesheetUncheckedCreateNestedManyWithoutUserInput
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    managedProjects?: ProjectUncheckedCreateNestedManyWithoutManagerInput
    projectMemberships?: ProjectUncheckedCreateNestedManyWithoutTeamMembersInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    salaryStructure?: SalaryStructureUncheckedCreateNestedOneWithoutUserInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAttendanceRequestInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAttendanceRequestInput, UserUncheckedCreateWithoutAttendanceRequestInput>
  }

  export type UserUpsertWithoutAttendanceRequestInput = {
    update: XOR<UserUpdateWithoutAttendanceRequestInput, UserUncheckedUpdateWithoutAttendanceRequestInput>
    create: XOR<UserCreateWithoutAttendanceRequestInput, UserUncheckedCreateWithoutAttendanceRequestInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAttendanceRequestInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAttendanceRequestInput, UserUncheckedUpdateWithoutAttendanceRequestInput>
  }

  export type UserUpdateWithoutAttendanceRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    branchLegacy?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    branch?: BranchUpdateOneWithoutUsersNestedInput
    timesheets?: TimesheetUpdateManyWithoutUserNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    attendance?: AttendanceUpdateManyWithoutUserNestedInput
    managedProjects?: ProjectUpdateManyWithoutManagerNestedInput
    projectMemberships?: ProjectUpdateManyWithoutTeamMembersNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    salaryStructure?: SalaryStructureUpdateOneWithoutUserNestedInput
    payrolls?: PayrollUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAttendanceRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    branchLegacy?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timesheets?: TimesheetUncheckedUpdateManyWithoutUserNestedInput
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    managedProjects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
    projectMemberships?: ProjectUncheckedUpdateManyWithoutTeamMembersNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    salaryStructure?: SalaryStructureUncheckedUpdateOneWithoutUserNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSalaryStructureInput = {
    id?: string
    code?: string | null
    email: string
    password: string
    name?: string | null
    image?: string | null
    branchLegacy?: string | null
    phone?: string | null
    createdAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    branch?: BranchCreateNestedOneWithoutUsersInput
    timesheets?: TimesheetCreateNestedManyWithoutUserInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    attendance?: AttendanceCreateNestedManyWithoutUserInput
    managedProjects?: ProjectCreateNestedManyWithoutManagerInput
    projectMemberships?: ProjectCreateNestedManyWithoutTeamMembersInput
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    attendanceRequest?: AttendanceRequestCreateNestedManyWithoutUserInput
    payrolls?: PayrollCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSalaryStructureInput = {
    id?: string
    code?: string | null
    email: string
    password: string
    name?: string | null
    image?: string | null
    roleId?: string | null
    branchLegacy?: string | null
    branchId?: string | null
    phone?: string | null
    createdAt?: Date | string
    timesheets?: TimesheetUncheckedCreateNestedManyWithoutUserInput
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    managedProjects?: ProjectUncheckedCreateNestedManyWithoutManagerInput
    projectMemberships?: ProjectUncheckedCreateNestedManyWithoutTeamMembersInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    attendanceRequest?: AttendanceRequestUncheckedCreateNestedManyWithoutUserInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSalaryStructureInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSalaryStructureInput, UserUncheckedCreateWithoutSalaryStructureInput>
  }

  export type UserUpsertWithoutSalaryStructureInput = {
    update: XOR<UserUpdateWithoutSalaryStructureInput, UserUncheckedUpdateWithoutSalaryStructureInput>
    create: XOR<UserCreateWithoutSalaryStructureInput, UserUncheckedCreateWithoutSalaryStructureInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSalaryStructureInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSalaryStructureInput, UserUncheckedUpdateWithoutSalaryStructureInput>
  }

  export type UserUpdateWithoutSalaryStructureInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    branchLegacy?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    branch?: BranchUpdateOneWithoutUsersNestedInput
    timesheets?: TimesheetUpdateManyWithoutUserNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    attendance?: AttendanceUpdateManyWithoutUserNestedInput
    managedProjects?: ProjectUpdateManyWithoutManagerNestedInput
    projectMemberships?: ProjectUpdateManyWithoutTeamMembersNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    attendanceRequest?: AttendanceRequestUpdateManyWithoutUserNestedInput
    payrolls?: PayrollUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSalaryStructureInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    branchLegacy?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timesheets?: TimesheetUncheckedUpdateManyWithoutUserNestedInput
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    managedProjects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
    projectMemberships?: ProjectUncheckedUpdateManyWithoutTeamMembersNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    attendanceRequest?: AttendanceRequestUncheckedUpdateManyWithoutUserNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPayrollsInput = {
    id?: string
    code?: string | null
    email: string
    password: string
    name?: string | null
    image?: string | null
    branchLegacy?: string | null
    phone?: string | null
    createdAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    branch?: BranchCreateNestedOneWithoutUsersInput
    timesheets?: TimesheetCreateNestedManyWithoutUserInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    attendance?: AttendanceCreateNestedManyWithoutUserInput
    managedProjects?: ProjectCreateNestedManyWithoutManagerInput
    projectMemberships?: ProjectCreateNestedManyWithoutTeamMembersInput
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    attendanceRequest?: AttendanceRequestCreateNestedManyWithoutUserInput
    salaryStructure?: SalaryStructureCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPayrollsInput = {
    id?: string
    code?: string | null
    email: string
    password: string
    name?: string | null
    image?: string | null
    roleId?: string | null
    branchLegacy?: string | null
    branchId?: string | null
    phone?: string | null
    createdAt?: Date | string
    timesheets?: TimesheetUncheckedCreateNestedManyWithoutUserInput
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    managedProjects?: ProjectUncheckedCreateNestedManyWithoutManagerInput
    projectMemberships?: ProjectUncheckedCreateNestedManyWithoutTeamMembersInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    attendanceRequest?: AttendanceRequestUncheckedCreateNestedManyWithoutUserInput
    salaryStructure?: SalaryStructureUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPayrollsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPayrollsInput, UserUncheckedCreateWithoutPayrollsInput>
  }

  export type PayrollItemCreateWithoutPayrollInput = {
    id?: string
    label: string
    amount: number
    type: string
  }

  export type PayrollItemUncheckedCreateWithoutPayrollInput = {
    id?: string
    label: string
    amount: number
    type: string
  }

  export type PayrollItemCreateOrConnectWithoutPayrollInput = {
    where: PayrollItemWhereUniqueInput
    create: XOR<PayrollItemCreateWithoutPayrollInput, PayrollItemUncheckedCreateWithoutPayrollInput>
  }

  export type PayrollItemCreateManyPayrollInputEnvelope = {
    data: PayrollItemCreateManyPayrollInput | PayrollItemCreateManyPayrollInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPayrollsInput = {
    update: XOR<UserUpdateWithoutPayrollsInput, UserUncheckedUpdateWithoutPayrollsInput>
    create: XOR<UserCreateWithoutPayrollsInput, UserUncheckedCreateWithoutPayrollsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPayrollsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPayrollsInput, UserUncheckedUpdateWithoutPayrollsInput>
  }

  export type UserUpdateWithoutPayrollsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    branchLegacy?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    branch?: BranchUpdateOneWithoutUsersNestedInput
    timesheets?: TimesheetUpdateManyWithoutUserNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    attendance?: AttendanceUpdateManyWithoutUserNestedInput
    managedProjects?: ProjectUpdateManyWithoutManagerNestedInput
    projectMemberships?: ProjectUpdateManyWithoutTeamMembersNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    attendanceRequest?: AttendanceRequestUpdateManyWithoutUserNestedInput
    salaryStructure?: SalaryStructureUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPayrollsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    branchLegacy?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timesheets?: TimesheetUncheckedUpdateManyWithoutUserNestedInput
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    managedProjects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
    projectMemberships?: ProjectUncheckedUpdateManyWithoutTeamMembersNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    attendanceRequest?: AttendanceRequestUncheckedUpdateManyWithoutUserNestedInput
    salaryStructure?: SalaryStructureUncheckedUpdateOneWithoutUserNestedInput
  }

  export type PayrollItemUpsertWithWhereUniqueWithoutPayrollInput = {
    where: PayrollItemWhereUniqueInput
    update: XOR<PayrollItemUpdateWithoutPayrollInput, PayrollItemUncheckedUpdateWithoutPayrollInput>
    create: XOR<PayrollItemCreateWithoutPayrollInput, PayrollItemUncheckedCreateWithoutPayrollInput>
  }

  export type PayrollItemUpdateWithWhereUniqueWithoutPayrollInput = {
    where: PayrollItemWhereUniqueInput
    data: XOR<PayrollItemUpdateWithoutPayrollInput, PayrollItemUncheckedUpdateWithoutPayrollInput>
  }

  export type PayrollItemUpdateManyWithWhereWithoutPayrollInput = {
    where: PayrollItemScalarWhereInput
    data: XOR<PayrollItemUpdateManyMutationInput, PayrollItemUncheckedUpdateManyWithoutPayrollInput>
  }

  export type PayrollItemScalarWhereInput = {
    AND?: PayrollItemScalarWhereInput | PayrollItemScalarWhereInput[]
    OR?: PayrollItemScalarWhereInput[]
    NOT?: PayrollItemScalarWhereInput | PayrollItemScalarWhereInput[]
    id?: StringFilter<"PayrollItem"> | string
    payrollId?: StringFilter<"PayrollItem"> | string
    label?: StringFilter<"PayrollItem"> | string
    amount?: FloatFilter<"PayrollItem"> | number
    type?: StringFilter<"PayrollItem"> | string
  }

  export type PayrollCreateWithoutItemsInput = {
    id?: string
    month: string
    year: number
    monthNumber: number
    basic: number
    hra: number
    allowances: number
    grossEarnings: number
    pf: number
    pt: number
    deductions: number
    totalDeductions: number
    netSalary: number
    totalDays: number
    presentDays: number
    absentDays: number
    lopDays: number
    lopAmount: number
    status?: string
    generatedAt?: Date | string
    paidAt?: Date | string | null
    user: UserCreateNestedOneWithoutPayrollsInput
  }

  export type PayrollUncheckedCreateWithoutItemsInput = {
    id?: string
    userId: string
    month: string
    year: number
    monthNumber: number
    basic: number
    hra: number
    allowances: number
    grossEarnings: number
    pf: number
    pt: number
    deductions: number
    totalDeductions: number
    netSalary: number
    totalDays: number
    presentDays: number
    absentDays: number
    lopDays: number
    lopAmount: number
    status?: string
    generatedAt?: Date | string
    paidAt?: Date | string | null
  }

  export type PayrollCreateOrConnectWithoutItemsInput = {
    where: PayrollWhereUniqueInput
    create: XOR<PayrollCreateWithoutItemsInput, PayrollUncheckedCreateWithoutItemsInput>
  }

  export type PayrollUpsertWithoutItemsInput = {
    update: XOR<PayrollUpdateWithoutItemsInput, PayrollUncheckedUpdateWithoutItemsInput>
    create: XOR<PayrollCreateWithoutItemsInput, PayrollUncheckedCreateWithoutItemsInput>
    where?: PayrollWhereInput
  }

  export type PayrollUpdateToOneWithWhereWithoutItemsInput = {
    where?: PayrollWhereInput
    data: XOR<PayrollUpdateWithoutItemsInput, PayrollUncheckedUpdateWithoutItemsInput>
  }

  export type PayrollUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    monthNumber?: IntFieldUpdateOperationsInput | number
    basic?: FloatFieldUpdateOperationsInput | number
    hra?: FloatFieldUpdateOperationsInput | number
    allowances?: FloatFieldUpdateOperationsInput | number
    grossEarnings?: FloatFieldUpdateOperationsInput | number
    pf?: FloatFieldUpdateOperationsInput | number
    pt?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    totalDeductions?: FloatFieldUpdateOperationsInput | number
    netSalary?: FloatFieldUpdateOperationsInput | number
    totalDays?: IntFieldUpdateOperationsInput | number
    presentDays?: FloatFieldUpdateOperationsInput | number
    absentDays?: FloatFieldUpdateOperationsInput | number
    lopDays?: FloatFieldUpdateOperationsInput | number
    lopAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutPayrollsNestedInput
  }

  export type PayrollUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    monthNumber?: IntFieldUpdateOperationsInput | number
    basic?: FloatFieldUpdateOperationsInput | number
    hra?: FloatFieldUpdateOperationsInput | number
    allowances?: FloatFieldUpdateOperationsInput | number
    grossEarnings?: FloatFieldUpdateOperationsInput | number
    pf?: FloatFieldUpdateOperationsInput | number
    pt?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    totalDeductions?: FloatFieldUpdateOperationsInput | number
    netSalary?: FloatFieldUpdateOperationsInput | number
    totalDays?: IntFieldUpdateOperationsInput | number
    presentDays?: FloatFieldUpdateOperationsInput | number
    absentDays?: FloatFieldUpdateOperationsInput | number
    lopDays?: FloatFieldUpdateOperationsInput | number
    lopAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyRoleInput = {
    id?: string
    code?: string | null
    email: string
    password: string
    name?: string | null
    image?: string | null
    branchLegacy?: string | null
    branchId?: string | null
    phone?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    branchLegacy?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneWithoutUsersNestedInput
    timesheets?: TimesheetUpdateManyWithoutUserNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    attendance?: AttendanceUpdateManyWithoutUserNestedInput
    managedProjects?: ProjectUpdateManyWithoutManagerNestedInput
    projectMemberships?: ProjectUpdateManyWithoutTeamMembersNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    attendanceRequest?: AttendanceRequestUpdateManyWithoutUserNestedInput
    salaryStructure?: SalaryStructureUpdateOneWithoutUserNestedInput
    payrolls?: PayrollUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    branchLegacy?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timesheets?: TimesheetUncheckedUpdateManyWithoutUserNestedInput
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    managedProjects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
    projectMemberships?: ProjectUncheckedUpdateManyWithoutTeamMembersNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    attendanceRequest?: AttendanceRequestUncheckedUpdateManyWithoutUserNestedInput
    salaryStructure?: SalaryStructureUncheckedUpdateOneWithoutUserNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    branchLegacy?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyCustomerInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    isActive?: boolean
    managerId?: string | null
    remarks?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
  }

  export type ProjectUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    manager?: UserUpdateOneWithoutManagedProjectsNestedInput
    teamMembers?: UserUpdateManyWithoutProjectMembershipsNestedInput
    entries?: TimesheetEntryUpdateManyWithoutProjectNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teamMembers?: UserUncheckedUpdateManyWithoutProjectMembershipsNestedInput
    entries?: TimesheetEntryUncheckedUpdateManyWithoutProjectNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TimesheetCreateManyUserInput = {
    id?: string
    date: Date | string
    status?: string
    totalHours?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaveCreateManyUserInput = {
    id?: string
    date: Date | string
    type?: string
    status?: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type AttendanceCreateManyUserInput = {
    id?: string
    date: Date | string
    clockIn: Date | string
    clockInLat?: number | null
    clockInLng?: number | null
    clockOut?: Date | string | null
    clockOutLat?: number | null
    clockOutLng?: number | null
    status?: string
    ipAddress?: string | null
    punchMode?: string
    punchInNote?: string | null
    punchOutNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateManyManagerInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    isActive?: boolean
    customerId?: string | null
    remarks?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
  }

  export type TaskCreateManyAssignedToInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    priority?: string
    dueDate?: Date | string | null
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceRequestCreateManyUserInput = {
    id?: string
    attendanceId?: string | null
    date: Date | string
    requestType: string
    newTime: Date | string
    reason: string
    status?: string
    adminRemarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollCreateManyUserInput = {
    id?: string
    month: string
    year: number
    monthNumber: number
    basic: number
    hra: number
    allowances: number
    grossEarnings: number
    pf: number
    pt: number
    deductions: number
    totalDeductions: number
    netSalary: number
    totalDays: number
    presentDays: number
    absentDays: number
    lopDays: number
    lopAmount: number
    status?: string
    generatedAt?: Date | string
    paidAt?: Date | string | null
  }

  export type TimesheetUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    totalHours?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: TimesheetEntryUpdateManyWithoutTimesheetNestedInput
  }

  export type TimesheetUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    totalHours?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: TimesheetEntryUncheckedUpdateManyWithoutTimesheetNestedInput
  }

  export type TimesheetUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    totalHours?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockInLat?: NullableFloatFieldUpdateOperationsInput | number | null
    clockInLng?: NullableFloatFieldUpdateOperationsInput | number | null
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clockOutLat?: NullableFloatFieldUpdateOperationsInput | number | null
    clockOutLng?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    punchMode?: StringFieldUpdateOperationsInput | string
    punchInNote?: NullableStringFieldUpdateOperationsInput | string | null
    punchOutNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockInLat?: NullableFloatFieldUpdateOperationsInput | number | null
    clockInLng?: NullableFloatFieldUpdateOperationsInput | number | null
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clockOutLat?: NullableFloatFieldUpdateOperationsInput | number | null
    clockOutLng?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    punchMode?: StringFieldUpdateOperationsInput | string
    punchInNote?: NullableStringFieldUpdateOperationsInput | string | null
    punchOutNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockInLat?: NullableFloatFieldUpdateOperationsInput | number | null
    clockInLng?: NullableFloatFieldUpdateOperationsInput | number | null
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clockOutLat?: NullableFloatFieldUpdateOperationsInput | number | null
    clockOutLng?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    punchMode?: StringFieldUpdateOperationsInput | string
    punchInNote?: NullableStringFieldUpdateOperationsInput | string | null
    punchOutNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUpdateOneWithoutProjectsNestedInput
    teamMembers?: UserUpdateManyWithoutProjectMembershipsNestedInput
    entries?: TimesheetEntryUpdateManyWithoutProjectNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teamMembers?: UserUncheckedUpdateManyWithoutProjectMembershipsNestedInput
    entries?: TimesheetEntryUncheckedUpdateManyWithoutProjectNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectUpdateWithoutTeamMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUpdateOneWithoutProjectsNestedInput
    manager?: UserUpdateOneWithoutManagedProjectsNestedInput
    entries?: TimesheetEntryUpdateManyWithoutProjectNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTeamMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entries?: TimesheetEntryUncheckedUpdateManyWithoutProjectNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutTeamMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    attendanceId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    requestType?: StringFieldUpdateOperationsInput | string
    newTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    adminRemarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    attendanceId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    requestType?: StringFieldUpdateOperationsInput | string
    newTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    adminRemarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    attendanceId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    requestType?: StringFieldUpdateOperationsInput | string
    newTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    adminRemarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    monthNumber?: IntFieldUpdateOperationsInput | number
    basic?: FloatFieldUpdateOperationsInput | number
    hra?: FloatFieldUpdateOperationsInput | number
    allowances?: FloatFieldUpdateOperationsInput | number
    grossEarnings?: FloatFieldUpdateOperationsInput | number
    pf?: FloatFieldUpdateOperationsInput | number
    pt?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    totalDeductions?: FloatFieldUpdateOperationsInput | number
    netSalary?: FloatFieldUpdateOperationsInput | number
    totalDays?: IntFieldUpdateOperationsInput | number
    presentDays?: FloatFieldUpdateOperationsInput | number
    absentDays?: FloatFieldUpdateOperationsInput | number
    lopDays?: FloatFieldUpdateOperationsInput | number
    lopAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: PayrollItemUpdateManyWithoutPayrollNestedInput
  }

  export type PayrollUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    monthNumber?: IntFieldUpdateOperationsInput | number
    basic?: FloatFieldUpdateOperationsInput | number
    hra?: FloatFieldUpdateOperationsInput | number
    allowances?: FloatFieldUpdateOperationsInput | number
    grossEarnings?: FloatFieldUpdateOperationsInput | number
    pf?: FloatFieldUpdateOperationsInput | number
    pt?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    totalDeductions?: FloatFieldUpdateOperationsInput | number
    netSalary?: FloatFieldUpdateOperationsInput | number
    totalDays?: IntFieldUpdateOperationsInput | number
    presentDays?: FloatFieldUpdateOperationsInput | number
    absentDays?: FloatFieldUpdateOperationsInput | number
    lopDays?: FloatFieldUpdateOperationsInput | number
    lopAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: PayrollItemUncheckedUpdateManyWithoutPayrollNestedInput
  }

  export type PayrollUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    monthNumber?: IntFieldUpdateOperationsInput | number
    basic?: FloatFieldUpdateOperationsInput | number
    hra?: FloatFieldUpdateOperationsInput | number
    allowances?: FloatFieldUpdateOperationsInput | number
    grossEarnings?: FloatFieldUpdateOperationsInput | number
    pf?: FloatFieldUpdateOperationsInput | number
    pt?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    totalDeductions?: FloatFieldUpdateOperationsInput | number
    netSalary?: FloatFieldUpdateOperationsInput | number
    totalDays?: IntFieldUpdateOperationsInput | number
    presentDays?: FloatFieldUpdateOperationsInput | number
    absentDays?: FloatFieldUpdateOperationsInput | number
    lopDays?: FloatFieldUpdateOperationsInput | number
    lopAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TimesheetEntryCreateManyProjectInput = {
    id?: string
    timesheetId: string
    taskId?: string | null
    activity?: string | null
    location?: string | null
    description: string
    hours: number
  }

  export type TaskCreateManyProjectInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    priority?: string
    dueDate?: Date | string | null
    assignedToId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutProjectMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    branchLegacy?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    branch?: BranchUpdateOneWithoutUsersNestedInput
    timesheets?: TimesheetUpdateManyWithoutUserNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    attendance?: AttendanceUpdateManyWithoutUserNestedInput
    managedProjects?: ProjectUpdateManyWithoutManagerNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    attendanceRequest?: AttendanceRequestUpdateManyWithoutUserNestedInput
    salaryStructure?: SalaryStructureUpdateOneWithoutUserNestedInput
    payrolls?: PayrollUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    branchLegacy?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timesheets?: TimesheetUncheckedUpdateManyWithoutUserNestedInput
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    managedProjects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    attendanceRequest?: AttendanceRequestUncheckedUpdateManyWithoutUserNestedInput
    salaryStructure?: SalaryStructureUncheckedUpdateOneWithoutUserNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutProjectMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    branchLegacy?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimesheetEntryUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    hours?: FloatFieldUpdateOperationsInput | number
    timesheet?: TimesheetUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type TimesheetEntryUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    timesheetId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    hours?: FloatFieldUpdateOperationsInput | number
  }

  export type TimesheetEntryUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    timesheetId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    hours?: FloatFieldUpdateOperationsInput | number
  }

  export type TaskUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimesheetEntryCreateManyTimesheetInput = {
    id?: string
    projectId: string
    taskId?: string | null
    activity?: string | null
    location?: string | null
    description: string
    hours: number
  }

  export type TimesheetEntryUpdateWithoutTimesheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    hours?: FloatFieldUpdateOperationsInput | number
    project?: ProjectUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type TimesheetEntryUncheckedUpdateWithoutTimesheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    hours?: FloatFieldUpdateOperationsInput | number
  }

  export type TimesheetEntryUncheckedUpdateManyWithoutTimesheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    hours?: FloatFieldUpdateOperationsInput | number
  }

  export type UserCreateManyBranchInput = {
    id?: string
    code?: string | null
    email: string
    password: string
    name?: string | null
    image?: string | null
    roleId?: string | null
    branchLegacy?: string | null
    phone?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    branchLegacy?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    timesheets?: TimesheetUpdateManyWithoutUserNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    attendance?: AttendanceUpdateManyWithoutUserNestedInput
    managedProjects?: ProjectUpdateManyWithoutManagerNestedInput
    projectMemberships?: ProjectUpdateManyWithoutTeamMembersNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    attendanceRequest?: AttendanceRequestUpdateManyWithoutUserNestedInput
    salaryStructure?: SalaryStructureUpdateOneWithoutUserNestedInput
    payrolls?: PayrollUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    branchLegacy?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timesheets?: TimesheetUncheckedUpdateManyWithoutUserNestedInput
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    managedProjects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
    projectMemberships?: ProjectUncheckedUpdateManyWithoutTeamMembersNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    attendanceRequest?: AttendanceRequestUncheckedUpdateManyWithoutUserNestedInput
    salaryStructure?: SalaryStructureUncheckedUpdateOneWithoutUserNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    branchLegacy?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollItemCreateManyPayrollInput = {
    id?: string
    label: string
    amount: number
    type: string
  }

  export type PayrollItemUpdateWithoutPayrollInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PayrollItemUncheckedUpdateWithoutPayrollInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PayrollItemUncheckedUpdateManyWithoutPayrollInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use RoleCountOutputTypeDefaultArgs instead
     */
    export type RoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerCountOutputTypeDefaultArgs instead
     */
    export type CustomerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectCountOutputTypeDefaultArgs instead
     */
    export type ProjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TimesheetCountOutputTypeDefaultArgs instead
     */
    export type TimesheetCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TimesheetCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BranchCountOutputTypeDefaultArgs instead
     */
    export type BranchCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BranchCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PayrollCountOutputTypeDefaultArgs instead
     */
    export type PayrollCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PayrollCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleDefaultArgs instead
     */
    export type RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerDefaultArgs instead
     */
    export type CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDefaultArgs instead
     */
    export type ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TimesheetDefaultArgs instead
     */
    export type TimesheetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TimesheetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TimesheetEntryDefaultArgs instead
     */
    export type TimesheetEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TimesheetEntryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskDefaultArgs instead
     */
    export type TaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LeaveDefaultArgs instead
     */
    export type LeaveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LeaveDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BranchDefaultArgs instead
     */
    export type BranchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BranchDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AttendanceDefaultArgs instead
     */
    export type AttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AttendanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AttendanceRequestDefaultArgs instead
     */
    export type AttendanceRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AttendanceRequestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SalaryStructureDefaultArgs instead
     */
    export type SalaryStructureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SalaryStructureDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PayrollDefaultArgs instead
     */
    export type PayrollArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PayrollDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PayrollItemDefaultArgs instead
     */
    export type PayrollItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PayrollItemDefaultArgs<ExtArgs>

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