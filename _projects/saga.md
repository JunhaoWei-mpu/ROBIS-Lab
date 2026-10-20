---
title: SAGA
category: Autonomous aerial navigation
publication: saga
description: A self-attention and goal-aware anchor-based planner for UAV navigation in cluttered environments.
---
{% include figure.html image='/assets/images/projects/saga-framework.webp' width=1647 height=808 alt='Published SAGA architecture with anchor-aligned feature encoding, self-attention, goal modulation, and trajectory decoding' caption='SAGA architecture. Source: Wei et al., arXiv:2605.02301, Figure 1.' %}

## Research question

How can a local planner reason jointly over several possible motions while keeping trajectory generation computationally compact?

## Method

SAGA takes a depth image and a body-frame motion state as inputs. A fixed lattice of motion anchors provides candidate directions. Anchor-aligned visual features become tokens, and self-attention reasons across these candidates.

Polar positional encoding retains directional structure. Goal-aware modulation incorporates velocity, acceleration, and target information before the planner predicts terminal-state refinements and scores. The selected candidate is decoded into a dynamically feasible trajectory.

## Evaluation setting

The paper reports evaluations in cluttered pillar-map environments and comparisons with planning baselines and an ablation without polar positional encoding. The project page summarizes the research method; it does not attribute the reported results to the physical UAVs pictured on this website.

<div class="text-links"><a href="{{ '/research/#aerial' | relative_url }}">Aerial robotics →</a><a href="{{ '/publications/#kio-planner' | relative_url }}">Related work: KIO-planner →</a></div>
