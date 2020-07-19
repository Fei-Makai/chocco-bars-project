let myMap;

const init = () => {
    myMap = new ymaps.Map('map', {
        center: [55.753220, 37.599489],
        zoom: 14,
        controls: []
    });

    const coords = [
        [55.757333, 37.621273],
        [55.749907, 37.603595],
        [55.743958, 37.581056],
        [55.759223, 37.580867]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: './img/icons/marker.svg',
        iconImageSize: [46, 57],
        iconImageOffset: [-33, -52]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    })

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);