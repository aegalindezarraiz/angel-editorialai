import os
import json
from typing import Any, Dict, Optional

import requests


class NanoBananaClient:
    def __init__(self) -> None:
        self.api_key = os.getenv("NANO_BANANA_API_KEY", "")
        self.model = os.getenv("NANO_BANANA_MODEL", "nano-banana")
        self.base_url = os.getenv("NANO_BANANA_BASE_URL", "")
        self.default_size = os.getenv("DEFAULT_IMAGE_SIZE", "1024x1024")

    def _headers(self) -> Dict[str, str]:
        return {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
        }

    def generate_image(
        self,
        prompt: str,
        negative_prompt: Optional[str] = None,
        size: Optional[str] = None,
        reference_image_url: Optional[str] = None,
    ) -> Dict[str, Any]:
        if not self.api_key:
            raise ValueError("Missing NANO_BANANA_API_KEY")
        if not self.base_url:
            raise ValueError("Missing NANO_BANANA_BASE_URL")

        payload: Dict[str, Any] = {
            "model": self.model,
            "prompt": prompt,
            "size": size or self.default_size,
        }
        if negative_prompt:
            payload["negative_prompt"] = negative_prompt
        if reference_image_url:
            payload["reference_image_url"] = reference_image_url

        response = requests.post(self.base_url, headers=self._headers(), data=json.dumps(payload), timeout=180)
        response.raise_for_status()
        data = response.json()

        image_url = data.get("image_url") or data.get("url") or data.get("output_url")
        images = data.get("images", [])
        if not image_url and isinstance(images, list) and images:
            first = images[0]
            if isinstance(first, dict):
                image_url = first.get("url")

        return {
            "provider": "nano_banana",
            "model": self.model,
            "raw": data,
            "image_url": image_url,
        }
