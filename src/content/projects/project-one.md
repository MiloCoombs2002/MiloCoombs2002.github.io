## Continuous Neural Networks — A Variational Reframing of Learning

This project reimagines neural networks not as stacks of discrete layers, but as **continuous integral operators** acting on functions.

Instead of weight matrices, we learn a **weight kernel** W(s, t).  
Instead of backpropagation over parameters, we minimize an **action functional** — inspired by the principle of least action in physics.

Under linear activation, the optimal weight function satisfies a **Fredholm integral equation**, the continuous analogue of the normal equation in regression.  
In special cases, the model admits **closed-form solutions** via Euler–Lagrange equations — revealing learning as a solvable variational problem rather than purely iterative optimization.

The work draws connections between:
- functional analysis  
- PDEs and Green’s functions  
- projection operators (W² = W)  
- Hilbert space geometry  
- and operator-theoretic interpretations of deep learning  

The central question is simple but radical:

> Are “layers” fundamental — or just artifacts of discretization?

This project explores the possibility that a **single global transformation field** may replace deep stacks of matrices — reframing learning as smooth operator evolution rather than heuristic depth.

A physics-inspired foundation for machine learning — analytical where possible, numerical where necessary.

---

[See the full thing here](https://drive.google.com/file/d/1ZfWVMXujHrTwy44fuVZy7Kxdd7-VB6mG/view)
