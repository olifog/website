---
---

# stardust

an embeddable hybrid graph-vector database in C++ that I built during the YC summer fellowship. the core idea is combining vector similarity search with labeled property graph traversals in a single engine rather than having separate vector and graph stores that need to talk to each other.

- [github.com/olifog/stardust](https://github.com/olifog/stardust)
- built on LMDB for persistence with Cap'n Proto for zero-copy serialization
- concurrent HNSW-based ANN search integrated with graph traversals
- designed for RAG pipelines where you need both vector similarity and structured relationships between documents
