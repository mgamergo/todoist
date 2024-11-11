import { varchar, integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users_table', {
    id: serial('id').primaryKey(),               // Auto-incrementing primary key
    name: varchar('name', { length: 255 }),       // Name of the user with a max length of 255
    email: varchar('email', { length: 255 }).unique(),  // Unique email field
    hashedPassword: text('hashedPassword'),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;
