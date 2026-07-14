# TinyCloud Docs

Documentation for TinyCloud, powered by [Mintlify](https://mintlify.com).

## Development

Install the [Mintlify CLI](https://www.npmjs.com/package/mint) to preview changes locally:

```
npm i -g mint
```

Run at the root of the documentation (where `docs.json` is located):

```
mint dev
```

Preview at `http://localhost:3000`.

## Capability Reference

`reference/protocol/capabilities.mdx` is generated from the canonical
`TinyCloudLabs/tinycloud-node` capability registry. Refresh and verify it with:

```bash
npm run sync-capabilities
npm run check-capabilities
```

Set `TINYCLOUD_CAPABILITIES_PATH` to a local `capabilities.json` when checking
local or unmerged registry changes without fetching from GitHub. CI checks the
generated page on relevant changes and once a day for upstream registry drift.

## Publishing

Changes are deployed to production automatically after pushing to the default branch via the [Mintlify GitHub app](https://dashboard.mintlify.com/settings/organization/github-app).
