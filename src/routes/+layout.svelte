<script>
	import '../app.postcss';
	import AppBar from './AppBar.svelte';
	import BottomNav from './BottomNav.svelte';
</script>

<main class="bg-base-200 min-h-full flex flex-col items-center">
	<AppBar />
	<slot />
	<BottomNav />
</main>
