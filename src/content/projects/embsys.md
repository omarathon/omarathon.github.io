---
title: "Embedded Real-Time Activity Recognition"
description: "Designed and implemented a real-time activity classifier in C on a lightweight micro-controller, using an algorithm with just 83 bytes of RAM to distinguish gait-related activities from IMU data."
category: "cambridge"
image: "/images/projects/embsys.png"
order: 2
tags: ["C"]
bullets:
  - "Developed in C on a FRDM KL03 micro-controller with an MMA8451Q accelerometer."
  - "Ran within just 83 bytes of RAM, by stripping excess boot code and implementing real-time parameter updates."
  - "Used Gaussian distributions for stride timing with dynamic variance updates via Welford's algorithm and efficient CDF calculations using the Abramowitz and Stegun approximation."
  - "The algorithm successfully differentiated between walking, jogging, and running based on stride duration probabilities."
links:
  - label: "View Code"
    url: "https://github.com/omarathon/Warp-firmware/blob/cw4-code-impl/src/boot/ksdk1.1.0/devMMA8451Q.c"
  - label: "Read Report"
    url: "https://github.com/omarathon/mres/blob/main/emb_sys_project.pdf"
---
