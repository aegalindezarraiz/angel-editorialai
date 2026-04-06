# Main Interface Design

## Product Goal
Provide one command center for planning, generating, reviewing, packaging, and publishing multi-format content.

## Primary Layout

### Left Sidebar
Persistent navigation:
- Dashboard
- New Mission
- Content Pipeline
- Channel Studio
- Trend Radar
- Calendar
- Asset Library
- Analytics
- Memory
- Settings

### Main Workspace
Dynamic workspace driven by current mode.

### Right Context Panel
Adaptive panel showing:
- mission metadata
- active agents
- status
- warnings
- approvals needed
- connected channels

## Core Screens

### 1. Dashboard
Purpose:
- show current pipeline state
- surface active missions
- show trend alerts
- show scheduled posts
- show performance summary

Widgets:
- mission queue
- approval queue
- trend radar snapshot
- channel health
- weekly publishing calendar
- top-performing hooks

### 2. New Mission
Purpose:
Create a new content mission.

Fields:
- mission title
- strategic objective
- target audience
- offer or topic
- selected channels
- content type priority
- tone profile
- CTA goal
- due date
- autonomy mode

Actions:
- analyze mission
- save draft
- launch workflow

### 3. Content Pipeline
Purpose:
Visualize execution stages.

Stages:
- intake
- trend scan
- research
- thesis
- source asset
- channel assets
- QA
- packaging
- scheduled
- published
- analyzed

Each stage card shows:
- responsible agent
- current status
- blockers
- output preview
- retry option

### 4. Channel Studio
Purpose:
Review and edit platform-specific assets.

Tabs:
- LinkedIn
- Instagram
- TikTok
- Blog

Each tab shows:
- generated asset list
- editable copy
- visual brief or media plan
- CTA options
- version history
- publish readiness

### 5. Trend Radar
Purpose:
Display real-time social and market signals.

Modules:
- rising topics
- rising hooks
- competitor movements
- audience questions
- urgency score
- platform opportunity map

Actions:
- turn trend into mission
- save to idea bank
- generate fast response assets

### 6. Calendar
Purpose:
Manage publication schedule.

Views:
- day
- week
- month

Objects:
- scheduled assets
- channel filter
- campaign filter
- approval state

Actions:
- reschedule
- duplicate
- pause
- publish now

### 7. Asset Library
Purpose:
Store all outputs and source assets.

Filters:
- mission
- channel
- format
- approval status
- performance tier

### 8. Analytics
Purpose:
Review results and optimization guidance.

Views:
- by channel
- by campaign
- by format
- by hook
- by CTA

Panels:
- top winners
- weakest assets
- retention notes
- engagement patterns
- next-cycle recommendations

### 9. Memory
Purpose:
Expose system memory to the user.

Sections:
- winning hooks
- winning CTAs
- top themes
- audience language
- rejected patterns

### 10. Settings
Purpose:
Configure providers, channels, MCP servers, roles, and guardrails.

Sections:
- API keys and providers
- social accounts
- CMS integration
- QA thresholds
- brand voice
- autonomy controls

## Main Interface States
- empty state
- loading state
- agent working state
- approval required state
- failed stage state
- ready to publish state
- published state

## Main CTA Hierarchy
Primary CTAs:
- Launch Mission
- Approve Thesis
- Approve Assets
- Schedule Content
- Publish Now
- Analyze Results

## UX Principle
The interface must feel like an operations room, not a generic text generator.
It should make the multi-agent system visible, controllable, and auditable.
