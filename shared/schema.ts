import { pgTable, text, serial, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User table from original schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Birthday wishes table
export const birthdayWishes = pgTable("birthday_wishes", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  relationship: text("relationship").notNull(),
  message: text("message").notNull(),
  gift: text("gift").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertBirthdayWishSchema = createInsertSchema(birthdayWishes).pick({
  name: true,
  relationship: true,
  message: true,
  gift: true,
});

// Love notes table
export const loveNotes = pgTable("love_notes", {
  id: serial("id").primaryKey(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertLoveNoteSchema = createInsertSchema(loveNotes).pick({
  message: true,
});

// Type definitions
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type BirthdayWish = typeof birthdayWishes.$inferSelect;
export type InsertBirthdayWish = z.infer<typeof insertBirthdayWishSchema>;

export type LoveNote = typeof loveNotes.$inferSelect;
export type InsertLoveNote = z.infer<typeof insertLoveNoteSchema>;
