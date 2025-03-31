import { readdir } from 'fs/promises';
import { join } from 'path';

export async function getImagesFromFolder(folder: 'main'): Promise<string[]> {
  try {
    const response = await fetch(`/api/images?folder=${folder}`);
    if (!response.ok) {
      throw new Error('Failed to fetch images');
    }
    const data = await response.json();
    return data.images || [];
  } catch (error) {
    console.error(`Error fetching ${folder} images:`, error);
    return [];
  }
} 