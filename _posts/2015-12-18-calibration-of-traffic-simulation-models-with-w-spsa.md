---
title: Calibration of traffic simulation models with W-SPSA
permalink: /calibration-of-traffic-simulation-models-with-w-spsa/
---

The development and calibration of complex traffic models demands parsimonious techniques, because such models often involve hundreds of thousands of unknown parameters. The Weighted Simultaneous Perturbation Stochastic Approximation (W–SPSA) algorithm has been proven more efficient than its predecessor SPSA, particularly in situations where the correlation structure of the variables is not homogeneous. This is crucial in traffic simulation models where effectively some variables (e.g. readings from certain sensors) are strongly correlated, both in time and space, with some other variables (e.g. certain OD flows). In situations with reasonably sized traffic networks, the difference is relevant considering computational constraints. However, W–SPSA relies on determining a proper weight matrix (W) that represents those correlations, and such a process has been so far an open problem, and only heuristic approaches to obtain it have been considered.  
In this seminar, W–SPSA is presented in a formally comprehensive way, where effectively SPSA becomes an instance of W–SPSA, and explores alternative approaches for determining the matrix W. It is demonstrated that, relying on a few simplifications that marginally affect the final solution, W matrices that considerably outperform SPSA can be obtained. The performance of the proposed algorithm is presented in two applications in motorway networks in Singapore and Portugal, using a dynamic traffic assignment model and a microscopic traffic simulator, respectively.

[\[2015\] “W–SPSA in practice: Approximation of weight matrices and calibration of traffic simulation models”](http://www.sciencedirect.com/science/article/pii/S0968090X15001710)  
Antoniou, C., **Lima Azevedo, C.**, Lu, L., Pereira, F., Ben-Akiva, M. E. Transportation Research Part C, Volume 59, Pages 129–146.[\[pre-print\]](http://web.mit.edu/cami/Public/CLA_WSPSAinPractice_ISTTT_2015_preprint.pdf)

<iframe allowfullscreen frameborder="0" height="529" src="https://www.youtube.com/embed/WAWSIJsyBME?feature=oembed" width="940"></iframe>
