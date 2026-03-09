## Spectral Paths — Learning Structured Functions Without Black-Box Optimisation

This project explores an alternative view of supervised learning:  
instead of training opaque models through gradient descent, we can **construct structured approximations directly from the geometry of the input space**.

The approach begins by transforming features into an angular representation and expressing functions through **directional spectral components**.  
Rather than building a full tensor product basis, the model searches for a small set of **spectral paths** — structured directions through the space of harmonic interactions that capture the dominant structure of the data.

In this view, learning becomes a problem of **selecting and combining interpretable basis functions**, rather than training millions of parameters through iterative optimisation.

The work draws inspiration from:

- spectral methods and orthogonal polynomial bases  
- approximation theory in high dimensions  
- directional representations of multivariate functions  
- structured sparsity and greedy basis construction  
- geometric interpretations of tabular learning  

The central question is simple:

> Can complex tabular relationships be reconstructed from a small number of structured spectral components?

Spectral Paths explores a model that is **deterministic, interpretable, and analytically grounded** — aiming to bridge classical approximation theory and modern machine learning.

---

**I'll be publishing the paper soon so stay tuned!**