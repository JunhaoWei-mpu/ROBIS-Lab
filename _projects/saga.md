---
title: SAGA
category: Autonomous aerial navigation
publication: saga
description: A self-attention and goal-aware anchor-based planner for UAV navigation in cluttered environments.
home_summary: Depth-based UAV motion planning with self-attention across motion anchors and goal-aware trajectory
  selection.
home_image: /assets/images/projects/saga-fpv.webp
home_still: /assets/images/projects/saga-fpv-poster.webp
home_image_width: 618
home_image_height: 344
home_image_alt: Animated first-person view of SAGA navigation in a simulated pillar environment
---
<div class="saga-demonstrations">
<figure><picture><source media="(prefers-reduced-motion: reduce)" srcset="{{ '/assets/images/projects/saga-fpv-poster.webp' | relative_url }}"><img src="{{ '/assets/images/projects/saga-fpv.webp' | relative_url }}" width="618" height="344" alt="SAGA first-person navigation animation in a simulated pillar environment" loading="lazy"></picture><figcaption>First-person view</figcaption></figure>
<figure><picture><source media="(prefers-reduced-motion: reduce)" srcset="{{ '/assets/images/projects/saga-top-poster.webp' | relative_url }}"><img src="{{ '/assets/images/projects/saga-top.gif' | relative_url }}" width="800" height="704" alt="SAGA top-view simulation showing the UAV trajectory among obstacles" loading="lazy"></picture><figcaption>Top view</figcaption></figure>
</div>

## Research question

How can a local planner reason jointly over several possible motions while keeping trajectory generation computationally compact?

## Method

SAGA takes a depth image and a body-frame motion state as inputs. A fixed lattice of motion anchors provides candidate directions. Anchor-aligned visual features become tokens, and self-attention reasons across these candidates.

Polar positional encoding retains directional structure. Goal-aware modulation incorporates velocity, acceleration, and target information before the planner predicts terminal-state refinements and scores. The selected candidate is decoded into a dynamically feasible trajectory.

## Evaluation setting

The paper reports evaluations in cluttered pillar-map environments and comparisons with planning baselines and an ablation without polar positional encoding.

<div class="text-links"><a href="{{ '/research/#aerial' | relative_url }}">Aerial robotics →</a><a href="{{ '/publications/#kio-planner' | relative_url }}">Related work: KIO-planner →</a></div>
