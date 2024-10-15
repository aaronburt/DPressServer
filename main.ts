export default class DPress {
  public routes: { [method: string]: { [path: string]: (_req: Request) => Response } } = {};
  
  private assign(method: string, path: string, func: (_req: Request) => Response) {
    if (!this.routes[method]) { this.routes[method] = {}; }
    this.routes[method][path] = func;
  }

  get(path: string, func: (_req: Request) => Response) {
    this.assign('GET', path, func);
  }

  post(path: string, func: (_req: Request) => Response) {
    this.assign('POST', path, func);
  }

  delete(path: string, func: (_req: Request) => Response) {
    this.assign('DELETE', path, func);
  }

  options(path: string, func: (_req: Request) => Response) {
    this.assign('OPTIONS', path, func);
  }

  listen(port: number) {
    Deno.serve({ port: port }, (req: Request) => {
      const pathname = new URL(req.url).pathname;
      const method = req.method;

      if (this.routes[method][pathname]) { return this.routes[method][pathname](req); }
      return new Response("Not Found", { status: 404 });
    });
  }
}

