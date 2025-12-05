// Helper para formatear fechas
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

// Helper para formatear fechas cortas (Mes Año)
export function formatDateShort(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'short',
  }).format(date);
}

export function decodeHtmlEntities(text: string): string {
  const entities: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#039;': "'",
    '&nbsp;': ' ',
  };

  return text.replace(/&[^;]+;/g, (entity) => entities[entity] || entity);
}

export function getExcerpt(content: string, length: number = 150): string {
  const text = content.replace(/<[^>]*>/g, '');
  return text.length > length ? text.substring(0, length) + '...' : text;
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
