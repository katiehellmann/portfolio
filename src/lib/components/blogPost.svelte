<script>
	export let title = 'title';
    export let href;
    export let note;
    export let src;
    export let headline = 'headline';
    export let tags = 'tags';
    export let content = 'content here';
</script>
<div class="max-w-7xl mx-auto px-4 pb-12 sm:px-6 text-accent-700">
    <div class="max-w-3xl mx-auto">

        <div class="py-8">
            <h1 class="text-3xl sm:text-4xl font-bold mb-2">{title}</h1>
        </div>
        <h2 class="text-xl sm:text-2xl pb-8">{headline}</h2>
        <img {src} alt="" class="w-full h-auto mb-8">
        <div class="blog mx-auto text-lg sm:text-xl">
            <div class="text-lg sm:text-2xl m-2 p-2 rounded-lg bg-accent-300/50">
                <h2 class="font-bold">Project Info:</h2>
                {tags}
            </div>
            <p>{content}</p>
            {#if href}
            <br>
            <h3 class="font-bold">External Links:</h3>
            <a target="_blank" class="text-decoration-line: underline hover:text-pink-300" {href}>{note}</a>
            {/if}
        </div>

    </div>
</div>