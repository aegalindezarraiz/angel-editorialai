# GVH Video Stack

Integration scaffold for **GVH | Global Venezuela Hub**.

## Components

### OpenMontage

- Role: automated, agentic video production and reproducible rendering.
- Runtime: Ubuntu, Python 3.11, Node.js 22 and FFmpeg.
- Validation: installs the upstream project, runs its provider preflight and renders `gvh-brand-intro.mp4` without external API keys.
- GVH asset: `openmontage/gvh-brand-intro.json`.
- Upstream license: AGPL-3.0. Any network-deployed derivative or modified service must preserve the corresponding source-code obligations.

### Palmier Pro

- Role: human review, timeline editing and MCP-assisted finishing on macOS.
- Runtime: macOS 26 ARM64, Xcode 16+ and Swift 6.2.
- Validation: resolves dependencies, builds, tests and performs a 20-second launch probe.
- Upstream license: GPL-3.0. Distributed derivatives must preserve GPL obligations.

## GVH operating model

```text
Research / script
        ↓
OpenMontage automated assembly
        ↓
GVH brand and claim review
        ↓
Palmier Pro human finishing on macOS
        ↓
Final QA and publication approval
```

## Brand controls

Every published output must retain:

- Official GVH logo without alteration.
- Name: Global Venezuela Hub.
- Official slogan: “Conectamos personas con soluciones y oportunidades reales en una sola red global.”
- Institutional palette: `#FF4A00`, `#0B1D3A`, `#FFFFFF`, `#F2F4F7`, `#C7CBD1`.
- Identified service or vertical.
- Direct CTA.
- Human review of claims, spelling, logo, slogan, phone and web address.

## CI evidence

The workflow `.github/workflows/gvh-video-stack.yml` generates two artifacts:

- `gvh-openmontage-evidence`: install/preflight/render logs and the rendered MP4.
- `gvh-palmier-pro-evidence`: environment, dependency, build, test and launch-probe logs.

No cloud-model API keys are required for the OpenMontage validation render.
