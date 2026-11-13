import type { RenLocaleOptions } from '@renui/svelte';
import type { Lang } from '$lib/i18n';

/** Metadatos públicos. La versión se toma del paquete realmente instalado al compilar. */
export const renVersion = __REN_VERSION__;
export const sveltePeer = __REN_SVELTE_PEER__;
export const libraryUrl = 'https://github.com/eliaschampi/renui';
export const repositoryUrl = 'https://github.com/eliaschampi/renweb';
export const packageUrl = 'https://www.npmjs.com/package/@renui/svelte';
export const docsUrl = `${libraryUrl}/blob/main/docs`;
export const siteUrl = __SITE_URL__;

/** Copia integrada y formatos por idioma del sitio. */
export const siteLocales = {
	en: { locale: 'en-US', currency: 'USD', timeZone: 'America/Lima' },
	es: { locale: 'es-PE', currency: 'PEN', timeZone: 'America/Lima' }
} as const satisfies Record<Lang, Omit<RenLocaleOptions, 'messages'>>;

/** Enlace al código fuente de una ruta del sitio, para los avisos «Ver código». */
export function sourceUrl(path: string): string {
	return `${repositoryUrl}/blob/main/${encodeURI(path)}`;
}
