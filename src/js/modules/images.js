import calcScroll from "./calcScroll";

const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImg = document.createElement('img'),
          scroll = calcScroll();

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    bigImg.style.width = '40%';
    bigImg.style.height = '90%';
    bigImg.style.objectFit = 'contain';

    imgPopup.appendChild(bigImg);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight =  `${scroll}px`;
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight =  `0px`;
        }

        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape') {
                imgPopup.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight =  `0px`;
            }
        });
    });
};

export default images;