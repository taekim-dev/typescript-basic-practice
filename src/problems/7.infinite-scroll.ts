class InfiniteScroll {
    private scrollThreshold : number;
    private fetchData : () => Promise<void>;
    private isLoading : boolean;
    private boundOnScroll: () => void;

    constructor (threshold : number, fetchData: () => Promise<void>) {
        this.scrollThreshold = threshold;
        this.fetchData = fetchData;
        this.isLoading = false;
        this.boundOnScroll = this.onScroll.bind(this);

        this.initScrollListener();
    }

    private initScrollListener() {
        window.addEventListener('scroll', this.onScroll.bind(this));
    }

    private async onScroll() {
        if (this.isLoading) return;

        const scrollPosition = window.innerHeight + window.scrollY;
        const bottomPosition = document.documentElement.offsetHeight - this.scrollThreshold;

        if (scrollPosition > bottomPosition) {
            this.isLoading = true;
            try {
                await fetchData();
            } finally {
                this.isLoading = false;
            }
        }

    }

    public destroy() {
        window.removeEventListener('scroll', this.boundOnScroll);
    }
}

async function fetchData() {
    const content = document.getElementById('content');
    if (content) {
        for (let i = 0; i < 5; i++) {
            const newItem = document.createElement('div');
            newItem.textContent = `Loaded new Content, item ${i+1}`
            content.appendChild(newItem);
        }
    }
}

// Initialize Infinite Scroll
const infiniteScroll = new InfiniteScroll(300, fetchData);
