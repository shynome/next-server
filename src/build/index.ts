export type SsgRoute = {
  initialRevalidateSeconds: number | false;
  srcRoute: string | null;
  dataRoute: string;
};

export type DynamicSsgRoute = {
  routeRegex: string;

  dataRoute: string;
  dataRouteRegex: string;
};

export type PrerenderManifest = {
  version: number;
  routes: { [route: string]: SsgRoute };
  dynamicRoutes: { [route: string]: DynamicSsgRoute };
};
