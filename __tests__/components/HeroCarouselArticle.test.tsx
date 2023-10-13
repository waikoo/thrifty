import { render, screen } from '@testing-library/react';
import HeroCarouselArticle from '@/app/components/home/HeroCarouselArticle';
import '@testing-library/jest-dom/extend-expect';
import useHeroCarousel from '@/app/components/hooks/useHeroCarousel';

it('should have NEW IN text', () => {
  render(<HeroCarouselArticle />);

  const myElem = screen.getByText('NEW IN')
  // expect(myElem).toBeInTheDocument()
})
