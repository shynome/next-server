import http from 'http'
import Server, { ServerConstructor } from '../next-server/server/next-server'
type NextServerConstructor = Omit<ServerConstructor, 'staticMarkup'>
export default async function start(
  options: NextServerConstructor,
  port?: number,
  hostname?: string,
) {
  const app = new Server(options)
  const srv = http.createServer(app.getRequestHandler())
  await new Promise((resolve, reject) => {
    // This code catches EADDRINUSE error if the port is already in use
    srv.on('error', reject)
    srv.on('listening', () => resolve())
    srv.listen(port, hostname)
  })
  // It's up to caller to run `app.prepare()`, so it can notify that the server
  // is listening before starting any intensive operations.
  return app
}
