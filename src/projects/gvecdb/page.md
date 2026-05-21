---
---

# gvecdb

a hybrid graph/vector database I built from scratch in OCaml for my cambridge CS dissertation. the idea was to combine vector similarity search with graph traversals in a single storage engine rather than bolting separate systems together.

- [github.com/olifog/gvecdb-ocaml](https://github.com/olifog/gvecdb-ocaml)

## what's in it

- MVCC concurrency control from scratch (multi-version, snapshot isolation) so readers never block writers
- HNSW indexing for approximate nearest-neighbor search, implemented from the paper rather than wrapping a library
- AVX-512 SIMD vectorized distance kernels via OxCaml's unboxed types compiler extension, which lets you get C-level performance out of OCaml without FFI
- memory-mapped storage engine with crash-consistent B-tree indexes and a custom memory allocator
- benchmarked against FAISS and pgvector to see where it sits performance-wise
