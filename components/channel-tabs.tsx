type ChannelTabsProps = {
  channels: string[];
  active: string;
};

export function ChannelTabs({ channels, active }: ChannelTabsProps) {
  return (
    <div className="button-row" style={{ marginBottom: 16 }}>
      {channels.map((channel) => (
        <button key={channel} className={channel === active ? 'button primary' : 'button'}>
          {channel}
        </button>
      ))}
    </div>
  );
}
