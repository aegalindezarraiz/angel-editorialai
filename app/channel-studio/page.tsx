import { PageHeader } from '@/components/page-header';
import { ChannelTabs } from '@/components/channel-tabs';
import { channelAssets } from '@/mock-data/channel-studio';

export default function ChannelStudioPage() {
  return (
    <div>
      <PageHeader
        title="Channel Studio"
        subtitle="Review, edit, and prepare platform-native assets for LinkedIn, Instagram, TikTok, and Blog from one unified editorial workspace."
        actions={
          <>
            <button className="button primary">Approve Assets</button>
            <button className="button">Open Version History</button>
          </>
        }
      />

      <ChannelTabs channels={["LinkedIn", "Instagram", "TikTok", "Blog"]} active="LinkedIn" />

      <div className="card-grid">
        <div className="card span-6">
          <h3>LinkedIn Assets</h3>
          <div className="stack">
            {channelAssets.linkedin.map((asset) => (
              <div className="card" key={asset.id}>
                <h4>{asset.title}</h4>
                <p className="muted">{asset.body}</p>
                <div className="small muted">CTA</div>
                <div>{asset.cta}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card span-6">
          <h3>Instagram</h3>
          <div className="small muted">Carousel Slides</div>
          <div className="stack" style={{ marginTop: 12 }}>
            {channelAssets.instagram.carousel.map((slide, index) => (
              <div className="list-row" key={index}>
                <div>Slide {index + 1}</div>
                <div className="muted small">{slide}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16 }}>
            <div className="small muted">Caption</div>
            <p>{channelAssets.instagram.caption}</p>
          </div>
          <div>
            <div className="small muted">Reel Concept</div>
            <p>{channelAssets.instagram.reel}</p>
          </div>
        </div>

        <div className="card span-6">
          <h3>TikTok</h3>
          <div className="small muted">Hook Bank</div>
          <div className="stack" style={{ marginTop: 12 }}>
            {channelAssets.tiktok.hooks.map((hook) => (
              <div className="list-row" key={hook}>
                <div>{hook}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16 }}>
            <div className="small muted">Script</div>
            <p>{channelAssets.tiktok.script}</p>
          </div>
          <div>
            <div className="small muted">CTA</div>
            <p>{channelAssets.tiktok.cta}</p>
          </div>
        </div>

        <div className="card span-6">
          <h3>Blog Source Asset</h3>
          <div className="small muted">Title</div>
          <p>{channelAssets.blog.title}</p>
          <div className="small muted">Meta Description</div>
          <p>{channelAssets.blog.meta}</p>
          <div className="small muted">Summary</div>
          <p>{channelAssets.blog.summary}</p>
        </div>
      </div>
    </div>
  );
}
