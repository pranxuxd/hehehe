import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { apiRequest } from "./queryClient";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export async function submitWish(data: {
  name: string;
  relationship: string;
  message: string;
  gift: string;
}) {
  return apiRequest("POST", "/api/wishes", data);
}

export async function submitLoveNote(message: string, greeting: string = '') {
  return apiRequest("POST", "/api/love-notes", { message, greeting });
}

// Format time in MM:SS format
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

// Calculate remaining time until birthday
export function calculateTimeRemaining(targetDate: Date): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
} {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();
  
  if (difference < 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }
  
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
  return { days, hours, minutes, seconds, isPast: false };
}

// Smooth scroll to element
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
