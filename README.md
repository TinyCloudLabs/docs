# TinyCloud Docs

TinyCloud docs are organized around reader journeys and Diataxis roles. The
homepage is the intent selector, `start/` contains the reader-path pages, and
the remaining sections split into build, understand, and operate.

## Local preview

Install the Mintlify CLI to preview the docs locally:

```bash
npm i -g mint
mint dev
```

Open the docs root where `docs.json` lives and preview at
`http://localhost:3000`.

## Capability registry

`reference/protocol/capabilities.mdx` is generated from the canonical
`TinyCloudLabs/tinycloud-node` capability registry. Refresh and verify it with:

```bash
npm run sync-capabilities
npm run check-capabilities
```

Set `TINYCLOUD_CAPABILITIES_PATH` to a local `capabilities.json` when checking
local or unmerged registry changes without fetching from GitHub. The generated
page should remain hand-off only: do not edit it directly.

## Doc map

- `/` - Reader-journey homepage
- `/start/browser-app` - Web SDK path from sign-in to first KV write
- `/start/backend-service` - Node SDK path and sign-in mode decision
- `/start/protocol` - Capability, manifest, and delegation vocabulary
- `/start/operator` - CLI, hosting, OpenKey, and troubleshooting path
- `/guides/browser-e2e-testing` - Browser E2E account bootstrap without passkey automation
- `/concepts/system-model` - High-level model of identity, spaces, capabilities, and services
- `/concepts/security-and-trust` - Trust boundaries and what TinyCloud does or does not guarantee
- `/reference/glossary` - TinyCloud vocabulary
- `/reference/protocol/capabilities` - Generated capability registry for exact action names and status
- `/openkey/index` - OpenKey overview and integration path

## Publishing

Changes are deployed to production automatically after pushing to the default
branch via the [Mintlify GitHub app](https://dashboard.mintlify.com/settings/organization/github-app).
