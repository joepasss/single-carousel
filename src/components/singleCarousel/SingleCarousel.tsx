import { RefObject, useEffect, useRef, useState } from 'react';
import './singleCarousel.scss';

export const SingleCarousel = () => {
  const [current, setCurrent] = useState<number>(0);
  const list = useRef() as RefObject<HTMLUListElement>;

  useEffect(() => {
    const imgWidth =
      list.current!.children[0].getBoundingClientRect().width + 20;

    const setImgPosition = (img: HTMLElement, index: number) => {
      img.style.left = imgWidth * index + 'px';
    };

    const imgs = Array.from(list.current!.children) as HTMLElement[];

    imgs.forEach(setImgPosition);

    list.current!.style.transform =
      'translateX(-' + imgs[current].style.left + ')';
  });

  const buttons = [];
  for (let i = 0; i < 5; i++) {
    buttons.push(
      <button
        className='nav-btn'
        key={i}
        onClick={() => setCurrent(i)}
        id={current === i ? 'current--img' : ''}
      />
    );
  }

  return (
    <section id='carousel'>
      {current !== 0 && (
        <button className='arrow-left' onClick={() => setCurrent(current - 1)}>
          &lt;
        </button>
      )}
      {current !== 4 && (
        <button className='arrow-right' onClick={() => setCurrent(current + 1)}>
          &gt;
        </button>
      )}

      <div className='image-container'>
        <ul className='items' ref={list}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>

      <div className='carousel-nav'>{buttons}</div>
    </section>
  );
};
