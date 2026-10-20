---
title: ARIES-Mission2
category: Aerial mission generation
publication: aries-mission2
description: Connecting language instructions and satellite imagery with structured UAV route planning.
---
{% include figure.html image='/assets/images/projects/aries-framework.webp' width=1858 height=992 alt='Published ARIES-Mission2 framework showing task parsing, visual grounding, geographic waypoints, and route optimization' caption='ARIES-Mission2 framework. Source: Wei et al., arXiv:2608.12763, Figure 1.' %}

## Research question

How can a UAV mission generator use the semantic understanding of multimodal models while retaining explicit geographic route optimization?

## Framework

ARIES-Mission2 separates visual-semantic interpretation from route planning. A language model parses the task instruction, and a vision-language model grounds targets in satellite imagery. The resulting image locations are converted into geographic waypoints.

The back end formulates multi-target traversal as a traveling salesperson problem. It compares the model-generated visiting order with routes produced by particle-swarm search variants and selects the lowest-cost closed route among these candidates.

## Research scope

The paper evaluates aerial mission generation on the UAV-VLPA-nano-30 benchmark. This project concerns mission planning from imagery and instructions; the hardware photographs elsewhere on this website document ROBIS platforms and are not presented as flight-validation evidence for this paper.

<div class="text-links"><a href="{{ '/research/#aerial' | relative_url }}">Aerial robotics →</a><a href="{{ '/research/#embodied' | relative_url }}">Embodied intelligence →</a></div>
