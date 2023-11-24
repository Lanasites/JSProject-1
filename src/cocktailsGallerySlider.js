import Splide from '@splidejs/splide';
export const gallerySlider = new Splide('#gallerySlider', {
    wheel: true,
    type: 'loop',
    pagination: false,
    height: '48vh',
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
            height: '45vh',
            grid: {
                rows: 2,
                cols: 2
            }
        },
        576: {
            height: '34vh',
            grid: {
                rows: 1,
                cols: 1
            }
        }
    }
});
