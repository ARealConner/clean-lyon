<script lang="ts">
    import { onMount } from 'svelte';

    let pdfUrl = '/documents/lyon-case-study.pdf';
    let iframeHeight: number;
    let pdfContainer: HTMLElement;

    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            pdfContainer.requestFullscreen().catch((err) => {
                console.error(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    }

    onMount(() => {
        // Set the iframe height to the window height
        iframeHeight = window.innerHeight;

        // Update iframe height on window resize
        window.addEventListener('resize', () => {
            iframeHeight = window.innerHeight;
        });
    });
</script>

<div class="pdf-container" bind:this={pdfContainer}>
    <iframe 
        src={pdfUrl} 
        width="100%" 
        height={iframeHeight} 
        title="Lyon Case Study PDF"
    ></iframe>
    <div class="fullscreen-btn-container">
        <button on:click={toggleFullScreen} class="fullscreen-btn" aria-label="Toggle fullscreen">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
            </svg>
        </button>
    </div>
</div>

<style>
    .pdf-container {
        width: 100%;
        height: 100vh;
        overflow: hidden;
        position: relative;
    }
    :global(body) {
        margin: 0;
        padding: 0;
    }
    .fullscreen-btn-container {
        position: absolute;
        bottom: calc(20px + 5vh);
        right: calc(5px + 0.1vw); /* Increased distance from right */
        z-index: 10;
    }
    .fullscreen-btn {
        background-color: rgba(255, 255, 255, 0.7);
        color: #64748b;
        padding: 0.5rem;
        border-radius: 50%;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        cursor: pointer;
    }
    .fullscreen-btn:hover {
        color: #3b82f6;
        background-color: rgba(255, 255, 255, 0.9);
        transform: scale(1.1);
    }
    .fullscreen-btn:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
    }
    .fullscreen-btn svg {
        width: 1.5rem;
        height: 1.5rem;
    }
    :global(.pdf-container:fullscreen) {
        background-color: white;
        max-width: none;
        padding: 0;
    }
    :global(.pdf-container:fullscreen .fullscreen-btn-container) {
        bottom: calc(40px + 5vh); /* Adjusted for fullscreen mode */
        right: calc(40px + 2vw); /* Adjusted for fullscreen mode */
    }
</style>