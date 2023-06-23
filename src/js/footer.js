const footer = document.getElementById('footer');
const footerArea = document.createElement('div');
footerArea.classList.add('footer_area');

const footerData = [
    {
        title: 'Company',
        items: [
            {
                text: 'About Us',
                link: '#',
            },
            {
                text: 'Contact',
                link: '#',
            },
            {
                text: 'Collaboration',
                link: '#',
            },
            {
                text: 'Career',
                link: '#',
            },
        ]
    },
    {
        title: 'To Customers',
        items: [
            {
                text: 'How to place order',
                link: '#',
            },
            {
                text: 'Delivery terms',
                link: '#',
            },
            {
                text: 'Product returns',
                link: '#',
            },
        ]
    },
    {
        title: 'For Partners',
        items: [
            {
                text: 'Franchise',
                link: '#',
            },
            {
                text: 'To Couriers',
                link: '#',
            },
            {
                text: 'Partner Pickup Point',
                link: '#',
            },
        ]
    },
    {
        title: 'Download our app',
        items: [
            {
                image: './style/img/qr-code.png',
                link: '#',
            },
        ],
    },
];

footerData.forEach(list => {
    const listContainer = document.createElement('div');
    listContainer.classList.add('footer-list');

    const listTitle = document.createElement('h4');
    listTitle.innerText = list.title;
    listContainer.append(listTitle);

    const ul = document.createElement('ul');

    list.items.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('footer-li');

        const link = document.createElement('a');
        link.setAttribute('href', item.link);

        const qrImg = document.createElement('img');
        qrImg.src = item.image;

        if (item.image) {
            link.append(qrImg);
        }

        if (item.text) {
            link.innerText = item.text;
        }

        li.append(link);
        ul.append(li);
    });

    listContainer.append(ul);
    footerArea.append(listContainer);
});

const copyRight = document.createElement('div');
const copyRightText = document.createTextNode('© MyShop by Antonina Vechorko');


copyRight.append(copyRightText);
footer.append(footerArea, copyRight);

