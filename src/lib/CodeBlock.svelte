<script lang="ts">
	import Copy from '@lucide/svelte/icons/copy';
	import { Button } from '@renui/svelte';
	import { highlight } from '$lib/highlight';
	import { currentLang } from '$lib/i18n';
	import { toaster } from '$lib/toaster';

	interface Props {
		code: string;
		/** Nombre visible del bloque; también nombra la región desplazable. */
		label?: string;
	}

	const { code, label = 'Code' }: Props = $props();

	const COPY = {
		en: {
			copy: 'Copy',
			copied: 'Code copied',
			failed: 'Could not copy',
			manual: 'Select the code and copy it by hand.'
		},
		es: {
			copy: 'Copiar',
			copied: 'Código copiado',
			failed: 'No se pudo copiar',
			manual: 'Selecciona el código y cópialo manualmente.'
		}
	} as const;

	const t = $derived(COPY[currentLang()]);

	async function copy(): Promise<void> {
		try {
			await navigator.clipboard.writeText(code);
			toaster.show({ title: t.copied, message: label, color: 'success' });
		} catch {
			toaster.show({
				title: t.failed,
				message: t.manual,
				color: 'warning'
			});
		}
	}
</script>

<figure class="code-block ren-stack ren-stack--xs ren-min-width--0 ren-margin--none">
	<figcaption
		class="ren-flex ren-justify--between ren-align-items--center ren-flex--gap-sm ren-min-width--0"
	>
		<span class="ren-text--sm ren-font--medium ren-text-ellipsis">{label}</span>
		<Button variant="ghost" size="sm" icon={Copy} aria-label={`${t.copy} ${label}`} onclick={copy}>
			{t.copy}
		</Button>
	</figcaption>
	<!-- svelte-ignore a11y_no_noninteractive_tabindex (La región desplazable necesita foco para desplazarse con teclado.) -->
	<pre
		class="ren-scroll-well ren-margin--none ren-text--sm"
		role="region"
		tabindex="0"
		aria-label={label}><code>{@html highlight(code)}</code></pre>
</figure>

<style>
	/* La biblioteca no ofrece un bloque de código: el pozo es suyo, esto es lo propio del código. */
	pre {
		/* Sin tope: el código se lee entero, sin un segundo scroll dentro de la página. */
		max-height: none;
		overflow-x: auto;
		tab-size: 2;
		font-family: var(--ren-font-family-mono);
		line-height: var(--ren-line-height-relaxed);
	}

	/* `.ren-text--{color}` usa el color de marca crudo, que no alcanza AA sobre el pozo en claro;
	   la tinta del tono conserva el matiz con contraste de lectura en ambos temas. */
	code :global(.ren-tone) {
		color: var(--ren-tone-ink);
	}

	pre:focus-visible {
		outline: var(--ren-focus-outline);
		outline-offset: var(--ren-focus-outline-offset);
	}
</style>
