# Provider Output Schemas

## Text Output
- provider
- model
- text
- raw

## Image Output
- provider
- model
- image_url
- raw

## Video Output
- provider
- model
- video_url
- job_id
- raw

## Rule
All provider adapters should normalize outputs into these fields so the orchestrator can remain provider-agnostic.
