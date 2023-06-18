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
        ]
    },
    {
        title: 'FAQ',
        items: [
            {
                text: 'How to place order',
                link: '#',
            },
            {
                text: 'Payment methods',
                link: '#',
            },
            {
                text: 'Terms of delivery',
                link: '#',
            },
        ]
    },
    {
        title: 'Social Media',
        items: [
            {
                imageSrc: './style/assets/img/instagram.svg',
                imageAlt: 'Instagram',
                link: 'https://www.instagram.com/'
            },
            {
                imageSrc: './style/assets/img/facebook.svg',
                imageAlt: 'Facebook',
                link: 'https://www.facebook.com/'
            },
            {
                imageSrc: './style/assets/img/twitter.svg',
                imageAlt: 'Twitter',
                link: 'https://twitter.com/'
            }
        ]
    }
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

        const link = document.createElement('a');
        link.setAttribute('href', item.link);

        if (item.imageSrc) {
            const image = document.createElement('img');
            image.setAttribute('src', item.imageSrc);
            image.setAttribute('alt', item.imageAlt);
            link.append(image);
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

