from providers.anthropic_claude_client import AnthropicClaudeClient
from providers.nano_banana_client import NanoBananaClient
from providers.veo_client import VeoClient


def run_example() -> None:
    text_client = AnthropicClaudeClient()
    image_client = NanoBananaClient()
    video_client = VeoClient()

    text_result = text_client.generate_text(
        system_prompt="You are a strategic content writer.",
        user_prompt="Write a high-value LinkedIn post about authority and trust.",
    )

    image_result = image_client.generate_image(
        prompt="High-end editorial portrait with premium branding aesthetics",
        negative_prompt="low quality, blurry, distorted",
    )

    video_result = video_client.generate_video(
        prompt="Create a short premium vertical brand video about authority and trust in business",
        image_url=image_result.get("image_url"),
    )

    print("TEXT:\n", text_result.get("text"))
    print("IMAGE URL:\n", image_result.get("image_url"))
    print("VIDEO URL:\n", video_result.get("video_url"))


if __name__ == "__main__":
    run_example()
