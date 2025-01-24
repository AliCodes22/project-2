import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const imageMap = {
  "Wireless Mouse": "/images/barry-a-O5CZSXxT8NE-unsplash.jpg",
  "Mechanical Keyboard": "/images/mechanical-keyboard.png",
  "Gaming Headset": "/images/barry-a-6lV7-baJTtw-unsplash.jpg",
  "1080P Webcam": "/images/emiliano-cicero-lq87UxGSiEQ-unsplash.jpg",
  "Laptop Stand": "/images/riekus-wLXk9eHYE0A-unsplash.jpg",
  "USB Hub": "/images/pexels-karolina-grabowska-4195399.jpg",
};
