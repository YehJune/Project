<script lang="ts">
	import { SellerItem } from '@src/components-route/seller-item';
</script>

<div class="root">
	<div class="best-seller-banner">BEST SELLER BANNER</div>
	<div class="seller-items">
		{#each Array(3) as _, idx}
			<SellerItem seller={{ sellerName: '', sellerLocation: '' }} />
			<SellerItem seller={{ sellerName: '', sellerLocation: '' }} />
			<SellerItem seller={{ sellerName: '', sellerLocation: '' }} />
			<SellerItem seller={{ sellerName: '', sellerLocation: '' }} />
			<SellerItem seller={{ sellerName: '', sellerLocation: '' }} />
		{/each}
	</div>
</div>

<style lang="scss">
	.root {
		.best-seller-banner {
			height: 25rem;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.seller-items {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 1rem;
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		}
	}
</style>
