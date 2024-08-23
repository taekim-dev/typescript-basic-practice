class InfiniteScroll {
    private scrollThreshold : number;
    private fetchData : () => Promise<void>;
    private isLoading : boolean;

    constructor (threshold : number, fetchData: () => Promise<void>) {
        this.scrollThreshold = threshold;
        this.fetchData = fetchData;
        this.isLoading = false;

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
        window.removeEventListener('scroll', this.onScroll.bind(this));
    }
}


let page = 1;

async function fetchData() {

}

// Initialize Infinite Scroll
const infiniteScroll = new InfiniteScroll(300, fetchData);