import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  id: text().primaryKey(),
  name: text().notNull(),
  email: text().notNull().unique(),
  emailVerified: int({ mode: "boolean" })
    .default(false)
    .notNull(),
  image: text(),
  createdAt: int().$default(() => Date.now()).notNull(),
  updatedAt: int()
    .$default(() => Date.now())
    .$onUpdate(() => Date.now())
    .notNull(),
});

export const session = sqliteTable("session", {
  id: text().primaryKey(),
  expiresAt: int().notNull(),
  token: text().notNull().unique(),
  createdAt: int().$default(() => Date.now()).notNull(),
  updatedAt: int()
    .$default(() => Date.now())
    .$onUpdate(() => Date.now())
    .notNull(),
  ipAddress: text(),
  userAgent: text(),
  userId: text()
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const account = sqliteTable("account", {
  id: text().primaryKey(),
  accountId: text().notNull(),
  providerId: text().notNull(),
  userId: text()
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text(),
  refreshToken: text(),
  idToken: text(),
  accessTokenExpiresAt: int({ mode: "timestamp" }),
  refreshTokenExpiresAt: int({ mode: "timestamp" }),
  scope: text(),
  password: text(),
  createdAt: int()
    .$default(() => Date.now())
    .notNull(),
  updatedAt: int()
    .$default(() => Date.now())
    .$onUpdate(() => Date.now())
    .notNull(),
});

export const verification = sqliteTable("verification", {
  id: text().primaryKey(),
  identifier: text().notNull(),
  value: text().notNull(),
  expiresAt: int().notNull(),
  createdAt: int()
    .$default(() => Date.now())
    .notNull(),
  updatedAt: int()
    .$default(() => Date.now())
    .$onUpdate(() => Date.now())
    .notNull(),
});
