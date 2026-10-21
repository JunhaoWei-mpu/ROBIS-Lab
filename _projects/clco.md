---
title: CLCO
category: Intelligent computing and optimization
publication: clco
description: Coordination Core-Ligand Collaborative Optimizer for numerical optimization and path planning.
home_summary: A chemistry-inspired optimizer connecting numerical search with robot, UAV, and satellite path planning and constrained engineering design.
home_image: /assets/images/projects/clco-workflow.webp
home_image_width: 1200
home_image_height: 1243
home_image_alt: CLCO algorithm cycle showing candidate search, ligand exchange, and central solution updates
source: https://research.mpu.edu.mo/en/publications/coordination-core-ligand-collaborative-optimizer-clco-a-chemistry/
---

{% include figure.html image='/assets/images/projects/clco-workflow.webp' width=1200 height=1243 alt='CLCO optimization workflow with four chemistry-inspired search mechanisms and a central solution update' caption='CLCO algorithm workflow. Li et al., Advanced Engineering Informatics, 2026, Figure 3. © 2026 Elsevier Ltd.' %}

## Research question

How can a population-based optimizer balance broad exploration with local refinement as the search dimension increases?

## Method

CLCO treats candidate solutions as interacting ligands around a central solution. Its search operators draw on coordination field formation, crystal field splitting, Jahn–Teller distortion, and ligand exchange. These operators update the candidates and the current best solution throughout the search.

## Application settings

The paper studies numerical benchmark functions, routes for mobile robots, UAVs and cooperating satellites, and constrained engineering design.

<div class="text-links"><a href="{{ '/research/#computing' | relative_url }}">Intelligent computing and optimization →</a></div>
