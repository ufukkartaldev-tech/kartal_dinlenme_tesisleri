// Common types for the application
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
}