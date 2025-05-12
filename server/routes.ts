import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBirthdayWishSchema, insertLoveNoteSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for the birthday website
  
  // Get all birthday wishes
  app.get("/api/wishes", async (req, res) => {
    try {
      const wishes = await storage.getAllWishes();
      res.json(wishes);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch birthday wishes" });
    }
  });

  // Submit a new birthday wish
  app.post("/api/wishes", async (req, res) => {
    try {
      const data = insertBirthdayWishSchema.parse(req.body);
      const wish = await storage.createWish(data);
      res.status(201).json(wish);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Invalid wish data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create wish" });
      }
    }
  });

  // Get all love notes
  app.get("/api/love-notes", async (req, res) => {
    try {
      const notes = await storage.getAllLoveNotes();
      res.json(notes);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch love notes" });
    }
  });

  // Submit a new love note
  app.post("/api/love-notes", async (req, res) => {
    try {
      const data = insertLoveNoteSchema.parse(req.body);
      const note = await storage.createLoveNote(data);
      res.status(201).json(note);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Invalid note data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create note" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
