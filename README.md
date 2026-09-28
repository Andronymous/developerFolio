# andronymous.ir

Personal portfolio of Saeed Mohammad Ali Rajab, DevOps engineer. Live at
[andronymous.ir](https://andronymous.ir/).

Built with React 18 and Vite, based on the open-source
[developerFolio](https://github.com/saadpasta/developerFolio) template (GPL-3.0).

## Development

Requires Node 24.

```bash
npm ci
npm start              # dev server on http://localhost:3000
npm test -- --run      # run the tests once
npm run check-format   # Prettier check (npm run format to fix)
npm run build          # production build in build/
```

Content (greeting, skills, experience, projects, ...) lives in `src/portfolio.js`;
global colors in `src/_globalColor.scss`.

## Docker

The production image builds the site and serves it with plain nginx on port 80.
TLS and the public domain are handled by a separate SWAG reverse proxy on the
shared `proxy` Docker network.

```bash
docker build -t hub.andronymous.ir/devfolio:<version> .
docker compose up -d
```

## License

GPL-3.0, see [LICENSE](LICENSE).
