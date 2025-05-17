<script>
	export let title = 'Card Title';
    export let src = 'image';
    export let href = '';
    export let tags = '';

</script>

<div class="hover:animate-pulsing group portfolio-item relative hover:shadow-lg  bg-white shadow-md rounded-lg overflow-hidden">
    <a {href}>
        <img class="w-full h-60 object-cover" {src} alt="" />
        <div
            class="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70">
        </div>
        <div class="p-4 flex flex-col items-center justify-between relative z-10">
            <h3 class="text-lg font-medium text-txt group-hover:text-gray-dark">{title}</h3>
            {#if tags}
            <span class="text-sm font-bold text-pink-500 group-hover:text-indigo-500">{tags}</span>
            {/if}
        </div>
    </a>
</div>