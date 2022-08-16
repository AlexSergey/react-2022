import { createRoot } from 'react-dom/client';

import './global.css';

const container = document.getElementById('root');

const root = createRoot(container as HTMLElement);

root.render(<div>Test</div>);
