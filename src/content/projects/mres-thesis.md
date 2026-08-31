---
title: "Compressive Streaming for Geospatial Pipelines"
description: "MRes thesis on beating main-memory bandwidths for geospatial computation via cache-optimised in-memory data compression, implemented in C++ with AVX256."
category: "cambridge"
image: "/images/projects/mres-thesis.png"
featured: true
featuredOrder: 1
active: true
order: 1
tags: ["C++", "Python", "Slurm", "GDAL", "AVX256"]
bullets:
  - "Accelerated geospatial computation by applying SIMD compression to keep data close to CPU caches, fusing compute into the decoding stage."
  - "Achieved up to 2x speedups over state-of-the-art on real workloads (NDVI)."
  - "Involved micro-optimisation with CPU-cache and branch-predictor trade-offs, and tuning on a HPC."
  - "Utilised SLURM to manage HPC resources, benchmarking at scale (>8k hours)."
  - "Applied multi-objective Pareto optimisation to narrow the search space of codec combinations for optimal space-vs-time tradeoffs."
  - "Awarded 78% (Distinction) for the thesis."
  - 'Featured on the <a href="https://www.cst.cam.ac.uk/research/eeg/compressive-streaming-geospatial-pipelines" target="_blank" rel="noopener noreferrer">Cambridge Computer Science department''s website</a>.'
  - 'Ongoing: extending the technique to a broad set of real geospatial datasets (Landsat, Sentinel, SRTM, ETOPO1, WorldClim) and to nonlinear multi-band kernels (NDVI), with speedups approaching the compression-ratio limit under concurrency. See <a href="https://app.notion.com/p/Compressive-streaming-technical-artifacts-3a3a3aa2474380d9bd21f196614990b1?source=copy_link" target="_blank" rel="noopener noreferrer">recent technical reports</a>. A paper is in preparation.'
links:
  - label: "View Code"
    url: "https://github.com/omarathon/compression-geospatial"
  - label: "Read Report"
    url: "https://github.com/omarathon/mres/blob/main/mres_project.pdf"
  - label: "Cambridge CS Feature"
    url: "https://www.cst.cam.ac.uk/research/eeg/compressive-streaming-geospatial-pipelines"
  - label: "Recent Technical Reports"
    url: "https://app.notion.com/p/Compressive-streaming-technical-artifacts-3a3a3aa2474380d9bd21f196614990b1?source=copy_link"
---
