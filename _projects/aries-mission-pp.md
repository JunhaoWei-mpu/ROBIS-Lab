---
title: ARIES-Mission++
category: Language-guided multi-UAV mission planning
description: Vision-language grounding and energy-constrained mission compilation for multi-UAV systems.
home_summary: From inspection instructions and aerial imagery to energy-constrained UAV fleet routes and per-vehicle
  mission files.
home_image: /assets/images/projects/ariespp-overview.webp
home_image_width: 2400
home_image_height: 666
home_image_alt: ARIES-Mission++ workflow from visual grounding to multi-UAV route planning and mission files
code_url: https://github.com/JunhaoWei-mpu/ARIES-Mission-pp
benchmark_url: https://github.com/JunhaoWei-mpu/ARIES-Mission-pp/releases/tag/benchmark-v1.0.0
source: https://github.com/JunhaoWei-mpu/ARIES-Mission-pp
source_commit: 7162d6a4c5663137e7c5dbc7d2f733d239a0fb47
---

{% include figure.html image='/assets/images/projects/ariespp-overview.webp' width=2400 height=666 alt='ARIES-Mission++ five-stage mission compilation workflow' caption='ARIES-Mission++ system overview. Source: the project repository, © 2026 ARIES-Mission++ Authors, MIT License.' %}

## Overview

ARIES-Mission++ takes an inspection instruction and a georeferenced aerial image and compiles missions for a UAV fleet. Tiled vision-language grounding locates requested targets; geographic conversion and merging produce the target set used for planning.

## Mission planning

The planning stage models route energy and time, assigns targets across UAVs, and minimizes fleet mission completion time under battery constraints. A warm-started iterated local search constructs and improves candidate routes. The exporter produces a separate QGC WPL 110 mission file for each vehicle.

## Code and evaluation resources

The public repository includes perception, optimization, and ArduPilot SITL workflows, together with the AM-Bench dataset release and reproduction instructions. The SITL study concerns route-energy ordering in simulation.

<div class="text-links"><a href="{{ '/research/#aerial' | relative_url }}">Aerial robotics</a><a href="{{ '/research/#embodied' | relative_url }}">Embodied intelligence</a></div>
