import { createRoot } from 'react-dom/client';
import './types/global.declaration';
import './assets/global.scss';

import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MainLayoutComponent } from './layout/main-layout.component';

const container = document.getElementById('root');

const root = createRoot(container as HTMLElement);

root.render(
  <MainLayoutComponent>
    <MovieListComponent />
  </MainLayoutComponent>,
);
