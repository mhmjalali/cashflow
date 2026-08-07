'use client';

import useEmblaCarousel from 'embla-carousel-react';
import SaveBox from './save-box';
import WalletBalance from './wallet-balance';
import { useEffect, useState } from 'react';

const FinantialSnapShot = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    dragFree: false,
    direction: 'rtl',
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-4">
        <div className="min-w-0 shrink-0 grow-0 basis-full">
          {activeIndex === 0 && <WalletBalance />}
        </div>
        <div className="min-w-0 shrink-0 grow-0 basis-full">
          {activeIndex === 1 && <SaveBox />}
        </div>
      </div>
    </div>
  );
};

export default FinantialSnapShot;
