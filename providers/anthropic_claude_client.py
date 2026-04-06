import os
import json
from typing import Any, Dict, Optional

import requests


class AnthropicClaudeClient:
    def __init__(self) -> None:
        self.api_key = os.getenv("ANTHROPIC_API_KEY", "")
        self.model = os.getenv("ANTHROPIC_MODEL", "claude")
        self.base_url = os.getenv("ANTHROPIC_BASE_URL", "https://api.anthropic.com/v1/messages")
        self.max_tokens = int(os.getenv("DEFAULT_TEXT_MAX_TOKENS", "1800"))

    def _headers(self) -> Dict[str, str]:
        return {
            "x-api-key": self.api_key,
            "anthropic-version": "2023-06-01",
            "content-type": "application/json",
        }

    def generate_text(self, system_prompt: str, user_prompt: str, temperature: float = 0.4) -> Dict[str, Any]:
        if not self.api_key:
            raise ValueError("Missing ANTHROPIC_API_KEY")

        payload: Dict[str, Any] = {
            "model": self.model,
            "max_tokens": self.max_tokens,
            "temperature": temperature,
            "system": system_prompt,
            "messages": [
                {"role": "user", "content": user_prompt}
            ],
        }

        response = requests.post(self.base_url, headers=self._headers(), data=json.dumps(payload), timeout=120)
        response.raise_for_status()
        data = response.json()

        text_chunks = []
        for item in data.get("content", []):
            if isinstance(item, dict) and item.get("type") == "text":
                text_chunks.append(item.get("text", ""))

        return {
            "provider": "anthropic",
            "model": self.model,
            "raw": data,
            "text": "\n".join(chunk for chunk in text_chunks if chunk).strip(),
        }
