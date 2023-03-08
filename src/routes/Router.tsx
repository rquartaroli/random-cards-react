import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { CardsInHand } from '../pages/CardsInHand';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/viewcards/:name" element={<CardsInHand />} />
    </Routes>
  )
}