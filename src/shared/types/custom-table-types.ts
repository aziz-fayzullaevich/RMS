import type { ReactNode } from "react";

export interface Column<T> {
  key: keyof T | 'actions';
  title: string;
  render?: (item: T) => ReactNode;
}