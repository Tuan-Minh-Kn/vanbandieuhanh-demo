import { useHashRoute } from './lib/useHashRoute';
import { AssistantPage } from './pages/AssistantPage';
import { InboxPage } from './pages/InboxPage';

/** Hai trang của bản demo: hộp việc văn bản và trang trợ lý độc lập. */
export default function App() {
  const [route, navigate] = useHashRoute();

  if (route === 'assistant') {
    return <AssistantPage onBack={() => navigate('inbox')} />;
  }

  return <InboxPage />;
}
