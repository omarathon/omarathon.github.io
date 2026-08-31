---
title: "Physics Simulation Optimisation"
description: "Optimised a two-dimensional computational fluid dynamics simulator."
category: "warwick"
image: "/images/projects/aca-physics-sim.jpg"
order: 3
tags: ["C", "OpenMP"]
bullets:
  - "Implemented low-level optimisation techniques on the C code, making it run in 1/10th of the original time (~80s to ~7s)."
  - "Parallelised via multi-threading with OpenMP and vectorisation with SSE intrinsics, after removing inter-loop dependencies."
  - "Applied general optimisation techniques such as loop unrolling, loop fusion & fission, precomputing static conditionals, and removing unexecuted code."
---
