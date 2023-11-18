import Splide from '@splidejs/splide';
export const gallerySlider = new Splide('#gallerySlider', {
    wheel: true,
    // type: 'loop',
    pagination: false,
    height: '46vh',
    width: '100vw',
    grid: {
        rows: 2,
        cols: 4,
        gap: {
            row: '3vh',
            col: '2vw'
        }
    },
    breakpoints: {
        1200: {
            grid: {
                rows: 2,
                cols: 3
            }
        },
        992: {
            height: '40vh',
            grid: {
                rows: 2,
                cols: 2
            }
        },
        576: {
            grid: {
                rows: 2,
                cols: 1
            }
        }
    }
});

// there is a trouble with landscape on mobile, bc splide doesn't allow to diversify between landscape and portrait.
