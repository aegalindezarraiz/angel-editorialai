# Providers Layer

This directory contains provider adapters for:
- image generation
- text generation
- video generation

## Current adapters
- anthropic_claude_client.py
- nano_banana_client.py
- veo_client.py

## Design
Each adapter should:
- read credentials from environment variables
- expose one main generate method
- normalize outputs into a predictable schema
- avoid leaking provider-specific details to the orchestrator

## Note
Provider endpoints and request fields may require adjustment depending on the final API specification in use.
