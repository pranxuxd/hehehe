import { users, type User, type InsertUser, 
         birthdayWishes, type BirthdayWish, type InsertBirthdayWish,
         loveNotes, type LoveNote, type InsertLoveNote } from "@shared/schema";

// Interface with all the storage methods we need
export interface IStorage {
  // User methods from original schema
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Birthday wishes methods
  getAllWishes(): Promise<BirthdayWish[]>;
  getWish(id: number): Promise<BirthdayWish | undefined>;
  createWish(wish: InsertBirthdayWish): Promise<BirthdayWish>;
  
  // Love notes methods
  getAllLoveNotes(): Promise<LoveNote[]>;
  getLoveNote(id: number): Promise<LoveNote | undefined>;
  createLoveNote(note: InsertLoveNote): Promise<LoveNote>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private wishes: Map<number, BirthdayWish>;
  private notes: Map<number, LoveNote>;
  private userCurrentId: number;
  private wishCurrentId: number;
  private noteCurrentId: number;

  constructor() {
    this.users = new Map();
    this.wishes = new Map();
    this.notes = new Map();
    this.userCurrentId = 1;
    this.wishCurrentId = 1;
    this.noteCurrentId = 1;
  }

  // User methods implementation from original schema
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Birthday wishes methods implementation
  async getAllWishes(): Promise<BirthdayWish[]> {
    return Array.from(this.wishes.values()).sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }
  
  async getWish(id: number): Promise<BirthdayWish | undefined> {
    return this.wishes.get(id);
  }
  
  async createWish(insertWish: InsertBirthdayWish): Promise<BirthdayWish> {
    const id = this.wishCurrentId++;
    const now = new Date();
    const wish: BirthdayWish = { 
      ...insertWish, 
      id,
      createdAt: now
    };
    this.wishes.set(id, wish);
    return wish;
  }
  
  // Love notes methods implementation
  async getAllLoveNotes(): Promise<LoveNote[]> {
    return Array.from(this.notes.values()).sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }
  
  async getLoveNote(id: number): Promise<LoveNote | undefined> {
    return this.notes.get(id);
  }
  
  async createLoveNote(insertNote: InsertLoveNote): Promise<LoveNote> {
    const id = this.noteCurrentId++;
    const now = new Date();
    const note: LoveNote = { 
      ...insertNote, 
      id,
      createdAt: now
    };
    this.notes.set(id, note);
    return note;
  }
}

export const storage = new MemStorage();
