import os
import json
from typing import Any, Dict, Optional

import requests


class VeoClient:
    def __init__(self) -> None:
        self.api_key = os.getenv("VEO_API_KEY", "")
        self.model = os.getenv("VEO_MODEL", "veo")
        self.base_url = os.getenv("VEO_BASE_URL", "")
        self.default_duration = int(os.getenv("DEFAULT_VIDEO_DURATION_SECONDS", "8"))
        self.default_aspect_ratio = os.getenv("DEFAULT_VIDEO_ASPECT_RATIO", "9:16")

    def _headers(self) -> Dict[str, str]:
        return {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
        }

    def generate_video(
        self,
        prompt: str,
        duration_seconds: Optional[int] = None,
        aspect_ratio: Optional[str] = None,
        image_url: Optional[str] = None,
    ) -> Dict[str, Any]:
        if not self.api_key:
            raise ValueError("Missing VEO_API_KEY")
        if not self.base_url:
            raise ValueError("Missing VEO_BASE_URL")

        payload: Dict[str, Any] = {
            "model": self.model,
            "prompt": prompt,
            "duration_seconds": duration_seconds or self.default_duration,
            "aspect_ratio": aspect_ratio or self.default_aspect_ratio,
        }
        if image_url:
            payload["image_url"] = image_url

        response = requests.post(self.base_url, headers=self._headers(), data=json.dumps(payload), timeout=300)
        response.raise_for_status()
        data = response.json()

        video_url = data.get("video_url") or data.get("url") or data.get("output_url")
        job_id = data.get("job_id") or data.get("id")

        return {
            "provider": "veo",
            "model": self.model,
            "raw": data,
            "video_url": video_url,
            "job_id": job_id,
        }
