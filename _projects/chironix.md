---
title: Chironix X1
category: Mobile manipulation
description: An integrated mobile, lifting, dual-arm engineering prototype for research on motion planning and demonstration data collection.
---
{% include figure.html image='/assets/images/platforms/chironix-demonstration.webp' width=1355 height=895 alt='Chironix X1 at a platform demonstration' caption='The Chironix X1 engineering prototype at an in-person demonstration.' %}

## Research setting

Chironix connects a mobile base, lifting structure, dual arms, and multi-camera perception in a single physical system. It provides a research setting for mobile manipulation, coordinated planning, and robot demonstration data collection.

## Hardware and software

The X1 engineering prototype has completed assembly and system integration. Its software uses a ROS2 Humble architecture with separately developed modules for perception, navigation, arm motion, task execution, and data collection.

Three synchronized RGB-D streams support teleoperation-based data collection. Demonstrations are organized using HDF5/LeRobot conventions to support subsequent learning research.

## Current capabilities

The project documentation reports hardware validation of the teleoperation data pipeline, LiDAR-based autonomous navigation, and dual-arm motion planning. These provide a foundation for further work on coordinated mobile manipulation.

## Ongoing development

The D1 dual-arm work unit and M1 mobile lifting platform are undergoing modular refinement. Mechanical, power, and communication quick-change interfaces, together with automatic joint calibration, remain in development.

Imitation learning, diffusion policies, and VLA methods are research directions for the demonstration pipeline. The current platform description does not imply that every proposed policy has completed training or physical deployment.

<div class="text-links"><a href="{{ '/platforms/#chironix' | relative_url }}">Hardware overview →</a><a href="{{ '/research/#manipulation' | relative_url }}">Manipulation research →</a><a href="{{ '/people/' | relative_url }}">Meet the team →</a></div>
