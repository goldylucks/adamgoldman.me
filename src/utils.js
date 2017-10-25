import cloudinary from 'cloudinary-core';

const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'goldylucks' });

export const cloudImg = imgName => cloudinaryCore.url(imgName);

export const isProd = process.env.NODE_ENV === 'production';

export const scrollToElem = (element, to, duration) => {
  if (duration <= 0) return;
  const difference = to - element.scrollTop;
  const perTick = difference / duration * 10;

  setTimeout(() => {
    element.scrollTop = element.scrollTop + perTick; // eslint-disable-line no-param-reassign, operator-assignment
    if (element.scrollTop === to) return;
    scrollToElem(element, to, duration - 10);
  }, 10);
};

export const filterDrafts = item => !item.IS_DRAFT;
