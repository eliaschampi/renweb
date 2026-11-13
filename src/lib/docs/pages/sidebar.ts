import type { Doc } from '../types';

export default {
	importLine: `import { Navbar, Sidebar, SidebarItem } from '@renui/svelte';`,
	use: {
		en: ['The main navigation of an application'],
		es: ['La navegación principal de una aplicación']
	},
	avoid: {
		en: ['Navigation inside a page: use Tabs', 'Filters beside content: use PageSidebar'],
		es: ['Navegación dentro de una página: usa Tabs', 'Filtros junto al contenido: usa PageSidebar']
	},
	sections: [
		{
			id: 'shell',
			title: { en: 'The application shell', es: 'La estructura de la aplicación' },
			text: {
				en: 'Sidebar, Navbar and the content live inside ren-dashboard-layout, which places them and handles the collapsed rail. This is the frame of the whole app, so it is shown as code; the menu of this site is a live example.',
				es: 'Sidebar, Navbar y el contenido viven dentro de ren-dashboard-layout, que los coloca y gestiona el riel plegado. Es el marco de toda la aplicación, así que se muestra como código; el menú de este sitio es un ejemplo vivo.'
			},
			demo: 'Shell',
			preview: false
		},
		{
			id: 'groups',
			title: { en: 'Groups with sub-items', es: 'Grupos con subelementos' },
			text: {
				en: 'Wrap the children in ren-sidebar-subitems, give each one an icon and level sub, and show the state with a chevron in ren-sidebar-nav-label. No custom CSS is needed.',
				es: 'Envuelve los hijos en ren-sidebar-subitems, da a cada uno un icono y level sub, y muestra el estado con un chevron en ren-sidebar-nav-label. No hace falta CSS propio.'
			},
			demo: 'Groups',
			preview: false
		}
	]
} satisfies Doc;
