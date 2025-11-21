import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { locationLogsTable } from "./location-logs";

export const locationLogImagesTable = sqliteTable("location_log_images", {
  id: int().primaryKey({ autoIncrement: true }),
  key: text().notNull(),
  locationLogId: int().notNull().references(() => locationLogsTable.id, { onDelete: "cascade" }),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
