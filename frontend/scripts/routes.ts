export type RouteKey = "home" | "flyer" | "hardcover";

export interface AppRoute {
  key: RouteKey;
  path: string;
}

const routes: Record<RouteKey, AppRoute> = {
  home: { key: "home", path: "/" },
  flyer: { key: "flyer", path: "/Flyer%20%26%20Folder.html" },
  hardcover: {
    key: "hardcover",
    path: "/Hardcover-B%C3%BCcher%20ab%2048%20Seiten.html",
  },
};

export function getRoute(key: RouteKey): AppRoute {
  return routes[key];
}

export function initRoutes(): void {
  const routedLinks =
    document.querySelectorAll<HTMLAnchorElement>("a[data-route]");

  routedLinks.forEach((link) => {
    const key = link.dataset.route as RouteKey | undefined;
    if (!key || !(key in routes)) return;

    link.href = routes[key].path;

    link.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.assign(routes[key].path);
    });
  });
}
