import { useCallback, useEffect, useState } from 'react';

export type Route = 'inbox' | 'assistant';

const ROUTE_HASH: Record<Route, string> = {
  inbox: '#/hop-viec',
  assistant: '#/tro-ly-van-ban',
};

function readRoute(): Route {
  return window.location.hash === ROUTE_HASH.assistant ? 'assistant' : 'inbox';
}

/** Điều hướng tối giản bằng hash — demo chỉ có hai trang, chưa cần router. */
export function useHashRoute(): [Route, (route: Route) => void] {
  const [route, setRoute] = useState<Route>(readRoute);

  useEffect(() => {
    const onChange = () => setRoute(readRoute());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  const navigate = useCallback((next: Route) => {
    window.location.hash = ROUTE_HASH[next];
  }, []);

  return [route, navigate];
}
